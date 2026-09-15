export class FormValidator {
    configObject;
    formElement;
    inputList;
    submitButton;
    constructor(configObject, formElement) {
        this.configObject = configObject;
        this.formElement = formElement;
        this.inputList = Array.from(this.formElement.querySelectorAll(this.configObject.inputSelector));
        this.submitButton = formElement.querySelector(configObject.submitButtonSelector);
    }
    ;
    showInputError(inputElement, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${inputElement.name}-input-error`);
        inputElement.classList.add(this.configObject.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.configObject.errorClass);
    }
    ;
    hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(`.${inputElement.name}-input-error`);
        inputElement.classList.remove(this.configObject.inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this.configObject.errorClass);
    }
    checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this.showInputError(inputElement, inputElement.validationMessage);
        }
        else {
            this.hideInputError(inputElement);
        }
    }
    toggleButtonState() {
        const allValid = this.inputList.every((input) => input.validity.valid);
        this.submitButton.disabled = !allValid;
    }
    handleInput = (evt) => {
        const input = evt.target;
        this.checkInputValidity(input);
        this.toggleButtonState();
    };
    setEventListeners() {
        this.inputList.forEach((input) => {
            input.addEventListener("input", this.handleInput);
        });
    }
    enableValidation() {
        this.toggleButtonState();
        this.setEventListeners();
    }
    resetValidation() {
        this.formElement.reset();
        this.inputList.forEach((input) => {
            this.hideInputError(input);
        });
        this.submitButton.disabled = true;
    }
}
