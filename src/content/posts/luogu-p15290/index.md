---
title: 题解：P15290 [MCO 2023] Two Pointers (easy version)
tags:
  - C艹
  - 洛谷精选
category: 题解
image: firefly3.avif
published: 2026-08-03 11:33:46
updated: 2026-10-27 23:16:22
description: 讲解了如何解决洛谷 P15290。
---

# 闲话

神秘模拟赛放了马来西亚的题，不知道老师怎么找到的。

# 简要版题意

$A$ 和 $B$ 两个人，从两个地方访问 $n$ 个地点，**顺序无所谓**，且只要任何一个人访问过这个地点就算访问了。

求两人所走路径之和的最小值。

# Hints

先给一些提示问题，想出来了先去自己解决吧 :)。

Hint 1：**顺序无所谓**，那么我们可以干什么？

Hint 2：我们有 $2$ 个人，可否按照某种方式，让某些点由 $A$ 负责，另外一些由 $B$ 负责？

Hint 3：我们向某个方向通过一个点 $X$ 走向该方向的一个更远的点 $Y$，距离跟谁有关？

Hint 4：考虑结合 $A$ 和 $B$ 的位置，配合与各个目标的相对位置进行分类讨论。

# 完整版解答

顺序无所谓当然就直接排序啦！

同理，为了方便表述，我们不妨假设初始时 $A < B$，即 点 $A$ 在左侧。

排完序之后就可以进行分组了。由于我们不知道每个点分给谁更好，因此我们可以枚举 $1 \sim n$ 的每一个点 $i$ 进行分段，$1 \sim i$ 分给 $A$，$i + 1\sim n$ 分给 $B$。

一个非常 Naive 的想法是断点 $i$ 从最左侧开始挨个向右遍历，每次计算一下路程和的变化。

但是这样子就会卡很久——因为 $A$ 的位置取值范围太大了！

它可以在大家的左边，也可以是右边，还可以是这一段的中间。因此，讨论变化的话情况会比较多，很容易卡住。

![如图所示](https://cdn.luogu.com.cn/upload/image_hosting/1cjzgjh1.png)

那怎么办呢？我们考虑每次重新计算距离之和。

注意到我们如果在序列最左端的左侧，或者最右端的右侧，我们直接把序列走到头就全部齐活了。也就是说，如果方向固定，**我们只关心距离我们最远的点**，其它点对距离没有影响，去最远点的路上顺便就解决了。

而如果在序列中间的话，我们需要先向某个方向走到头覆盖所有这个方向的点，然后再掉头回去。为了最小化路程，我们选择距离我们更近的端点（因为这样返回增加的路程更少），然后再折返回去即可。

分成的两段每一段都是这个情况。因此我们可以抽象成一个函数处理。

# ACCode

似乎光讲着比较抽象，看代码会好理解很多。

```cpp
/*Code by Block_Fish*/
#include <bits/stdc++.h>

#define log printf
#define EPS 1e-8
#define INF 0x3f3f3f3f3f3f3f3f
#define FOR(i, l, r) for (ll i = l; i <= r; ++i)
#define IOS                      \
	ios::sync_with_stdio(false); \
	cin.tie(nullptr);
#define Buffer 1 << 23

char buf[Buffer], *p1 = buf, *p2 = buf, obuf[Buffer], *p3 = obuf;
#define getchar() (p1 == p2 && (p2 = (p1 = buf) + fread(buf, 1, Buffer, stdin), p1 == p2) ? EOF : *p1++)
#define putchar(x) (p3 - obuf < Buffer) ? (*p3++ = x) : (fwrite(obuf, p3 - obuf, 1, stdout), p3 = obuf, *p3++ = x)

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<ll, ll> PII;

const ll N = 2e5 + 10;
ll a, b, n, t, id[N], mn;

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
	static char sta[40];
	short top = 0;
	do { sta[top++] = (x % 10) + 48, x /= 10; } while (x);
	while (top) putchar(sta[--top]);
}

// 坐标为 i，求 l~r 的距离
inline ll dis(ll i, ll l, ll r) {
	if (i < id[l]) {												 // 比所有人都左
		return abs(id[r] - i);										 // 那就冲到最右边
	} else if (i > id[r]) {											 // 比所有人都右
		return abs(i - id[l]);										 // 那就冲到最左边
	} else {														 // 我在中间
		return min(abs(id[r] - i), abs(id[l] - i)) + id[r] - id[l];	 // 大家都要跑，具体看哪边开头更近我要折返一遍；全程都是要走的，不然无法覆盖
	}
}

int main() {
	t = read<ll>();
	while (t--) {
		n = read<ll>(), a = read<ll>() + 1000000000, b = read<ll>() + 1000000000;  // 全部加上 1e9 变成非负数
		if (a > b) swap(a, b);
		FOR(i, 1, n) id[i] = read<ll>() + 1000000000;
		sort(id + 1, id + n + 1);
		mn = min(dis(a, 1, n), dis(b, 1, n));  // 我不管别人跑完全程
		FOR(i, 1, n) {	// A:1~i B:i + 1 ~ n
			mn = min(mn, dis(a, 1, i) + dis(b, i + 1, n));  // A 一段 B 一段
		}
		write<ll>(mn), putchar('\n');
	}
	fwrite(obuf, p3 - obuf, 1, stdout);
	return 0;
}
```

时间复杂度（单次）就是排序和遍历枚举的复杂度 $O(n \log n + n)$，相当于就是 $O(n \log n)$，可以过。

[AC 记录~](https://www.luogu.com.cn/record/290357524)

理解万岁！
