---
emoji: 🐏
title: 람다
date: '2023-03-01 00:00:00'
author: 채윤
tags: 람다 코틀린
categories: kotlin
---

## 정의

- 익명 함수
- 변수처럼 사용될 수 있음
- (Argument Type) → Return Type
- 한 번 사용되고 재사용되지 않는 함수

## 구현

```kotlin
fun main() {
    val a = fun() { println("hello") }
    val b: (Int) -> Int = { it * 10 }
    println(b(10)) // 100

    val c = { i: Int, j: Int -> i * j }
    val d: (Int, String, Boolean) -> String = { a, b, c -> b }

    hello(10, b) // 200
}

fun hello(a: Int, b: (Int) -> Int) {
    println(b(20))
}
```

## SAM (Single Abstract Method)

- 단일 추상 메소드
- 코틀린에서 함수형 인터페이스를 인자로 받는 자바 함수를 호출할 때는 인터페이스 객체를 람다로 대신 넘길 수 있음
- 함수형 인터페이스: 추상 메소드가 오직 하나뿐인 인터페이스(ex. setOnClickListener)