/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      },
    })
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    })
    return config
  },
}

module.exports = nextConfig
