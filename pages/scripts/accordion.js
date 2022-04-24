if (process.browser) {
const menu = document.querySelectorAll(".js-menu");
    function toggle() {
    const content = this.nextElementSibling;
    const hd_acc = this.firstElementChild;
    this.classList.toggle("is-active");
    content.classList.toggle("is-open");
    hd_acc.classList.toggle("is-open");
}
    for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", toggle);
}
console.log('test');
}