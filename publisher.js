
const booksData = JSON.parse(localStorage.getItem("bookDetails")) || [];
console.log('booksData', booksData);
const publishersArray = booksData.reduce((count, book) => {
    const publisherName = book.publisherName;
    if (!count[publisherName]) {
      count[publisherName] = 1;
    } else {
      count[publisherName] += 1;
    }
    return count;
  }, {});
  const publishersData = Object.keys(publishersArray).map(publisherName => ({
    publisherName,
    bookCount: publishersArray[publisherName],
  }));
  localStorage.setItem('publishers', JSON.stringify(publishersData));
  
  console.log('Publishers:', publishersData);
const tbody = document.querySelector("tbody");
function renderPublisher() {
  tbody.innerHTML =  publishersData.map((publisher, index) => `
    <tr>
      <td>${publisher.publisherName}</td>
      <td>${publisher.bookCount}</td>
      <td>
        <button class="delete-btn" data-id="${index}">Delete</button>
      </td>
    </tr>
    
  `).join('');
}
renderPublisher();
document.querySelector(".go-back-btn").addEventListener("click", function () {
    window.location.href = "index.html";
  });
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const publisherIndex = event.target.getAttribute("data-id");
      publishersData.splice(publisherIndex, 1);
      localStorage.setItem('publishers', JSON.stringify(publishersData));
      renderPublisher();
    }
  });
