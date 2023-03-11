<script setup>
import QuickResponseCodeCard from './components/QuickResponseCodeCard.vue'
</script>

<template>
    <div class="w-full h-screen flex flex-col items-center justify-center bg-light-gray px-4 sm:p-0">
        <QuickResponseCodeCard />
        <div class="attribution mt-8">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">KevinH</a>.
        </div>
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

.attribution {
    font-size: 11px;
    text-align: center;
}

.attribution a {
    color: hsl(228, 45%, 44%);
}
</style>