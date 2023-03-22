---
emoji: 👽
title: Activity 생명주기
date: '2023-03-09 00:00:00'
author: 채윤
tags: 안드로이드 액티비티 생명주기
categories: android
---

## 왜 알아야 하는가?

앱의 완성도와 안정성을 높이기 위해 반드시 알아야 함.

- 다른 앱으로 전환 시 비정상 종료 되는 문제
- 사용자가 앱을 사용하지 않는데 시스템 리소스가 소비되는 문제
- 사용자가 앱을 나갔다 돌아왔을 때 진행 상태가 저장되지 않는 문제
- 화면이 가로 ↔ 세로 전환될 때 비정상 종료 되거나 진행 상태가 저장되지 않는 문제

## 콜백

![스크린샷 2023-03-09 오후 6.43.24.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b76d6d8b-9b39-4225-a6dc-23f86cf39ad2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.43.24.png)

### onCreate

- 필수적으로 구현해야 함
- Activity 생명주기 중 한 번만 발생해야 하는 로직을 실행
    - 멤버 변수 정의
    - UI 구성(setContentView, xml 레이아웃 파일 정의)
- savedInstanceState 매개 변수 수신 → Actiity 이전 저장 상태가 포함된 Bundle 객체
- 바로 onStart로 전환

### onStart

- Activity가 사용자에게 표시되기 위해 준비하고 있는 상태
- Activity를 포그라운드로 보내 상호 작용 할 수 있도록 준비
- 바로 onResume으로 전환

### onResume

- Activity가 포그라운드에 표시되어 사용자와 상호 작용 할 수 있는 상태
- 앱에서 포커스가 떠날 때까지 onResume 상태에 머무름

### onPause

- 사용자가 활동을 떠나는 첫 번째 신호(매우 짧음)
- 활동이 포그라운드에 있지 않지만, 잠시 후 다시 시작할 작업을 일시 중지 하거나 조정
- ex) 반투명 Activity가 띄워져 포커스는 없지만 화면에 보이는 상태
- 이 상태가 곧 활동 중단의 의미이므로 실행 중이지 않을 때 필요하지 않은 리소스를 해지할 수 있음
- 매우 짧은 시간이라 메소드가 끝나기 전에 Activity가 종료될 수 있으므로 onPause에서는 데이터를 저장하거나 네트워크 호출, DB의 IO 작업을 하면 안 됨

### onStop

- Activity가 사용자에게 더이상 표시되지 않는 상태
- CPU를 비교적 많이 소모하는 종료 작업을 실행해야 함(DB 저장)
- onStop 상태에 있을 때 Android OS에서 리소스 관리를 위해 해당 Activity가 포함된 프로세스를 소멸시킬 수 있음

### onDestroy

- Activity가 완전히 종료되기 전에 실행
- 호출되는 케이스
    - finish 호출되어 Activity가 종료될 때
    - configurationChange(ex. 기기 회전, 멀티 윈도우)로 인해 시스템이 Activity를 일시적으로 소멸시킬 때

### onRestart

- onStop 상태에서 액티비티가 다시 호출되었을 때
- 이후로는 onStart, onResume이 불림