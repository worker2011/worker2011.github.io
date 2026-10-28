---
title: '题解：P11248 [GESP202409 七级] 矩阵移动'
tags:
  - C艹
  - 洛谷精选
  - GESP
category: 题解
image: /images/P11248.png
published: 2024-11-09 17:51:02
updated: 2026-10-27 23:06:07
description: 讲解了如何用 DP 解决 GESP 2024 年 9 月的七级题目「矩阵移动」。
---

笑点解析：这个人所在城市考试当天刮台风了，没考，免费送了一次 12 月的考试。

---

设计这么一个东西：

$dp_{i,j}$ 表示到格子 $(i, j)$ 的最大分数。

本来还好，但现在的问题是，如果这个格子是‘？’，我哪儿知道到底可不可以变啊？万一变得太多了，那，那不就废了！万一少了，那我分不就没了？

所以我们需要到底还剩多少次机会呢？不好办，没法儿处理。

其实加一维记录就可以了。

于是我得到了这个状态：

$dp_{i, j, k}$ = 到格子 $(i, j)$ 且已经使用了 $k$ 次机会的最大值。

转移也很好推：

不是‘？’：
$$
dp_{i, j, k} = 
\begin{cases} 
\max(dp_{i, j - 1, k}, dp_{i - 1, j, k}) + 1& (i, j) = 1\\
\max(dp_{i, j - 1, k}, dp_{i - 1, j, k})& (i, j) = 0\\
\end{cases}
$$

就是从两种可能的上一步转移过来，注意横竖均可。

是‘？’：

$$
dp_{i, j, k} = 
\begin{cases} 
\max(dp_{i, j - 1, k}, dp_{i - 1, j, k}) + 1& k = 0\\
\max(dp_{i, j - 1, k - 1}, dp_{i - 1, j, k - 1}) + 1& k > 0\\
\end{cases}
$$

同上，注意 $k = 0$ 时不能使用机会。而且可以变的话当然是变了更好，所以 $k > 0$ 时可以无脑使用。

---

AC Code:

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

const int N = 510, M = 310;
int m, n, t, x, a[N][N], dp[N][N][M], ans;  // dp[i][j][k] = (1, 1) 到(i, j)，已经使用了k次机会的最大值
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
	ll top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

int main() {
    IOS;
    cin >> t;
    while (t--) {
        cin >> n >> m >> x;
        FOR(i, 1, n) {
            cin >> s;
            for (int j = 0;j < m;++j) {
                if (s[j] == '?') a[i][j + 1] = -INF;
                else a[i][j + 1] = s[j] - '0';
            }
        }
        FOR(i, 1, n) FOR(j, 1, m) FOR(k, 0, x) {
              // 要用到 k - 1, 必须正序遍历。
            switch(a[i][j]) {
                case -INF:
                    if (k > 0) dp[i][j][k] = max(dp[i][j - 1][k - 1], dp[i - 1][j][k - 1]) + 1;
                    else dp[i][j][k] = max(dp[i][j - 1][k], dp[i - 1][j][k]);
                    break;
                case 1:
                    dp[i][j][k] = max(dp[i][j - 1][k], dp[i - 1][j][k]) + 1;
                    break;
                case 0:
                    dp[i][j][k] = max(dp[i][j - 1][k], dp[i - 1][j][k]);
                    break;
            }
        }
        FOR(i, 0, x) ans = max(ans, dp[n][m][i]);  // 不超过就是不一定，要遍历一遍
        cout << ans << endl;
        memset(dp, 0, sizeof(dp));
        memset(a, 0, sizeof(a));
        ans = -INF;
        // 多组数据要清空
    }
	return 0;
}

```

[AC 记录~](https://www.luogu.com.cn/record/187354256)

理解万岁！
