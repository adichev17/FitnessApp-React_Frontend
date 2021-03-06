import React, { useState } from 'react';

import { Box, Container, Grid, Hidden, Typography } from '@material-ui/core';

import StepperProgress from '../../StepperProgress';
import Timer from './Timer';
import TableSession from './TableSession/TableSession';

export default function SessionPage({ trainingPlan, user, setCurrentDayIndex, currentDayIndex }) {
  let pageAmount = trainingPlan ? trainingPlan[currentDayIndex].excercises.length : 0;

  const [page, setPage] = useState(0);
  const [lastTrainingExercises, setLastTrainingExercises] = useState([]);
  const [currentTrainingExercises, setCurrentTrainingExercises] = useState(
    Array(pageAmount).fill([]),
  );

  return (
    <div>
      {!trainingPlan ? (
        <h1>No plan</h1>
      ) : (
        <Container>
          <Grid container spacing={2} style={{ marginBottom: '48px' }}>
            <Grid item md={7} pt={3}>
              <StepperProgress
                handleBack={() => setPage((prevPage) => prevPage - 1)}
                handleNext={() => setPage((prevPage) => prevPage + 1)}
                currentDayIndex={currentDayIndex}
                page={page}
                user={user}
                pageAmount={pageAmount}
                currentTrainingExercises={currentTrainingExercises}
                trainingPlan={trainingPlan}
              />
              <Typography component="h5" variant="h5" align="center" color="textSecondary">
                Упражнение {page + 1} / {pageAmount}
              </Typography>
            </Grid>
            <Grid item md={1} implementation="css" smDown component={Hidden} />
            <Grid item md={4} style={{ height: '100%' }}>
              <Timer />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Box my={2}>
                <Typography
                  component="h4"
                  variant="h4"
                  style={{ display: 'block', marginRight: '16px', marginBottom: '16px' }}>
                  {trainingPlan[currentDayIndex].excercises[page].name}
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={7} sm-offset={1}>
                {trainingPlan[currentDayIndex].excercises[page].setsNumber === 1 ? (
                  <Typography variant="h5" color="textSecondary">
                    Данное упражнение делается на время
                  </Typography>
                ) : (
                  <TableSession
                    page={page}
                    trainingPlan={trainingPlan}
                    currentTrainingExercises={currentTrainingExercises}
                    setCurrentTrainingExercises={setCurrentTrainingExercises}
                    currentDayIndex={currentDayIndex}
                  />
                )}
              </Grid>
              <Grid item md={1} implementation="css" smDown component={Hidden} />

              <Grid item sm={4}>
                <div style={{ height: '100%', backgroundColor: '#ececec' }}></div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}
