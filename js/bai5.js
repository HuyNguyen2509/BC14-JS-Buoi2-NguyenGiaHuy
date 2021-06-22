function Tong2So() {
    var iNumber = document.getElementById('number').value;

    var iHangChuc = Math.floor(iNumber / 10);
    var iHangDV = iNumber % 10;
    var isum = iHangChuc + iHangDV;

    var iTotalnumber = document.getElementById('TotalNumber');
    iTotalnumber.innerHTML = isum;
}