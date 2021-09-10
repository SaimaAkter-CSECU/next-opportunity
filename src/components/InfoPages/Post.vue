<template>
    <div 
        id="post" 
    >
        <v-container>
            <div>
                <p class="mb-2 font-weight-thin">
                    Have any opportunity that you would like to share with Youth Opportunities community? Please use this form to inform us about it. You can also mail us at post@youthop.com.
                </p>
                <p class="mb-2 font-weight-thin">
                    By submitting opportunity to us, you are agreeing to these terms. Please read them carefully.
                </p>
                <div class="pl-md-7 pl-md-3 mb-2 text-p font-weight-thin">
                    1. Information provided here is true and do not contain confidential information which would in anyway harm the concerned or other organization. Authenticity, validity and reliability of information shared are also ensured and the submitter takes full responsibilities of these,
                </div>
                <div class="pl-md-7 pl-md-3 mb-2 text-p font-weight-thin">
                    2. Information provided here would be shared with potential beneficiary/viewers through Website, Social Media and other means of communication, and
                </div>
                <div class="pl-md-7 pl-md-3 text-p font-weight-thin">
                    3. Permission to use the Image uploaded for this opportunity is provided to Youth Opportunities, if no image is shared, YO has the right to design, manipulate and use appropriate images pertaining to this opportunity.
                </div>
                
            </div>
            <div class="mt-5">
                <iframe width="100%" height="456" src="https://www.youtube.com/embed/vg9jMMcjDG8?feature=oembed&amp;enablejsapi=1&amp;origin=https://www.youthop.com&amp;wmode=opaque&amp;showinfo=0" style="border: none" allow="autoplay; encrypted-media" allowfullscreen="" id="fitvid603812"></iframe>
            </div>
            <div class="mt-7">

                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Title <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="title"
                                :rules="inputRules"
                                width="100%"
                                required
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Opportunity Description <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <editor 
                                v-model="opportunity_description"
                                :initialValue="opportunity_description"
                                :options="defaultOptions"
                                height="250px"
                                initialEditType="wysiwyg"
                                previewStyle="vertical"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Opportunity Type <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-select
                                v-model="opportunity_type"
                                :items="opportunity_types"
                                item-text="type"
                                item-value="id"
                                :rules="[v => !!v || 'Opportunity Type is required']"
                                dense
                                single-line 
                                outlined
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Funding Type
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-select
                                v-model="funding_type"
                                :items="funding_types"
                                item-text="type"
                                item-value="id"
                                dense
                                single-line 
                                outlined
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Category <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-combobox
                                v-model="category"
                                :items="categories"
                                item-value= "id"
                                item-text="cat"
                                :rules="[v => !!v || 'Category is required']"
                                multiple
                                outlined
                                dense
                                requried
                            ></v-combobox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Benefits <span class="red--text">*</span>
                            </div>
                            <div class="subtitle-2 font-weight-thin">Please write what the participants will gain from this opportunity.</div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <editor 
                                v-model="benefit"
                                :initialValue="benefit"
                                :options="defaultOptions"
                                height="250px"
                                initialEditType="wysiwyg"
                                previewStyle="vertical"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Application Process <span class="red--text">*</span>
                            </div>
                            <div class="subtitle-2 font-weight-thin">Please write on how to apply for this opportunity.</div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <editor 
                                v-model="application_process"
                                :initialValue="application_process"
                                ref="toastuiEditor"
                                :options="defaultOptions"
                                height="250px"
                                initialEditType="wysiwyg"
                                previewStyle="vertical"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Apply Link 
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="apply_link"
                                width="100%"
                                prepend-inner-icon="mdi-earth"
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Has Deadline
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <!-- <v-switch v-model="hasDeadline" inset dense color="info">
                            </v-switch> -->
                            <v-switch
                                v-model="hasDeadline"
                                inset
                                dense 
                                color="info"
                                :label="`Has Deadline: ${hasDeadline ? 'Yes' : 'On Going'}`"
                            ></v-switch>

                        </v-col>
                    </v-row>
                    <v-row v-show="hasDeadline">
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Application Deadline (UTC+0)
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="application_deadline"
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                    single-page                                     
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="application_deadline"
                                    @input="menu = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                For Further Queries
                            </div>
                            <div class="subtitle-2 font-weight-thin">
                                How should applicants get in touch with the organization for any queries
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-textarea
                                v-model="further_quries"
                                width="100%"
                                dense
                                outlined
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Official Link <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="official_link"
                                :rules="inputRules"
                                prepend-inner-icon="mdi-earth"
                                width="100%"
                                required
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Program Start Date
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-menu
                                v-model="menu1"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="program_start_date"
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                    single-page                                     
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="program_start_date"
                                    @input="menu1 = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Program End Date
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-menu
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="program_end_date"
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined 
                                    single-page=""
                                ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="program_end_date"
                                    @input="menu2 = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Organizers
                            </div>
                            <div class="subtitle-2 font-weight-thin">
                                Opportunity providing organization's name
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-combobox
                                v-model="organizer"
                                :items="organizers"
                                item-value="id"
                                item-text="org"
                                multiple
                                chips
                                outlined
                            ></v-combobox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Organizers (If not in the above list)
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="organizer_not_in_list"
                                width="100%"
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Regions
                            </div>
                            <div class="subtitle-2 font-weight-thin">
                                Mention where the program will be held. Select "Online" in case of online contents or event.
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-combobox
                                v-model="region"
                                :items="regions"
                                item-value="id"
                                item-text="reg"
                                multiple
                                chips
                                outlined
                            ></v-combobox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Regions (If not in the above list)
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="region_not_in_list"
                                width="100%"
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Location
                            </div>
                            <div class="subtitle-2 font-weight-thin">
                                City or venue of the program 
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="location"
                                width="100%"
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Eligibilities <span class="red--text">*</span>
                            </div>
                            <div class="subtitle-2 font-weight-thin">Please write about minimum requirements to qualify for this opportunity.</div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="elligibility"
                                :rules="inputRules"
                                width="100%"
                                required
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Eligible Regions <span class="red--text">*</span>
                            </div>
                            <div class="subtitle-2 font-weight-thin">
                                Comma Separated | ‘Mention ‘Country name’ or ‘Region’s name’ or ’Open for All’ based on eligibilities | Example : Bangladesh, Cambodia, Vietnam, Nigeria, Commonwealth Countries
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-textarea
                                v-model="elligible_regions"
                                :rules="inputRules"
                                width="100%"
                                required
                                dense
                                outlined
                            ></v-textarea>
                        </v-col>
                    </v-row>

                    <v-row class="mt-9">
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Your Details
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Official Representative <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-checkbox
                                v-model="official_representative"
                                width="100%"
                                label="Yes, I am an official representative for this opportunity provider. You can contact me for further query"
                                :rules="[v => !!v || 'You must agree to continue!']"
                                required
                                dense
                                single-line 
                            ></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Official Contact Email <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="offical_contact_email"
                                :rules="emailRules"
                                width="100%"
                                required
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Official Contact Person <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="offical_contact_person"
                                :rules="inputRules"
                                width="100%"
                                required
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Your Name <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="name"
                                :rules="inputRules"
                                width="100%"
                                required
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Your Email Address <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                width="100%"
                                required
                                dense
                                single-line 
                                outlined
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            md="3"
                            sm="12"
                            class="label"
                        >
                            <div class="text-h6">
                                Featured Image <span class="red--text">*</span>
                            </div>
                        </v-col>
                        <v-col
                            cols="12"
                            md="9"
                            sm="12"
                            class="text-field"
                        >
                            <v-file-input
                                v-model="featured_image"
                                truncate-length="15"
                                prepend-icon-inner ="mdi-paperclip"
                                dense 
                                required
                                single-line 
                                outlined
                            ></v-file-input>
                        </v-col>
                    </v-row>

                    <v-row class="mt-7">
                        <v-col
                            cols="12"
                            md="12"
                            class="text-center"
                        >
                            <v-btn
                                :disabled="!valid"
                                color="primary"
                                class="mr-4"
                                @click="validate"
                            >
                                Submit Application
                            </v-btn>

                            <v-btn
                                color="error"
                                class="mr-4"
                                @click="reset"
                            >
                                Cancle
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </div>
        </v-container>
    </div>
