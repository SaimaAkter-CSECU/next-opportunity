<template>
  <v-app class="subPages">
    <SubPageHeader />
    <v-main>
      <SubPageBanner />
      <v-container>
        <v-row>
            <v-col
                cols="12"
                md="9"
                sm="12"
                id="infoPages"
                :style="
                $vuetify.breakpoint.mdAndUp
                    ? 'padding-top: 100px; padding-bottom: 100px;'
                    : 'padding-top: 50px; padding-bottom: 50px;'
                "
            >
                <router-view></router-view>
            </v-col>
            <v-col
                cols="12"
                md="3"
                sm="12"
                :style="$vuetify.breakpoint.mdAndUp ? 'border-left: 1px solid #e5e5e5' : ''"
            >
                <SubPageSidebar />
            </v-col>
        </v-row>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import SubPageHeader from "../SubPageHeader.vue";
import SubPageBanner from "../SubPageBanner.vue";
import SubPageSidebar from "../SubPageSidebar.vue";
import Footer from "../Footer.vue";

export default {
  name: "InfoPage",
  components: {
    SubPageHeader,
    SubPageBanner,
    SubPageSidebar,
    Footer,
  },
};
</script>
