import React from "react";

type childPorps = {
  children: string;
};
const ChildProp = (props: childPorps) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};
export default ChildProp;
