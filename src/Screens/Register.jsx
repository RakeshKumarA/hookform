import React from 'react';
import Spacer from 'react-add-space';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
  email: yup.string().required('Email required').email('Not a Valid Email'),
  password: yup
    .string()
    .required('Password required')
    .min(8, 'Must be more than 8 Characters'),
  cpassword: yup
    .string()
    .required('Confirm Password required')
    .min(8, 'Must be more than 8 Characters'),
  fname: yup
    .string()
    .required('First Name Required')
    .max(8, 'Maximum 8 Characters'),
  lname: yup
    .string()
    .required('Last Name Required')
    .max(8, 'Maximum 8 Characters'),
});

const Register = () => {
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
            Sign Up
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            name="fname"
            label="First Name"
            variant="outlined"
            fullWidth={true}
            inputRef={register}
            error={!!errors.fname}
            helperText={errors?.fname?.message}
          />
        </Grid>
        <Grid item>
          <TextField
            name="lname"
            label="Last Name"
            variant="outlined"
            fullWidth={true}
            inputRef={register}
            error={!!errors.lname}
            helperText={errors?.lname?.message}
          />
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
          <TextField
            name="cpassword"
            label="Confirm Password"
            variant="outlined"
            type="password"
            fullWidth={true}
            inputRef={register}
            error={!!errors.cpassword}
            helperText={errors?.cpassword?.message}
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
            <Link to="/" className={classes.link}>
              Sign in
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid item sm={4} />
    </Grid>
  );
};

export default Register;
