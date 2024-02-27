import type { StorybookConfig } from "@storybook/nextjs";
import { Configuration } from 'webpack';
import type { RuleSetRule } from 'webpack';
const path = require('path');

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "*.stories.@(js|jsx|mjs|ts|tsx)",
    '../**/*.stories.@(js|jsx|mjs|ts|tsx)', 
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: Configuration) => {
    if(config.module?.rules) {
      const cssRule = (config.module?.rules as RuleSetRule[]).find(
        (rule): rule is RuleSetRule =>
          rule.test instanceof RegExp && rule.test.test('.css')
      );

      // Modify the existing PostCSS loader configuration
      if (cssRule && cssRule.use && Array.isArray(cssRule.use)) {
        // Add the PostCSS loader with Daisy UI and Tailwind CSS plugins
        cssRule.use.push({
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss')(path.resolve(__dirname, '../tailwind.config.ts')),
                require('autoprefixer'),
              ],
            },
          },
        });
      }
    }
    return config;
  },
};
export default config;
