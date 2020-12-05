import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Spacer from 'react-add-space';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
  link: {
    textDecoration: 'none',
  },
});

const schema = yup.object().shape({
  email: yup.string().email('Not a Valid Email').required('Email required'),
  password: yup
    .string()
    .min(8, 'Must be more than 8 Characters')
    .required('Password required'),
});

const Login = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onClickHandler = (data) => {
    console.log(data);
  };

  return (
    <Grid container>
      <Grid item sm={4} />
      <Grid
        item
        sm={4}
        container
        direction="column"
        justify="center"
        className={classes.root}
        spacing={2}
      >
        <Grid item>
          <Typography variant="h3" color="initial" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth={true}
            inputRef={register}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
        </Grid>
        <Grid item>
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth={true}
            inputRef={register}
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            onClick={handleSubmit((data) => onClickHandler(data))}
          >
            Login
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" color="initial">
            Don't have an account? Please <Spacer amount={1} />
            <Link to="/register" className={classes.link}>
              Register
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid item sm={4} />
    </Grid>
  );
};

export default Login;
