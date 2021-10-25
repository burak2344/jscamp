console.log("Merhaba Kodlama.io")

//Js not type safe
let dolarDun = 9.10
let dolarBugun = 9.30

{
    let dolarDun = 9.1
}

console.log(dolarDun)

const euroDun = 11.2
    //euroDun = 11 //bunu yapamıyoruz

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")

}
console.log("</ul>")
console.log(konutKredileri)

console.log(euroDun)


let sayi = 10;
sayi = "Burak Yünkül"
let student = { id: 1, name: "Burak" }
    //console.log(student)

function save(puan = 10, ogrenci) {
    console.log(ogrenci.name + "" + puan)
}
//save(undefined, student);


let students = ["Burak Yünkül", "Engin Demiroğ", "Büşra Yılmaz"]
    //console.log(students)

let students2 = [student, { id: 2, name: "Burak" }, "Ankara", { city: "İstanbul" }]
    //console.log(students2)