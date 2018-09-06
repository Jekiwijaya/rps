const path = require('path');
const blacklist = require('metro/src/blacklist');

module.exports = {
  extraNodeModules: {
    'react': path.resolve(__dirname, 'node_modules/react'),
    'react-native': path.resolve(__dirname, 'node_modules/react-native')
  },
  getBlacklistRE: () =>
    blacklist([
      /[/\\]Users[/\\]jackywijaya[/\\]Documents[/\\]work[/\\]packages[/\\]rps[/\\]packages[/\\]example[/\\]shared[/\\]node_modules[/\\]react-native[/\\].*/,
      /[/\\]Users[/\\]jackywijaya[/\\]Documents[/\\]work[/\\]packages[/\\]rps[/\\]packages[/\\]rps[/\\]node_modules[/\\]react-native[/\\].*/
    ]),
  getProjectRoots: () => [
    // Include current package as project root
    path.resolve(__dirname),
    // Include symlinked packages as project roots
    path.resolve('/Users/jackywijaya/Documents/work/packages/rps/packages/example/shared'),
    path.resolve('/Users/jackywijaya/Documents/work/packages/rps/packages/rps')
  ],
};
