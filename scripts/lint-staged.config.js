module.exports = {
  '*.{ts}': (filenames) => `eslint ${filenames.join(' ')}`,
};
