import { StoryFn, Meta } from "@storybook/react";
import { Navbar } from "./Navbar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
  title: "widget/Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = () => <Navbar />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
