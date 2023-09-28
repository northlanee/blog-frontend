import { StoryFn, Meta } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
  title: "shared/AppLink",
  component: AppLink,
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args}>Link</AppLink>;

export const LightPrimary = Template.bind({});

export const DarkPrimary = Template.bind({});
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const LightSecondary = Template.bind({});
LightSecondary.args = {
  theme: AppLinkTheme.SECONDARY,
};

export const DarkSecondary = Template.bind({});
DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)];
DarkSecondary.args = {
  theme: AppLinkTheme.SECONDARY,
};
