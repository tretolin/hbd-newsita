<script setup>
import FlipBook from "../components/FlipBook/FlipBook.vue"
import {ref} from 'vue';

let show = ref(false);

setTimeout( () => {
    show.value =  true;
},10)

</script>
<template>
    <div class="main-page">
        <FlipBook v-if="show" :key="key"/>
    </div>
</template>
