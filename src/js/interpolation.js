var dots;

var x_last = 400;
var y_last = 400;
var SIZE = 20;

function draw(x1, y1, x2, y2) {

    var dot1 = [x1, y1];
    var dot2 = [x2, y2];
    var x_dis = Math.abs(dot1[0] - dot2[0]);
    var y_dis = Math.abs(dot1[1] - dot2[1]);

    dots = [dot1];

    x_to_y_dis = Math.sqrt((x_dis * x_dis) + (y_dis * y_dis));
    // var x_togety = x_dis / 10;
    
    for (var index = 1; index < SIZE; index++) {

        var i = index / SIZE;
        x = ((x_dis / SIZE) * index);

        var c = (x_to_y_dis * i);
        var b = (x_dis * i);
        var y = Math.sqrt((c * c) - (b * b));

        if (dot1[0] > dot2[0]) {
            x = x_dis - x;
            x += dot1[0] - x_dis
        } else {
            x += dot1[0];
        }
        if (dot1[1] > dot2[1]) {
            y = y_dis - y;
            y += (dot1[1] - y_dis)
        } else {
            y += dot1[1];
        }

        dots.push([x, y]);
    }

    dots.push(dot2);

    step = 0;
    move_camera();

}



var step = 0;
var moving = false;
function move_camera() {
    if (step < dots.length) {

        moving = true;
        
        // console.log(dots[step][0], dots[step][1]);
        var coordinates = { "lat": parseFloat(dots[step][0]), "lng": parseFloat(dots[step][1]) }
        map.map.setCenter(coordinates);

        
        step++;
        setTimeout(move_camera,10);
        
    } else {
        moving = false;
    }


};
