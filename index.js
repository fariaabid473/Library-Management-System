
const booksData = JSON.parse(localStorage.getItem("bookDetails")) || [];
console.log('booksData', booksData);
document.querySelector(".btn-1").addEventListener("click", function () {
  window.location.href = "author.html";
});
document.querySelector(".btn-2").addEventListener("click", function () {
  window.location.href = "publisher.html";
});
const tbody = document.querySelector("tbody");

function renderBooks() {
  tbody.innerHTML = booksData.map((book, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${book.bookName}</td>
      <td>${book.authorName}</td>
      <td>${book.publisherName}</td>
      <td>${book.publishDate}</td>
      <td>
        <button class="update-btn" data-id="${index}">Update</button>
        <button class="delete-btn" data-id="${index}">Delete</button>
      </td>
    </tr>
  `).join('');
}
renderBooks();
document.querySelector(".add-btn").addEventListener("click", function () {
  window.location.href = "addNew.html";
});
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("update-btn")) {
    const bookId = event.target.getAttribute("data-id");
    const book = booksData[bookId];

    const bookName = prompt("Enter Book Name:", book.bookName);
    const authorName = prompt("Enter Author Name:", book.authorName);
    const publisherName = prompt("Enter Publisher Name:", book.publisherName);
    const publishDate = prompt("Enter Publish Date (YYYY-MM-DD):", book.publishDate);
    if (bookName && authorName && publisherName && publishDate) {
      booksData[bookId] = { bookName, authorName, publisherName, publishDate};
      localStorage.setItem("bookDetails", JSON.stringify(booksData));
      renderBooks();
    } else {
      alert("All fields are required!");
    }
  }

  if (event.target.classList.contains("delete-btn")) {
    const bookId = event.target.getAttribute("data-id");
    booksData.splice(bookId, 1);
    localStorage.setItem("bookDetails", JSON.stringify(booksData));
    renderBooks();
  }
});

