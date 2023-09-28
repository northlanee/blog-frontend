import { render } from "@testing-library/react";
import i18nextForTests from "@/shared/config/i18nForTests";
import { I18nextProvider } from "react-i18next";

const renderWithTranslations = (component: React.ReactNode) => {
  return render(<I18nextProvider i18n={i18nextForTests}>{component}</I18nextProvider>);
};

export { renderWithTranslations };
