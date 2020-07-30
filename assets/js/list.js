// 리스트에 관련된 항목들 

const _list = {
    // 리스트의 실제 데이터
    data : [],
    fetch : async ()=>{
        const result = await axios({
            method : "get",
            url : __HOST,
            params : {
                ordering : 'done,due_date'
            }
        });

        _list.data = result.data;

        return _list.data;
    },
    insert : (id, elem) => {
        if(document.querySelector(`.list [data-todo-id='${id}']`)){
            document.querySelector(`.list [data-todo-id='${id}']`).remove();
        }
        document.querySelector(".list").appendChild(elem);
    },
    create : async () => {
        await _list.fetch();
        _list.data.forEach(item=>{
            const listItemElem = _list.item.generate(item);
            _list.insert(item.id, listItemElem);
        });
    },
    init : async ()=> {
        await _list.template.fetch();
        await _list.create();
    },
    item : {
        generate : item =>{
            const template = _list.template.clone();
    
            // 1. due date 조회
            const dueDate = moment(item.due_date);
            if(dueDate.diff(moment()) < 0){
                template.classList.add("expired");
            }
    
            // 2. 데이터 정보 포함
            template.setAttribute("data-todo-id" , item.id);
    
            // 3. 완료 여부 표기
            if(item.done){            
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
        change : async id =>{
            try{
                const currentData = _list.data.find(item=>item.id == id);
                await axios({
                    method : "patch",
                    url : `${ __HOST }${id}/`,
                    data : {
                        done : !currentData.done
                    }
                });
            }
            catch(e){
                alert("에러 발생!");
                throw e;
            }
        },
        del : async id =>{
            try{
                const currentData = _list.data.find(item=>item.id == id);
                await axios({
                    method : "delete",
                    url : `${ __HOST }${id}/`,
                });
            }
            catch(e){
                alert("에러 발생!");
                throw e;
            }
        },
        ui : {
            change : async elem =>{
                const parent = elem.parentElement.parentElement;
                const todoId = parent.getAttribute("data-todo-id");
                await _list.item.change(todoId);
                await _list.create();
                _header.init(_list.data);
            },
            del : async elem =>{
                if(confirm("삭제할까요?")){
                    const parent = elem.parentElement;
                    const todoId = parent.getAttribute("data-todo-id");
                    await _list.item.del(todoId);
                    parent.remove();
                    await _list.create();
                    _header.init(_list.data);
                }
            },
        }
    },
    template : {
        elem : undefined,
        fetch : async () => {
            const result = await axios({
                method : "get",
                url : "./assets/templates/item.template.html"
            });

            _list.template.elem = result.data;
        },
        clone : ()=>{
            return _list.template.elem.parseHTML();
        }
    }
}