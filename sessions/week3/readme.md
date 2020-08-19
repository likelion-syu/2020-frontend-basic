# 들어가기

프론트엔드 기초 3주차가 시작됐습니다. 이번 주차에는 본격적으로 자바스크립트를 이용한 HTML 다루기를 시작합니다. 자바스크립트의 문법이나 조금 어려운 부분은 차치하고, 필요한 내용만 사용예제를 통해 배워보도록 합니다. 그렇기 때문에 프로그래밍 언어를 배워본 적이 없다면 예제를 이해하는데 조금 어려움이 있을 수 있습니다.

## 1. HTML 요소를 다루기

지난 주차까지 배웠던 `css`와 `html`의 내용을 더 다이나믹하게 활용하기 위해서 자바스크립트를 사용합니다. 자바스크립트로는 `html`요소의 내용을 읽어오거나, 변경하거나, 클래스 명을 추가 / 삭제 하는 등의 행동을 할 수 있고, 나아가서 `html`을 직접 자바스크립트로 생성해 실제 문서에 추가하여 사용할 수도 있습니다.

우리는 자바스크립트로 할 수 있는 모든 일을 배우는 게 아닌, 실제 사용 예제를 통해서 필요한 변수들을 먼저 빠르게 습득하도록 하겠습니다.

### 1.1. 요소를 선택하기

특정 `html`요소의 값을 변경하거나 여러가지 동작을 수행하기 위해서는 `html`요소를 자바스크립트로 불러와 변수에 저장하는 과정을 먼저 거쳐야 합니다. 기존에는 `document.getElementById`등의 함수를 사용했으나, 저희는 `document.querySelector`라는 함수를 사용합니다. 아래의 예제를 봅시다.

```html
<script>
    // id가 elem인 요소를 찾아옴
    const elem = document.querySelector("#elem");
    // 해당 요소의 class들을 모두 출력
    console.log(elem.classList);
</script>
<div id="elem" class="container"></div>
```

`querySelector`는 예제에서 볼 수 있듯이, 파라미터로 넘겨받은 조건을 만족하는 `html`요소를 반환합니다. 이 때, 조건을 만족하는 요소는 하나만 반환하게 됩니다. 여러 요소가 조건을 만족하는 경우 `querySelectorAll`함수를 사용해야 합니다.

여기서 파라미터에서 넘겨받은 조건이란, `css`의 `selector`를 이야기 합니다. `#id` , `.className`등의 문자열을 넘겨주게 됩니다. `css`에서 특정 요소들을 선택하기 위해서 이미 `selector`를 사용하고 있으므로 익히는데 별다른 어려움은 없겠지만, 기존에 익숙하지 않으신 분들은 추가로 공부할 필요가 있습니다.

이렇게 `selector`를 이용해 불러온 `html`요소는 자바스크립트 변수로 저장됩니다. 이때 이 변수(`html` 요소)가 가진 값들은 다양한 것들이 있습니다. 주로 사용하는 것은 아래와 같습니다.

```javascript
const elem = document.querySelector("#something");
console.log(elem.value); // 요소의 값, 주로 input등에서 사용
console.log(elem.innerHTML); // 요소의 자식 HTML 요소, 실제 HTMLElement 객체를 반환
console.log(elem.innerText); // 요소의 텍스트, value와 다르다. p, h1... 태그의 내용등에 주로 사용
console.log(elem.classList); // 요소의 클래스 리스트
console.log(elem.attributes); // 요소의 속성 목록
```

우리가 주로 사용하는 것은 위의 항목들 정도이고, 추가로 사용되는 부분들은 때때로 검색해 사용하는 것을 추천합니다. 모든 항목을 외울 필요는 없습니다.

특히 우리는 UI에 관여할 것이기 때문에, `classList`등의 요소를 자주 사용하게 될 수 있습니다.

### 1.2. 요소를 생성하기

요소를 선택하여 수정하는 기능도 할 수 있지만, 데이터를 받아와 요소를 추가하는 기능도 종종 수행하게 됩니다. 이때의 경우는 아래와 같습니다.

```html
<script>
    // 특정 요소를 선택
    const list = document.querySelector(".list");
    // 안에 들어갈 p태그를 생성
    const item = document.createElement("p");
    // 내용을 작성
    item.innerText = "item !!";
    // list div의 자식요소로 item 요소를 추가
    list.appendChild(item);
</script>
<div class="list">
    <!-- <p>item !!</p> -->
</div>
```

위의 내용처럼 `createElement`함수를 사용해 `p`태그를 생성하고 내용을 채워넣어 추가할 수 있습니다. 실제 `html`요소에 넣을 수 있는 모든 내용들은 자바스크립트로 모두 동적 생성할 수 있습니다. 다만, 내용이 복잡한 `html`요소의 경우 코드의 줄 수가 점점 길어질 수 있습니다.

