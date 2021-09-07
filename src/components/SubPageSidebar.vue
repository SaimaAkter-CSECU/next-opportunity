<template>
    <div 
        id="SubPageSidebar" 
        class="pl-md-5 pl-sm-3 pb-5"
    >
        <v-container fluid>
            <div class="d-flex align-center mb-5 sidebarSearch">
                <v-text-field
                    placeholder="Search"
                    solo
                ></v-text-field>
                <v-btn
                    color="primary"
                    elevation="2"
                    large
                >
                    Search
                </v-btn>
            </div>
            <div class="mb-5 sidebarYoutubeLink">
                <h4 class="sidebarSectionTitle py-3">YO Hits</h4>
                <div class="mt-5">
                    <iframe 
                        width="100%" 
                        height="200" 
                        src="https://www.youtube.com/embed/TFD6YbQX3-A" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    >
                        <div>
                        <html><head><title>YouTube</title><link rel="stylesheet" href="/s/subscriptions/subscribe_embed/css/www-subscribe-embed_split_v0.css" name="www-subscribe-embed" nonce="Dgvvkf6IwvLtAr9b9e3mJw"></head><body id="" class="date-20210905 en_US ltr full light  site-center-aligned site-as-giant-card  webkit webkit-537" dir="ltr" marginwidth="0" marginheight="0"><div id="yt-subscribe"><a href="/channel/UCeV06upb_vRYFvLuwItpXkQ" target="_blank" dir="ltr"><span class="video-thumb  yt-thumb yt-thumb-48"><span class="yt-thumb-square"><span class="yt-thumb-clip"><img alt="" aria-hidden="true" data-ytimg="1" height="48" src="https://yt3.ggpht.com/ytc/AKedOLQnIZMefY4E7FE5l6tbggLDOVfXWjQKDVA4LDvf=s48-c-k-c0x00ffffff-no-rj" width="48"><span class="vertical-align"></span></span></span></span></a><a href="/channel/UCeV06upb_vRYFvLuwItpXkQ" class="yt-username" target="_blank" dir="ltr">Youth Opportunities</a><span class=" yt-uix-button-subscription-container"><button class="yt-uix-button yt-uix-button-size-default yt-uix-button-subscribe-branded yt-uix-button-has-icon no-icon-markup yt-uix-subscription-button yt-can-buffer external fixed-width" type="button" onclick=";return false;" aria-busy="false" aria-live="polite" data-channel-external-id="UCeV06upb_vRYFvLuwItpXkQ" data-href="http://www.youtube.com/channel/UCeV06upb_vRYFvLuwItpXkQ?sub_confirmation=1&amp;feature=subscribe-embed-click" data-insecure="True" data-params="" data-style-type="branded" data-target="_top" data-parent-url="https://www.youthop.com/about"><span class="yt-uix-button-content"><span class="subscribe-label" aria-label="YouTube">YouTube</span><span class="subscribed-label" aria-label="YouTube">YouTube</span><span class="unsubscribe-label" aria-label="YouTube">YouTube</span></span></button><br><span class="yt-subscription-button-disabled-mask" title=""></span></span></div></body></html>
                        </div>
                    </iframe>
                    
                </div>
            </div>
            <div class="mt-5">
                <h4 class="sidebarSectionTitle py-3">Trending</h4>
                <div
                    class="mt-5" 
                >
                    <v-card
                        max-width="100%"
                        v-for="trending in trendings" 
                        :key=" trending.id"
                        elevation="0"
                    >
                        <v-list-item  class="mt-3 d-flex align-start">
                            <v-list-item-avatar
                                tile
                                size="50"
                                class="mt-1 align-self-start"
                            >
                                <v-img
                                    :src="trending.url"
                                >
                                </v-img>
                            </v-list-item-avatar>
                            
                            <v-list-item-content>
                                <p class="">
                                    <small>{{trending.category}}</small>
                                </p>
                                <v-list-item-title 
                                    class="text-p font-weight-thin mt-1 mb-3 text-wrap" 
                                >
                                    <router-link to="">
                                        {{trending.title}}
                                    </router-link>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card>  
                </div>
            </div>
            <div class="mt-5">
                <h4 class="sidebarSectionTitle py-3">Keep Connected</h4>
                <div
                    class="mt-5"
                >
                    <div class="d-flex justify-center social-icons" >
                        <a href="#">
                            <v-icon
                                x-large
                                color="primary"
                                class="mx-2"
                                >
                                mdi-facebook 
                            </v-icon>
                        </a>
                        <a href="#">
                            <v-icon
                                x-large
                                color="primary"
                                class="mx-2"
                                >
                                mdi-linkedin 
                            </v-icon>
                        </a>
                        <a href="#">
                            <v-icon
                                x-large
                                color="primary"
                                class="mx-2"
                                >
                                mdi-youtube 
                            </v-icon>
                        </a>
                    </div>
                    <div class="d-flex justify-center mt-4" >
                        <a href="#" >
                            <v-img
                                :src="gPlay"
                                max-width="100%"
                                rounded
                            >
                            </v-img>
                        </a>
                    </div>
                    <div class="d-flex justify-center mt-2" >
                        <a href="#">
                            <v-img
                                :src="iPlay"
                                max-width="100%"
                                rounded
                            >
                            </v-img>
                        </a>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    import gPlay from '../assets/image/g-play.png';
    import iPlay from '../assets/image/i-play.png';
    export default {  
        name: 'SubPageSidebar', 
        components: {
            // Trending
        },
        data: () => ({
            gPlay: gPlay, 
            iPlay: iPlay, 
            trendings: [
                {
                    id: 1, 
                    title: 'GivingTuesday Starling Collective Fellowship 2021', 
                    category: 'FELLOWSHIPS', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents1.jpg'), 
                }, 
                {
                    id: 2, 
                    title: 'GivingTuesday Starling Collective Fellowship 2021', 
                    category: 'FELLOWSHIPS',  
                    url: require('../assets/image/upcommingEvents/TrendingEvents2.jpg'), 
                },
                {
                    id: 3, 
                    title: 'Danish Government Scholarships 2022 in the University of Copenhagen (UCPH)', 
                    category: 'MASTERS/POST GRADUATE', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents3.jpg'), 
                },
                {
                    id: 4, 
                    title: 'Westerwelle Foundation Young Founders Programme Autumn 2021', 
                    category: 'FELLOWSHIPS', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents4.jpg'), 
                },
                {
                    id: 5, 
                    title: '2021 Call for Applications :: Cambridge-Africa ALBORADA Research Fund', 
                    category: 'GRANT', 
                    url: require('../assets/image/upcommingEvents/TrendingEvents2.jpg'), 
                }
            ],
        }),
    }
</script>