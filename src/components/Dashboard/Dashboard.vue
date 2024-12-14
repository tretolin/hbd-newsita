<template>
    <div class="dashboard">
        <div class="container">
            <!-- Icon Blocks -->
            <Library v-if="select == 1" change="chamgeSelect"/>
            <!-- <FlipBook v-if="select == 2" change="chamgeSelect"/> -->
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import Library from "../Books/Library.vue";
import FlipBook from "../FlipBook/FlipBook.vue";

const select = ref(1);

function changeSelect(newSelect) {
    select.value = newSelect;
}
</script>

<style>
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
} */

@font-face {
    font-family: "Glipervelz";
    src: url("/src/fonts/fonts/Glipervelz.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Galaxy_dingbats-Regular";
    src: url("/src/fonts/Galaxy_dingbats-Regular.ttf") format("truetype"); /* Adjust path if needed */
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: "Happy";
    src: url("/src/fonts/Happy/Happy.ttf") format("truetype"); /* Adjust path if needed */
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: Arial, sans-serif;
    color: #444;
}

.dashboard {
    display: flex;
    justify-content: center;
    height: 100vh;
}

.container {
    h1 {
        font-size: 4vw;
    }
    h2 {
        font-size: 6vw;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-0.2vw);
}

.option {
    display: inline;
    cursor: pointer;
}

.options {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .link {
        display: block;
    }
}

.nubiru {
    font-family: "Glipervelz", sans-serif;
}
.space-cats {
    font-family: "Galaxy_dingbats-Regular", sans-serif;
}
.body {
    font-family: "Happy", sans-serif;
}

/* Banner */
.banner {
    width: 100%;
    background: #4caf50;
    color: white;
    text-align: center;
    padding: 2rem 0;
}

.banner h1 {
    font-size: 2.5rem;
}

/* Icon Blocks */
.blocks {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem 0;
    width: 90%;
}

.block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 8px;
    width: 150px;
    height: 150px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.block:hover {
    transform: translateY(-5px);
    background: #e0e0e0;
}

.icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.block p {
    font-size: 1rem;
    text-align: center;
}

/* Responsive Design */
@media (max-width: 600px) {
    .blocks {
        gap: 0.5rem;
    }

    .block {
        width: 120px;
        height: 120px;
    }

    .banner h1 {
        font-size: 2rem;
    }
}
</style>
