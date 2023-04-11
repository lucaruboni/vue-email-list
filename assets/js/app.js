const { createApp } = Vue

createApp({
  data() {
    return {
        url: "https://flynn.boolean.careers/exercises/api/random/mail",
        myData:null,
        email: [

        ]
    }
  },

  mounted(){
    axios
    .get(this.url)
    .then(response => {
        

    for (let i = 0; i < 10; i++) {
        this.myData = response.data
        let element = response.data.response
        console.log(element)
    }

  /*       for (let i = 0; i < 10; i++) {
            this.myData += response.data.response
            console.log(response.data.response)
            
        } */
    })

  }
}).mount('#app')