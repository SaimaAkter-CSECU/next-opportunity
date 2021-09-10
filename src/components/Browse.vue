<template>
    <v-app class="subPages">
        <SubPageHeader />
        <v-main>
            <SubPageBanner />
            <v-container 
                id="browse"
                :style="
                $vuetify.breakpoint.mdAndUp
                    ? 'padding-top: 100px; padding-bottom: 100px;'
                    : 'padding-top: 50px; padding-bottom: 50px;'
                "
            >
                <div>
                    <v-form
                        ref="form"
                    >
                        <v-row>
                            <v-col
                                cols="12"
                                md="3"
                                sm="6"
                                xs="12"
                            >
                                <v-select
                                    v-model="opportunity_type"
                                    :items="opportunity_types"
                                    item-text="name"
                                    item-value="id"
                                    label="Search for Any Opportunity"
                                    outlined
                                ></v-select>
                            </v-col>
                            <v-col
                                cols="12"
                                md="3"
                                sm="6"
                                xs="12"
                            >
                                <v-select
                                    v-model="region"
                                    :items="regions"
                                    item-text="region"
                                    item-value="id"
                                    placeholder="Search for Any Region"
                                    outlined
                                ></v-select>
                            </v-col>
                            <v-col
                                cols="12"
                                md="3"
                                sm="6"
                                xs="12"
                            >
                                <v-select
                                    v-model="funding_type"
                                    :items="funding_types"
                                    item-text="type"
                                    item-value="id"
                                    placeholder="Search Any Funding"
                                    outlined
                                ></v-select>
                            </v-col>
                            <v-col
                                cols="12"
                                md="3"
                                sm="6"
                                xs="12"
                            >
                                <v-select
                                    v-model="deadline_type"
                                    :items="deadline_types"
                                    item-text="type"
                                    item-value="id"
                                    label="Search for any Deadline"
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col
                                cols="12"
                                md="12"
                            >
                                <v-btn
                                    color="info"
                                    large
                                    tile                                    
                                    class="mr-4"
                                    @click="FilterData"
                                >
                                    Explore
                                </v-btn>

                                <v-btn
                                    color="info"
                                    large
                                    tile  
                                    class="mr-4"
                                    @click="reset"
                                >
                                    Reset Filter
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </div>

                <div class="mt-7">
                    <v-row>
                        <v-col
                            cols="12"
                            md="4"
                            sm="6"
                            xs="12" 
                            v-for="opportunity in getData" 
                            :key="opportunity.id"
                        >
                            <v-card
                                class="mx-auto mt-5"
                                max-width="100%"
                                :id="opportunity.id"
                            >
                                <v-img
                                    class="white--text justify-end"
                                    :src="opportunity.url"
                                    @click="opp(opportunity.id)"
                                >
                                    <div class="opportunity_fund px-3 py-1 text-p">{{opportunity.funding_types}}</div>
                                </v-img>
                                
                                <v-card-title class="card-title" @click="opp(opportunity.id)">{{opportunity.title}}</v-card-title>
                                <v-card-actions class="grey--text">
                                    <v-card-text>{{opportunity.location}}</v-card-text>
                                    <v-card-text>
                                        <v-icon small >mdi-timer-sand</v-icon>
                                        {{opportunity.deadline}}
                                    </v-card-text>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                    <div class="text-center mt-7">
                        <v-pagination
                            class="pagination"
                            v-model="page"
                            :length="(opportunities.length < 60) ? Math.ceil(opportunities.length/perPage) : 7"
                            circle
                        >
                        ></v-pagination>
                    </div>
                </div>

            </v-container>
            <Footer />
        </v-main>
    </v-app>
</template>

<script>
    import SubPageHeader from './SubPageHeader.vue'
    import SubPageBanner from './SubPageBanner.vue'
    import Footer from './Footer.vue' 
    export default {
        name: 'Browse', 
        components:{
            SubPageHeader, SubPageBanner, Footer
        }, 
        data: () => ({
            opportunity_type: null, 
            opportunity_types: [
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
            deadline_type: null, 
            deadline_types: [
                {
                    id: 1, 
                    type: 'Any Deadline'
                }, 
                {
                    id: 2, 
                    type: 'On Going'
                },
                {
                    id: 3, 
                    type: '1 Week'
                },
                {
                    id: 4, 
                    type: '10 Days'
                },
                {
                    id: 5, 
                    type: '15days'
                },
                {
                    id: 6, 
                    type: '1 Month'
                },
                {
                    id: 7, 
                    type: '2Months'
                }
            ],
            funding_type: null, 
            funding_types: [
                {
                    id: 1, 
                    type: 'Full Scholarship'
                }, 
                {
                    id: 2, 
                    type: 'Fully Funded'
                },
                {
                    id: 3, 
                    type: 'Paid'
                },
                {
                    id: 4, 
                    type: 'Partial Scholarship'
                },
                {
                    id: 5, 
                    type: 'Partialy Funded'
                },
                {
                    id: 6, 
                    type: 'Voluntarily'
                },
            ],
            region: null, 
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

            opportunities: [
                {
                    id: 1, 
                    title: 'ACI Foundation Fellowships and Scholarships 2022-23', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 2, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 3, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 4, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 5, 
                    title: 'Gates Scholarship in the USA 2022', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 6, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 7, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 8, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 9, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 10, 
                    title: 'Gates Scholarship in the USA 2022', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 11, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 12, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 13, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 14, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 15, 
                    title: 'Gates Scholarship in the USA 2022', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 16, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 17, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 18, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 19, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 20, 
                    title: 'Gates Scholarship in the USA 2022', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 21, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 22, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 23, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 24, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 25, 
                    title: 'Gates Scholarship in the USA 2022', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 26, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 27, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 28, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 29, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 30, 
                    title: 'Gates Scholarship in the USA 2022', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../assets/image/Opportunity/opp4.png'), 
                },
            ], 

            page: 1,
            perPage: 12,
      
        }),
        methods: {
            async FilterData () {
                console.log("Ok");
            }, 
            async reset () {
                this.$refs.form.reset()
            },
            async opp(i){
                localStorage.setItem('oppId', i); 
                this.$router.push({ path: '/Opportunity' })
            }, 

        },
        computed: {
            getData () {
                return this.opportunities.slice((this.page - 1)* this.perPage, this.page* this.perPage)
            }
        },
    }
</script>