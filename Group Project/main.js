$(document).ready(function() {
   let first = $("#1");
   let second = $("#2");
   let third = $("#3");
   let four = $("#4");

   let picList = [first , second , third, four];
   let index = 0;

   picList[0].show();

   $(".gallery-button-right").click(function() {
       picList[index].show();
       if(index === 3) {
           index = 0;
       }
       index++;

   });

    $(".gallery-button-left").click(function() {
        picList[index].show();
        if(index === 0) {
            index = 3;
        }
        index--;

    });

    window.setInterval(function(){
        if(index === 3) {
            index = 0;
            picList[3].hide();
            picList[index].fadeIn(300);
        }
        if(index >= 0) {
            index++;
            picList[index-1].hide();
            picList[index].fadeIn(300);
        }
    }, 5000);
});