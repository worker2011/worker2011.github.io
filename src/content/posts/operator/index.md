---
title: 运算符的关系简览
published: 2024-01-25 22:00:24
description: 给出了一张 C++ 中运算符运算顺序的表格。
pinned: true
permalink: operator
author: embed_huang
tags: [C艹]
image: calc.png
updated: 2026-04-11 14:45:14
---

**转载自 <https://blog.csdn.net/huangblog/article/details/8271791>**。

<p>&nbsp;</p>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 18px; color: #ff0000;">C/C++运算符优先级</span></strong></p>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left;">&nbsp;</p>
<table style="color: #000000; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left; width: 612px;" border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">优先级</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">运算符</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">名称或含义</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">使用形式</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">结合方向</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">说明</strong></p>
</td>
</tr>
<tr>
<td rowspan="4">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">1</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">[]</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">数组下标</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">数组名[常量表达式]</p>
</td>
<td rowspan="4">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">()</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">圆括号</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">(表达式）/函数名(形参表)</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">.</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">成员选择（对象）</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">对象.成员名</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">-&gt;</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">成员选择（指针）</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">对象指针-&gt;成员名</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td colspan="6" width="612">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">&nbsp;</p>
</td>
</tr>
<tr>
<td rowspan="9">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">2</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">-</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">负号运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">-表达式</p>
</td>
<td rowspan="9">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: red;">右到左</span></strong></p>
</td>
<td rowspan="7">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">单目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">~</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">按位取反运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">~表达式</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">++</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">自增运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">++变量名/变量名++</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">--</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">自减运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">--变量名/变量名--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">*</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">取值运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">*指针变量</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&amp;</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">取地址运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">&amp;变量名</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">!</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">逻辑非运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">!表达式</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">(</span><span class="fr-fix-3f915ed7" style="color: blue;">类型</span><span class="fr-fix-3f915ed7" style="color: blue;">)</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">强制类型转换</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">(数据类型)表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">sizeof</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">长度运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">sizeof(表达式)</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td colspan="6" width="612">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">&nbsp;</p>
</td>
</tr>
<tr>
<td rowspan="3">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">3</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">/</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">除</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式/表达式</p>
</td>
<td rowspan="3">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td rowspan="3">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">*</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">乘</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式*表达式</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">%</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">余数（取模）</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">整型表达式%整型表达式</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">4</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">+</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">加</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式+表达式</p>
</td>
<td rowspan="2">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td rowspan="2">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">-</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">减</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式-表达式</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">5</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&lt;&lt; </span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">左移</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量&lt;&lt;表达式</p>
</td>
<td rowspan="2">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td rowspan="2">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&gt;&gt; </span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">右移</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量&gt;&gt;表达式</p>
</td>
</tr>
<tr>
<td colspan="6" width="612">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">&nbsp;</p>
</td>
</tr>
<tr>
<td rowspan="4">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">6</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&gt; </span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">大于</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式&gt;表达式</p>
</td>
<td rowspan="4">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td rowspan="4">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&gt;=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">大于等于</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式&gt;=表达式</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&lt; </span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">小于</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式&lt;表达式</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&lt;=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">小于等于</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式&lt;=表达式</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">7</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">==</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">等于</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式==表达式</p>
</td>
<td rowspan="2">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td rowspan="2">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">！</span><span class="fr-fix-3f915ed7" style="color: blue;">=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">不等于</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式!= 表达式</p>
</td>
</tr>
<tr>
<td colspan="6" width="612">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">&nbsp;</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">8</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&amp;</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">按位与</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式&amp;表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">9</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">^</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">按位异或</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式^表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">10</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">|</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">按位或</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式|表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">11</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&amp;&amp;</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">逻辑与</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式&amp;&amp;表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">12</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">||</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">逻辑或</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式||表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">双目运算符</p>
</td>
</tr>
<tr>
<td colspan="6" width="612">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">&nbsp;</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">13</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">?:</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">条件运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式1?</p>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式2: 表达式3</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: red;">右到左</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><span style="color: red;">三目运算符</span></p>
</td>
</tr>
<tr>
<td colspan="6" width="612">&nbsp;</td>
</tr>
<tr>
<td rowspan="11">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">14</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">赋值运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量=表达式</p>
</td>
<td rowspan="11">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: red;">右到左</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">/=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">除后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量/=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">*=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">乘后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量*=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">%=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">取模后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量%=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">+=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">加后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量+=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">-=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">减后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量-=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&lt;&lt;=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">左移后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量&lt;&lt;=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&gt;&gt;=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">右移后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量&gt;&gt;=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">&amp;=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">按位与后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量&amp;=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">^=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">按位异或后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量^=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">|=</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">按位或后赋值</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">变量|=表达式</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
<tr>
<td colspan="6" width="612">
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">&nbsp;</p>
</td>
</tr>
<tr>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7">15</strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="color: blue;">，</span></strong></p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">逗号运算符</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">表达式,表达式,&hellip;</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">左到右</p>
</td>
<td>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;" align="center">--</p>
</td>
</tr>
</tbody>
</table>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left;">&nbsp;</p>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; font-size: 14px; line-height: 26px; text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 18px; color: #ff0000;">说明：</span></strong></p>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px; font-family: Arial; line-height: 26px; text-align: left;">&nbsp;</p>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;"><span style="font-size: 14px; color: #3366ff;"><strong class="fr-fix-3f915ed7"> 运算符共分为15级，1级优先级最高，15级优先级最低。</strong></span></p>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;"><span style="font-size: 14px; color: #3366ff;"><strong class="fr-fix-3f915ed7"> 同一优先级的运算符，运算次序由结合方向所决定。(结合性：2 13 14 是从右至左 其他都是 从左至右)<br />简单记就是：！ &gt; 算术运算符 &gt; 关系运算符 &gt; &amp;&amp; &gt; || &gt; 赋值运算符</strong></span></p>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;"><span style="font-size: 14px; color: #3366ff;"><strong class="fr-fix-3f915ed7">&nbsp;</strong></span></p>
<p style="text-align: left; margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #ff0000;">再详细一点，附带一个口诀。(网上找的)</span></strong></p>
<p style="margin-top: 0px; margin-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">&nbsp;</p>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">括号成员第一; </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;"> //括号运算符[]() 成员运算符. -&gt;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">&nbsp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">全体单目第二; </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;">//所有的单目运算符比如++、 --、 +(正)、 -(负) 、指针运算*、&amp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">乘除余三,加减四; </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;"> //这个"余"是指取余运算即%</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">&nbsp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">移位五，关系六; </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;">//移位运算符：&lt;&lt; &gt;&gt; ，关系：&gt; &lt; &gt;= &lt;= 等</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">&nbsp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">等于(与)不等排第七; </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;">//即== 和!=</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">&nbsp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">位与异或和位或; </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">"三分天下"八九十; <span class="fr-fix-3f915ed7" style="text-align: left;"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;"> //这几个都是位运算: 位与(&amp;)异或(^)位或(|) </span></span></span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">&nbsp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">逻辑或跟与; </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;"> //逻辑运算符:|| 和 &amp;&amp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">&nbsp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">十二和十一; </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;">//注意顺序:优先级(||) 底于 优先级(&amp;&amp;) </span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">&nbsp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">条件高于赋值, </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;"> //三目运算符优先级排到13 位只比赋值运算符和","高</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">&nbsp;</span></strong></div>
<div style="text-align: left;"><strong class="fr-fix-3f915ed7"><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #009900;">逗号运算级最低! </span><span class="fr-fix-3f915ed7" style="font-size: 14px; color: #cc6600;"> //逗号运算符优先级最低</span></strong></div>
