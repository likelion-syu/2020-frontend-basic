# 들어가기

프론트엔드 마지막 주차가 시작됐습니다. 마지막 주차에는 간단한 `javascript` 문법과 `HTTP`, `Ajax`에 대해서 다룹니다. 지난 주차에 `HTML`을 다루는 방법을 배웠다면 본격적으로 이번 주 부터는 데이터와 `HTML` 요소를 다루게 됩니다. 지난 주차에 엿봤던 자바스크립트보다 다소 난이도가 더 높을 수 있겠습니다. 마지막 주차 내용인 만큼 시간을 들여서 따라오시면 큰 도움이 되실 것이라 생각합니다.

## 1. 자바스크립트의 문법

필수적으로 필요한 자바스크립트의 문법에 대해서 간략하게 다뤄봅니다. 본 내용은 세션 주차에는 다루지 않을 예정입니다. 문법에 대한 설명은 심도있게 다루기엔 시간이 다소 많이 필요하게되기 때문에, 이번 세션에 필요한 부분만 추려서 다루겠습니다.

### 1.1. HTML과 JAVASCRIPT

#### 1.1.1. 객체 (Object)

순서가 좀 바뀌었을 수 있겠지만, 자바스크립트에서 `HTML`을 다루는 내용을 파악하기 위해서는 자바스크립트의 `object`에 대한 내용을 짚고 넘어갈 필요가 있습니다. (`python`을 선행하신 분들은 큰 차이 없는 내용입니다.) **객체(Object)**는 자바스크립트의 자료형 중 하나 입니다. key와 value쌍을 가지는 사전 형태의 자료형이라고 할 수 있겠습니다. 예시는 아래와 같습니다.

```javascript
var person = { name: "Yoo", age: 29 };

person.name;
// 위 코드는 person의 name항목인 'Yoo'를 가리킵니다.
person.hello = function () {
    alert("Hello");
};
// Object는 일단 초기화 된 이후에는 .으로 새로운 이름을 넣어서 값을 주어 바로 추가할 수 있어 확장성이 높습니다.
// 위는 함수를 Object 객체에 포함하는 예시입니다.
person.hello(); // 함수 실행
```

자바스크립트는 선언시에 자료형을 가리지 않는 `var` 타입을 지원합니다. `Object`형 자료형은 `Array`의 '[]'와 다르게 '{}'으로 감싸서 선언합니다. Object형 자료형은 String형태의 key와 무엇이든 올 수 있는 value 쌍으로 이루어지고 ':'으로 구분합니다. 그리고 각 내용들은 ','로 구분하게 됩니다.

해당 `Object` 변수에 하위에 어떤 키값들이 들어있는지는 자동 완성을 지원하는 에디터 혹은 브라우저 개발자 도구에서 `객체.`까지만 입력하면 자동 완성되는 항목들로 확인해 볼 수 있습니다.

#### 1.1.2. 내장 객체?

앞서 Object에 대해 간단히?알아봤습니다. 브라우저에서는 HTML을 편하게 관리하기 위해 다양한 내장 객체(Object)들을 미리 선언해두었습니다. 그 중에 우리가 오늘 사용할 것은 두가지 입니다.

-   window : 가장 최상위 내장 객체입니다. 사용자가 직접 변수를 글로벌로 선언한다면 그 변수는 window의 하위 객체로 등록됩니다. 브라우저 내에서 사용되는 대다수의 객체와 함수들이 window객체 하위에 선언되어있습니다.

-   document : HTML을 관리하는 내장 객체 입니다. HTML 요소를 가져오고, 생성하고, 삭제하고, 속성을 부여하는 등 다양한 기능을 포함합니다.

우리가 지난 주차에 다뤘던, `HTML`을 다루기 위한 함수가 `document.querySelector`였던 것은 위의 내용의 내장 객체와 `object`를 통해서 확인하실 수 있을 것 같습니다.

`HTML`요소를 가져오기 위해 `document` 내장 객체를 사용하고, 그 후 `document`객체가 가진 `querySelector`라는 함수를 사용한 것 입니다. 그 함수의 실행결과물로 `HTMLElement`타입의 객체를 반환하게 됩니다. 이는 `HTML`요소를 자바스크립트 객체로 변환한 것이라 이야기할 수 있습니다. 지난 주차에 우리는 `HTML`요소를 자바스크립트에서 다루기 편한 객체로 바꾼 `HTMLElement` 객체를 다룬 것 입니다.

