const boxes = document.querySelectorAll(".box");

// variable to count the boxes in the array
let current = 1;

// to move and rotate the boxes
let interval = setInterval(() => {
    boxes.forEach((box) => {
        if (box.classList[1].split("-")[1] * 1 === current) {
            box.classList.add("active");
        } else {
        }
    });
    current++;
}, 1000);