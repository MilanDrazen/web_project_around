import { defaultFormConfig, defaultUserSelectors } from "./utils/constants.js";
import { FormValidator } from "./components/FormValidator.js";
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithConfirmation } from "./components/PopupWithConfirmation.js";
import { Card } from "./components/Card.js";
import { Section } from "./components/Section.js";
import { Api } from "./components/Api.js";
/* =================== API ==================== */
const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1",
    headers: {
        authorization: "bcb90caf-e0fa-4c05-87a4-a215610c51d2",
        "Content-Type": "application/json",
    },
});
/* ======= VALIDACIÓN DE FORMULARIOS ========= */
const editProfileForm = document.querySelector("#edit-profile-form");
const editAvatarForm = document.querySelector("#edit-avatar-form");
const newCardForm = document.querySelector("#new-card-form");
const editProfileValidator = new FormValidator(defaultFormConfig, editProfileForm);
const editAvatarValidator = new FormValidator(defaultFormConfig, editAvatarForm);
const newCardValidator = new FormValidator(defaultFormConfig, newCardForm);
editProfileValidator.enableValidation();
editAvatarValidator.enableValidation();
newCardValidator.enableValidation();
/* ========== INFORMACIÓN DE USUARIO =========== */
const userInfo = new UserInfo(defaultUserSelectors);
/* =============== CALLBACKS DE CARDS =============== */
let cardToDelete = null;
const imageZoomPopup = new PopupWithImage("#image-popup");
const deleteCardPopup = new PopupWithConfirmation("#delete-card-popup", async () => {
    if (!cardToDelete)
        return;
    try {
        await api.deleteCard(cardToDelete.getId());
        cardToDelete.remove();
        cardToDelete = null;
    }
    catch (err) {
        console.error("Error al eliminar la tarjeta:", err);
    }
});
const handleCardClick = (data) => {
    imageZoomPopup.open(data);
};
const handleLikeClick = async (card) => {
    try {
        const cardId = card.getId();
        let updatedCard;
        if (card.isLiked()) {
            updatedCard = await api.unlikeCard(cardId);
        }
        else {
            updatedCard = await api.likeCard(cardId);
        }
        card.setLikeState(updatedCard.isLiked);
    }
    catch (err) {
        console.error("Error al alternar el like:", err);
    }
};
const handleDeleteClick = (card) => {
    cardToDelete = card;
    deleteCardPopup.open();
};
/* ============== SECCION TARJETAS ============== */
let cardSection;
/* ============== INICIALIZACIÓN =============== */
let currentUserId = "";
async function init() {
    try {
        const [userData, cards] = await Promise.all([
            api.getUserInfo(),
            api.getInitialCards(),
        ]);
        userInfo.setUserInfo(userData);
        currentUserId = userData._id;
        cardSection = new Section({
            items: cards,
            renderer: (item) => {
                const card = new Card(item, "#card-template", handleCardClick, handleLikeClick, handleDeleteClick, currentUserId);
                return card.generateCard();
            },
        }, ".cards__list");
        cardSection.renderItems();
    }
    catch (err) {
        console.error("Error al cargar los datos iniciales: ", err);
    }
}
init();
/* ================== POPUPS ================== */
const editAvatarPopup = new PopupWithForm("#edit-avatar", async (data) => {
    try {
        const updatedUser = await api.updateAvatar({
            avatar: data.link ?? "",
        });
        userInfo.setUserInfo(updatedUser);
    }
    catch (err) {
        console.error("Error al actualizar el avatar:", err);
    }
}, editAvatarValidator);
const editProfilePopup = new PopupWithForm("#edit-popup", async (data) => {
    try {
        const updateUser = await api.updateUserInfo({
            name: data.name ?? "",
            about: data.description ?? "",
        });
        userInfo.setUserInfo(updateUser);
    }
    catch (err) {
        console.error("Error al actualizar el perfil: ", err);
    }
}, editProfileValidator);
const newCardPopup = new PopupWithForm("#new-card-popup", async (data) => {
    try {
        const newCardData = await api.addCard({
            name: data["place-name"] ?? "",
            link: data.link ?? "",
        });
        const card = new Card(newCardData, "#card-template", handleCardClick, handleLikeClick, handleDeleteClick, currentUserId);
        cardSection.addItem(card.generateCard());
    }
    catch (err) {
        console.error("Error al añadir la tarjeta: ", err);
    }
}, newCardValidator);
/* =============== CONECTAR BOTONES =============== */
const openEditProfilePopupBtn = document.querySelector(".profile__edit-button");
const openEditAvatarBtn = document.querySelector(".profile__avatar-edit-button");
const openNewCardPopupBtn = document.querySelector(".profile__add-button");
openEditProfilePopupBtn.addEventListener("click", () => {
    const currentInfo = userInfo.getUserInfo();
    const nameInput = editProfileForm.querySelector(".popup__input_type_name");
    const descriptionInput = editProfileForm.querySelector(".popup__input_type_description");
    nameInput.value = currentInfo.name;
    descriptionInput.value = currentInfo.about;
    editProfilePopup.open();
});
openEditAvatarBtn.addEventListener("click", () => {
    const currentInfo = userInfo.getUserInfo();
    const avatarInput = editAvatarForm.querySelector(".popup__input_type_url");
    avatarInput.value = currentInfo.avatar;
    editAvatarPopup.open();
});
openNewCardPopupBtn.addEventListener("click", () => {
    newCardPopup.open();
});
