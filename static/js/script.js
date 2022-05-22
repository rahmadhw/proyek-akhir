const hero = document.querySelector(".section-deskripsi");
const anggota = document.querySelector(".anggota");

window.onscroll = function() {Scrolling()};



function Scrolling(){
    const test = document.documentElement.scrollTop;
    console.log(test)

    if (document.documentElement.scrollTop >= 223){
        hero.classList.add("test");
        if (document.documentElement.scrollTop >= 1180) {
            anggota.classList.add("test");
        }else {
            anggota.classList.remove("test");
        }
    }else {
        hero.classList.remove("test");
    }
}

