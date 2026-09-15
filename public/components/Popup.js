export class Popup {
    popupCloseButton;
    popupElement;
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
        this.popupCloseButton = this.popupElement.querySelector(".popup__close");
        /*         this.setEventListeners(); */
    }
    handleEscClose = (evt) => {
        if (evt.key == "Escape") {
            this.close();
        }
    };
    open(data) {
        this.popupElement.classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }
    close() {
        this.popupElement.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    }
    setEventListeners() {
        this.popupCloseButton.addEventListener("click", () => this.close());
        this.popupElement.addEventListener("click", (evt) => {
            if (evt.target === this.popupElement) {
                this.close();
            }
        });
    }
}
