<template>
    <div class="go-home">
        <!-- <div @click="goHome" class="brand-name pointer">LT</div> -->
        <a @click="goHome" class="back-button"> ⇦ </a>
        <slot></slot>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => {
    router.push({ name: "home" });
};
</script>
<style scoped>
.go-home {
    position: absolute;
    z-index: 1000;
    width:100%;
    font-size: 3vh;;
    justify-content: left;
    transform: scale(1);
    color: white;
    .back-button {
    color: white;
        padding: 0 1vw;
        cursor: pointer;
        z-index: 100;
    }

    border-radius: 1vw;
    padding: 10px;
    width: 100%;
    text-align: center;
    top: 1vh;
}
</style>
