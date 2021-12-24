import React from "react";

type InputProps = {
  value?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event);
  // };

  // you can also decalre handlechange inside input component.
  return <input onChange={props.handleChange} />;
};

export default Input;
