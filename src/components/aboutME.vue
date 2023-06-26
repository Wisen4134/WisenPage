<template>
    <!--  -->
    <v-row>
        <v-col>
            <v-card variant="outlined"  >
                <v-img
                max-height="200"
                
                src="me2.jpg"
                >
                
                </v-img>
                <v-card-item title="黃宇呈(Wisen)" subtitle="Software Engineer"></v-card-item>
                <v-card-text class="font-weight-black ">
                    about me 
                </v-card-text>
            </v-card>
        </v-col>
        <v-col>
            <v-card variant="outlined" >
                <v-img
                max-height="200"
                cover
                src="https://fastly.picsum.photos/id/370/350/165.jpg?hmac=i2447GIC_tl7nNTGXlB16Kdux2Bb_TlKXVQj1D1cTDE"
                >
                
                </v-img>
                <v-card-item title="Skills" subtitle="Subtitle1"></v-card-item>
                <v-card-text class="font-weight-black">
                    some skill
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, reactive } from 'vue'


</script>

<style scoped></style>