---
emoji: 🕚
title: 시간 복잡도
date: '2023-03-14 00:00:00'
author: 채윤
tags: 자료구조 시간복잡도 big-o
categories: 자료구조
---

## 정의

- 알고리즘의 실행 속도
- 반복문이 지배함

## 알고리즘 성능 표기법

- 빅 오 표기법
    - 알고리즘 최악의 실행 시간을 표기
    - 가장 많이/일반적으로 사용함
    - 아무리 최악의 상황이라도 이 정도 성능은 보장한다는 의미이기 때문
- 오메가 표기법
    - 최상의 실행 시간
- 세타 표기법
    - 평균 실행 시간

## Big-O 표기법

- O(입력)
    - 입력 n에 따라 결정되는 시간 복잡도 함수
    - O(1), O(logn), O(n), O(nlogn), O(n^2), O(2^n), O(n!) 등으로 표기함
    - 입력 n의 크기에 따라 기하급수적으로 시간 복잡도가 늘어날 수 있음
        - O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(2^n) < O(n!)
    - 단순하게 입력 n에 따라 몇 번 실행이 되는지 계산하면 됨
- n이 1이든, 100이든, 1000이든, 10000이든 실행을
    - O(1)
        - 무조건 2회(상수회) 실행한다
    - O(n)
        - n에 따라 n + 10번, 3n + 10번 등 실행한다
    - O(n^2)
        - n에 따라 n^2번, n^2 + 1000번, 100n^2 - 100번, 300n^2 + 1번 등 실행한다
        