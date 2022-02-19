let delay = 100;
let arr = ["|", "/", "-", "\\"];

for (const item of arr) {
  setTimeout(() => {
    process.stdout.write('\r   ' + item);
  }, delay);
  delay += 200;
}

