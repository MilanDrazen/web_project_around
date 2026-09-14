export class Popup {
    private popupCloseButton: HTMLButtonElement;
    protected popupElement: HTMLElement;

    constructor( popupSelector: string) {
        this.popupElement = document.querySelector(popupSelector) as HTMLElement;
        this.popupCloseButton = this.popupElement.querySelector(".popup__close") as HTMLButtonElement;
/*         this.setEventListeners(); */
    }

    private handleEscClose = (evt: KeyboardEvent): void => {
        if (evt.key == "Escape") {
            this.close();
        }
    }

    public open(data?: unknown) {
        this.popupElement.classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }

    public close() {
        this.popupElement.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose)
    }

    public setEventListeners(): void {
        this.popupCloseButton.addEventListener("click", () => this.close());
        this.popupElement.addEventListener("click", (evt) => {
            if (evt.target === this.popupElement) {
                this.close();
            }
        });
    }
}