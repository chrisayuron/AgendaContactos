import contactos from "./contactos.js"
let contactoPersonas=''

formulario.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.id=='agregar'){
        if(localStorage.getItem('contactos')==null){
            contactoPersonas=[...contactos]
        }else{
            contactoPersonas=JSON.parse(localStorage.getItem('contactos'))
        }
        let misgustos=(gustos.value).split(',')
        contactoPersonas.push({nombre:nombre.value,apellido:apellido.value,numero:numero.value,gustos:misgustos,foto:`${foto.value}`})
        imagen.src=foto.value
        console.log('byChrisayuron')
        localStorage.setItem('contactos',JSON.stringify(contactoPersonas))
        console.log(contactoPersonas)
        setTimeout(()=>{location='../../index.html'},3000)   
    }else if(e.target.id=='cancelar'){
        location='../../index.html'
    }
})

