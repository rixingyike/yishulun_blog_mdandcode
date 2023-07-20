---
title: "在Rustlings示例实践中学习Rust"
---
# Rustlings 学习程序，在实践中练习 Rust语法

Rustlings 是一个辅助学习者学习Rust语言的学习程序。

## 第1天

### 学习程序的安装、说明与启动

手动安装脚本：

```bash
git clone -b 5.5.1 --depth 1 https://github.com/rust-lang/rustlings
cd rustlings
cargo install --force --path .
```

5.5.1 是目前的最新版本，如果有更新的版本，可以更改这里的数字，或者将-b 参数去掉。将内容进行版本管理，可以持续迭代，这不失一个好办法。

Rustlings 是一个学习程序，它会监控目录下的文件，它是有程序代码需要运行的，所以最后一行执行了 cargo install。cargo 是 Rust 语言的包管理工具，这里执行了安装，因为当前 rustlings 目录其实是一个 Rust 语言项目。

如果执行指令时遇到错误，可以执行：

`rustup update`

安装以后，就可以运行这个学习程序了：

`rustlings watch`

这是以管控模式在监控子目录 exercises 下的内容变动，当我们学习者在学习过程中改动内容后，学习程序会帮助我们评判改动的正确与否，给出错误提示和正常操作的建议提示，并指出下一步练习的文件路径。

运行监控指令以后，在终端里会看到：

```
Remove the I AM NOT DONE comment in the exercises/intro/intro1.rs file to move on to the next exercise.
```

它的意思是，将文件 intro1.rs 里的注释“I AM NOT DONE”移除，练习将移向下一个文件。这是这个学习程序的基本逻辑，靠学习者移除文件注释中的特定文本，控制学习进度向下推进。

除了第一个文件 intro1.rs 外，每一个练习文件都有一个甚至更多的错误，让学习者练习指定的知识点。如果对解决当前异常没有头绪，可以在终端中——在当前 watch 模式启动的状态下，敲入以下指令获得指示：

`hint`

注意：默认官方的学习程序是英文的，包括终端里显示的错误文本和提示文本也是英文的，如果你在寻找该学习程序的中文版本，可以看这里：https://github.com/rust-lang-cn/rustlings-cn。

当学习者从文件 intro1.rs 里移除“I AM NOT DONE”后，学习征程就开始了。当一个练习完成后，下一个练习的文件路径会自动出现在终端的反馈中。

### 格式化字符串需要参数

**exercises/intro/intro2.rs**：

```rust
fn main() {
 println!("Hello {}!");
}
```

1 positional argument in format string, but no arguments were given。格式字符串中有 1 个位置参数，但实际没有给出任何参数。

修改后：

```rust
fn main() {
 println!("Hello {}!", "ly");
}
```

### 不能使用未声明的变量

exercises/variables/variables1.rs：

```Rust
fn main() {
 x = 5;
 println!("x has the value {}", x);
}
```

cannot find value `x` in this scope。在作用域范围内找不到值“x”。

修改后：

```rust
fn main() {
 let x = 5;
 println!("x has the value {}", x);
}
```

Rust 的变量必须先声明后使用。这一点与 js 不同，js 中的变量充许未声明而直接使用，js 的这个语言特性是编程语言弱类型的特征之一，而 Rust 是一门强类型语言。

### 变量需要类型注释

exercises/variables/variables2.rs：

```rust
fn main() {
 let x;
 if x == 10 {
  println!("x is ten!");
 } else {
  println!("x is not ten!");
 }
}
```

type annotations needed。需要类型注释。

第 2 行，变量 x 在使用前必须初始化，且声明类型，这是编程语言强类型的语言特征之一。

修改后：

```rust
fn main() {
 let x: i32 = 0;
 if x == 10 {
  println!("x is ten!");
 } else {
  println!("x is not ten!");
 }
}
```

第 2 行，i32 是 32 位的有符号整数，它是 Rust 语言的一个有效类型。Rust有符号整数类型有i8, i16, i32, i64, i128，无符号整数类型有u8 、 u16 、 u32 、 u64 、 u128，浮点数类型有f32 、 f64。此外还有char类型，它是Unicode字符类型，值包括'a'、'∞'这些。还有编程语言中常见的bool类型，只有true和fase两个值。还有Rust语言特有的单元类型，它有两个小括号标识，它代表一组数据，默认是空元组。以上这些都是Rust语言的基本类型。

