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
    handleSubmit = async (evt) => {
        evt.preventDefault();
        const submitButton = this.formElement.querySelector(".popup__button");
        const originalText = submitButton.textContent ?? "Guardar";
        submitButton.textContent = "Guardando...";
        submitButton.disabled = true;
        try {
            await this.handleFormSubmit(this.getInputValues());
        }
        catch (err) {
            console.error("Error en el envío del formulario:", err);
        }
        finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            this.close();
        }
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
