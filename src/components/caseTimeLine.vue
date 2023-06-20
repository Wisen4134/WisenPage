<template>
    <div class="d-flex justify-center bg-surface-variant">
        <h1>專案經歷</h1>
    </div>
        
    <v-timeline>
        <v-timeline-item dot-color="purple-lighten-2" fill-dot>
            <v-hover
                v-slot="{isHovering,props}"
                close-delay="200"
            >
                <v-card
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
                >
                    <v-card-title class="bg-purple-lighten-2">
                        <v-icon size="large" class="me-4" icon="mdi-focus-auto"></v-icon>
                        <h2 class="font-weight-light">
                            AutoFocus
                        </h2>
                    </v-card-title>

                    <v-card-text>
                        環境&技術：.Net framework 4.7.2 、 Visual Studio 2019 、ModbusRTU
                        <br>
                        敘述：
                    </v-card-text>
                </v-card>
            </v-hover>
        </v-timeline-item>

        <v-timeline-item dot-color="amber-lighten-1" fill-dot size="x-small">
            <v-hover
                v-slot="{isHovering,props}"    
                close-delay="200"
            >
                <v-card
                    :elevation="isHovering ? 16 : 2"
                    :class="{ 'on-hover': isHovering }"
                    v-bind="props"
                >
                    <v-card-title class="bg-amber-lighten-1 justify-end">
                        <h2 class="me-4 font-weight-light">
                            ESSGateway
                        </h2>
                        <v-icon size="large" icon="mdi-battery-charging-medium"></v-icon>
                    </v-card-title>
                    <v-card-text>
                        待補完
                    </v-card-text>
                </v-card>
            </v-hover>
            
        </v-timeline-item>

        <v-timeline-item dot-color="cyan-lighten-1" fill-dot>
            <v-card>
                <v-card-title class="bg-cyan-lighten-1">
                    <v-icon class="me-4" size="large" icon="mdi-monitor-eye"></v-icon>
                    <h2 class="font-weight-light">
                        WatchDog
                    </h2>
                </v-card-title>
                <v-card-text>
                    待補完
                </v-card-text>
            </v-card>
        </v-timeline-item>

        <v-timeline-item dot-color="red-lighten-1" fill-dot size="x-small">
            <v-card>
                <v-card-title class="bg-red-lighten-1 justify-end">
                    <h2 class="me-4 font-weight-light">
                        Winform排程視窗
                    </h2>
                    <v-icon size="large" icon="mdi-table-cog"></v-icon>
                </v-card-title>
                <v-card-text>
                    待補完
                </v-card-text>
            </v-card>
        </v-timeline-item>

        <v-timeline-item dot-color="green-lighten-1" fill-dot>
            <v-card>
                <v-card-title class="bg-green-lighten-1">
                    <v-icon class="me-4" size="large" icon="mdi-store-cog"></v-icon>
                    <h2 class="font-weight-light">
                        PMSystem
                    </h2>
                </v-card-title>
                <v-card-text>
                    待補完
                </v-card-text>
            </v-card>
        </v-timeline-item>


        <v-timeline-item dot-color="amber-lighten-1" fill-dot size="x-small">
            <v-hover
                v-slot="{isHovering,props}"    
                close-delay="200"
            >
                <v-card
                    :elevation="isHovering ? 16 : 2"
                    :class="{ 'on-hover': isHovering }"
                    v-bind="props"
                >
                    <v-card-title class="bg-amber-lighten-1 justify-end">
                        <h2 class="me-4 font-weight-light">
                            HourSending
                        </h2>
                        <v-icon size="large" icon="mdi-send-circle"></v-icon>
                    </v-card-title>
                    <v-card-text>
                        待補完
                    </v-card-text>
                </v-card>
            </v-hover>
            
        </v-timeline-item>

        <v-timeline-item dot-color="purple-lighten-2" fill-dot>
            <v-hover
                v-slot="{isHovering,props}"
                close-delay="200"
            >
                <v-card
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
                >
                    <v-card-title class="bg-purple-lighten-2">
                        <v-icon size="large" class="me-4" icon="mdi-download-circle-outline"></v-icon>
                        <h2 class="font-weight-light">
                            CsvDownload(Vue3-.Net6-MSSQL)
                        </h2>
                    </v-card-title>

                    <v-card-text>
                        環境&技術：.Net 6、 Visual Studio 2022 、EFcore
                        <br>
                        敘述：
                    </v-card-text>
                </v-card>
            </v-hover>
        </v-timeline-item>
        
        
    </v-timeline>
</template>

<script setup>
import { ref, reactive } from 'vue'





</script>
<style scoped></style>