
let delBtn = document.querySelectorAll(".delBtn");

function del() {
    var title = this.parentElement.parentElement.childNodes[1].textContent;

    var articles = document.querySelector(".article");
    var li = document.querySelectorAll(".article li");

    var count = 0;
    for(var article of li) {
        if(article.childNodes[1].textContent.trim() == title.trim()) {
            articles.removeChild(article);
            return;
        }
        count++;
    }
}

delBtn.forEach(e => e.addEventListener('click', del));