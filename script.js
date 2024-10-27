let toj = { UndertojOgSokker: 0, tshirts: 0, langebukser: 0, shortNederdele: 0, Badetoj: 0, Jakke: 0, Sko: 0, Regnjakke: 0, Accesories: 0 }; //opretter en variabel for hver tøjstykk

function Dageafsted() {
    let inputfelt = document.getElementById("inputTal");
    document.getElementById("tshirts").innerHTML = ("T-Shirts: ") + Math.ceil(inputfelt.value * 1.2)
    document.getElementById("undertoj").innerHTML = ("Undertøj: ") + Math.ceil(inputfelt.value * 1.5)
    document.getElementById("langebukser").innerHTML = valgtvordi
}


