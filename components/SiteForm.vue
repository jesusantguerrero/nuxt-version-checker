<script setup>
defineEmits(['submit', 'cancel'])

const formData = reactive({
    title: '',
    url: '',
    selector: '',
    action: '',
    value: '',
    index: 0
})

const inputClass = "bg-gray-600 px-2 py-1 rounded-md outline-none"
</script>


<template>
    <form @submit.prevent="$emit('submit', formData)">
        <div class="flex flex-col rounded-md bg-gray-700 px-5 py-2">
            <div class="flex space-x-2">
                <label class="w-full">
                    <span class="">Title</span>
                    <input type="text" :class="inputClass" v-model="formData.title" class="w-full border-b border-gray-600" />
                </label>
                <label class="w-full">
                    <span class="">URL</span>
                    <input type="text" :class="inputClass" v-model="formData.url" class="w-full border-b border-gray-600" />
                </label>
                <label class="w-full">
                    <span class="">Selector</span>
                    <input type="text" :class="inputClass" v-model="formData.selector" class="w-full border-b border-gray-600" />
                </label>
                <section class="w-full">
                    <label for="">Actions</label>
                    <div class="flex space-x-2">
                        <input type="text" placeholder="Action" :class="inputClass" v-model="formData.action" class="w-full border-b border-gray-600" />
                        <input type="text" placeholder="Value" :class="inputClass" v-model="formData.value" class="w-full border-b border-gray-600" />
                        <input type="text" placeholder="Index" :class="inputClass" v-model="formData.index" class="w-full border-b border-gray-600" />
                    </div> 
                </section>
            </div>
            <div class="flex justify-end mt-3 space-x-2">
                <button type="button" class="bg-red-900 px-2 py-1 rounded-md" @click="$emit('cancel')">Cancel </button>
                <button class="bg-gray-600 px-2 py-1 rounded-md">Add</button>
            </div>
        </div>
    </form>
</template>