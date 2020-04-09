const path = require('path');

module.exports = {
  // stories: ['../stories/**.stories.js'],
  stories: ['../stories/**.stories.js', '../src/components/**/**.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./'),
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };

    return config
  }
};
