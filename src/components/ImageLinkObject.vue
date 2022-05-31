<template>
    <a  :href="link"
        target="_blank"
    >
        <img :src="image" :style="isRound ? 
            {backgroundColor: bgColor, borderRadius:'64px' } : 
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
    a, img {
        margin-left:5px;
        margin-right:5px;
    }
    img {
        max-height: 64px;
        max-width: 64px;
    }
</style>