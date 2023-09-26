import { FC } from "react";
import { classNames } from "@/shared/lib";
import { useTranslation } from "react-i18next";

import styles from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      {t("notFound")}
    </div>
  );
};

export { NotFoundPage };
