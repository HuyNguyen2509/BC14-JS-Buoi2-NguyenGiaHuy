function TongSoThuc() {
    var iSoThuc1 = document.getElementById('SoThuc1').value;
    var iSoThuc2 = document.getElementById('SoThuc2').value;
    var iSoThuc3 = document.getElementById('SoThuc3').value;
    var iSoThuc4 = document.getElementById('SoThuc4').value;
    var iSoThuc5 = document.getElementById('SoThuc5').value;

    var sumSoThuc1 = (iSoThuc1 + iSoThuc2 + iSoThuc3 + iSoThuc4 + iSoThuc5) / 5;
    console.log('Tổng số thực: ', sumSoThuc1);

    var iSo1 = Number(parseFloat(iSoThuc1));
    var iSo2 = Number(parseFloat(iSoThuc2));
    var iSo3 = Number(parseFloat(iSoThuc3));
    var iSo4 = Number(parseFloat(iSoThuc4));
    var iSo5 = Number(parseFloat(iSoThuc5));

    var sumSoThuc = (iSo1 + iSo2 + iSo3 + iSo4 + iSo5) / 5;

    var iSoThuc = document.getElementById('SoThuc');
    iSoThuc.innerHTML = sumSoThuc;

}