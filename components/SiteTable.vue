<script setup lang="ts">
import { isLiteral } from '@babel/types';

defineProps({
    sites: {
        type: Array
    }
})

const emit = defineEmits(['saved'])


const onAction = (site) => {
  console.log(site)
}

const isAdding = ref(false);
const toggleAdding = () => {
    isAdding.value = !isAdding.value
};

const siteData = reactive({
    id: null,
    action: '',
    value: '',
    index: ''
});

const isLoading = ref(false)
const onSubmit = async (siteData) => {
    if (isLoading.value) return
    isLoading.value = true
    const formData = {
        ...siteData,
        actions: [{
            action: siteData.action,
            value: siteData.value,
            index: siteData.index || 0
        }]
    }

    let endpoint = `/api/sites`
    let method = "POST"
    if (siteData.id) {
        endpoint = `/sites/${siteData.id}`
        method = "PUT"
    }

    try {
        const response = await fetch(endpoint, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        emit('saved', data);
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <div class="mx-auto max-w-7xl">
        <header class="flex justify-between mb-5">
            <section>
                <h4 class="font-bold text-2x"> Sites</h4>
            </section>
            <section class="flex space-x-2">
                <button class="px-5 py-1 bg-gray-600 rounded-md text-md" @click="toggleAdding">Add</button>
                <button class="px-5 bg-gray-600 rounded-md text-md" @click="$emit('check')">Check sites</button>
            </section>
        </header>
        <section class="overflow-hidden rounded-md">
            <SiteForm v-if="isAdding" 
                :site-data="siteData"
                :is-loading="isLoading"
                @submit="onSubmit"
            />
           <SiteItem 
                v-for="site in sites" 
                :site="site" 
                :key="site.id" 
                @edit="$emit('edit', site)"
                @deleted="$emit('deleted', site)"
            />
        </section>
    </div>
</template>