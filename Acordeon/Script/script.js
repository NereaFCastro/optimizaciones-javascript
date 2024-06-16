const info = document.querySelectorAll(".acordeon_info")
const h2 = document.querySelectorAll(".h2")


        h2.forEach((cadaH2, i) => {
            h2[i].addEventListener('mouseover', () => {
                h2.forEach((cadaH2) => {
                    cadaH2.classList.remove('active');
                });
                h2[i].classList.add('active');
            });

            h2[i].addEventListener('mouseout', () => {
                h2[i].classList.remove('active');
            });

            h2[i].addEventListener('click', () => {
                info.forEach((cadaBloque) => {
                    cadaBloque.classList.remove('activo');
                });
                info[i].classList.add('activo');
            });
        });