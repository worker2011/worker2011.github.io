---
title: '题解：AT_abc352_c [ABC352C] Standing On The Shoulders'
tags: 
- C艹
- 洛谷精选
- AtCoder
- AtCoder Beginner Contest
category: 题解
image: ABC352C.png
published: 2024-05-04 21:58:09
updated: 2026-10-03 22:48:13
permalink: editorial-atabc352d
description: 讲解了如何利用解决 AtCoder Beginner Contest 352 的 c 题 Standing On The Shoulders。
---

考场憋了很久，最后代码贼短……

<!--more-->

------------

理想状态下，直接全排列解决问题。但是，$1 \le n \le 2 \times 10^5$，明显 TLE，试都不用试的。

咋优化呢？

其实，前面的巨人只负责“打地基”，作为“塔尖儿”的巨人有且仅有 1 个。而前面地基随便排列，地基高度（他们的和）都不会变。所以，我们只需要枚举塔尖即可。塔尖儿定了，下面的地基高度也就定了。

然后，又是一个问题——求和！理论来讲，最最暴力的方法就是一层循环。但是，一层循环时间复杂度为 $\Theta(n)$，联合上枚举塔尖的循环，时间复杂度为 $\Theta(n^2)$，又 TM 挂了……

这里，我们可以采用一种类似前缀和的思想：用一个 变量 $sum$（学名叫*累加器*） 来记录 $A$ 的总和，然后算去掉塔尖（$P_i$）的时候，答案就是 $sum - A_{P_i} + B_{P_i}$。这个操作，时间复杂度显然为 $\Theta(1)$，算上循环为 $\Theta(n)$，明显可以。

------------

赛场 ACCode：

```cpp
// Problem: C - Standing On The Shoulders
// Contest: AtCoder - AtCoder Beginner Contest 352
// URL: https://atcoder.jp/contests/abc352/tasks/abc352_c
// Memory Limit: 1024 MB
// Time Limit: 2000 ms
//
// Powered by CP Editor (https://cpeditor.org)

/*Code by Block_Fish*/
#include <bits/stdc++.h>

#define log printf
#define EPS 1e-8
#define INF 0x3f3f3f3f
#define FOR(i, l, r) for (ll(i) = (l); (i) <= (r); ++(i))
#define IOS                      \
	ios::sync_with_stdio(false); \
	cin.tie(nullptr);            \
	cout.tie(nullptr);

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<ll, ll> PII;

const ll N = 2e5 + 10;
ll n, mx = -INF, sum1;
PII g[N];  // pair 可以把两个数组怼到一块儿，具体使用方法见 https://blog.csdn.net/sevenjoin/article/details/81937695

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

int main() {
	n = read<ll>();  // 不开 long long 见**，别问，问就是实践出来的真知
	FOR(i, 1, n) g[i].first = read<ll>(), g[i].second = read<ll>(), sum1 += g[i].first;  // 累加器
	FOR(i, 1, n)
	mx = max(mx, sum1 - g[i].first + g[i].second);  // 上面简单的公式
	write<ll>(mx);
	return 0;
}

```

[AC 记录~](https://atcoder.jp/contests/abc352/submissions/53122314)

理解万岁！

------------

先别划走，说几件事儿。

1. 这道题可以用贪心（同学做法），但是，贪地基高度是错的，见[https://atcoder.jp/contests/abc352/submissions/53114017](https://atcoder.jp/contests/abc352/submissions/53114017)，贪心需谨慎啊！
2. 不开 long long 见**！
3. 一张~~绝世好~~很有用的图，可以收藏，拿走~![如图](https://cdn.luogu.com.cn/upload/pic/26845.png)
