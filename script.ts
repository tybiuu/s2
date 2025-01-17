const agregarParrafo = (texto:string) =>{
    const p = document.getElementById("parrafo")
    if (p==null) return
    p.innerText = texto
}
const configurarBoton =() =>{
    console.log("config")
    const but = document.getElementById("butCambiarColor")
    but?.addEventListener("click",(event: MouseEvent)=>{
        console.log("click en boton")
        const footer = document.getElementById("footer")
        //cambiar de color al footer
        footer?.setAttribute("style","fondo_rojo")
        const titulo = document.getElementById("titulo")
        titulo?.setAttribute("style","display:none")
    })
}
const main =()=>{
    agregarParrafo("Hola pw")
    configurarBoton()
}
main()