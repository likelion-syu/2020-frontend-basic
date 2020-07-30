// 리스트에 관련된 항목들 

const _list = {
    // 리스트의 실제 데이터
    data : [],
    // 리스트 데이터 가져오기
    fetch : async ()=>{
        
    },
    // 생성된 아이템을 리스트에 삽입하기
    insert : (id, elem) => {
        
    },
    // 목록 전체 생성
    create : async () => {
        
    },
    // 목록 초기화
    init : async ()=> {
        
    },
    // 리스트 아이템에 관련된 내용들 
    item : {
        // 리스트에 데이터 채워넣기
        generate : item =>{
            
        },
        // 할 일 상태 바꾸기 요청하기
        change : async id =>{
            
        },
        // 할 일 삭제 요청하기
        del : async id =>{
            
        },
        ui : {
            // 할 일 상태 바꾸기 
            change : async elem =>{
                
            },
            // 삭제 하기 
            del : async elem =>{
                
            },
        }
    },
    // 템플릿 관련 항목들 
    template : {
        // 템플릿의 HTML 형태 문자열
        elem : undefined,
        // 템플릿을 불러오기 
        fetch : async () => {
            
        },
        // 템플릿을 복사해오기
        clone : ()=>{
            
        }
    }
}