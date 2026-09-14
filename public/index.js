import { defaultFormConfig, defaultUserSelectors } from "./utils/constants.js";
import { FormValidator } from "./components/FormValidator.js";
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { initialCards } from "./utils/constants.js";
/* ======= VALIDACIÓN DE FORMULARIOS ========= */
const editProfileForm = document.querySelector("#edit-profile-form");
const newCardForm = document.querySelector("#new-card-form");
const editProfileValidator = new FormValidator(defaultFormConfig, editProfileForm);
const newCardValidator = new FormValidator(defaultFormConfig, newCardForm);
editProfileValidator.enableValidation();
newCardValidator.enableValidation();
/* ========== INFORMACIÓN DE USUARIO =========== */
const userInfo = new UserInfo(defaultUserSelectors);
/* ================== TARJETAS ================== */
const imageZoomPopup = new PopupWithImage("#image-popup");
const handleCardClick = (data) => {
    imageZoomPopup.open(data);
};
const cardSection = new Section(initialCards, (item) => {
    const card = new Card(item, "#card-template", handleCardClick);
    return card.generateCard();
}, ".cards__list");
cardSection.renderItems();
/* ================== POPUPS ================== */
const editProfilePopup = new PopupWithForm("#edit-popup", (data) => {
    userInfo.setUserInfo({
        name: data.name ?? "",
        description: data.description ?? "",
    });
}, editProfileValidator);
const newCardPopup = new PopupWithForm("#new-card-popup", (data) => {
    const newCard = new Card({ name: data["place-name"] ?? "", link: data.link ?? "" }, "#card-template", handleCardClick);
    cardSection.addItem(newCard.generateCard());
}, newCardValidator);
/* =============== CONECTAR BOTONES =============== */
const openEditProfilePopupBtn = document.querySelector(".profile__edit-button");
const openNewCardPopupBtn = document.querySelector(".profile__add-button");
openEditProfilePopupBtn.addEventListener("click", () => {
    const currentInfo = userInfo.getUserInfo();
    const nameInput = editProfileForm.querySelector(".popup__input_type_name");
    const descriptionInput = editProfileForm.querySelector(".popup__input_type_description");
    nameInput.value = currentInfo.name;
    descriptionInput.value = currentInfo.description;
    editProfilePopup.open();
});
openNewCardPopupBtn.addEventListener("click", () => {
    newCardPopup.open();
});
//# sourceMappingURL=index.js.map