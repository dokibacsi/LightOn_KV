import Lampa from "./Lampa.js"


class JatekTer{
    #db
    #allapotLista = []
    #meret
    #lepes
    
    
    constructor(){
        
        this.#setAllapotLista()
        this.#init(this.#allapotLista)
        
    }

    #setAllapotLista(){
        let ALLAPOT = false
        for (let index = 0; index < 9; index++) {
            let randomSzam = Math.random();
            if(randomSzam < 0.5){
                ALLAPOT = false
            }else{
                ALLAPOT = true
            }
        this.#allapotLista.push(ALLAPOT)
        }
        console.log(this.#allapotLista)
    }

    #szomszedokKeresese(id){

    }

    #init(adat){
        let lampak = adat
        const szuloElem = $("article")
        for (let index = 0; index < lampak.length; index++) {
            new Lampa(index, lampak[index], szuloElem)
        }

    }

    #ellenorzes(){

    }
}

export default JatekTer