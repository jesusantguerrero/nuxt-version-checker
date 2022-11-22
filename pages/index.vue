<script setup lang="ts">
interface ISite {
    id: string
    title: string,
}
const { data: sites, refresh } = await useFetch<ISite[]>('/api/sites');
const checkSites = async () => {
    try {
        await fetch('/api/site-check', {
            method: 'post'
        })
        refresh()
    } catch (err) {
        console.log(err)
    }
}

</script>


<template>
<div class="h-screen text-white bg-gray-800">
    <header class="text-center">
        <h1 class="text-4xl font-bold text-white"> Version Checker App</h1>
    </header>
    <main class="max-w-6xl py-5 mx-auto" v-if="sites">
        <SiteTable :sites="sites" @check="checkSites()" />
    </main>
</div>
</template>