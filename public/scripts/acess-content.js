document.body.onload = () => {
    const loader = document.body.querySelector(".loader");
    const thumbSection = document.body.querySelector(".thumbSection");
    
    loader.classList.remove("show");
    loader.classList.add("hidden");

    thumbSection.classList.remove("hidden");
    thumbSection.classList.add("show");
}
