import type { CardData } from "../types/types.js"

export class Card {
    private data: CardData;
    private templateSelector: string;
    private handleCardClick: (data: CardData) => void;
    private element: HTMLElement;

    constructor(
        data: CardData,
        templateSelector: string,
        handleCardClick: (data: CardData) => void
     ) {
        this.data = data;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this.element = this.getTemplate();
        this.setEventListeners();
    }

    private getTemplate(): HTMLElement {
        const template = document.querySelector(this.templateSelector) as HTMLTemplateElement;
        const cardElement = template.content.querySelector(".card")!.cloneNode(true) as HTMLElement;
        const cardImage = cardElement.querySelector(".card__image") as HTMLImageElement;
        const cardTitle = cardElement.querySelector(".card__title") as HTMLElement;

        cardImage.src = this.data.link;
        cardImage.alt = this.data.name;
        cardTitle.textContent = this.data.name;

        return cardElement;
    }

    private setEventListeners(): void {
        const cardImage = this.element.querySelector(".card__image") as HTMLImageElement;
        const cardLikeBtn = this.element.querySelector(".card__like-button") as HTMLButtonElement;
        const cardDeleteBtn = this.element.querySelector(".card__delete-button") as HTMLButtonElement;

        cardImage.addEventListener("click", () => {
            this.handleCardClick(this.data);
        });

        cardLikeBtn.addEventListener("click", () => {
            cardLikeBtn.classList.toggle("card__like-button_is-active");
        });

        cardDeleteBtn.addEventListener("click", () => {
            this.element.remove();
        })
    }

    public generateCard(): HTMLElement {
        return this.element;
    }

}