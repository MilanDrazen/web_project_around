import type { FormValidatorConfig } from "../types/types.js";
export declare class FormValidator {
    private configObject;
    private formElement;
    private inputList;
    private submitButton;
    constructor(configObject: FormValidatorConfig, formElement: HTMLFormElement);
    private showInputError;
    private hideInputError;
    private checkInputValidity;
    private toggleButtonState;
    private handleInput;
    private setEventListeners;
    enableValidation(): void;
    resetValidation(): void;
}
//# sourceMappingURL=FormValidator.d.ts.map