---
emoji: 🎨
title: View가 그려지는 과정
date: '2022-03-09 00:00:00'
author: 채윤
tags: 안드로이드 뷰
categories: android
---

![스크린샷 2023-03-09 오후 7.32.26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0eeb44cc-ded0-4402-9d01-56f9a1fa4405/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.32.26.png)

전위순회 방식을 쓰기 때문에, 부모부터 자식 뷰 순서로 그려지게 됨

## onMeasure

- 뷰의 크기를 계산
- 모든 뷰는 각각 자신의 width, height를 계산
- measure 단계에서는 부모 - 자식 뷰 간의 크기 정보 전달을 위해 두 가지 클래스를 사용
    - `ViewGroup.LayoutParams`: 자식 뷰가 부모 뷰에게 자신이 어떻게 측정되고 위치를 정할지 요청할 때 사용(how big)
        - DP, PX…: 자식 뷰가 원하는 사이즈
        - MATCH_PARENT: 부모 뷰 사이즈와 똑같이 자식 뷰 사이즈 지정
        - WRAP_CONTENT: 부모 뷰 안에서 content를 표현할 수 있는 fit한 사이즈 지정
    - `ViewGroup.MeasureSpecs`: 부모 뷰가 자식 뷰에게 요구 사항을 전달할 때 사용
        - UNSPECIFIED: 부모 뷰는 자식 뷰가 원하는 사이즈로 결정
        - EXACTLY: 부모 뷰가 자식 뷰의 사이즈를 정확히 지정할 때
        - AT_MOST: 부모 뷰가 자식 뷰의 최대 사이즈를 지정할 때

## onLayout

- 뷰의 크기와 위치를 할당
- 부모 기준의 상대적 위치(left, top, right, bottom)을 계산

## onDraw

- 뷰를 그리는 단계
    - canvas: 뷰의 모양을 그리는 객체
    - paint: 뷰의 색상을 칠하는 객체
- onMeasure에서 측정한 크기와 onLayout에서 계산한 위치에 뷰를 그림
- 이 콜백은 언제든 다시 호출될 수 있음
    - scroll이나 swipe를 하게 되면 뷰는 onDraw를 다시 호출
    - 객체 할당과 같이 리소스가 많이 소모되는 로직은 추가하지 말 것

## ViewUpdate

런타임에 뷰를 다시 그리게 하는 함수

- invalidate
    - view에 변화가 생겨서 다시 그려야 할 때
    - color 변화 등
- requestLayout
    - view를 처음부터 그려야 할 때
    - 크기가 변화해서 measure부터 다시 해야 할 때

![스크린샷 2023-03-09 오후 7.43.21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5572c1c9-46b4-411c-bea0-d60579dc5a37/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.43.21.png)

![스크린샷 2023-03-09 오후 7.45.54.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26195bc6-316a-4760-8e8d-63bec74dee17/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-03-09_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.45.54.png)