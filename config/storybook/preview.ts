import { Theme } from "@/app/providers/ThemeProvider";
import { RouteDecorator } from "@/shared/config/storybook/RouteDecorator";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator],
};

export default preview;
