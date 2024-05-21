function redirectToLink() {
    window.location.href = "test-floader/index-rick.html";
}
// ------- Links to sub-pages ---------------

function redirectToTea() {
    window.location.href = "/pages/tea/main-tea.html";
}

function redirectToCoffe() {
    window.location.href = "/pages/coffe/main-coffe.html";
}

function redirectToCoctails() {
    window.location.href = "/pages/coctails/main-coctails.html";
}

function redirectToAlcohol() {
    window.location.href = "/pages/alcohol/main-alcohol.html";
}
// ---------- End Links to sub-pages ----------

// ---------- Tabs content Tea ----------
function openTea(evt, teaName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(teaName).style.display = "block";
    evt.currentTarget.className += " active";
}
// ---------- End content Tea ----------