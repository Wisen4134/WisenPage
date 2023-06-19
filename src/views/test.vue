<template>
    <h1>
        我是測試頁
    </h1>
</template>

<script setup>
import {ref,reactive} from 'vue'
    
    const drawer = ref(null);
    const links = reactive([['mdi-book-open-outline', '作品集'],
            ['mdi-alpha-w-box', '關於我']]);

            
        
</script>