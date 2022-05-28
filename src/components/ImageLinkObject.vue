<template>
    <a  :href="link"
        target="_blank"
    >
        <img :src="image" :style="isRound ? 
            {backgroundColor: bgColor, borderRadius:'32px' } : 
            {backgroundColor: bgColor}"/>
    </a>
</template>

<script>

    export default {
        name: 'ImageLinkObject',
        props: {
            link: String,
            image: String,
            bgColor: {
                type: String,
                default: 'transparent'
            },
            isRound: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style scoped>

</style>