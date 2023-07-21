function myFunction() {
    var on_icon_mobile = document.getElementById("on_icon_mobile");
    var off_icon_mobile = document.getElementById("off_icon_mobile");
    var manu = document.getElementById("mobile_manu");
    if (on_icon_mobile.style.display === "none") {
      on_icon_mobile.style.display = "block";
      off_icon_mobile.style.display = "none";
      manu.style.display = "none";
      manu.style.height = "0"
    } else {
      on_icon_mobile.style.display = "none";
      off_icon_mobile.style.display = "block";
      manu.style.display = "block";
      manu.style.height = "auto"
    }
  }