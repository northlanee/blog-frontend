import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import { Link, LinkProps } from "react-router-dom";

import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export { AppLink };
