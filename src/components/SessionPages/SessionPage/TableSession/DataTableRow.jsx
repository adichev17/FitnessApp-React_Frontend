import { makeStyles, TableCell, TableRow, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles({
  customTextField: {
    '& input::placeholder': {
      color: 'green',
      fontWeight: 'bolder',
    },
  },
});

const makeDataRow = (kg = 0, quantity = 0, exerciseId) => {
  const stamp = new Date();

  const fullDate = `${stamp.getFullYear()}-${
    stamp.getMonth() + 1 < 10 ? '0' + stamp.getMonth() : stamp.getMonth()
  }-${stamp.getDate() < 10 ? '0' + stamp.getDate() : stamp.getDate()}T${
    stamp.getHours() < 10 ? '0' + stamp.getHours() : stamp.getHours()
  }:${stamp.getMinutes() < 10 ? '0' + stamp.getMinutes() : stamp.getMinutes()}:${
    stamp.getSeconds() < 10 ? '0' + stamp.getSeconds() : stamp.getSeconds()
  }`;
  return {
    exerciseId,
    kg,
    quantity,
    startTime: fullDate,
    endTime: fullDate,
  };
};

export default function DataRow({
  index,
  prevWeight = 50,
  prevQuantity = 12,
  exerciseId,
  currentTrainingExercises,
  setCurrentTrainingExercises,
  page,
  isDisabled,
  setEnabledRows,
}) {
  const classes = useStyles();

  const [weightValue, setWeightValue] = useState(
    currentTrainingExercises[page][index] ? currentTrainingExercises[page][index].kg : '',
  );

  const [quantityValue, setQuantityValue] = useState(
    currentTrainingExercises[page][index] ? currentTrainingExercises[page][index].quantity : '',
  );

  useEffect(() => {
    setWeightValue(
      currentTrainingExercises[page][index] ? currentTrainingExercises[page][index].kg : '',
    );
    setQuantityValue(
      currentTrainingExercises[page][index] ? currentTrainingExercises[page][index].quantity : '',
    );
  }, [page]);

  const inputChangeHandle = (setStateHandle) => (e) => {
    const inputValue = e.currentTarget.value;

    if (inputValue.length < 3) {
      setStateHandle(Math.floor(inputValue));
    }
  };

  return (
    <TableRow key={index} style={isDisabled ? { backgroundColor: '#f8f8f8' } : null}>
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell align="right">
        <TextField
          disabled={isDisabled}
          onBlur={(e) => {
            if (quantityValue) {
              console.log(makeDataRow(weightValue || 0, quantityValue || 0, exerciseId));
            }
          }}
          onBlur={(e) => {
            if (weightValue && quantityValue) {
              setEnabledRows((prevEnabledRows) => prevEnabledRows + 1);
            }
            const data = makeDataRow(weightValue || 0, quantityValue || 0, exerciseId);

            setCurrentTrainingExercises((prevArray) => {
              const cloneArray = JSON.parse(JSON.stringify(prevArray));
              cloneArray[page][index] = data;
              return cloneArray;
            });
          }}
          onChange={inputChangeHandle(setWeightValue)}
          placeholder={prevWeight}
          type="number"
          value={weightValue}
          InputProps={{
            inputProps: {
              max: 100,
              min: 10,
            },
          }}
          variant="outlined"
          style={{ width: '80px' }}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          placeholder={prevQuantity}
          value={quantityValue}
          disabled={isDisabled}
          onBlur={(e) => {
            if (weightValue && quantityValue) {
              setEnabledRows((prevEnabledRows) => prevEnabledRows + 1);
            }
            const data = makeDataRow(weightValue || 0, quantityValue || 0, exerciseId);
            setCurrentTrainingExercises((prevArray) => {
              const cloneArray = JSON.parse(JSON.stringify(prevArray));
              cloneArray[page][index] = data;
              return cloneArray;
            });
          }}
          onChange={inputChangeHandle(setQuantityValue)}
          type="number"
          InputProps={{
            inputProps: {
              max: 100,
              min: 10,
            },
          }}
          variant="outlined"
          style={{ width: '80px' }}
        />
      </TableCell>
    </TableRow>
  );
}
