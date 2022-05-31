<template>
    <img :src="image"/>
</template>

<script>

export default {
    name:'ImageToObject',
    props: {
        image:{
            type: String,
        },
    }
}
</script>

<style scoped>
img {
    max-height: 64px;
    max-width: 64px;
}

</style>