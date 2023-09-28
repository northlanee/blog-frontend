import { FC } from "react";
import { classNames } from "@/shared/lib";

import styles from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      {t("unexpectedError")}
      <Button onClick={reloadPage}>{t("pageRefresh")}</Button>
    </div>
  );
};

export { PageError };
