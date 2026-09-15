import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    formElement;
    handleFormSubmit;
    formValidator;
    constructor(popupSelector, handleFormSubmit, formValidator) {
        super(popupSelector);
        this.formElement = this.popupElement.querySelector(".popup__form");
        this.handleFormSubmit = handleFormSubmit;
        this.formValidator = formValidator;
        this.setEventListeners();
    }
    getInputValues() {
        const inputs = Array.from(this.formElement.querySelectorAll(".popup__input"));
        const values = {};
        inputs.forEach((input) => {
            values[input.name] = input.value;
        });
        return values;
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.handleFormSubmit(this.getInputValues());
        this.close();
    };
    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", this.handleSubmit);
    }
    close() {
        this.formValidator.resetValidation();
        super.close();
    }
}
