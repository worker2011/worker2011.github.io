---
title: 题解：【YACS 2022年 1 月月赛 丙组】 平衡括号
tags:
  - C艹
category: 题解
image: P1029.png
description: 洛谷 P1029 [NOIP2001 普及组] 最大公约数和最小公倍数问题的题解。
published: 2024-06-03 21:50:03
permalink: editorial-luogup1029
updated: 2026-10-03 22:29:45
---

提供一种快速做法（31ms）~

<!--more-->

------------

首先，枚举是必须的，但是可以快速枚举。

优化 1： 众所周知 $\gcd(a, b) \times \operatorname{lcm}(a, b) = a \times b$，所以我们只需要枚举 $a$ 就好了。

优化 2：$a$ 最大也只用到 $\sqrt{x \times y}$，因为分析样例解释发现以后的都是重复的，只是换了个顺序而已，算 $2$ 遍即可。

优化 3：$a$ 可以从 $x$ 开始枚举，因为再小了最大公因数就没有 $x$ 了。

优化 4：每次可以加 $x$，因为余数有可加性，$x \equiv 0 (\bmod \hspace{0.1cm} x)$，所以能够保证最大公约数不低于 $x$。

优化 5：$x \ge 2$，所以 $a \ge y \div 2$ 时就不用枚举了。

结束~ ~~个 dir 啊~~

因为出事儿了……

下面这组数据阁下又该如何应对？

```
100 100
```

寄~

因为 $\sqrt{x * y}$ 的值若是整数按照刚才的逻辑会被算 $2$ 遍，然鹅换了个顺序还是这俩，不能重复计算啊！特判一下就得了……

------------


ACCode：

```cpp
// Problem: P1029 [NOIP2001 普及组] 最大公约数和最小公倍数问题
// Contest: Luogu
// URL: https://www.luogu.com.cn/problem/P1029
// Memory Limit: 125 MB
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

int x, y, ans;

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
	x = read<int>(), y = read<int>();
	for (int i = x; i * i <= x * y && i < y >> 1; i += x)
		if (!(x * y % i) && gcd(i, x * y / i) == x) ans += 2;
	if (x == y) ans = 1;
	write<int>(ans);
	return 0;
}

```

[AC 记录~](https://www.luogu.com.cn/record/161223825)

理解万岁！
