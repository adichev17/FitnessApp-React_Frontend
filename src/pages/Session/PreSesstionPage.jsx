import React from 'react';

import { Button, Box } from '@material-ui/core';
import TrainingPlanList from './TrainingPlanList';

export default function PreSesstionPage() {
  const getTrainingPlan = async () => {};

  const fetchedTrainingPlan = [
    {
      exerciseId: 1,
      exercise: 'test',
    },
  ];

  return (
    <div>
      <div className="">
        <TrainingPlanList />
      </div>
      <div>
        <Button variant="contained">Начать тренировку</Button>
      </div>
    </div>
  );
}
