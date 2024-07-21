module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/muhammadhassanb111/semantic-release.git',
  tagFormat: 'backend-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/git',
      {
        assets: ['backend/dist/*.js', 'backend/dist/*.js.map'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};
