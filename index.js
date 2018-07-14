
               /* 1
var Bag = function (item1,item2,item3){
    this.item1  = item1;
    this.item2  = item2;
    this.item3  = item3;
  
    this.delItem = function(itemNum) {
      delete this[itemNum];
    }
}*/
               /* 2
var LibraryBook = function(title, year, author){
  var title = title || "Неизвестно";
  var year  = year || "Неизвестно";
  var author = author || "Неизвестно";
  var readerName  = null;
  var readerData =  null;
  
  var giveTheBook = function(client) {
    readerName = client;
    readerData = new Date().toLocaleString();
  }
  
  
  this.getBookInfo = function(){
    var info;
    if(readerName === null) {
      info = "В наличии!";
    }
    else {
      info = "Книгу забрали";
    }
    console.log(`Название: ${title} , Год: ${year}, Автор: ${author}, Наличие: ${info}`)
  }
  
  
  this.getTheBook = function(client){
    if(readerName === null){
      giveTheBook(client);
      console.log("Возьмите книгу!");
    }
    else {
      console.log("Книгу забрали");
    }
    
  }
  
  this.returnBook = function(){
    console.log("Спасибо, что вернули книгу!")
    readerName  = null;
    readerData =  null;
  }
}*/