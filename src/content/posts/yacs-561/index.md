---
title: 题解：【YACS 2022年 1 月月赛 丙组】 平衡括号
tags:
  - C艹
  - YACS精选
category: 题解
image: brackets.png
description: 【YACS 2022年 1 月月赛 丙组】 平衡括号植树造林 的题解。
published: 2024-06-27 23:22:09
permalink: editorial-yacs561
updated: 2026-10-03 21:45:06
---


[题目 Link](https://iai.sh.cn/problem/561)

---

前情提要：这个题是栈的经典入门题。

<!--more-->

---

关于栈的详细内容可以看 [OI-Wiki](https://oi-wiki.org/ds/stack/)，这里简单说一下。

其实栈（stack）就相当于一个桶，有两种操作：从顶上（top）往里边扔东西（push）和拿东西（pop），底部不允许操作（不然就漏了）。

这里就有 $3$ 种操作了：

1. top：用来获取最上方的东西

2. push：扔东西进去
  
3. pop：拿东西出来

---

所以这个题就可以用栈解决了，具体步骤如下：

1. 遍历字符串

2. 如果栈是空的（empty），那么直接放东西（学名：入栈）

3. 如果这个字符和栈顶（上一个待匹配的字符）匹配，那么栈顶出去（学名：出栈）

4. 如果不匹配，那么就加进去

5. 对每个字符进行操作 2~4（显然只会执行一个），此时匹配的已经不在栈中，栈里只有不匹配的。如果栈里没东西，那么说明都匹配了，是平衡的；如果有，那就是不平衡的。

这里，这个栈就是用来存储不匹配的括号的。

---

正确性证明：题目的意思是“就近匹配”，即括号优先分配给最近的且匹配的。那么栈先进后出的结构正好符合该项原则。

---

ACCode：

```cpp
/*Code by Block_fish*/
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

int len;
stack<char> stk;
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
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}

int main() {
	IOS;
	cin >> s;
	len = s.size();
	for (int i = 0; i < len; ++i) {
		if (stk.empty()) stk.push(s[i]);
		else if ((stk.top() == '[' && s[i] == ']') || (stk.top() == '(' && s[i] == ')')) stk.pop();
		else stk.push(s[i]);
	}
	if (stk.size()) cout << "Unbalanced";
	else cout << "Balanced";
	return 0;
}
```

[AC 记录~](https://iai.sh.cn/submission/1153051)
