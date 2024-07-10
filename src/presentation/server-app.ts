
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
	base: number;
	limit: number;
	showTable: boolean;
	name: string;
	destination: string;
}

// acá recibo parámetros, pero no creo la tabla ni nada,
// se hace en el create-table.use-case.ts
export class ServerApp {

	static run({ base, limit, showTable, name, destination }: RunOptions ) {
		console.log('clase :D');

		const table = new CreateTable(
			// inyuecciób de depencencias pero no ocupa
		).execute({ base, limit })

		const wasCreated = new SaveFile()
			.execute({
				fileContent: table,
				fileDestination: destination,
				fileName: name
			});

		if (showTable) console.log(table);

		(wasCreated)
			? console.log('Archivo creado :D')
			: console.log('No se pudo crear el archivo');

	}

}
