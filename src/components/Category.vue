<template>
    <section id="category" class="py-3">
        <v-container class="px-0">
            <v-row align="center" class="ma-0">
                <v-col
                    cols="12"
                    sm="12"
                    xs="12"
                    md="6"
                    class="px-0"
                >
                    <v-row align="center" justify="center">
                        <v-col
                            cols="12"
                            xs="12"
                            sm="3"
                            md="3"
                            v-for="category1 in categories1"
                            :key="category1.id"
                            class="px-0"
                        >
                            <router-link :to="category1.path">
                                <div class="category-div text-center" width="100%">
                                    <v-icon x-large class="mb-3">{{category1.icon}}</v-icon>
                                    <p>
                                        <small>{{category1.title}}</small>
                                    </p>
                                </div>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    xs="12"
                    md="6"
                    class="px-0"
                >
                    <v-row align="center" justify="center">
                        <v-col
                            cols="12"
                            xs="12"
                            sm="3"
                            md="3"
                            v-for="category2 in categories2"
                            :key="category2.id"
                            class="px-0"
                        >
                            <router-link :to="category2.path">
                                <div class="category-div text-center" width="100%">
                                    <v-icon x-large class="mb-3">{{category2.icon}}</v-icon>
                                    <p>
                                        <small>{{category2.title}}</small>
                                    </p>
                                </div>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "Category", 
        data: () => ({
            categories1: [
                {
                    id: 1, 
                    title: 'Competitions', 
                    icon: 'mdi-trophy', 
                    path: '/Competitions'
                },
                {
                    id: 2, 
                    title: 'Conferences', 
                    icon: 'mdi-forum', 
                    path: '/Conferences'
                },
                {
                    id: 3, 
                    title: 'Exchange Programs', 
                    icon: 'mdi-handshake',
                    path: '/Exchange'
                },
                {
                    id: 4, 
                    title: 'Fellowship', 
                    icon: 'mdi-bank', 
                    path: '/Fellowship'
                }
            ],
            categories2: [
                {
                    id: 5, 
                    title: 'Internships', 
                    icon: 'mdi-badge-account', 
                    path: '/Internships'
                },
                {
                    id: 6, 
                    title: 'Scholarships', 
                    icon: 'mdi-school', 
                    path: '/Scholarships'
                },
                {
                    id: 7, 
                    title: 'Workshops', 
                    icon: 'mdi-account-group', 
                    path: '/Workshops'
                },
                {
                    id: 8, 
                    title: 'Miscellaneous', 
                    icon: 'mdi-format-list-bulleted', 
                    path: '/Miscellaneous'
                },   
            ],
        }),
    }
</script>
