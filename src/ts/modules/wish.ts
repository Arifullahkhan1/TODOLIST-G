/* export class Wish{
  index: number;
  
 

  constructor(public wish:string){}
  

}
  *//* export class TreeWish{
    value:string;
    
    
    map(_arg0: (el: TreeWish, i: TreeWish) => { index: TreeWish; value:TreeWish; }) {
      throw new Error("Method not implemented.");
    }
    push(_value: string) {
      throw new Error("Method not implemented.");
    }
    sort(_arg0: (a:TreeWish, b: TreeWish) => 0 | 1 | -1) {
      throw new Error("Method not implemented.");
    }
     todos:Array <string>=[]  ; 

  constructor(){};
 
   
}   */
        


export class Wish{
 
  value:string;
  constructor(public wish:string){
    this.value = wish;
  }

}