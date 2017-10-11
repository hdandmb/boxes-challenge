// Create some gray (#ccc) boxes in html (at least 6 boxes)
// (100px wide and 100px high should be good)
// target the boxes in the HTML
// add event listener / function so that when you click on a box, the background color changes
// then, make it so that if a user clicks on a box a second time, change the border radius of the box

// BONUS: Make it so only one box can be your new color at a time

var box1 = document.getElementById('box1');

function changeBoxColor() {
this.style.backgroundColor = "black";
}



box1.addEventListener('click',changeBoxColor);
box2.addEventListener('click',changeBoxColor);
box3.addEventListener('click',changeBoxColor);
box4.addEventListener('click',changeBoxColor);
box5.addEventListener('click',changeBoxColor);
box6.addEventListener('click',changeBoxColor);




