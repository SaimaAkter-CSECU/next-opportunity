<template>
    <div 
        id="SubPageBanner"
        :style="($route.path == '/Opportunity' || $route.path == '/Search') ? 'background-color: #f4f4ef; color: #222222' : 'background-color: rgba(0,0,0,.4); color: #ffffff'"
    >
        <v-container 
            class="ps-md-7 ps-sm-5"
        >
            <div 
                class="font-weight-bold banner-title"
                v-bind:class="$vuetify.breakpoint.mdAndUp ? 'text-h2' : 'text-h3' "
            >
                {{pageTitle}}
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'SubPageBanner',
        data: () => ({
            pageTitle: '', 
            searchCount: 25,
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
        }),
        watch: {
            $route: {
                immediate: true,
                handler(to) {
                    if(typeof to.meta == "string") {
                        this.pageTitle = to.meta;
                    }
                    else{
                        if(this.$route.path == '/Search'){
                            let searchItem = localStorage.getItem('search'); 
                            this.pageTitle = `${this.searchCount} search results for: ${searchItem}`;
                        }
                        else{
                            let id = localStorage.getItem('oppId'); 
                            let data = this.opportunities.find(x => x.id == id);
                            this.pageTitle = data.title; 
                        }
                    }
                }
            },
        }, 
    }
</script>