import { type ButtonHTMLAttributes, type FC } from "react";
import { classNames } from "@/shared/lib";

import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINED = "outlined",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...otherProps
}) => {
  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
