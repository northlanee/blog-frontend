import { FC } from "react";
import { classNames } from "@/shared/lib";

import styles from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.ldsFacebook, {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { Loader };
