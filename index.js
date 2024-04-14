// ! Task-1: Array reduce vasitesi ile asagidaki arrayde nece neferin "Vote" etdiyini qaytarin.

const voters = [
  {
    Ad: "Osgood",
    Soyad: "Alibone",
    Yaş: 18,
    "Verdiyi Səs": true,
  },
  {
    Ad: "Jocelyne",
    Soyad: "Nayshe",
    Yaş: 34,
    "Verdiyi Səs": false,
  },
  {
    Ad: "Corrie",
    Soyad: "Fitzjohn",
    Yaş: 20,
    "Verdiyi Səs": false,
  },
  {
    Ad: "Christal",
    Soyad: "Aguirre",
    Yaş: 31,
    "Verdiyi Səs": true,
  },
  {
    Ad: "Ingram",
    Soyad: "McMarquis",
    Yaş: 32,
    "Verdiyi Səs": false,
  },
  {
    Ad: "Lindie",
    Soyad: "Shatford",
    Yaş: 32,
    "Verdiyi Səs": true,
  },
  {
    Ad: "Lesya",
    Soyad: "Cocklin",
    Yaş: 18,
    "Verdiyi Səs": true,
  },
  {
    Ad: "Guenna",
    Soyad: "Kausche",
    Yaş: 23,
    "Verdiyi Səs": false,
  },
  {
    Ad: "Karie",
    Soyad: "Dobeson",
    Yaş: 20,
    "Verdiyi Səs": false,
  },
  {
    Ad: "Alvin",
    Soyad: "Denial",
    Yaş: 19,
    "Verdiyi Səs": true,
  },
];

const numVoters = voters.reduce((count, voter) => {
  if (voter["Verdiyi Səs"]) {
    count++;
  }
  return count;
}, 0);

console.log(numVoters);

// ! Task-2: Array reduce vasitesile asagidaki arrayin qiymetleri cemini qaytarin:

let wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const totalValue = wishlist.reduce(
  (accumulator, currentItem) => accumulator + currentItem.price,
  0
);
console.log("Total value of items in the wishlist is : ", totalValue);

// ! Task-3: Daxil olunmuş stringdə ən uzun sözü tapan function yazin.

let string = "Web Development Tutorial";
function longestWord(string) {
  let words = string.split(" ");
  let maxLength = 0;
  let longestWord = " ";
  for (word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longestWord(string));

// ! Task-4: Sətirdə hər sözün ilk hərfini böyük hərflə yazmaq üçün JavaScript funksiyasını yazın.

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter("hello world"));

// ! Task-5: Verilmish stringdən müəyyən sayda sözə kəsmək üçün JavaScript funksiyasını yazın.

function truncate(str, no_words) {
  return str.split(" ").splice(0, no_words).join(" ");
}

console.log(truncate("The quick brown fox jumps over the lazy dog", 4));
