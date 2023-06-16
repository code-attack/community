import { spawn } from 'child_process';

export const cli = (cmd: string) => {
  return new Promise(function (resolve, reject) {
    let process = spawn('bash');
    const command = `${cmd} \n`;
    try {
      process.stdin.write(command);

      process.stdin.end();

      process.on('close', function (code) {
        resolve(code);
      });
    } catch (err) {
      reject(err);
    }
  });
};
