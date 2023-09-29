import { StoryFn, Meta } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
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
  theme: ThemeButton.OUTLINED,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: "Test",
  theme: ThemeButton.OUTLINED,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
