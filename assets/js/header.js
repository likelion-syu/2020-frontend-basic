// HEADER에 연관된 함수들
const _header = {
    ui: {
        getRemains: function (data) {
            // 1. 모든 작업의 갯수 : data.length
            // 2. 미완료된 작업의 갯수 : 모든 작업의 갯수 - 완료된 갯수

            let cntOfDoneWorks = 0;
            data.forEach((item) => {
                cntOfDoneWorks += item.done ? 1 : 0;
            });

            const remains = data.length - cntOfDoneWorks;

            document.querySelector(".header .remains b").innerText = remains;
        },
        setDate: () => {
            const now = moment();
            const header = document.querySelector(".header .current");
            header.querySelector(".date").innerText = now.date();
            header.querySelector(".day").innerText = now
                .locale("en")
                .format("ddd");
            header.querySelector(".month").innerText = now
                .locale("en")
                .format("MMMM, yyyy");
        },
    },
    init: function (data) {
        _header.ui.setDate();
        _header.ui.getRemains(data);
    },
};
