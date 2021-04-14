import React from 'react';

import { Button, Box } from '@material-ui/core';
import TrainingPlanList from './TrainingPlanList';

export default function PreSesstionPage() {
  const exercises = [{ ex: 1 }, { ex: 1 }, { ex: 1 }, { ex: 1 }, { ex: 1 }, { ex: 1 }, { ex: 1 }];

  return (
    <div>
      <div>
        <TrainingPlanList />
      </div>
      <div>
        <Button variant="contained">Начать тренировку</Button>
      </div>
    </div>
  );
}
