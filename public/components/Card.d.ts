import type { CardData } from "../types/types.js";
export declare class Card {
    private data;
    private templateSelector;
    private handleCardClick;
    private element;
    constructor(data: CardData, templateSelector: string, handleCardClick: (data: CardData) => void);
    private getTemplate;
    private setEventListeners;
    generateCard(): HTMLElement;
}
//# sourceMappingURL=Card.d.ts.map