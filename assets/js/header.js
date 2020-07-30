// HEADER에 연관된 함수들 
const _header = {
    // UI 조작에 관련된 함수들 
    ui : {
        getRemains : data => {
            let cntOfDoneWorks = 0;
            data.forEach(item=>{ cntOfDoneWorks += item.done ? 1 : 0 });

            const remains = data.length - cntOfDoneWorks;

            document.querySelector(".header .remains b").innerText = remains;
        },
        setDate : ()=>{
            const now = moment();
            const header = document.querySelector(".header .current");
            header.querySelector(".date").innerText = now.date();
            header.querySelector(".day").innerText = now.locale("en").format("ddd");
            header.querySelector(".month").innerText = now.locale("en").format("MMMM, yyyy");
        }
    },
    // 일반 함수들
    init : data =>{
        _header.ui.getRemains(data);
        _header.ui.setDate();
    }
}