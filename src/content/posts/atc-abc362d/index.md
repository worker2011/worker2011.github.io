---
title: 题解：AT_abc362_d [ABC362D] Shortest Path 3
tags: 
- C艹
- AtCoder
- AtCoder Beginner Contest
category: 题解
image: ABC362D.png
published: 2024-07-13 22:51:24
updated: 2026-10-20 21:16:57
description: 巧妙略改利用 Dijkstra 解决 AtCoder Beginner Contest 362 的 D 题 Shortest Path 3。
---

一句话题意：给定一个带点权的有权无向连通图，求点 1 到所有其它点的最短路径。

<!--more-->

首先，只有 1 一个起点，所以是单源最短路，又因为最大是  $2 \times 10^5$，所以是优先队列（堆）优化过后的 Dijkstra。

所以，我们只需要解决点权的问题就好了。一种显而易见的想法是把与这条边的边权加上起终点的点权，因为走这条边肯定是要过这两个点的。但这样有个问题：样例都过不了（或许是我写挂了？反正只过了样例 2）！为啥呢？

你从 1 走到 2，再从 2 走到 3，你这点 2 的点权不就算重了？

那该咋办呢？

其实你不用改边权，对 Dijkstra 做一点小改动即可。什么小改动呢？每次走边的时候加上终点的点权，这样子就方便算、判断了。注意不能加起点的，因为起点是固定的，你算它跟没算一样。

比如还是从 1 到 2 再到 3，你每条边再加上点 2、3 的点权，就不会出事了。

但注意此时点 1 的点权还没算，输出时加上就好。

---

ACCode:

```cpp
// Problem: D - Shortest Path 3
// Contest: AtCoder - Toyota Programming Contest 2024#7（AtCoder Beginner Contest 362）
// URL: https://atcoder.jp/contests/abc362/tasks/abc362_d
// Memory Limit: 1024 MB
// Time Limit: 2000 ms
//
// Powered by CP Editor (https://cpeditor.org)

/*Code by Block_Fish*/
#include <bits/stdc++.h>

#define log printf
#define EPS 1e-8
#define INF 0x3f3f3f3f3f3f3f3f
#define FOR(i, l, r) for (ll(i) = (l); (i) <= (r); ++(i))
#define IOS                      \
	ios::sync_with_stdio(false); \
	cin.tie(nullptr);            \
	cout.tie(nullptr);

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<ll, ll> PII;

const ll N = 1e6 + 10;
ll m, n, s, x, y, z, a[N], w[N], to[N], idx, dis[N], nxt[N], head[N];

struct line {
	ll u, d;
	bool operator<(const line &cmp) const { return d > cmp.d; }
};
priority_queue<line> q;

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
	ll top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

inline void init() {
	memset(head, -1, sizeof(head));
	memset(dis, 0x3f, sizeof(dis));
}

inline void addEdge(ll u, ll v, ll q) {
	w[idx] = q;
	to[idx] = v;
	nxt[idx] = head[u];
	head[u] = idx;
	idx++;
}

void dijkstra(ll s) {
	dis[s] = 0;
	q.push({s, 0});
	while (!q.empty()) {
		line f = q.top();
		q.pop();
		ll u = f.u;
		if (f.d > dis[u]) continue;
		for (ll i = head[u]; i != -1; i = nxt[i]) {
			ll v = to[i];
			if (dis[u] + w[i] + a[v] < dis[v]) {
				dis[v] = dis[u] + w[i] + a[v];  // 把要去的点的点权算上
				q.push({v, dis[v]});
			}
		}
	}
}

int main() {
	init();
	n = read<ll>(), m = read<ll>(), s = 1;
	FOR(i, 1, n) a[i] = read<ll>();
	FOR(i, 1, m) {
		x = read<ll>(), y = read<ll>(), z = read<ll>();
		addEdge(x, y, z), addEdge(y, x, z);
	}
	dijkstra(s);
	FOR(i, 2, n)
	write<ll>(dis[i] + a[1]), putchar(' ');  // 除了起点都有了，所以要加上起点
	return 0;
}
```

[AC 记录~](https://www.luogu.com.cn/record/165844276)

理解万岁！
