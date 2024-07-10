
import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";


(async() => {
	await main()
})();

async function main() {

	// puedo sacar la base o b con destructuring
	const { b:base, l:limit, s:showTable, n: name, d:destination } = yarg
	// console.log({ base, limit, showTable, name, destination });

	// acá nomas recibo parámetros por yargs y los mando a la verdadera app
	// es pa hacer testing pues
	ServerApp.run({ base, limit, showTable, name, destination });

}
