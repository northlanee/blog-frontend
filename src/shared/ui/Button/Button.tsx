import { type ButtonHTMLAttributes, FC } from "react";
import { classNames } from "@/shared/lib";

import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINED = "outlined",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  squared?: boolean;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  squared,
  size = ButtonSize.M,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [styles.squared]: !!squared,
    [styles[theme]]: true,
    [styles[size]]: true,
  };

  return (
    <button className={classNames(styles.Button, mods, [className])} {...otherProps}>
      {children}
    </button>
  );
};

export { Button };
