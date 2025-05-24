
let parcial_1 = 12;
let parcial_2 = 15;
let proyecto_final = 18;

let promedio_nota_final = (parcial_1 * 0.3) + (parcial_2 * 0.3) + (proyecto_final * 0.4);
alert("Tu promedio es: "+promedio_nota_final.toFixed(2));

if(promedio_nota_final >= 14){
    alert("Aprobado Directamente");
}else if (promedio_nota_final >= 10 && promedio_nota_final < 14){
    alert("Va a Recuperacion")
}else{
    alert("Pierde la Materia")
}