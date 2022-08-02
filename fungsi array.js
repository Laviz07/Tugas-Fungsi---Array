var namaItem = ["Baju", "Poster", "Handphone"];
var hargaItem = [ 100000, 2000, 300000];
var diskonItem = [];

//Function to show item list
function itemShow() {
	var itemlist = document.getElementById("List-Item")

    //clear list 
	itemlist.innerHTML = "";

    //cetak Item
	for(i in namaItem && hargaItem){
        var btnDit = "<a href='#' onclick='editItem("+i+")'>Edit</a>";
        var btnDlt = "<a href='#' onclick='delItem("+i+")'>Hapus</a>";
        var btnDskn = "<a href='#' onclick= 'disItem("+i+")'>Diskon</a>";

        itemlist.innerHTML += "<li>"+ namaItem[i]+"&nbsp"+ "Rp." + hargaItem[i]+" ["+btnDskn+"]["+btnDit+"]["+btnDlt+"]</li>" 

    }
}

//function to add item
function additem() {
    var inputItem =  document.getElementById("item")
    var inputharga =  document.getElementById("harga")

    if (inputharga.value < 0 || inputItem.value == ""){
        alert("Tolong masukkan input dengan benar (Harga tidak boleh kosong)")
    }
    else{
    //push method create to array
    namaItem.push(inputItem.value)
    hargaItem.push(inputharga.value)
    itemShow()
    }
}

//function to edit item
function editItem(id){
    var newItem = prompt("Berikan Nama Baru ke Item Anda", namaItem[id]);
    var newHarga = prompt("Berikan Harga Baru ke Item Anda", hargaItem[id]);
    namaItem[id] = newItem;
    hargaItem[id] = newHarga;
    itemShow();
}

//function to delete item
function delItem(x) {
    var hapus = confirm("Ingin menghapus item ini?");
    if (hapus) {
        namaItem.splice(x,1)
        hargaItem.splice(x,1)
    }
    itemShow()
}

//function to add discout to harga
function disItem(id){
    var hargaawal = hargaItem[id];
    var diskon = prompt("Berikan % Diskon ke Item Anda", diskonItem[id]);
    var hargadiskon = diskon * hargaawal / 100;
    var hasildiskon = hargaawal - hargadiskon;

    hargaItem[id] = hasildiskon;
    itemShow()
}

itemShow();