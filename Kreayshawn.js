var array = ["gucci", "louie", "fendi", "prada"];
for(i=0; i < array.length; i++) {
    if ("gucci" === array[i]) {
        console.log("gucci, gucci");
    } else if ("louie" === array[i]) {
        console.log("louie, louie");
    } else if ("fendi" === array[i]) {
        console.log("fendi, fendi");
    } else {
        console.log("prada");
    }
}