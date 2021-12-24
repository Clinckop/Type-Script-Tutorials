import React from "react";

type childCompProp = {
  children: React.ReactNode;
};

const CompoAsChild = (props: childCompProp) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

export default CompoAsChild;
