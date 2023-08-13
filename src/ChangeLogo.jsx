import { useState } from "react";

function changeLogo() {
  const [change, setChange] = useState(0);

  const handleClick = () => {
    setChange(!change);
  };

  return (
    <>
      <div className="background">
        <div className={`FigmawhiteLogo ${change ? "hidden" : ""}`}></div>
        <div className={`FigmaBlackLogo ${change ? "" : "hidden"}`}></div>
        <button onClick={() => handleClick()}>로고 변경</button>
      </div>
    </>
  );
}

export default changeLogo;
