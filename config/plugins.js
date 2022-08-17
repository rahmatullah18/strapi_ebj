module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "import-export-entries": {
    enabled: true,
  },
  // enable Awesome Help
  "awesome-help": {
    enabled: true,
  },

  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::shop.shop",
          modelName: "shop",
          queryConstraints: {
            where: {
              $and: [
                {
                  publishedAt: { $notNull: true },
                },
              ],
            },
          },
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 10,
            keys: [
              {
                name: "shop_name",
                weight: 100,
              },
              {
                name: "kecamatan",
                weight: -100,
              },
              {
                name: "shop_description",
                weight: -100,
              },
            ],
          },
        },
        {
          uid: "api::category.category",
          modelName: "category",
          queryConstraints: {
            where: {
              $and: [
                {
                  publishedAt: { $notNull: true },
                },
              ],
            },
          },
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 10,
            keys: [
              {
                name: "category_name",
                weight: 100,
              },
              {
                name: "description",
                weight: 100,
              },
            ],
          },
        },
      ],
    },
  },
});
