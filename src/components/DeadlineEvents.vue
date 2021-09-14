<template>
    <div id="deadlineEvents">
        <v-row>
            <v-col cols="12" sm="12" md="6" class="mb-2" v-for="deadlineEvent in deadlineEvents" :key="deadlineEvent.id">
                <v-card
                    class="mx-auto"
                    max-width="100%"
                >
                    <v-list-item three-line class="pr-0">
                        <v-list-item-avatar
                            tile
                            size="80"
                        >
                            <v-img
                                :src="deadlineEvent.url"
                            >
                            </v-img>
                        </v-list-item-avatar>
                        
                        <v-list-item-content 
                            :style="$vuetify.breakpoint.mdAndUp ? 'min-width: 280px' : '' "
                        >
                            <p class="">
                                <small>{{deadlineEvent.category}}</small>
                            </p>
                            <v-list-item-title 
                                class="text-h6 font-weight-thin my-3"
                                @click="opp(deadlineEvent.id)"
                            >
                                {{deadlineEvent.title}}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{deadlineEvent.location}} 
                                | 
                                <v-icon small>mdi-timer-sand</v-icon>
                                {{deadlineEvent.time}}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        
                    </v-list-item>
                </v-card>  
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "DeadlineEvents", 
        data: () => ({
            deadlineEvents: [
                {
                    id: 1, 
                    title: 'GivingTuesday Starling Collective Fellowship 2021', 
                    category: 'FELLOWSHIPS', 
                    location: 'Switzerland', 
                    time: '2 Hours', 
                    url: require('../assets/image/upcommingEvents/upcommingEvents1.jpg'), 
                    path: '/Events', 
                }, 
                {
                    id: 2, 
                    title: 'GivingTuesday Starling Collective Fellowship 2021', 
                    category: 'FELLOWSHIPS', 
                    location: '', 
                    time: '11 Hours', 
                    url: require('../assets/image/upcommingEvents/upcommingEvents2.jpg'), 
                    path: '/Events', 
                },
                {
                    id: 3, 
                    title: 'Danish Government Scholarships 2022 in the University of Copenhagen (UCPH)', 
                    category: 'MASTERS/POST GRADUATE', 
                    location: 'Denmark', 
                    time: '14 Hours', 
                    url: require('../assets/image/upcommingEvents/upcommingEvents3.jpg'), 
                    path: '/Events', 
                },
                {
                    id: 4, 
                    title: 'Westerwelle Foundation Young Founders Programme Autumn 2021', 
                    category: 'FELLOWSHIPS', 
                    location: '', 
                    time: '2 Hours', 
                    url: require('../assets/image/upcommingEvents/upcommingEvents4.jpg'), 
                    path: '/Events', 
                },
                {
                    id: 5, 
                    title: '2021 Call for Applications :: Cambridge-Africa ALBORADA Research Fund', 
                    category: 'GRANT', 
                    location: '', 
                    time: '2 Days', 
                    url: require('../assets/image/upcommingEvents/upcommingEvents5.jpg'), 
                    path: '/Events', 
                },
                {
                    id: 6, 
                    title: 'The African Arguments Pilot Fellowship 2021 for Young Freelancers', 
                    category: 'FELLOWSHIPS', 
                    location: '', 
                    time: '4days', 
                    url: require('../assets/image/upcommingEvents/upcommingEvents6.jpg'), 
                    path: '/Events', 
                },
                {
                    id: 7, 
                    title: 'Youth World Cup 2021 By Global Peace Chain',
                    category: 'AWARDS', 
                    location: 'Turkey', 
                    time: '4 Days', 
                    url: require('../assets/image/upcommingEvents/upcommingEvents7.jpg'), 
                    path: '/Events', 
                },
                {
                    id: 8, 
                    title: '23RD ASEF SUMMER UNIVERSITY HACKATHON', 
                    category: 'COMPETITIONS', 
                    location: 'Multiple Regions', 
                    time: '5 Days',  
                    url: require('../assets/image/upcommingEvents/upcommingEvents1.jpg'), 
                    path: '/Events', 
                }
            ],
        }),
        methods: {
            async opp(i){
                localStorage.setItem('oppId', i); 
                this.$router.push({ path: '/Opportunity' })
            }
        }
    }
</script>