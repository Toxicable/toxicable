import { rebase } from './rebase';

export default function cli() {
  const args = process.argv.slice(2);

  if (args[0] === 'rebase') {
    const rebaseArgs = transformArgs(args.slice(1));

    rebase(rebaseArgs['commits']);
  }
}

function transformArgs(args: string[]) {
  const argsObj = {};
  args.map(arg => arg.split('='))
    .forEach(([key, value]) => argsObj[key] = value);
  return argsObj;
}
