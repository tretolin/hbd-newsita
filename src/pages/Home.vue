<script setup>
// import Profile from "../components/Profile/Profile.vue";
// import Gallery from "../components/Gallery/Gallery.vue";
// import FlipBook from "../components/FlipBook/FlipBook.vue"
// import Card from "../components/Card/FlipCard.vue"
import Dashboard from  "../components/Dashboard/Dashboard.vue"

</script>
<template>
    <div class="main-page">
        <!-- <Profile /> -->
        <v-slot>
        <Dashboard/>
        <!-- <Card/>
        <FlipBook/> -->
            <!-- <Gallery /> -->
        </v-slot>
    </div>
</template>
