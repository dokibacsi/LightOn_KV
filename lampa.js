class Lampa{
    #allapot
    #id
    #divElem

    constructor(id, allapot, szuloElem){
        this.#id = id
        this.#divElem = szuloElem
        this.#allapot = this.setAllapot()
        this.#divElem.append(`<div class=lampa-${this.#id}></div>`)
    }

    setAllapot(){
       if(this.#allapot == true){
        this.#allapot = false
       }else{
        this.#allapot = false
       }
       this.#szinBeallit()
    }

    #szinBeallit(){
        for (let index = 0; index < this.#divElem.length; index++) {
            if(this.#allapot == false){
                this.#divElem.css("background-color", "green")
            }else{
                this.#divElem.css("background-color", "orange")
            }
        }
            
    }

    #kattintasTrigger(){
        const KATTINT = new CustomEvent("kattintas", {details: this.lampa})
        window.dispatchEvent(KATTINT)
    }
}

export default Lampa