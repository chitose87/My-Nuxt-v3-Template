<template lang="pug">
.card
  .card__head
    slot(name="head")
  .card__body
    slot(name="body")

</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "@vue/runtime-core";

// defineProps<{
//   attribute: string
// }>()
// const sampleObje = <{ [key: string]: {} }>{}

// const obj = reactive({
//   text: "",
//   num: 0
// });
// const solo = ref(1);



onMounted(() => {
});

</script>

<style lang="scss">

</style>
