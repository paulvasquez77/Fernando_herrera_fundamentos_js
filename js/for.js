const heroes = ['Batman', 'Superman', 'Wonderwoman', 'Aquaman'];

console.warn('For Tradicional');

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}


console.warn('For in');

for (let j in heroes) {
  console.log(heroes[j]);
}



console.warn('For of');

for (let heroe of heroes) {
  console.log(heroe);
}