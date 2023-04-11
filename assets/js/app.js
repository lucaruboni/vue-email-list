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
    for (let i = 0; i < 10; i++) {
        axios
        .get(this.url)
        .then(response => {
            this.myData = response.data
            this.email.push(this.myData)

        })

       
        
    }

    console.log(this.email)




  }
}).mount('#app')