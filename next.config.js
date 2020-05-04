module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'react-svg-loader',
          options: { jsx: true }
        }
      ],
    });
    return config;
  },
};
