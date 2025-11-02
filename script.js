const colours = document.querySelectorAll(".colours");
const body = document.body;

colours.forEach((colour) => {
    colour.style.backgroundColor = colour.id;

    colour.addEventListener('click', (e) => {
        console.log(e);

        body.style.backgroundColor = e.target.id;
    })
})
