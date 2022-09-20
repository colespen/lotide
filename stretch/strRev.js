//function to reverse an array of strings
const pArgv = process.argv.slice(2);

const strRev = () => {
  let revArr = [];
  for (let i = 0; i < pArgv.length; i++) {
    for (let x = pArgv[i].length - 1; x >= 0; x--) {
      revArr += pArgv[i][x];
    }
    if (i < pArgv.length - 1) {
      revArr += "\n";
    } else {
      break;
    }
  }
  return revArr;
};

console.log(strRev());



