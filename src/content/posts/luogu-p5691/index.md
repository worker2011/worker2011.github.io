---
title: 题解：P5691 [NOI2001] 方程的解数
tags:
  - C艹
category: 题解
permalink: editorial-luogup5691
published: 2026-05-02 10:31:53
image: P5961.png
description: 洛谷 P5691【NOI 2001】方程的解数一题的题解，使用折半搜索。
---

# 闲话

**与题解无关，可以略过。**

~~好久没更新了呢~~小 L （好吧为了避免暴露年龄现在在改网名了，新名字：Block_Fish，也可以叫积木鱼，此处感谢同学们和语音输入法的贡献）期中烤尸~~疑似~~重新回到了年级第一。

~~我才不会告诉你改 LG 用户名的时候打错了然后只能 2027 年再改了 QwQ。~~

目前在把博客切换成 [Astro](https://astro.build) + [FireFly](https://docs-firefly.cuteleaf.cn/) 的配置，迁移的时候顺便修一下以前文章的错误和低质量内容（积木鱼文章最大的特点就是~~顺其自然真情流露~~想到哪儿写到哪儿~）。

再见 Hexo！（以后积木鱼也会更文聊聊为啥要连框架都换了）。

# 思路分析

正文从此开始。

$150$ 的数据范围，又都是整数，确实可以想到枚举/搜索。

然鹅 $150^6 = 11,390,625,000,000 \approx 1.1 \times 10^{13}$ 绝对 T 飞了。

但是我们发现 $150 ^ 3 = 3,375,000 \approx 3.3 \times 10^6$ 稳稳得可以过。而复杂度指数上的砍半可以通过折半搜索来实现。

具体来说，我们只搜一半，例如前 $\dfrac{n}{2}$ 项。枚举完这么多之后得到的结果放进一个 `map` 里。后面的项同样枚举得到一个结果 $ret$，然后为了使整个式子的值是 $0$，即方程成立，我们只需要加上前面取 $-ret$ 的方法数即可，而这个东西可以直接从 `map` 里读。

由于前后两次是分开进行搜索的，所以总的复杂度（忽略较小的 `map`，更何况 `unordered_map` 可以 $O(1)$）就是 $O(2 \times n^{\frac{m}{2}})$，忽略常数 $2$ 之后最坏也就是 $150 ^ 3$。

具体实现可以看代码。

# 代码

~~个人感觉~~比你谷题解区里的都要清楚易懂一些。

```cpp
/*Code by Block_Fish*/  // 积木鱼依旧冗长的板子

#include <bits/stdc++.h>

#define log printf
#define EPS 1e-8
#define INF 0x3f3f3f3f
#define FOR(i, l, r) for (int i = (l); i <= (r); ++i)
#define IOS 					 \
	ios::sync_with_stdio(false); \
	cin.tie(nullptr);
#define Buffer 1 << 23

char buf[Buffer], *p1 = buf, *p2 = buf, obuf[Buffer], *p3 = obuf;
#define getchar() (p1 == p2 && (p2 = (p1 = buf) + fread(buf, 1, Buffer, stdin), p1 == p2) ? EOF : *p1++)
#define putchar(x) (p3 - obuf < Buffer) ? (*p3++ = x) : (fwrite(obuf, p3 - obuf, 1, stdout), p3 = obuf, *p3++ = x)

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<int, int> PII;

const int N = 10;
int m, n, ans;
PII x[N];  // 积木鱼习惯把相关的两个数存进 pair 里
unordered_map<int, int> mp;  // mp[x] = y 表示取 x 的方法有 y 种；只需要读取和存入，可以 unordered

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

int power(int x, int y) {  // 快速幂
	int ret = 1;
	while (y > 0) {
		if (y & 1) ret *= x;
		x *= x;
		y >>= 1;
	}
	return ret;
}

void dfs1(int now, int sum) {  // 前一半的搜索
	if (now > (n >> 1)) {  // 前一半搜完了
		++mp[sum];  // 计数
		return;
	}
	FOR(i, 1, m) dfs1(now + 1, sum + x[now].first * power(i, x[now].second));  // 往下接着搜，记得代数
}

void dfs2(int now, int sum) {  // 后一半的搜索，跟前一半差不多
	if (now > n) {
		ans += mp.find(-sum) == mp.end() ? 0 : mp[-sum];  // 搜完了，如果前一半没有这个东西那就是 0 种方法，否则就是后一半结果的相反数；每种方法都是独立的，所以是加法
		return;
	}
	FOR(i, 1, m) dfs2(now + 1, sum + x[now].first * power(i, x[now].second));
}

int main() {
	n = read<int>(), m = read<int>();
	FOR(i, 1, n) x[i] = {read<int>(), read<int>()};
	dfs1(1, 0);  // 初始时 sum 当然是 0
	dfs2((n >> 1) + 1, 0);  // 注意从后一半开始搜
	write<int>(ans);
	fwrite(obuf, p3 - obuf, 1, stdout);
	return 0;
}
```

[AC 记录~](https://www.luogu.com.cn/record/276269869)

理解万岁！
