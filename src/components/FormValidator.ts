import type { FormValidatorConfig } from "../types/types.js"

export class FormValidator {
    private configObject: FormValidatorConfig;
    private formElement: HTMLFormElement;
    private inputList!: HTMLInputElement[];
    private submitButton!: HTMLButtonElement;

    constructor(configObject: FormValidatorConfig, formElement: HTMLFormElement) {
        this.configObject = configObject;
        this.formElement = formElement;
        this.inputList = Array.from(this.formElement.querySelectorAll(this.configObject.inputSelector));
        this.submitButton = formElement.querySelector(configObject.submitButtonSelector) as HTMLButtonElement;
    };

    private showInputError(inputElement: HTMLInputElement, errorMessage: string): void {
      const errorElement = this.formElement.querySelector(
        `.${inputElement.name}-input-error`) as HTMLElement;
      inputElement.classList.add(this.configObject.inputErrorClass);      
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this.configObject.errorClass);
    };

    private hideInputError(inputElement: HTMLInputElement): void {
        const errorElement = this.formElement.querySelector(`.${inputElement.name}-input-error`) as HTMLElement;
        inputElement.classList.remove(this.configObject.inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this.configObject.errorClass);

    }

    private checkInputValidity(inputElement: HTMLInputElement): void {
        if (!inputElement.validity.valid) {
            this.showInputError(inputElement, inputElement.validationMessage);
        } else {
            this.hideInputError(inputElement);
        }
    }

    private toggleButtonState(): void {
        const allValid = this.inputList.every((input) => input.validity.valid);
        this.submitButton.disabled = !allValid;
    }

    private handleInput = (evt: Event):void => {
        const input =  evt.target as HTMLInputElement;
        this.checkInputValidity(input);
        this.toggleButtonState();
    }

    private setEventListeners(): void {
        this.inputList.forEach((input) => {
            input.addEventListener("input", this.handleInput);
        });
    }

    public enableValidation(): void {
        this.toggleButtonState();
        this.setEventListeners();
    }

    public resetValidation(): void {
        this.formElement.reset();

        this.inputList.forEach((input) => {
            this.hideInputError(input);
        });

        this.submitButton.disabled = true;
    }
}