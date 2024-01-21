// Обработчик для кнопок с классом .discipline
document.querySelectorAll("button.discipline").forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".wrapper-one").classList.add("hide");
        button.closest(".wrapper-two").classList.remove("hide");
    });
});

// Обработчик для кнопок с классом .more
document.querySelectorAll("button.more").forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".wrapper-one").classList.remove("hide");
        button.closest(".wrapper-two").classList.add("hide");
    });
});
