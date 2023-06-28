<template>
    <v-row   v-for="item in items" :key="item.key" :name="item.value">
        <v-col >
            <v-timeline line-thickness="10" class="mx-auto" align="center"  side="end">
                <v-timeline-item size="x-large" :icon=item.icon fill-dot dot-color="white" elevation="18">
                    
                    <v-card  class="elevation-10" width="200"  >
                        <v-card-title class="text-h5">
                            {{ item.title }}
                        </v-card-title>
                        <v-card-text><a :href=item.link target="_blank">{{item.link}}</a></v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, reactive } from 'vue'

const items = ref([
    { value: 1, title: "Github", link: "https://github.com/Wisen4134", icon: "mdi-github", },
    { value: 2, title: "Linkedin", link: "https://www.linkedin.com/in/%E5%AE%87%E5%91%88-%E9%BB%83-3908781a7/", icon: "mdi-linkedin", },
    { value: 3, title: "CakeResume", link: "https://www.cakeresume.com/me/wisen-huang-wisenb", icon: "mdi-cake-variant", },
    { value: 4, title: "Email", link: "break4134@gmail.com", icon: "mdi-email", },
    { value: 5, title: "Phone", link: "0932-xxx-xxx", icon: "mdi-cellphone", },
]);


</script>

<style scoped>


</style>