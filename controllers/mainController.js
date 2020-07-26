const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+ '../../data/concesionarias.json', 'utf-8'))


const mainController = {
    home: (req, res) => {
        res.set({ 'content-type': 'text/plain; charset=utf-8' })
        let nombreSucursales = []
        concesionarias.forEach((sucursales) => {
            nombreSucursales.push(sucursales.sucursal)
        })
    
        res.write('              ¡Bienvenido! Nuestra red de concesionarias cuenta con sus sedes en varias localidades. ¡Busca la tuya!' + '\n')
        res.write('\n' + nombreSucursales[0] + '\n')
        res.write('\n' + nombreSucursales[1] + '\n')
        res.write('\n' + nombreSucursales[2] + '\n')
        res.write('\n' + nombreSucursales[3] + '\n')
        res.write('\n' + nombreSucursales[4] + '\n')
        res.write('\n' + 'Total sucursales: ' + nombreSucursales.length)
        res.end()
    }
    
}

module.exports = mainController