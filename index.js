// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca


/* Monica's Properties */
const monicasName = "Monica"; // String
const monicasGender = "Female"; // String
const monicasAge = 17; // Int
const monicasEmail = "monica@dingdong.com" // String
let monicasFavColors = ["Yellow", "Pink", "White", "Purple"]; //Array
const isMonicaHavePet = true // Boolean
const monicasEducations = [
    { name: "SD 01", city: "Jakarta", graduate: "2016" },
    { name: "SMP 02", city: "Jakarta", graduate: "2019" },
    { name: "SMA 03", city: "Tangerang" },
]; // Array of Objects
let monicasFavRestaurants = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]; // Array

monicasFavColors = new Set(monicasFavColors);
monicasFavRestaurants = new Set(monicasFavRestaurants);


/* Wendy's Properties */
const wendysName = "Wendy"; // String
const wendysGender = "Male"; // String
const wendysAge = 23; // Int
const wendysEmail = "wendy@dingdong.com" // String
let wendysFavColors = ["Blue", "Black", "Grey"]; // Array
const isWendyHavePet = false // Boolean
const wendysEducations = [
    { name: "SD 02", city: "Jakarta", graduate: "2010" },
    { name: "SMP 03", city: "Bogor", graduate: "2013" },
    { name: "SMA 01", city: "Surabaya", graduate: "2016" },
    { name: "Universitas Maju", city: "Tangerang" },
]; // Array of Objects
let wendysFavRestaurants = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]; // Array

wendysFavColors = new Set(wendysFavColors);
wendysFavRestaurants = new Set(wendysFavRestaurants);


// Initiate User
const firstUser = {
    name: monicasName,
    gender: monicasGender,
    age: monicasAge,
    email: monicasEmail,
    favoriteColor: [...monicasFavColors],
    isHavePet: isMonicaHavePet ? 'Yes' : 'No',
    education: monicasEducations,
    favoriteRestaurant: [...monicasFavRestaurants],
};
const secondUser = {
    name: wendysName,
    gender: wendysGender,
    age: wendysAge,
    email: wendysEmail,
    favoriteColor: [...wendysFavColors],
    isHavePet: isWendyHavePet ? 'Yes' : 'No',
    education: wendysEducations,
    favoriteRestaurant: [...wendysFavRestaurants],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};