<script setup>
import { ref } from 'vue';

const string = ref([`Improve your front-end skills by building projects`, `Scan the QR code to visit Frontend Mentor and take your coding skills to the next level`])
</script>

<template>
    <div class="flex flex-col items-center text-center sm:w-1/2 md:w-1/3 lg:w-1/4 w-full rounded-xl bg-white p-4 ">
        <div class="rounded-lg overflow-hidden mb-8">
            <img src="../assets/image-qr-code.png" alt="">
        </div>
        <div class="font-bold text-2xl mb-4">{{ string[0] }}</div>
        <div class="text-lg">{{ string[1] }}</div>
    </div>
</template>