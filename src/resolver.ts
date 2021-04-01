export function getRelated(file: string) {
	if (isFactory(file)) {
		return factoryToCode(file);
	} else {
		return codeToFactory(file);
	}
}

export function isFactory(file: string) {
	return file.includes('/spec/factories/');
}

export function codeToFactory(file: string) {
	return file.replace('/app/models/', '/spec/factories/');
}

export function factoryToCode(file: string) {
	return file.replace('/spec/factories/', '/app/models/');
}
