<script setup>
import { ref } from "vue";
import TopMenu from "./TopMenu/TopMenu.vue";
import Footer from "./Footer/Footer.vue";
// import Login from "./Login/Login.vue";
// const logged = ref(false);
// function login() {
//     logged.value = true;
// }

function stars (count) {
    const shadows = [];
    let nibiru = "-16vw -24vh 6px 6px #119eee";
    for (let i = 0; i < count; i++) {
        const x = (Math.random() * 100 - 50).toFixed(1) + "vw"; // Random -50vw to 50vw
        const y = (Math.random() * 100 - 50).toFixed(1) + "vh"; // Random -50vh to 50vh
        const blur = (Math.random() * 1).toFixed(1) + "px"; // Random 0px to 2px
        const spread = (Math.random() * 1).toFixed(1) + "px"; // Random 0px to 2px
        const color = "#fff"; // Constant color

        shadows.push(`${x} ${y} ${blur} ${spread} ${color}`);
        console.log(`${x} ${y} ${blur} ${spread} ${color}`)
    }
    shadows.push(nibiru)



    return  shadows.join(",\n");
}
</script>

<template>
    <div class="bg" :style="{ boxShadow: stars(300)}"></div>
    <!-- <Login /> -->
    <router-view v-slot="{ Component }">
        <transition name="slide-fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
<style>
@import url("../styles/pages-transition.scss");

body {
    background: rgb(39, 35, 71);
    background: radial-gradient(
        circle,
        rgba(39, 35, 71, 1) 0%,
        rgba(21, 29, 41, 1) 61%,
        rgba(27, 9, 57, 1) 100%
    );
}

