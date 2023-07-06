$(document).ready(function () {
  $(".addtext_btn_design").click(function () {
    var InputString = $(".DesignInput").val();
    // alert(InputString);
    $(".mybody_center_shirt_text").html(InputString);
  });
});

function openNav() {
  document.getElementById("myNav").style.width = "40%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function openFunction(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function myclose() {
  alert("ok");
  document.getElementsByClassName("tabcontent").style.display = "none";
  document.getElementsByClassName("tabcontent_default").style.display = "block";
}
