import React from "react";

export const HideOrNotHide = () => {
  const [title, setTitle] = React.useState("Hide content");
  const [text, setText] = React.useState("Some text");

  return (
    <>
      <button
        onClick={() => {
          setTitle("Reveal content");
          setText("");
        }}
      >
        {title}
      </button>
      {text && <p>{text}</p>}
    </>
  );
};
