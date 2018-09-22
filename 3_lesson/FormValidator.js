class FormValidator {
  constructor(container, name, phone, email) {
    this.container = container;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.isValidName = true;
    this.isValidPhone = true;
    this.isValidEmail = true;
    this._validateForm();
  }

  _initEl() {
    this.container = document.getElementById(this.container);
    this.name = document.getElementById(this.name);
    this.phone = document.getElementById(this.phone);
    this.email = document.getElementById(this.email)
  }

  _validateHandler(e) {
    if (!this._isValid()) {
      e.preventDefault();
      this._showInvalid();
    }
  }

  _isValid() {
    return this._validateName() && this._validatePhone() && this._validateEmail();
  }

  _validateName() {
    const name = this.name.value;
    const re = /^[a-zа-яё\-]{2,30}$/i;

    if(!re.test(name)) {
      this.isValidName = false;
      return false;
    }

    return true;
  }

  _validatePhone() {
    const phone = this.phone.value;
    const re = /^\+\d\(\d{3}\)\d{3}\-\d{4}$/;

    if(!re.test(phone)) {
      this.isValidPhone = false;
      return false;
    }

    return true;
  }

  _validateEmail() {
    const email = this.email.value;
    const re = /^([\w\-\.]+)@([\w\-\.]+)\.([a-z]{2,3})$/;

    if(!re.test(email)) {
      this.isValidEmail = false;
      return false;
    }

    return true;
  }

  _showInvalid() {
    if(!this.isValidName) {
      this.name.classList.add('is-invalid');
      this.name.nextElementSibling.classList.add('invalid');
    } else {
      this.name.classList.remove('is-invalid');
      this.name.nextElementSibling.classList.remove('invalid');
    }

    if(!this.isValidPhone) {
      this.phone.classList.add('is-invalid');
      this.phone.nextElementSibling.classList.add('invalid');
    } else {
      this.phone.classList.remove('is-invalid');
      this.phone.nextElementSibling.classList.remove('invalid');
    }

    if(!this.isValidEmail) {
      this.email.classList.add('is-invalid');
      this.email.nextElementSibling.classList.add('invalid');
    } else {
      this.email.classList.remove('is-invalid');
      this.email.nextElementSibling.classList.remove('invalid');
    }
  }

  _validateForm() {
    this._initEl();
    this.container.addEventListener('submit', e => this._validateHandler(e));
  }
}