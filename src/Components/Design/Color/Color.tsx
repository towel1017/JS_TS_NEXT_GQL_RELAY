import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ColorItemType, colorStore } from "../../../Store/ColorStore";
import { componentState } from "../../../Store/ComponentStore";
import ColorItem from "./ColorItem/ColorItem";
import * as S from "./Styled";

interface Props {
  colorItemList: ColorItemType[];
  colorListId: number;
  isEdited: boolean;
  handleColorEdit: () => void;
  handleColorDelete: (colorListId: number) => void;
}

let id = 1;

const Color = ({
  colorItemList,
  colorListId,
  isEdited,
  handleColorEdit,
  handleColorDelete,
}: Props) => {
  const colorsList = colorItemList.map(({ colorId, color }, index) => (
    <ColorItem key={index} colorId={colorId} color={color} />
  ));
  const [colors, setColors] = useRecoilState(colorStore);
  const [changeInput, setChangeInput] = useState("");
  const [component, setComponent] = useRecoilState(componentState);
  const [isFinish, setFinish] = useState(false);
  const appendColorsArray = [];
  console.log(
    colors.filter((item) => item.colorListId === colorListId)[0].colorList
  );
  const changeColors = () => {
    setComponent("default");
    setFinish(true);
    const colorArr = changeInput.replace(/(\s*)/g, "").split(",");
    console.log(colorArr);
    for (const item in colorArr) {
      console.log(colorArr[item]);
      appendColorsArray.push({ id: id++, color: colorArr[item] });
    }
    setColors(
      colors.map((item) => {
        if (item.colorListId === colorListId) {
          return {
            colorListId: item.colorListId,
            colorList: [...appendColorsArray],
          };
        }
        return item;
      })
    );
  };
  const formCheck = () => {
    const colorArr = changeInput.replace(/(\s*)/g, "").split(",");
    const re = new RegExp(/^#[a-f0-9]{6}/);
    const isFormCheck = colorArr.every((item) => {
      return re.test(item);
    });
    console.log(isFormCheck);
    if (isFormCheck) {
      changeColors();
      setChangeInput("");
      setComponent("");
      setFinish(false);
      handleColorEdit();
      console.log(component, isFinish);
    } else {
      alert(
        "양식이 맞지 않습니다.\n#16진수 색상표를 적어주시고,\n여러개를 적을 경우 쉼표로 구분해주세요"
      );
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      formCheck();
    }
  };
  return (
    <S.Positioner>
      <S.ColorEditDeleteWrapper>
        <S.ColorEditDeleteButtonWrapper>
          {!isEdited ? (
            <>
              <Image
                onClick={handleColorEdit}
                className="edit-delete-btn"
                src="/pencil.png"
                width={25}
                height={25}
              />
              <Image
                onClick={() => handleColorDelete(colorListId)}
                className="edit-delete-btn"
                src="/delete.png"
                width={25}
                height={25}
              />
            </>
          ) : (
            <>
              <S.ColorEditButton
                onClick={formCheck}
                onKeyPress={handleKeyPress}
              >
                Done
              </S.ColorEditButton>
            </>
          )}
        </S.ColorEditDeleteButtonWrapper>
      </S.ColorEditDeleteWrapper>
      <S.ColorListWrapper>
        {isEdited ? (
          <>
            <S.ColorEditInput
              type="text"
              value={changeInput}
              onChange={(e) => {
                setChangeInput(e.target.value);
              }}
            />
          </>
        ) : (
          colorsList
        )}
      </S.ColorListWrapper>
    </S.Positioner>
  );
};

export default Color;