因为 Rust 有自动的类型推断，当给变量提供值以后，Rust 编译器可以根据值自动推断出合适的类型。所以下面的简单修改也是正确的：

```Rust
fn main() {
 let x = 0;
 if x == 10 {
  println!("x is ten!");
 } else {
  println!("x is not ten!");
 }
}
```

第 2 行，变量 x 已经没有了类型注释，它由编译器自动推断了。

### 变量需要显式初始化

exercises/variables/variables3.rs：

```Rust
fn main() {
    let x: i32;
    println!("Number {}", x);
}
```

used binding `x` isn't initialized。使用的变量' x '未初始化。

Rust变量不仅需要类型注释，还需要初始化。第2行，变量x需要一个初始值。这一点与Go语言不同，Go语言也是强类型语言，但Go语言在变量被安排类型注释以后，变量会有一个默认的零值，对于整数类型，一般零值是0，例如：

```go
var a int32
```

在Go语言中，变量a在声明时没有初始化，它却有一个默认值——也就是零值，即0。在Rust语言中，情况与Go语言不同，Rust变量在有了类型标注以后，并不会自动拥有一个默认值。在Rust语言中，Default trait是管理所有类型的trait（特征），int32类型也实现了Default trait，并且返回了0，但这个默认值并不会在变量需要初始化的自动冒出来。在Rust语言中，如果我们要使用Default trait定义的默认值，也必须显式调用，例如：

```Rust
let x:i32 = i32::default()
```

在[这里](https://juejin.cn/post/7222294792893153317)（https://juejin.cn/post/7222294792893153317）有一段关于Rust默认值的描述：

> 在 Rust 中，每个类型都有一个默认值，这个默认值可以通过 Default trait 来获取。Rust 的默认值是零值，也就是说，如果一个类型没有定义它的默认值，那么它的默认值就是 0 或者 null。

这一段描述极容易引起歧义，看到了，略过即可。

对该示例最简单的方法是显式给变量一个初始值，修改后：

```Rust
fn main() {
    let x: i32 = 0;
    println!("Number {}", x);
}
```

### 变量默认不能修改

exercises/variables/variables4.rs：

```Rust
fn main() {
    let x = 3;
    println!("Number {}", x);
    x = 5; // don't change this line
    println!("Number {}", x);
}
```

**cannot assign twice to immutable variable `x`。不可变变量' x '，不能赋值两次。**

Rust变量默认是不可修改的，第2行变量x初始化以后，在第4行，再尝试将其修改为5便会引发异常。这在其它编程语言中是不可想象的，从来没有哪个高级编程语言默认让变量不可修改，Rust是第一个。

修改后：

```Rust
fn main() {
    let mut x = 3;
    println!("Number {}", x);
    x = 5; // don't change this line
    println!("Number {}", x);
}
```

第2行，mut是一个修饰符，用它修饰，代表变量可被修改的开关被打开了。

### 类型必须匹配，变量可以遮蔽

exercises/variables/variables5.rs：

```Rust
fn main() {
    let number = "T-H-R-E-E"; // don't change this line
    println!("Spell a Number : {}", number);
    number = 3; // don't rename this variable
    println!("Number plus two is : {}", number + 2);
}

```

mismatched types。类型必须匹配。第4行，将整型值赋值给字符串变量是非法的。

修改后：

```Rust
fn main() {
    let number = "T-H-R-E-E"; // don't change this line
    println!("Spell a Number : {}", number);
    let number = 3; // don't rename this variable
    println!("Number plus two is : {}", number + 2);
}
```

在Rust语言中，变量默认是不可修改的，但却是可以重复声明的，这一特征被称为“遮蔽”。Rust似乎不关心历史，对于已经执行过的代码，它不关心，它只关心现在和将来。在Go语言中，像下面这样在同一个作用域下，重命名一个已经存在的变量是非法的：

```go
package main

import "fmt"

func main() {
	var number = "T-H-R-E-E"
	var number = 3
	fmt.Println("Hello, 世界,%d", number)
}

```

第7行会报出一个“number redeclared in this block”的异常。

## 第2天

exercises/variables/variables6.rs：

```

```

## 参考资料

- 《The Rust Programming Language》：https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html
- https://www.rust-lang.org/zh-CN/learn
