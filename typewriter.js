const sentence = "hello there from lighthouse labs";
let waitTime = 0;

const wait = function(string) {
  string = string += '\n';
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);
    }, waitTime);
    waitTime += 50;
  }
};
wait(sentence);
