import { IFormInput, SignInComponent } from '@/common/types/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { emailRegex } from '@/common/constants/common';

interface IProps {
  handleChangeComponent: (component: SignInComponent) => void;
}

export const Login = ({ handleChangeComponent }: IProps) => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {};
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // Custom validation for username/email field
  const validateUsernameOrEmail = (value: string) => {
    if (value.includes('@')) {
      // Validate as an email

      return emailRegex.test(value) || 'Invalid email address';
    } else {
      // Validate as a username (you can add further rules here if needed)
      return true;
    }
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {/* Username/Email Field */}
        <TextField
          label="Username or Email"
          variant="outlined"
          {...register('username', {
            required: 'Username or Email is required',
            validate: validateUsernameOrEmail,
          })}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div
          className="text-center mt-5 mb-12 text-sm text-shadow-blue-500 cursor-pointer"
          onClick={() => {
            handleChangeComponent(SignInComponent.ForgotPassword);
          }}
        >
          Forgot Password?
        </div>
        {/* Submit Button */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </div>
  );
};