## 2. javascript + HTML 활용하기

javascript로 html요소를 다루거나 추가하는 법을 살짝 배워봤으니, 이제 실제 사용예제를 알아볼 차례입니다.

### 2.1. class를 이용해 상태에 따른 css 조작

우리는 `html`요소를 배치하는 법을 배우고 지난 주차에는 `class`와 의사 셀렉터를 이용한 `animation`등을 배웠습니다. 이를 통해서, 특정 **상태**에 따라 클래스나 의사 셀렉터를 이용해 요소가 특정 `css` 속성에 대해 하나 이상의 값을 가지게 될 수 있다는 것을 알았습니다. 예를 들자면, 기존에는 '+'형태였던 버튼이 특정 상황에서는 'x'자로 보이도록 회전하는 등의 기능을 예로 들 수 있겠습니다.

의사 셀렉터만을 사용한다면 단순히 회전하는 등의 애니메이션은 가볍게 만들 수 있겠으나, '열림 / 닫힘'등의 상태를 가져야하는 경우라면 의사 셀렉터만으로는 해당 기능을 구현할 수 없습니다. 이 때 우리는 `class`를 사용합니다.

```html
<style>
    .text {
        font-size: 1em;
        color: #fff;
    }
    .text.highlight {
        color: #ff0000;
    }
</style>
<script>
    function change() {
        const elem = document.querySelector(".text");
        if (elem.classList.contains("highlight")) {
            elem.classList.remove("highlight");
        } else {
            elem.classList.add("highlight");
        }
    }
</script>
<p class="text">Hi</p>
<button class="btn" onclick="change()">click</button>
```

위의 코드에서는 버튼을 클릭했을 때 `change`함수가 실행되고, `text`클래스를 가진 요소의 글자색이 흰색에서 붉은색으로 계속해 바뀌게 됩니다. 이렇게 작동하는 이유는, 기존에는 `text`라는 클래스가 `color : #fff`속성을 갖도록 하다가 `text`이면서 동시에 `highlight` 클래스를 가지는 경우 `color : #ff0000` 속성을 갖도록 `css`를 작성했기 떄문입니다. 이렇게 클래스를 가진 것 자체가 요소의 상태를 나타내도록 작성할 수도 있습니다.

### 2.2. 데이터를 입력받아 표기하기

자바스크립트를 이용한 화면 구현에 있어 가장 중요한 부분은 사용자의 입력을 받는 부분이라고 할 수 있겠습니다. 여러가지 요소가 효율적으로 표기되도록 구성하는 작업도 중요하지만, 가장 중요한 부분은 역시 사용자의 입력을 받아 처리하는 부분입니다.

이런 기능을 구현하기 위해서는 HTML 요소의 값을 읽어오고 읽어온 값을 재사용하는 작업의 흐름을 알아야 합니다. 보통 이런 작업을 할 때 흐름은 다음과 같습니다.

1. input 등에서 사용자의 입력을 받기
2. 입력을 종료하기
3. 입력 받은 요소에서 값을 가져와 재사용하기

위 작업에서 1번 항목은 보통 `input`태그나 `select`태그 등을 사용합니다. 사용자가 선택하거나 입력하는 것을 의미하는 요소들입니다.

이렇게 입력받은 뒤에는 입력이 끝났음을 구분 지어야 합니다. 버튼을 클릭하거나, enter 키를 누르거나, 값이 바뀐 이벤트를 캐치하거나 하는 식 입니다. 이렇게 입력의 구분이 되어야 특정 순간에 값을 재사용할 수 있습니다.

그 후에는, 입력받은 값을 가져오고 재사용해야 합니다. 재사용의 방법은 다양하지만, 가져오는 방법은 대부분 비슷합니다. 아래의 코드를 살펴봅시다.

```html
<script>
    function getContent() {
        const elem = document.querySelector("#txtContent");
        // 해당 요소의 값을 가져옴
        // input의 입력 값은 value로 가져온다.
        const txt = elem.value;
        // 입력받은 값을 출력
        alert(txt);
    }
</script>
<input type="text" id="txtContent" />
<button type="button" onclick="getContent()">click</button>
```

위 처럼 `input`요소의 값을 가져올 때에는 `value`라는 객체로 가져올 수 있습니다. 그 객체에 든 값을 변수에 저장한 뒤에는, 가공하여 사용할 수 있습니다.

이제 관련된 예제 파일들을 직접 수정해봅시다. 다음주에는 마지막으로 `axios`를 이용한 비동기 통신과 데이터 바인드에 대해서 다룹니다.
