    class Card {
        constructor (btn){
            this.btn = btn
        }

      createCard = ()=>{


        document.getElementById(btn).addEventListener("click", () => {
            console.log('clicked')
        })
       
     }



    }
let  btn = new Card("modal")


btn.createCard()


