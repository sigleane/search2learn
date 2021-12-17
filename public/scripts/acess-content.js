document.body.onload = () => {
    const loader = document.body.querySelector(".loader");
    const main = document.body.querySelector("main");
    
    loader.classList.remove("show");
    loader.classList.add("hidden");

    main.classList.remove("hidden");
    main.classList.add("show");
}
