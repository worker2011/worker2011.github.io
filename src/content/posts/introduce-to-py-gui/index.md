---
title: Python GUI 图形化界面详解
tag:
- Python
image: oQdXu1b6DlRIhfw.png
published: 2023-12-29 23:07:10
updated: 2026-10-27 22:05:31
description: 简介了如何用 Python 实现简单的 GUI，利用了 easygui 和 turtle 库。注意本文作于积木鱼小学时期的 2023 年，部分内容可能错误或已经过时，请注意分辨。
---

# 简介

话说你看到的软件是不是都是用图形化界面（Graphical User Interface, GUI）整出来的？

<!--more-->

比如这个：

![](iqI5jMRU7QHYdAk.png)

然鹅，再看看咱的“图形化界面”：

![](eTdCoirSXB2gl17.png)

upd：这里的命令行界面连图形化界面都不是，应该叫文本用户界面（Text User Interface, TUI），不可以混淆！

根本不是一个等级的啊！于是，我们来用Python整一个真正的GUI吧！

# 安装环境

:::info
如果您已安装Python和一个另外的IDE，可以忽略此步骤。但如果后续发现有模块运行不了且代码、模块等正常，可以按照此步骤重新安装。
{% endnote %}
:::

见[这里](https://leo2011.eu.org/2023/12/31/python-huan-jing-an-zhuang-yu-pei-zhi/)

# easygui

```shell
pip install easygui
```

在你的终端中运行这段代码。如果出现了下面的东西，那么就说明安装 `easygui` 成功啦（以后我介绍的模块除了特殊说明外，都要用类似的方法安装，就不在提了）

```
Looking in indexes: https://mirrors.sustech.edu.cn/pypi/simple
Collecting easygui
  Using cached https://mirrors.sustech.edu.cn/pypi/packages/8e/a7/b276ff776533b423710a285c8168b52551cb2ab0855443131fdc7fd8c16f/easygui-0.98.3-py2.py3-none-any.whl (92 kB)
Installing collected packages: easygui
Successfully installed easygui-0.98.3
```

然后，在你的 IDE 中新建个 `.py` 文件，输入这段代码，如果出现了下面这幅图，就算成功啦！

```python
import easygui as eg
eg.msgbox("Hello World!")
```

![这个奇怪的窗口](oQdXu1b6DlRIhfw.png)

点掉下面的`OK`，窗口就会消失。

如果有问题，请核实一下下面的东西：

:::warning
`easygui` 是运行在 `tkinter` 上并拥有自身的事件循环，而 `IDLE` 也是 `tkinter` 写的一个应用程序并也拥有自身的事件循环。因此当两者同时运行的时候，有可能会发生冲突，且带来不可预测的结果。因此如果你发现你的 `easygui` 程序有这样的问题，请尝试在 `IDLE` 外去运行你的程序。
:::

其实就3句话：

不要用自带的 IDLE！！！

不要用自带的 IDLE！！！

不要用自带的 IDLE！！！

如果没问题，那么，恭喜你，再次打开了新世界的大门！

接下来，就是对它的一顿研究了

```python
eg.msgbox(msg = "A + B Problem", title = "Leo2011", ok_button = "I AK IOI!")
```
不出所料的话，应该是这样的：
![](Qbj1ciY2xNgSA4J.png)

看，我们用 `title="Leo2011"` 把标题改成了 "Leo2011"，用 `ok_button="I AK IOI!"` 把下面的按钮改成了"I AK IOI!"。

这就msgbox能干的事了。

下面，咱来看另外的几个家伙：

- enterbox

    ```python
    s = eg.enterbox("欢迎您随便输入一堆东西", title = tit)
    eg.msgbox(msg = "您刚才输入了\n" + s, title = tit, ok_button = "我知道了。")
    ```
    能弹出这么个框：
    ![](TxeWsutGwj2pnEg.png)

框中可以随便输东西（只要你打得出来），输完了按回车或点 `OK`（这个不能改）结束。如果你点了 `Cancel` 或直接关掉了这个框，会返回 `None`（这不是一个字符串，是`Nonetype`，意思就是啥也没有）

- multenterbox

    有一堆 `enterbox` 在一个窗口里。

- passwordbox

    跟 `enterbox` 一样，只不过用户视角中输入的字符只能看到“*”，跟输密码似的。
 
- multpasswordbox

    有一堆 `passwordbox` 在一个窗口里。
 
- ccbox

    ```python
    s = eg.ccbox("欢迎您随便选东西", title = tit, choices = ["[D]ebug", "C[t]j"])
    eg.msgbox(msg = "您刚才输入了\n" + str(s), title = tit, ok_button = "我知道了。")
    ```
    [] 里的字符相当于快捷键，你按下这个键就会认为你选了这个选项。`ccbox` 只能有两个选项（否则解释器会炸）。

- boolbox/ynbox

    同ccbox，不讲。

 - choicebox
 
    ```python
    s = eg.choicebox("欢迎您随便选东西", title = tit, choices = ["Debug", "Ctj", "AC!"])
    ```
    UI 会变成这样：
    ![](IUa9WBrsV3ktwCS.png)
    刚才的快捷键就只能是首字母了。choicebox可以有多个选项，但只能选一个（默认是第一个）。

- buttonbox

    同 `choicebox`，不讲。

- indexbox

    跟 `choicebox` 一样，只不过 `choicebox` 会返回你选中的文本，而 `indexbox` 会返回你选中的那货在你的选项列表里的下标。

- multchoicebox

    ~~有一堆choicebox在一个窗口里？~~
    这次 `easygui` 不按套路出牌了，界面长这样：
    ![](8x2hM7pPnuZAdGy.png)
    `Select All` 就是全选，`Clear All` 就是全不选，剩下两个老朋友了。
    返回值是这样的`['Debug', 'AC!']`。它会按你选中的选项在选项列表里的相对位置排成一个新列表。
    
- integerbox

    ```python
    s = eg.integerbox(msg = "请输入一个数", title = tit, default = 5, lowerbound = 3, upperbound = 7)
    ```
    指定你输入一个在 `lowerbound` 和 `upperbound` 之间的整数，默认为 `default`。如果不在区间内了会让你重新输入。

- egdemo

    easygui 所有函数的效果演示。

eaysgui 确实很 easy！

# turtle

:::warning
请注意：实测 Python turtle 的不同版本在不同平台上**可能**会有所不同，本文以 Windows 11 + Python 3.12.1 为准。
:::

`turtle` 库（人送绰号“海龟绘图”）是 Python 的内置库，安装了 Python 就可以直接用。

```python
import turtle as t
t.write("Hello World!")
t.done()  # 这一行必须要有，否则你是看不见你的效果的
```

这就是你的第一个 `turtle` 程序了！

下面，还是来介绍几个基本函数的使用：

- home

    木有参数。回到原点 $(0, 0)$，也就是屏幕正中央的起始位置（这在你画图画懵 13 的时候很有用）。

- forward/fd

    $1$ 个参数 $k$，表示你想要让这个画笔沿笔头方向前进 $k$ 个像素。如 `fd(1000)` 即让画笔从当前位置前进 $1000$ 个像素。

- backward/bk/back

    $1$ 个参数 $k$，相当于 `fd(-k)`，即沿笔头方向后退 $k$ 步。
 
- left/lt

    $1$个参数 $k$，表示你想让画笔左转 $k^\circ$。
 
- right/rt

    $1$ 个参数 $k$， 表示你想让画笔右转 $k^\circ$。

- goto

    $2$ 个参数 $x, y$，表示将画笔直线移动到 $(x, y)$ 的位置。如果画笔还没被抬起来，就会把轨迹画下来。
    
- circle

    用来画圆的（这是空心的）。参数最多 $3$ 个：$r, e, s$， $r$ 表示要画的圆的半径（必须要写），$e$ 表示圆心角度数（默认为整个圆），$s$ 表示要画的正多边形边数（不写会自动确定）。这里解释一下，电脑上画圆不太现实，都是用正 $n$ 边形（这个 $n$ 一般不小）模拟出来的，所以这个函数即可用来画圆也可以用来画正多边形。

- dot

    也是画一个圆。最多两个参数：$d$ 和 `color`。 $d$ 指要画的圆的直径，`color` 是一个字符串，表示要画的圆的颜色。与 `circle` 不同，`dot` 画的圆是实心的，而 `circle` 默认情况下是空心的。
 
- penup/up/pu

    抬起笔，此后在落下笔之前所有的操作都不会留下痕迹。

- pendown/pd/down

    落下笔。一般可以这么使：
    ```python
    def move(x, y):
        t.pu()
        t.goto(x, y)
        t.pd()
    ```

- speed

    设置速度的，有一个参数 $v$。你在用的时候，应保证 $0 \le v \le 10$。一般情况下，$v$ 是个整数，且越大代表越快，但也有例外：
    
    |   $v$ 的值    |     速度     |
    | :-----------: | :----------: |
    | 0 或"fastest" |     最快     |
    |  10 或"fast"  |      快      |
    | 6 或"normal"  | 正常（默认） |
    |  3 或"slow"   |      慢      |
    | 1 或"slowest" |     最慢     |

- pensize/width

    一个参数 $w$，表示画笔粗细。
 
- pencolor

    可以没有参数，此时返回画笔颜色（默认是黑色 ），也可以给出参数，此时是设置颜色。
    
    有以下几种设置模式：
    ```python
    t.pencolor("red")  # 设置为红色
    t.pencolor("#abcde")  # 设置为十六进制编码为“abcde”的颜色
    t.pencolor((1, 255, 255))  # 设置为青色。三个数值表示RGB编码
    t.pencolor(1, 255, 255)  # 同上，只不过上面传过去的是一个元组。
    ```

- fiilcolor
    
    填充颜色，同上。

- color
    
    两个都设置了，可以填写 $1 \sim 2$ 组参数。$1$ 组就是设置成一样的，两组就是先 `pencolor` 再`fillcolor`。
 
- bgcolor
    
    背景颜色，参数同 `pencolor`。

- bgpic
    
    背景图片，需要给一个字符串表示背景图片位置。如果是 `nopic` 就是删除背景图片。

- begin_fill
   
    记录一下，准备填充。

- end_fill
   
    把上次 `begin_fill` 以后画的东西填充成 `fillcolor`。
 
- write
    
    主要有 $2$ 个参数，文字和设置。可以把文字设置成属性后写上去，如开头的例子。

- hideturtle/ht
    
    隐藏画笔，能加速。
 
- showturtle/st
        
    显示画笔。
 
- shape
    
    海龟绘图，海龟在哪儿呢？
    
    就是这么设置的。
    
    给定一个参数，它会自动把海龟调整成对应的形状。
       
    支持以下形状：
    * "arrow"
    * "turtle"
    * "square"
    * "triangle"
    * "classic"
    
    可以自己去试一试~

- stamp
    
    把画笔印在当前位置，即在那个位置留下海龟的形状。
 

`turtle` 库就先介绍这些，不少了。自个儿试着画几张图去吧！

老规矩，有问题的欢迎私信联系我。
