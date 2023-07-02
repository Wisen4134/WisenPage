<template>
    <!--  -->
    <v-row>
        <v-col md="6" offset-md="3" sm="0" xs="0" v-for="item in meCards" :key="item.key" :name="item.value">
            <v-hover v-slot="{ isHovering, props }" close-delay="50">
                <v-card  variant="tonal" height="100%" color="" :elevation="isHovering ? 16 : 2"
                    :class="{ 'on-hover': isHovering }" v-bind="props">
                    <v-img max-height="200" cover :src="item.imgSrc"></v-img>
                    <v-card-title class="font-weight-black text-center text-h5">
                        <v-text>
                            {{ item.cardTitle }}
                        </v-text>
                    </v-card-title>

                    <v-card-subtitle class="font-weight-black text-center text-subtitle-1">
                        <v-text>
                            {{ item.cardSubTitle }}
                        </v-text>
                    </v-card-subtitle>

                    <v-card-text class="font-weight-bold text-justify mx-0">
                        {{ item.cardText }}
                    </v-card-text>
                </v-card>
            </v-hover>
        </v-col>
    </v-row>

    <v-row>
        <v-col md="0" offset-md="3" sm="0" xs="0">
            <v-row>
                <v-col md="2" offset-md="0" v-for="card in littleCards">
                    <v-hover v-slot="{ isHovering, props }" close-delay="50">
                        <v-card variant="tonal" height="100%" :elevation="isHovering ? 16 : 2"
                            :class="{ 'on-hover': isHovering }" v-bind="props">
                            <v-card-title :class="card.iconClass">
                                <v-icon>
                                    {{ card.icon }}
                                </v-icon>
                            </v-card-title>
                            <v-card-subtitle :class="card.cardTitleClass">
                                {{ card.cardTitle }}
                            </v-card-subtitle>
                            <v-card-text :class="card.textClass">
                                <v-row>
                                    <v-col>
                                        <v-chip v-for="n in card.content" variant="outlined">
                                            <v-text>
                                                {{ n }}

                                            </v-text>
                                        </v-chip>
                                    </v-col>
                                </v-row>


                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>




        </v-col>

    </v-row>
    <v-row>
        <v-col>
            <v-divider thickness="4"></v-divider>

        </v-col>
    </v-row>
    <v-row>

        <v-container fluid class="py-0 ">

            <div class="d-flex justify-center ">

                <v-text class="text-h4 font-weight-bold">Skills</v-text>
            </div>
        </v-container>

        <v-col md="0" offset-md="3" sm="0" xs="0" class="mb-8">
            <v-row >
                <v-col md="4" v-for="skill in skillCards" class="mb-4 "  >
                    <v-text class="text-center text-h6 font-weight-bold d-flex justify-center">{{ skill.topText }}</v-text>
                    <v-card class="pa-5  " variant="outlined" height="" 
                        :color="themeData.theme === 'light' ? 'blue' : 'indigo-lighten-5'">

                        <v-row  >
                            <v-col v-for="item in skill.skills " >
                                <v-chip  variant="elevated" :color="themeData.theme === 'light' ? 'indigo-lighten-4' : 'black'">
                                    {{ item.skillName }}
                                </v-chip>
                                

                            </v-col>
                            
                        </v-row>

                    </v-card>


                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useTheme from "@/stores/theme"
// pinia內state
const themeData = useTheme();

// 個人介紹那張
const meCards = ref([
    { value: 1, imgSrc: 'me.jpg', cardTitle: '黃宇呈(Wisen)', cardSubTitle: 'Software Engineer', cardText: 'Hi我是黃宇呈！大學就讀電子工程系並以IC Design為進修方向，但後來對於程式相關有興趣故開始自我精進。現職為軟體工程師，在職期間參與許多專案開發包含Winfrom、C#實現Gateway、桌面應用程式、Watchdog監測程式、C#搭配ORM串接MSSQL取值回前端並能夠匯出CSV至本地、C#實現定時推播資料庫內資訊到Line等等。在2023年初接觸Web藉由下班時間自學相關領域的技術，在一個月內DEMO出物業管理系統後台頁面並開始增進Web Develop相關技能及技術，對於此領域的熱忱讓我有很多動力投入！', },
    //{ value: 2, imgSrc: 'skill.jpg', cardTitle: 'Skills', cardSubTitle: 'Framework & Technology', cardText1: `IDE：Visual Studio、VS Code`, cardText2: `Language：JavaScript、C#、SQL`, cardText3: `Framework：.Net6、.Net Framework 4.7.2 、.Net core、Vue、Vuetify`, cardText4: 'Technology：HTML、CSS、Node.js、MSSQL、Modbus、DNP3、', },
])

// 底下經歷、專案、目標、環境那張
const littleCards = ref([
    {   value: 1, 
        iconClass: "text-center ", 
        icon: "mdi-briefcase", 
        cardTitleClass: "text-center font-weight-bold", 
        cardTitle: "Seniority", 
        textClass: "text-center font-weight-bold ", 
        content: ["1 - 2 Years"], 
    },
    {   value: 2,
         iconClass: "text-center ", 
         icon: "mdi-semantic-web", 
         cardTitleClass: "text-center font-weight-bold", 
         cardTitle: "Projects", 
         textClass: "text-center font-weight-bold ", 
         content: ["5+"], 
    },
    { value: 3, 
        iconClass: "text-center ", 
        icon: "mdi-bullseye-arrow", 
        cardTitleClass: "text-center font-weight-bold", 
        cardTitle: "Targets", 
        textClass: "text-center font-weight-bold  ", content: ["Full-Stack"], },
    { value: 4, iconClass: "text-center ", icon: "mdi-sprout", cardTitleClass: "text-center font-weight-bold", cardTitle: "Environments", textClass: "text-center font-weight-bold text-caption", content: ["VS 2022 &Code"], },
])

// 技能
const skillCards = ref([
    {
        value: 1, 
        topText: 'Front-End', 
        skills: [
            { skillName: 'HTML & CSS', skillProficiency: 'Qualified', },
            { skillName: 'SASS/SCSS', skillProficiency: 'Elementary', },
            { skillName: 'JavaScript', skillProficiency: 'Elementary', },
            { skillName: 'Vue', skillProficiency: 'Qualified', },
            { skillName: 'Vuetify', skillProficiency: 'Medium', },
        ]
    },
    {
        value: 2, 
        topText: 'Back-End', 
        skills: [
            { skillName: 'C#', skillProficiency: 'Medium', },
            { skillName: '.Net 6', skillProficiency: 'Medium', },
            { skillName: '.Net FrameWork', skillProficiency: 'Medium', },
            { skillName: 'MSSQL', skillProficiency: 'Medium', },
            { skillName: 'Git', skillProficiency: 'Skilful', },
            { skillName: 'EF Core', skillProficiency: 'Elementary', },
            { skillName: 'Node.js', skillProficiency: 'Elementary', },
            { skillName: 'Express', skillProficiency: 'Elementary', },
        ]
    },
])

</script>

<style scoped></style>