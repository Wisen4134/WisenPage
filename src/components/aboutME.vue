<template>
    <!--  -->
    <v-row>
        <v-col md="6" offset-md="3" sm="0" xs="0" v-for="item in meCards" :key="item.key" :name="item.value">
            <v-hover v-slot="{ isHovering, props }" close-delay="50">
                <v-card variant="tonal" height="100%" color="" :elevation="isHovering ? 16 : 2"
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
                                    <v-col >
                                        <v-chip v-for="n in card.content" variant="elevated" >
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
</template>

<script setup>
import { ref, reactive } from 'vue'
const meCards = ref([
    { value: 1, imgSrc: 'me.jpg', cardTitle: '黃宇呈(Wisen)', cardSubTitle: 'Software Engineer', cardText: 'Hi,我是黃宇呈 現職為軟體工程師 在職期間參與許多專案開發,包含Winfrom、C#實現Gateway、桌面應用程式、Watchdog、C#實現定時推播訊息到Line等等,在2023年初接觸Web 藉由自學一個月DEMO出物業管理系統後台頁面 並開始增進Web Develop相關技能及技術 對於此領域的熱忱讓我有很多動力投入！', },
    //{ value: 2, imgSrc: 'skill.jpg', cardTitle: 'Skills', cardSubTitle: 'Framework & Technology', cardText1: `IDE：Visual Studio、VS Code`, cardText2: `Language：JavaScript、C#、SQL`, cardText3: `Framework：.Net6、.Net Framework 4.7.2 、.Net core、Vue、Vuetify`, cardText4: 'Technology：HTML、CSS、Node.js、MSSQL、Modbus、DNP3、', },
])
const littleCards = ref([
    { value: 1, iconClass: "text-center ", icon: "mdi-briefcase", cardTitleClass: "text-center font-weight-bold", cardTitle: "Seniority", textClass: "text-center font-weight-bold ", content: ["1 - 2 Years"], },
    { value: 2, iconClass: "text-center ", icon: "mdi-semantic-web", cardTitleClass: "text-center font-weight-bold", cardTitle: "Projects", textClass: "text-center font-weight-bold ", content: ["5+"], },
    { value: 3, iconClass: "text-center ", icon: "mdi-bullseye-arrow", cardTitleClass: "text-center font-weight-bold", cardTitle: "Targets", textClass: "text-center font-weight-bold  ", content: ["Full-Stack"], },
    { value: 4, iconClass: "text-center ", icon: "mdi-sprout", cardTitleClass: "text-center font-weight-bold", cardTitle: "Environments", textClass: "text-center font-weight-bold text-caption", content: ["VS 2022 &Code"], },
])

</script>

<style scoped></style>