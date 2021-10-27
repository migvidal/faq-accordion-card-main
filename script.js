let app = Vue.createApp({
    props: ['index'],
    data() {
        return {}
    }
})
app.component('app-detail', {
    data() {
        return {
            summaries: ['How many team members can I invite?',
                'What is the maximum file upload size?',
                'How do I reset my password?',
                'Can I cancel my subscription?',
                'Do you provide additional support?'
            ],
            data: ['You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
                'No more than 2GB. All files in your account must fit your allotted storage space.',
                'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
                'Yes! Send us a message and we’ll process your request no questions asked.',
                'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
            ],
            isOpen: false
        }
    },
    methods: {
        collapseOthers(evt) {
            
        }
    },
    template: `<div>
<details @click='collapseOthers' v-bind:class='isOpen' v-for="(summary, index) in summaries">

    <summary>
    <h3>{{summary}}</summary></h3>
    
    <p>{{this.data[index]}}</p>
    </details>
    
    
</div>`
});
app.mount('#lightbox');
