import type { UserSelectors, UserData } from "../types/types.js";

export class UserInfo {
    private nameElement: HTMLElement;
    private descriptionElement: HTMLElement;
    private avatarElement: HTMLImageElement;

    constructor( userSelectors: UserSelectors) {
        this.nameElement = document.querySelector(userSelectors.nameSelector) as HTMLElement;
        this.descriptionElement = document.querySelector(userSelectors.descriptionSelector) as HTMLElement;
        this.avatarElement = document.querySelector(userSelectors.avatarSelector) as HTMLImageElement;
    }

    public getUserInfo(): UserData {
        return {
            _id: "",
            name: this.nameElement.textContent ?? "",
            about: this.descriptionElement.textContent ?? "",
            avatar: this.avatarElement.src,
        };
    }

    public setUserInfo(data: UserData): void {
        this.nameElement.textContent = data.name;
        this.descriptionElement.textContent = data.about;
        this.avatarElement.src = data.avatar;
    }
}