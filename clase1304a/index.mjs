
import fsp from 'node:fs/promises'
import path from 'node:path'

try {
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')
    const usuarios = await respuesta.json()

    const usuariosModificados = usuarios.map((usuario)=>{
        const usuariosModificado = {
            id:usuario.id,
            email:usuario.email,
            nombre:usuario.nombre
        }
        return usuariosModificado
    })


    const ruta = path.resolve('usuarios.json')
    const datosJson = JSON.stringify(usuariosModificados)
    await fsp.writeFile(ruta, datosJson)

    const usuariosLocales = await fsp.readFile(ruta, 'utf-8')
    console.log(usuariosLocales)

}catch(error){
    console.log(respuesta)
}