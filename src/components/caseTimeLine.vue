<template>
    <v-row>
        <v-col>
        <v-divider thickness="4"></v-divider>
            
        </v-col>

    </v-row>
    <v-row>

        
            <v-container fluid class="py-0">
                
                <div class="d-flex justify-center ">
                    
                    <v-text class="text-h4 font-weight-bold">Project Experience</v-text>
                </div>
            </v-container>
        
        

        <v-col md="6" offset-md="3" sm="0" xs="0" class="py-0" >
            <v-container fluid class="py-0">
                <v-timeline side="end" align="start" class="">
                    <v-timeline-item v-for="item in items" :dot-color="item.dotColor" :size="item.dotSize"
                        :icon="item.dotIcon" class="w-auto ma-10 " fill-dot>
                        <v-hover v-slot="{ isHovering, props }" close-delay="50">
                            <v-card :elevation="isHovering ? 16 : 2" :class="{ 'on-hover': isHovering, }" v-bind="props"
                                :variant="item.cardVariant" >
                                <v-img :src="item.cardImgSrc" height="200px" cover></v-img>
                                <v-card-title class="text-center">

                                    <v-row>
                                        <v-col>
                                            <v-icon size="large" class="mr-2" :icon="item.cardTitleIcon"></v-icon>
                                            <v-text class="font-weight-medium text-h5 ">{{ item.cardTitle }}</v-text>
                                        </v-col>
                                    </v-row>


                                </v-card-title>
    
                                    <v-row>

                                        <v-col>

                                            <v-card-text class=" font-weight-medium text-justify ">
                                                {{ item.cardText }}

                                            </v-card-text>


                                        </v-col>

                                    </v-row>
                                




                                



                            </v-card>
                        </v-hover>
                    </v-timeline-item>



                </v-timeline>
            </v-container>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useTheme from "@/stores/theme"
const themeData = useTheme();

const cardTextShow = ref(false);

const items = ref([
    { dotColor: '', dotSize: 'x-small', dotIcon: '', cardVariant: 'tonal', cardImgSrc: 'autofocus.jpg', cardColor: '', cardTitle: 'AutoFocus', cardTitleIcon: 'mdi-focus-auto', cardText: 'Winform應用程式,與實體機台藉由RS485、ModbusRTU進行通訊、指令下達、定時讀取資訊。主要由MainPage、DrawingPage、PortPage組成。MainPage可讓User選擇連接電腦COMPort及基本操作;DrawingPage可藉由Chart實現繪圖並輸出圖片至本地;PortPage則顯示機台各項基本參數並能夠設定、匯出/匯入參數JSON。此專案在UI/UX方面完善並獨力製作軟體使用手冊。', },
    { dotColor: '', dotSize: 'x-small', dotIcon: '', cardVariant: 'tonal', cardImgSrc: 'gateway.jpg', cardColor: '', cardTitle: 'V-Gateway', cardTitleIcon: 'mdi-swap-horizontal', cardText: '專案網路結構為Platform(DNP3) - Gateway(Modbus) - Virtual Gateway(Server/Client) - device(Modbus)。主控台應用程式,主功能為轉發封包、邏輯處理、資料解析轉換、Data定時備份至DB等。既是Server也是Client,藉由Config.ini、AppSetting.json決定要轉發的Device Ip、要建立的連線數、DB連線字串等。 搭配Watchdog確保主程式穩定運行,再藉由編寫bat檔 & Windows排程實現定時檢查WatchDog是否運行、開機自動執行主程式 & Watchdog、每月將DB內容備份至本地並清除DB。', },
    { dotColor: '', dotSize: 'x-small', dotIcon: '', cardVariant: 'tonal', cardImgSrc: 'watchdog.jpg', cardColor: '', cardTitle: 'WatchDog', cardTitleIcon: 'mdi-dog', cardText: '監測程式,透過指定檔案判斷目標程式是否正常運行,假如偵測到指定檔案不存在、指定檔案更動等條件,舊將目標程式關閉並重啟,後搭配bat File & Windows排程,實現開機自動執行、每天偵測監測程式是否執行。', },
    { dotColor: '', dotSize: 'x-small', dotIcon: '', cardVariant: 'tonal', cardImgSrc: 'pmsystem.jpg', cardColor: '', cardTitle: 'PMSystem', cardTitleIcon: 'mdi-laptop', cardText: '初次接觸Web,獨自從事前規劃開始開發,包含閱讀需求文件並詳列功能需求、開發流程、前置作業、路由規劃、前端資料夾架構、Draw.io規劃UI介面、使用者使用路徑、開發狀態、資料庫結構、API等。因初入Web,故最初前置作業為規劃Web學習地圖並進入至Vue,再開始使用Vuetify督出Demo畫面,主功能為物業管理系統後台,預計完整狀態必須具有基礎登入/登出、根據登入者權限隱藏可視物件及操作範圍、顯示後端回傳之資料並能夠執行CRUD及列印。最後因外力因素造成專案停滯、腰斬,故沒有繼續開發大部分功能。', },
    { dotColor: '', dotSize: 'x-small', dotIcon: '', cardVariant: 'tonal', cardImgSrc: 'fixvalue.jpg', cardColor: '', cardTitle: 'FixValue', cardTitleIcon: 'mdi-auto-fix', cardText: '前端由Vuetify構建,具有DatePicker、搜尋按鈕、下載CSV按鈕、表格,可藉由日期選擇期指定月日時分,並組成api再透過搜尋按鈕發送API至後端,以原生JS解析處理回傳資料並顯示至畫面,可透過下載按鈕載至本地。 後端由.Net6 & EF Core(ORM) & MSSQL構建,取自前端來的API,解析參數使用LinQ過濾並透過ORM查詢資料庫,撈取Data再做時間字串上的處理後回傳前端。 資料庫部分,規劃資料表架構後塞入假資料,以一秒為單位建立六月份整月資料。', },
    { dotColor: '', dotSize: 'x-small', dotIcon: '', cardVariant: 'tonal', cardImgSrc: 'hoursending.jpg', cardColor: '', cardTitle: 'Hour Send', cardTitleIcon: 'mdi-send-clock', cardText: '主控台應用程式,以OOP介面、依賴注入、依賴反轉設計模式實現。 定時從DB撈取資料並經處理後組成訊息字串,再透過Http Client發送Api給IFTTT的Webhook,將所要推播之訊息傳至LINE。', },

])

</script>

<style scoped></style>