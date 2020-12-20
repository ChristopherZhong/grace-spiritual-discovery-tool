import questionsJson from '../questions.json';
import { Question } from '../types/Question';
import { QuestionType } from '../types/QuestionType';
import { Component } from 'react';
import { QuestionsCard } from './QuestionsCard';
import { UpdateAnswerHandler } from '../types/UpdateAnswerHandler';
import { GetScore } from '../types/GetScore';

const questions = questionsJson as Array<Question>;

interface QuestionsState {
  answersByType: Map<QuestionType, Array<number>>;
  questionsByType: Map<QuestionType, Array<Question>>;
  scoreByType: Map<QuestionType, number>;
}

function initQuestionsByType(questions: Array<Question>): Map<QuestionType, Array<Question>> {
  const questionsByType = new Map<QuestionType, Array<Question>>();
  questions.forEach((question: Question) => {
    console.debug(`>>> Questions::toQuestionsByType() : questions loop : question=${JSON.stringify(question)}`);
    let element = questionsByType.get(question.type);
    if (element === undefined) {
      element = new Array<Question>();
      questionsByType.set(question.type, element);
    }
    element.push(question);
  });
  return questionsByType;
}

function initAnswersByType(questionsByType: Map<QuestionType, Array<Question>>): Map<QuestionType, Array<number>> {
  const answersByType = new Map<QuestionType, Array<number>>();
  questionsByType.forEach((value, key) => {
    answersByType.set(key, Array(value.length).fill(0));
  });
  return answersByType;
}

function initScoreByType(answersByType: Map<QuestionType, Array<number>>): Map<QuestionType, number> {
  const scoreByType = new Map<QuestionType, number>();
  answersByType.forEach((value, key) => {
    scoreByType.set(key, value.reduce(sum, 0));
  });
  return scoreByType;
}

function sum(previousValue: number, currentValue: number): number {
  return previousValue + currentValue;
}

export class Questions extends Component<any, QuestionsState> {
  constructor(props: any) {
    super(props);
    console.log(`Loading ${questions.length} questions ...`);
    console.debug(`>>> Questions::constructor() : questions=${JSON.stringify(questions)}`);

    const questionsByType = initQuestionsByType(questions);
    questionsByType.forEach((value, key) => {
      console.log(`... ${value.length} ${key} questions`);
    });

    const answersByType = initAnswersByType(questionsByType);
    answersByType.forEach((value, key) => {
      console.log(`... ${key} answers: ${JSON.stringify(value)}`);
    });

    const scoresByType = initScoreByType(answersByType);
    scoresByType.forEach(((value, key) => {
      console.log(`... ${key} score: ${value}`);
    }));

    this.state = {
      answersByType: answersByType,
      questionsByType: questionsByType,
      scoreByType: scoresByType,
    };
    console.debug(`>>> Questions::() : state=${JSON.stringify(this.state)}`);
  }

  handleChange: UpdateAnswerHandler = (questionType: QuestionType, questionIndex: number, value: number) => {
    console.debug(`>>> Questions::handleChange() : questionType=${questionType}, questionIndex=${questionIndex}, value=${value}`);
    let answers: Array<number> | undefined = this.state.answersByType.get(questionType);
    if (answers === undefined) {
      console.warn(`Something went wrong! 'get(${questionType})' should return an array`);
      return;
    }
    console.debug(`>>> Questions::handleChange() : BEFORE: questionType=${questionType}, answers=${answers}`);
    answers = answers.map((current, index) => index === questionIndex ? value : current);
    console.debug(`>>> Questions::handleChange() :  AFTER: questionType=${questionType}, answers=${answers}`);

    const score = answers.reduce(sum, 0);
    console.debug(`>>> Questions::handleChange() : score=${score}`);

    const state: QuestionsState = {
      ...this.state,
      answersByType: new Map(this.state.answersByType).set(questionType, answers),
      scoreByType: new Map(this.state.scoreByType).set(questionType, score),
    };
    console.debug(`>>> Questions::handleChange() : state=${JSON.stringify(state)}`);

    console.debug(`>>> Questions::handleChange() : BEFORE: ${JSON.stringify(this.state)}`);
    this.setState(state);
    console.debug(`>>> Questions::handleChange() :  AFTER: ${JSON.stringify(this.state)}`);
  };

  getScore: GetScore = (questionType: QuestionType) => {
    console.debug(`>>> Questions::getScore() : questionType=${questionType}`);
    const score = this.state.scoreByType.get(questionType);
    if (score === undefined) {
      console.warn(`Something went wrong! get(${questionType}) should return a number`);
      return 0;
    }
    console.debug(`>>> Questions::getScore() : score=${score}`);
    return score;
  };

  render(): JSX.Element {
    return (
      <div>
        {Object.values(QuestionType).map((questionType: QuestionType) =>
          <QuestionsCard
            getScore={this.getScore}
            handleChange={this.handleChange}
            key={questionType}
            language={'en'}
            questions={questions.filter((question) => question.type === questionType)}
            questionType={questionType}
          />)}
      </div>
    );
  }
}
