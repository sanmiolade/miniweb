let testTimer = Vue.createApp(
    {                                 
        data() {
            return {
                    theTimex : 'Vue is active'
                }
        },
        //------- Code to run when the Page loads
        mounted() {
            setInterval(() => {
                this.theTimex = new Date().toLocaleString();
            }, 1000)
        },


    });

const theapp = testTimer.mount("#theclock");  