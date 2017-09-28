var xPositions = [50, 100, 200, 250, 300];
var yPositions = [0, 10, 15, 20, 25];
var firstColor = random(50,150);  //fill with random colors 1st place (low to high)
var secColor = random(0, 250);
var thirdColor = random(100, 200);   //fill with random color 2nd place
var rainColor = fill(firstColor, secColor, thirdColor);


draw = function() {
    background(204, 247, 255);
    rainColor = random(0,250);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        ellipse(xPositions[i], yPositions[i], 5, 5);

        if (yPositions[i] > 400) {
            yPositions[i]=0;

        }



        {
            yPositions[i] += 5;




        }
    }

};
