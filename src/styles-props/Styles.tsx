import React from "react";

type stylesProps = {
  styles: React.CSSProperties;
};

//Before Destructuring
// const Styles = (props : stylesProps) => {
//   return (
//     <div>
//       <input type="text" style={props.styles} />
//     </div>
//   );
// };

const Styles = ({ styles }: stylesProps) => {
  return (
    <div>
      <input type="text" style={styles} />
    </div>
  );
};

export default Styles;
