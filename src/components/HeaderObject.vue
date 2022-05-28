<template>
    <div class="container">
        <header>
            <h1> {{text}}</h1>
            <ImageLinkObject 
                link="https://www.linkedin.com/in/justin-k-man/"
                :image="icons.mdiLinkedin"
                />
            <ImageLinkObject 
                link="https://github.com/Drqrd/"
                :image="icons.mdiGithub"
                />
        </header>
    </div>
    
</template>

<script>
import ImageLinkObject from './ImageLinkObject'
import { mdiLinkedin } from '@mdi/js'; 
import {mdiGithub } from '@mdi/js'; 

export default {
    name: 'HeaderObject',
    components: {
        ImageLinkObject,
    },
    data: () => ({
        icons: {
            mdiLinkedin,
            mdiGithub,
        }
    }),
    props: {
        text: {
            type: String,
            default: 'Default Header'
        }
    }
    
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container {
    width:100%;
    }

</style>