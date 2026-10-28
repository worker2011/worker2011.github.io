---
title: 题解：P10815 【模板】快速读入
tags: 
- C艹
category: 题解
image: P10815.png
published: 2024-07-29 12:56:40
updated: 2026-10-27 23:04:32
description: 讲解了如何实现快速读入。
image: ../images/firefly2.avif
---

~~闲着没事儿水篇 tj~~
<!--more-->

---

# 题目大意
题目大意极其粗暴，记得 $10^8 \times 10^8 = 10^{16} > 2^{31}-1$ 会爆 `int`，开 `long long` 就好。

于是这个题就变成了一个读入输出优化模板题。~~这不又回去了~~。

另外，输入输出常数优化也很常用，抢最优解和骗分时都可以用上。

# cin/cout 版本

## 操作

```cpp
ios::sync_with_stdio(false);
cin.tie(nullptr);
```

第一行开启后就不再兼容 stdio 了，也就是说，只要用 `cin`、`cout`，就最好不要同时用 `scanf`、`printf` 以及 `getchar` 等 C 语言留下的东西了（至少不能混用）。

## 原理

Q：为什么要保留 C 语言的东西？

A：因为要保证 C++ 语言对 C 语言的兼容性，所以 C++ 将这两个的读入输出流绑到了一起。这样是线程安全的。但是，兼容性、安全性、效率经常会有矛盾，这行代码就是从兼容性到取效率。所以，此行代码一旦执行，`cin`、`cout` 与 `printf`、`scanf` 不得再同时使用，但是 `cin` 和 `printf`、`cout` 和 `scanf` 还是能同时用的。



剩下是在解除绑定.什么绑定？`ostream` 和 `istream`（是的，他俩拼起来就是 `iostream`）。`cin.tie()` 默认绑定的是 `&std::cout`，这不没了？所以这行代码就是在解除绑定。

:::warning
注意：解除绑定后一定要及时 `flush` 刷新缓冲区（或者是用 `endl`，它就是 `\n` 和 `flush` 拼出来的）才能保证先输出 `cout` 里的再输入。
:::



## 打包
当然，一般 cin/cout 优化这 3 行会一起使用，因此可以将其打包成一个宏。

```cpp
#define IOS                      \
	ios::sync_with_stdio(false); \  // 这里的'\'表示换行
	cin.tie(nullptr);            \
```

main 函数直接调用 `IOS` 就相当于 3 行一起上了。~~但一般还是跑不过 printf/scanf。~~

另外，不要用 `endl`，它会刷新缓冲区，因此比 `\n` 慢多了。

不过这里没啥用（字符串时有大用），这题该 TLE 还是 TLE。

# 基础版

:::tip
这货搞 [__int128](https://leo2011.eu.org/2023/11/25/guan-yu-int128-he-short-ni-xu-yao-zhi-dao-de-yi-qie/) 时也有用。
:::


## 输入

首先肯定要处理一下符号问题。“+” 一般直接省略，不管它。“-” 不可省略，特判一下。

```cpp
for (; !isdigit(ch); ch = getchar())  // isdigit 函数可以判断传过去的形参是否是数字
		if (ch == '-') fl = -1;
```

这样就可以略过空格和 “+”，直接读入 “-”。

后面的正负就都一样啦。那该咋办？

还记得进制转换吗？转成 10 进制的时候是不是这么写的：

```cpp
int ans = 0;
for (int i = 0;i < len;++i) ans *= 10, ans += s[i] - '0';
```

一样的嘛！把 `s[i]` 换成刚才的 `ch`，把 for 循环换成 `while` 即可。总结一下就是这样：

```cpp
inline int read() {  // inline 是定义内联函数的，可以省去调用函数的常数，具体是把这个函数里的东西干进调用的地方，因此一般只用于小函数
	int sum = 0, fl = 1;
	char ch = getchar();
	for (; !isdigit(ch); ch = getchar) if (ch == '-') fl = -1; 
	for (; isdigit(ch); ch = getchar) sum = sum * 10 + ch - '0';
	return sum * fl;
}
```

## 输出

输出是一样的，直接数位分解。把 `getchar` 替换为 `putchar` 即可。

```cpp
inline void write(int x) {
	if (x < 0) {
		putchar('-'), write<int>(-x);
		return;  // 不加就会反复输出负号
	}
	static T sta[110];
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}
```

# 变通用

但是！我们还可以让它变得更加通用！

为什么说上面的不通用？因为变量都是 `int` 的，`long long`、`short` 啥的全废了。

好在 C++ 提供了 `template` 这个好东西，中文名叫模板。可以根据给定的类型和一个模板函数、类生成一堆函数或类。

想想你的 `vector`、`stack`，是不是写的 `vector<int>`？`<>` 这个东西里面就是要传过去的类型。

于是可以用 `template` 改写上面的两个函数，现在是这样的：

```cpp
template <typename T>

inline T read() {
	T sum = 0, fl = 1;
	char ch = getchar();
	for (; !isdigit(ch); ch = getchar)
		if (ch == '-') fl = -1;
	for (; isdigit(ch); ch = getchar) sum = sum * 10 + ch - '0';
	return sum * fl;
}

template <typename T>

inline void write(T x) {
	if (x < 0) {
		putchar('-'), write<T>(-x);
		return;
	}
	static T sta[110];
	int top = 0;
	do { sta[top++] = x % 10, x /= 10; } while (x);
	while (top) putchar(sta[--top] + 48);
}
```

使用如下：
```cpp
n = read<int>();  // read 没有参数，必须要加
write<int>(n);  // 注：write 时 “<int>” 写不写一样，不写会自动识别参数类型
w = read<long long>();
write<long long>(w);
```

一般这么整够了，但是这~~破~~题还是会 TLE 一个点，于是，我们需要更快的方案！

# 中端版

`getchar_unlocked`

这是个啥？

官方管它叫“getchar 的非线程安全版本”。鉴于 OI 题目都是单线程程序（多线程那还了得？），安全性不影响。但以后写能赚 $ 的程序时记得注意不要使用。速度比 `getchar` 还要快，~~果然安全性与性能不可兼得~~。同理还有 `putchar_unlocked`，替换过后就可以 AC 了~。


:::warning
这个函数并不通用，实测 Windows **不可用**，请在 Linux （如某谷评测姬）使用~
:::


# 高端版

`fread` 和 `fwrite`

## 原理

它们和 `getchar`、`putchar` 原理是一样的，都是拿 1B 东西出来。不同的是，`getchar`、`putchar` 是从硬盘（文件）中读，这俩是从内存中直接拿。鉴于内存速度快的太吓人，因而这两个也要比 `getchar` 快。

## 使用

所以我们可以重新定义一个 `getchar` 和 `putchar`。

```cpp
char buf[1 << 20], *p1, *p2;
#define gc() \
(p1 == p2 && (p2 = (p1 = buf) + fread(buf, 1, 1 << 20, stdin), p1 == p2) ? EOF : *p1++) \

char pbuf[1 << 20], *pp = pbuf;
void push(const char &c) {
  if (pp - pbuf == 1 << 20) fwrite(pbuf, 1, 1 << 20, stdout), pp = pbuf;
  *pp++ = c;
}
```

这样就可以把[毒瘤](https://www.luogu.com.cn/user/3296)造的毒瘤题的毒瘤数据过掉了~


:::warning
这种方法速度最快，但相对麻烦，可读性较差，建议不要使用。
:::

---

参考资料：

[OI-Wiki](https://oi-wiki.org/contest/io/)
