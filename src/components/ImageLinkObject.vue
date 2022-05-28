<template>
    <v-btn icon :href="link"
        target="_blank">
        <v-icon>image</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: 'ImageLinkObject',
        props: {
            link: String,
            image: Object
        },
    }
</script>

<style scoped>

</style>