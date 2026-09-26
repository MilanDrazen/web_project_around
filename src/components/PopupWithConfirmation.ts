import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    private readonly handleConfirm: () => void;
    private readonly confirmButton: HTMLButtonElement;

    constructor( popupSelector: string, handleConfirm: () => void) {
        super(popupSelector);
        this.handleConfirm = handleConfirm;
        this.confirmButton = this.popupElement.querySelector(".popup__button") as HTMLButtonElement;

        this.setEventListeners();
    }

    public setEventListeners(): void {
        super.setEventListeners();

        this.confirmButton.addEventListener("click", () => {
            this.handleConfirm();
            this.close();
        });
    }
}