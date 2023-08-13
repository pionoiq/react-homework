# Mission-01

> ### Atomic Component 설계 및 구현하기

<br/>

## 구현 목표

> 버튼 클릭 시 로고 이미지 변경

<br/>

## 구현 결과

<img src="./public/missionResult.gif">

## 피그마 시안

[피그마 시안]("https://www.figma.com/file/hLN3f9ABugQAFgtsjLX0T8/Mission-01?type=design&node-id=0%3A1&mode=design&t=BJ8aHBMPrqSHJeDl-1")

<br/>

## 핵심 코드

ChangeLogo.jsx

```jsx
import { useState } from "react";

function changeLogo() {
  const [change, setChange] = useState(0);

  const handleClick = () => {
    setChange(!change);
  };

  return (
    <>
      <div className="parent">
        <div className={`FigmawhiteLogo ${change ? "hidden" : ""}`}></div>
        <div className={`FigmaBlackLogo ${change ? "" : "hidden"}`}></div>
        <button onClick={() => handleClick()}>로고 변경</button>
      </div>
    </>
  );
}

export default changeLogo;
```

## 고민

- 버튼 클릭시 배경 색상도 변경되도록 구현하기
- 클래스 명을 좀 더 고민해 보기
- FigmaLogo.jsx로 로고 변경 구현하는 방법 고민해 보기
