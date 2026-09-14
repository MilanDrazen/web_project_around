import type { CardData } from "../types/types.js";
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    imageElement: HTMLImageElement;
    captionElement: HTMLElement;

    constructor(popupSelector: string) {
        super(popupSelector);
        this.imageElement = this.popupElement.querySelector(".popup__image") as HTMLImageElement;
        this.captionElement = this.popupElement.querySelector(".popup__caption") as HTMLElement;
        this.setEventListeners();
    }

    public open(data: CardData): void {
        this.imageElement.src = data.link;
        this.imageElement.alt = data.name;
        this.captionElement.textContent = data.name;
        super.open();
    }
}