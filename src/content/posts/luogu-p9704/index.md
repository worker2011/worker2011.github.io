---
title: 题解：P9704 「TFOI R1」Tree Home
tags:
  - C艹
  - 洛谷精选
category: 题解
image: P9704.png
published: 2025-08-07 10:12:32
updated: 2026-05-20 21:07:26
permalink: editorial-luogup9704
description: 带有完整推公式过程的洛谷 P9704 「TFOI R1」Tree Home 一题题解，使用 ST 表。
---

> [!WARNING] WARNING
> 本文会带你保姆级推公式，应该是题解中推公式最详细的一篇~~才不是因为我数学和 OI 都太菜了~~，因而用到了大量数学公式，可能会加载较慢，请耐心等待。

挺逆天的一道数学题。

这个 $f$ 函数有 $3$ 个参数明显不好处理，那我们拿出做初一化简求值题的感觉直接化简：

$$
\begin{align*}
& f(a, b, c) = [a - b](a^2 + b^2 + ab + 3ac + 3bc + 3c^2) \\
& = a(a^2 + b^2 + ab + 3ac + 3bc + 3c^2) - b(a^2 + b^2 + ab + 3ac + 3bc + 3c^2) \\
& = (a^3 + ab^2 + a^2b + 3a^2c + 3abc + 3ac^2) - (a^2b + b^3 + ab^2 + 3abc + 3b^2c + 3bc^2)\\
& = a^3 + ab^2 + a^2b + 3a^2c + 3abc + 3ac^2 - a^2b - b^3 - ab^2 - 3abc - 3b^2c - 3bc^2 \\
& = a^3 + 3a^2c + 3ac^2  - b^3 - 3b^2c - 3bc^2
\end{align*}
$$

这个部分很简单，乘法分配律然后去括号抵消一些项就好了。

接着把 $a = d_p - d_r, b = d_q - d_r, c = d_r$ 代入：

$$
\begin{align*}
& a^3 + 3a^2c + 3ac^2  - b^3 - 3b^2c - 3bc^2\\
& = (d_p - d_r) ^ 3 + 3(d_p - d_r)^2d_r + 3(d_p - d_r)d_r^2 - (d_q - d_r)^3 - 3(d_q - d_r)^2d_r - 3(d_q - d_r)d_r^2\\
& = (d_p^3 - 3d_p^2d_r + 3d_pd_r^2 - d_r^3) + 3d_r(d_p^2 + d_r^2 - 2d_pd_r) + 3d_r^2d_p - 3d_r^3 - (d_q^3 - 3d_q^2d_r + 3d_qd_r^2 - d_r^3) - 3d_r(d_q^2 + d_r^2 - 2d_qd_r) - 3d_r^2d_q + 3d_r^3\\
& = d_p^3 - 3d_p^2d_r + 3d_pd_r^2 - d_r^3 + 3d_rd_p^2 + 3d_rd_r^2 - 6d_pd_r^2 + 3d_r^2d_p - 3d_r^3 - d_q^3 + 3d_q^2d_r - 3d_qd_r^2 + d_r^3 - 3d_rd_q^2 - 3d_r^3 + 6d_qd_r^2 - 3d_r^2d_q + 3d_r^3\\
& = (d_p^3 - d_q^3) + (3d_pd_r^2  - 6d_pd_r^2 + 3d_r^2d_p) + (d_r^3 - d_r^3) + (3d_rd_p^2 - 3d_p^2d_r) + (3d_r^3  - 3d_r^3)  + (3d_q^2d_r - 3d_rd_q^2) - (3d_qd_r^2 - 6d_qd_r^2 + 3d_r^2d_q) + (3d_r^3 - 3d_r^3)\\
& = d_p^3 - d_q^3
\end{align*}
$$

式子很长，但思路很简单，就是先用完全平方公式（$(a - b)^2 = a^2 + b^2 - 2ab$）和完全立方公式（$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$）以及乘法分配律代入替换拆括号（第一、二步）然后疯狂合并同类项发现基本都抵消了（第三步），然后就剩下了这么个~~可可爱爱~~简单的式子（暴力出奇迹.jpg）。

ps：有没有大佬有简单的方法化简呢？手敲 KaTeX 化简了十几分钟 Qwq。

说句闲话：原式中出现了大量的 $d_r$，化简完竟然和它无关……化简这个式子估计占了题目难度的一半。

于是题目要求的式子就是 $|d_p^3 - d_q^3| + |v_p - v_q|$。然后鉴于有绝对值，继续利用初一知识分类讨论，有以下四种情况：

原式（用 $S$ 表示）
$$
S=\max
\begin{cases}
d_p^3 - d_q^3 + v_p - v_q = (d_p^3 + v_p) - (d_q^3 + v_q) & (d_p > d_q \And v_p > v_q) \\
d_q^3 - d_p^3 + v_p - v_q  = (d_q^3 - v_q) - (d_p^3 - v_p) & (d_p < d_q \And v_p > v_q) \\
d_p^3 - d_q^3 + v_q - v_p  = (d_p^3 - v_p) - (d_q^3 - v_q) & (d_p > d_q \And v_p < v_q) \\
d_q^3 - d_p^3 + v_q - v_p  = (d_q^3 + v_q) - (d_p^3 + v_p) & (d_p < d_q \And v_p < v_q)
\end{cases}
$$

