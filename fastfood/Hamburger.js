/** Класс Гаьбургер */
class Hamburger {
  /**
   * Конструктор класса
   * @param {string} size Размер гамбургера 
   * @param {string} stuffing Начинка
   */
  constructor(size, stuffing){
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];

    // Проверяем размер
    switch(size){
      case 'small':
        this.price = 50;
        this.calories = 20;
        break;
      case 'big':
        this.price = 100;
        this.calories = 40;
        break;
      default: throw new HamburgerException(`Размера ${size} не существует`);
    }

    // Проверяем начинку
    switch(stuffing){
      case 'cheese':
        this.price += 10;
        this.calories += 20;
        break;
      case 'salad':
        this.price += 20;
        this.calories += 5;
        break;
      case 'potato':
        this.price += 15;
        this.calories += 10;
        break;
      default: throw new HamburgerException(`Начинки ${stuffing} не существует`);
    }
  }

  /**
   * Метод добавления добавки
   * @param {string} topping Добавка
   */
  addTopping(topping){
    switch(topping){
      case 'mayo':
        if(!this.toppings.includes('mayo')){
          this.price += 20;
          this.calories += 5;
          this.toppings.push(topping);
        } else {
          throw new HamburgerException(`Топпинг ${topping} уже добавлен`);
        }
        break;
      case 'spice':
        if(!this.toppings.includes('spice')){
          this.price += 15;
          this.toppings.push(topping);
        } else {
          throw new HamburgerException(`Топпинг ${topping} уже добавлен`);
        }
        break;
      default: 
        throw new HamburgerException(`Топпингa ${topping} не существует`);
    }
  }

  /**
   * Метод удаления добавки
   * @param {string} topping Добавка, которую надо удалить 
   */
  removeTopping(topping){
    // Проверяем существует ли топинг
    if(this.toppings.includes(topping)){
      // Удаляем топинг
      this.toppings.splice(this.toppings.indexOf(topping), 1);
      switch(topping){
        case 'mayo':
          this.price -= 20;
          this.calories -= 5;
          break;
        case 'spice':
          this.price -= 15;
          break;
        default: 
          throw new HamburgerException(`Топпинг ${topping} не был добавлен`);
      }
    }
  }

  /**
   * Метод возвращает добавки
   * @returns {Array} Массив добавок
   */
  getToppings(){
    return this.toppings;
  }

  /**
   * Метод возвращает размер
   * @returns {string} Размер гамбургера
   */
  getSize(){
    return this.size;
  }

  /**
   * Метод возвращает начинку
   * @returns {string} Начинка гамбургера
   */
  getStuffing(){
    return this.stuffing;
  }

  /**
   * Метод возвращает цену
   * @returns {number} Цена гамбургера
   */
  getPrice(){
    return this.price;
  }

  /**
   * Метод возвращает количество каллорий
   * @returns {number} Количество каллорий гамбургера
   */
  getCalories(){
    return this.calories;
  }
}

/**
 * Функция ошибки
 * @param {string} message Сообщение
 */
const HamburgerException = function(message){
  this.name = 'Hamburger exception';
  this.message = message
};