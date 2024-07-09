import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('pruebas en el archivo 02-templat string', () => { 


    test('get saludo debe retornar hola fernando', () => { 


        const name = 'Ferrando'

        const message = getSaludo(name)


        expect(message).toBe(`Hola ${name}`)

     })
 })