### 1.2. 다른 언어와 다를 바 없는 자바스크립트

우리는 `javascript`를 필요한 부분만 뽑아 쓸 것이기 때문에, 다른 언어와 비슷한 부분들을 기준으로 빠르게 언어에 대해서 알아보도록 합니다.

#### 1.2.1. 데이터 타입

자바스크립트도 다른 언어처럼 데이터 타입이 제공됩니다. 하지만, 자바스크립트는 느슨한 데이터 타입을 갖는 언어이기때문에 그 종류도 조금 차이가 있습니다. 크게 종류는 아래와 같습니다.

-   Boolean : true / false를 나타내는 상수형 타입입니다.
-   null : null이라는 '값'입니다. 변수가 선언되어있고 null이라는 값을 갖는 경우입니다.
-   undefined : 변수가 선언 되어있으나 아무 데이터 타입도 선택되지 않은 상태입니다. var 형으로 선언해 초기화를 하지 않은 것과 같습니다.
-   Number : 숫자형입니다. 자바스크립트에서는 숫자형을 단 하나만 갖습니다.
-   String : 문자열형입니다. 문자형인 char를 별도 제공하지 않고 모두 String으로 사용합니다.
-   Object(객체) : 위에 열거된 데이터 타입과 조금 다릅니다. '기본적'인 Object형은 데이터를 담는 key-value쌍의 데이터 사전이라고 할 수 있습니다. 위에 열거된 데이터 타입 이외에 거의 모든 변수들은 Object형에 해당합니다. 그렇기 때문에, Object형의 하위에는 다양한 데이터 타입이 별도로 존재합니다. 이 특수한 key-value쌍 관계에 있어서 value에는 지금껏 언급된 모든 데이터 타입이 할당 될 수 있습니다.

아래는 Object의 하위 객체들입니다.

-   Object.Function : 함수 타입입니다. 자바스크립트에서는 함수 또한 변수에 담을 수 있습니다.
-   Object.Date : 날짜를 나타내는 Date형입니다. 데이터 타입을 검사하면 Object로 출력됩니다. 주로 날짜에 관련된 정보와 함수를 갖습니다.
-   Object.Array : 배열형입니다. 배열을 활용하는데 필요한 값과 함수등을 갖습니다.

#### 1.2.2. 변수의 선언과 초기화

변수의 선언과 초기화 부분은 위에서 간략하게 언급했습니다. 변수를 선언하는데는 var를 사용하고 함수를 선언하는 경우만 조금 다릅니다. 각 데이터 타입의 초기화 부분을 봅시다.

```javascript
var state = true; // Boolean
var str_1 = "Hello World"; // String 홑따옴표
var str_2 = "Hello World"; // String 쌍따옴표
var num_1 = 1; // Number
var num_2 = 0.032; // Number
var fn_1 = function () {
    /*내용*/
}; //  함수
function fn_2() {
    /*내용*/
} // 함수를 변수에 담지않고 별도로 선언하는 경우
var dt = new Date(); // 현재 날짜를 가져올때는 이 형태로 가져옵니다. new 키워드에 대해서는 추후 설명합니다.
var arr = [1, 2, 3, 4, 5]; // 배열선언
var obj_1 = { key_1: "value1", key_2: 1 };
var obj_2 = {};
obj_2.key_1 = "value1";
obj_2.key_2 = 1;
```

데이터 타입에 있어 제약이 거의 없기 때문에, 데이터 타입에 따라 선언 및 초기화를 하는 경우는 위의 경우 정도가 대다수입니다. 문자형의 경우에는 홑따옴표와 쌍따옴표를 혼용해서 사용합니다. 관점에 따라 하나만 쓰는 곳도 있지만, 대다수는 따지지 않으니 편한 것으로 사용합시다.

#### 1.2.3. 함수의 선언과 실행

함수의 초기화는 위에서 다뤘 듯, 두가지의 방법으로 가능합니다. 아래의 예제를 봅시다.

```javascript
// 1. function 명령어로 함수를 선언하기
// function 함수명 (파라미터){ 내용 }
function fn_1(num1, num2) {
    return num1 + num2;
}
var result = fn_1(1, 3); // 4
```

