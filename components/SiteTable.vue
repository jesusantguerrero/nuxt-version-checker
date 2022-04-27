<script setup>
defineProps({
    sites: {
        type: Array,
        default() {
            return []
        }
    }
})

defineEmits(['add', 'check'])
</script>

<template>
    <header class="flex justify-between">
        <h1 class="text-xl">
            Sites
        </h1>
        <div class="space-x-2 flex justify-end items-center">
            <button class="bg-gray-600 px-2 py-1 rounded-md">Add</button>
            <button class="bg-gray-600 px-2 py-1 rounded-md">Check Sites</button>
        </div>
    </header>
    <section class="bg-gray-600 py-3 px-5 rounded-md mt-5">
        <div v-for="site in sites" :key="site.title" class="flex justify-between">
            <div class="w-full">{{ site.title }}</div>
            <div class="w-full text-center"> 
                <a :href="site.url" class="underline">
                    {{ site.url }}
                </a>
            </div>
            <div class="w-full text-right ">
                <span v-for="version in site.results" :key="version" class="px-2 py-1 bg-green-400 rounded-md">
                    {{ version}}
                </span>
            </div>
        </div>
    </section>
</template>