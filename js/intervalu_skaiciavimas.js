let inta=-5; let intb=0; let intc=-4; let intd=4;
let answer;

if ((intd >= inta) && (intc <= intb)) {
    let cut_x = Math.max(inta, intc);
    let cut_y = Math.min(intd, intb);
    answer = "Rezis: " + cut_x + ',' + cut_y;
} else {
    answer = "Nesikerta";
}

document.getElementById("ats1").innerHTML = answer;