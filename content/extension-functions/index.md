---
emoji: ➕
title: 확장 함수
date: '2023-03-01 00:00:00'
author: 채윤
tags: 확장함수 코틀린
categories: kotlin
---

## 정의

기존에 정의되어 있는 클래스에 함수를 추가하는 기능

```kotlin
fun main() {
    val test = Test()
    Test().hello()
    test.hi()
}

fun Test.hi() = print("하이")

class Test() {
    fun hello() = println("안녕")
    fun bye() = printlnt("잘가")
}
```