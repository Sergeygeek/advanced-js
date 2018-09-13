class MenuItem {
    constructor(href, title, subMenu){
        this.href = href;
        this.title = title;
        this.subMenu = subMenu
    }
    renderItem(){
        let result = `<li><a href="${this.href}">${this.title}</a>`;

        if (this.subMenu instanceof Menu){
            result += this.subMenu.render();
        }

        result += '</li>';

        return result;
    }
}