
import fs from 'fs'
import { yarg } from "./config/plugins/args.plugin";


(async() => {
	await main()
})();


async function main() {

	// puedo sacar la base o b con destructuring
	const { b, l, s } = yarg
	const base: number = b;

	var titulo: string =  `- Tabla del ${base} -\n`;
	var todo;

	for (let i = 1; i <= l; i++) {
		const res: string = `${base} x ${i} = ${base*i}\n`;
		todo = todo + res;
	}

	var aaa = titulo+todo

	if (s) {
		console.log(aaa);
	}

	const carpeta = 'outputs'

	// fs.mkdirSync( carpeta, { recursive: true } );
	fs.writeFileSync(`${carpeta}/tabla-${base}.txt`, aaa)
	console.log('Archivo creado :D');

}
