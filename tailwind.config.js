require("dotenv").config();

const source = process.env.COURSE_INPUT_FOLDER || "course";

module.exports = {
  purge: [`./${source}/**/*.html`, "index.njk"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
