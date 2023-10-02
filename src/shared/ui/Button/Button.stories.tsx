import { StoryFn, Meta } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
  title: "shared/Button",
  component: Button,
} satisfies Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
  children: "Test",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Test",
  theme: ButtonTheme.OUTLINED,
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
  children: "Test",
  theme: ButtonTheme.OUTLINED,
  size: ButtonSize.L,
};

export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
  children: "Test",
  theme: ButtonTheme.OUTLINED,
  size: ButtonSize.XL,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: "Test",
  theme: ButtonTheme.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: "Test",
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: "Test",
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Squared = Template.bind({});
Squared.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  squared: true,
};

export const SquaredSizeM = Template.bind({});
SquaredSizeM.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  squared: true,
  size: ButtonSize.M,
};
export const SquaredSizeL = Template.bind({});
SquaredSizeL.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  squared: true,
  size: ButtonSize.L,
};
export const SquaredSizeXL = Template.bind({});
SquaredSizeXL.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  squared: true,
  size: ButtonSize.XL,
};
