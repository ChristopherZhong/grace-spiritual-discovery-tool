import questionsJson from '../questions.json';
import { Question } from '../types/Question';
import { QuestionType } from '../types/QuestionType';
import { Choices } from './Choices';
import { Card, FormControl, FormLabel, List, Typography } from '@material-ui/core';
import { getText } from '../types/Text';
import { Component } from 'react';

const questions = questionsJson as Array<Question>;

function QuestionFormControl(question: Question, index: number, language: string, handleChange: UpdateAnswerHandler): JSX.Element {
  return (
    <FormControl
      component={Card}
      key={`${question.type}-${index}`}
      required
    >
      <FormLabel required>{getText(question.text, language)}</FormLabel>
      <Choices
        choices={question.choices}
        language={language}
        handleChange={handleChange}
        questionType={question.type}
        questionIndex={index}
      />
    </FormControl>
  );
}

function QuestionsList(questions: Array<Question>, language: string, handleChange: UpdateAnswerHandler): JSX.Element {
  const mapQuestion = (question: Question, index: number) => QuestionFormControl(question, index, language, handleChange);
  return (
    <List component='ol'>
      {questions.map(mapQuestion)}
    </List>
  );
}

function QuestionsByType(type: QuestionType, handleChange: UpdateAnswerHandler, getScore: GetScore): JSX.Element {
  const filter: Array<Question> = questions.filter(value => value.type === type);
  return (
    <div>
      <Typography>{type} Questions: ({getScore(type)})</Typography>
      {QuestionsList(filter, 'en', handleChange)}
    </div>
  );
}

// const WalkQuestions = (handleChange: ChangeEventHandler<HTMLInputElement>) => createQuestionsBy(QuestionType.Walk, handleChange);
// const RelateQuestions = (handleChange: ChangeEventHandler<HTMLInputElement>) => createQuestionsBy(QuestionType.Relate, handleChange);
// const ServeQuestions = (handleChange: ChangeEventHandler<HTMLInputElement>) => createQuestionsBy(QuestionType.Serve, handleChange);
// const ShareQuestions = (handleChange: ChangeEventHandler<HTMLInputElement>) => createQuestionsBy(QuestionType.Share, handleChange);

interface QuestionsState {
  answersByType: Map<QuestionType, Array<number>>;
  questionsByType: Map<QuestionType, Array<Question>>;
  scoreByType: Map<QuestionType, number>;
}

export interface UpdateAnswerHandler {
  (questionType: QuestionType, questionIndex: number, value: number): void;
}

export interface GetScore {
  (questionType: QuestionType): number;
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
        <p>Here is a list of questions</p>
        {QuestionsByType(QuestionType.Know, this.handleChange, this.getScore)}
        {QuestionsByType(QuestionType.Walk, this.handleChange, this.getScore)}
        {QuestionsByType(QuestionType.Relate, this.handleChange, this.getScore)}
        {QuestionsByType(QuestionType.Serve, this.handleChange, this.getScore)}
        {QuestionsByType(QuestionType.Share, this.handleChange, this.getScore)}
      </div>
    );
  }
}
