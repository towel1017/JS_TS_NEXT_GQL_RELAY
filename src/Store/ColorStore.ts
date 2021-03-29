import { atom } from "recoil";

export interface ColorItemType {
    colorId: number
    color : string
}

export interface ColorStoreStateType {
    colorListId : number
    colorList : ColorItemType[]
}
// #c3c3c3, #fddaca
export const colorStore = atom<ColorStoreStateType[]>({
    key:  "colors",
    default : [
        {
            colorListId: 1,
            colorList: [
                { colorId: 1, color: "#ffffff" },
                { colorId: 2, color : "#c3c3c3" }
            ]
        },
    ]
})