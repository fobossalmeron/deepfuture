// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true"
// });
const path = require("path");
const withOffline = require("next-offline");

const nextConfig = {
  //PWA config
  target: "serverless",
  transformManifest: (manifest) => ["/"].concat(manifest),
  // generateInDevMode: true,
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  //nextjs config
  trailingSlash: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });
    // (config.node.fs = "empty"),
    config.node = {
      console: true,
      fs: "empty",
      net: "empty",
      tls: "empty",
    };
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  //env config
  env: {
    SENDINBLUE_API: process.env.SENDINBLUE_API,
    OPENPAY_ID: process.env.OPENPAY_ID,
    OPENPAY_PUBLIC: process.env.OPENPAY_PUBLIC,
  },
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = withOffline(nextConfig);
