export class Section<T> {
    private items: T[];
    private renderer: (item: T) => HTMLElement;
    private container: HTMLElement;

    constructor(
        items: T[],
        renderer: (item: T) => HTMLElement,
        containerSelector: string
    ) {
        this.items = items;
        this.renderer = renderer;
        this.container = document.querySelector(containerSelector) as HTMLElement;
    }

    public renderItems(): void {
        this.items.forEach((item) => {
            const element = this.renderer(item);
            this.container.append(element);
        });
    }

    public addItem(element: HTMLElement): void {
        this.container.prepend(element);
    }
}