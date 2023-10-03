$(document).ready(function() {
  $(uploadBtn).prop("disabled", false);
  html2canvas(document.querySelector(".cardDiv"), {
    useCORS: true,
    allowTaint: true
  }).then(canvas => {
    //get url id
    let id = window.location.pathname.split("/").slice(-1)[0];
    let img = canvas
      .toDataURL("image/png")
      .replace(/^data:image\/png;base64,/, "");
    $("#uploadBtn").click(function() {
      $("#imgurLink").text("just a minute");
      $.ajax({
        method: "POST",
        async: true,
        url: "/link",
        data: {
          base64img: img,
          cardId: id
        },
        success: function(result) {
          FB.ui(
            {
              method: "share",
              href: result.link
            },
            function(response) {}
          );
          $("#imgurLink").text("");
        },
        error: function(error) {
          console.log(error.statusText);
          $("#imgurLink").text("Temporary error, please try again later");
        }
      });
    });
  });
});
