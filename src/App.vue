
<template>
  <v-app :theme="theme">
    <v-app-bar color="#B2DFDB" scroll-behavior="hide" scroll-threshold="100" density="compact" :elevation="2"
      theme="light">


      <v-app-bar-title>
        <v-icon>
          mdi-alpha-w-circle
        </v-icon>

        Wisen`s Page

        <v-btn v-for="item in menus" :key="item.key" :name="item.value" variant="text"
          @click="$router.push(item.routerName)" color="#E0F2F1" rounded="false">
          <v-icon color="#00796B">{{ item.icon }}</v-icon>
          <v-text class="text-black text-subtitle-1 font-weight-medium">{{ item.title }}</v-text>
        </v-btn>
      </v-app-bar-title>




      <v-btn variant="text" :icon="theme === 'light' ? 'mdi-weather-night ' : 'mdi-weather-sunny'" @click="changeTheme">

      </v-btn>


      <!-- -->



    </v-app-bar>
    <v-main class="d-flex align-start justify-center h-auto w-auto">

      <v-container fluid class="mx-10 w-auto ">
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
            <div id="app">
              <RouterView />
            </div>
          </v-col>
        </v-row>

      </v-container>


    </v-main>

    <v-footer class=" d-flex flex-column bg-indigo-lighten-1">
      <div class="align-center px-4">

        <v-btn v-for="appicon in appIcons" variant="text" icon :key="appicon.key" :name="appicon.value"
          :href="appicon.link" target="_blank">
          <v-icon>{{ appicon.icon }}</v-icon>
        </v-btn>
      </div>







    </v-footer>



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
  { value: 1, link: 'https://github.com/Wisen4134', icon: 'mdi-github', },
  { value: 2, link: 'https://www.linkedin.com/in/%E5%AE%87%E5%91%88-%E9%BB%83-3908781a7/', icon: 'mdi-linkedin', },
  { value: 3, link: 'https://www.cakeresume.com/me/wisen-huang-wisenb', icon: 'mdi-cake-variant', },
]);

//切換Theme
const theme = ref('light');
const themeText = ref('Day');
function changeTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  themeText.value = themeText.value === 'Day' ? 'Night' : 'Day'
}

const tab = ref(null);

const icons = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
])

</script>


<style scoped></style>
