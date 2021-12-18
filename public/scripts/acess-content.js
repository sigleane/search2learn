document.body.onload = () => {
    bring_data_ajax();
}

const programacao_button = document.body.querySelector("#programacao");
const financas_button = document.body.querySelector("#financas");
const design_button = document.body.querySelector("#design");
const matematica_button = document.body.querySelector("#matematica-basica");

programacao_button.addEventListener("click", () => {
    bring_data_ajax("programacao");
});

financas_button.addEventListener("click", () => {
    bring_data_ajax("financas");
});

design_button.addEventListener("click", () => {
    bring_data_ajax("design");
});

matematica_button.addEventListener("click", () => {
    bring_data_ajax("matematica");
});


function bring_data_ajax(identifier) {
    const xhr = new XMLHttpRequest();
    
    switch(identifier) {
        case "programacao":
            xhr.open('GET', '/source/ajax-source/programacao.html', true);

            programacao_button.classList.add("active");

            if(financas_button.classList.contains("active")){
                financas_button.classList.remove("active");
            }else if(design_button.classList.contains("active")){
                design_button.classList.remove("active");
            }else if(matematica_button.classList.contains("active")){
                matematica_button.classList.remove("active");
            }
            
        break;

        case "financas":
            xhr.open('GET', '/source/ajax-source/financas.html', true);

            financas_button.classList.add("active");
            
            if(programacao_button.classList.contains("active")){
                programacao_button.classList.remove("active");
            }else if(design_button.classList.contains("active")){
                design_button.classList.remove("active");
            }else if(matematica_button.classList.contains("active")){
                matematica_button.classList.remove("active");
            }

        break;

        case "design":
            xhr.open('GET', '/source/ajax-source/design.html', true);

            design_button.classList.add("active");
            
            if(programacao_button.classList.contains("active")){
                programacao_button.classList.remove("active");
            }else if(financas_button.classList.contains("active")){
                financas_button.classList.remove("active");
            }else if(matematica_button.classList.contains("active")){
                matematica_button.classList.remove("active");
            }
            
        break;

        case "matematica":
            xhr.open('GET', '/source/ajax-source/matematica.html', true);

            matematica_button.classList.add("active");

            if(programacao_button.classList.contains("active")){
                programacao_button.classList.remove("active");
            }else if(financas_button.classList.contains("active")){
                financas_button.classList.remove("active");
            }else if(design_button.classList.contains("active")){
                design_button.classList.remove("active");
            }
            
        break;

        default: 
        xhr.open('GET', '/source/ajax-source/design.html', true);

        design_button.classList.add("active");
            
        if(programacao_button.classList.contains("active")){
            programacao_button.classList.remove("active");
        }else if(financas_button.classList.contains("active")){
            financas_button.classList.remove("active");
        }else if(matematica_button.classList.contains("active")){
            matematica_button.classList.remove("active");
        }

        break;
    }

    xhr.onload = function () {
        if (xhr.status == 200) {    
            const main = document.body.querySelector("main");
            let response = xhr.responseText;          
            
            main.innerHTML = response;

            const swiper = new Swiper(".swiper", {
                // Optional parameters
                spaceBetween: 5,
                slidesPerView: 1,
                loop: true,
                freeMode: true,
                loopAdditionalSlides: 5,
                speed: 500,
            
                // Navigation arrows
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
            
                breakpoints: {
                  //   quando a largura da janela é >= 640px
                  640: {
                    slidesPerView: 3,
                    slidesPerGroups: 5,
                    freeMode: false,
                  },
                },
              });
    
        } else {
          console.log("Erro no Ajax");
        }
      };
    
      xhr.send(null);
}