然后我们发现每个式子都有两个项下标一样，可以一起处理。于是我们令 $A_i = d_i^3 + v_i, B_i = d_i^3 - v_i$，然后把上面四个式子整理一下，分别是：

$$
\begin{align*}
A_p - A_q\\
B_q - B_p\\
B_p - B_q\\
A_q - A_p\\
\end{align*}
$$

如果需要最大化原式那么我们需要让被减数尽量大，减数尽量小。由于区间被指定了所以这说到底是个 RMQ，而由于没有修改因此可以通过 $4$ 个 ST 表维护。

终于我们有了最终思路：

1. 预处理出 $d$ 数组
2. 利用 ST 表查询
3. 比较得出结果

时间复杂度分为两部分，预处理 $d$ 数组可以用一个 dfs，时间复杂度 $O(n + m)$，由于是一棵树所以 $m = n - 1$，最终忽略常数复杂度就是 $O(n)$。ST 表预处理为 $O(n \log n)$，查询为 $O(1)$，可以通过。

---

ACCode（带注释）：

```cpp
/*Code by Block_Fish*/
#include <bits/stdc++.h>

#define INF 0x3f3f3f3f
#define EPS 1e-8
#define FOR(i, l, r) for (ll(i) = (l); (i) <= (r); ++(i))
#define log printf
#define IOS                      \
	ios::sync_with_stdio(false); \
	cin.tie(nullptr);            \
	cout.tie(nullptr);

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<ll, ll> PII;

const ll N = 2e5 + 10;
ll n, t, u, v, w, a[N], l1, l2, r1, r2, lg2[N], dis[N], st1[30][N], st2[30][N], st3[30][N], st4[30][N];
vector<PII> g[N];

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
	ll top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

// 4 个 ST 表，很长但是基本复制粘贴
void init() {
	lg2[2] = 1;
	FOR(i, 1, n) {
		st1[0][i] = st2[0][i] = dis[i] * dis[i] * dis[i] + a[i];
		st3[0][i] = st4[0][i] = dis[i] * dis[i] * dis[i] - a[i];
	}
	FOR(i, 3, n) lg2[i] = lg2[i >> 1] + 1;
	FOR(i, 1, lg2[n]) {
		ll len = 1 << i;
		FOR(j, 1, n - len + 1) {
			st1[i][j] = max(st1[i - 1][j], st1[i - 1][j + (len >> 1)]);
			st2[i][j] = min(st2[i - 1][j], st2[i - 1][j + (len >> 1)]);
			st3[i][j] = max(st3[i - 1][j], st3[i - 1][j + (len >> 1)]);
			st4[i][j] = min(st4[i - 1][j], st4[i - 1][j + (len >> 1)]);
		}
	}
}

// 好的函数命名可以方便写代码和调试
ll queryMax1(ll l, ll r) {
	ll k = lg2[r - l + 1], len = 1 << k;
	return max(st1[k][l], st1[k][r - len + 1]);
}

ll queryMin1(ll l, ll r) {
	ll k = lg2[r - l + 1], len = 1 << k;
	return min(st2[k][l], st2[k][r - len + 1]);
}

ll queryMax2(ll l, ll r) {
	ll k = lg2[r - l + 1], len = 1 << k;
	return max(st3[k][l], st3[k][r - len + 1]);
}

ll queryMin2(ll l, ll r) {
	ll k = lg2[r - l + 1], len = 1 << k;
	return min(st4[k][l], st4[k][r - len + 1]);
}

// 要先预处理出 d 数组
void dfs(ll now, ll fa) {
	for (auto v : g[now]) {
		if (v.first == fa) continue;
		dis[v.first] = dis[now] + v.second;	 // 要继承父亲的 d 然后加上自己的
		dfs(v.first, now);
	}
}

int main() {
	n = read<ll>(), t = read<ll>();
	FOR(i, 1, n) a[i] = read<ll>();
	FOR(i, 2, n) {
		u = read<ll>(), v = read<ll>(), w = read<ll>();
		g[u].push_back({v, w}), g[v].push_back({u, w});
	}
	dfs(1, -1);
	init();	 // ST 表和线段树都要初始化！
	while (t--) {
		l1 = read<ll>(), r1 = read<ll>(), l2 = read<ll>(), r2 = read<ll>();
		write<ll>(max({queryMax1(l1, r1) - queryMin1(l2, r2), queryMax1(l2, r2) - queryMin1(l1, r1), queryMax2(l1, r1) - queryMin2(l2, r2), queryMax2(l2, r2) - queryMin2(l1, r1)})), putchar('\n');  // 输出的 4 种情况取 max
	}
	return 0;
}
```

[AC 记录~](https://www.luogu.com.cn/record/229322796)

代码很长，但是非常模块化，写起来不是很慢。

理解万岁！
