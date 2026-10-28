---
title: ATC ABC 串讲——328（A~C）
updated: 2026-05-18 13:12:10
published: 2024-01-19 21:18:04
description: 讲解了 AtCoder Beginner Contest 328 的 ABC 三道题目。
tags:
  - C艹
  - AtCoder
category: 题解
image: ABC328.png
permalink: editorial-atabc328abc
---

# A Not Too Hard
$N \le 8$ 也是醉了，循环枚举就得了呗？
遍历一遍数组就可以 AC 了。

<!--more-->

AC Code：

```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 10;
int n, x, a[N], sum;

int main() {
	scanf("%d%d", &n, &x);
	for (int i = 1;i <= n;i++) {
		scanf("%d", &a[i]);
		if (a[i] <= x)
			sum += a[i];
	}
	printf("%d\n", sum);
	return 0;
}

```

[AC 记录](https：//www.luogu.com.cn/record/135867122)

# B 11/11
~~我生日哎。~~

数位最多两位，这个数位分解很简单。这里有一种简单粗暴的办法：如果十位是 $0$ 就让它等于个位就好了，反正不影响结果。

AC Code：

```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 110;
int n, d[N], ans;

int main() {
	scanf("%d", &n);
	for (int i = 1;i <= n;i++) {
		scanf("%d", &d[i]);
		for (int j = 1;j <= d[i];j++) {
			int ge = j % 10, shi = j / 10, gei = i % 10, shii = i /10;
			if (shi == 0)
				shi = ge;
			if (shii == 0)
				shii = gei;
			if (ge == shi && shi == gei && gei == shii)
				ans++;
		}
	}
	printf("%d\n", ans);
	return 0;
}
```

[AC 记录](https：//www.luogu.com.cn/record/135867314)

# C Consecutive

> [!TIP]
> 区间求答案，就想前缀和。

我们记录一个前缀和数组，如果后一位与前一位相同就记一个，否则就不计，时间复杂度是便利的 $O(n)$。

查询的时候直接用前缀和查询即可，单次复杂度 $O(1)$。

AC Code（带注释）：

```cpp
#include <bits/stdc++.h>

using namespace std;

const int N = 3e5 + 10;
int n, q, l, r, cnt[N];
string s;

int main() {
    scanf("%d%d", &n, &q);
    cin >> s;
    s = ' ' + s;  // 前缀和从1开始
    for (int i = 1;i <= n;i++)
        if (s[i] == s[i + 1])  // 相等
            cnt[i] = cnt[i - 1] + 1;  // 记录
        else
            cnt[i] = cnt[i - 1];
    for (int i = 1;i <= q;i++) {
        scanf("%d%d", &l, &r);
        printf("%d\n",  cnt[r - 1] - cnt[l - 1]);
        /*因为上面是 s[i + 1] 与 s[i] 相同就记录了，
        所以要用 cnt[r - 1] 以防在最后一组相同的区间内只有其中 1 个字符，
        即避免如 aabb 中的 bb 在筛查 1~3 的时候被计算*/
    }
    return 0;
}
```

~~什么蹩脚英语。~~

[AC 记录](https：//www.luogu.com.cn/record/135867500)
