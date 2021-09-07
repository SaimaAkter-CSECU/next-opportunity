<template>
    <div id="trendingEvents">
        <v-row>
            <v-col cols="12" sm="12" md="8">
                <div class="section-title-div pb-3" width="100%">
                    <span class="section-title">
                        <v-icon class="pr-3">mdi-flash</v-icon>
                        <span class="section-title-text pb-4 pr-3">YO Report 2019</span>
                    </span>
                </div>
            </v-col>
        </v-row>
        <div class="mt-8">
            <a href="#">
                <v-img
                    :src="report"
                    width= "100%"
                ></v-img>
            </a>
        </div>
    </div>
</template>

<script>
    import reportImg from '../assets/image/upcommingEvents/Report.jpg'
    export default {
        name: "TrendingEvents", 
        data: () => ({
            report: reportImg,  
        }),

    }
</script>