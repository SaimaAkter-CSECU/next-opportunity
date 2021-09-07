<template>
    <section id="featured">
        <v-container>
            <v-row align="center">
                <v-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="2"
                >
                    <div class="featured-text">
                        <p>
                            <span class="pr-4 mr-auto mb-0">Featured in</span>
                        </p>
                    </div>
                </v-col>
                <v-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="10"
                >
                    <v-row align="center">
                        <v-col
                            cols="12"
                            xs="6"
                            sm="4"
                            md="2"
                            lg="2"
                            v-for="fearuredData in fearuredDatas" 
                            :key="fearuredData.id"
                        >
                            <v-img
                                :src="fearuredData.featuredIn"
                                align="center"
                                class="mx-auto"
                            >
                            </v-img>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: 'Featured',
        data: () => ({
            fearuredDatas: [
                {
                    id: 1,
                    featuredIn : require('../assets/image/Featured/featured5.png')  
                },
                {
                    id:2, 
                    featuredIn : require('../assets/image/Featured/featured5.png') 
                },
                {
                    id: 3,
                    featuredIn : require('../assets/image/Featured/featured5.png')  
                },
                {
                    id: 4, 
                    featuredIn : require('../assets/image/Featured/featured5.png')
                },
                {
                    id: 5, 
                    featuredIn : require('../assets/image/Featured/featured5.png') 
                },
                {
                    id: 6, 
                    featuredIn : require('../assets/image/Featured/featured5.png')
                }
            ],
        }), 
    }
</script>