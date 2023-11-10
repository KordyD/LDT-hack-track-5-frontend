import axios from 'axios';
import { URL } from '..';

interface setAnswerToTaskData {
  answerUrl: 'string';
}

export const setAnswerToTask = async (
  taskStageId: number,
  data: setAnswerToTaskData
) => {
  const response: boolean = await axios.post(
    URL + `/intern/tasks/${taskStageId}/answer`,
    data
  );
  return response;
};
