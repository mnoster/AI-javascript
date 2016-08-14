$(document).ready(function () {
    var player = $("<div>").attr("id", "player");
    $('#floor').append(player);
    moveDog();
});
function moveDog() {
    $(document).keydown(function (e) {
        var dog = $("#player");
        var position = $(dog).position();


        switch (e.keyCode) {
            case 37:  //left
                $(dog).css('left', position.left - 50 + "px");
                break;
            case 38:    //up
                $(dog).css('top', position.top - 50 + "px");
                break;
            case 39:  //right
                $(dog).css('left', position.left + 50 + "px");
                break;
            case 40: //Down
                $(dog).css('top', position.top + 50 + "px");
                break;
        }

    });
}
var balloons = function(){
    this.type = {
        small: 10,
        large : 3
    };

    this.size = 10;
    this.speed = 20;
    this.maxNumber = 50;
};

var gravity = 0.6;
var stopSpeed = 0.2;
var dissipation = .08;

var x = width/2;
var y = radius;
var radius = 50;
var xSpeed = 0;
var ySpeed = 0;

function displayBall (){

}