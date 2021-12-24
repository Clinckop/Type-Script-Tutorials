import React from "react";

type propTypes = {
  children: React.ReactNode;
};

const OptionalProp = (props: propTypes) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

export default OptionalProp;
