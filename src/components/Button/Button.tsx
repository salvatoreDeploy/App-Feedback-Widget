import { useState } from "react";

interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="button">{props.text ?? "Default"}</button>;
}

export { Button };
