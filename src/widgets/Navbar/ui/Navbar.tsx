import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";

import styles from "./Navbar.module.scss";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={styles.mainLink}
        >
          Main Page
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          About Page
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };
