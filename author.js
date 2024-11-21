
const booksData = JSON.parse(localStorage.getItem("bookDetails")) || [];
console.log('booksData', booksData);
const authorArray = booksData.reduce((count, book) => {
    const authorName = book.authorName;
    if (!count[authorName]) {
      count[authorName] = 1;
    } else {
      count[authorName] += 1;
    }
    return count;
  }, {});
  const authorData = Object.keys(authorArray).map(authorName => ({
    authorName,
    bookCount: authorArray[authorName],
  }));
  localStorage.setItem('authors', JSON.stringify(authorData));
  
  console.log('Author:', authorData);
const tbody = document.querySelector("tbody");
function renderAuthor() {
  tbody.innerHTML =  authorData.map((author, index) => `
    <tr>
      <td>${author.authorName}</td>
      <td>${author.bookCount}</td>
      <td>
        <button class="delete-btn" data-id="${index}">Delete</button>
      </td>
    </tr>
    
  `).join('');
}
renderAuthor();
document.querySelector(".go-back-btn").addEventListener("click", function () {
    window.location.href = "index.html";
  });
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const authorIndex = event.target.getAttribute("data-id");
      authorData.splice(authorIndex, 1);
      localStorage.setItem('authors', JSON.stringify(authorData));
      renderAuthor();
    }
  });
