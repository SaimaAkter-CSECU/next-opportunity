<template>
    <div id="SubPageHeader">
        <v-toolbar 
            color="white"
            class="fixed-bar"
            elevation="0"
        >
            <v-container
                class="d-flex align-center"
            >
                <v-toolbar-title 
                    width="61" 
                    height="65"
                >
                    <router-link to="/">
                        <v-img
                            alt="Logo"
                            class=""
                            contain
                            min-width="61"
                            :src="logo"
                            width="100%"
                            height= "65"
                        />
                    </router-link>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-toolbar-items 
                    class="hidden-sm-and-down" 
                    height="65"
                >
                    <v-menu 
                        open-on-hover
                        bottom
                        offset-y 
                        class="browseBtn"
                        transition="slide-x-transition"
                        close-delay="170"
                        :close-on-click="false"
                        :close-on-content-click="false"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                text
                                tile
                                v-bind="attrs"
                                v-on="on"
                            >
                                <router-link to="/Browse">
                                    Browse Opportunity   
                                </router-link>
                            </v-btn>
                        </template>
                        <v-list class="nav-list1">
                            <div
                                v-for="opportunity in opportunities"
                                :key="opportunity.id"
                            >
                                <v-list-item
                                    @click="opp(opportunity.id)"
                                    v-if="!opportunity.subList"
                                    class="pr-0"
                                    style="border-bottom: 1px solid rgba(255,255,255,0.1);"
                                >
                                    <v-list-item-title style="line-height: 47px;" >{{ opportunity.title }}</v-list-item-title>
                                </v-list-item>
                                <v-list-item
                                    @click="opp(opportunity.id)"
                                    v-else
                                    class="pr-0"
                                    style="border-bottom: 1px solid rgba(255,255,255,0.1);"
                                >
                                    <v-menu 
                                        open-on-hover
                                        offset-x
                                        class="browseBtn"
                                        sub-group
                                        :close-on-click="false"
                                        :close-on-content-click="false"
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-list-item-title 
                                                v-bind="attrs"
                                                v-on="on"
                                                style="line-height: 47px;" 
                                            >
                                                {{ opportunity.title }}
                                            </v-list-item-title>
                                        </template>
                                        <v-list
                                        >
                                            <v-list-item
                                                v-for="subList in opportunity.subList"
                                                :key="subList.id"
                                                @click="opp(subList.id)"
                                            >
                                                <v-list-item-title style="line-height: 47px;"  >{{ subList.title }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-list-item>
                            </div>
                        </v-list>
                    </v-menu>
                    <v-btn
                        text
                        tile
                    >
                        <router-link to="/Post">
                            Post an Opportunity   
                        </router-link>
                    </v-btn>
                    <v-menu offset-y class="searchBtn">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn 
                                icon
                                tile
                                v-bind="attrs"
                                v-on="on"
                                text
                            >
                                <v-icon>
                                    mdi-magnify
                                </v-icon>
                            </v-btn>
                        </template>
                        <div 
                            class="d-flex justify-between align-center pa-2 searchDiv"
                            background-color= "whitesmoke"
                            @click.stop.prevent 
                        >
                                <v-autocomplete
                                    v-model="select"
                                    :loading="loading"
                                    :items="items"
                                    :search-input.sync="search"
                                    class="mx-3"
                                    flat
                                    hide-no-data
                                    hide-details
                                    placeholder="Start Typing to Search..."
                                    solo
                                ></v-autocomplete>
                                

                                <v-btn
                                    color="primary"
                                >
                                    Search
                                </v-btn>
                        </div>
                    </v-menu>
                </v-toolbar-items>

                <v-app-bar-nav-icon
                    @click.native.stop= "sideNavbar = !sideNavbar" 
                    class="hidden-md-and-up"
                >
                </v-app-bar-nav-icon>
            </v-container>
        </v-toolbar>

        <v-navigation-drawer 
            v-model="sideNavbar"
            absolute
            temporary
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title 
                        class="text-center d-grid justify-center mb-4"
                        width="100%"
                    >
                        <v-img
                            :src="logo"
                            height="65"
                            width="61"
                            class="mx-auto"
                        >
                        </v-img>
                    </v-list-item-title>
                    
                    <v-list-item-title class="text-h6 text-center">
                        Nextive Solution
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                max-height="80vh"
                class="overflow-y-auto"
            >
                <v-list-item>
                    <v-btn
                        text
                        tile
                    >
                        <router-link to="/Browse">
                            Browse Opportunity   
                        </router-link>
                    </v-btn>
                </v-list-item>
                <v-list-item>
                    <v-list class="nav-list ps-5">
                        <div
                            v-for="opportunity in opportunities"
                            :key="opportunity.id"
                        >
                            <v-list-item
                                @click="opp(opportunity.id)"
                                class="pr-0"
                                style="border-bottom: 1px solid rgba(0,0,0,0.3);"
                            >
                                <v-list-item-title >{{ opportunity.title }}</v-list-item-title>
                                
                            </v-list-item>
                            <v-list v-show="opportunity.subList" class="nav-list ps-5">
                                <v-list-item
                                    v-for="subList in opportunity.subList"
                                    :key="subList.id"
                                    @click="opp(subList.id)"
                                >
                                    <v-list-item-title   >{{ subList.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-list>
                </v-list-item>
                <v-list-item>
                    <v-btn
                        text
                        tile
                    >
                        <router-link to="/Post">
                            Post an Opportunity   
                        </router-link>
                    </v-btn>
                </v-list-item>
                <v-list-item>
                    <div 
                        class="d-flex justify-between align-center pa-2 searchDiv"
                        background-color= "whitesmoke"
                        @click.stop.prevent 
                    >
                        <v-autocomplete
                            v-model="select"
                            :loading="loading"
                            :items="items"
                            :search-input.sync="search"
                            class="mx-3"
                            flat
                            hide-no-data
                            hide-details
                            placeholder="Start Typing to Search..."
                            solo
                        ></v-autocomplete>
                        

                        <v-btn
                            color="primary"
                        >
                            Search
                        </v-btn>
                    </div>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        
    </div>
</template>

<script>
    import logo from '../assets/image/yo_logo_icon.png';

    export default {
        name: 'SubPageHeader',
         
        data: () => ({
            logo: logo, 
            sideNavbar: false, 
            showMenu: false, 
            items1: [
                {
                    icon: 'mdi-plus', 
                    title: 'Acfyvgbhinj'
                }, 
                {
                    icon: 'mdi-plus', 
                    title: '2 Acfyvgbhinj'
                }, 
                {
                    icon: 'mdi-plus', 
                    title: '3 Acfyvgbhinj'
                }, 
            ], 

            scrollPosition: null, 
            items: [], 
            loading: false,
            search: null,
            select: null,
            posts: [
                'Alabama',
                'Alaska',
                'American Samoa',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'District of Columbia',
                'Federated States of Micronesia',
                'Florida',
                'Georgia',
                'Guam',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Marshall Islands',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Carolina',
                'North Dakota',
                'Northern Mariana Islands',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Palau',
                'Pennsylvania',
                'Puerto Rico',
                'Rhode Island',
                'South Carolina',
                'South Dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virgin Island',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming',
            ],
            opportunities: [
                {
                    id: 1, 
                    title: 'Deadline approaching', 
                },
                {
                    id: 2, 
                    title: 'SDG', 
                },
                {
                    id: 3, 
                    title: 'On Going', 
                },
                {
                    id: 4, 
                    title: 'Competitions', 
                    subList: [
                        {
                            id: 1, 
                            title: 'Awards',
                        },
                        {
                            id: 2, 
                            title: 'Grants',
                        }
                    ],
                },
                {
                    id: 5, 
                    title: 'Conference', 
                },
                {
                    id: 6, 
                    title: 'Scholarships', 
                    subList: [
                        {
                            id: 1, 
                            title: 'Masters/ Post graduate',
                        },
                        {
                            id: 2, 
                            title: 'PhD/ Doctoral',
                        }, 
                        {
                            id: 3, 
                            title: 'Summer School/ Winter School',
                        }, 
                        {
                            id: 4, 
                            title: 'Undergraduate',
                        }
                    ],
                },
                {
                    id: 7, 
                    title: 'Exchange Programs', 
                },
                {
                    id: 8, 
                    title: 'Fellowships', 
                },
                {
                    id: 9, 
                    title: 'Internships', 
                },
                {
                    id: 10, 
                    title: 'Workshops', 
                },
                {
                    id: 11, 
                    title: 'Miscellaneous', 
                },
            ],
        }), 
        methods: {
            async opp(i){
                console.log(i); 
            }
        },
    }
</script> 

<style scoped>
    .fixed-bar {
        position: fixed;
        position: -webkit-sticky;
        width: 100%;
        z-index: 2;  
    }
    .v-toolbar__items{
        height: 65px; 
    }
    .v-toolbar__items .v-btn .v-btn__content a{
        font-size: 0.875rem;
        font-weight: 400;
    }
    .searchDiv{
        background-color: whitesmoke; 
    }
</style>