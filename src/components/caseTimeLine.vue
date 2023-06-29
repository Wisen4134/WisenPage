<template>
    <v-row>
        <v-col>
            <v-container fluid>
                <div class="d-flex justify-center ">
                    <v-text class="text-h4 font-weight-bold">專案經歷</v-text>
                </div>
            </v-container>
        </v-col>
        
    </v-row>
    <v-row >
    <v-divider Color="info" thickness="2"></v-divider>

        <v-col >
            <v-container fluid class="w-auto h-auto " >
                <v-timeline  side="end">
                    <v-timeline-item v-for="n in 10" dot-color="purple-lighten-2" fill-dot size="default">
                        <v-hover v-slot="{ isHovering, props }" close-delay="50">
                            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
                                variant="outlined">
                                <v-card-title class="bg-purple-lighten-1">
                                    <v-icon size="large" class="me-4" icon="mdi-focus-auto"></v-icon>
                                    <v-text class="font-weight-light text-h6">AutoFocus</v-text>
                                    
                                </v-card-title>

                                <v-card-text class=" font-weight-bold text-center">
                                    <p>環境&技術：.Net framework 4.7.2 、 Visual Studio 2019 、ModbusRTU</p>
                                    <p>敘述：winform 撰寫使用文件 ModbusRTU 可讀寫指定路徑json 多執行緒、lock、mutex</p>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-timeline-item>

                    <!-- <v-timeline-item dot-color="amber-lighten-1" fill-dot size="x-small">
                        <v-hover v-slot="{ isHovering, props }" close-delay="200">
                            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
                                variant="outlined">
                                <v-card-title class="bg-amber-lighten-1 justify-end">
                                    <h2 class="me-4 font-weight-light">
                                        ESSGateway
                                    </h2>
                                    <v-icon size="large" icon="mdi-battery-charging-medium"></v-icon>
                                </v-card-title>
                                <v-card-text class=" font-weight-black text-center">
                                    待補完
                                </v-card-text>
                            </v-card>
                        </v-hover>

                    </v-timeline-item>

                    <v-timeline-item dot-color="cyan-lighten-1" fill-dot>
                        <v-hover v-slot="{ isHovering, props }" close-delay="200">
                            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
                                variant="outlined">
                                <v-card-title class="bg-cyan-lighten-1">
                                    <v-icon class="me-4" size="large" icon="mdi-monitor-eye"></v-icon>
                                    <h2 class="font-weight-light">
                                        WatchDog
                                    </h2>
                                </v-card-title>
                                <v-card-text class=" font-weight-black text-center">
                                    待補完
                                </v-card-text>
                            </v-card>
                        </v-hover>

                    </v-timeline-item>

                    <v-timeline-item dot-color="red-lighten-1" fill-dot size="x-small">
                        <v-hover v-slot="{ isHovering, props }" close-delay="200">
                            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
                                variant="outlined">
                                <v-card-title class="bg-red-lighten-1 justify-end">
                                    <h2 class="me-4 font-weight-light">
                                        Winform排程視窗
                                    </h2>
                                    <v-icon size="large" icon="mdi-table-cog"></v-icon>
                                </v-card-title>
                                <v-card-text class=" font-weight-black text-center">
                                    待補完
                                </v-card-text>
                            </v-card>
                        </v-hover>

                    </v-timeline-item>

                    <v-timeline-item dot-color="green-lighten-1" fill-dot>
                        <v-hover v-slot="{ isHovering, props }" close-delay="200">
                            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
                                variant="outlined">
                                <v-card-title class="bg-green-lighten-1">
                                    <v-icon class="me-4" size="large" icon="mdi-store-cog"></v-icon>
                                    <h2 class="font-weight-light">
                                        物業管理系統後台DEMO
                                    </h2>
                                </v-card-title>
                                <v-card-text class=" font-weight-black text-center">
                                    Vue3(optional API) + VueCLI + Vuetify
                                    根據業主需求文件自行使用draw.io構建畫面、使用者需求分析
                                    並進一步製作專案檔案、專案架構路由、API規劃整理、專案進度等文件
                                    藉由此專案步入Web的世界,開始自訂Web學習地圖,逐步接觸HTML、CSS、JS、Webpack、npm、Node.js、WebAPI、Vue、Vuetify

                                </v-card-text>
                            </v-card>
                        </v-hover>

                    </v-timeline-item>


                    <v-timeline-item dot-color="amber-lighten-1" fill-dot size="x-small">
                        <v-hover v-slot="{ isHovering, props }" close-delay="200">
                            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
                                variant="outlined">
                                <v-card-title class="bg-amber-lighten-1 justify-end">
                                    <h2 class="me-4 font-weight-light">
                                        Line-Webhook-.Net-MSSQL
                                    </h2>
                                    <v-icon size="large" icon="mdi-send-circle"></v-icon>
                                </v-card-title>
                                <v-card-text class=" font-weight-black text-center">
                                    嘗試使用介面實現OOP之依賴注入、依賴反轉之設計模式
                                    每小時推播內容至Line聊天室
                                </v-card-text>
                            </v-card>
                        </v-hover>

                    </v-timeline-item>

                    <v-timeline-item id="last" dot-color="purple-lighten-2" fill-dot>
                        <v-hover v-slot="{ isHovering, props }" close-delay="200">
                            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
                                variant="outlined">
                                <v-card-title class="bg-purple-lighten-2">
                                    <v-icon size="large" class="me-4" icon="mdi-download-circle-outline"></v-icon>
                                    <h2 class="font-weight-light">
                                        CsvDownload(Vue3-.Net6-MSSQL)
                                    </h2>
                                </v-card-title>

                                <v-card-text class=" font-weight-black text-center">
                                    前端頁面
                                    Vue3 + Vite + Vuetify
                                    日期選擇器 + 發送按鈕 + Csv下載按鈕 + 表格元件(可排序、顯示數量篩選)
                                    對後端發送api撈取資料回前端 做簡單處理後顯示在表格中 可點擊Csv下載按鈕將表格內容轉換成Csv後下載至本地 檔名為[yyyy-mm-dd.csv]
                                    後端部分
                                    .Net6環境 + WebApi專案 + EFCore(ORM)+ MSSQL 2019
                                    接收帶有日期的Api後,對資料庫篩選並撈取資料,回來後將Datetime格式的資料稍做處理(.Net date格式為yyyy-MM-ddTHH:mm:ss)
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-timeline-item> -->

                </v-timeline>
            </v-container>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, reactive } from 'vue'


const items = ref([{ size: 'default', dotColor: 'purple-lighten-2', cardColor: 'bg-purple-lighten-2', icon: 'mdi-focus-auto', title: 'AutoFocus', content: '', }])

</script>

<style scoped></style>