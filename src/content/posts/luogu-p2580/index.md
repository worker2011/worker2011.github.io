---
title: P2580 于是他错误的点名开始了 题解
tags: 
- C艹
category: 题解
image: P2580.png
published: 2024-01-18 22:01:38
updated: 2026-10-27 22:31:17
description: 讲解了如何用 map 系列通过洛谷 P2580 于是他错误的点名开始了。
---

“普及/**提高-**”这个难度很有意思（当时还叫这个名字啊）。

说明这题可能需要用到提高组当中比较基础的内容。

<!--more-->

它的名字叫做 map。

---

```cpp
map<int, int> a;
a[7] = 5;
map<string, int> score;
score["Leo2011"] = 400;
```

map，其实相当于一个超大数组，但它真实的作用是：映射。比如 `a[7] = 5;`就是用 a 数组把 7 和 5 关联了起来，这个操作就叫映射。

map 这东西 NB 的地方在于，它能这么写：`score["Block_Fish"] = 400;`。哎对，这个类似下标的玩意儿就是个字符串！

有了这不好办了？拿这玩意儿记录一下有没有，然后分类判断即可。

---

ACCode:

```cpp
#include <bits/stdc++.h>

using namespace std;

unordered_map<string, int> mp;  // map 会自动排序，此时访问时间复杂度为O(logn)，unordered_map 不排序，时间复杂度O(1)
// 因为 `map` 的底层是红黑树，作为一种平衡树；而 unordered_map 底层是哈希。因此，对于 pair 之类的东西，要用 map 那就需要定义一个比较器，要用 unordered_map 就要定义一个冲突概率较低的哈希函数。
int m, n;
string s;

int main() {
	scanf("%d", &n);
	for (int i = 1;i <= n;i++) {
		cin >> s;
		mp[s] = 1;
	}
	scanf("%d", &m);
	for (int i = 1;i <= m;i++) {
		cin >> s;
		if (mp[s] == 1) {
			printf("OK\n");
			mp[s] = 2;
		}
		else
			if (!mp[s])
				printf("WRONG\n");
			else
				printf("REPEAT\n");
	}
	return 0;
}
```

[AC记录](https://www.luogu.com.cn/record/129964488)
