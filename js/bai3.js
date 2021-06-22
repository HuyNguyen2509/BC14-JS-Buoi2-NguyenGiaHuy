function Money() {
    var iDola = document.getElementById('Dola').value;
    var iVND = 23500;

    var total = iDola * iVND;

    var iVND = document.getElementById('VND');

    iVND.innerHTML = total;

}