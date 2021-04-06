/* Side-Navbar */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
}

/* Sliding/click Kanal I */
function openOther(evt, OtherCategory) {
var i, othertabcontent, othertablinks;

othertabcontent = document.getElementsByClassName("othertabcontent");
for (i = 0; i < othertabcontent.length; i++) {
  othertabcontent[i].style.display = "none";
}

othertablinks = document.getElementsByClassName("othertablinks");
for (i = 0; i < othertablinks.length; i++) {
  othertablinks[i].className = othertablinks[i].className.replace(" active", "");
}

document.getElementById(OtherCategory).style.display = "block";
evt.currentTarget.className += " active";
}
document.getElementById("defaultOpenOther").click();

/* Sliding/click Kanal II */
function openOtherKanal(evt, OtherCategoryKanal) {
  var i, othertabcontentkanal, othertablinkskanal;
  
  othertabcontentkanal = document.getElementsByClassName("othertabcontentkanal");
  for (i = 0; i < othertabcontentkanal.length; i++) {
    othertabcontentkanal[i].style.display = "none";
  }
  
  othertablinkskanal = document.getElementsByClassName("othertablinkskanal");
  for (i = 0; i < othertablinkskanal.length; i++) {
    othertablinkskanal[i].className = othertablinkskanal[i].className.replace(" active", "");
  }
  
  document.getElementById(OtherCategoryKanal).style.display = "block";
  evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpenOtherKanal").click();

  /* Sliding/click Aktivitas */
function openOtherAktivitas(evt, OtherCategoryAktivitas) {
  var i, othertabcontentaktivitas, othertablinksaktivitas;
  
  othertabcontentaktivitas = document.getElementsByClassName("othertabcontentaktivitas");
  for (i = 0; i < othertabcontentaktivitas.length; i++) {
    othertabcontentaktivitas[i].style.display = "none";
  }
  
  othertablinksaktivitas = document.getElementsByClassName("othertablinksaktivitas");
  for (i = 0; i < othertablinksaktivitas.length; i++) {
    othertablinksaktivitas[i].className = othertablinksaktivitas[i].className.replace(" active", "");
  }
  
  document.getElementById(OtherCategoryAktivitas).style.display = "block";
  evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpenOtherAktivitas").click();

/* Sliding/Tanggal */
var tw = new Date();
if (tw.getTimezoneOffset() == 0) (a=tw.getTime() + ( 7 *60*60*1000))
else (a=tw.getTime());
tw.setTime(a);
var tahun= tw.getFullYear ();
var hari= tw.getDay ();
var bulan= tw.getMonth ();
var tanggal= tw.getDate ();
var hariarray=new Array("Minggu,","Senin,","Selasa,","Rabu,","Kamis,","Jum'at,","Sabtu,");
var bulanarray=new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember");
document.getElementById("tanggalwaktu").innerHTML = hariarray[hari]+" "+tanggal+" "+bulanarray[bulan]+" "+tahun;

// /* Sliding/click Berita Populer */
// function openNews(evt, NewsCategory) {
//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   document.getElementById(NewsCategory).style.display = "block";
//   evt.currentTarget.className += " active";
// }
// document.getElementById("defaultOpen").click();