---
emoji: 💽
title: data class, sealed class
date: '2023-03-08 00:00:00'
author: 채윤
tags: 데이터클래스 실드클래스 코틀린
categories: kotlin
---

## data class

- 데이터를 담기 위한 클래스
- `toString()`, `hashCode()`, `equals()`, `copy()` 메소드를 자동으로 생성
    - override하면 직접 구현한 코드를 사용
    
    ```kotlin
    fun main() {
        val person = Person("수지", 24)
        val dog = Dog("해피", 24)
        println(person.toString()) // Person@880ec60
        println(dog.toString()) // Dog(name=해피, age=24)
        println(dog.copy(age = 3)) // Dog(name=해피, age=3)
    }
    
    data class Dog(
        val anme: String,
        val age: Int
    )
    
    class Person(
        val name: String,
        val age: Int,
    )
    ```
    
- 한 개 이상의 프로퍼티가 있어야 함
- 데이터 클래스는 abstract, open, sealed, inner를 붙일 수 없음
- 상속이 불가능
    - 상속받았을 때 자동으로 생성되는 메소드 네 개가 어떻게 될지 모르기 때문

## sealed class

- 추상 클래스로, 상속받은 자식 클래스의 종류를 제한
- 컴파일러가 sealed class의 자식 클래스가 어떤 것인지 앎
- when과 함께 쓰일 때 장점을 느낄 수 있음

```kotlin
abstract class Cat
class BlueCat : Cat()
class GreenCat : Cat()
class RedCat : Cat()

fun main() {
    val cat: Cat = BlueCat()
    val result = when(cat) {
        is BlueCat -> "blue"
        is RedCat -> "red"
        is GreenCat -> "green"
        else -> "none" // abstract class는 else가 꼭 필요
    }
    printlnt(result)
}
```

```kotlin
sealed class Cat
class BlueCat : Cat()
class GreenCat : Cat()
class RedCat : Cat()

fun main() {
    val cat: Cat = BlueCat()
    val result = when(cat) {
        is BlueCat -> "blue"
        is RedCat -> "red"
        is GreenCat -> "green"
        // selaed class는 else가 필요없음
    }
    printlnt(result)
}
```

- RecyclerView의 뷰 타입 체킹할 때 사용
