---
title: 题解：P16007 [CCO 2016 Day 1] Field Trip 郊游
tags:
  - C艹
category: 题解
image: firefly3.avif
published: 2026-10-27 08:20:33
updated: 2026-10-27 23:06:07
description: 讲解了如何解决洛谷 P16007。
---

# 闲话

传说 CSP 考前写题解 RP++?

这题放模拟赛 T1 被秒切了，然后卡了半天一直 RE 测不出来问题，后来发现是没开大栈空间。

好消息是 CSP 等一般都是无限栈空间或者是与题目内存限制等大的，反正几乎无需担心。

# 正文

[题目 Link](https://www.luogu.com.cn/problem/P16007)。

不难将其抽象成一个图论结构。那么题目变为：$N$ 个点，$M$ 条双向边的图。你可以删去一些边。最终你需要最大化大小恰好为 $K$ 的连通块数量，在此基础上最小化删的边数。

## Hints

1. 我们只能删边，而不能建立，这意味着什么？
2. 由于每个点度数不超过 $2$，所以一整个连通块会是什么形状？
3. 我们需要知道连通块的什么信息才能求答案？如何求得？

## 答案

1. 这意味着如果 $A, B$ 两点在最后是连通的，那么它们在最开始的图上也必然是连通的。也就是说，如果点 $C$ 开始时不与 $A$ 连通，那么最终也不可能与 $A$ 连通。
2. 我们画画图就可以发现连通块不是链就是环。
3. 当然是需要知道连通块的大小，以及它是环还是链。

第一个结论很好想，我们删边是在破坏连通性，怎么可能越破坏越连通上了？

第二个结论的话自己画图理解：

![链](https://cdn.luogu.com.cn/upload/image_hosting/x0ijalen.webp)

![环](https://cdn.luogu.com.cn/upload/image_hosting/dofkivyw.webp)

![](https://cdn.luogu.com.cn/upload/image_hosting/xm0q6jlk.webp)

![](https://cdn.luogu.com.cn/upload/image_hosting/9oon67lr.webp)

首先链是一种树，一个点一进一出最多两个度，开头和末尾的点只有 $1$ 个度，一共 $n$ 个点 $n - 1$ 条边。我们将第一个点和最后一个点连起来（加到其它点上那它的度数就变成 $3$ 了），此时每个点的度都恰好是 $2$，一共 $n$ 个点 $n$ 条边。如果我们继续加边就会发现加到哪儿都会是某个点度数为 $3$ 不符合要求，因此确实只有这 $2$ 种情况。

从这里我们也可以看出，因为环要多条边，我们（可能）还要删去，因此需要与链分开处理。

我们先看能选出来几个点。设某个连通块的大小为 $L$。注意如果 $L \le K$ 那么根本不需要删边。

我们只能 $K$ 个 $K$ 个选，一共能选出 $C = \left\lfloor\dfrac{L}{K}\right\rfloor$ 组，共 $K \times C$ 个，设 $R = L - K \times C$，也就是不属于任何一组的点数。

接着我们看链的情况下要断几条边。首先，我们需要把 $C$ 组当中组与组之间断开，一共断 $C - 1$ 条。

然后，如果 $R > 0$，也就是还有剩余，那么还再断 $1$ 条边要把这 $R$ 个点和分好组的点断开，至于这 $R$ 个点内部，因为肯定有 $R < K$，所以不用让他们不连通（因为无论如何都选不了），为了最小化断边数这 $R$ 个点内部不用处理，一共断 $C$ 条。

如果是环的话，同样分类讨论。如果 $R = 0$，那么同样断开这 $C$ 组，因为还要破环，所以是 $C - 1 + 1 = C$，刚好 $C$ 条。如果 $R > 0$，那和链的情况类似，还要再断一条。合计我们发现刚好断了 $\left\lceil\dfrac{L}{K}\right\rceil$ 条边。

那么就算做完了，总结一下做法：

1. 读入、建图。
2. 遍历每一个点，如果它属于一个新连通块那就 DFS 求出连通块大小 $L$，否则的话之前一定被搜过了就跳过。
3. 记录答案，选上点数 $K \times \left\lfloor\dfrac{L}{K}\right\rfloor$，断掉边数分环和链分类讨论。
4. 输出

最终时间复杂度是 DFS 的时间复杂度 $\mathcal{O}(n + m)$、读入 $m$ 条边复杂度 $\mathcal{O}(m)$、遍历每个点的复杂度 $\mathcal{O}(n)$，合计时间复杂度还是 $\mathcal{O}(n + m)$。

# 代码

```cpp
#include <bits/stdc++.h>

#define FOR(i, j, k) for(ll i = j;i <= k;++i)

using namespace std;
typedef long long ll

const ll N = 2e6 + 10;
ll c, k, m, n, r, u, v, ans, cnt, sum;
bool flg;
vector<ll> g[N];
bitset<N> vis;

void dfs(ll now, ll fa) {
	if(vis[now]) {  // 回来了
		flg = 1; // 那么就是环
		return;  // 不能再搜了，会走不出去的
	}
	vis[now] = 1;  // 标记访问过了
	++cnt; // 记录连通块大小
	for(auto v:g[now]) {
		if(v == fa) continue;  // 当然不能回去
		dfs(v, now);
	}
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(0);
	cin >> n >> m >> k;
	FOR(i, 1, m) {
		cin >> u >> v;
		g[u].emplace_back(v), g[v].emplace_back(u);
	}
	FOR(i, 1, n)
		if(!vis[i]) {
			cnt = flg = 0;
			dfs(i, -1);
			if(cnt < k) continue;
			c = cnt / k, r = cnt % k;
			ans += c * k;  // 先记录选了几个
			if(cnt != k) {  // 如果恰好 k 个那当然一条边都不用断
				if(!flg) {
					if(!r) sum += c - 1;
					else sum += c;
				} else sum += ceil(1.0 * cnt / k);  // 小心自动下取整！
			}
		}
	cout << ans << ' ' << sum;
	return 0;
}
```

[AC 记录。](https://www.luogu.com.cn/record/306066647)

理解万岁！RP++！
