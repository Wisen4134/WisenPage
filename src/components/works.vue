<template>
    <v-container fluid height="100%">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
            <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
                <v-card color="grey-lighten-1" :class="['ma-4', selectedClass]" height="200" width="100" @click="toggle">
                    <div class="d-flex fill-height align-center justify-center">
                        <v-scale-transition>
                            <v-icon v-if="isSelected" color="white" size="48" ></v-icon>
                        </v-scale-transition>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>

        <v-expand-transition>
            <v-sheet v-if="model != null" height="200">
                <div class="d-flex fill-height align-center justify-center">
                    <h3 class="text-h6">
                        Selected {{ model }}
                    </h3>
                </div>
            </v-sheet>
        </v-expand-transition>
    </v-container>
        
    
</template>

<script setup>
import {ref,reactive} from 'vue'

const model = ref(null);

const items = ref([
    {},
])

</script>

<style scoped>
body{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}
</style>