---
title: 题解:【YACS 2020 年 3 月月赛 丙组】 数字加密
tags:
  - C艹
  - YACS精选
category: 题解
image: encrypt.png
description: 【YACS 2020 年 3 月月赛 丙组】 数字加密 的题解。
published: 2024-06-27 23:21:24
permalink: editorial-yacs14
updated: 2026-04-11 11:37:56
---

[题目 Link](https://iai.sh.cn/problem/14)

<!--more-->

---

先找规律，不难发现：

$$
\begin{align*}
0 + 9 = 9 \\\\
1 + 8 = 9 \\\\
2 + 7 = 9 \\\\
3 + 6 = 9 \\\\
9 + 0 = 9 \\\\
\end{align*}
$$

所以，对于最后一位的转换，只需要求出 $9 -$ 密文最后一位的值就是明文的值，不需要写那么复杂用一堆 if。

后面的倒推就可以了，无非就是两次交换。注意第一位可能是 0，所以建议用字符串存.

---

AC Code：

``` cpp
/*Code by Block_Fish*/

#include <bits/stdc++.h>

#define log printf
#define EPS 1e-8
#define INF 0x3f3f3f3f
#define FOR(i, l, r) for (int(i) = (l); (i) <= (r); ++(i))
#define IOS                      \
    ios::sync_with_stdio(false); \
    cin.tie(nullptr);            \
    cout.tie(nullptr);

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<int, int> PII;

string s, ans;

template <typename T>

inline T read() {
    T sum = 0, fl = 1;
    char ch = getchar();
	for (; !isdigit(ch); ch = getchar()) if (ch == '-') fl = -1;
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
	IOS;
	cin >> s;
	FOR(i, 0, 3) ans += '0' + (9 - (s[i] - '0'));
	swap(ans[0], ans[3]);
	swap(ans[1], ans[2]);
	cout << ans;
	return 0;
}
```

[AC 记录~](https://iai.sh.cn/submission/1154890)
