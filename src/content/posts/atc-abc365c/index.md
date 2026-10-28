---
title: '题解：AT_abc365_c [ABC365C] Transportation Expenses '
tags: 
- C艹
- 洛谷精选
- AtCoder
- AtCoder Beginner Contest
category: 题解
image: ABC365C.png
published: 2024-08-03 22:14:28
updated: 2026-10-27 20:49:12
description: 用二分答案做法解决 AtCoder Beginner Contest 365 的 C 题 Transportation Expenses。
---

:::tip
注：为了方便，下文以 $Sum$ 表示 $\sum_{i = 1}^{n} A_i$。
:::

---

$N = 2 \times 10^5$，考虑二分答案。

<!--more-->

所以，答案有单调性吗？或者说，可以二分吗？

当然！如果 $x = k$ 时可以满足条件，那么 $x = k - 1$ 时显然只会更少（上面取 $\min$ 的基本都没变，变了的取了更少的），一样能满足条件。

$\operatorname{check}$ 函数怎么写？扫一遍嘛，时间复杂度 $O(n)$，鉴于后面是 $\log$ 级别的复杂度这里就算暴力扫也超不了。

这样我们只需要考虑二分的上下界就好了。最低直接让 $x = 0$ 好了，最高肯定不会超过 $Sum$（超了那还了得？多的钱幽灵拿了？），就以此为界二分吧！

等等，我们漏了一个很重要的情况！那就是——无！解！

啥时候可以取到无限啊？

按照题意，需要的钱数最大也只有 $Sum$ 这么多，如果这还不到 $m$，即 $Sum \le m$，那么 $x$ 自然可以随便取，反正钱数都没它啥事儿……

还有一点，上面这一大堆东西时间复杂度到底是多少呢？

显然时间复杂度为 $\Theta(N \log Sum)$。感觉会超？注意时间限制是 2s ！~~拿计算器摁一下~~，最大值（两项都取到最大）大概是 $9.5 \times  10^7$，不会超~

然后就真的结束了……

---

ACCode:
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
ll m, n, a[N], sum;

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

inline bool chk(ll q) {
	ll sum = 0;
	FOR(i, 1, n) {
		sum += min(q, a[i]);
		if (sum > m) return 0;
	}
	return sum <= m;
}

int main() {
	scanf("%lld%lld", &n, &m);
	FOR(i, 1, n) scanf("%lld", &a[i]), sum += a[i];
	if (sum <= m) {
		log("infinite");
		return 0;
	}
	ll l = 0, r = sum, ret = -1;
	while (l <= r) {
		ll mid = (l + r) >> 1;
		if (chk(mid)) {
			ret = mid;
			l = mid + 1;
		} else r = mid - 1;
	}
	log("%lld\n", ret);
	return 0;
}
```

[AC 记录~](https://atcoder.jp/contests/abc365/submissions/56324104)

理解万岁！
