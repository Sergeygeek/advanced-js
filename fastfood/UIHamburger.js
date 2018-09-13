class UIHamburger {
  constructor(hamburger){
    if(hamburger instanceof Hamburger){
      this.hamburger = hamburger;
    } else {
      return console.error('Параметром должен быть передан объект, образованный из класса Hamburger')
    }
  }

  render(){
    const result = `
      Гамбургер:\n
      <ul>
        <li>Размер: ${this.hamburger.getSize()};</li>
        <li>Начинка: ${this.hamburger.getStuffing()}</li>
        <li>Добавки: ${(this.hamburger.getToppings().length > 0) ? 
          this.hamburger.getToppings().join(', ') : 
          'нет'}</li>
        <li>Цена: ${this.hamburger.getPrice()}</li>
        <li>Калории: ${this.hamburger.getCalories()}</li>
      </ul>
      `
    return result;
  }
}