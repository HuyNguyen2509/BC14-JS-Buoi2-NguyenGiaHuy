function CVDT() {
    var iDai = +document.getElementById('Dai').value;
    var iRong = +document.getElementById('Rong').value;

    var iCV = (iDai + iRong) * 2;
    var iDT = iDai * iRong;

    var iChuVi = document.getElementById('ChuVi');
    var iDienTich = document.getElementById('DienTich');

    iChuVi.innerHTML = iCV;
    iDienTich.innerHTML = iDT;

}