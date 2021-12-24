import React from "react";

type ButtonProps = {
  BtnText: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 23)}>
      {props.BtnText}
    </button>
  );
};

export default Button;
