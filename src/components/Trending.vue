<template>
    <div id="trending">
        <v-row>
            <v-col cols="12" sm="12" md="8">
                <div class="section-title-div pb-3" width="100%">
                    <span class="section-title">
                        <v-icon class="pr-3">mdi-flash</v-icon>
                        <span class="section-title-text pb-4 pr-3">Trending</span>
                    </span>
                </div>
            </v-col>
        </v-row>
        <v-row class="trendingItems">
            <v-col cols="12" sm="12" class="pb-0" v-for="trending in trendings" :key="trending.id">
                <v-card
                    class="mx-auto"
                    max-width="100%"
                >
                    <v-list-item two-line class="pr-0">
                        <v-list-item-avatar
                            tile
                            size="80"
                        >
                            <v-img
                                :src="trending.url"
                            >
                            </v-img>
                        </v-list-item-avatar>
                        
                        <v-list-item-content>
                            <p class="">
                                <small>{{trending.category}}</small>
                            </p>
                            <v-list-item-title class="text-p font-weight-thin my-3" style="line-height:1.5 !important">
                                <router-link to="">
                                    {{trending.title}}
                                </router-link>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>  
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Trending", 
        data: () => ({
            trendings: [
                {
                    id: 1, 
                    title: 'GivingTuesday Starling Collective Fellowship 2021', 
                    category: 'FELLOWSHIPS', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents1.jpg'), 
                }, 
                {
                    id: 2, 
                    title: 'GivingTuesday Starling Collective Fellowship 2021', 
                    category: 'FELLOWSHIPS',  
                    url: require('../assets/image/upcommingEvents/TrendingEvents2.jpg'), 
                },
                {
                    id: 3, 
                    title: 'Danish Government Scholarships 2022 in the University of Copenhagen (UCPH)', 
                    category: 'MASTERS/POST GRADUATE', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents3.jpg'), 
                },
                {
                    id: 4, 
                    title: 'Westerwelle Foundation Young Founders Programme Autumn 2021', 
                    category: 'FELLOWSHIPS', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents4.jpg'), 
                },
                {
                    id: 5, 
                    title: '2021 Call for Applications :: Cambridge-Africa ALBORADA Research Fund', 
                    category: 'GRANT', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents2.jpg'), 
                },
                {
                    id: 6, 
                    title: 'The African Arguments Pilot Fellowship 2021 for Young Freelancers', 
                    category: 'FELLOWSHIPS', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents1.jpg'), 
                },
                {
                    id: 7, 
                    title: 'Youth World Cup 2021 By Global Peace Chain',
                    category: 'AWARDS', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents4.jpg'), 
                },
                {
                    id: 8, 
                    title: '23RD ASEF SUMMER UNIVERSITY HACKATHON', 
                    category: 'COMPETITIONS',  
                    url: require('../assets/image/upcommingEvents/TrendingEvents3.jpg'), 
                }
            ],
        }),

    }
</script>