import { schedule } from './scheduler/scheduler';
import { report } from './reporter/reporter';

const durationSeconds = 20;
schedule(() => report().then(console.log), durationSeconds * 1000);

console.log("Press any key to terminate");
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));