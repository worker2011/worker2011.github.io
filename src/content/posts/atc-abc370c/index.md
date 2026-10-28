---
title: '题解：AT_abc370_c [ABC370C] Word Ladder'
tags: 
- C艹
- AtCoder
- AtCoder Beginner Contest
category: 题解
image: ABC370C.png
published: 2024-09-07 21:51:03
updated: 2026-10-27 21:18:12
description: 利用双端队列结合贪心解决 AtCoder Beginner Contest 370 的 C 题 Word Ladder。
---

# 说句闲话

这题是一个比较奇葩的贪心、构造。也可以认为是一个数据结构略有难度的练习题。

# 理论部分

:::tip
注：以下使用 $N$ 表示字符串长度。
:::


一~~句~~段话题意：三个字符串 $S$、$T$、$X$，其中 $S$ 和 $T$ 仅包含小写字母且等长，$X$ 为空。每一个操作可以把对应的 $S_i$ 修改为 $T_i$，但需要把**改完后的**整个 $S$ 加进 $X$ 里，求最少步数及方案，要求方案最后得到的 $X$ 字典序最小。

这咱办呢？首先是等长的，所以只需要修改一定能达成——每次把不对应的修改成对应的不就可以了？因此步数很好求：不匹配的位置的个数。

现在问题就是怎样最小？

首先能够明确的是：既然等长，那么开头最小字符串最小，正常不都是这么比较的吗（

比如说，字符串 $S = \texttt{abc}$ 和 $T = \texttt{abd}$，前面 $\texttt{ab}$ 相同，$\texttt{b} < \texttt{c}$，因此 $S < T$。

这样子就好办了：目标最小，那么就把它改的尽量小嘛。

如何尽量小？~~兜圈子呢。~~

首先肯定是越改越小好，不然你越改越大在小还不如先改小的呢是吧~

如果想要尽量小，那么肯定是要先改前面的且是改小的；后面往大了改的同理，先改后面的在改前面的。

这句话比较绕，也是这个思路的核心。总结一下其实就是把这 $N$ 个位置分成三类，如下：

1. $S_i = T_i$，完全一致，不用管
   
2. $S_i > T_i$，越改越小，优先改，越早出现的越优先改
   
3. $S_i < T_i$，越改越大，最后改，而且越晚出现的越后改。

以上的规则基于题目规则，$S_i$ 表示 $S$ 中某字符，$T_i$ 同理。两条更改的规则是因为越往前的越需要把它停留在小的状态，因此越改越小优先改，越改越大则先改后面的。

还是举个例子。

$S = \texttt{xay}, T = \texttt{abe}$，我们想要尽量小，那么按照这个逻辑，先筛出最往小了改的，就是第一个和最后一个位置。它们当中第一个位置最前，因此先改它，$S$ 变为 $\texttt{aay}$，然后是第三个位置，变成 $\texttt{aae}$，最后在去改第二个位置，变成 $\texttt{abe}$。

---

# 时间复杂度分析

这个算法是 $O(N ^ 2)$ 的，而且本题最优解的最坏时间复杂度也是这个值。

为什么？因为最坏情况下我们需要对每一个位置进行更改，而每次输出这个长度，因此输出就是这个复杂度，没法优化了。

~~我才不会告诉你我冒充这是个 $O(N)$ 算法结果被学长发现了才写这一段的。~~

---

ACCode with 注释：

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

int ret, len;
deque<int> a, b;
string s, t;

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
	IOS;
	cin >> s >> t;
	len = s.size();
	for (int i = 0; i < len; ++i)
	if (s[i] != t[i]) {
		++ret;
		if (s[i] < t[i]) b.push_front(i);  /* 考场留下的写法，这一行是说要往大了改的放到 b 里，而且越后出现的越先改*/
		else a.push_back(i);  /*同上，反过来*/
    	/*这里之所以用 deque 主要是因为统一：下面可以统一使用 front 而不用在倒腾 front 和 back*/
	}
	cout << ret << endl;
	while (!a.empty()) {  /*先处理 a 改小*/
		s[a.front()] = t[a.front()];
		cout << s << endl;
		a.pop_front();  /*一定要pop*/
	}
	while (!b.empty()) {  /*再处理 b 改大*/
		s[b.front()] = t[b.front()];
		cout << s << endl;
		b.pop_front();
	}
	return 0;
}
```

[AC 记录~](https://atcoder.jp/contests/abc370/submissions/57537505)

理解万岁！
