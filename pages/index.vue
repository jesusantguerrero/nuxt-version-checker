<script setup lang="ts">
import { ISite } from '~~/utils/sites';

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

const onDeleted = async (site: ISite) => {
    if (sites.value) {
        sites.value = sites.value?.filter(storedSite => storedSite.id != site.id);
    }
}

</script>


<template>
    <header>
        <title>Nuxt Version Checker </title>
    </header>
    <div class="h-screen text-white bg-gray-800">
        <header class="text-center">
            <h1 class="text-4xl font-bold text-white"> Version Checker App</h1>
        </header>
        <main class="max-w-6xl py-5 mx-auto" v-if="sites">
            <SiteTable 
                :sites="sites"
                @check="checkSites()"
                @deleted="onDeleted" 
                @saved="refresh"
            />
        </main>
    </div>
</template>