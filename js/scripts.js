$(document).ready(function(){
  $("form#item").submit(function(event) {
    event.preventDefault();
    var items = ["item1", "item2",  "item3", "item4", "item5"];
    var newItems = items.map(function(item){
      return ($("input#" + item).val()).toUpperCase();
    });
    // console.log(newItems);
    newItems = newItems.sort().filter(function(newItem){
      return newItem.length > 0;
    });
    newItems.forEach(function(newItem) {
    $("ul#groceryOutput").append("<li>" + newItem + "</li>");
    });
    $("form#item").hide();
  });

  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var words = ($("input#sentence1").val()).split(" ").filter(function(word){
      return word.length > 3;
    });
    console.log(words);
    var reverseWords = words.reverse().join();
    console.log(reverseWords, typeof(reverseWords));
    $("ul#sentenceOutput").append("<li>" + reverseWords + "</li>");
    $("form#sentence").hide();
  });

  $("form#deck").submit(function(event) {
    event.preventDefault();
    //13 clubs, hearts, diamonds, spades
    var numberCards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    var suitCards = ["hearts", "diamonds", "spades", "clubs"];
    suitCards.forEach(function(suit){
      var suitString= suit.split();
      numberCards.forEach(function(card) {
        var newCard = card.split();
        console.log(newCard, suitString);
        $("ul#cards").append("<li>" + newCard + " of " + suitString + "</li>");
      });
    });
  });

  $("form#blockText").submit(function(event) {
    event.preventDefault();
    var words = ($("input#blockText1").val()).split(" ");

    words.forEach(function(word) {
      var splitWord = word.split();
      var count = 0;
      for (var i = 0; i <= words.length; i++){
        if (word === words[i]) {
          count += 1;
        }
      }
      // if (count >= 1){
      //   $("ul#blockTextOutput").append("<li>" + splitWord + " " + count + "</li>");
      // }
    });
    if (splitWord.indexOf(words) === -1){
      $("ul#blockTextOutput").append("<li>" + splitWord + " " + count + "</li>");
    }






    // words.forEach(function(word){
    //   var count = 1;
    //   console.log(count);
    //   var finalWords = words.filter(function(){
    //     return word === word;
    //     });
    //   console.log(finalWords);
    // });

    // var finalWords = words.map(function(word){



      // var testWord = words.filter(function(){
      //   return !(word);
      // });
      // if(testWord.length > 0) {
      //   count += testWord.length;
      //   console.log(count);
      // }else{
      //   return count;
      // }
    // });
  });

});
