import React from "react";

type AI = {
  assistance: "google" | "siri";
};

const UnionProps = (props: AI) => {
  let message;
  if (props.assistance === "google") {
    message = "google";
  } else if (props.assistance === "siri") {
    message = "siri";
  } else {
    message = "No AI is available at the moment to server you!";
  }
  return (
    <div>
      <h1>Hello how you doing {message}</h1>
    </div>
  );
};

export default UnionProps;
