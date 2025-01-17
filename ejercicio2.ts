export type Punto = [number,number]
export const distanciaEntrePuntos =(p1: Punto,p2:Punto)=>{
    const distancia = Math.sqrt(
        (Math.pow((p1[1]-p2[1]),2))+
        (Math.pow((p1[0]-p2[0]),2)))
    return distancia
}
/*const moverPunto = (p:Punto,dx : number, dy:number)=>{
    const nuevoPunto :  Punto = [p[0],p[1]]
    nuevoPunto[0]+=dx
    nuevoPunto[1]+=dy
    return nuevoPunto
}*/

export const moverPunto = (p:Punto, delta:[number,number])=>{
    const nuevoPunto :  Punto = [p[0],p[1]]
    nuevoPunto[0]+=delta[0]
    nuevoPunto[1]+=delta[1]
    return nuevoPunto
}