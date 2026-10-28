---
title: 题解：【YACS 2021 年 5 月月赛 丙组】植树造林
tags:
  - C艹
  - YACS精选
category: 题解
image: tree.png
description: 【YACS 2021 年 5 月月赛 丙组】植树造林 的题解。
published: 2024-06-27 20:25:33
permalink: editorial-yacs436
updated: 2026-04-11 11:52:56
---

[题目 Link](https://iai.sh.cn/problem/436)

<!--more-->

---

考虑到老师不能砍树，所以最少补种树就是把剩下那二位的种树数补成最多的那位。

这里介绍个小语法：

```cpp
max({a, b, c});
max(max(a, b), c);
```

两行代码都是在求 $a, b, c$ 的最大值，但是第二个是两两求，第一个是整体求，稍微方便一点。

---

AC Code：

```cpp
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

int a, b, c;

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
 a = read<int>(), b = read<int>(), c = read<int>();
 write<int>(3 * max({a, b, c}) - (a + b + c));
 return 0;
}
```

[AC 记录~](https://iai.sh.cn/submission/1155794)
