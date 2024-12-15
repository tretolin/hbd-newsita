<script setup>
import FlipCard from "../components/Card/FlipCard.vue"
import {ref} from 'vue';

let show = ref(false);

setTimeout( () => {
    show.value =  true;
},10)

</script>
<template>
    <div class="main-page">
        <FlipCard v-if="show" :key="key"/>
    </div>
</template>
