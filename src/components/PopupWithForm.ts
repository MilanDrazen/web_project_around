import type { FormValidator } from "./FormValidator.js";
import { Popup } from "./Popup.js";

export type FormSubmitHandler = (data: Record<string, string>) => Promise<void> | void;

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

    private handleSubmit = async (evt: SubmitEvent): Promise<void> => {
        evt.preventDefault();

        const submitButton = this.formElement.querySelector(".popup__button") as HTMLButtonElement;
        const originalText = submitButton.textContent ?? "Guardar";

        submitButton.textContent = "Guardando...";
        submitButton.disabled = true;

        try {
            await this.handleFormSubmit(this.getInputValues());
        }   catch (err: unknown) {
            console.error("Error en el envío del formulario:", err);
        }   finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            this.close();
        }
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