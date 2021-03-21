require("dotenv").config();

const source = process.env.COURSE_INPUT_FOLDER || "course";
const publish = process.env.COURSE_PRODUCTION_FOLDER || "_upload-files";

module.exports = function (eleventyConfig) {
	eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addPassthroughCopy(`${source}/index.css`);
	eleventyConfig.addPassthroughCopy(`${source}/images`);

	eleventyConfig.addWatchTarget(`./${source}/index.css`);
	eleventyConfig.addWatchTarget(`./${source}/**/*.css`);
	eleventyConfig.addWatchTarget(`./${source}/**/*.js`);

	// Browsersync Overrides
	eleventyConfig.setBrowserSyncConfig({
		files: [`${publish}/**/*.css`, `${publish}/**/*.js`],
		ui: false,
		reloadOnRestart: true,
		open: false,
		ghostMode: false,
	});

	// eleventyConfig.setWatchThrottleWaitTime(1000);

	return {
		templateFormats: ["njk", "html"],

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about those.

		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for link URLs (it does not affect your file structure)
		// Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

		// You can also pass this in on the command line using `--pathprefix`
		// pathPrefix: "/",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",

		// These are all optional, defaults are shown:
		dir: {
			input: source,
			output: publish,
			data: "../_utilities/_data",
			includes: "../_utilities/_includes",
		},
	};
};
