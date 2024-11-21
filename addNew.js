const form = document.getElementById("bookForm");
form.addEventListener("submit", ()=>{
   const bookName =document.getElementById('bookName').value;
   const authorName =document.getElementById('authorName').value;
   const publisherName =document.getElementById('publisherName').value;
   const publishDate =document.getElementById('publishDate').value;
   
   const bookDetails ={bookName,
    authorName,publisherName,publishDate
   };
   let booksArray = JSON.parse(localStorage.getItem('bookDetails')) || [];
   booksArray.push(bookDetails);
   localStorage.setItem('bookDetails', JSON.stringify(booksArray));
});
document.querySelector(".goBackBtn").addEventListener("click", function () {
   window.location.href = "index.html";
 });
