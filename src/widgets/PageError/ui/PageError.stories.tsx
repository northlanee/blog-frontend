import { StoryFn, Meta } from "@storybook/react";
import { PageError } from "./PageError";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
  title: "widget/PageError",
  component: PageError,
} satisfies Meta<typeof PageError>;

const Template: StoryFn<typeof PageError> = () => <PageError />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
