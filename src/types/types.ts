export interface FormValidatorConfig {
  inputSelector: string;
  submitButtonSelector: string;
  inputErrorClass: string;
  errorClass: string;
}

export interface ApiOptions {
  baseUrl: string;
  headers: Record<string, string>;
}

export interface SectionConfig<T> {
  items: T[];
  renderer: (item: T) => HTMLElement;
}

export interface CardFormData {
  name: string;
  link: string;
}

export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

export interface UserFormData {
  name: string;
  about: string;
}

export interface UserData {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export interface AvatarFormData {
  avatar: string;
}

export interface UserSelectors {
  nameSelector: string;
  descriptionSelector: string;
  avatarSelector: string;
}
