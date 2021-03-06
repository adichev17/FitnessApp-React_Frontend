import React from 'react';
import { AppBar, Container, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#3c3e48' }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Gym App
              </Link>
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                  Войти
                </Link>
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                Регистрация
              </Link>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navigation;
