import { FC, useState } from "react";
import { classNames } from "@/shared/lib/classNames";

import styles from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleHandler}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export { Sidebar };
