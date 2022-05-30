
function add() {
    var _name = document.getElementById("name").value;
    var _title = document.getElementById("title").value;
    var _category = document.getElementById("category").value;
    var _content = document.getElementById("content").value;
    var _menuBlock = document.getElementById("menuBlock");

    var article = document.getElementById("art");

    let li = document.createElement("li");

    let title = document.createElement("h2");
    title.textContent = _title;

    let category = document.createElement("p");
    category.classList.add("category");
    category.textContent = _category;

    let author = document.createElement("p");
    author.classList.add("author");
    author.textContent = _name;

    let content = document.createElement("p");
    content.textContent = _content;

    let menuBlock = document.createElement("div");
    menuBlock.classList.add("menuBlock");
    menuBlock.setAttribute("id", "menuBlock");

    let delBtn = document.createElement("button");
    delBtn.classList.add("delBtn");
    delBtn.textContent = "удалить";

    let arcBtn = document.createElement("button");
    arcBtn.classList.add("arcBtn");
    arcBtn.textContent = "Архив";

    li.appendChild(title);
    li.appendChild(category);
    li.appendChild(author);
    li.appendChild(content);

    menuBlock.appendChild(delBtn);
    menuBlock.appendChild(arcBtn);

    li.appendChild(menuBlock);

    article.prepend(li);

    let deleteButtons = document.querySelectorAll(".delBtn");
    deleteButtons.forEach(e => e.addEventListener('click', del));

    let archiveButtons = document.querySelectorAll(".arcBtn");
    archiveButtons.forEach(e => e.addEventListener('click', arc));
}
