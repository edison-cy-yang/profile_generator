const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (music) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (food) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
              let string = `Their name is ${name}. They like to do ${activity}. They listen to ${music} while doing ${activity}.
               Their like to eat ${food} during ${meal}. Their favourite sport is ${sport}. They wish they could ${superpower}.`;
              console.log(string);
              rl.close();
            });
          });
        });
      });
    });
    
  });

  
});
