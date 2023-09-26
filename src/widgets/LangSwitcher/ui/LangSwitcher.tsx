import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames";
import { Button, ThemeButton } from "@/shared/ui/Button";

import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <Button
      onClick={toggleLanguage}
      theme={ThemeButton.CLEAR}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >
      {t("language")}
    </Button>
  );
};

export { LangSwitcher };
