---
title: "在Rustlings示例实践中学习Rust"
---
# Rustlings 学习程序，在实践中练习 Rust语法

Rustlings 是一个辅助学习者学习Rust语言的学习程序。

## 第1天 准备环境

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

### 格式化字符串有一个位置需要一个实参

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

## 第2天 变量

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

### 常量在声明时必须有明确的类型

exercises/variables/variables6.rs：

```rust
const NUMBER = 3;
fn main() {
    println!("Number {}", NUMBER);
}
```

error: missing type for `const` item

错误:缺少“const”常量类型。

常量声明时，给它一个类型即可：

```rust
const NUMBER: i32 = 3;
fn main() {
    println!("Number {}", NUMBER);
}
```

## 第3天 函数

### 不得调用当前作用域看不见或未定义的函数

functions/functions1.rs:

```
fn main() {
    call_me();
}
```

error[E0425]: cannot find function `call_me` in this scope

在当前范围内找不到函数'call_me'。

Rust函数必须先声明或引入，才可以调用。

```
fn main() {
    call_me();
}

fn call_me() {
  println!("hi");
}
```

有时候看不见，和不存在在调用者的视角看是等同的。如同外星人存不存在，于地球人是否可见，在地球人来看也是赞同的。

### 函数参数需要类型注释

functions/functions2.rs:

```
fn main() {
    call_me(3);
}

fn call_me(num:) {
    for i in 0..num {
        println!("Ring! Call number {}", i + 1);
    }
}
```

error[E0425]: cannot find value `num` in this scope

当前作用域下找不到变量num。

变量与函数一样，只有先声明或引入才可以使用。

但在这个示例里，还不是完全的变量不存在，而是变量声明得不正确、不合法。num作为函数参数，缺少必要的类型注释，所以被编译器判定为不存在。函数参数声明不正确，等于不存在。

```
fn call_me(num: i32) {
    for i in 0..num {
        println!("Ring! Call number {}", i + 1);
    }
}
```

函数参数需要类型注释，与变量声明的格式一样，变量名在前，中间是冒号，后面是类型。

### 函数参数定义几个，调用时便需要传递几个

functions/functions3.rs:

```
fn main() {
    call_me();
}

fn call_me(num: u32) {
    for i in 0..num {
        println!("Ring! Call number {}", i + 1);
    }
}
```

error[E0061]: this function takes 1 argument but 0 arguments were supplied

函数需要一个参数，但在调用时只提供了0个。

函数参数定义的个数，与调用时实际提供的个数（包括类型），需要匹配。

```
fn main() {
    call_me(3);
}

fn call_me(num: u32) {
    for i in 0..num {
        println!("Ring! Call number {}", i + 1);
    }
}
```

### 函数需要一个返回值类型，如果它有一个返回箭头

functions/functions4.rs:

```
fn main() {
    let original_price = 51;
    println!("Your sale price is {}", sale_price(original_price));
}

fn sale_price(price: i32) -> {
    if is_even(price) {
        price - 10
    } else {
        price - 3
    }
}

fn is_even(num: i32) -> bool {
    num % 2 == 0
}

```

error: expected type, found *

函数需要合适的参数，找到的类型不匹配。

函数sale_price的类型根据函数体代码，需要修改为i32。

```
fn sale_price(price: i32) -> i32{
    if is_even(price) {
        price - 10
    } else {
        price - 3
    }
}
```

Rust没有return，函数体的最后一个表达式即是函数准备返回的结果。在这个函数中，price - 10与price - 3即是准备的结果，判断的依据是它们的行尾都没有分号。

### 函数有返回值的语句行尾不加分号

functions/functions5.rs:

```
fn main() {
    let answer = square(3);
    println!("The square of 3 is {}", answer);
}

fn square(num: i32) -> i32 {
    num * num;
}
```

error[E0308]: mismatched types，expected `i32`, found `()`

类型不匹配，需要i32，找到了()。注：在Rust中，()也是一个类型，可以类比为JS中的void类型。

在Rust函数中，返回一个值不需要使用return关键字，但返回的值或表达式，基行尾不能加分号。有分号是寻常语句，没有分号才是返回语句。

```
fn square(num: i32) -> i32 {
    num * num
}
```

## 第4天 逻辑控制语句

### if语句使用C派写法，但条件不需要小括号

if/if1.rs:6:

```
pub fn bigger(a: i32, b: i32) -> i32 {
    // Complete this function to return the bigger number!
}

// Don't mind this for now :)
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn ten_is_bigger_than_eight() {
        assert_eq!(10, bigger(10, 8));
    }

    #[test]
    fn fortytwo_is_bigger_than_thirtytwo() {
        assert_eq!(42, bigger(32, 42));
    }
}
```

error[E0308]: mismatched types，expected `i32`, found `()`。

类型描述与上一个练习相同，但导致错误的原因不一定相同。排查代码错误需要仔细阅读编译器给出的错误反馈信息，并在此基础上作出进一步的正确的推断。

在这个练习中，函数bigger需要一个类型为i32的返回值，但是函数体没有什么返回，所以报错了。

解决方法只需要加上返回值即可：

```
pub fn bigger(a: i32, b: i32) -> i32 {
    if a >= b {
      a 
    } else { 
      b
    }
}

```

这里用到了if条件控制语句。在Rust中，if条件语句是逻辑控制语句——分支控制的一种，和Go语言一样，条件不需要使用小括号括住，代码块用花括号即可，花括号与if之间的部分，及花括号之间的部分自然就是条件语句。

为了加深印象，我们可以看一下C/C++语言的if语句写法：

```c
int a = 100;
if( a < 20 ) {
   printf("a 小于 20\n" );
} else {
   printf("a 大于 20\n" );
}
```

### 一个函数只有一个返回值类型，不可能同时存在两个返回值类型

if/if2.rs:

```
pub fn foo_if_fizz(fizzish: &str) -> &str {
    if fizzish == "fizz" {
        "foo"
    } else {
        1
    }
}

// No test changes needed!
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn foo_for_fizz() {
        assert_eq!(foo_if_fizz("fizz"), "foo")
    }

    #[test]
    fn bar_for_fuzz() {
        assert_eq!(foo_if_fizz("fuzz"), "bar")
    }

    #[test]
    fn default_to_baz() {
        assert_eq!(foo_if_fizz("literally anything"), "baz")
    }
}
```

error[E0308]: mismatched types，expected `&str`, found integer。

类型不匹配，需要字符串，却找到了整型。

这是一次真正的类型不匹配，函数的返回类型是&str，但在if语句的一个分支中却返回了数字。修改方法很简单，统一类型即可：

```
pub fn foo_if_fizz(fizzish: &str) -> &str {
    if fizzish == "fizz" {
        "foo"
    } else if fizzish == "fuzz" {
        "bar"
    } else {
        "baz"
    }
}
```

函数的返回值类型一定要统一，如果if语句在分支中承担了函数值的返回，则每个分支返回的类型必须相同。

在这个示例中，要想编译全部通过，不仅统一了函数foo_if_fizz的返回值类型，还在if控制语句中使用else if添加了一个分支条件。这是C派的写法，加一个分支，加一个else if即可。





## 参考资料

- 《The Rust Programming Language》：https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html
- https://www.rust-lang.org/zh-CN/learn
