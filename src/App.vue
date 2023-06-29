
<template>
  <v-app :theme="theme">
    <v-app-bar :color="barColor[0]" scroll-behavior="hide" scroll-threshold="100" density="compact" :elevation="0"
      theme="light">


      <v-app-bar-title>
        <v-icon>
          mdi-alpha-w-circle
        </v-icon>

        Wisen`s Page

        <v-btn v-for="item in menus" :key="item.key" :name="item.value" variant="text"
          @click="$router.push(item.routerName)" color="" rounded="false" class="ml-5">
          <v-icon color="" class="font-weight-bold">{{ item.icon }}</v-icon>
          <v-text class=" text-subtitle-1 font-weight-bold">{{ item.title }}</v-text>
        </v-btn>
      </v-app-bar-title>




      <v-btn variant="text" :icon="theme === 'light' ? 'mdi-weather-night ' : 'mdi-weather-sunny'" @click="changeTheme">

      </v-btn>


      <!-- -->



    </v-app-bar>
    <v-main :class="mainColor"  >

      <v-container fluid class="mx-10 w-auto " >
        <!-- <v-row>
          <v-col >
            <v-btn v-for="item in menus" :key="item.key" :name="item.value" variant="outlined"  @click="$router.push(item.routerName)" color="#E0F2F1" rounded="false">
              <v-icon color="#00796B">{{ item.icon }}</v-icon>
              <v-text class="text-teal-darken-2 text-subtitle-1 font-weight-medium">{{ item.title }}</v-text>
            </v-btn>
          </v-col>
        </v-row> -->
        <v-row>
          <v-col>
            <div id="app" >
              <RouterView />
            </div>
          </v-col>
        </v-row>

      </v-container>


    </v-main>

    <v-footer class=" " :color="barColor[1]">
      <v-row>
        
        <v-col class="d-flex flex-row justify-center ">
          

          <v-btn class="" v-for="appicon in appIcons" variant="text"  :key="appicon.key" :name="appicon.value"
          :href="appicon.link" target="_blank" >
          <v-icon size="x-large">{{ appicon.icon }}

          </v-icon>
          
          

        </v-btn>
        </v-col>
      </v-row> 
        
        
      
    </v-footer>
  </v-app>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'

//app-bar按鈕
const menus = ref([{ value: 1, routerName: '/', title: '首頁', icon: 'mdi-home-variant-outline' },
// { value: 2, routerName: 'project', title: '作品集', icon: ' mdi-book-open-outline' },
// { value: 3, routerName: 'contact', title: '聯絡我', icon: 'mdi-phone' },
]);

const appIcons = ref([
  { value: 1, link: 'https://github.com/Wisen4134', icon: 'mdi-github',text:'Github' },
  { value: 2, link: 'https://www.linkedin.com/in/%E5%AE%87%E5%91%88-%E9%BB%83-3908781a7/', icon: 'mdi-linkedin',text:'Linkedin' },
  { value: 3, link: 'https://www.cakeresume.com/me/wisen-huang-wisenb', icon: 'mdi-cake-variant',text:'CakeResume'},
]);

const mainColor = ref('bg-light-blue-lighten-5 d-flex align-start justify-center h-auto w-auto');
//切換Theme
const theme = ref('light');
const themeText = ref('Day');
function changeTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  themeText.value = themeText.value === 'Day' ? 'Night' : 'Day'
  mainColor.value = mainColor.value === 'bg-light-blue-lighten-5 d-flex align-start justify-center h-auto w-auto' ? 'bg-grey-darken-4 d-flex align-start justify-center h-auto w-auto' : 'bg-light-blue-lighten-5 d-flex align-start justify-center h-auto w-auto'
  barColor.value[0] = barColor.value[0] === 'light-blue-lighten-5' ? 'grey-darken-4' : 'light-blue-lighten-5'
  barColor.value[1] = barColor.value[1] === 'light-blue-lighten-5' ? 'grey-darken-4' : 'light-blue-lighten-5'
}

const barColor = ref([
  'light-blue-lighten-5',
  'light-blue-lighten-5',
])

const tab = ref(null);



</script>


<style scoped></style>
