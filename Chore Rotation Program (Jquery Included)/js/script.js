function sideFunction() {
    $('.table').width($('body').width());
}
function openNewTab(url) {
    var tab = window.open(url, '_blank');
    tab.focus();
}
$('#buddy').keyup(function(e) {
  if(e.which === 13) {
    compare();
  }
});
function compare() {
    var who = $("#who").val();
    var buddy = $("#buddy").val();
    loaderp();
    function loaderp() {
        loader();
        function loader() {
            var loaded = $("#loader").hasClass("loading");
            if (loaded) {
                $("#loader").addClass("notloading").removeClass("loading");
                $('html').css('cursor', 'default');
            } else {
                $("#loader").addClass("loading").removeClass("notloading");
                $('html').css('cursor', 'wait');
                setTimeout(loader, 3000);
            }
        }
        setTimeout(chucky, 3100);
    }
    function chucky() {
      $('#who').val('');
      $('#buddy').val('');
        switch (who) {
        case "Joe":
            setCookie("dishes", "James", 6);
            setCookie("trash", "Joseph", 6);
            setCookie("table", "Jared", 6);
            break;
        case "Joey":
            setCookie("dishes", "James", 6);
            setCookie("trash", "Joseph", 6);
            setCookie("table", "Jared", 6);
            break;
        case "Joseph":
            setCookie("dishes", "James", 6);
            setCookie("trash", "Joseph", 6);
            setCookie("table", "Jared", 6);
            break;
        case "James" || "Jamie":
            setCookie("dishes", "Jared", 6);
            setCookie("trash", "James", 6);
            setCookie("table", "Joseph", 6);
            break;
        case "Jamie" || "Jamie":
            setCookie("dishes", "Jared", 6);
            setCookie("trash", "James", 6);
            setCookie("table", "Joseph", 6);
            break;
        case "Jared":
            setCookie("dishes", "Joseph", 6);
            setCookie("trash", "Jared", 6);
            setCookie("table", "James", 6);
            break;
        default:
            setCookie("dishes", "unknown", 0);
            setCookie("trash", "unknown", 0);
            setCookie("table", "unknown", 0);
            alert('Please Enter An Approved Name Next Time');
        }
        switch (buddy) {
        case "Jon":
            setCookie("dishBuddy", "Jude", 6);
            setCookie("tableBuddy", "Jon", 6);
            break;
        case "Jonny":
            setCookie("dishBuddy", "Jude", 6);
            setCookie("tableBuddy", "Jon", 6);
            break;
        case "Jonathan":
            setCookie("dishBuddy", "Jude", 6);
            setCookie("tableBuddy", "Jon", 6);
            break;
        case "Jude":
            setCookie("dishBuddy", "Jon", 6);
            setCookie("tableBuddy", "Jude", 6);
            break;
        case "Judle Berry":
            setCookie("dishBuddy", "Jon", 6);
            setCookie("tableBuddy", "Jude", 6);
            break;
        default:
            setCookie("dishBuddy", "unknown", 0);
            setCookie("tableBuddy", "unknown", 0);
        }
        fillText();
    }
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function fillTable() {
    var dishes = getCookie("dishes");
    var dishBuddy = getCookie("dishBuddy");
    var trash = getCookie("trash");
    var table = getCookie("table");
    var tableBuddy = getCookie("tableBuddy");
    $(".dishDuty").text("Dishwasher, sink + counter tops = " + dishes + " & Buddy " + dishBuddy);
    $(".trashDuty").text("Trash, Recycles + Sweep upstairs = " + trash + " & Justina");
    $(".tableDuty").text("Clear, Clean and Set table = " + table + " & Buddy " + tableBuddy);
    $(".dDXtra1").text("Wash all cabinet doors = " + dishes + " & Buddy " + dishBuddy);
    $(".dDXtra2").text("Wash oven, dishwasher and refrigerator doors = " + dishes);
    $(".tDXtra1").text("Mop floor = " + trash);
    $(".tDXtra2").text("Wash (kitchen + bath) inside trash bin = " + trash + " & Justina");
    $(".tDXtra3").text("Wash outside of trash bins = " + trash);
    $(".tbDXtra1").text("Grocery helper            = " + table + " & Buddy " + tableBuddy);
    $(".tbDXtra2").text("Clean out refrigerator          =" + table + " & Buddy " + tableBuddy);
}
function fillText() {
    var dishes = getCookie("dishes");
    var dishBuddy = getCookie("dishBuddy");
    var trash = getCookie("trash");
    var table = getCookie("table");
    var tableBuddy = getCookie("tableBuddy");
    $("#dishes").text("Dishes & Mopping: " + dishes + " & " + dishBuddy);
    $("#trash").text("Trash & Sweeping: " + trash + " & Justina");
    $("#table").text("Table & Pickup: " + table + " & " + tableBuddy);
}
