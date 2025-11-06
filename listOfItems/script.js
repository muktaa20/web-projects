let container = document.getElementById("container");
let fruits = [
  "apple",
  "banana",
  "orange",
  "mango",
  "grapes",
  "watermelon",
  "pineapple",
  "guava",
  "pomegranate",
  "papaya",
  "pear",
  "strawberry",
  "lemon",
  "kiwi",
];
// console.log(fruits);

fruits.forEach((fruit, index) => {
  // console.log(index);

  let listItems = document.createElement("li");
  listItems.textContent = fruit;
  // console.log(listItems);
  container.appendChild(listItems);

  if (index % 2 === 0) {
    listItems.style.color = "#212121";
    listItems.style.listStyle = "none";
    listItems.background = "#F5F6F7";
    listItems.style.padding = "12px 16px"; 
    listItems.style.borderBottom = "1px solid #ccc"; 
    listItems.style.fontSize = "1.4rem";
    listItems.style.textAlign = "center";
    listItems.style.width = "50%";
  } else {
    listItems.style.background = "#f8f3f3ff";
    listItems.style.listStyle = "none";
    listItems.style.fontSize = "1.4rem";
    listItems.style.color = "#121212";
    listItems.style.padding = "12px 16px"; 
    listItems.style.borderBottom = "1px solid #ccc"; 
    listItems.style.textAlign = "center";
    listItems.style.width = "50%";
  }
});
