export interface FormValidatorConfig {
  inputSelector: string;
  submitButtonSelector: string;
  inputErrorClass: string;
  errorClass: string;
}

export interface CardData {
  name: string;
  link: string;
}

export interface UserData {
  name: string;
  description: string;
}

export interface UserSelectors {
  nameSelector: string;
  descriptionSelector: string;
}