const willExe1MAfter = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sentence = `hello, ${name}`;
            resolve(sentence);
        }, 1000);
    });
};



willExe1MAfter("Yoo")
    .then((s) => console.log(s))
    .then(()=>willExe1MAfter("Gwon"))
    .then((s) => console.log(s))
    .then(()=>willExe1MAfter("Kim"))
    .then((s) => console.log(s))
    .then(()=>willExe1MAfter("Lee"))
    .then((s) => console.log(s))
    .then((s) => console.log("finished"));
