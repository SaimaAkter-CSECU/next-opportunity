<template>
    <div 
        id="faqs"
    >
        <v-container>
            <p>{{faqText}}</p>
            <div 
                class="mt-9" 
                style="border: 1px solid #f1f2fa"
            >
                <v-tabs
                    background-color="grey lighten-5"
                    color="blue-grey darken-3"
                    grow
                    v-model="tabs"
                >
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab href="#tab-1">
                        Know about NO
                    </v-tab>

                    <v-tab href="#tab-2">
                        Pursue Opportunities
                    </v-tab>

                    <v-tab href="#tab-3">
                        General Queries
                    </v-tab>
                </v-tabs>

                <v-tabs-items 
                    v-model="tabs"
                    background-color="grey lighten-5"
                    class="pa-5"
                >
                    <v-tab-item
                        id="tab-1"
                    >
                        <v-expansion-panels 
                            focusable
                            v-for="knowNO in knowNOs"
                            :key="knowNO.id"
                            class="my-3"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    {{knowNO.header}}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-3">
                                    <p>
                                        {{knowNO.detail}}
                                    </p> 
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-tab-item>
                    <v-tab-item
                        id="tab-2"
                    >
                        <v-expansion-panels 
                            focusable
                            v-for="pursueOpportunity in pursueOpportunities"
                            :key="pursueOpportunity.id"
                            class="my-3"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    {{pursueOpportunity.header}}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-3">
                                    <p>
                                        {{pursueOpportunity.detail}}
                                    </p> 
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-tab-item>
                    <v-tab-item
                        id="tab-3"
                    >
                        <v-expansion-panels 
                            focusable
                            v-for="generalQuery in generalQueries"
                            :key="generalQuery.id"
                            class="my-3"
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    {{generalQuery.header}}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="mt-3">
                                    <p>
                                        {{generalQuery.detail}}
                                    </p> 
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-tab-item>
                </v-tabs-items>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {  
        name: 'FAQs', 
        data: () => ({
            faqText: 'Applicants have many questions related to finding and pursing opportunities which often remain unanswered. Youth Opportunities believes that every question deserves an informative answer to build required awareness and knowledge among youth. From our years of interaction with diverse group of young people, we have compiled and categorized all major frequently asked questions for you.', 
            tabs: null, 
            knowNOs : [
                {
                    id: 1,
                    header: 'What is Youth Opportunities?',
                    detail: 'Youth Opportunities is the largest opportunity discovery plat of the world. Currently, we are serving information on important opportunities of ten different categories. To know more about us, please visit www.youthop.com To explore opportunities, please visit www.youthop.com/browse',
                },
                {
                    id: 2,
                    header: 'What does Youth Opportunities do?', 
                    detail: 'Youth Opportunities bridges between the opportunity providers and opportunity seekers for free. We work to promote equal and free access to opportunities for all.',
                },
                {
                    id: 3,
                    header: 'What are the types of opportunity YO share?',  
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.',
                }
            ],
            pursueOpportunities : [
                {
                    id: 1, 
                    header: 'How can I search for best suited opportunities?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 2, 
                    header: 'How do I know that I am eligible for the opportunity?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 3, 
                    header: 'If I am not from the eligible countries, what should I do?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 4, 
                    header: 'If the countries are not specified, what should I do?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 5, 
                    header: 'I didn’t find the right opportunity at Youth Opportunities. What should I do?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 6, 
                    header: 'I have pursued a lot of opportunities but have been unsuccessful. Should I still apply?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 7, 
                    header: 'I don’t have the money to attend program. What should I do?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 8, 
                    header: 'Can I raise money to attend the program?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 9, 
                    header: 'Does Youth Opportunities provide financial support to attend programs?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 10, 
                    header: 'What should I do before applying to any opportunity?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 11, 
                    header: 'I missed a deadline what should I do know?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 12, 
                    header: 'How can I enhance my chances of getting selected for a program?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 13, 
                    header: 'I have been selected for the first round. Now, how do I prepare myself for the interview?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 14, 
                    header: 'Is language test result necessary for applying to any opportunities?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 15, 
                    header: 'I have applied for an opportunity and haven’t heard from them yet. What should I do?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 16, 
                    header: 'I have successfully attained an opportunity. How can I share my success story?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 17, 
                    header: 'I haven’t had international travel before. Would it be safe to travel?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
            ],
            generalQueries : [
                {
                    id: 1, 
                    header: 'How do I communicate with Youth Opportunities?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 2, 
                    header: 'How can I get connected with the organizer of an opportunity?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 3, 
                    header: 'Can I invite Youth Opportunities to my institution or campus?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 4, 
                    header: 'Can promote my Youth Opportunities at my institutions?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
                {
                    id: 5, 
                    header: 'I didn’t find the right opportunity at Youth Opportunities. What should I do?', 
                    detail: 'Youth Opportunities share ten different categories of opportunities which include: Scholarship, Internship, Exchange Program, Fellowship, workshop, conference and competition, award, grants and international jobs etc.', 
                },
            ],
        }),
    }
</script>