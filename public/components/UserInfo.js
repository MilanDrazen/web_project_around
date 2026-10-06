export class UserInfo {
    nameElement;
    descriptionElement;
    avatarElement;
    constructor(userSelectors) {
        this.nameElement = document.querySelector(userSelectors.nameSelector);
        this.descriptionElement = document.querySelector(userSelectors.descriptionSelector);
        this.avatarElement = document.querySelector(userSelectors.avatarSelector);
    }
    getUserInfo() {
        return {
            _id: "",
            name: this.nameElement.textContent ?? "",
            about: this.descriptionElement.textContent ?? "",
            avatar: this.avatarElement.src,
        };
    }
    setUserInfo(data) {
        this.nameElement.textContent = data.name;
        this.descriptionElement.textContent = data.about;
        this.avatarElement.src = data.avatar;
    }
}
