import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
    handleConfirm;
    confirmButton;
    constructor(popupSelector, handleConfirm) {
        super(popupSelector);
        this.handleConfirm = handleConfirm;
        this.confirmButton = this.popupElement.querySelector(".popup__button");
        this.setEventListeners();
    }
    setEventListeners() {
        super.setEventListeners();
        this.confirmButton.addEventListener("click", () => {
            this.handleConfirm();
            this.close();
        });
    }
}
