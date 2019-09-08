class User {
	constructor(name) {
		this.name = name;
		this.answers = [];
	}

	getName(name) {
		return this.name;
	}

	getAnswers() {
		return this.answers;
	}

	addAnswer(answer) {
		this.answers.push(answer);
	}

	addAnswer(answer, number) {
		this.answers[number] = answer;
	}
}