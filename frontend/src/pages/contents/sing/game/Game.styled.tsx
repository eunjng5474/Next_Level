import styled from "styled-components";

const StyledGame = styled.div`
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledGameImage = styled.img.attrs({
  src: "https://i.namu.wiki/i/ovFP_kDjXd4t20ilq6YsbfNyyx2-zW8H6wJqZdLFFipYri5cHOoS5UbzTeavWJeC96kF11DUGjYpUkvgrb_Gng.webp",
  alt: "background",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.3;
  z-index: -1;
`;

const StyledGameNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledGameNavLife = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledGameNavLifeHeartImage = styled.img.attrs({
  src: "/sing/heart.svg",
  alt: "heart",
})``;

const StyledGameNavLifeEmptyHeartImage = styled.img.attrs({
  src: "/sing/empty_heart.svg",
  alt: "empty",
})``;

const StyledGameNavExitImage = styled.img.attrs({
  src: "/sing/exit.png",
  alt: "나가기",
})`
  height: 36px;
`;

const StyleGameTitleBox = styled.div`
  margin: 10px 5px;
`;

const StyledGameTitleHeadsetImage = styled.img.attrs({
  src: "/sing/headset.svg",
  alt: "",
})`
  width: 50px;
  height: 50px;
`;

const StyledGameTitle = styled.span`
  width: 50px;
  height: 50px;
  font-size: 36px;
  line-height: 36px;
`;

const StyledGameContents = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px 0px;
`;

const StyledGameContentsSpace = styled.span`
  width: 30px;
  height: 50px;
`;

const StyledGameContentsWordBox = styled.div`
  margin: 5px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledGameContentsWord = styled.input.attrs({
  type: "text",
  maxLength: 1,
})`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  font-size: 32px;
  line-height: 40px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px dashed #e59394;
  background: #efe0cd;
`;

const StyledGameWriteBox = styled.div`
  width: 100%;
  height: 40%;
`;

const StyledGameWriteHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: #4a90e2;
  padding: 10px 0px;
  border-radius: 20px 20px 0px 0px;
`;

const StyledGameWriteHeaderHintImage = styled.img.attrs({
  src: "/sing/hint.svg",
  alt: "Hint",
})`
  width: 40px;
  height: 40px;
`;

const StyledGameWriteHeaderHint = styled.div`
  font-size: 32px;
  color: white;
`;

interface ButtonProps {
  hintactive: string;
}

const StyledGameWriteHeaderHintButton = styled.button<ButtonProps>`
  margin: 0 10px;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  text-decoration: ${(props) =>
    props.hintactive === "true" ? "line-through red" : "none"};

  &:disabled {
    cursor: not-allowed;
  }
`;

const StyledGameWriteContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 35vh;
  border-radius: "0px 0px 20px 20px";
`;

const StyledGameWriteContent = styled.textarea`
  margin-top: 10px;
  width: 90%;
  height: 80%;
  font-size: 30px;
  text-align: center;
  border-style: dashed;
  border-radius: 10px;
  border-width: 5px;
`;

const StyledGameWriteReset = styled.button`
  margin: 10px;
  font-size: 20px;
  background: #c6e0f7;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
`;

const StyledGameWriteCheck = styled.button`
  margin: 10px;
  font-size: 20px;
  background: #4a90e2;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  color: white;
`;

export {
  StyledGame,
  StyledGameImage,
  StyledGameNav,
  StyledGameNavLife,
  StyledGameNavLifeHeartImage,
  StyledGameNavLifeEmptyHeartImage,
  StyledGameNavExitImage,
  StyleGameTitleBox,
  StyledGameTitleHeadsetImage,
  StyledGameTitle,
  StyledGameContents,
  StyledGameContentsSpace,
  StyledGameContentsWordBox,
  StyledGameContentsWord,
  StyledGameWriteBox,
  StyledGameWriteHeader,
  StyledGameWriteHeaderHintImage,
  StyledGameWriteHeaderHint,
  StyledGameWriteHeaderHintButton,
  StyledGameWriteContentBox,
  StyledGameWriteContent,
  StyledGameWriteReset,
  StyledGameWriteCheck,
};
