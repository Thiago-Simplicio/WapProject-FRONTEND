const withImages = require("next-images");

module.exports = {
  ...withImages(),
  future: {
    webpack5: true,
  },
  images: {
    disableStaticImages: true,
  },
};

module.exports = {
  env: {
    URL_API: process.env.URL_API,
  },
};
