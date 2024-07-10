
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'Es la base de la tabla de multiplicar',
	})
	.option('l', {
		alias: 'limit',
		type: 'number',
		default: 10,
		describe: 'Hasta que numero se va a multiplicar'
	})
	.option('s', {
		alias: 'show',
		type: 'boolean',
		default: false,
		describe: 'Muestra la tabla en consola'
	})
	.option('n', {
		alias: 'name',
		type: 'string',
		default: 'tabla de multiplicar',
		describe: 'Nombre del archivo'
	})
	.option('d', {
		alias: 'destination',
		type: 'string',
		default: 'outputs',
		describe: 'Carpeta de destino'
	})
	.check(( argv, options ) => {
		console.log(argv.b);

		if ( argv.b < 1 ) {
			throw 'La basedebe ser mayor a 0'
		}

		return true;

	})
	.parseSync()