.bg {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 1px;
    width: 1px;
    background-color: #fff;
    border-radius: 50%;
    /* box-shadow: 24vw 9vh 1px 0px #fff, 12vw -24vh 6px 6px #119eee,
        -45vw -22vh 1px 1px #fff, -37vw -40vh 6px 1px #119eee,
        -20vw 49vh 0px 1px #fff, 5vw 40vh 1px 1px #fff, 29vw 19vh 1px 0px #fff,
        -44vw -13vh 0px 1px #fff, 46vw 41vh 0px 1px #fff,
        -3vw -45vh 0px 1px #fff, 47vw 35vh 1px 0px #fff, 12vw -8vh 1px 0px #fff,
        -34vw 48vh 1px 1px #fff, 32vw 26vh 1px 1px #fff, 32vw -41vh 1px 1px #fff,
        0vw 37vh 1px 1px #fff, 34vw -26vh 1px 0px #fff, -23vw -17vh 1px 1px #fff,
        44vw 15vh 1px 0px #fff, -40vw 33vh 1px 1px #fff, -43vw 8vh 1px 1px #fff,
        -48vw -15vh 1px 1px #fff, -24vw 17vh 1px 1px #fff,
        -31vw 50vh 1px 0px #fff, 36vw -38vh 0px 1px #fff, -7vw 48vh 1px 1px #fff,
        15vw -32vh 0px 1px #fff, 29vw -41vh 1px 1px #fff, 2vw 37vh 1px 0px #fff,
        7vw -40vh 1px 1px #fff, 15vw 18vh 1px 1px #fff, 25vw -13vh 1px 1px #fff,
        -46vw -12vh 1px 1px #fff, -18vw 22vh 1px 1px #fff,
        23vw -9vh 1px 0px #fff, 55vw 11vh 0px 1px #fff, 40vw 6vh 1px 0px #fff; */

    /* stars were too big with the layers above but left the code in case no one cares  -- as in, if noone's just that  one other loner who actually cares    */

    /* box-shadow: 24vw 9vh 1px 0px #fff, 12vw -24vh 6px 6px #119eee,
        -45vw -22vh 1px 1px #fff, -37vw -40vh 6px 1px #119eee,
        29vw 19vh 0px 1px #fff, 4vw -8vh 0px 1px #fff, -5vw 21vh 1px 1px #fff,
        -27vw 26vh 1px 1px #fff, -47vw -3vh 1px 1px #fff,
        -28vw -30vh 0px 1px #fff, -43vw -27vh 0px 1px #fff,
        4vw 22vh 1px 1px #fff, 36vw 23vh 1px 1px #fff, -21vw 24vh 1px 1px #fff,
        -16vw 2vh 1px 0px #fff, -16vw -6vh 1px 1px #fff, 5vw 26vh 1px 1px #fff,
        -34vw 41vh 1px 1px #fff, 1vw 42vh 1px 1px #fff, 11vw -13vh 1px 1px #fff,
        48vw -8vh 1px 0px #fff, 22vw -15vh 1px 1px #fff, 45vw 49vh 1px 1px #fff,
        43vw -27vh 1px 1px #fff, 20vw -2vh 1px 1px #fff, 8vw 22vh 0px 1px #fff,
        39vw 48vh 1px 1px #fff, -21vw -11vh 0px 1px #fff,
        -40vw 45vh 0px 1px #fff, 11vw -30vh 1px 0px #fff, 26vw 30vh 1px 0px #fff,
        45vw -29vh 0px 1px #fff, -2vw 18vh 1px 1px #fff,
        -29vw -45vh 1px 0px #fff, -7vw -27vh 1px 1px #fff,
        42vw 24vh 1px 1px #fff, 45vw -48vh 1px 0px #fff,
        -36vw -18vh 1px 1px #fff, -44vw 13vh 0px 1px #fff,
        -15vw -23vh 1px 0px #fff, -24vw 48vh 0px 1px #fff,
        27vw -45vh 1px 0px #fff, -2vw -24vh 0px 1px #fff,
        -15vw -28vh 1px 1px #fff, -43vw 13vh 1px 0px #fff, 7vw 27vh 1px 0px #fff,
        47vw 5vh 1px 1px #fff, -45vw 15vh 1px 1px #fff, -5vw -28vh 0px 1px #fff,
        38vw 25vh 1px 1px #fff, -39vw -1vh 1px 0px #fff, 5vw 0vh 1px 0px #fff,
        49vw 13vh 1px 1px #fff, 48vw 10vh 0px 1px #fff, 19vw -28vh 1px 1px #fff,
        4vw 7vh 1px 1px #fff, 21vw 21vh 1px 1px #fff, 22vw -15vh 1px 1px #fff,
        45vw 49vh 1px 1px #fff, 43vw -27vh 1px 1px #fff, 20vw -2vh 1px 1px #fff,
        8vw 22vh 0px 1px #fff, 39vw 48vh 1px 1px #fff, -21vw -11vh 0px 1px #fff,
        -40vw 45vh 0px 1px #fff, 11vw -30vh 1px 0px #fff, 26vw 30vh 1px 0px #fff,
        45vw -29vh 0px 1px #fff, -2vw 18vh 1px 1px #fff,
        -29vw -45vh 1px 0px #fff, -7vw -27vh 1px 1px #fff,
        42vw 24vh 1px 1px #fff, 45vw -48vh 1px 0px #fff,
        -36vw -18vh 1px 1px #fff, -44vw 13vh 0px 1px #fff,
        -15vw -23vh 1px 0px #fff, -24vw 48vh 0px 1px #fff,
        27vw -45vh 1px 0px #fff, -2vw -24vh 0px 1px #fff,
        -15vw -28vh 1px 1px #fff, -43vw 13vh 1px 0px #fff, 7vw 27vh 1px 0px #fff,
        47vw 5vh 1px 1px #fff, -45vw 15vh 1px 1px #fff, -5vw -28vh 0px 1px #fff,
        38vw 25vh 1px 1px #fff, -39vw -1vh 1px 0px #fff, 5vw 0vh 1px 0px #fff,
        49vw 13vh 1px 1px #fff, 48vw 10vh 0px 1px #fff, 19vw -28vh 1px 1px #fff,
        4vw 7vh 1px 1px #fff, 21vw 21vh 1px 1px #fff, 22vw -15vh 1px 1px #fff,
        45vw 49vh 1px 1px #fff, 43vw -27vh 1px 1px #fff, 20vw -2vh 1px 1px #fff,
        8vw 22vh 0px 1px #fff, 39vw 48vh 1px 1px #fff, -21vw -11vh 0px 1px #fff,
        -40vw 45vh 0px 1px #fff, 11vw -30vh 1px 0px #fff, 26vw 30vh 1px 0px #fff,
        45vw -29vh 0px 1px #fff, -2vw 18vh 1px 1px #fff,
        -29vw -45vh 1px 0px #fff, -7vw -27vh 1px 1px #fff,
        42vw 24vh 1px 1px #fff, 45vw -48vh 1px 0px #fff,
        -36vw -18vh 1px 1px #fff, -44vw 13vh 0px 1px #fff,
        -15vw -23vh 1px 0px #fff, -24vw 48vh 0px 1px #fff,
        27vw -45vh 1px 0px #fff, -2vw -24vh 0px 1px #fff,
        -15vw -28vh 1px 1px #fff, -43vw 13vh 1px 0px #fff, 7vw 27vh 1px 0px #fff,
        47vw 5vh 1px 1px #fff, -45vw 15vh 1px 1px #fff, -5vw -28vh 0px 1px #fff,
        38vw 25vh 1px 1px #fff, -39vw -1vh 1px 0px #fff, 5vw 0vh 1px 0px #fff,
        49vw 13vh 1px 1px #fff, 48vw 10vh 0px 1px #fff, 19vw -28vh 1px 1px #fff,
        4vw 7vh 1px 1px #fff, 21vw 21vh 1px 1px #fff, -15vw -15vh 0px 1px #fff,
        -6vw -42vh 1px 0px #fff, -15vw 48vh 1px 1px #fff,
        -23vw 25vh 1px 1px #fff, -48vw 25vh 0px 1px #fff,
        -31vw -19vh 0px 1px #fff, 4vw 37vh 1px 1px #fff, -43vw 28vh 1px 1px #fff,
        3vw -25vh 0px 1px #fff, 36vw 16vh 0px 1px #fff, 40vw 24vh 1px 1px #fff,
        18vw 11vh 1px 1px #fff, -39vw 14vh 0px 1px #fff, -40vw 31vh 0px 1px #fff,
        35vw -36vh 1px 1px #fff, 16vw 49vh 1px 1px #fff, 6vw 39vh 1px 1px #fff,
        3vw -35vh 0px 1px #fff, -44vw -2vh 1px 0px #fff, -6vw 21vh 1px 0px #fff,
        48vw 9vh 1px 1px #fff, -43vw 30vh 1px 1px #fff, 29vw -12vh 1px 1px #fff,
        -48vw 13vh 1px 0px #fff, -42vw 32vh 1px 1px #fff, 34vw 15vh 1px 1px #fff,
        29vw -37vh 1px 1px #fff, 28vw 2vh 1px 1px #fff; */
    animation: zoom 12s alternate infinite;
}

@keyframes zoom {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.5);
    }
}
</style>
