String.prototype.parseHTML = function(){
    const container = document.createElement("div");
    container.innerHTML = this;
    return container.firstChild;
}