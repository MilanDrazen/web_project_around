export class Card {
    data;
    templateSelector;
    handleCardClick;
    element;
    constructor(data, templateSelector, handleCardClick) {
        this.data = data;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this.element = this.getTemplate();
        this.setEventListeners();
    }
    getTemplate() {
        const template = document.querySelector(this.templateSelector);
        const cardElement = template.content.querySelector(".card").cloneNode(true);
        const cardImage = cardElement.querySelector(".card__image");
        const cardTitle = cardElement.querySelector(".card__title");
        cardImage.src = this.data.link;
        cardImage.alt = this.data.name;
        cardTitle.textContent = this.data.name;
        return cardElement;
    }
    setEventListeners() {
        const cardImage = this.element.querySelector(".card__image");
        const cardLikeBtn = this.element.querySelector(".card__like-button");
        const cardDeleteBtn = this.element.querySelector(".card__delete-button");
        cardImage.addEventListener("click", () => {
            this.handleCardClick(this.data);
        });
        cardLikeBtn.addEventListener("click", () => {
            cardLikeBtn.classList.toggle("card__like-button_is-active");
        });
        cardDeleteBtn.addEventListener("click", () => {
            this.element.remove();
        });
    }
    generateCard() {
        return this.element;
    }
}
