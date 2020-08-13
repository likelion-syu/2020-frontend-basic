// 새로운 todo 생성에 관련된 함수들
const _form = {
    // UI 조작에 관련된 함수들
    ui: {
        // 내용 비우기
        clear: () => {
            const todoElem = document.querySelector("#new-todo");
            const dateElem = document.querySelector("#new-date");

            todoElem.value = "";
            dateElem.value = "";
        },
        // 상태 변경하기
        switch: (elem) => {
            const formElem = document.querySelector(".form");
            const btnElem = document.querySelector("#btn-create");
            if (formElem.classList.contains("active")) {
                // 1. 열려있는 경우 : 데이터를 지우고 닫기
                _form.ui.clear();

                formElem.classList.remove("active");
                const btnElem = document.querySelector(".btn-create");
                btnElem.classList.remove("active");
            } else {
                // 2. 닫혀 있는 경우 : 열기
                formElem.classList.add("active");
                btnElem.classList.add("active");
            }
        },
        // 등록하기
        submit: async () => {},
    },
    // 일반 함수들
    // 등록 요청하기
    submit: async () => {},
    // 유효성 검사하기
    valid: async () => {},
};
