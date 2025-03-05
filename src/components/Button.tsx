import { ReactElement } from "react";


export interface ButtonProps {
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;

}

const variantStyles = {
  primary: "bg-purple-600 text-white hover:bg-purple-500 ",
  secondary: "bg-purple-300  text-purple-600 hover:bg-purple-200 ",
}

const defaultStyles =
  "rounded-md px-4 py-2 flex items-center "


export const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${props.fullWidth ? "w-full flex items-center justify-center": ""} `}>
    <div className=" flex justify-center items-center gap-2">
      {props.startIcon}
      {props.text}
    </div>
   
  </button>

}