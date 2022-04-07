import { Wish} from "./wish";

let wish1: Wish = new Wish("I will buy Sports shoes");
let wish2: Wish = new Wish("I will start Gym");
let wish3: Wish = new Wish("I will lose 7 kgs");
let wish4: Wish = new Wish("I will write code 5 hours every day");
let wish5: Wish = new Wish("I will work in my CV");

//let mywishTree: Wish[] = [wish1, wish2, wish3, wish4, wish5];
let mywishTree:Wish[]= [wish1, wish2, wish3, wish4, wish5];

let wishlista = document.getElementById("mylista");
for (let i = 0; i < mywishTree.length; i++) {
  let wishElement = mywishTree[i];
  let wish = document.createElement("li");
  wish.innerHTML = wishElement.wish;
  wish.addEventListener("click", clearList);
  wishlista.appendChild(wish);
}

var clickCount = 0;
function clearList() {
  if (clickCount % 2 == 0) {
    (event.srcElement as Element).id = "cc";
  } else {
    (event.srcElement as Element).id = "ccc";
  }

  clickCount++;
}
let toDos:Wish[]= [];
function doSort(toDos:Wish[]) {
  return toDos.sort((a,b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });
  return toDos;
  
}
let addbtn = document.getElementById("add");
  addbtn.addEventListener("click", () => {
  let data =(document.getElementById("myInput") as HTMLInputElement);
  //let rdata=data.innerText;
toDos.push(new Wish(data.value));
doSort(toDos);
let todoList = document.getElementById("todoList");
todoList.innerHTML = toDos.map((todo:Wish) => "<li>" + todo.value).join("");
todoList.addEventListener("click", clearList);
data.value = "";
}); 
/* function add(x:string) {

   let a= new Wish(x);
   
} */