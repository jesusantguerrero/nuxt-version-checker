<script setup>
const { data, refresh } = await useAsyncData('sites', () => $fetch('/api/sites'))

const isAdding = ref(false)
const toggleAdd = () => {
    isAdding.value = !isAdding.value
}

const onSubmit = (site) => {
    const body = {
        title: site.title,
        url: site.url,
        selector: site.selector,
        actions: [
            {
                action: site.action,
                value: site.value,
                index: site.index
            }
        ]
    }
    $fetch('/api/sites', {
        method: 'POST',
        body,
    }).then(() => refresh())
}

const onCheck = () => {
    state.sites.forEach(site => {
        site.results.push('v3.2.33')
    })
}

</script>

<template>
<div class="bg-gray-800 text-white h-screen">
    <header class="w-full h-32 text-center py-5">
        <h1 class="text-4xl"> Version Checker</h1>
    </header>
    <main class="max-w-6xl mx-auto">
        <SiteForm v-if="isAdding" @submit="onSubmit" @cancel="toggleAdd" class="mb-10 bg-gray-700 rounded-md" />
        <SiteTable :sites="data" @add="toggleAdd" @check="onCheck" />
    </main>
</div>
</template>