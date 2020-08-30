// 리스트에 관련된 항목들

const _list = {
    // 리스트의 실제 데이터
    data: [],
    // 리스트 데이터 가져오기
    fetch: async () => {
        const result = await axios({
            method: "get",
            url: __HOST,
            params: {
                ordering: "done,due_date",
            },
        });
        _list.data = result.data;
        return _list.data;
    },
    // 생성된 아이템을 리스트에 삽입하기
    insert: (id, elem) => {
        if (document.querySelector(`.list [data-todo-id='${id}']`)) {
            document.querySelector(`.list [data-todo-id='${id}']`).remove();
        }
        document.querySelector(".list").appendChild(elem);
    },
    // 목록 전체 생성
    create: async () => {
        await _list.fetch();

        _list.data.forEach((item) => {
            const listItemElem = _list.item.generate(item);
            _list.insert(item.id, listItemElem);
        });
    },
    // 목록 초기화
    init: async () => {
        await _list.template.fetch();
        await _list.create();
    },
    // 리스트 아이템에 관련된 내용들
    item: {
        // 리스트에 데이터 채워넣기
        generate: (item) => {
            const template = _list.template.clone();

            // 1. due date 조회
            const dueDate = moment(item.due_date);
            if (dueDate.diff(moment()) < 0) {
                template.classList.add("expired");
            }

            // 2. 데이터 정보 포함
            template.setAttribute("data-todo-id", item.id);

            // 3. 완료 여부 표기
            if (item.done) {
                template.classList.add("active");
            }

            // 4. 내용 채우기
            const content = template.querySelector(".content p");
            content.innerText = item.todo;

            // 5. 시간 채우기
            const fullDate = moment(item.due_date).format("MM.DD HH:MM");
            const fromNow = moment(item.due_date).fromNow();
            template.querySelector(".remain-date .remain").innerText = fromNow;
            template.querySelector(".remain-date .date").innerText = fullDate;

            // 6. 내용 채운 요소 내보내기
            return template;
        },
        // 할 일 상태 바꾸기 요청하기
        change: async (id) => {},
        // 할 일 삭제 요청하기
        del: async (id) => {},
        ui: {
            // 할 일 상태 바꾸기
            change: async (elem) => {},
            // 삭제 하기
            del: async (elem) => {},
        },
    },
    // 템플릿 관련 항목들
    template: {
        // 템플릿의 HTML 형태 문자열
        elem: undefined,
        // 템플릿을 불러오기
        fetch: async () => {
            const result = await axios({
                method: "get",
                url: "./assets/templates/item.template.html",
            });

            _list.template.elem = result.data;
        },
        // 템플릿을 복사해오기
        clone: () => {
            return _list.template.elem.parseHTML();
        },
    },
};

// 0. 템플릿을 불러오기
// 1. 데이터를 불러오기
// 2. 템플릿 내용을 데이터로 채우기
// 3. 리스트에 추가하기
