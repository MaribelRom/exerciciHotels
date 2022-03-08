class Hotel{
    #nameHtl
    #numberRooms
    #numberFloors
    #areaHotel
    constructor(nameHtl,numberRooms,numberFloors,areaHotel){
        this.#nameHtl=nameHtl
        this.#numberRooms=numberRooms
        this.#numberFloors=numberFloors
        this.#areaHotel=areaHotel
    }
    getNameHtl(){
        return this.#nameHtl
    }
    getNumberRooms(){
        return this.#numberRooms
    }
    getNumberFloors(){
        return this.#numberFloors
    }
    getAreaHotel(){
        return this.#areaHotel
    }
    setNameHtl(nameHtl){
        this.#nameHtl=nameHtl
    }
    setNumberRooms(numberRooms){
        this.#numberRooms=numberRooms
    }
    setNumberFloors(numberFloors){
        this.#numberFloors=numberFloors
    }
    setAreaHotel(areaHotel){
        this.#areaHotel=areaHotel
    }
    calcularManteniment(){
       let numberKellys=this.getNumberRooms()/20
        let costManteniment=numberKellys*1500
        return costManteniment
        
    }
}

function crearHotel(){
    let nameHtl=prompt("Nombre del Hotel")
    let numberRooms=Number(prompt("Número de Habitaciones del Hotel"))
    let numberFloors=Number(prompt("Cuantos pisos tiene el Hotel"))
    let areaHotel=Number(prompt("Superficie total del hotel en m"))
   const hotel = new Hotel(nameHtl,numberRooms,numberFloors,areaHotel)
    return hotel
}

let cadenaHoteles=[]
function addHotel(){
    let newHotel= crearHotel()
    cadenaHoteles.push(newHotel)
  
    
    console.log(newHotel)
    console.log(cadenaHoteles)
 
}


function donarDeBaixaHotel(){
    let hotelBaixa=prompt("Nombre del hotel a dar de baja")

    let contador=0 // obtenir la posició del element que volem borrar
    let hotelDoesntExist=true
    for(value of cadenaHoteles){
        if(value.getNameHtl()===hotelBaixa){// valida per cada element si es igual el nom, un per un
            cadenaHoteles.splice(contador,1)//borra del array (posicio, cantitat)
            console.log(`hotel eliminado ${cadenaHoteles}`)
            alert(`Se ha dado de baja el hotel ${hotelBaixa}`)    
            hotelDoesntExist=false
         
        } 
        
        contador++
         
    }

    if(hotelDoesntExist){
        alert(`El hotel ${hotelBaixa} no está en nuestra base de datos`)
        console.log(`El hotel no existe. Verificar en lista ${cadenaHoteles} `)
    }
  
}
function veureHotel(){
 prueba()
} 
function prueba(){
    let hotelNameScript=prompt("Nombre del hotel")
    let contador=0 // obtenir la posició del element que volem veure
    let hotelDoesntExist=true
    let hotelFound
    for(value of cadenaHoteles){
        if(value.getNameHtl()===hotelNameScript){// valida per cada element si es igual el nom, un per un
            cadenaHoteles.length//borra del array (posicio, cantitat)
            console.log(value.getNameHtl(),value.getNumberFloors())
            hotelFound = value
            hotelDoesntExist=false
         
        } 
        
        contador++
         
    }

    if(hotelDoesntExist){
        alert(`El hotel ${hotelNameScript} no está en nuestra base de datos`)
        console.log(`El hotel no existe. Verificar en lista ${cadenaHoteles} `)
    }
    let fichaHotel=document.getElementById("fichaHotel")
    fichaHotel.innerText=`El Hotel ${hotelFound.getNameHtl()}, tiene ${hotelFound.getNumberFloors()} habitaciones, ${hotelFound.getNumberFloors()} pisos y un total de ${hotelFound.getAreaHotel()}m cuadrados.` 
    let mantenimientoElement=document.getElementById("mantenimiento")
    mantenimientoElement.innerText=`El cost de manteniment en maxima ocupació es de ${hotelFound.calcularManteniment()} euros`

} 

function modificarHotel(){
    let hotelNameModificar=prompt("Nombre del hotel")
    let contador=0 // obtenir la posició del element que volem veure
    let hotelDoesntExist=true
    for(value of cadenaHoteles){
        if(value.getNameHtl()===hotelNameModificar){// valida per cada element si es igual el nom, un per un
            cadenaHoteles.length//borra del array (posicio, cantitat)
            //como poner los sets para cambiar los datos del objeto dentro del array
             setNumberRooms=  
            hotelDoesntExist=false
         
        } 
        
        contador++
         
    }
    
    

    if(hotelDoesntExist){
        alert(`El hotel ${hotelNameScript} no está en nuestra base de datos`)
        console.log(`El hotel no existe. Verificar en lista ${cadenaHoteles} `)  
    }
}
