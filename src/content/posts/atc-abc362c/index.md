---
title: '题解：AT_abc362_c [ABC362C] Sum = 0'
tags: 
- C艹
- AtCoder
- AtCoder Beginner Contest
category: 题解
image: ABC362C.png
abbrlink: 54719
published: 2024-07-13 22:03:47
updated: 2026-10-03 22:59:20
description: 讲解了零点存在性定理以及如何利用它解决 AtCoder Beginner Contest 362 的 C 题 Sum = 0。
---

很好写（15 min 解决）但不好讲（跟别人讲了 20 min）的写法 QwQ……

<!--more-->

---

首先，咱先算出原式的范围。最小值（暂且记为 $k$）的公式就是：
$$
k = \sum_{i = 1}^{N} L_i
$$
就是每一个最小可能值的和。

同理，最大值（我记为 $w$）的公式就是：
$$
w= \sum_{i = 1}^{N} R_i
$$
即最大可能值的和。

算这玩意儿有啥用呢？卡区间！

你说要是 $k > 0$ 或者 $w < 0$，即最小都比 $0$ 大或者最大都不到还能干成 $0$ 吗？肯定不能啊！这种情况就是 `No`。

剩下的鉴于大家都是整数，而且可以随便变化，一定是 `Yes`（注：其实这就是零点存在定理：当一个函数 f 在 $x \sim y$ 是连续时，如果 $f(x) < 0$ 但 $f(y) > 0$，那么一定有 $x < z < y$ 满足 $f(z) = 0$）。

所以该咋构造呢？

我们可以以 $k$ 为基准，往 $0$ 去凑。

具体来讲，就是：

$$
Ans_i = \begin{cases}R_i \ (left > R_i - L_i) \\ L_i + left \ (R_i \ge left + L_i)\end{cases}
$$

其中 $left$ 表示到 $0$ 的距离，也就是 $0 - k$。~~说人话~~翻译一下就是：

1. 能够直接凑完，那就直接凑完，然后就不用凑了。
2. 凑不完，能凑多少是多少，记得更新一下后面要凑的数目

比如样例 $1$:

经计算，$left = 3$，第一组（$3 \sim 5$）最多凑个 $2$，那就凑 $2$，输出 $5$，还剩个 $1$ 要凑。第二组（$-4 \sim 1$）最多能凑个 $5$，但 $1$ 就够了，输出 $-3$，不用凑了。最后一组，不用凑了，直接输出 $-2$。

算一下，$5 + (-3) + (-2) = 5 - 3 - 2 = 0$，满足条件。

注意：今天，你**开 long long** 了吗？

---

赛场 AC Code：

```cpp
// Problem: C - Sum = 0
// Contest: AtCoder - Toyota Programming Contest 2024#7（AtCoder Beginner Contest 362）
// URL: https://atcoder.jp/contests/abc362/tasks/abc362_c
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
ll n, l[N], r[N], lft, suml, sumr;

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
	n = read<ll>();
	FOR(i, 1, n) l[i] = read<ll>(), r[i] = read<ll>(), suml += l[i], sumr += r[i];
	if (!(suml <= 0 && sumr >= 0)) {
		cout << "No";
		return 0;
	}
	lft = 0 - suml;	 // 到0剩下的距离
	cout << "Yes" << endl;
	FOR(i, 1, n) {
		if (l[i] + lft <= r[i]) {
			cout << l[i] + lft << " ";
			lft = 0;
		} else {
			cout << r[i] << " ";
			lft -= r[i] - l[i];
		}
	}
	return 0;
}

```

[AC 记录～](https://www.luogu.com.cn/record/165839830)

理解万岁！
