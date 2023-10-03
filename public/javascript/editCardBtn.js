//open form in edit mode
document.querySelector("#editBtn").addEventListener("click", () => {
  //get url id
  let id = window.location.pathname.split("/").slice(-1)[0];
  window.location.href = `/cards/${id}/edit`;
});
