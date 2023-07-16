export type GenericObject = Record<string, any>;
export type GenericStringObject = Record<string, string>;

export interface ValueAndLabel {
  value: string;
  label: string;
}
export interface LanguageAndText {
  text: string;
  language: string;
}

export interface Language {
  code: string;
  country: string;
  language: string;
  flag: JSX.Element;
  available?: boolean;
}

export interface IdName {
  readonly id: string;
  name: string;
}

export interface PreventDefaultEvent {
  preventDefault: () => void;
  stopPropagation: () => void;
}
export interface DataMustHaveId {
  id: string;
  [key: string]: any;
}

export type UUID = `${string}-${string}-${string}-${string}-${string}`;
