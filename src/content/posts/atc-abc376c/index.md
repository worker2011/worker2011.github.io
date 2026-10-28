---
title: '题解：AT_abc376_c [ABC376C] Prepare Another Box'
tags: 
- C艹
- AtCoder
- AtCoder Beginner Contest
category: 题解
image: ABC376C.png
published: 2024-10-20 14:12:45
updated: 2026-10-27 21:23:14
description: 二分答案解决 AtCoder Beginner Contest 376 的 C 题 Prepare Another Box。
---

很好的一道二分答案题。

听说 CSP 考前写 tj 可以让 rp += inf？

注：下文中 $w$ 指物品重量序列，$x$ 指箱子容量序列。

---

先问个问题：为什么我上来就敢肯定这是个二分答案题？

或者说，单调性在哪儿？

非常简单：如果一个盒子的容量越大，能装下的东西就更多（废话）。那么如果 $v$ 不够用，可以扩大容量变成 $v + 1, v + 2 \cdots 10^9$。因为 $10^9$ 是上限不能再大了。

所以就可以准备二分啦~

---

问2：你怎么 check 这个答案呢？

题目告诉我们，一共只有 $n$ 个箱子，而物品也有 $n$ 个，而且一个箱子最多放一个物品，**因此物品与箱子必须一一对应，不可以有空箱子**。

其次，只有 $w_i \le x_j$ 时第 $i$ 个物品才能放进第 $j$ 个箱子。那么结论就出来，**排完序**之后，要求对于 $\forall 1 \le i \le n$，要求 $w_i \le
x_i$，否则会导致箱子空掉，然后就不满足刚才的条件了 QaQ。

所以，思路就出来了：

1. 二分新增箱子容量
   
2. 扫一遍，看看新增后是否合法

总的时间复杂度是 $O(n \log k)$，其中 $k = 10 ^ 9$。

然后，然后就结束啦~

---

ACCode:
```cpp
/*Code by Block_Fish*/
#include <bits/stdc++.h>

#define INF 0x3f3f3f3f
#define EPS 1e-8
#define FOR(i, l, r) for (int(i) = (l); (i) <= (r); ++(i))
#define log printf
#define IOS                      \
	ios::sync_with_stdio(false); \
	cin.tie(nullptr);            \
	cout.tie(nullptr);

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<int, int> PII;

const int N = 2e5 + 10;
int n, a[N], b[N], c[N];

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

int chk(int q) {
	b[n] = q;
	sort(b + 1, b + n + 1);
	FOR(i, 1, n) if (a[i] > b[i]) {
		for (int j = 1; j < n; ++j) b[j] = c[j];
    // 注意要清空数组，因为排序会打乱顺序，因此不能直接将b[n]设为0，只能新开数组重新复制了 QwQ
		return false;
	}
	for (int j = 1; j < n; ++j) b[j] = c[j];
	return true;
}

int main() {
	n = read<int>();
	for (int i = 1; i <= n; i++) scanf("%d", &a[i]);
	for (int i = 1; i < n; i++) scanf("%d", &b[i]), c[i] = b[i];  // 是<哦~
	sort(a + 1, a + n + 1);
	int l = 1, r = 1e9, ret = -1;  // 要求箱子是正整数个，从 1 开始
	while (l <= r) {
		int mid = (l + r) >> 1;
		if (chk(mid)) {
			ret = mid;
			r = mid - 1;
		} else l = mid + 1;
	}
	write<int>(ret);
	return 0;
}
```

[AC 记录~](https://atcoder.jp/contests/abc373/submissions/58244308)

理解万岁！
