var switc = 0;	//used for practice 1.  I wanted to switch the colors of my paragraphs
function func1() {	//function switches colors of paragraphs around in the order blue, green, black
	if (switc == 2) {
		document.getElementById("one").style.color = "blue";
		document.getElementById("two").style.color = "green";
		document.getElementById("three").style.color = "black";
		switc = 0;
	}
	else if (switc == 0) {
		document.getElementById("one").style.color = "black";
		document.getElementById("two").style.color = "blue";
		document.getElementById("three").style.color = "green";
		switc = 1;
	}
	else if (switc == 1) {
		document.getElementById("one").style.color = "green";
		document.getElementById("two").style.color = "black";
		document.getElementById("three").style.color = "blue";
		switc = 2;
	}
}
function changeColor() {	//for practice 2, takes the value in the different text inputs
    //and then sets the border color, border width, and background color appropriately
    let borderR = document.getElementById("borderR").value;
    let borderG = document.getElementById("borderG").value;
    let borderB = document.getElementById("borderB").value;
    let borderW = document.getElementById("borderW").value;
    let backR = document.getElementById("backR").value;
    let backG = document.getElementById("backG").value;
    let backB = document.getElementById("backB").value;

    var dummy = document.getElementById("dummy");
    dummy.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
    dummy.style.borderWidth = borderW + "px";	//add the "px" to the end of my border width so browser knows the units
    dummy.style.backgroundColor = `rgb(${backR},${backG},${backB})`;	//uses the rgb function to take value from the 0-255 range
}
function checkPW() {	//for practice 3, checks the two input passwords against the requirements
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    if (first.length < 8) {	//first is not long enough
        alert("Your first password is not 8 characters long! Try again!");
    }
    else if (second.length < 8) {	//second is not long enough
        alert("Your second password is not 8 characters long! Try again!");
    }
    else if (first != second) {	//passwords do not match
        alert("Password 1 does not equal password 2! Try again!");
    }
    else {	//must be correct, notify user.
        alert("Passwords pass requirements (they match and are longer than 8 characters)!");
    }
}
