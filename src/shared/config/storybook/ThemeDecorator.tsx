import { Theme } from "@/app/providers/ThemeProvider";
import { StoryFn } from "@storybook/react";

// eslint-disable-next-line react/display-name
const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};

export { ThemeDecorator };
