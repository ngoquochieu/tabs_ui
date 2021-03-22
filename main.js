const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var tabs = $$('.tab-item');
var panes = $$('.tab-pane');

const tabActive = $('.tab-item.active');
const line = $('.line');

// line dau` tien
line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

console.log([line]);

tabs.forEach((tab, index) => {

    const pane = panes[index];
    tab.addEventListener("click", function() {

        $('.tab-pane.active').classList.remove('active');
        $('.tab-item.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        tab.classList.add('active');
        pane.classList.add('active');
    })
});

