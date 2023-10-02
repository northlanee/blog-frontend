import { FC, useState } from "react";
import { classNames } from "@/shared/lib";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { ButtonSize } from "@/shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "@/shared/config/routeConfig";
import HomeIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";

import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
      data-testid="sidebar"
    >
      <Button
        onClick={toggleHandler}
        className={styles.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        squared
        size={ButtonSize.M}
        data-testid="sidebar-toggle"
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={styles.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={styles.link}
        >
          <HomeIcon />
          <span>{t("mainPage")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={styles.link}
        >
          <AboutIcon />
          <span>{t("aboutPage")}</span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};

export { Sidebar };
