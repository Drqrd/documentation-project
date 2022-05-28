<template>
    <div class="icon">
        <a :href="link"
            target="_blank">
            <img :src="image"/>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'ImageLinkObject',
        props: {
            link: String,
            image: String
        }
    }
</script>

<style scoped>
a, img {
    width:100%;
    height:100%;
    border: transparent;
}

.icon {
    width:64px;
    height:64px;
}
</style>