import { type FC, useState } from "react";
import { classNames } from "@/shared/lib";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { useTranslation } from "react-i18next";

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
      <button onClick={toggleHandler} data-testid="sidebar-toggle">
        {t("toggle")}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.langSwitcher} />
      </div>
    </div>
  );
};

export { Sidebar };
