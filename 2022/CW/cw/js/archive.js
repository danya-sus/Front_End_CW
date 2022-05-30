
let arcBtn = document.querySelectorAll(".arcBtn");

function arc() {
    var title = this.parentElement.parentElement.childNodes[1].textContent;

    var archive = document.getElementById("titles");
    var newNode = document.createElement("li");
    newNode.textContent = title;

    archive.appendChild(newNode);

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

arcBtn.forEach(e => e.addEventListener('click', arc));