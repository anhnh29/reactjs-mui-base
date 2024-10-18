export interface IAuthInfo {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  jwtToken: string;
  role: string;
  permissions: string[] | null;
  refreshToken: string;
}

export enum SignInComponent {
  Login = 'login',
  ForgotPassword = 'forgotPassword',
  FormOtp = 'formOtp',
  ChangePassword = 'changePassword',
}

export interface IFormInput {
  username: string;
  password: string;
}
