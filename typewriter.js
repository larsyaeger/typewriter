const sentence = "smells like popcorn in here \n";
let delay = 0
for (const character of sentence) {
  setTimeout(() => {
    process.stdout.write(character);
  }, delay);
  delay += 50;
}
