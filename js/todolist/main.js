function newElement() {
    let inputValue = document.getElementById("task").value.trim();
    if (inputValue === "") {
      console.log("Boş Karakter");
      $('.toast.error').toast('show');
    } else {
      let li = document.createElement("li");
      li.textContent = inputValue;
      document.getElementById("list").appendChild(li);
      $('.toast.success').toast('show');
    }
    document.getElementById("task").value = "";