import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib";
import { Button, ButtonTheme } from "@/shared/ui/Button";

import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    void i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <Button
      onClick={toggleLanguage}
      theme={ButtonTheme.CLEAR}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >
      {t(short ? "languageShort" : "language")}
    </Button>
  );
};

export { LangSwitcher };
