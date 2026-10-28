---
title: 题解：AT_abc344_d [ABC344D] String Bags
tags: 
- C艹
- AtCoder
- 洛谷精选
category: 题解
image: ABC344D.png
published: 2024-03-10 21:58:27
updated: 2026-06-14 12:07:03
description: 讲解了如何利用 DP 解决 AtCoder Beginner Contest 344 的 D 题 String Bags。
permalink: editorial-atabc344d
---

前情提要：~~小 L~~积木鱼在某谷上第一篇过审的 tj！

明显是 DP。


然后就开始分析：

状态：$dp_{ij} =$ 有 $i$ 个袋子且匹配 $T$ 的前缀的长度为 $j$ 时所需的最少钱数。

匹配 $T$ 的前缀的长度为 $j$ 就是前 $j$  个字符与 $T$ 的前 $j$ 个字符相同。

相对简单。

---

然后看转移。为了方便，咱不妨令 $|S|$ 为字符串 $S$ 的长度，其它的同理。

假设是要将第 $i$ 个袋子里的字符串 $L$ 接到 $S$ 的末尾，那么就只有 $S_{|S|+1}$ 与 $S_{|S|+|L|)}$ 依次对应时才能从 $dp_{(i-1)|S|}$ 转移到 $dp_{i|L|}$。

为啥呢？

不对应那你接哪儿去了？不是说好接到末尾吗？那你问啥呢，浪费表情:-(

那我不选呢？

不选你 $j$ 不变不就得了？

所以，转移部分就是：

```cpp
for (int i = 0; i < n; i++) {
		for (int j = 0; j < 110; j++) dp[i + 1][j] = dp[i][j];  // 同步过去
		int m;
		cin >> m;
		while (m--) {
			...判断是否满足上面的条件
				if (满足) dp[i + 1][j + sl] = min(dp[i + 1][j + sl], dp[i][j] + 1);
			}
		}
	}
```

上面 `dp[i + 1][j + sl]` 就是不选，`dp[i][j] + 1` 就是选。

---

最后看一下时间复杂度。

$\Theta(NM|S|\cdot|T|)$。$M$ 为袋中字符串数量。

为啥？

你看我们上面的代码，不就是先遍历了一遍 $N$ 个袋子，再遍历字符串数量 $M$，每次判断相等挨个比较不就是 $|S|\cdot|T|$嘛。

结束~

---

ACCode:

```cpp
// Problem: D - String Bags
// Contest: AtCoder - 	Toyota Programming Contest 2024#3（AtCoder Beginner Contest 344）
// URL: https://atcoder.jp/contests/abc344/tasks/abc344_d
// Memory Limit: 1024 MB
// Time Limit: 2000 ms
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

const int N = 110;
int dp[N][N];  // dp[i][j] = 前 i 个袋子中匹配 T 的前缀长度为 j 时所需的最少钱数。
string t;

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
	if (x < 0) putchar('-'), write<T>(-x);
	static T sta[35];
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

int main() {
	IOS memset(dp, INF, sizeof(dp));
	dp[0][0] = 0;
	cin >> t;
	int tl = t.size(), n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < 110; j++) dp[i + 1][j] = dp[i][j];
		int m;
		cin >> m;
		while (m--) {
			string s;
			cin >> s;
			int sl = s.size();  // 比较
			for (int j = 0; j + sl <= tl; j++) {
				bool flag = true;
				for (int k = 0; k < sl; k++)
					if (t[j + k] != s[k]) {
						flag = false;
						break;
					}
				if (flag) dp[i + 1][j + sl] = min(dp[i + 1][j + sl], dp[i][j] + 1);  // 状态转移方程
			}
		}
	}
	if (dp[n][tl] > 5e8) dp[n][tl] = -1;  // 过大就是祭了
	cout << dp[n][tl] << "\n";
	return 0;
}
```

[AC记录~](https://www.luogu.com.cn/record/150332762)

理解万岁！
