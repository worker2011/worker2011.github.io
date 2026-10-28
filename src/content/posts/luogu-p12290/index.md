---
title: 题解：P12290 [蓝桥杯 2024 国 Java A] 基因组合
tags:
  - C艹
  - 洛谷精选
  - 蓝桥杯
category: 题解
image: firefly1.avif
published: 2025-10-08 14:52:30
updated: 2026-10-27 23:06:07
description: 讲解了如何用 01 Trie 解决洛谷 P12290。
---

# 闲话

~~Java 组的题当然要用 C++ 写啦~~。应管理员要求，已增加 Java 代码，Java 代码由 DeepSeek 将 C++ 代码转换而来，能够通过本题。

![](https://cdn.luogu.com.cn/upload/image_hosting/vy0otztu.png)

# 分析

初读题目可能会感觉这是一个博弈论，然而事实是~~那一天的博弈~~博不起来。

为什么呢？

翻一下样例解释，因为只选两个基因，而异或具有交换律……

因此不存在什么先手后手的，反正换了一下也是一样的。

那我们只能考虑从基因入手。我们并不知道两个基因的任何情况，因此至少要枚举一个。

于是我们的问题就转化成了已知一个基因 $A$ 和另外 $n - 1$ 个基因，从另外的这 $n - 1$ 个基因中选择两个 $X$ 和 $Y$，最大化 $A \oplus X$，最小化 $ A \oplus Y$。

而这个经典的问题可以使用 01-Trie 来解决。

## 什么是 01-Trie？

Trie 就是传说中的**字典树**。我们建立一颗树，树上的每一条边都对应一个字母，因此从根出发到其它节点的某个路径就对应一个字符串。

我们一般用一个二维数组 `trie[N][M]` 来表示一颗 Trie，其中 $N$ 是最长字符串长度，$M$ 是字符集大小（即可能出现在字符串里的字符数目）。具体实现略有些抽象，可以结合代码理解。

:::info[标准 Trie 模板]

```cpp
inline int get(char c) {
	if (c <= '9') return c - '0';
	else if (c <= 'Z') return c - 'A' + 10;
	else return c - 'a' + 36;
}
/*
这个函数用来压缩字符集，将 '0'~'9' 映射到 0~9
'A'~‘Z’ 映射到 10~35
‘a’~'z' 映射到 36~61
当然你也可以不写函数直接用 ASCII 码表，但是这样 M 的大小是 127 而且会有很多浪费
*/

void insert(string &s) {  // 引用传参
	int p = 0;  // 指针，表示我现在遍历到哪个点上了
	for (auto i : s) {  // 遍历字符串，这种语法需要 C++11，比赛可用
		int z = get(i);  // 获取到映射的值
		if (!trie[p][z]) trie[p][z] = ++idx;  // 第一次加入这条边，于是给它所到达的那个点分配一个新的编号
		p = trie[p][z];  // 跳下去
		++cnt[p];  // 记录这个点多了一个字符串，用于计数或者删除字符串的时候
	}
	end[p] = 1;  // 记录一下这个点是某个字符串的结尾而不是只是一个路过的
}

int query(string &s) {  // 和 insert 是类似的，这里是查询以 s 作为前缀的字符数量
	int p = 0;
	for (auto i : s) {
		int z = get(i);
		if (!trie[p][z]) return 0;
		p = trie[p][z];
	}
	// if (!end[p]) return 0;  // 加上这一行就是必须要完全相同
	return cnt[p];
}
```

最后的的 `end` 数组是为了避免类似这样的情形：

输入：

```
luogu
```

查询：

```
luo
```

应该是找不到的，但是由于 $\text{luo}$ 是 $\text{luogu}$ 的前缀因此也能匹配上，于是我们记录到 $\text{u}$ 的才是某个字符串的结尾否则就是中间不算的，当然如果题目就是要前缀那就无所谓啦。

[模板 P8306](https://www.luogu.com.cn/problem/P8306)

[必须要完全匹配的 P2580](https://www.luogu.com.cn/problem/P2580)（请认真练习，虽然我知道 `unordered_map` 可以水过去）

:::

而 01-Trie 则是只会出现 0 和 1 的 Trie，字符集大小为 $2$。它可以方便的处理异或相关问题。具体来说，它运用的就是**贪心思想**。例如我要求异或值最大化，那么我们尽量让 0 和 1 两种边交错着走就好了，由于数字的大小优先比较高位因此这样贪心是对的，不会出现先走相同种类的边然后企图后续反超的情况。

01-Trie 有个小技巧就是建树的时候不要用 `string` 而是直接将一个数字传过去，然后利用位运算得到每一位的情况。注意为了方便计算我们一般会统一字符串长度为 $L = \log_2 M$，其中 $M$ 为需要建字典树的序列最大值，一般 $M = 10^9，L = 30$。更大的 $L$ 可以适配更大的数字，但是常数也会增大。

:::info[01-Trie 模板]{open}
```cpp
void upd(int x) {
	int p = 0;
	for(int i = L - 1;i >= 0;--i) {
		int z = x >> i & 1;
		if (!trie[p][z]) trie[p][z] = ++idx;
		p = trie[p][z];
		++cnt[p];
	}
}

void rme(int x) {  // 删数，本题要用
	int p = 0;
	for(int i = L - 1;i >= 0;--i) {
		int z = x >> i & 1;
		p = trie[p][z];
		--cnt[p];
	}
}

int getMax(int x) {  // 求字典树任选数字异或 x 得到的最大值
	int p = 0, ret = 0;
	for(int i = L - 1;i >= 0;--i) {
		int z = x >> i & 1;
		if (cnt[trie[p][z ^ 1]]) ret |= 1 << i, p = trie[p][z ^ 1];
		/* 可以不同，那就不同；
		在左起第 i 位有一个 1，贡献是 1 << i，
		由于只有第 i 次遍历会对该位产生影响因此这里是二进制或，和直接加法是一样的
		*/
		else p = trie[p][z];  // 否则只能走相同的路
	}
	return ret;
}

int getMin(int x) {  // 同上，最小值
	int p = 0, ret = 0;
	for(int i = L - 1;i >= 0;--i) {
		int z = x >> i & 1;
		if (cnt[trie[p][z]]) p = trie[p][z];
		else p = trie[p][z ^ 1], ret |= 1 << i;
	}
	return ret;
}
```
:::

## 回归本题

其实上面的 01-Trie 讲完结合前面的思路分析就做完了……

直接用上面的 01-Trie 模板分别求最大值和最小值即可。注意求最小值的时候会出现 $A \oplus A = 0$ 的情况，然后最小值 `getMin` 就会寄掉，因此要先暂时把 $A$ 删除，然后查完再加回去即可。

注意小蓝会让最小值最大，小乔会让最大值最小，因此是对 `getMax` 取 $\min$，`getMin` 取 $\max$，否则你样例大概是 `0 7` 之类的。

时间复杂度上，我们扫一遍是 $O(n)$ 的，字典树查询时间复杂度是固定的 $O(L)$，但是我们已经将 $L$ 锁定了，因此总的复杂度还是 $O(n)$。~~但是常数有亿点点大，不过这是 01-Trie 的通病了~~。

直接贴代码吧：

:::success[C++ ACCode]
```cpp
/*Code by Leo2011*/
#include <bits/stdc++.h>

#define log printf
#define EPS 1e-8
#define INF 0x3f3f3f3f
#define FOR(i, l, r) for (int i = (l); i <= (r); ++i)
#define IOS                      \
	ios::sync_with_stdio(false); \
	cin.tie(nullptr);            \
	cout.tie(nullptr);

char buf[1 << 23], *p1 = buf, *p2 = buf, obuf[1 << 23], *O = obuf;
#define getchar() (p1 == p2 && (p2 = (p1 = buf) + fread(buf, 1, 1 << 21, stdin), p1 == p2) ? EOF : *p1++)
#ifdef ONLINE_JUDGE
#define putchar putchar_unlocked
#endif
#define L 31

using namespace std;

typedef __int128 i128;
typedef long long ll;
typedef pair<int, int> PII;

const int N = 2e6 + 10;
int n, a[N], mn = INF, mx = -INF, idx, cnt[N], trie[N][2];

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
	static char sta[40];
	short top = 0;
	do { sta[top++] = (x % 10) + 48, x /= 10; } while (x);
	while (top) putchar(sta[--top]);
}

void upd(int x) {
	int p = 0;
	for(int i = L - 1;i >= 0;--i) {
		int z = x >> i & 1;
		if (!trie[p][z]) trie[p][z] = ++idx;
		p = trie[p][z];
		++cnt[p];
	}
}

void rme(int x) {
	int p = 0;
	for(int i = L - 1;i >= 0;--i) {
		int z = x >> i & 1;
// 一定是存在的，因此不用判断是否存在
		p = trie[p][z];
		--cnt[p];
	}
}

int getMax(int x) {
	int p = 0, ret = 0;
	for(int i = L - 1;i >= 0;--i) {
		int z = x >> i & 1;
		if (cnt[trie[p][z ^ 1]]) ret |= 1 << i, p = trie[p][z ^ 1];
		else p = trie[p][z];
	}
	return ret;
}

int getMin(int x) {
	int p = 0, ret = 0;
	for(int i = L - 1;i >= 0;--i) {
		int z = x >> i & 1;
		if (cnt[trie[p][z]]) p = trie[p][z];
		else p = trie[p][z ^ 1], ret |= 1 << i;
	}
	return ret;
}

int main() {
    n = read<int>();
	FOR(i, 1, n) a[i] = read<int>(), upd(a[i]);
	FOR(i, 1, n) {
		rme(a[i]); // 先删除
		mx = max(mx, getMin(a[i]));  // 最小值最大
		mn = min(mn, getMax(a[i]));  // 最大值最小
		upd(a[i]);  // 加回去，后面还要用
	}
	write<int>(mx), putchar(' '), write<int>(mn);
    return 0;
}
```

上面的 01-Trie 模板把注释给的很详尽了，因此这里不做重复。

:::

[AC 记录~](https://www.luogu.com.cn/record/239432186)

:::success[Java ACCode]

```java
import java.io.*;
import java.util.*;

public class Main {
    static final int L = 31;
    static final int INF = 0x3f3f3f3f;
    static final int N = 100010;
    
    static int n, idx;
    static int[] a = new int[N];
    static int[] cnt = new int[N * L];
    static int[][] trie = new int[N * L][2];
    
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static StreamTokenizer st = new StreamTokenizer(br);
    static PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(System.out)));
    
    static int readInt() throws IOException {
        st.nextToken();
        return (int) st.nval;
    }
    
    static void upd(int x) {
        int p = 0;
        for (int i = L - 1; i >= 0; --i) {
            int z = (x >> i) & 1;
            if (trie[p][z] == 0) {
                trie[p][z] = ++idx;
            }
            p = trie[p][z];
            ++cnt[p];
        }
    }
    
    static void rme(int x) {
        int p = 0;
        for (int i = L - 1; i >= 0; --i) {
            int z = (x >> i) & 1;
            p = trie[p][z];
            --cnt[p];
        }
    }
    
    static int getMax(int x) {
        int p = 0, ret = 0;
        for (int i = L - 1; i >= 0; --i) {
            int z = (x >> i) & 1;
            if (cnt[trie[p][z ^ 1]] != 0) {
                ret |= 1 << i;
                p = trie[p][z ^ 1];
            } else {
                p = trie[p][z];
            }
        }
        return ret;
    }
    
    static int getMin(int x) {
        int p = 0, ret = 0;
        for (int i = L - 1; i >= 0; --i) {
            int z = (x >> i) & 1;
            if (cnt[trie[p][z]] != 0) {
                p = trie[p][z];
            } else {
                p = trie[p][z ^ 1];
                ret |= 1 << i;
            }
        }
        return ret;
    }
    
    public static void main(String[] args) throws IOException {
        n = readInt();
        int mn = INF, mx = -INF;
        
        for (int i = 1; i <= n; i++) {
            a[i] = readInt();
            upd(a[i]);
        }
        
        for (int i = 1; i <= n; i++) {
            rme(a[i]); // 先删除
            mx = Math.max(mx, getMin(a[i]));  // 最小值最大
            mn = Math.min(mn, getMax(a[i]));  // 最大值最小
            upd(a[i]);  // 加回去，后面还要用
        }
        
        out.println(mx + " " + mn);
        out.flush();
    }
}
```

:::

[Java 版 AC 记录～](https://www.luogu.com.cn/record/240301621)

~~为什么比 C++ 慢这么多。~~

再次提醒，本文有且仅有 Java 部分代码是由 DeepSeek 完成，其余部分均为真人原创。~~因为不会写 Java。~~

理解万岁！
