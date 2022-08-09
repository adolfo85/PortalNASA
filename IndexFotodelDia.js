// para que la api se cargue cuando se abra la página
// obtenerDatos es una función
window.addEventListener('load', obtenerDatos)

// function obtenerDatos (){
//     const Nasa_key = 'mAuwRayKeeSjeQhROLmgwcCxnO1HkFDIUKBWgLVi'

//     // borra la key de la ruta y lo modifica y concatena con Nasa-api
//     const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_key}`

//     fetch(ruta)
//     // los .then es para que la respuesta esté en formato json 
//     // esos datos obtenidos se guardan en la variable resultado y lo mandamos a
//     // una función mandarDatos

//     .then(respuesta =>respuesta.json())
//     .then(resultado => mostrarDatos(resultado))
// }

// // Crea la función mostrarDatos y elige qué datos va a traer del json
//  mostrarDatos=({date, explanation, media_type, title, url})=>{
//     const titulo = document.querySelector('#titulo');
//     // con lo siguiente introduce los datos recibidos al h3 del html:
//     titulo.innerHTML = title;

//     const fecha = document.querySelector('#fecha');
//     fecha.innerHTML = date

//     const descripcion = document.querySelector('#descripcion');
//     descripcion.innerHTML = explanation

//     // El media puede ser imagen o video, por lo que necesita un if. 
//     const multimedia = document.querySelector('#c_multimedia');

//     // iframe de boostrap: https://getbootstrap.com/docs/4.0/utilities/embed/
//     if(media_type == 'video'){
//         multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}" allowfullscreen></iframe>`
//     }else{
//         multimedia.innerHTML = `<img src="${url}" class="img-fluid rounded mx-auto d-block" alt="${url}">`

//         }

//     }






async function obtenerDatos (){
    let API_KEY = 'mAuwRayKeeSjeQhROLmgwcCxnO1HkFDIUKBWgLVi'
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    mostrarDatos(data)
}

function mostrarDatos(data){
    document.querySelector
}



























// const cargarAppiNasa = async () => {
  
  
//   try{const respuesta = await fetch(
//     "https://api.nasa.gov/planetary/apod?api_key=vesnjQIeqsG8jHmxfqfv7LrdNZQriovGpfSzpJY7"
//   );

//   console.log(respuesta); 

//   const info = await respuesta.json();

//   let noticia = ""
//   info.results.forEach(noticia => {
//     noticia += `<h3>${noticia.title}</h3>` 
//     // El error sale porque la api no me da un array?
    
//   });



//   console.log(info)

// }catch(error){
//     console.log(error)
//   } 
// };

// cargarAppiNasa();

// // datos a utilizar de la api: 
// // explanation
// // title
// // media_type