<template>
    <div 
        id="about" 
    >
        <v-container>
            <div>
                {{aboutText}}
            </div>
            <v-row class="mt-9">
                <v-col
                    cols="12"
                    sm="6"
                    xs="12"
                    v-for=" aboutDetail in aboutDetails"
                    :key= "aboutDetail.id"
                >
                    <v-expansion-panels focusable>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                {{aboutDetail.header}}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="mt-3">
                                <p>
                                    {{aboutDetail.detail}}
                                </p> 
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {  
        name: 'About', 
        data: () => ({
            aboutText: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
            aboutDetails: [
                {
                    id: 1, 
                    header: 'What we do?',
                    detail: 'As a global youth development platform, YO provides easy and instantaneous access to unlimited opportunities to millions of youth for free. YO thrives on promoting youth development and thus, produces and delivers high-quality, value additive educational and capacity building materials. The purpose is to facilitate young people in translating every opportunity into success. YO works relentlessly to create an efficacious bridge between opportunity seekers with opportunity providers for mutually beneficial development through sharing of information.', 
                },
                {
                    id: 2, 
                    header: 'Why we do?',
                    detail: 'Youth Opportunities believes that ‘Access to Information’ is not a privilege rather a basic right. Despite praiseworthy development of Information Communication Technology, there exists acute deficiency in awareness level among youth about different opportunities pertaining to youth development. As a result, thousands of youth are missing out important chances for self-development in form of education, international exposure, training, and employment. Youth Opportunities, thus, is working to build global awareness by sharing opportunities to ensure free and equal access regardless of geographical location.', 
                },
                {
                    id: 3, 
                    header: 'Why should you join?',
                    detail: 'Thousands of youth are joining Youth Opportunities everyday as they find the platform to be an accelerator to their personal and professional development. Five key reasons why you should join Youth Opportunities: <br /> 1. Free access to hundreds of international opportunities <br /> 2. Get connected with successful local and global young leaders <br /> 3. Avail the opportunity of direct communication with opportunity providers and recruiters <br /> 4. Free access to  educational resources, suggestions and advice & support from experts <br /> 5. Share your success story with millions of youth.', 
                },
                {
                    id: 4, 
                    header: 'How you can help?',
                    detail: 'The core of Youth Opportunities is young people like you: enthusiastic, responsible and active citizens around the world who understand the importance of ‘Access to Information’ for self-development and appreciate our endeavor in this regard. Youth Opportunities is grateful to you and requests to join its journey for change.<br /> Support Youth Opportunities by sharing us in your personal, social and professional networks!', 
                },
            ],
        }),
    }
</script>