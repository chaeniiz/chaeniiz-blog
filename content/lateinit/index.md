---
emoji: 🖋
title: 초기화 지연
date: '2022-03-08 00:00:00'
author: 채윤
tags: 범위지정함수 코틀린
categories: kotlin
---

## 정의

변수를 선언할 때 값을 지정하지 않고, 나중에 지정할 수 있는 방법

## 목적

- 메모리를 효율적으로 사용하기 위해서
- null safe한 value를 사용하기 위해서

## lateinit

- variable
- 변수 타입을 지정해 줘야 함
- primitive 타입은 사용할 수 없음
- 선언 후 나중에 초기화해 줘도 됨

## lazy

- value
- 선언과 동시에 초기화해야 함
- 호출 시점에 초기화가 이루어짐
