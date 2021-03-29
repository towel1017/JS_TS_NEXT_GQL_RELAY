import { atom } from "recoil"


export const componentState = atom<string>({
    key: "componentState",
    default : ""
})