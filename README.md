# TOTO

Sass should be dart sass, see:
https://github.com/nhoizey/pack11ty/blob/master/package.json

- Maybe drop SASS for tailwind? YES, no need for SASS as has mixins for media queries and can nest if asked.... https://github.com/postcss/postcss-cli
- Add tailwind - need to do purge on build next
  https://github.com/distantcam/windty/blob/main/package.jsonhttps://github.com/distantcam/windty/blob/main/package.json
  DONE
- Add snowpack NOPE
  - it's for SPAs
- https://github.com/rollup/rollup/issues/703 -
  https://www.sitepoint.com/getting-started-with-eleventy/ -
  https://www.codecookbook.dev/asset-bundling-eleventy-webpack-tailwind/
- Enable EC npm modules DONE with rollup
- Check rollup build DONE - Check node module import DONE
  - Check EC package import
    - broken at the moment (update versions since Gabby push) - no, issue was no npmrc - had nvmrc instead!! TEST
- Change tailwind JIT DONE
- Move source and publish folder names to ENV VARS.
  - package.json still to do.
- auto list contents of course DONE
- Check for speed at scale DONE
- Test with Gabby
- Direct access should build from data (array of clix URLs and content types)
- Build with zips
- Fonts:
  - https://webdesign.tutsplus.com/articles/designing-accessible-content-typography-font-styling-and-structure--cms-31934
  - https://webdesign.tutsplus.com/articles/css-tips-for-better-color-and-contrast-accessibility--cms-34472
