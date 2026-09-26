export class Card {
    data;
    templateSelector;
    handleCardClick;
    handleLikeClick;
    handleDeleteClick;
    element;
    currentUserId;
    constructor(data, templateSelector, handleCardClick, handleLikeClick, handleDeleteClick, currentUserId) {
        this.data = data;
        this.templateSelector = templateSelector;
        this.handleCardClick = handleCardClick;
        this.handleLikeClick = handleLikeClick;
        this.handleDeleteClick = handleDeleteClick;
        this.currentUserId = currentUserId;
        this.element = this.getTemplate();
        this.setEventListeners();
    }
    getTemplate() {
        const template = document.querySelector(this.templateSelector);
        const cardElement = template.content.querySelector(".card").cloneNode(true);
        const cardImage = cardElement.querySelector(".card__image");
        const cardTitle = cardElement.querySelector(".card__title");
        const cardLikeBtn = cardElement.querySelector(".card__like-button");
        const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
        cardImage.src = this.data.link;
        cardImage.alt = this.data.name;
        cardTitle.textContent = this.data.name;
        if (this.data.isLiked) {
            cardLikeBtn.classList.add("card__like-button_is-active");
        }
        if (this.data.owner !== this.currentUserId) {
            cardDeleteBtn.style.display = "none";
        }
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
            this.handleLikeClick(this);
        });
        cardDeleteBtn.addEventListener("click", () => {
            this.handleDeleteClick(this);
        });
    }
    generateCard() {
        return this.element;
    }
    getId() {
        return this.data._id;
    }
    isLiked() {
        return this.data.isLiked;
    }
    setLikeState(isLiked) {
        this.data.isLiked = isLiked;
        const cardLikeBtn = this.element.querySelector(".card__like-button");
        if (isLiked) {
            cardLikeBtn.classList.add("card__like-button_is-active");
        }
        else {
            cardLikeBtn.classList.remove("card__like-button_is-active");
        }
    }
    remove() {
        this.element.remove();
    }
}
