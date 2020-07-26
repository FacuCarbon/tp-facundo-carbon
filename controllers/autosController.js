const fs = require('fs')

const concesionarias = JSON.parse(fs.readFileSync(__dirname+ '../../data/concesionarias.json', 'utf-8'))

autosController = {
    autos: (req,res) => {
        res.set({ 'content-type': 'text/plain; charset=utf-8' })
        let autosTotales = []
        res.write('                                ¡Todos los autos de nuestras sucursales!' + '\n')
        concesionarias.forEach(local => {
            local.autos.forEach(auto => {
                autosTotales.push(auto.autos)
                res.write('\n'+auto.marca + '  '+ auto.modelo + '\n' + 'Año: '+auto.anio + ' / '+  'Color: ' + auto.color + "\n")
    });
            })
            res.write('\n' +'Autos totales ' + autosTotales.length)
        res.end()
    },
marca: (req,res) => {
    res.set({ 'content-type': 'text/plain; charset=utf-8' })
        let marcasAutos = []
        const msjError = '[ERROR] No encontramos sucursal con ese nombre. Por favor intente con otra.'
        res.write('                                         CATALOGO' + '\n')
        res.write('                        Elejí tu opción preferida, y cosulta sin costo alguno!')
         concesionarias.forEach(local => {
                local.autos.forEach(auto => {
                    if(req.params.marca == auto.marca){
                        marcasAutos.push(auto.marca)
                        
                    res.write('\n' +'\n' +auto.marca + ' ' +auto.modelo + '\n' + 'Año: '+auto.anio + ' / '+  'Color: ' + auto.color + "\n")
                    
                }
                
                })
               
            })
            res.write('\n' +'Total de marcas: ' + marcasAutos.length)
           
            res.end()
            },
            /* Esto era opcional, lamentablemente me quede sin tiempo para lograr que la busqueda sea por año x, o color x, tengo mucho que rendir y a no hacerlo
             preferi hacerlo asi, mis disculpas.
             /autos/:marca/colores (colores de los autos de la :marca)
             /autos/:marca/años (años de los autos de la :marca)         */
            dato: (req,res) => {
                res.set({ 'content-type': 'text/plain; charset=utf-8' })
                let dato = req.params.dato
                let color = []
                let anio = []
                concesionarias.forEach(local => {
                    local.autos.forEach(auto => {
                        color.push(auto.color)
                            anio.push(auto.anio)
                            
                        if(req.params.marca == auto.marca && dato == 'colores'){    
                           
                        res.write('\n'+auto.color + '\n')
                    }
                    if(req.params.marca == auto.marca && dato == 'años'){ 
        
                    res.write('\n' + auto.anio + '\n')
                    }
                    })
                })
                res.end()
                           }
                           
        }

module.exports = autosController