import type { FormValidator } from "./FormValidator.js";
import { Popup } from "./Popup.js";
export type FormSubmitHandler = (data: Record<string, string>) => void;
export declare class PopupWithForm extends Popup {
    private formElement;
    private handleFormSubmit;
    private formValidator;
    constructor(popupSelector: string, handleFormSubmit: FormSubmitHandler, formValidator: FormValidator);
    private getInputValues;
    private handleSubmit;
    setEventListeners(): void;
    close(): void;
}
//# sourceMappingURL=PopupWithForm.d.ts.map