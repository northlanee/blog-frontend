import { FC } from "react";
import { classNames } from "@/shared/lib";
import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "@/shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames("", {}, [className])}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export { ThemeSwitcher };
