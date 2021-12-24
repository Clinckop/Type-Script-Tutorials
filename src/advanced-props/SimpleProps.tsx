import React from "react";
type SimpProps = {
  name: string;
  isLoading?: boolean;
  counts: number;
};
const SimpleProps = (props: SimpProps) => {
  return (
    <div>
      <h1>Hello I am {props.name}</h1>
    </div>
  );
};

export default SimpleProps;
