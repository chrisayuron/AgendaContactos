import contactos from './contactos.js' //import sin {} por que use default

let personas='' 
if (localStorage.getItem('contactos')!=null){ 
    personas=JSON.parse(localStorage.getItem('contactos'))
}else{
    personas=contactos
}
container.addEventListener('click',(event)=>{
    foto.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-72VTyk92KAa_BmI-kPpE8PcWVa5yeyyCijw37BzmTECSOW7YBTajLxF8E_lHw9dryM&usqp=CAU"
    //by Chrisayuron
    if(event.target.id=='buscar'){
        if(personas.find(persona=>(persona.nombre).toUpperCase()==(nombre.value).toUpperCase())){
            const persona=personas.findIndex(persona=>(persona.nombre).toUpperCase()==(nombre.value).toUpperCase())
            if (propiedad.value=='ninguno'){
                result.innerHTML=`
                Nombre: ${personas[persona].nombre},<br>
                Apellido: ${personas[persona].apellido},<br>
                Cel: ${personas[persona].numero},<br>
                Gustos: ${personas[persona].gustos}`
                foto.src = personas[persona].foto
            }else if(propiedad.value=='apellido'){
                result.innerHTML=`
                Apellido: ${personas[persona].apellido}`
                foto.src = personas[persona].foto
            }else if(propiedad.value=='numero'){
                result.innerHTML=`
                Numero: ${personas[persona].numero}`
                foto.src = personas[persona].foto
            }else if(propiedad.value=='gustos'){
                result.innerHTML=`
                Gustos: ${personas[persona].gustos}`
                foto.src = personas[persona].foto
            }
        }else{
            alert('Persona no encontrada')
        }
    
}else if(event.target.id=='agregar'){
    location='./sources/html/agregar.html'
  
}
})

nombre.addEventListener('focus',()=>{
    result.innerHTML=''
    nombre.value=''
    propiedad.value='ninguno'
    foto.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-72VTyk92KAa_BmI-kPpE8PcWVa5yeyyCijw37BzmTECSOW7YBTajLxF8E_lHw9dryM&usqp=CAU"
    //by Chrisayuron
})

function imprimirContactos(){
    personas.forEach((persona,indice)=>{
        let imagen=document.createElement('img')
        imagen.src=persona.foto
        imagen.id=indice
        imagen.title=persona.nombre //para mostrar el nombre como un popup
        personajes.appendChild(imagen)
    })
}
imprimirContactos()
