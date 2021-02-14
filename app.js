let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for (let i = 0; i < 8; i++) {

    let r1= pronoun[Math.floor(Math.random() * pronoun.length)];
    let r2= adj[Math.floor(Math.random() * adj.length)];
    let r3= noun[Math.floor(Math.random() * noun.length)];

    console.log(r1 + r2 + r3 +".com");
}

