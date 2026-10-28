---
title: 题解：P1001 A+B Problem
tags: 
- C艹
category: 题解
image: P1001.png
published: 2025-05-10 21:30:41
updated: 2026-10-27 22:54:28
description: 给出了解决洛谷 P1001 A+B Problem 的「宏孩儿」解法。
---

核弹打蚊子题。

# 正解

人口普查代码，直接公布如下了：

```cpp
#include <iostream>

using namespace std;

int a, b;

int main() {
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}
```

# 整活

声明：本文灵感来源于此文：[文章公众号链接](https://mp.weixin.qq.com/s/FRL2bKNbWWBpuTfuMpmGDg)和[知乎](https://zhihu.com)

首先，我们要请出一个预编译指令：`define`

{% folding::blue 什么是预编译指令？ %}

首先，我们需要知道编译的流程。第一步就是这个预编译，这些指令一般以 `#` 开头，比如常见的 `#include` 就是，它的处理方法就是递归把被 `#include` 的东西塞到文件上去。

而这个 `define` 的作用类似于查找并替换（全字匹配），会被替换掉，之后不影响编译。同时注释也会在这个流程中被隐去。

接着就是编译和汇编，分别是把你的代码转换为汇编代码，然后才是机器码。然后会进行一种叫“链接”的操作，此时才算完毕。
{% endfolding %}

比如说，想开 `long long` 了，你是不是写过：`#define int long long`？（srds，根据 [宝硕大佬的文章和相关标准](https://blog.baoshuo.ren/post/say-no-to-define-int-long-long/)，这个操作并不好）

然后，我们就可以写出酱紫的代码：

![如图所示](/images/WestLife.png)

啊 bushi，是这个：

```cpp
#define So include
#define I iostream
#define Say using
#define A namespace
#define little std
#define prayer int
#define my int
#define dreams main
#define will cin
#define take And
#define me hope
#define there cout
#define where And
#define the hope
#define skys endl
#define are return
#define blue 0

#include <iostream>
// 注意到预编译指令的周围都有非空格符号，不满足“全字匹配”的定义，因此不得不放弃这么搞。
// 在小 L 本地上，中文似乎会 CE，因此选了一首英文歌

// So I

Say A little;

prayer And, hope;

my dreams() {
	will >> take >> me;
	there << where + the << skys;
	are blue;
}
```

[AC 记录~](https://www.luogu.com.cn/record/216721996)

---

当然，也可以是这个:

```cpp
#include <iostream>

#define _ using
#define __ namespace
#define ___ std
#define ____ int
#define _____ a
#define ______ b
#define _______ main
#define ________ cin
#define _________ cout
#define __________ endl
#define ___________ return
#define ____________ 0

_ __ ___;

____ _____, ______;

____ _______() {
    ________ >> _____ >> ______;
    _________ << _____ + ______ << __________;
    ___________ ____________;
}
```

[AC 记录~](https://www.luogu.com.cn/record/219111061)

~~老师：你搁这儿发电报呢~~

~~同学：古诗文填空中，发现没有题干，炸了~~

理解万岁！
