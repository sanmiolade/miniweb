const Home = { 
    template: 
    /*html*/ 
    `<h1 id="theclock">Sanmi Today The time is {{theTime}}</h1>`,


    data() {
        return {
                theTime : 'Vue is active soon'
            }
    },
    //------- Code to run when the Page loads
    mounted() {
        setInterval(() => {
            this.theTime = new Date().toLocaleString();
        }, 1000)
    },


}