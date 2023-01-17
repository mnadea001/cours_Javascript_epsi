const button = document.getElementById("button1");
console.log(button);
button.addEventListener("click", () => {
    if (document.body.style.backgroundColor == "purple") {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "purple";
    }
});

const input = document.getElementById("mon-input");
console.log(input);

input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        console.log(e.altKey);
    }
});

const link = document.getElementById("link")
console.log(link);

link.addEventListener("click", e => {
    console.log(`Saving ${input.value}`);
    console.log(e.target);
    e.preventDefault()
})