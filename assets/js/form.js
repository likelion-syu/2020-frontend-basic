// 새로운 todo 생성에 관련된 함수들
const _form = {
    // UI 조작에 관련된 함수들 
    ui : {
        // 내용 비우기 
        clear : ()=>{
            const todoElem = document.querySelector("#new-todo");
            const dateElem = document.querySelector("#new-date");

            todoElem.value = "";
            dateElem.value = "";
        },
        // 상태 변경하기
        switch : ()=>{
            const formElem = document.querySelector(".form");
            const btnElem = document.querySelector("#btn-create");
            if(formElem.classList.contains("active")){
                // 1. 열려있는 경우 : 데이터를 지우고 닫기
                _form.ui.clear();            

                formElem.classList.remove("active");
                const btnElem = document.querySelector(".btn-create");
                btnElem.classList.remove("active");
            }
            else{
                // 2. 닫혀 있는 경우 : 열기 
                formElem.classList.add("active");
                btnElem.classList.add("active");
            }
        },
        submit : async ()=>{
            if(_form.valid()){
                await _form.submit();
                await _list.create();
                _header.init(_list.data);
                _form.ui.switch();
            }
            else{
                alert("입력 값을 확인해주세요");
            }
        },
    },
    // 일반 함수들 
    // 등록하기
    submit : async ()=>{
        const todo = document.querySelector("#new-todo").value;
        const date = document.querySelector("#new-date").value;

        await axios({
            method : "post",
            url : __HOST,
            data : {
                todo : todo,
                due_date : date
            }
        });
    },
    // 유효성 검사하기
    valid : async ()=>{
        const newTodo = document.querySelector("#new-todo");
        const newDate = document.querySelector("#new-date");

        if(newTodo.value.trim() === ""){ return false; }
        const selectedDate = moment(newDate.value);

        if(selectedDate.diff(moment()) < 0){ return false; }

        return true;
    }
} 