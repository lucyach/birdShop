var customers = {};
// customer[1] = {}; // "pets"
// dict[1][1] = {};
// dict[foo][bar][buz] = {};
// dict[foo][bar][buz][qux] = value;

// customer[5101234567] = ["name", "pets" = {"name" = {"type", "feed", "produce", "status"}}, "boarding" = ["pet name", "date in", "date out"], "calls"]; // status: alive, dead, bought, on hold, waiting list



function newCustomer() {
    console.log("got it!");
}

function budgieDropdown() {
    console.log("here");
    var text = document.createElement("P");
    text.className = "card-text";
    var waitingList = document.createTextNode("hello world");
    text.appendChild(waitingList);
    var element = document.getElementById("budgieList");
    element.appendChild(text);
}




