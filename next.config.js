module.exports = {
  webpack: (config, options) => {
    const customRules = [
      {
        test: /\.svg/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: 'react-svg-loader',
            options: { jsx: true }
          }
        ],
      },
      {
        test: /\.jsx?$/,
        use: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/out/'],
      }
    ];

    customRules.reduce((accumulator, item) => {
      accumulator.push(item);
      return accumulator;
    }, config.module.rules);

    return config;
  },
};
