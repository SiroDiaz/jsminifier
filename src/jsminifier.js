import {readFileSync} from "fs"

class JSminifier {
	constructor(file) {
		this.file = file
	}	
	minify() {
		let data = readFileSync(this.file, 'utf8');
		data = data.replace(/\r|\t/g, "")
		let lines = data.split('\n')
		
		for(let i = 0; i < lines.length; i++) {
			lines[i] = lines[i].trim()

			if(!/(\(|\{)$/.test(lines[i]) && lines[i].length > 0) {
				if(!/\;$/g.test(lines[i]) && !/(\}|\,|\+|\:)$/.test(lines[i])) {
					if(!/^((\'|\")(.*?)(\'|\"))$/.test(lines[i])) {
						lines[i] += ';'
					}
				}
			}
		}

		return lines.join('\n').replace(/\n/g, '')
	}
}

module.exports = JSminifier