</template>

<script>
    import '@toast-ui/editor/dist/toastui-editor.css';
    import { Editor } from '@toast-ui/vue-editor';
    export default {  
        name: 'Post', 
        components:{
            editor: Editor, 
        },
        data: () => ({

            title: '',
            opportunity_description: '', 
            opportunity_type: null, 
            opportunity_types: [
                {
                    id: 1, 
                    type: 'General Opportunity'
                }, 
                {
                    id: 2, 
                    type: 'Scholarship'
                },
                {
                    id: 3, 
                    type: 'Internship'
                }
            ],
            funding_type: null,
            funding_types: [
                {
                    id: 1, 
                    type: 'Fully Funded'
                }, 
                {
                    id: 2, 
                    type: 'Partially Funded'
                },
            ],
            category: null,
            categories: [
                {
                    id: 1, 
                    cat: 'Category 1'
                }, 
                {
                    id: 2, 
                    cat: 'Category 2'
                }, 
                {
                    id: 3, 
                    cat: 'Category 3'
                }, 
                {
                    id: 4, 
                    cat: 'Category 4'
                }, 
                {
                    id: 5, 
                    cat: 'Category 5'
                }, 
                {
                    id: 6, 
                    cat: 'Category 6'
                }, 
            ],
            benefit: '', 
            application_process: '',
            apply_link: '',
            hasDeadline: true, 
            menu: false, 
            application_deadline: '', 
            further_quries: '', 
            official_link: '', 
            menu1: false,
            program_start_date: '' ,
            menu2: false, 
            program_end_date: '' ,
            organizer: null,
            organizers: [
                {
                    id: 1, 
                    org: 'Organizer 1'
                }, {
                    id: 2, 
                    org: 'Organizer 2'
                }, 
                {
                    id: 3, 
                    org: 'Organizer 3'
                }, 
                {
                    id: 4, 
                    org: 'Organizer 4'
                }
            ],
            organizer_not_in_list: '',
            region: '',
            regions: [
                {
                    id: 1, 
                    reg: 'Region 1'
                }, 
                {
                    id: 2, 
                    reg: 'Region 2'
                }, 
                {
                    id: 3, 
                    reg: 'Region 3'
                }, 
                {
                    id: 4, 
                    reg: 'Region 4'
                }, 
                {
                    id: 5, 
                    reg: 'Region 5'
                }, 
                {
                    id: 6, 
                    reg: 'Region 6'
                }, 
            ],
            region_not_in_list: '',
            location: '', 
            elligibility: '',
            elligible_regions: '', 
            official_representative: false,
            offical_contact_email: '', 
            offical_contact_person: '',
            name: '', 
            email: '', 
            featured_image: null, 

            defaultOptions: {
                language: 'en-US',
                useCommandShortcut: true,
                usageStatistics: true,
                hideModeSwitch: false,
                toolbarItems: [
                    ['heading', 'bold', 'italic', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                    ['table', 'image', 'link'],
                    ['code', 'codeblock'],
                    ['scrollSync'],
                ]
            },

            valid: true,
            inputRules: [
                v => !!v || 'Name is required',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            
        }),

        methods: {
            validate () {
                this.$refs.form.validate(); 
            },
            reset () {
                this.$refs.form.reset()
            },
        },
    }
</script>