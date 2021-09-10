<template>
    <section id="events">
        <v-container>
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="event in events" :key="event.id">
                    <router-link to="/">
                        <v-card class="card">
                            <v-img
                                :src="event.url"
                            ></v-img>
                            <v-card-text class="category">
                                <v-icon small class="mr-3">{{event.catIcon}}</v-icon>
                                <span class="text-uppercase">{{event.category}}</span>
                            </v-card-text>
                            <v-card-title class="pt-0">
                                <h5> {{event.title}} </h5>
                            </v-card-title>
                                <v-card-actions>
                                    <v-card-text class="py-1">
                                        <span class="event-type font-weight-bold">{{event.type}}</span> 
                                        | 
                                        <span class="event-status font-weight-thin">{{event.status}}</span>
                                    </v-card-text>
                                </v-card-actions>
                        </v-card>
                    </router-link>
                </swiper-slide>
            </swiper>
        </v-container>
    </section>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'Events',
    components: {
      Swiper,
      SwiperSlide
    },
    data: () =>({
        events: [
            {
                id: 1, 
                category: 'Conferences', 
                catIcon: 'mdi-forum-outline', 
                title: 'The International Conference on Disaster Resilient Infrastructure (ICDRI) 2021',
                url: require("../assets/image/Events/event1.jpg"),
                type: 'Online',
                status: 'On Going'
            }, 
            {
                id: 2, 
                category: 'Scholarships', 
                catIcon: 'mdi-school-outline', 
                title: 'WHO Free Online Course: COVID-19 Operational Planning Guidelines',
                url: require("../assets/image/Events/event2.jpg"),
                type: 'Online',
                status: 'On Going Full Scholarship'
            }, 
            {
                id: 3, 
                category: 'Scholarships', 
                catIcon: 'mdi-school-outline', 
                title: 'U.S. Fulbright Scholar Program 2022-23',
                url: require("../assets/image/Events/event3.jpg"),
                type: '',
                status: 'Full Scholarship'
            },
            {
                id: 4, 
                category: 'Scholarships 2', 
                catIcon: 'mdi-school-outline', 
                title: 'U.S. Fulbright Scholar Program 2022-23',
                url: require("../assets/image/Events/event3.jpg"),
                type: '',
                status: 'Full Scholarship'
            },
            {
                id: 5, 
                category: 'Conference', 
                catIcon: 'mdi-school-outline', 
                title: 'WHO Free Online Course: COVID-19 Operational Planning Guidelines 2',
                url: require("../assets/image/Events/event3.jpg"),
                type: '',
                status: 'Full Scholarship'
            }
        ],
        swiperOption: {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 800,
            breakpoints: {
                900: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 5
                }, 
                600: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        }
    }), 
  }
</script>


