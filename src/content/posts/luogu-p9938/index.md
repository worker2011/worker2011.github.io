---
title: '题解：P9938 [USACO21OPEN] Acowdemia II B'
tags: 
- C艹
- USACO
category: 题解
image: P9938.png
published: 2024-08-29 14:51:17
updated: 2026-10-27 23:00:33
description: 讲解了不建图解决 USACO 2021 公开赛的铜组题目 Acowdemia II。
---

前言：原来的 tj 干了一堆什么建图啊之类的，但其实不要这么复杂。

<!--more-->

------------

注：下文中 $n$ 是各成员名字列表。

从 $K = 1$ 开整。如果情况是 $n_i < n_{i + 1}< \cdots < n_j$，那么显然，咱就不知道关于成员 $n_i,\cdots,n_j$ 的相对资历的信息。也许所有这帮成员都做出了相同的贡献。

但是捏，如果存在 $i$ 使得 $n_i > n_{ + 1}$，则成员 $n_i$ 肯定比成员 $n_{i + 1}$ 干了更多的活儿，因此所有成员 $n_1,\cdots,n_i$ 必须比成员 $n_{i + 1} \cdots n_N$ 的贡献少。换句话说，如果 $i < j$ 但 $n_i, n_{i + 1},\cdots,n_j$ 不是按字母顺序排列的，那么咱就知道 $n_i$ 肯定比 $n_j$ 资历浅了。

要是 $K > 1$ 捏？把信息怼起来不就得了？

------------

ACCode：

```cpp
// Problem: P9938 [USACO21OPEN] Acowdemia II B
// Contest: Luogu
// URL: https://www.luogu.com.cn/problem/P9938
// Memory Limit: 256 MB
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

int k, n;
string s;
map<string, int> members;

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
	if (x < 0) putchar('-'), x = -x;
	static T sta[35];
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

int main() {
	IOS cin >> k >> n;
	FOR(i, 0, n - 1)
	cin >> s, members[s] = i;
	vector<vector<char>> ans(n, vector<char>(n, '?')); // 全给我干成一个值，为了方便就用'?'
	FOR(i, 0, n - 1)
	ans[i][i] = 'B';  // 初始化一下，后面就不用搞了
	FOR(i, 0, k - 1) {
		vector<string> pub(n);
		FOR(j, 0, n - 1) cin >> pub[j];
		FOR(j, 0, n - 1) {
			bool flag = true;
			FOR(l, j + 1, n - 1) {
				if (pub[l - 1].compare(pub[l]) > 0) flag = false;
				if (!flag) {
					int a = members[pub[j]], b = members[pub[l]];
					ans[a][b] = '0';
					ans[b][a] = '1';  // 上面的过程
				}
			}
		}
	}
	FOR(i, 0, n - 1) {
		FOR(j, 0, n - 1) cout << ans[i][j];
		cout << endl;
	}
	return 0;
}
```
[AC记录~](https://www.luogu.com.cn/record/156700638)

理解万岁！
