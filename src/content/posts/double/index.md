---
title: 【置顶】珍爱生命，远离 double
updated: 2026-10-27 21:30:36
published: 2024-08-07 12:59:26
description: double 等浮点数据类型存在误差，请谨慎使用。
tags: [C艹]
image: double.png
permalink: ilovedouble
pinned: true
---

rt，今日模拟赛时，某只积木鱼看到了 T1，发现是个百分数计算裸题，于是飞速写下了下面的代码：

```cpp
double tmp;
...
scanf("%d%d", &n, &x);
FOR(i, 1, n) scanf("%d%d", &v[i], &p[i]);
FOR(i, 1, n) {
	tmp += v[i] * (p[i] * 0.01), ++ans;
	if (tmp > (x * 1.0)) break;
}
if (tmp < (x * 1.0)) log("-1\n");
else log("%d\n", ans);
```

然后呢？100-->40，rk4-->rk7

积木鱼衷心希望大家不要再犯同样的错误……

---

upd on 2026/10/27：

~~最不希望出续集旳一集。~~

是的 ~~杂鱼~~ 积木鱼在某场模拟赛中仍然是一眼秒掉了 T1，然后又被卡浮点精度误差了（死于“输出结果必须与标准答案相同，不使用浮点误差容限。”）。然后呢？100-->50，喜提倒数第一两位数分数。

这个故事告诉我们能用 `int` 和 `long long` 这种整数解决的事情一定要尽量避免 `double`。换句话来讲，**不要用它来存储，而是作为参与运算得临时过渡类型**。

另外，涉及到浮点数不开 SPJ 的出题人司凤。

---

经过测试，在部分 Linux 系统下，如下变量名会挂而 Windows 下没事儿：

- nice
- kill

建议前者用 `good` 代替，后者改为 `die`。具体而言，`nice` 是 Linux 下用来改变进程优先级的指令，而 `kill` 是杀死进程的指令，遇到这种东西就会冲突。
