import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface BugButtonProps {
  className?: string;
}

const BugButton: FC<BugButtonProps> = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const toggle = () => {
    setError((prev) => !prev);
  };

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <button onClick={toggle}>{t("throwError")}</button>;
};

export { BugButton };
