// Yorum ekleme sistemi
document.addEventListener("DOMContentLoaded", () => {
  const commentInput = document.getElementById("commentInput");
  const addCommentBtn = document.getElementById("addCommentBtn");
  const commentList = document.getElementById("commentList");

  addCommentBtn.addEventListener("click", () => {
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
      const li = document.createElement("li");
      li.textContent = commentText;
      commentList.appendChild(li);

      commentInput.value = "";
    } else {
      alert("Lütfen bir yorum yazın!");
    }
  });
});

