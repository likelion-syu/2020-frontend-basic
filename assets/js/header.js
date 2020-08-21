// HEADER에 연관된 함수들
const _header = {
    ui: {
        getRemains: function (data) {},
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
    },
};
