---
title: 'P9012 [USACO23JAN] Moo Operations B题解'
tags: 
- C艹
- USACO
category: 题解
image: USACO.png
published: 2024-01-18 21:33:35
updated: 2026-10-27 22:38:21
description: 讲解了 USACO 2023 一月场的铜组题目 Moo Operations。
---

~~第 1 道赛场 AC 的题，必须发篇题解记录一下。~~

<!--more-->

:::tip
Tips: $1 \le |S| \le 100$ ——题目
:::


才 100，这就可以随便整活了。

---

如果你稍微懂点英语，就会知道第 $2 \sim 4$ 个点的 $S$ 都最多只有 $3$ 个字符，而目标“MOO”也是 $3$ 个字符，所以只需要模拟就可以了。

于是你迅速写出了下面的 check 函数，并用它 AC 了前几个点：

```cpp
int check(string a) {
	if (a.size() < 3)  // 不让加字符，小于 3 的肯定就废了
		return -1;
	int step = 0;
	if (a == "MOO")  // 都一样了你还变它干啥，浪费表情(
		return step;
	string tmp1 = a;
	step++;
	if (tmp1[0] == 'M')  // 胡乱尝试
		tmp1[0] = 'O';
	else
		tmp1[0] = 'M';
	if (tmp1 != "MOO") {
		step++;
		if (tmp1[2] == 'M')
			tmp1[2] = 'O';
		else
			tmp1[2] = 'M';
	} else
		return step;
	if (tmp1 != "MOO") {
		step--;  // 撤销第 1 步操作，所以是--
		if (tmp1[0] == 'M')
			tmp1[0] = 'O';
		else
			tmp1[0] = 'M';
	} else
		return step;
	if (tmp1 != "MOO")
		return -1;
	return step;
}
```

这样你就能顺利的 AC 前三个点了。

那剩下的咋整？

“MOO”就仨字符，那你把它砍成只有仨字符的形式不就得了？反正 $100$ 的数据量随便折腾。所以，你只需要把仨字符能组成的 8 个字符串都枚举出来，挨个判断子串，如果仨字符的是子串，那么就是子串所需步数+原字符串长度-3。

---

```cpp
#include <bits/stdc++.h>

using namespace std;

int n;
string str;

int min(int a, int b) {
	return a > b ? b : a;
}

bool checkSubString(string a, string b) {
	int x = a.size(), y = b.size();
	if (x <= y) {
		for (int i = 0; i < y; i++) {
			if (b[i] == a[0]) {
				bool flag = true;
				for (int j = 0; j < x; j++)
					if (b[i + j] == a[j])
						continue;
					else {
						flag = false;
						break;
					}
				if (flag)
					return true;
			}
		}
	}
	return false;
}

int check(string a) {
	if (a.size() < 3)
		return -1;
	int step = 0;
	if (a == "MOO")
		return step;
	string tmp1 = a;
	step++;
	if (tmp1[0] == 'M')
		tmp1[0] = 'O';
	else
		tmp1[0] = 'M';
	if (tmp1 != "MOO") {
		step++;
		if (tmp1[2] == 'M')
			tmp1[2] = 'O';
		else
			tmp1[2] = 'M';
	} else
		return step;
	if (tmp1 != "MOO") {
		step--;
		if (tmp1[0] == 'M')
			tmp1[0] = 'O';
		else
			tmp1[0] = 'M';
	} else
		return step;
	if (tmp1 != "MOO")
		return -1;
	return step;
}

int checker(string x) {
	if (x.size() <= 3)
		return check(x);
	int mn = 10000;
	string a[] = {"OOO", "OOM", "OMO", "OMM", "MOO", "MOM", "MMO", "MMM"};
	for (int i = 0; i < 8; i++) {
		if (checkSubString(a[i], x)) {
			int tmp = check(a[i]);
			if (tmp != -1)
				mn = min(mn, (tmp + x.size() - 3));
		}
	}
	if (mn == 10000)
		return -1;
	return mn;
}

int main() {
	scanf("%d", &n);
	for (int i = 0; i < n; i++) {
		cin >> str;
		printf("%d\n", checker(str));
		str = "";
	}
	return 0;
}
```

[AC记录](https://www.luogu.com.cn/record/102461763)
