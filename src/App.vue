<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'

//app-bar按鈕
const menus = ref([{ value: 1, routerName: '/', title: '首頁', icon: 'mdi-home-variant-outline' },
{ value: 2, routerName: 'project', title: '作品集', icon: ' mdi-book-open-outline' },
{ value: 3, routerName: 'contact', title: '聯絡我', icon: 'mdi-phone' }]);

const appIcons = ref([{value:1,link:''}]);

//切換Theme
const theme = ref('light');
const themeText = ref('Day');
function changeTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  themeText.value = themeText.value === 'Day' ? 'Night' : 'Day'
}



</script>

<template>
  <v-app :theme="theme">
    <v-app-bar 
    app 
    color="indigo" 
    scroll-behavior="hide"  
    density="compact" 
    :elevation="2" 
    rounded 
    
    >
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon
        
        >
          <v-icon>mdi-alpha-w-circle</v-icon>
          </v-app-bar-nav-icon>
        <v-app-bar-title class="title-color">
          Wisen`s Page
        </v-app-bar-title>
        <v-spacer></v-spacer>
        
        <v-btn icon href="https://github.com/Wisen4134" target="blank">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn icon href="https://www.linkedin.com/in/%E5%AE%87%E5%91%88-%E9%BB%83-3908781a7/" target="blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        
        <v-btn icon href="https://www.cakeresume.com/me/wisen-huang-wisenb" target="blank">
          <v-icon>mdi-cake-variant</v-icon>
        </v-btn>
      </v-container>
      <v-btn :prepend-icon="theme === 'light'?'mdi-weather-sunny' :'mdi-weather-night'"
              @click="changeTheme"
        >
          <v-text>{{ themeText }}</v-text>
        </v-btn>
    </v-app-bar>
    <v-main>

      <v-row justify="space-around">
        <v-col id="menus" v-for="item in menus" :key="item.key" :name="item.value">
          <v-btn block text  @click="$router.push(item.routerName)" color="blue-lighten-5">
            <v-icon>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-col>

      </v-row>
      <div id="app">
        <RouterView />
      </div>

    </v-main>
  </v-app>
</template>

<style scoped>
#menus  {
  padding-left: 0%;
  padding-right: 0%;
}
</style>
