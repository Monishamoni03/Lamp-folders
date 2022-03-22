var colors=new Map([
    ['1','Blue'],
    ['2','Black']
]);
for(let col of colors.values()){
    console.log(col);
}
console.log();
for(let col of colors.entries())
    console.log('${col[0]}:${col[1]}');


/*Blue
Black

${col[0]}:${col[1]}
${col[0]}:${col[1]}*/