첫째로 `function`명령어를 이용해 이름이 있는 함수를 만들어 주는 방법입니다. 이렇게 선언된 함수는 전역으로 선언되며, window객체에 저장됩니다. 자바스크립트에서는 함수의 반환형을 별도로 작성하지 않습니다. 함수를 실행할때는 **'함수명(파라미터);'**형태로 작성하면됩니다. 함수가 반환할 내용이 있다면 함수를 실행 후 그 값을 별도로 변수에 저장할 수 있습니다.

```javascript
// 2. 익명함수를 작성 후 변수에 저장하기
var fn_2 = function (num1, num2) {
    return num1 + num2;
};
var result = fn_2(2, 4); // 6
```

함수에는 기명함수와 익명함수가 있습니다. 두번째 방법에 사용된 함수를 이름이 없는 함수 즉, 익명함수 라고 부릅니다. 이 익명 함수는 function명령어를 사용하는 것 만큼 자주 사용됩니다. 예를 들어, object타입은 key-value쌍으로 이루어지는데 이 value부분에는 함수 또한 포함될 수 있습니다. 이 경우에는 익명함수를 사용해 함수를 선언하는 경우가 있습니다. 아래의 코드를 봅시다.

```javascript
var obj = { num_1: 1, num_2: 3 };
obj.sum = function (n1, n2) {
    return n1 + n2;
};
obj.sum(obj.num_1, obj.num_2);
```

이 코드는 object형으로 숫자와 함수를 저장한 코드입니다. 실제 업무에서 위와 같이 각 변수와 함수를 한 오브젝트에 담는 경우가 종종 생깁니다. 함수를 그냥 선언할 경우 window 객체에 선언되므로, 중복 선언되는 경우가 더러 있기에 함수의 이름이 길어질 수 밖에 없습니다. 파일을 나누더라도 상황은 같습니다. 그렇기 때문에, namespace개념으로 object를 선언하고 그 안에 각 파일에서 필요로 하는 함수를 선언하는 식의 디자인 패턴도 있습니다.

## 2. HTTP 통신과 비동기 통신

단순한 `HTML`편집을 넘어서 본격적으로 데이터를 다루기 위해서는 `HTTP`에 대한 이해가 필요합니다. `HTTP`에 대해 간략하게 이해하고, 그 후 다룰 `ajax`에 대해서 알아봅시다.

### 2.1. HTTP 통신

`HTTP`란, 정보를 주고 받는 행위에 대한 약속(프로토콜)입니다. 그리고 이는 **HyperText Transfer Protocol**의 약자로, 여기서 HyperText는 `HTML`문서입니다.

이 `HTTP`는 `요청(Request)`와 `응답(Response)`로 이루어집니다. 보통 브라우저에 주소를 입력해 문서를 **요청**하고, 문서가 브라우저에 보여주는 것이 **응답**입니다.

일반적으로 웹 페이지를 불러오는 행위는 위의 설명과 같습니다. 예를 들어, `http://localhost:8000/example1.html`이라는 주소를 브라우저에 입력한다면, 서버에서는 해당 주소에 해당하는 파일을 불러와서 보여줍니다. 이때 파일은 `html`문서 형태의 문자열을 응답 받습니다. 보통 우리가 실습에 사용하는 `liveserver`를 기준으로 생각한다면, `http://localhost:8000`이 가장 최상위 폴더, 그 다음이 실제 파일 명이 될 것 입니다.

위의 순서로 문서를 가져오면, `html`문서를 표기하기 위해 브라우저가 `html` 형태의 해당 파일(문자열)을 읽기 시작합니다. 이 경우 문서 안에 `head` 태그 안에는 다양한 외부 파일을 불러올 수 있습니다. 보통 css 파일이나, javascript 파일이 될 것 입니다. 브라우저에서 `head`태그에 입력되어 있는 주소에 다시 **요청**을 진행하고, 해당 주소에 있는 파일을 전달받아 **응답** 처리 합니다.

이렇듯 웹 주소에 단순히 문서를 요청하는 것 뿐만 아니라, 그 이후에는 파일 안에 필요한 외부 파일을 불러오기 위해 추가적으로 요청을 보낼 수도 있습니다.

