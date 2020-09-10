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
        submit: async () => {
            if (_form.valid()) {
                await _form.submit();
                await _list.create();
                _header.init(_list.data);
                _form.ui.switch();
            }
        },
    },
    // 일반 함수들
    // 등록 요청하기
    submit: async () => {
        const todo = document.querySelector("#new-todo").value;
        const date = document.querySelector("#new-date").value;

        await axios({
            method: "post",
            url: __HOST,
            data: {
                todo: todo,
                due_date: date,
            },
        });
    },
    // 유효성 검사하기
    valid: () => {
        const todo = document.querySelector("#new-todo").value;
        const date = document.querySelector("#new-date").value;

        // 1. todo 가 비어있는지 확인
        if (todo.trim() === "") {
            alert("할 일을 입력해주세요");
            return false;
        }
        // 2. 날짜가 비어있는지 확인
        if (date.trim() === "") {
            alert("날짜를 입력해주세요");
            return false;
        }
        // 3. 날짜가 유효한지 확인
        const selectedDate = moment(date);
        if (selectedDate.diff(moment()) < 0) {
            alert("할 일의 날짜는 오늘보다 이전일 수 없습니다");
            return false;
        }

        return true;
    },
};
