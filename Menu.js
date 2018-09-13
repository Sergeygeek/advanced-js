/** Class menu */
class Menu {
    /**
     * Create a menu
     * @param {string} id Селектор id меню
     * @param {string} className Селектор класса меню
     * @param {Object} items Объект, созданный из класса Menuitem
     */
    constructor(id, className, items){
        this.id = id;
        this.className = className;
        this.items = items;
    }
    render(){
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for(let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof MenuItem){
                result += this.items[i].renderItem();
            }
        }
        result += '</ul>';
        return result;
    }

    remove(){
        const menu = document.getElementById(this.id);

        if (menu) {
            menu.remove();
        }
        
    }
}