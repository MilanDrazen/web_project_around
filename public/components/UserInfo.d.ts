import type { UserSelectors, UserData } from "../types/types.js";
export declare class UserInfo {
    private nameElement;
    private descriptionElement;
    constructor(userSelectors: UserSelectors);
    getUserInfo(): UserData;
    setUserInfo(data: UserData): void;
}
//# sourceMappingURL=UserInfo.d.ts.map