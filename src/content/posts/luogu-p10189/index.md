---
title: 'P10189 [USACO24FEB] Maximizing Productivity B 题解'
tags: 
- C艹
- USACO
categoriy: 题解
image: P10189.png
published: 2024-02-29 20:56:04
updated: 2026-10-27 22:43:14
description: 讲解了二分解决 USACO 2024 二月场的铜组题目 Maximizing Productivity。
---

先说说暴力做法：

每次遍历一遍，看看是否满足 $t_i + s \le c_i$，满足就计数，不满足就挂。单次时间复杂度显然为 $O(N)$，总得时间复杂度约为 $O(NQ)$，TLE 是肯定的~

<!--more-->

暴力代码：

```cpp
// Problem: Problem 3. Maximizing Productivity
// Contest: USACO - USACO 2024 February Contest, Bronze
// URL: https://usaco.org/index.php?page=viewproblem&cpid=1385
// Memory Limit: 256 MB
// Time Limit: 4000 ms
//
// Powered by CP Editor (https://cpeditor.org)

/*Code by Block_Fish*/
#include <bits/stdc++.h>

#define log printf
#define EPS 1e-8
#define INF 0x3f3f3f3f
#define FOR(i, l, r) for (int(i) = (l); (i) <= (r); ++(i))
#define IOS                      \
	ios::sync_with_stdio(false); \
	cin.tie(nullptr);            \
	cout.tie(nullptr);

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<int, int> PII;

const int N = 2e5 + 10;
int n, q, c[N], t[N];

template <typename T>

inline T read() {
	T sum = 0, fl = 1;
	char ch = getchar();
	for (; !isdigit(ch); ch = getchar())
		if (ch == '-') fl = -1;
	for (; isdigit(ch); ch = getchar()) sum = sum * 10 + ch - '0';
	return sum * fl;
}

template <typename T>

inline void write(T x) {
	static T sta[35];
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

int main() {
	n = read<int>(), q = read<int>();
	FOR(i, 1, n) c[i] = read<int>();
	FOR(i, 1, n) t[i] = read<int>();
	FOR(i, 1, q) {
		int v = read<int>(), s = read<int>(), cnt = 0;
		FOR(j, 1, n) if (s + t[j] < c[j])++ cnt;
		if (cnt >= v) puts("YES");
		else puts("NO");
	}
	return 0;
}
```

[评测记录](https://www.luogu.com.cn/record/148786459)，开了优化也只有 20pts。

---

暴力废了，开始整正解。

$2 \times 10^5$？二分法，了解一下？

然后，然后遇到了个问题：二分这东西要求有序，可是 $c_i$ 与 $t_i$ 是绑定在一起的啊！咋整？

注意 $c_i$ 与 $c_i - t_i$ 没关系，而这个式子能够求出啥啊？想要去到第 $i$ 个农场最大的 $S$ 嘛（$c_i - t_i + t_i = c_i$，刚好卡点儿到，不可能再晚了）！

总结一下，问题相当于预处理出来一个数组 $a$，使 $a_i = c_i - t_i$，求数组中是否有至少 $V$ 个数满足 $a_i \ge S$。

先排个序（不然还是 $O(n)$ 嘛），然后就可以分出来两种做法：

做法一：二分，用 `upper_bound` 函数（因为是大于等于），时间复杂度约为 $O(QlogN)$。

做法二：排完序后显然满足 $a_V \ge a_{V - 1} \ge a_{V - 2} ... a_1$，因此如果 $a_V$ 都小于等于 $S$ 了，那它前面的自然也都满足。因此只需要判断 $a_V \ge S$ 成不成立即可。时间复杂度约为 $O(Q)$。

赛时 ACCode（做法二）:

```cpp
// Problem: Problem 3. Maximizing Productivity
// Contest: USACO - USACO 2024 February Contest, Bronze
// URL: https://usaco.org/index.php?page=viewproblem&cpid=1385
// Memory Limit: 256 MB
// Time Limit: 4000 ms
//
// Powered by CP Editor (https://cpeditor.org)

/*Code by Block_Fish*/
#include <iostream>
#include <algorithm>  // 万能头CE

#define log printf
#define EPS 1e-8
#define INF 0x3f3f3f3f
#define FOR(i, l, r) for (int(i) = (l); (i) <= (r); ++(i))
#define IOS                      \
	ios::sync_with_stdio(false); \
	cin.tie(nullptr);            \
	cout.tie(nullptr);

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<int, int> PII;

int N, Q;
int close[200010], t[200010], ans[200010], V, S;

template <typename T>

inline T read() {
	T sum = 0, fl = 1;
	char ch = getchar();
	for (; !isdigit(ch); ch = getchar())
		if (ch == '-') fl = -1;
	for (; isdigit(ch); ch = getchar()) sum = sum * 10 + ch - '0';
	return sum * fl;
}

template <typename T>

inline void write(T x) {
	static T sta[35];
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

bool x(int a, int b) { return a > b; }

int main() {
	cin >> N >> Q;
	for (int i = 1; i <= N; i++) { cin >> close[i]; }
	for (int i = 1; i <= N; i++) { cin >> t[i]; }
	for (int i = 1; i <= N; i++) { ans[i] = close[i] - t[i]; }
	sort(ans + 1, ans + N + 1, x);
	while (Q--) {
		cin >> V >> S;
		if (ans[V] > S) cout << "YES" << endl;
		else cout << "NO" << endl;
	}
	return 0;
}
```

[AC记录~](https://www.luogu.com.cn/record/148784245)
