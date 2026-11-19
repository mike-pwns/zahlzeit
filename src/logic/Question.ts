class Question {
    answer: string;
    expectedAnswer: string;
    isCorrect: boolean;

    constructor(answer: string, expectedAnswer: string) {
        this.answer = answer;
        this.expectedAnswer = expectedAnswer;
        this.isCorrect = false;
    }

    checkAnswer() {
        return (this.answer === this.expectedAnswer);
    }
}

class ListeningQuestion extends Question {
    audioPrompt: string;

    constructor(answer: string, expectedAnswer: string, audioPrompt: string) {
        super(answer, expectedAnswer);
        this.audioPrompt = audioPrompt;
    }
}

class WritingQuestion extends Question {
    textPrompt: string;

    constructor(answer: string, expectedAnswer: string, textPrompt: string) {
        super(answer, expectedAnswer);
        this.textPrompt = textPrompt;
    }
}

export { Question, ListeningQuestion, WritingQuestion };