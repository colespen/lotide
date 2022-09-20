//function to converts CLI args to custom pig latin
const argv = process.argv.slice(2);

const pig = () => {
  let pStr = "";
  
  for (let i = 0; i < argv.length; i++) {
    for (let l = 1; l < argv[i].length; l++) {
      pStr += argv[i][l];
    }
    pStr += argv[i][0] + "ay";
    pStr += " ";
  }
  return pStr;
};

console.log(pig());