> 여기서 파일을 순차적으로 불러오지만, 항상 요청을 보낸 순서로 로드될 것이라고 보장되지는 않습니다. 각 파일의 크기, 해당 주소의 서버 상태등에 따라 순서가 뒤바뀔 수도 있습니다. 각 파일을 **비동기(Asynchronous)**요청을 발생시키기 때문입니다.

그리고 이렇게 응답을 받은 문서를 모두 로드한 이후에는, 사용자의 입력을 받을 때에도 비슷하게 동작합니다. 이 경우에는 `form` 태그의 `action` 속성을 사용해 활용할 수 있습니다.

로그인의 경우를 예로 든다면, `form` 태그 안에 `input` 태그등을 이용해 사용자에게 값을 입력받고, 수정된 문서의 내용을 통째로 서버로 **전송(요청)**하게 됩니다. 그 후, 사용자가 입력한 정보 (로그인 정보)의 처리가 끝나면 처리의 결과를 브라우저에 **응답**하게 됩니다. 위 경우에는 사용자 정보의 입력과 해당 정보의 처리가 `동기적(Synchronous)`으로 작동했다고 할 수 있습니다. 사용자의 입력 종료와, 브라우저의 화면 응답이 순차적으로 이루어지기 때문입니다. 여기서 순차적이라 함은, 요청 -> 데이터 처리 -> 처리 내용 화면 처리의 단계를 이야기 하는 것 입니다.

위와 같이 처리가 된다면, 항상 문서를 새로 내려받아 새로 표기하기 때문에, 화면 깜빡임이 발생할 수 있습니다. 그렇다면 인스타그램, 페이스 북 등의 서비스처럼 추가 정보를 로드할 때 깜빡임이 발생하지 않게하려면 어떻게 해야할까요 ?

### 2.2. 비동기(Asynchronous) 통신

이미 로드한 `HTML`문서에서 서버에 사용자의 입력 내용을 처리하거나 추가적인 정보를 내려받으려면, 우선 처리를 위해서 문서 전체를 서버에 보내거나 새로운 페이지를 요청해야 합니다. 이런 경우, 항상 브라우저에서 화면 깜빡임이 발생하게 됩니다.

이 것을 해결하기 위해서 우리는 `XMLHttpRequest`라는 API를 사용하게 됩니다. 이 API는 `AJAX(Asynchronous Javascript And XML)`요청을 발생시킵니다. 이 API는 특정 주소로 처리에 필요한 정보를 **자바스크립트로** 전달한 뒤에 서버에 처리를 요청해줍니다.

자바스크립트로 문서 전체를 전송해 처리를 요청하는 것이 아니고 필요한 정보만을 요청하는 것이기 때문에, 서버에서 정보를 처리한 후에 응답을 받은 후에도 별도로 브라우저에서 화면을 그리는 작업을 진행하지 않습니다. 이런 처리 방식은 `head` 태그의 파일을 불러오는 방식과 동일한데, 이 것을 `비동기(Asynchrous)` 방식이라고 합니다. 응답 후 별도의 렌더를 거치지 않기 때문입니다.

응답으로 넘겨받는 정보는 대다수의 경우, 일반 요청처럼 `html`,`css` 등의 파일을 넘겨받는 것이 아니라 자바스크립트의 object 형태로 전달받는데, 이것을 `json`이라고 합니다. 그렇기 때문에, 우리는 응답 내용을 자바스크립트에서 그대로 활용해 화면에 동적으로 표기하게 됩니다. 이때 활용하는 내용이 이전 주차의 `document.createElement`입니다.

### 2.3. Promise 객체

위에서 코드 상에서도 비동기 형태로 요청이 된다고 이야기했습니다. 이는 코드를 실행하는 부분에서도 드러납니다. 아래의 코드를 봅시다

```javascript
// 1초 뒤에 입력받은 메시지를 console에 출력합니다
const willExecute1SecondAfter = (msg) =>
    setTimeout(() => console.log(msg), 1000);

console.log("1");
willExecute1SecondAfter("2");
console.log("3");
```

위의 코드를 실행하면 1,2,3 순으로 출력되는 것이 아니라 1,3,2 순으로 출력됩니다. `willExecute1SecondAfter`함수를 실행한 결과는 1초 뒤에 실행되기 때문입니다. 이런 경우를 비동기적으로 실행된다고 합니다. 보통의 경우는 함수를 실행하면 함수의 실행 결과가 바로 반환되지만, 위 경우에는 함수의 실행은 바로 수행되지만 그 결과는 1초 뒤에 반환됩니다. 이런 경우에 수행결과를 다시 재사용해야된다면 다양한 방법으로 처리할 수 있습니다. 이 경우 이전에는 `callback`이라는 형식으로 수행했습니다. 이 경우는 다음과 같습니다.

