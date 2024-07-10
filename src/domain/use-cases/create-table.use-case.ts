
export interface CreateTableUseCase {
	// es una función que retorna un string
	execute: ( options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
	base: number;
	limit?: number;
}

// acá nomas hago el for

export class CreateTable implements CreateTableUseCase {

	constructor() {
		/**
		 * DI - inyección de dependencias
		 */
	}


	execute({ base, limit = 10 }: CreateTableOptions) {
		var todo = '';

		for (let i = 1; i <= limit; i++) {
			const res: string = `${base} x ${i} = ${base*i}\n`;
			todo = todo + res;
		}

		return todo;
	}


}


