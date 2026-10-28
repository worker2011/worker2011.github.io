---
title: 'P10111 [GESP202312 七级] 纸牌游戏 题解'
tags:
  - C艹
  - 洛谷精选
  - GESP
category: 题解
image: P10111.png
published: 2024-03-13 22:21:38
updated: 2026-10-27 22:39:34
description: 讲解了如何用 DP 解决 GESP202312 七级题目洛谷 P10111 纸牌游戏。
---

~~看标签~~知道要用 DP。

<!--more-->

于是开始分析。

状态：$dp(i, j, k) = $ 前 $i$ 轮中，第 $i$ 轮出 $j$，一共换了 $k$ 次牌的最大钱数。很好理解。

转移也不难，不就是不换和换两种吗！

所以，转移就是：
$$dp(i, j, k) = \max \begin{cases}dp(i - 1, j, k) + \operatorname{pk}(j, c_i) \times a_i\\ dp(i - 1, j', k - 1) + \operatorname{pk}(j, c_i) \times a_i - b_k\end{cases}$$
其中，$j'$ 表示你要换的牌，显然要求 $j' \neq j$，$\operatorname{pk}(x, y)$ 表示你出牌 $x$，小杨出 $y$ 时的胜负情况。胜返回 $2$，负返回 $0$，平返回 $1$。上面就是不还，下面就是换。

观察发现，获胜时要么大 $1$，要么小 $2$（因为此处“$0 > 2$”）。

所以 $\operatorname{pk}$ 函数如下：

```cpp
int pk(int x, int y) {
	if (x == y) return 1;
	if (x == y + 1 || x == y - 2) return 2;
	return 0;
}
```


---

以上为朴素做法。还能不能优化呢？滚动数组嘛！这玩意儿不就是专门给其中一维是“前 $i$ 回……”的 DP 状态砍掉这维的嘛！

于是用上滚动数组（这个不会的去看背包），空间复杂度就可以降到 $\Theta(3N)$ 啦！

---

用上滚动数组的：

```cpp
// Problem: P10111 [GESP202312 七级] 纸牌游戏
// Contest: Luogu
// URL: https://www.luogu.com.cn/problem/P10111
// Memory Limit: 512 MB
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

const int N = 1010;
int n, a[N], b[N], c[N], dp[3][N], ans = -INF;

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
	if (x < 0) putchar('-'), write<T>(-x);
	static T sta[35];
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

int pk(int x, int y) {
	if (x == y) return 1;
	if (x == y + 1 || x == y - 2) return 2;
	return 0;
}

int main() {
	n = read<int>();
	FOR(i, 1, n) a[i] = read<int>();
	FOR(i, 1, n - 1) b[i] = read<int>();
	FOR(i, 1, n) c[i] = read<int>();
	memset(dp, -0x3f, sizeof(dp));
	FOR(i, 0, 2) dp[i][0] = pk(i, c[1]) * a[1];
	FOR(i, 2, n)
	for (int j = i - 1; j >= 0; --j) FOR(k, 0, 2) {
			int s = pk(k, c[i]) * a[i];
			dp[k][j] += s;	  // 默认不换
			if (j > 0)		  // 防止越界
				FOR(l, 0, 2)  // 换，换成 l
			dp[k][j] = max(dp[k][j], dp[l][j - 1] + s - b[j]);
		}
	FOR(i, 0, n - 1)
	FOR(j, 0, 2) ans = max(ans, dp[j][i]);
	log("%d", ans);
	return 0;
}
```