```javascript
const willExecute1SecondAfter = (name, callback) =>
    setTimeout(() => {
        const sentence = `hello, ${name}!`;
        callback(sentence);
    }, 1000);

willExecute1SecondAfter("Yoo", (sentence) => {
    console.log(sentence);
});

// Hello, Yoo!
```

위 코드에서는 `willExecute1SecondAfter`라는 함수에게 `Yoo`라는 문자열과 익명함수를 매개변수로 넘겨줍니다. 넘겨준 문자열은 함수 내부에서 `hello, ${name}!`형태로 합쳐지게 됩니다. 이 합쳐진 결과물은 1초 뒤에 재사용할 수 있게되는데, 결과물을 재사용하는 것은 `callback`이라는 이름으로 넘겨준 익명함수에게 넘겨주게 됩니다. 익명함수의 매개변수로서 주어지는 형태인 셈 입니다. 이 방식을 `callback`이라고 합니다.

근데 이 경우 `callback`이 중첩되는 경우가 생길 수 있습니다. 심한 경우 아래와 같은 형태도 발생할 수 있습니다

```javascript
fn(fn2(fn3(fn4(fn5()))));
```

위의 경우가 `callback`이 과도하게 중첩된 경우 입니다. 이럴 경우 코드의 가독성이 굉장히 떨어지게 됩니다. 이런 비동기 처리를 일괄적으로 할 수 있도록 도와주는 것이 `Promise`객체입니다. `Promise` 객체는 함수의 실행결과로 대기 상태의 `Promise`객체를 반환합니다. 이 객체는 내부의 처리 결과에 따라서 `resolve`상태와 `reject`상태를 갖게 됩니다. 실행 결과는 보통 이렇습니다.

```javascript
const _prm = promisedFunc();

_prm.then(() => {
    // 함수 실행 내용이 성공한 경우
}).catch(() => {
    // 함수 실행이 성공한 경우
});
```

위에서는 `promisedFunc`라는 비동기 함수를 실행하면, `Promise`객체를 반환해 `_prm` 변수에 저장합니다. 이 객체에 `then`이라는 함수를 실행하고 익명 함수를 넘겨주면, 해당 함수가 성공 시 해당 익명함수가 실행됩니다. `catch`함수를 연달아 실행하고 익명함수를 넘겨주면, 오류 내용을 매개변수에 담아서 넘겨준 익명함수를 실행합니다.

내용만 봤을때는 `callback`함수와 다를바 없어보입니다. 하지만 여러가지 요청을 한번에 처리할 때 이 방식의 장점을 엿볼 수 있습니다.

```javascript
promisedFunc()
    .then(promisedFunc2)
    .then(promisedFunc3)
    .then(() => {
        // 위의 모든 것이 순차적으로 성공한 경우 수행
    })
    .catch(() => {
        // 함수 중 하나라도 에러가 나는 경우 수행
    });

Promise.all([promisedFunc, promisedFunc2, promisedFunc3])
    .then(() => {
        // 위와 같은 결과
    })
    .catch(() => {
        // 함수 중 하나라도 에러가 나는 경우 수행
    });
```

예제 코드에 두 가지 경우가 있습니다. 첫번째 경우는 첫번째 비동기 함수가 실행된 후 `promisedFunc2`와 `promisedFunc3`가 순차적으로 실행되게 하고 최종적으로 마지막에 주어진 익명함수를 실행하게 합니다. 이 경우 하나라도 에러가 나면 마지막 부분이 실행되지 않습니다. 이렇듯 비동기 함수의 실행 순서를 명확하게 표현해 줄 수 있습니다. 이런 용법은 `Promise` 객체 자체를 사용해서도 수행할 수 있는데, 그 용법이 아래의 방법입니다. 이렇듯 `Promise`를 사용하면 여러가지의 비동기 함수들의 호출 순서와 실행 결과를 좀 더 명확하게 다룰 수 있게 됩니다. 저희의 실습 예제에서도 본 방법을 사용할 것 입니다.

실제 실습으로 들어가봅시다!
