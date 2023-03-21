let testTimer = new Vue(
    {                                 
        data() {
            return {
                    theTime : 'Vue is active'
                }
        },
        //------- Code to run when the Page loads
        mounted() {
            setInterval(() => {
                this.theTime = new Date().toLocaleString();
            }, 1000)
        },


    });

const theapp = testTimer.$mount("#theclock");  