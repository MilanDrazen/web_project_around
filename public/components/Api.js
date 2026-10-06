export class Api {
    baseUrl;
    headers;
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }
    /* ============ SOLICITUD ============ */
    async request(endpoint, options = {}) {
        const res = await fetch(`${this.baseUrl}${endpoint}`, {
            ...options,
            headers: {
                ...this.headers,
                ...(options.headers ?? {}),
            },
        });
        if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return (await res.json());
    }
    /* ============= USUARIO ============= */
    getUserInfo() {
        return this.request(`/users/me`);
    }
    updateUserInfo(data) {
        return this.request(`/users/me`, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
    }
    updateAvatar(data) {
        return this.request(`/users/me/avatar`, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
    }
    /* ============= TARJETAS ============== */
    getInitialCards() {
        return this.request(`/cards/`);
    }
    addCard(data) {
        return this.request(`/cards/`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    }
    deleteCard(cardId) {
        return this.request(`/cards/${cardId}`, {
            method: "DELETE",
        });
    }
    likeCard(cardId) {
        return this.request(`/cards/${cardId}/likes`, {
            method: "PUT",
        });
    }
    unlikeCard(cardId) {
        return this.request(`/cards/${cardId}/likes`, {
            method: "DELETE",
        });
    }
}
