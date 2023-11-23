<template>
    <div class="flex flex-col">
        <img :src="require(`@/assets/images/${listItem.imgSrc}`)" :alt="`${props.listItem.name}`" class="rounded-md">
        <h3 class="h-6 text-xl font-semibold mt-[14px] mb-[6px]">{{ props.listItem.name }}</h3>
        <p class="font-normal text-sm">{{ props.listItem.description }}</p>
    </div>
</template>

<script setup>
    const props=defineProps({
        'listItem':Object
    })
</script>
