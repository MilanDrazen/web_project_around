import type {
    ApiOptions,
    CardData,
    CardFormData,
    UserData,
    UserFormData,
    AvatarFormData } from "../types/types.js";

export class Api {
    private readonly baseUrl: string;
    private readonly headers: Record<string, string>;

    constructor( options: ApiOptions) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }


/* ============ SOLICITUD ============ */
    private async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const res = await fetch(`${this.baseUrl}${endpoint}`, {
            ...options,
            headers: {
                ...this.headers,
                ...(options.headers ?? {}),
            },
        });

        if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`)
        }

        return (await res.json()) as T;
    }

/* ============= USUARIO ============= */
    public getUserInfo(): Promise<UserData> {
        return this.request<UserData>(`/users/me`)
    }

    public updateUserInfo(data: UserFormData): Promise<UserData> {
        return this.request<UserData>(`/users/me`, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
    }

    public updateAvatar(data: AvatarFormData): Promise<UserData> {
        return this.request<UserData>(`/users/me/avatar`, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
    }

/* ============= TARJETAS ============== */
    public getInitialCards(): Promise<CardData[]> {
        return this.request<CardData[]>(`/cards/`);
    }

    public addCard(data: CardFormData): Promise<CardData> {
        return this.request<CardData>(`/cards/`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    }

    public deleteCard(cardId: string): Promise<void> {
        return this.request<void>(`/cards/${cardId}`, {
            method: "DELETE",
        });
    }

    public likeCard(cardId: string): Promise<CardData> {
        return this.request<CardData>(`/cards/${cardId}/likes`, {
            method: "PUT",
        });
    }

    public unlikeCard(cardId: string): Promise<CardData> {
        return this.request<CardData>(`/cards/${cardId}/likes`, {
            method: "DELETE",
        });
    }
}