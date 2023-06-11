const args = process.argv.slice(2) // excludes node and script name in command line

for (let i = 0; i < args.length; i++) {
  const delay = Number(args[i]); // convert to number

  if (!isNaN(delay) && delay > 0) {
    setTimeout(() => {
     process.stdout.write('🎉'); // It's party time 😎 (my system will not play a sound 😢 )
    }, delay * 1000); // mulitply delay to convert seconds to miliseconds
  }
}
// test code: node timer1.js 10 3 5 15 9 
