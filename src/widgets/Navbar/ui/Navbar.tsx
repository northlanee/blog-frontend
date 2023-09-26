import { FC } from "react";
import { classNames } from "@/shared/lib/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { useTranslation } from "react-i18next";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={styles.mainLink}
        >
          {t("mainPage")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t("aboutPage")}
        </AppLink>
      </div>
    </div>
  );
};

export { Navbar };
