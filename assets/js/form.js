// 새로운 todo 생성에 관련된 함수들
const _form = {
    // UI 조작에 관련된 함수들 
    ui : {
        // 내용 비우기 
        clear : ()=>{
            
        },
        // 상태 변경하기
        switch : elem => {
            if(!elem.classList.contains("active")){
                elem.classList.add("active");
            }
            else{
                elem.classList.remove("active");
            }
        },
        // 등록하기
        submit : async ()=>{
            
        },
    },
    // 일반 함수들 
    // 등록 요청하기
    submit : async ()=>{
        
    },
    // 유효성 검사하기
    valid : async ()=>{
                
    }
}