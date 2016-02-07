import {readFileSync} from "fs"

class JSminifier {
	constructor(file) {
		this.file = file
	}

	addSemicolon(content) {
		content = content.replace(/\r|\t/g, "")
		let lines = content.split('\n')
		
		for(let i = 0; i < lines.length; i++) {
			lines[i] = lines[i].trim()

			if(/\/\/\s*(.*?)/.test(lines[i])) {
				lines[i] = '\n';
			}

			if(!/(\(|\{|\[)$/.test(lines[i]) && lines[i].length > 0) {
				if(!/\;$/g.test(lines[i]) && !/(\}|\,|\+|\:)$/.test(lines[i])) {
					if(!/^((\'|\")(.*?)(\'|\"))|(true|false)|[0-9]+|\{|\}|\]$/.test(lines[i])) {
						lines[i] += ';'
					}
				}
			}
		}

		return lines.join('\n').replace(/\n/g, '')
	}

	minify() {
		if(this.file instanceof Array) {
			let jsMinified = ''
			for(let i = 0; i < this.file.length; i++) {
				jsMinified += this.addSemicolon(readFileSync(this.file[i], 'utf8'))
			}

			return jsMinified;
		}

		return this.addSemicolon(readFileSync(this.file, 'utf8'))
	}
}

module.exports = JSminifier