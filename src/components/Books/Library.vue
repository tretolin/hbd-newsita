<script setup>
import { ref } from "vue";

import {
    nibiru,
    forYou,
    postal,
    aboutYou,
} from "../../biblioteca/books-config.js";

let show = ref(false);

function bookInfo(book) {
    return {
        title: book.title,
        cover: book.cover,
        url: book.type == "card" ? "carta/" : "libro/",
    };
}

const onResize = () => {
    let newSize = window.innerWidth / 500;
    let max = 1.35;
    setTimeout(() => {
        show.value = true;
    }, 200);
};

const path = (book) => (book.type == 'carta' ? '/carta/':'/libro/')+book.id

function showPage(id) {
    // change(id);
}

// RESIZE
onResize();
window.onresize = onResize;

const listBooks = [nibiru, forYou, postal, aboutYou];
const books = ref(listBooks);
let size = ref(1.5);
const coverImage = (image) => "url(" + image + ")";
</script>

<template>
    <img src="/src/assets/images/ale-hbd.png" width="450" />
    <i
        style="width: 500px; text-align: center; padding-top: 10px"
        class="message"
        >¡Muchas felicidades! Este es mi modesto regalo de cumpleaños, algunos
        libros unas cartas hechas hice con todo el cariño del mundo nibiru,
        espero y te guste</i
    >
    <div class="container-books">
        <router-link
            v-for="(book, index) in books"
            :index="index"
            class="book-item"
            :style="{
                backgroundImage: coverImage(book.cover),
            }"
            :to="(path(book))"
        >
        </router-link>
    </div>
</template>

<style>
@import "./Books.scss";

:root {
    --scale: calc(100vw / 100); /* Adjust divisor for sensitivity */
}

.message {
    color: rgb(189, 170, 170);
    font-size: 2vhpx;
}

.container-books {
    transform: scale(var(--scale));
}
</style>
