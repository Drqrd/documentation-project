<template>
    <div class="container">
        <header>
            <h1> {{text}}</h1>
            <span>
                <ImageLinkObject 
                link="https://www.linkedin.com/in/justin-k-man/"
                :image="icons.LinkedInIcon"
                />
                <ImageLinkObject 
                link="https://github.com/Drqrd/"
                :image="icons.GithubIcon"
                bgColor='white'
                isRound=true
                />
            </span>
            
        </header>
    </div>
    
</template>

<script>
import ImageLinkObject from './ImageLinkObject'
import GithubIcon from '../icons/icon_github.png'
import LinkedInIcon from '../icons/icon_linked_in.png'

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
    },
    data: () => ({
        icons: {
            GithubIcon,
            LinkedInIcon
        }
    })
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>