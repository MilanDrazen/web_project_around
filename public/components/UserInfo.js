export class UserInfo {
    nameElement;
    descriptionElement;
    constructor(userSelectors) {
        this.nameElement = document.querySelector(userSelectors.nameSelector);
        this.descriptionElement = document.querySelector(userSelectors.descriptionSelector);
    }
    getUserInfo() {
        return {
            name: this.nameElement.textContent ?? "",
            description: this.descriptionElement.textContent ?? "",
        };
    }
    setUserInfo(data) {
        this.nameElement.textContent = data.name;
        this.descriptionElement.textContent = data.description;
    }
}
//# sourceMappingURL=UserInfo.js.map