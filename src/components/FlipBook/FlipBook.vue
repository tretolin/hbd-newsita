<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import "./flipBook";
import { nibiru, forYou } from "../../biblioteca/books-config.js"
import GoHome from './GoHome.vue';
console.log('%cTRACK', "color:yellow");
const route = useRoute();
const id = route.params.id; // Access the id parameter
const allBooks = [nibiru, forYou]
const bookSelected = id;
const findBook = allBooks.filter( (book) => book.id == id);
const bookData = findBook.length ? findBook[0] : window.location.href = "/404"
console.log(bookData)
let isSingle = ref(false);
let size = ref({ transform: "scale(1.3)" });
let show = ref(false);
const flip = () => (isSingle.value = !isSingle.value);

// PATH PAGE GENERATOR
function pathPage(image) {
    return bookData.library + bookData.folder+image;
}

// GROUP PAGES
function groupPages(list) {
    let pages = [];
    for (let i = 1; i < bookData.pages.length; i += 2) {
        console.log('%cPAGES ', 'color:yellow', pages)
        pages.push(bookData.pages.slice(i, i + 2));
    }
    return pages;
}
// BOOK SCALE
const onResize = () => {
    console.log('RESIZE')
    console.log(window.innerHeight, window.innerWidth);
    let newSize = window.innerWidth / 500;
    let max = 1.35;
    setTimeout(() => {
        console.log('show')
        show.value = true;
    }, 200);
    // size.value = {
    //     transform: "scale(" + (newSize > max ? max : newSize) + ")",
    // };
};

// RESIZE
onResize();
window.onresize = onResize;
</script>

<template>
    <GoHome>
        {{ bookData.title }}
    </GoHome>
    <div class="content-page" :style="size" :class="[show ? 'show' : '']">
    
        <div class="container" id="container">
            <p>{{ bookData.title }}</p>
            <div class="book">
                <div class="page">
                    <div class="front">
                        <img :src="(bookData.library + bookData.folder + bookData.cover)" alt="book.title" />
                    </div>
                    <div class="back">
                        <img :src="pathPage(bookData.pages[0])" alt="" />
                    </div>
                </div>

                <div
                    v-for="(page, index) in groupPages(bookData.pages)"
                    class="page"
                    :key="index"
                >
                    <div class="front">
                        <img :src="pathPage(page[0])" alt="Img 2" />
                    </div>
                    <div class="back">
                        <img :src="pathPage(page[1])" alt="Back 1" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import url("./flipBook.scss");

.content-page {
    text-align: center;
    width: 100vw;
    min-width: 60vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity ease-in .3s;
    &.show { opacity: 1}
    /* transform: scale(var(--scale-factor)); */
    img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }
}

.container {
    /* width: 60vw; */
    transform: translateX(-5%);
}
</style>
