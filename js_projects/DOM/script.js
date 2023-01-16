const article = document.getElementById("mon-article")

console.log(article);

const title = document.getElementsByTagName("h1")

console.log(title[0]);

title[0].style.backgroundColor = "red"
title[0].style.padding = "50px"
title[0].style.textAlign = "center"

const p = article.children[1]

console.log(p);



p.innerHTML = "Hello <span id='mon-span'>world !!</span>"
title[0].textContent = "Nouveau titre"

const span = document.getElementById("mon-span")
span.style.color = "blue"

const a = document.getElementsByClassName("toto")
console.log(a);
a[0].href = "https://www.google.com"

const input = document.getElementById("text")
input.value = "Hello !!"
input.value 

const new_a = document.createElement("a")
new_a.href = "https://www.twitter.com"
new_a.textContent = "Un lien vers Twitter"

article.append(new_a)
article.prepend(new_a)
article.removeChild(a)