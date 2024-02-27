import type { Preview } from "@storybook/react";
import '../node_modules/tailwindcss/tailwind.css'
import '../node_modules/daisyui/dist/themes.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
