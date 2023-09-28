import { StoryFn, Meta } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
  title: "shared/PageError",
  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = () => <Loader />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
