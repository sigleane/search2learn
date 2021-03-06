const materials_card = document.querySelector("#materials");
const info_card = document.querySelector("#info");

info_card.addEventListener("mouseover", inactive_materials_state);
info_card.addEventListener("mouseout", active_materials_state)

function inactive_materials_state() {
    if(materials_card.classList.contains("active_clip_path")){
        materials_card.classList.remove("active_clip_path");
    }

    materials_card.classList.add("inactive_clip_path");
}

function active_materials_state() {
    if(materials_card.classList.contains("inactive_clip_path")){
        materials_card.classList.remove("inactive_clip_path");
    }

    materials_card.classList.add("active_clip_path");
}