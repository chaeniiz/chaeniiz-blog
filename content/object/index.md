---
emoji: 💽
title: object
date: '2023-03-08 00:00:00'
author: 채윤
tags: 데이터클래스 실드클래스 코틀린
categories: kotlin
---

## object

- 클래스를 정의함과 동시에 객체를 생성
- 싱글톤을 쉽게 만들 수 있는 키워드
- 생성자 사용 불가
- 프로퍼티, 메소드, 초기화 블록은 사용 가능
- 다른 클래스나 인터페이스를 상속받을 수 있음
- 에러 코드 정의할 때 많이 사용

```kotlin
fun main() {
    Counter
    println(Counter.count)
    Counter.countUp()
    Counter.countUp()
    println(Counter.count)
    // 초기화
    // 0
    // 2 (class였다면 모두 다른 인스턴스이기 때문에 0이었을 것)
}

object Counter {
    init {
        printlnt("초기화")
    }
    var count = 0
    fun countUp() {
        count++
    }
}
```

## companion object

- 동반 객체
- java의 static과 동일한 역할
- 클래스 내에 하나만 생성할 수 있음

```kotlin
class Book {
    companion object {
        val NAME = "hello"
        fun create() = Book() // builder, factory pattern
    }
}
```
