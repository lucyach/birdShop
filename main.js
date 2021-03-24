var customers = {};
var budgieDropdownDropped = false;
var budgieWaitingList = ["number1", "number2", "number3", "number4"];
var msg;
// customer[1] = {}; // "pets"
// dict[1][1] = {};
// dict[foo][bar][buz] = {};
// dict[foo][bar][buz][qux] = value;

// customer[5101234567] = ["name", "pets" = {"name" = {"type", "feed", "produce", "status"}}, "boarding" = ["pet name", "date in", "date out"], "calls"]; // status: alive, dead, bought, on hold, waiting list



function newCustomer() {
    console.log("got it!");
}


function budgieDropdown() {
    msg = "";
    for (i = 0; i < budgieWaitingList.length; i++) {
        msg = msg + budgieWaitingList[i];
    }
    console.log(msg);
    if (!budgieDropdownDropped) {
        console.log("opening dropdown");
        budgieDropdownDropped = true;
        var newDiv = document.createElement("DIV");
        newDiv.id = "newDivId";
        var text = document.createElement("P");
        newDiv.appendChild(text);
        text.className = "card-text";
        var waitingList = document.createTextNode(msg);
        text.appendChild(waitingList);
        var element = document.getElementById("budgieList");
        element.appendChild(newDiv);
    } else {
        console.log("closing dropdown")
        budgieDropdownDropped = false;
        var myobj = document.getElementById("newDivId");
        myobj.remove();
    }
}

