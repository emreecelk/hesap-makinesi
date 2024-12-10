let sayi1 = parseFloat(prompt("Birinci sayıyı girin:"));
let sayi2 = parseFloat(prompt("İkinci sayıyı girin:"));
let islem = prompt("Yapmak istediğiniz işlemi girin (+, -, *, /):");

let sonuc;

if (islem === "+") {
    sonuc = sayi1 + sayi2;
} else if (islem === "-") {
    sonuc = sayi1 - sayi2;
} else if (islem === "*") {
    sonuc = sayi1 * sayi2;
} else if (islem === "/") {

    if (sayi2 === 0) {
        alert("Bir sayıyı sıfıra bölemezsiniz!");
    } else {
        sonuc = sayi1 / sayi2;
    }
} else {
    alert("Geçersiz işlem! Lütfen +, -, * veya / girin.");
}

if (sonuc !== undefined) {
    console.log(`Sonuç: ${sonuc}`);
}
