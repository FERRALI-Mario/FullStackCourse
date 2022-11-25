import React from "react";

type Props = { label: string };

const ButtonComponent: React.FC<Props> = (props) => {
  const { label } = props;
  return (<button>{label}</button>);
};

export default ButtonComponent;
