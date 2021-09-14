<template>
    <div id="banner">
        <particles-bg width="100%" height="100%" type="cobweb" color="#fffff0" num="25" :bg="false" style="position:absolute;" />
        <div class="banner-text d-flex align-center justify-center"> 
            <div class="banner-text-content white--text text-center mt-sm-9" >
                <h1>Explore New Opportunities!</h1>
                <h3>Or, <span class="post-text"><router-link to="/post">post an opportunity</router-link></span> for <span class="text-decoration-underline">free</span></h3>
                <v-container>
                    <v-form class="py-1 mt-5">
                        <v-container>
                            <v-row class="mx-0">
                                <v-col
                                    cols="12"
                                    xs="12"
                                    sm="5"
                                >
                                    <v-select
                                        v-model="selectOpp"
                                        :items="opportunity"
                                        item-text="name"
                                        item-value="id"
                                        solo
                                    ></v-select>
                                </v-col>
                                <v-col
                                    cols="12"
                                    xs="12"
                                    sm="5"
                                >
                                    <v-select
                                        v-model="selectReg"
                                        :items="regions"
                                        item-text="region"
                                        item-value="id"
                                        solo
                                    ></v-select>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="2"
                                    xs="12"
                                >
                                    <v-btn
                                        color="primary"
                                        elevation="2"
                                        large
                                        @click="find()"
                                    >
                                        Explore
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>
    import { ParticlesBg } from "particles-bg-vue";
    export default {
        name: "Banner", 
        components: {
            ParticlesBg
        },
        data: () => ({
            selectOpp: { id: 1, name: 'Any Opportunity' },
            selectReg: { id: 1, region: 'Any Region' },
            regions: [
                {
                    id:1, 
                    region: 'Any Region', 
                },
                {
                    id:2, 
                    region: 'africa', 
                },
                {
                    id:3, 
                    region: 'Australia', 
                },
                {
                    id:4, 
                    region: 'Bangladesh', 
                },
                {
                    id:5, 
                    region: 'Canada', 
                },
                {
                    id:6, 
                    region: 'Denmark', 
                },
            ],
            opportunity: [
                {
                    id:1, 
                    name: 'Any Opportunity', 
                },
                {
                    id:2, 
                    name: 'Competitions', 
                },
                {
                    id:3, 
                    name: 'Conference', 
                },
                {
                    id:4, 
                    name: 'Miscellious', 
                },
                {
                    id:5, 
                    name: 'SDG', 
                },
                {
                    id:6, 
                    name: 'Fellowships', 
                },
                {
                    id:7, 
                    name: 'Internships', 
                },
            ],
        }),
        methods: {
            async find(){
                this.$router.push('/Browse');
            }
        }
    }
</script>