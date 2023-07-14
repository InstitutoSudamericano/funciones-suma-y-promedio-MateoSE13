let nota1=65;
let nota2=54;
let nota3=91;
let comp =70;
function showMessage(nota1,nota2,nota3){
  prom =(nota1 + nota2 + nota3)/3;
  if(prom>=comp){
   return "APROBADO";

  }else{
    return"reprobado";
  }
}
let salida;
salida=showMessage(nota1,nota2,nota3);
console.log(salida);
