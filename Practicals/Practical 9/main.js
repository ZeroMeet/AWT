const readline = require('readline');
let mod = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  rl.question('Enter which module you want to open: ', async (userInput) => {
    mod = userInput;
    rl.close();
    try {
      if (mod === '1') {
        const module = await import('./1stmodule.js');
        module.called();
      } else if(mod === '2') {
        const module = await import('./2ndmodule.js');
        module.called();
      }
      else{
        console.log("wrong module called")
      }
    } catch (error) {
      console.error(error);
    }
  });
}
main();
