class MenuItem {
    constructor(href, title){
        this.href = href;
        this.title = title;
    }
    render(){
        let result = `<li><a href="${this.href}">${this.title}</a></li>`;

        return result;
    }
}