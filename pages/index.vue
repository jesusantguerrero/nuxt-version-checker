<script setup lang="ts">
interface ICounterData {
    count: number,
    features: any[]
}
const { data } = await useFetch<ICounterData>('/api/features')
</script>


<template>
<div class="h-screen text-white bg-gray-800">
    Hello mom: 
    There is a total of {{ data.count }}
    <ul v-for="feat in data.features" :key="feat.id">
        <li> {{ feat.title }}</li>
    </ul>
</div>
</template>