//converts card to a canvas img
let cardDiv = document.querySelector(".cardDiv");
cardDiv.style.letterSpacing = "0.1px";

let imgUrl = "";

$(document).ready(() => {
  html2canvas(cardDiv, {
    useCORS: true,
    allowTaint: true
  }).then(canvas => {
    //img url
    imgUrl = canvas.toDataURL("image/png");

    //get url id
    let id = window.location.pathname.split("/").slice(-1)[0];

    //ajax send pic url
    $.ajax({
      type: "PUT",
      url: `/cards/${id}`,
      data: {
        imgUrl: imgUrl
      }
    });
  });
});

document.querySelector("#captureBtn").addEventListener("click", () => {
  html2canvas(cardDiv, {
    useCORS: true,
    allowTaint: true
  }).then(canvas => {
    //img url
    let imgUrl = canvas.toDataURL("image/png");

    //open new window
    window.open(imgUrl, "_blank");
  });
});

function getImgUrl() {
  return imgUrl;
}
