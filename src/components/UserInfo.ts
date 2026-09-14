import type { UserSelectors, UserData } from "../types/types.js";

export class UserInfo {
    private nameElement: HTMLElement;
    private descriptionElement: HTMLElement;

    constructor( userSelectors: UserSelectors) {
        this.nameElement = document.querySelector(userSelectors.nameSelector) as HTMLElement;
        this.descriptionElement = document.querySelector(userSelectors.descriptionSelector) as HTMLElement;
    }

    public getUserInfo(): UserData {
        return {
            name: this.nameElement.textContent ?? "",
            description: this.descriptionElement.textContent ?? "",
        };
    }

    public setUserInfo(data: UserData): void {
        this.nameElement.textContent = data.name;
        this.descriptionElement.textContent = data.description;
    }
}