<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import "./flipBook.js";
import { postal, aboutYou } from "../../biblioteca/books-config.js";
import GoHome from "../FlipBook/GoHome.vue";
console.log("cardButton - - - - - - - - -- - - -- - - - - -");

const route = useRoute();
const id = route.params.id; // Access the id parameter
console.log('id',id)
const lang = ref(true);
const allBooks = [postal, aboutYou];
const findBook = allBooks.filter((book) => book.id == id);
const bookData = findBook.length
    ? findBook[0]
    : (window.location.href = "/404");
const texto = `Ha pasado un año desde que comenzamos a pasar tiempo juntos, no me esperaba encontrar una persona tan especial, pese a mi insolencia desde el primer día fuiste amable, no es difícil darse cuenta del gran corazón que tienes, me enseñaste la diferencia entre durazno y melocotón, me invitaste a acompañarte a San Antonio a pasar unos días contigo y fueron mis días más felices de los últimos años de mi vida. Gracias por compartirme un tiempo de tu vida para estar conmigo en este momento difícil de mi vida, eres una persona eres linda, amable, cariñosa, amistosa, comprensiva, compasiva, empática… podría seguir pero no cabe en esta carta, siendo así  es imposible no quererte, y yo, que aunque estoy un poquito descompuesto de la cabeza y tengo contacto con los extraterrestres se reconocer que eres la persona más especial que he conocido y mi persona favorita de este planeta. Si pudiera pedir un deseo no sería otro que tu vida se reponga y que sanen tus heridas. No importa lo que pase en el futuro, tuve la fortuna de conocerte en este universo, gracias por existir, Te quiero mucho Alexis.

Atte. Luisjavier`;
console.log(bookData);

// COMPOSITION
const library = "/src/biblioteca/";
const folder = bookData.folder;
let isSingle = ref(false);
let size = ref({ transform: "scale(1.3)" });
let show = ref(false);
const flip = () => (isSingle.value = !isSingle.value);
let book = ref({
    title: bookData.title,
    cover: library + "Cartas/postal-hbd.jpg",
    credits: "carta-hbd.jpg",
    backCover: "",
    path: library + "Cartas/",
    pages: bookData.pages,
});

// PATH PAGE GENERATOR
function pathPage(image) {
    return library + folder + image;
}

// GROUP PAGES
function groupPages(list) {
    let pages = [];
    for (let i = 0; i < list.length; i += 2) {
        pages.push(list.slice(i, i + 2));
    }
    return pages;
}

// BOOK SCALE
const onResize = () => {
    console.log(window.innerHeight, window.innerWidth);
    let newSize = window.innerWidth / 500;
    let max = 1.35;
    setTimeout(() => {
        show.value = true;
    }, 200);
};

// RESIZE
onResize();
window.onresize = onResize;
</script>

<template>
    <GoHome>
        {{ book.title }}
    </GoHome>

    <!-- <div v-if="bookData.id == 4" style="position:absolute; right:3vw; top: 3vw; cursor:pointer; z-index: 1000">
        <button @click="lang = !lang" class="lang" >{{lang ? 'Español' : 'Nibiru'}}</button>
    </div> -->

    <div class="content-page" :style="size" :class="[show ? 'show' : '']">
        <div class="container" id="container">
            <p>{{ bookData.title }}</p>
            <div class="book">
                <div class="page">
                    <div class="front">
                        <img
                            :src="
                                bookData.library +
                                bookData.folder +
                                bookData.cover
                            "
                            alt="book.title"
                        />
                    </div>
                    <div class="back">

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("./flipCard.scss");

.content-page {
    display: fles;
    text-align: center;
    width: 100vw;
    min-width: 60vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity ease-in 0.3s;
    &.show {
        opacity: 1;
    }
    /* transform: scale(var(--scale-factor)); */
    img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }
}

.letter-text {
    font-size: 11px;
    padding: 1vw;
}

.container {
    /* width: 60vw; */
    transform: translateX(-5%);
}

@font-face {
    font-family: "Glipervelz";
    src: url("/src/fonts/fonts/Glipervelz.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}
.hide {display: none}

.nibiru {
    font-family: "Glipervelz Regular";
    font-size: 12px;
}

</style>
