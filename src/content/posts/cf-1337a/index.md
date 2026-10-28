---
title: 题解：CF1337A Ichihime and Triangle
image: CF1337A.png
tags:
  - C艹
  - 洛谷精选
category: 题解
published: 2024-05-13 19:43:11
updated: 2026-10-27 22:53:01
description: 提供了 Codeforces 1337A Ichihime and Triangle 的另类构造方法。
---

看到大佬们基本都是直接输出 $b$ $c$ $c$ 了事儿，~~一身反骨~~有其它构造方法的我表示不服，~~遂作此篇~~。

<!--more-->

------------

众所周知，两边之和大于第三边，所以，如果 $b + c > d$，那么 $b$、$c$、$d$ 就是正确的。那如果不满足呢？在题目条件下 $b + c > b + c - 1$，那么这一组就是合理的。

分别验证下。满足 $b + c > d, x = b, y = c, z = d$，显然都满足条件。另外一组也是类似的。极端情况下 $b + c - 1 > d$？那么可以得到 $b + c > d + 1$，显然也满足条件，所以方法正确。

------------

ACCode：


```cpp
#include <bits/stdc++.h>

using namespace std;

int num;

void run(int a, int b, int c, int d) {  //  a <= x <= b b <= y <= c c <= z <= d
    if (b + c - 1 <= d)
        printf ("%d %d %d\n", b, c, b + c - 1);
    else
        printf ("%d %d %d\n", b, c, d);
}

int main() {
    scanf("%d", &num);
    for (int i = 0; i < num; i++) {
        int a, b, c, d;
        scanf("%d%d%d%d", &a, &b, &c, &d);
        run(a, b, c, d);
    }
    return 0;
}
```

[AC记录~](https://www.luogu.com.cn/record/99768270)

理解万岁！
