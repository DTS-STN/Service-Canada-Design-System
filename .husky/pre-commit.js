const chalk = require('chalk');
const { exec } = require('./_/exec');

const branchName = exec('git rev-parse --abbrev-ref HEAD', { trim: true });
// check if this branch already exists in the remote
const isInRemote = exec(`git show-branch remotes/origin/${branchName}`, { toString: false }).code === 0;

if (!isInRemote) {
  const validBranchPrefix = 'feature|fix|hotfix|chore|tests|automation';
  const validBranchesRegex = new RegExp(`^(${validBranchPrefix})\/[\\w.-]+$`);

  if (!validBranchesRegex.test(branchName)) {
    const msg = `Branch names in this project must adhere to this contract: ${validBranchPrefix}.`
    console.log(chalk.bgRed.black.bold(msg));
    process.exit(1);
  }
}