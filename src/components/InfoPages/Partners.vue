<template>
    <div 
        id="partner"
    >
        <p class="text-justify">
            Youth Opportunities fosters a culture of cooperation and has been entrusted by leading governmental institutions, international organizations, and initiatives for its value additive contribution to inclusive and sustainable youth development. 
        </p>
        <h3 class="text-center mt-7">Some Major Partners</h3>
        <p class="text-center mt-3">
            Youth Opportunities has successfully partnered with some of the leading international organizations and it continues to grow. A glimpse of our trusted partners include
        </p>

        <v-row class="mt-5">
            <v-col
                cols="12"
                sm="4"
                xs="12" 
                v-for= "partner in partners"
                :key="partner.id"
                class="d-flex flex-column align-center"
            >
                <v-img
                    :src="partner.url"
                    width="170px"
                ></v-img>
                <p class="mt-3">
                    <small>
                        {{partner.name}}
                    </small>
                </p>
            </v-col>
        </v-row>

        <p class="text-justify mt-9">
            Interested in partnering with us? You can explore among the three different options to join our network. Explore the partnership opportunities and please write to us at post@youthop.com . Our team will get back to you with details.
        </p>

        <v-row class="mt-9">
            <v-col
                cols="12"
                xs="12"
                sm="4"
            >
                <h4 class="font-weight-regular mb-4">Institutional Partnership</h4>
                <p>Institutional Partnership is a long term strategic partnership between the two organizations which is forged on the basis of mutual benefit.</p>
            </v-col>
            <v-col
                cols="12"
                xs="12"
                sm="4"
            >
                <h4 class="font-weight-regular mb-4">Promote Program</h4>
                <p>Institutional Partnership is a long term strategic partnership between the two organizations which is forged on the basis of mutual benefit.</p>
            </v-col>
            <v-col
                cols="12"
                xs="12"
                sm="4"
            >
                <h4 class="font-weight-regular mb-4">YO Network</h4>
                <p>Institutional Partnership is a long term strategic partnership between the two organizations which is forged on the basis of mutual benefit.</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {  
        name: 'Partners', 
        data: () => ({
            partners: [
                {
                    id: 1, 
                    name: 'ICT Division, Government of Bangladesh', 
                    url: require('../../assets/image/Partners/partner1.png')
                },
                {
                    id: 2, 
                    name: 'Al Arafah Islami Bank, Bangladesh', 
                    url: require('../../assets/image/Partners/partner2.png')
                }
            ],
        }),
    }
</script>