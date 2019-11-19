const github = require("@actions/github");
const core = require("@actions/core");

async function run() {
  // This should be a token with access to your repository scoped in as a secret.
  // The YML workflow will need to set myToken with the GitHub Secret Token
  // myToken: ${{ secrets.GITHUB_TOKEN }}
  // https://help.github.com/en/articles/virtual-environments-for-github-actions#github_token-secret
  const myToken = core.getInput("myToken");

  const octokit = new github.GitHub(myToken);

  const { data: pullRequest } = await octokit.pulls.get({
    owner: "octokit",
    repo: "rest.js",
    pull_number: 123,
    mediaType: {
      format: "diff"
    }
  });

  console.log(pullRequest);
}

run();
