const slugify = require('slugify');

// Aditional params are passed
// e.g. {{ myStr.slugifyLocale('de') }}
exports.slugifyLocale = function (str, locale, replacementCharacter, lowercase) {
  return slugify(str, {
    locale: "" + locale,
    replacement: "" + replacementCharacter,
    lower: lowercase
  });
};