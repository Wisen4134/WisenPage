
<template>
  <v-app :theme="theme" >
    <v-app-bar 
    app 
    color="#B2DFDB" 
    scroll-behavior="hide"  
    density="compact" 
    :elevation="2" 
    rounded 
    theme="light"
    >
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon
        icon="mdi-alpha-w-circle"
        
        
        >
          
          </v-app-bar-nav-icon>
        <v-app-bar-title >
          Wisen`s Page
        </v-app-bar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon v-for="appicon in appIcons" :key="appicon.key" :name="appicon.value" :href="appicon.link" target="_blank">
          <v-icon >{{appicon.icon}}</v-icon>
        </v-btn>
        
      </v-container>
      <v-btn :prepend-icon="theme === 'light'?'mdi-weather-sunny' :'mdi-weather-night'"
              @click="changeTheme"
        >
          <v-text >{{ themeText }}</v-text>
        </v-btn>
    </v-app-bar>
    <v-main >

      <v-row justify="space-around" >
        <v-col id="menus" v-for="item in menus" :key="item.key" :name="item.value">
          <v-btn variant="outlined" block  @click="$router.push(item.routerName)" color="#E0F2F1" rounded="false">
            <v-icon color="#00796B">{{ item.icon }}</v-icon>
            <v-text class="text-teal-darken-2 text-subtitle-1 font-weight-medium">{{ item.title }}</v-text>
          </v-btn>
        </v-col>

      </v-row>
      <div id="app" >
        <RouterView />
      </div>

    </v-main>
  </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'

//app-bar按鈕
const menus = ref([{ value: 1, routerName: '/', title: '首頁', icon: 'mdi-home-variant-outline' },
{ value: 2, routerName: 'project', title: '作品集', icon: ' mdi-book-open-outline' },
{ value: 3, routerName: 'contact', title: '聯絡我', icon: 'mdi-phone' }]);

const appIcons = ref([
  {value:1,link:'https://github.com/Wisen4134',icon:'mdi-github',},
  {value:2,link:'https://www.linkedin.com/in/%E5%AE%87%E5%91%88-%E9%BB%83-3908781a7/',icon:'mdi-linkedin',},
  {value:3,link:'https://www.cakeresume.com/me/wisen-huang-wisenb',icon:'mdi-cake-variant',},
]);

//切換Theme
const theme = ref('light');
const themeText = ref('Day');
function changeTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  themeText.value = themeText.value === 'Day' ? 'Night' : 'Day'
}



</script>


<style scoped>
#menus  {
  padding-left: 0%;
  padding-right: 0%;
}

</style>
