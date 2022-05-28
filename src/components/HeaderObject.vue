<template>
    <div class="container">
        <header>
            <h1> {{text}}</h1>
            <ImageLinkObject 
                link="https://www.linkedin.com/in/justin-k-man/"
                image="../assets/icon_linked_in.png"
                />
            <ImageLinkObject 
                link="https://github.com/Drqrd/"
                image="../assets/icon_github.png"
                />
        </header>
    </div>
    
</template>

<script>
import ImageLinkObject from './ImageLinkObject'

export default {
    name: 'HeaderObject',
    components: {
        ImageLinkObject,
    },
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