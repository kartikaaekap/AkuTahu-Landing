/* Side-Navbar */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/* Sliding/click Berita Populer */
function openNews(evt, NewsCategory) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(NewsCategory).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

/* Sliding/click Berita Lainnya */
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