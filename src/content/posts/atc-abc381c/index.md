---
title: '题解：AT_abc381_c [ABC381C] 11/22 Substring'
tags: 
- C艹
- AtCoder
- AtCoder Beginner Contest
category: 题解
image: ABC381C.png
published: 2024-11-23 22:24:02
updated: 2026-10-27 20:41:27
description: AtCoder Beginner Contest 381 的 C 题 11/22 Substring 题解。
---

显然这个“11/22 Substring”是以那个“/”为中心对称的。鉴于一个这样的字符串只能有一个“/”，而题目又要求最长，**所以确定了“/”就能确定一个满足要求的子串**。

那思路就很简单了，只有两步：

1. 找到所有的“/”

2. 两边**同时**寻找相应的子串。

别的，除了判断一下越界之外，就不用管了。

---

ACCode：

```cpp
/*Code by Block_Fish
*/
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

int n, ans;
string s;

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
	cin >> n >> s;
	for (int i = 0; i < n; ++i) {
		if (s[i] == '/') {
			int l = i - 1, r = i + 1, len = 1;
			while (l >= 0 && r < n)
				if (s[l] == '1' && s[r] == '2') --l, ++r, len += 2;  // 左右同时寻找，所以是 +2
				else break;  // 不满足了及时break
			ans = max(ans, len);
		}
	}
	write<int>(ans);
	return 0;
}

```

[AC 记录~](https://www.luogu.com.cn/record/190717875)

理解万岁！
