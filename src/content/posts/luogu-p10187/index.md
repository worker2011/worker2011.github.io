---
title: 'P10187 [USACO24FEB] Palindrome Game B 题解'
tags: 
- C艹
- USACO
category: 题解
image: P10187.png
published: 2024-02-29 21:15:43
updated: 2026-10-27 22:41:25
description: 讲解了 USACO 2024 二月场的铜组题目 Palindrome Game。
---

~~挑战题解区最短代码~~

<!--more-->

---

回文数？数学题！打表找规律吧……

显然，$1 \sim 9$ 都是回文数，先手赢（就一位你还想咋地啊）。

然后是 $10$。~~样例~~告诉我们，这个不行。

接着是 $11 \sim 19$，发现随便减个 $1 \sim 9$ 就可以变成 $10$，而 $10$ 是后手赢。赢得就是后手的后手，那就是先手，可以。

$20$？减个 $1 \sim 9$ 不就又回到上面了？然后就是后手的先手，也就是后手赢，寄。

$21 \sim 29$？ 减个 $1 \sim 9$ 就变成 $20$ 了，后手的后手，先手赢。

以此类推，每一个非整十数都可以转化为整十数，而整十数都能转化为 $10$，而 $10$ 是后手赢的，所以非整十数是后手的后手，先手赢。而且整十数由于首位不可能为 $0$，所以都不是回文数，所以都是 整十数 $\Rightarrow 10 \Rightarrow$ `E` 或 非整十数 $\Rightarrow$ 整十数 $\Rightarrow 10 \Rightarrow$ `B`。

结论：整十数是 `E`，非整十数是 `B`。

---

短短的 ACCode：

```python
T = int(input())
for _ in range(T):
	start = input()
	print('E' if start[-1] == '0' else 'B')
```

[AC记录](https://www.luogu.com.cn/record/148794662)
