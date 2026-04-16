import http from 'node:http'
import { url } from 'node:inspector'



const app = http.createServer((peticion, respuesta)=>{
    if(peticion.method === 'GET'){
        if(peticion.url === '/'){
        respuesta.end('Estas en la raiz') 
        }
        if(peticion.url === 'usuarios'){
        respuesta.statusCode = 200    
        return respuesta.end('Estas en la ruta usuarios')
        }
    }   
    respuesta.statusCode = 404
    respuesta.end('ruta no encontrada') 
})

app.listen(3000, ()=>{
    console.log('servidor corriendo en http://localhost:3000')
})

