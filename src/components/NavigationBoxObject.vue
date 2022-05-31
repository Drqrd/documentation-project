<template>
    <div class="container">
        <ImageToObject :image="icons.VueIcon"></ImageToObject>
    </div>
</template>

<script>
import ImageToObject from '../components/ImageToObject.vue'

import VueIcon from '../icons/icon_vue.png'


export default {
    name: 'NavigationBoxObject',
    components: {
        ImageToObject,
    },
    data: ()=> ({
        icons:{
            VueIcon
        }
    })
}
</script>