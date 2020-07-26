const fs = require('fs')
const concesionarias = JSON.parse(fs.readFileSync(__dirname+ '../../data/concesionarias.json', 'utf-8'))

const marcasController = {
    marcas: (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let marcasTotales = []
        
        concesionarias.forEach(local => {
            local.autos.forEach(auto => {
                marcasTotales.push(auto.marca)
            })
        }) 
        // filtro de marcas duplicadas con metodo filter, en conjunto con indexOf
        let marcasSinDuplicados = marcasTotales.filter((unico, repetido) => marcasTotales.indexOf(unico) === repetido)
        // forEach al nuevo array sin repetidos = 12 marcas y a cruzar los dedos
        res.write('              Tenemos variedad de marcas. ¡Busca y/o consulta la ideal para vos!       ' + '\n')
        res.write('\n' +'Total de marcas disponibles: ' + marcasSinDuplicados.length + '\n')
        marcasSinDuplicados.forEach(marcas => {
            
            res.write('\n'+'-' +marcas +'\n')
        })
        
  res.end()
},

marca: (req,res) => {
         res.set({ 'content-type': 'text/plain; charset=utf-8' })
        let marcasAutos = []
        res.write('                                         CATALOGO' + '\n')
        res.write('                        Elejí tu opción preferida, y cosultá sin costo alguno!')
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
            }
        }
    

module.exports = marcasController