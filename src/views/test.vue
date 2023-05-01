<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <v-sheet color="grey-lighten-4" class="pa-4">
                <v-avatar class="mb-4"  image='./assets/wisen.jpg' size="64"></v-avatar>

                <div>Wisen`s Page</div>
            </v-sheet>

            <v-divider></v-divider>

            <v-list>
                <v-list-item v-for="[icon, text] in links" :key="icon" link>
                    <template v-slot:prepend>
                        <v-icon>{{ icon }}</v-icon>
                    </template>

                    <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container class="py-8 px-6" fluid>
                <v-row>
                    <v-col  cols="12">
                        <RouterView/>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import {ref,reactive} from 'vue'
    
    const drawer = ref(null);
    const links = reactive([['mdi-book-open-outline', '作品集'],
            ['mdi-alpha-w-box', '關於我']]);

            
        
</script>