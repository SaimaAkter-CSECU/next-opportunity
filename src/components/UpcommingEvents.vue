<template>
    <section id="upcomming-events" class="py-8">
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="9" class="section-title-div pl-0">
                    <span class="section-title">
                        <v-icon class="pr-3">mdi-timer-sand</v-icon>
                        <span class="section-title-text pb-4 pr-3">Upcomming Events</span>
                    </span>
                </v-col>
            </v-row>
            
            <v-row class="mb-5">
                <v-col
                    cols="12"
                    md="9"
                    sm="12"
                    
                >
                    <DeadlineEvents />
                </v-col>
                <v-col
                    cols="12"
                    md="3"
                    sm="12"
                >
                    <TrendingEvents />
                </v-col>
            </v-row>

            <v-row class="my-5">
                <v-col cols="12" sm="12" md="9">
                    <div class="section-title-div pb-3" width="100%">
                        <span class="section-title">
                            <v-icon class="pr-3">mdi-plus-thick</v-icon>
                            <span class="section-title-text pb-4 pr-3">Latest Additions</span>
                        </span>
                    </div>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col
                    cols="12"
                    md="9"
                    sm="12"
                    
                >
                    <LatestEvents />
                </v-col>
                <v-col
                    cols="12"
                    md="3"
                    sm="12"
                >
                    <EventReport />
                </v-col>
            </v-row>
        </v-container>
    </section> 
</template>

<script>
    import DeadlineEvents from './DeadlineEvents.vue'
    import TrendingEvents from './TrendingEvents.vue'
    import LatestEvents from './LatestEvents.vue'
    import EventReport from './EventReport.vue'
    export default {
        name: "UpcommingEvents", 
        components: {
            TrendingEvents, DeadlineEvents, LatestEvents, EventReport
        }
    }
</script>