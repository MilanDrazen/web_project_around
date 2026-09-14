import type { FormValidator } from "./FormValidator.js";
import { Popup } from "./Popup.js";

export type FormSubmitHandler = (data: Record<string, string>) => void;

export class PopupWithForm extends Popup {
    private formElement: HTMLFormElement;
    private handleFormSubmit: FormSubmitHandler;
    private formValidator: FormValidator;

    constructor(
        popupSelector: string,
        handleFormSubmit: FormSubmitHandler,
        formValidator: FormValidator
    ) {
        super(popupSelector);
        this.formElement = this.popupElement.querySelector(".popup__form") as HTMLFormElement;
        this.handleFormSubmit = handleFormSubmit;
        this.formValidator = formValidator;
        
        this.setEventListeners();
    }

    private getInputValues(): Record<string, string> {
        const inputs = Array.from(this.formElement.querySelectorAll(".popup__input")) as HTMLInputElement[];

        const values: Record<string, string> = {};
        inputs.forEach((input) => {
            values[input.name] = input.value;
        });

        return values;
    }

    private handleSubmit = (evt: SubmitEvent): void => {
        evt.preventDefault();
        this.handleFormSubmit(this.getInputValues());
        this.close();
    }

    public setEventListeners(): void {
        super.setEventListeners();
        this.formElement.addEventListener("submit", this.handleSubmit);
    }

    public close(): void {
        this.formValidator.resetValidation();
        super.close();
    }
}