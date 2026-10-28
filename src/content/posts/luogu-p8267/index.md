---
title: '题解：P8267 [USACO22OPEN] Counting Liars B & U208878 晴天'
tags: 
- C艹
- USACO
category: 题解
image: P8267.png
published: 2024-05-25 21:50:30
updated: 2026-10-27 22:56:50
description: 讲解了如何用枚举和二分解决 USACO 2022 年公开赛的铜组题目 Counting Liars 及其加强版洛谷U208878 晴天。
---

其实，这个题，只需要最简单的枚举，加上最简单的二分查找即可~

<!--more-->

------------

$1 \le N \le 1000$？枚举吧~

咋枚举？显然，最好状态下 Bessie 的位置一定是某个 $p_i$，否则差一个就会导致有个奶牛要说谎。所以我们枚举（理论来讲要先去个重，这样快一点，不过貌似数据没有重的~）$p_i$，每次遍历这帮奶牛看看有多少不说实话的不就得了？时间复杂度显然 $O(n ^ 2)$。

AC Code：

```cpp
// Problem: P8267 [USACO22OPEN] Counting Liars B
// Contest: Luogu
// URL: https://www.luogu.com.cn/problem/P8267
// Memory Limit: 256 MB
// Time Limit: 2000 ms
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

const int N = 1010;
int n, t[N], ans = INF;
vector<int> pls;
char op[N];

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
	if (x < 0) {
		putchar('-'), write<T>(-x);
		return;
	}
	static T sta[35];
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

int main() {
	IOS cin >> n;
	FOR(i, 1, n) {
		cin >> op[i] >> t[i];
		pls.push_back(t[i]);  // 数组 p
	}
	unique(pls.begin(), pls.end());  // 去重
	for (auto i : pls) {
		int tmp = 0;
		FOR(j, 1, n) if ((op[j] == 'L' && i > t[j]) || (op[j] == 'G' && i < t[j]))++ tmp;  // 满足条件就过
		ans = min(ans, tmp);
	}
	write<int>(ans);
	return 0;
}
```

[AC 记录~](https://www.luogu.com.cn/record/159996872)

------------

本来该消停了，直到我在[讨论区里](https://www.luogu.com/discuss/426035)发现了个[加强版](https://www.luogu.com.cn/problem/U208878)。

加强版把 $N$ 上调至 $2 \times 10^5$，显然，刚才的方法挂了。[实测](https://www.luogu.com.cn/record/160026884) 确实不行。咋办？

~~注意看标签得到~~ 二分。外面显然没法优化，里边可以不？

必须滴！

你查找‘L’中说谎的，不就是在查小于这玩意儿的吗？你查找‘G’当中说谎的，不就是再查大于这玩意儿的吗？小于的直接 `lower_bound`，大于的就相当于总数 - 小于等于的，也就是总数 - `upper_bound`。

时间复杂度显然为 $\Theta(N \log N)$，可以过。

完。

---

AC Code：

```cpp
// Problem: U208878 晴天
// Contest: Luogu
// URL: https://www.luogu.com.cn/problem/U208878
// Memory Limit: 128 MB
// Time Limit: 1000 ms
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
int n, t, ans = INF;
vector<int> pls, lhs, rhs;
char op;

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
	if (x < 0) {
		putchar('-'), write<T>(-x);
		return;
	}
	static T sta[35];
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

int main() {
	IOS cin >> n;
	FOR(i, 1, n) {
		cin >> op >> t;
		pls.push_back(t);
		if (op == 'L') lhs.push_back(t);
		else rhs.push_back(t);
	}
	sort(pls.begin(), pls.end());
	sort(lhs.begin(), lhs.end());
	sort(rhs.begin(), rhs.end());
	for (auto i : pls) {
		int tmpg = rhs.size() - (upper_bound(rhs.begin(), rhs.end(), i) - rhs.begin()), tmpl = lower_bound(lhs.begin(), lhs.end(), i) - lhs.begin();
		cerr << i << ' ' << tmpg << ' ' << tmpl << endl;
		ans = min(ans, tmpg + tmpl);
	}
	write<int>(ans);
	return 0;
}

```

[AC 记录（加强版）~](https://www.luogu.com.cn/record/160099171)
