# 들어가기

프론트엔드 기초 세션 2주차가 시작됐습니다. 1주차에는 화면 기획에 대한 내용과 요소 정렬을 위한 `flex`의 간단한 사용법을 배웠습니다.

> 1주차에서 `flex-direction`에 따른 `justify-content`와 `align-items` 설명에서 부족한 점이 있었습니다. 혼란을 끼친 것 같아 해당 내용을 포함한 내용을 새로 촬영해 영상을 업로드할 예정입니다.

이번 주차에는 `position`을 이용한 요소 배치와 css 애니메이션에 대해서 간략하게 다뤄봅니다. 이번 주차는 대부분 실습으로 이루어질 예정입니다.

## 1. position 다루기

지난 주에 우리는 자식 요소에 대해서 일괄적으로 정렬하도록 했습니다. 보통은 예외를 두지 않고 일괄적으로 정렬시키지만, UI에 따라 규칙을 벗어난 요소를 만들어야 할 경우가 있습니다. 아래의 이미지를 봅시다.

![프론트엔드 완성 예제](https://raw.githubusercontent.com/likelion-syu/2020-frontend-basic/master/sessions/week2/assets/img/img1.png?raw=true)

위 이미지에서 붉은 버튼은 일반적인 정렬과 조금 다릅니다. 보통 `div`로 나누어진 경우 버튼이 각 영역 안에 배치되어야 하나, 이미지에 보면 다른 영역의 경계선에 위치하고 있는 것을 알 수 있습니다. 이런 UI의 경우 `position`을 이용해
적용할 수 있습니다.

```html
<div class="parent">
    <div class="child"><p>1</p></div>
    <div class="child"><p>2</p></div>
    <div class="child"><p>3</p></div>
    <div class="child absolute"><p>4</p></div>
</div>
```

보통 HTML에서 정렬은 HTML 문서의 구조를 그대로 따릅니다. 요소의 순서와 계층을 그대로 따라가게 되는 것이 보통입니다. 위 처럼 코드를 작성한다면 1,2,3,4의 순서로 작성될 것입니다.

이런 특성을 벗어나게 하는 값은 `position`의 `absolute`라는 값 입니다. `absolute`
값을 가진 요소는 최상위 부모 혹은 `relative`값을 가진 부모를 기준으로 위치를 임의로 변경할 수 있습니다.

```html
<style>
    .parent {
        position: relative;
        width: 300px;
        height: 300px;
    }
    .child {
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>
<div class="parent">
    <div class="child"></div>
</div>
```

위와 같은 구조를 갖는다면, `child` 요소는 `parent` 요소의 너비, 높이를 기준으로 배치되게 됩니다. 이 때, 배치는 `top` , `left` , `bottom` , `right`를 사용할 수 있습니다. 저 위치는 각각 `parent` 내부를 의미합니다. `top : 0`라면 `parent`의 상단에 달라 붙는 식입니다.

이 때, `top` / `bottom` , `left` / `right`는 서로 반대의 방향을 가리키므로 하나씩만 사용할 수 있습니다. `top`을 적용했다면, `bottom`은 사용할 수 없는 식 입니다.

실습 파일을 수정하며 실제로 수정해보는 것을 추천합니다.

## 2. CSS animation 다루기

CSS를 이용하면 UI에 필요한 애니메이션도 구현할 수 있습니다. 애니메이션은 보통 특정 시간동안 크기나 색, 회전 등을 일으키는 일이라고 얘기할 수 있겠습니다. CSS animation도 마찬가지 입니다. 특정 CSS 속성에서 일정 시간동안 값을 변경시킵니다. 아래의 예를 봅시다.

```html
<style>
    .item {
        width: 100px;
        height: 50px;

        background-color: red;

        transition: 0.3s;
    }
    .item:hover {
        background-color: blue;
    }
</style>
<div class="item"><p>item</p></div>
```

위와 같이 작성하면 `item` 클래스를 가진 요소에 마우스를 올렸을 때, 붉은색에서 파란색으로 배경색이 서서히 변경됩니다. 이 경우에는 `:hover`속성을 이용해 특정 요소의 특정 상황에서(이 경우에는 마우스를 올려놓았을 때) 원래 속성을 다른 값으로 변경되도록 해줍니다. 이 것이 가능하게 해주는 것은 `transition` 속성이 적용되어 있기 때문입니다.

`transition` 속성은 요소의 값이 변경될 때, `transition`이 값으로 가지고 있는 시간동안 서서히 변경되도록 해줍니다. 보통은 `(초)s`단위의 값을 사용합니다.

시간만 값으로 주어질 경우 모든 변경에 대해 일괄적으로 적용됩니다. 만약 특정 요소에 따라 다른 시간을 주고 싶다면, `transition : width 1s background-color 3s`등으로 변경할 수 있습니다.

이 애니메이션 요소들은 모든 CSS 속성들에 대해 대응됩니다. 이런 애니메이션에 조금 더 생동감을 불어넣어주는 것이 `transform`속성입니다.

`transform` 속성은 문자 그대로, 특정 요소를 변형시키는 속성입니다. 말그대로 변형 시키는 css 속성이기 때문에, 요소를 비틀거나 회전시키는 등의 다양한 기능을 할 수 있습니다. 각 기능들은 해당 함수(`skewx`, `rotate`) 등의 함수를 사용해 적용할 수 있습니다.

```html
<style>
    .item {
        width: 100px;
        height: 100px;
        background-color: red;

        /* 요소를 회전 시킵니다 */
        transform: rotateZ(45deg);
    }
</style>
<div class="item">
    <p>Hello World</p>
</div>
```

실제 사용례는 실습 파일에서 확인해봅시다.
