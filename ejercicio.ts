
export const filtrarNumerosMayores = (lista: number[],limite : number) =>{
    const listaFiltrada : number[] = []
    /*for(let i=0;i<lista.length;i++){
        const num = lista[i]
        if(num>limite){
            listaFiltrada.push(num)
        }
    }*/
    //otra forma
    for(let num of lista){
        if(num>limite){
            listaFiltrada.push(num)
        }
    }
    return listaFiltrada
}
//filtrando de manera funcional
export const filtrarNumerosMayoresFuncional = (lista: number[],limite : number) =>{
    return lista.filter((elem:number)=>{
        return elem>limite
    })
    const predicado = (elem : number) =>{
        if(elem >limite){
            return true
        }else{
            return false
        }
    }
    //return lista.filter(predicado)
}
export const calcularPromedio = (lista: number [])=>{
    let suma : number = 0
    for(let num of lista){
        suma+=num
    }
    return suma/lista.length
}
