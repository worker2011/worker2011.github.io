---
title: ATC ABC 串讲——327（A~C）
updated: 2026-05-02 14:42:30
published: 2024-01-18 22:21:04
description: 讲解了 AtCoder Beginner Contest 327 的 ABC 三道题目。
tags:
  - C艹
  - AtCoder
category: 题解
image: ABC327.png
permalink: editorial-atabc327abc
---

# A ab

$S$ 长度不超过 100，随便搞~

遍历一遍，如果一个是“a”且下一个字符是“b”就有，否则没有。

<!--more-->

AC Code：

```cpp
#include <bits/stdc++.h>

#define log printf

using namespace std;

int n, len;
string s;

int main() {
	scanf("%d", &n);
	cin >> s;
	len = s.size();
	for (int i = 0;i < len;i++)
		if ((s[i] == 'a' && s[i + 1] == 'b') || (s[i + 1] == 'a' && s[i] == 'b')) {
			log("Yes\n");
			return 0;
		}
	log("No\n");
	return 0;
}
```

[AC记录](https：//www.luogu.com.cn/record/133471689)

# B A^A

$\sqrt{18}\approx{4}$，枚举到 $10^5$ 最多了。

枚举每一个 $A$ 就完事儿了，如果等于 $B$ 就过，没有就继续连快速幂都不需要的。

AC Code：

```cpp
#include <bits/stdc++.h>

#define log printf

using namespace std;
typedef long long ll;

ll b;

int main() {
	scanf("%lld", &b);
	for (ll i = 1; i <= (int) 1e5; i++) {
		ll tmp = 1;
		for (ll j = 1;j <= i;j++)
			tmp *= i;
		if (tmp == b) {
			log("%lld\n", i);
			return 0;
		} else {
			if (tmp > b) {
				log("-1\n");
				return 0;
			}
		}
	}
	log("-1\n");
	return 0;
}
```

[AC记录](https：//www.luogu.com.cn/record/133471890)

# C Number Place

题干中给了一个数独，数独 $=9\times9$ 的矩阵。

这里给出一个比较暴力的思路：暴力枚举每一行、每一列、每一个小方格（一个宫），如果恰好都出现就没问题。

AC Code：

```cpp
#include <bits/stdc++.h>

#define log printf

using namespace std;

const int N = 10;
int a[N][N];
bool cnt[N];

void add(int x, int y) {  // 判断是否合法
	if (!cnt[a[x][y]])  // 没出现过
		cnt[a[x][y]] = true;
	else {  // 出现过了！
		log("No\n");
		exit(0);  // 退出程序
	}
}

int main() {
	// 读入，固定是 9*9 的矩阵
	for (int i = 1; i <= 9; i++)
		for (int j = 1; j <= 9; j++)
			scanf("%d", &a[i][j]);

	// 行
	for (int i = 1; i <= 9; i++) {
		memset(cnt, false, sizeof(cnt));
		for (int j = 1; j <= 9; j++)
			add(i, j);
	}
	
	//  列
	for (int i = 1; i <= 9; i++) {
		memset(cnt, false, sizeof(cnt));
		for (int j = 1; j <= 9; j++)
			add(j, i);
	}

	memset(cnt, false, sizeof(cnt));
	add(1, 1);
	add(1, 2);
	add(1, 3);
	add(2, 1);
	add(2, 2);
	add(2, 3);
	add(3, 1);
	add(3, 2);
	add(3, 3);  // 一个一个宫枚举

	memset(cnt, false, sizeof(cnt));  // 记得清空之前的状态
	add(1, 4);
	add(1, 5);
	add(1, 6);
	add(2, 4);
	add(2, 5);
	add(2, 6);
	add(3, 4);
	add(3, 5);
	add(3, 6);

	memset(cnt, false, sizeof(cnt));
	add(1, 7);
	add(1, 8);
	add(1, 9);
	add(2, 7);
	add(2, 8);
	add(2, 9);
	add(3, 7);
	add(3, 8);
	add(3, 9);

	memset(cnt, false, sizeof(cnt));
	add(4, 1);
	add(4, 2);
	add(4, 3);
	add(5, 1);
	add(5, 2);
	add(5, 3);
	add(6, 1);
	add(6, 2);
	add(6, 3);

	memset(cnt, false, sizeof(cnt));
	add(4, 4);
	add(4, 5);
	add(4, 6);
	add(5, 4);
	add(5, 5);
	add(5, 6);
	add(6, 4);
	add(6, 5);
	add(6, 6);

	memset(cnt, false, sizeof(cnt));
	add(4, 7);
	add(4, 8);
	add(4, 9);
	add(5, 7);
	add(5, 8);
	add(5, 9);
	add(6, 7);
	add(6, 8);
	add(6, 9);

	memset(cnt, false, sizeof(cnt));
	add(7, 1);
	add(7, 2);
	add(7, 3);
	add(8, 1);
	add(8, 2);
	add(8, 3);
	add(9, 1);
	add(9, 2);
	add(9, 3);

	memset(cnt, false, sizeof(cnt));
	add(7, 4);
	add(7, 5);
	add(7, 6);
	add(8, 4);
	add(8, 5);
	add(8, 6);
	add(9, 4);
	add(9, 5);
	add(9, 6);

	memset(cnt, false, sizeof(cnt));
	add(7, 7);
	add(7, 8);
	add(7, 9);
	add(8, 7);
	add(8, 8);
	add(8, 9);
	add(9, 7);
	add(9, 8);
	add(9, 9);
	log("Yes\n");
	return 0;
}
```

~~三道题全是枚举。~~

[AC记录](https：//www.luogu.com.cn/record/133417678)
