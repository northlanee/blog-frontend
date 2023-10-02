import { render } from "@testing-library/react";
import i18nextForTests from "@/shared/config/i18nForTests";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

interface ComponentRenderOptions {
  route?: string;
}

const componentRender = (
  component: React.ReactNode,
  options: ComponentRenderOptions = {}
) => {
  const { route = "/" } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nextForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
};

export { componentRender };
