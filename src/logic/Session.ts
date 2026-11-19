import {Question, ListeningQuestion, WritingQuestion} from "./Question.ts";
import {generateNumber, numToWord} from "./generator.ts";

// @ts-ignore
enum ExerciseType {
    LISTENING,
    TEXT
}
enum ConversionType {
    NUMBER_TO_WORD,
    WORD_TO_NUMBER,
    MIXED
}

class Session {

    numTotalQuestions: number; // like when to stop
    questionType: ExerciseType;
    writingExerciseType: ConversionType;
    numDigitsPerQuestion: number; // yeah f me brah i dont like this either. im just making this work kay?
    questions: Question[];

    constructor(numQuestions: number, questionType: ExerciseType) {
        this.numTotalQuestions = numQuestions;
        this.questionType = questionType;
        this.questions = [];
    }

    // could just make subclasses for audiosession and textsession. would be way way more straightforward but whatevs. just gotta get through this. if i make a polished vers ill plan it all out beforehand
    constructor(numQuestions: number, questionType: ExerciseType, writingExerciseType: ConversionType, numDigitsPerQuestion: number) {
        this.numTotalQuestions = numQuestions;
        this.numDigitsPerQuestion = numDigitsPerQuestion;
        this.questionType = questionType;
        this.writingExerciseType = writingExerciseType;
        this.questions = [];
    }

    generateQuestion() {

        // this is beautiful O.O
        let generatedQuestion : WritingQuestion | ListeningQuestion;

        switch (this.questionType) {

            case ExerciseType.TEXT:

                generatedQuestion = new WritingQuestion();

                // fill vals like expected answer text prompt etc

                let num: number = generateNumber(this.numDigitsPerQuestion);
                let wordVersOfNum: number = numToWord(num);

                switch (this.writingExerciseType) {
                    case ConversionType.NUMBER_TO_WORD:
                        generatedQuestion.answer = wordVersOfNum;
                        generatedQuestion.textPrompt = num;
                        break;
                    case ConversionType.WORD_TO_NUMBER:
                        generatedQuestion.textPrompt = wordVersOfNum;
                        generatedQuestion.answer = num;
                        break;
                    case ConversionType.MIXED:
                        // random 0 or 1
                        if (Math.round(Math.random())) {
                            generatedQuestion.answer = wordVersOfNum;
                            generatedQuestion.textPrompt = num;
                        }
                        else {
                            generatedQuestion.textPrompt = wordVersOfNum;
                            generatedQuestion.answer = num;
                        }
                        break;
                }
                break;
            case ExerciseType.LISTENING:
                generatedQuestion = new ListeningQuestion();
                break;
        }

        this.questions.push(generatedQuestion)

    }

}
export type {Session};