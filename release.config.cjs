const config = {
  branches: [
    'feat/file-management',
    {name: 'cicd', prerelease: true},
  ],
  tagFormat: '${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      "@semantic-release/exec",
      {
        prepareCmd: "echo ${nextRelease.version} > VERSION.txt"
      }
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        tarballDir: 'dist'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['dist/**/*.{js,css,tgz}', 'CHANGELOG.md', 'package.json', "VERSION.txt"],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    [
      "@semantic-release/gitlab",
      {
        assets: [
          "CHANGELOG.md",
          "VERSION.txt",
          "dist/**/*.{js,css,tgz}"
        ]
      }
    ]
  ]
};  

module.exports = config;