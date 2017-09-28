var xPositions = [50, 100, 200, 250, 300];
var yPositions = [0, 10, 15, 20, 25];
var firstColor = random(50,150);   
var secColor = random(0, 250);
var thirdColor = random(100, 200);   
var rainColor = fill(firstColor, secColor, thirdColor);


draw = function() {
    background(204, 247, 255);
    

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        ellipse(xPositions[i], yPositions[i], 5, 5);
        

        if (yPositions[i] > 400) {
            yPositions[i]=0;
             firstColor = random(50,150);   
             secColor = random(0, 250);
             thirdColor = random(100, 200);   
             rainColor = fill(firstColor, secColor, thirdColor);
        

        }
        
       
        {
            yPositions[i] += 5;




        }
    }

};
