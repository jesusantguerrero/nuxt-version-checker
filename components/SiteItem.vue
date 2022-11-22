<script setup>
defineProps({
    site: {
        type: Object
    }
})

const formatDate = () => {

}

const onDelete = () => {

}

const onEdit = () => {

}

</script>

<template>
    <div class="flex justify-between w-full px-5 py-2 bg-gray-700" key={key}>
        <h4 class="w-full text-xl text-left uppercase">{{ site.title }}</h4>
        <div class="w-full"> <a :href="site.url" class="underline"> {{ site.url }}</a></div>
        <div class="flex items-center justify-end w-full space-x-2 text-right" v-if="site.results">
            <span class="px-2 py-1 bg-green-600 rounded-md" v-for="version in site.results" :key="version"> 
                {{ version }} 
            </span>)
            <span class="w-full text-sm text-left">At {{ formatDate(site.updatedAt) }}</span>
        </div>
        <div class="flex flex-col items-center px-5 ml-auto space-y-2 md:flex-row md:items-center md:space-x-2">
            <button @click="onEdit(site)" class="px-2 py-1 bg-gray-600 rounded-md">Edit</button>
            <button onClick="onDelete(site.id)" class="px-2 py-1 bg-red-600 rounded-md">
                Delete
            </button>
        </div>
    </div>
</template>