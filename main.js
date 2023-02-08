let tableau=[5,6,15,1];
let tableau1=[15,9,6,4];
let sum1=0;
for (let i=0;i<tableau1.length;i++){

if(tableau.includes(tableau1[i])==false){
sum1+=tableau1[i]
}
}
for (let i=0;i<tableau.length;i++){

if(tableau1.includes(tableau[i])==false){
sum1+=tableau[i]
}
}
console.log(sum1);