<template>
    <div id="opportunity">
        <v-row>
            <v-col
                cols="12"
                sm="2"
                xs="12"
                class="px-sm-0"
            >
                <div class="text-right">
                    <router-link to="/Browse">
                        <p class="font-weight-regular white--text red darken-2 py-2 pr-1" >
                            {{opportunity_type}}
                        </p>
                    </router-link>
                    <div class="subtitle-1" style="font-weight: 500;">Region</div>
                    <p>{{region}}</p>
                </div>
            </v-col>
            <v-col
                cols="12"
                sm="10"
                xs="12"
            >
                <div class="mb-5">
                    <v-img
                        :src="img"
                    ></v-img>
                </div>
                <p v-show="funding_type">
                    <v-icon>mdi-cash</v-icon> 
                    <span class="pl-3 subtitle-1 font-weight-thin">{{funding_type}}</span>
                </p>

                <div 
                    class="my-5 d-flex align-center justify-space-between" 
                    width="100%"
                >                       
                    <v-btn 
                        large 
                        tile
                        color="indigo darken-4"
                        class="white--text text-p font-weight-thin"
                        width="33%"
                        elevation="0"
                        @click="facebookShare()"
                    >
                        <v-icon 
                            left
                        >
                            mdi-facebook
                        </v-icon>
                        Share
                    </v-btn>
                        
                    <v-btn 
                        large 
                        tile
                        color="light-blue lighten-3"
                        class="white--text text-p font-weight-thin"
                        width="33%"
                        elevation="0"
                        @click="twitterShare()"
                    >
                        <v-icon 
                            left
                        >
                            mdi-twitter
                        </v-icon>
                        Tweet
                    </v-btn>
                
                    <v-btn 
                        large 
                        tile
                        color="yellow lighten-2"
                        class="text-p font-weight-thin"
                        width="33%"
                        elevation="0"
                        @click="emailSubscribe()"
                    >
                        <v-icon 
                            left
                        >
                            mdi-email
                        </v-icon>
                        Subscribe
                    </v-btn>
                </div>

                <p class="my-7">
                    {{ooportunity_description}}
                </p>

                <div class="opportunity_quote my-9">
                    <h6 class="pl-9 font-italic font-weight-bold">Looking for fully-funded opportunities, install the Youth Opportunities <span><a href="#" class="light-blue--text darken-4">Android</a></span> or <span><a href="#" class="blue--text darken-4">iOS</a></span> App here.</h6>
                </div>

                <div class="d-flex align-center">
                    <h5 class="font-weight-regular">Location : </h5> <span class="text-h6 font-weight-thin ml-2">{{location}}</span>
                </div>
                <div class="mt-5">
                    <div class="d-flex align-center">
                        <v-icon class="mr-2">mdi-seal</v-icon>
                        <h5 class="font-weight-regular">Benefits  </h5>
                    </div>
                    <div class="mt-3 ml-9" v-html="benefit">
                    </div>
                </div>
                
                <div class="mt-5">
                    <div class="d-flex align-center">
                        <v-icon class="mr-2">mdi-clipboard-check</v-icon>
                        <h5 class="font-weight-regular">Elligibilities  </h5>
                    </div>
                    <div class="mt-3 ml-9" v-html="elligibility">
                    </div>
                </div>
                <div class="d-flex align-center mt-5">
                    <h5 class="font-weight-regular">Elligible Regions : </h5> <span class="text-h6 font-weight-thin ml-2">{{elligible_regions}}</span>
                </div>
            </v-col>
            <v-col
                cols="12"
                md="12"
            >
                <div class="application_process my-9 pa-5" >
                    <div class="d-flex align-center">
                        <v-icon class="mr-2">
                            mdi-application-edit
                        </v-icon>
                        <h5 class="font-weight-regular">Application Process : </h5>
                    </div>
                    <div class="my-3 subtitle-2" v-html="application_process"></div>
                    <div class="opportunity_quote my-9">
                        <h6 class="pl-9 font-italic font-weight-bold">Looking for fully-funded opportunities, install the Youth Opportunities <span><a href="#" class="light-blue--text darken-4">Android</a></span> or <span><a href="#" class="blue--text darken-4">iOS</a></span> App here.</h6>
                    </div>

                    <div class="pt-5 mb-3">
                        <a v-show="apply_link" :href="apply_link" class="mr-3">
                            <v-btn
                                tile
                                large 
                                outlined
                                color="blue darken-4"
                            >
                                APPLY LINK
                            </v-btn>
                        </a>
                        <a v-show="official_link" :href="official_link">
                            <v-btn
                                tile
                                large 
                                outlined
                                color="blue darken-4"
                            >
                                Official LINK
                            </v-btn>
                        </a>
                    </div>
                </div>

                
            </v-col>
            <v-col 
                cols="12"
                md="2"
                class="hidden-smAndDown"
            ></v-col>
            <v-col
                cols="12"
                md="10"
                sm="12"
            >
                <div>
                    <div class="d-flex align-center">
                        <v-icon class="mr-2">mdi-help-circle</v-icon>
                        <h5 class="font-weight-regular">For Further Queries  </h5>
                    </div>
                    <p class="my-3">For the more detail, please email: {{email}}</p>
                    <small>{{further_quries}}</small>

                    <div 
                        class="my-5 d-flex align-center justify-space-between" 
                        width="100%"
                    >                       
                        <v-btn 
                            large 
                            tile
                            color="light-blue darken-3"
                            class="white--text text-p font-weight-thin"
                            width="33%"
                            elevation="0"
                            @click="facebookShare()"
                        >
                            <v-icon 
                                left
                            >
                                mdi-facebook
                            </v-icon>
                            Share
                        </v-btn>
                            
                        <v-btn 
                            large 
                            tile
                            color="light-blue lighten-3"
                            class="white--text text-p font-weight-thin"
                            width="33%"
                            elevation="0"
                            @click="twitterShare()"
                        >
                            <v-icon 
                                left
                            >
                                mdi-twitter
                            </v-icon>
                            Tweet
                        </v-btn>
                    
                        <v-btn 
                            large 
                            tile
                            color="yellow lighten-2"
                            class="text-p font-weight-thin"
                            width="33%"
                            elevation="0"
                            @click="emailSubscribe()"
                        >
                            <v-icon 
                                left
                            >
                                mdi-email
                            </v-icon>
                            Subscribe
                        </v-btn>
                    </div>

                    <div>
                        <div class="d-flex align-center mx-3">
                            <v-divider></v-divider> <span class="subtitle-2 font-weight-thin mx-3 grey--text lighten-1">Share this</span> <v-divider></v-divider> 
                        </div> 
                        <div class="d-flex justify-center mt-3">
                            <a href="#" class="blue--text mx-2">
                                <v-icon large color="blue lighten-3">mdi-google-plus</v-icon>
                            </a>
                            <a href="#" class="light-blue--text darken-2 mx-2">
                                <v-icon large color="blue lighten-3">mdi-linkedin</v-icon>
                            </a>
                            <a href="#" class="light-blue--text darken-2 mx-2">
                                <v-icon large color="blue lighten-3">mdi-email-outline</v-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Opportunity",
        data: () => ({
            img:'', 
            opportunity_type : '',
            funding_type: '' , 
            deadline: '',
            region: '',
            location: '',  
            ooportunity_description: '',
            benefit: '',
            elligibility: '',
            elligible_regions: '', 
            application_process: '', 
            apply_link: '',
            official_link: '',
            further_quries: '', 
            email: '',
            opportunities: [
                {
                    id: 1, 
                    title: 'ACI Foundation Fellowships and Scholarships 2022-23', 
                    opportunity_types: 'Scholarship', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 2, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Scholarship', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 3, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    opportunity_types: 'Award', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 4, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Conferrence', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 5, 
                    title: 'Gates Scholarship in the USA 2022', 
                    opportunity_types: 'SDG', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 6, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Intership', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 7, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Scholarship', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 8, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    opportunity_types: 'Grant', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 9, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Competition', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 10, 
                    title: 'Gates Scholarship in the USA 2022', 
                    opportunity_types: 'Scholarship', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 11, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Exchange Programs', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 12, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Workshops', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 13, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    opportunity_types: 'Miscelleous', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 14, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'SDG', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 15, 
                    title: 'Gates Scholarship in the USA 2022', 
                    opportunity_types: 'Scholarship', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 16, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Exchange Programs', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 17, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Scholarship', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 18, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    opportunity_types: 'Award', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 19, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Conferrence', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 20, 
                    title: 'Gates Scholarship in the USA 2022', 
                    opportunity_types: 'Scholarship', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 21, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'Internship', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 22, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'SDG', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 23, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    opportunity_types: 'Grant', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 24, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'SDG', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 25, 
                    title: 'Gates Scholarship in the USA 2022', 
                    opportunity_types: 'Scholarship', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 26, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'SDG', 
                    funding_types: 'Paid', 
                    location: 'Philipins', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp5.png'), 
                },
                {
                    id: 27, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'SDG', 
                    funding_types: 'Full Scholarship', 
                    location: 'Swizerland', 
                    deadline: '21 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
                {
                    id: 28, 
                    title: 'Bangladesh@50: The Water Story – Photo and Video Contest', 
                    opportunity_types: 'SDG', 
                    funding_types: '', 
                    location: 'Bangladesh', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp1.png'), 
                },
                {
                    id: 29, 
                    title: 'Optum Campus Internship Program- UnitedHealth Group company- in Philippines', 
                    opportunity_types: 'SDG', 
                    funding_types: '', 
                    location: '', 
                    deadline: 'On Going',
                    url: require('../../assets/image/Opportunity/opp2.png'), 
                },
                {
                    id: 30, 
                    title: 'Gates Scholarship in the USA 2022', 
                    opportunity_types: 'SDG', 
                    funding_types: 'Paid', 
                    location: 'United States', 
                    deadline: '6 Days',
                    url: require('../../assets/image/Opportunity/opp4.png'), 
                },
            ], 
            ooprtunity_details: [
                {
                    id: 1, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 2, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 3, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 4, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 5, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 6, 
                    region: 'US',
                    location: 'US',  
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 7, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 8, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 9, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 10, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 11, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 12, 
                    region: 'US',
                    location: 'US',  
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 13, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 14, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>',  
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 15, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>',  
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 16, 
                    region: 'US', 
                    location: '', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 17, 
                    region: 'US',
                    location: 'US',  
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>',  
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 18, 
                    region: 'US', 
                    location: '', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 19, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 20, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>',  
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 21, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 22, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 23, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>',  
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 24, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>',  
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 25, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>',  
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 26, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 27, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 28, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>',  
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 29, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 30, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
                {
                    id: 31, 
                    region: 'US', 
                    location: 'US', 
                    ooportunity_description: 'Ton Duc Thang University (TDTU) is a public and the biggest university in Vietnam. TDTU is ranked 101st – 200th in 2019 THE University Impact Rankings and be in TOP 901st – 1000th universities in the world (by ARWU, 2019). Every year, TDTU has two graduate admission times are the Spring semester and the Fall semester. In the academic year 2020-2021, they are expected to enroll and grant a hundred scholarships for international students who want to study graduate programs at TDTU.', 
                    benefit: '<ul><li>The scholarship covers tuition, enrollment fee, dormitory and Vietnamese language course for Master and Ph.D. program in the first year.</li><li>The scholarship will be reviewed every year based on the student’s academic achievement.</li></ul>',
                    elligibility: '<ul><li>Graduated from the university which is in THE/ QS/ URAP ranking</li><li>Review based on GPA:<ul><li>GPA ≥ 3.6 (in scale 4.0): 100% scholarship</li><li>GPA ≥ 3.4 (in scale 4.0): 50% scholarship</li><li>GPA ≥ 3.2 (in scale 4.0): 25% scholarship</li></ul></li><li>Meet the English language proficiency (IELTS/ TOEFL iBT certificate)</li><li>Match all required documents for application</li></ul>', 
                    elligible_regions: 'Asia, Europe, North America, South America, and Oceania', 
                    apply_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    official_link: 'https://www.youthop.com/link?u=https%3A%2F%2Fgrad.tdtu.edu.vn%2Fen%2Facademic%2Fscholarship',
                    further_quries: 'Disclaimer: Youth Opportunities spreads opportunities for your convenience and ease based on available information, and thus, does not take any responsibility of unintended alternative or inaccurate information. As this is not the official page, we recommend you to visit the official website of opportunity provider for complete information. For organizations, this opportunity is shared with sole purpose of promoting “Access to Information” for all and should not be associated with any other purposes.', 
                    email: 'gradstudies@tdtu.edu.vn', 
                    application_process: '<ul><li><p>Apply online through the given link.</p></li><li><p><strong>Spring semester admission</strong></p><ul><li><p>Applications Open: middle of July annually</p></li><li><p>Applications Deadline: middle of November annually</p></li><li><p>Enrollment and Spring semester start: middle of February annually</p></li></ul></li><li><p><strong>Fall semester admission</strong></p><ul><li><p>Applications Open: middle of January annually</p></li><li><p>Applications Deadline: end of May annually</p></li><li><p>Enrollment and Fall semester start: middle of July annually</p></li></ul></li></ul>',
                },
            ],
        }), 
        mounted(){
            let id = localStorage.getItem('oppId'); 
            let data = this.opportunities.find(x => x.id == id);
            this.opportunity_type = data.opportunity_types;
            this.funding_type = data.funding_types;
            this.img = data.url;

            let opportunity_detail = this.ooprtunity_details.find(x => x.id == id);
            this.region = opportunity_detail.region;
            this.location = opportunity_detail.location;
            this.benefit = opportunity_detail.benefit;
            this.elligibility = opportunity_detail.elligibility;
            this.elligible_regions = opportunity_detail.elligible_regions;
            this.ooportunity_description = opportunity_detail.ooportunity_description;
            this.application_process = opportunity_detail.application_process;
            this.apply_link = opportunity_detail.apply_link;
            this.official_link = opportunity_detail.official_link;
            this.email = opportunity_detail.email;
            this.further_quries = opportunity_detail.further_quries;
        },
        methods: {
            async facebookShare(){
            },
            async twitterShare(){},
            async emailSubscribe(){}, 
        }
    }
</script>