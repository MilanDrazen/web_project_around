import type { CardData } from "../types/types.js"

export class Card {
    private data: CardData;
    private templateSelector: string;
    private handleCardClick: (data: CardData) => void;
    private handleLikeClick: (card: Card) => void;
    private handleDeleteClick: (card: Card) => void;
    private element: HTMLElement;
    private currentUserId: string;

    constructor(
        data: CardData,
        templateSelector: string,
        handleCardClick: (data: CardData) => void,
        handleLikeClick: (card: Card) => void,
        handleDeleteClick: (card: Card) => void,
        currentUserId: string,
     ) {
        this.data = data;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this.handleLikeClick = handleLikeClick;
        this.handleDeleteClick = handleDeleteClick;
        this.currentUserId = currentUserId;
        this.element = this.getTemplate();
        this.setEventListeners();
    }

    private getTemplate(): HTMLElement {
        const template = document.querySelector(this.templateSelector) as HTMLTemplateElement;
        const cardElement = template.content.querySelector(".card")!.cloneNode(true) as HTMLElement;
        const cardImage = cardElement.querySelector(".card__image") as HTMLImageElement;
        const cardTitle = cardElement.querySelector(".card__title") as HTMLElement;
        const cardLikeBtn = cardElement.querySelector(".card__like-button") as HTMLButtonElement;
        const cardDeleteBtn = cardElement.querySelector(".card__delete-button") as HTMLButtonElement;

        cardImage.src = this.data.link;
        cardImage.alt = this.data.name;
        cardTitle.textContent = this.data.name;

        if (this.data.isLiked) {
            cardLikeBtn.classList.add("card__like-button_is-active")
        }

        if (this.data.owner !== this.currentUserId) {
            cardDeleteBtn.style.display = "none";
        }

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
            this.handleLikeClick(this);
        });

        cardDeleteBtn.addEventListener("click", () => {
            this.handleDeleteClick(this);
        })
    }

    public generateCard(): HTMLElement {
        return this.element;
    }

    public getId(): string {
        return this.data._id;
    }

    public isLiked(): boolean {
        return this.data.isLiked;
    }

    public setLikeState(isLiked: boolean): void {
        this.data.isLiked = isLiked;
        const cardLikeBtn = this.element.querySelector(".card__like-button") as HTMLButtonElement;
        if (isLiked) {
            cardLikeBtn.classList.add("card__like-button_is-active");
        }   else {
            cardLikeBtn.classList.remove("card__like-button_is-active");
        }
    }

    public remove(): void {
        this.element.remove();
    }
}