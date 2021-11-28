# 概述

<font color=red size=6>千里之行，始于足下</font>

## 零 - 并发 or 并行

&emsp;&emsp;初学操作系统时有两个概念很容易搞混，无论是教师讲课还是课后习题总会出现这两个概念：并行和并发。并行的意思是程序在多个内核中同时运行；并发指的是在同一时间段同时发生，给人的感觉是多个程序同时运行。实际上并发是一个处理器运行多个程序，处理器给每个程序分配一个很小的时间段，从微观角度看是串行，从宏观角度看约是同时运行。用Erlang之父Joe Armstrong的图来描述。

<div  align="center">
  <img src="/images/parallel_computing/0/concurrent_parallel.jpg" width="600" height="451" alt="并发和并行"/>
</div>

&emsp;&emsp;我们再来看看并发和并行的英文。并发是*concurrent*, 并行是*parallel*。看英文无论如何也不会混淆，为何中文翻译两个词如此接近！给人一种译者极不专业的感觉。我更愿意这样翻译，parallel是 **并行**，concurrent是 **段发**。每个概念在描述什么内容，一目了然。

&emsp;&emsp;好了，现在弄清楚了 **并行** 和 **段发** 概念。首先说明这里的 **并行计算** 或者 **并行编程** 不做区分，同时即有 **道** 也有 **术**。

## 壹 - 并行计算是什么

### 串行程序

&emsp;&emsp;我们在用程序解决一个具体的问题时会考虑如下几个步骤：
- 解决此问题需要分成几步
- 这些步骤的执行顺序是什么
- 将上述步骤编码为程序
- 用一个处理器按照既定的步骤来执行程序

<div  align="center">
  <img src="/images/parallel_computing/0/serialProblem.png" alt="串行"/>
</div>

### 并行程序

&emsp;&emsp;考虑归并排序。将序列平分为两个，然后同时对两个序列进行排序，排序之后再合并两个有序序列。并行的思路解决一个问题一般要考虑：
- 将问题切分成几个可以同时执行的步骤
- 每个步骤都按照串行的方式执行
- 每个步骤在多个不同的处理器上执行

<div  align="center">
  <img src="/images/parallel_computing/0/parallelProblem.png" alt="并行"/>
</div>

## 贰 - 并行计算的应用


## 叁 - 为什么用并行计算


## 参考资料

[Introduction parallel computing tutorial](https://hpc.llnl.gov/training/tutorials/introduction-parallel-computing-tutorial)

台湾新竹清华大学 [平行程式](https://ocw.nthu.edu.tw/ocw/index.php?page=course&cid=231)

