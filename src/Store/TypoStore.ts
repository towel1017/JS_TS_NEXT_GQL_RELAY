import { atom } from "recoil"

export interface TypoTextType {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    wordSpace: number;
    color: string;
    language?: string;
    text?: string;
}

export const typoStore = atom<TypoTextType>({
    key: "typo",
    default: {
        fontFamily: 'Roboto',
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: 1.5,
        wordSpace: 0,
        color: "#000000",
        language: "ko",
        text : ""
    }
})