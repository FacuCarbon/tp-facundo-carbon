const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+ '../../data/concesionarias.json', 'utf-8'))

const sucursalesController = {
    sucursales: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        var sucursalesNombre = []
        concesionarias.forEach((sucursales) => {
            sucursalesNombre.push(sucursales.sucursal)
        
        })
        let sucursalesTelefono = []
        concesionarias.forEach(sucursales => {
            sucursalesTelefono.push(sucursales.telefono)
        })
        var sucursalesDireccion = []
        concesionarias.forEach((sucursales) => {
            sucursalesDireccion.push(sucursales.direccion)
        })
        res.write('                                   ¡Nuestras sucursales!' + '\n')
        res.write('\n' + 'Localidad:  '+sucursalesNombre[0]+ '\n' +'Direccion:  '+sucursalesDireccion[0]+ '\n' +'Telefono: '+sucursalesTelefono[0]+'\n')
        res.write('\n' + 'Localidad:  '+sucursalesNombre[1]+ '\n' + 'Direccion: '+sucursalesDireccion[1]+ '\n' + 'Telefono: '+sucursalesTelefono[1]+'\n')
        res.write('\n' + 'Localidad:  '+sucursalesNombre[2]+ '\n' + 'Direccion: '+sucursalesDireccion[2]+ '\n' + 'Telefono: '+sucursalesTelefono[2]+'\n')
        res.write('\n' + 'Localidad:  '+sucursalesNombre[3]+ '\n' + 'Direccion: '+sucursalesDireccion[3]+ '\n' + 'Telefono: '+sucursalesTelefono[3]+'\n')
        res.write('\n' + 'Localidad:  '+sucursalesNombre[4]+ '\n' + 'Direccion: '+sucursalesDireccion[4]+ '\n' + 'Telefono: '+sucursalesTelefono[4]+'\n')
        res.write('\n' + 'Total sucursales: ' + sucursalesNombre.length)
        res.end()
    },
    sucursal: (req, res) => {
         res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
         let sucursales = []
    let totalAutos = []
    const msjError = '[ERROR] No encontramos sucursal con ese nombre. Por favor intente con otra.'
   concesionarias.forEach(local => {
       sucursales.push(local.sucursal)
       if(req.params.sucursal == local.sucursal){
           res.write('Bienvenido a sucursal ' + '-'+local.sucursal+'-' + '\n')
           res.write('\n' + '\n' + 'Localidad: ' +local.sucursal + '\n')
           res.write('\n' + 'Direccion: ' + local.direccion + '\n')
           res.write('\n' + 'Telefono: ' + local.telefono + '\n')
           
           local.autos.forEach(auto => {  
               totalAutos.push(auto.autos) 
               res.write('\n' +'Marca: ' +auto.marca + ' / ' +'Modelo: ' +auto.modelo + '\n' + 'Año: '+auto.anio + ' / '+  'Color: ' + auto.color + "\n")
           
           }) // cierre segundo forEach
           res.end();
       } // cierre IF
           }) // cierre primer forEach
           res.end(msjError)
       
       }
}
module.exports = sucursalesController