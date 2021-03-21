module.exports = ({ env }) => ({
  plugins: {
    "@tailwindcss/jit": {},
    "postcss-nested": {},
    autoprefixer: {},
    cssnano:
      env === "production"
        ? {
            preset: ["default", { discardComments: { removeAll: true } }],
          }
        : false,
  },
});
