<template>
    <!--  -->
    <v-row>
        <v-col v-for="item in items" :key="item.key" :name="item.value">
            <v-card variant="outlined" height="100%">
                <v-img
                max-height="200"
                cover
                :src="item.imgSrc"
                ></v-img>
                <v-card-item class="font-weight-bold" :title="item.cardTitle" :subtitle="item.cardSubTitle"></v-card-item>
                <v-card-text class="font-weight-medium text-left">{{ item.cardText1 }}<br>{{ item.cardText2 }}<br>{{ item.cardText3 }}<br>{{ item.cardText4 }}<br></v-card-text>
            </v-card>
        </v-col>
        
    </v-row>
</template>

<script setup>
import { ref, reactive } from 'vue'
const items = ref([
    {value:1,imgSrc:'me.jpg',cardTitle:'黃宇呈(Wisen)',cardSubTitle:'Software Engineer',cardText1:`學歷：國立雲林科技大學電子工程系`,cardText2:`年資：2022/2 ~ now (1.5y)`,cardText3:`理想發展：Front-End、Back-End、Full-End、SW`,cardText4:'Hi,我是黃宇呈 現職為軟體工程師 在職期間參與許多專案開發,包含Winfrom、C#實現Gateway、桌面應用程式、Watchdog、C#實現定時推播訊息到Line等等,在2023年初接觸Web 藉由自學一個月DEMO出物業管理系統後台頁面 並開始增進Web Develop相關技能及技術 對於此領域的熱忱讓我有很多動力投入！',},
    {value:2,imgSrc:'skill.jpg',cardTitle:'Skills',cardSubTitle:'Framework & Technology',cardText1:`IDE：Visual Studio、VS Code`,cardText2:`Language：JavaScript、C#、SQL`,cardText3:`Framework：.Net6、.Net Framework 4.7.2 、.Net core、Vue、Vuetify`,cardText4:'Technology：HTML、CSS、Node.js、MSSQL、Modbus、DNP3、',},
])

</script>

<style scoped></style>