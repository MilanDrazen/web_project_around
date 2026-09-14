import type { CardData } from "../types/types.js";
import { Popup } from "./Popup.js";
export declare class PopupWithImage extends Popup {
    imageElement: HTMLImageElement;
    captionElement: HTMLElement;
    constructor(popupSelector: string);
    open(data: CardData): void;
}
//# sourceMappingURL=PopupWithImage.d.ts.map