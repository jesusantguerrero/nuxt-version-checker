<script setup>
const state = reactive({
    sites: [
        {
            title: 'Vue.js',
            url: 'https://vuejs.org/',
            results: ['v3.2.33'],
            lastChecked: '2020-01-01',
        }
    ]
})

</script>

<template>
<div class="bg-gray-800 text-white h-screen">
    <header class="w-full h-32 text-center py-5">
        <h1 class="text-4xl"> Version Checker</h1>
    </header>
    <main>
        <!-- content here -->
    </main>
</div>
</template>