import {Wish} from "./wish";

let wish1: Wish = new Wish("I will buy Sports shoes");
let wish2: Wish = new Wish("I will start Gym");
let wish3: Wish = new Wish("I will lose 7 kgs");
let wish4: Wish = new Wish("I will write code 5 hours every day");
let wish5: Wish = new Wish("I will work in my CV");

//let mywishTree: Wish[] = [wish1, wish2, wish3, wish4, wish5];
let mywishTree:Wish[]= [wish1, wish2, wish3, wish4, wish5];

let wishlista = document.getElementById("mylista");
renderList(wishlista, mywishTree);

function renderList(div:HTMLElement, list:Wish[]){
  div.innerHTML = list.map((todo:Wish) => {
    if (todo.done === true)
      return "<li><span class='cc'>" + todo.value +"</span><button style='float:right;color:red'>&cross;</button></li>";
    else
      return "<li><span class='ccc'>" + todo.value +"</span><button style='float:right;color:red'>&cross;</button></li>";
  })
    .join("");

  for(let child of div.childNodes){
    (child.childNodes[0] as HTMLElement).addEventListener("click", (e) => clearList(e, list));
    (child.childNodes[1] as HTMLButtonElement).addEventListener("click", (e) => deleteItem(e, list));
  }
}

function clearList(e:MouseEvent, list:Wish[]){
  let wishText = (e.srcElement as HTMLElement).innerText;
  for(let i in list){
    if(list[i].value === wishText){
      list[i].done = !list[i].done
      break
    }
  }
  renderList((e.srcElement as HTMLElement).parentNode.parentNode as HTMLElement, list);
}

function deleteItem(e:MouseEvent, list:Wish[]){
  let wishText = ((e.srcElement as HTMLElement).parentNode.childNodes[0] as HTMLElement).innerText;  
  for(let i in list){
    if(list[i].value === wishText){
      list.splice( Number(i) , 1)
      break
    }
  }
  renderList((e.srcElement as HTMLElement).parentNode.parentNode as HTMLElement, list);
}

let toDos:Wish[]= [];
function doSort(toDos:Wish[]) {
  toDos.sort((a,b) => {
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
    let data =document.getElementById("myInput") as HTMLInputElement;
    console.log(data.value);

    //not allowing same todo
    let contain:boolean = false;
    for(let t of toDos){
      if(data.value === t.value) contain = true;
    }
    if(! contain)
      toDos.push(new Wish(data.value));
    else
      alert("Todo already exist");

    doSort(toDos);
    let todoList = document.getElementById("todoList");
    renderList(todoList, toDos);
    
    data.value = "";
});
