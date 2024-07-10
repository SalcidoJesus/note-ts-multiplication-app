
import fs from "fs";


export interface SaveFileUseCase {
	execute: ( options: Options ) => boolean
}


export interface Options {
	fileContent: string;
	fileDestination?: string;
	fileName?: string;
}

export class SaveFile implements SaveFileUseCase {

	constructor() {

	}

	execute({
		fileContent,
		fileDestination='outputs',
		fileName
	}: Options ): boolean {

		try {

			fs.mkdirSync( 'outputs/'+fileDestination, { recursive: true } );
			fs.writeFileSync(`outputs/${fileDestination}/${fileName}.txt`, fileContent)
			return true;

		} catch (error) {

			console.log('Error', error);
			return false;

		}

	}

}

