import { SignInComponent } from '@/common/types/auth';
import { useState } from 'react';

interface IProps {
  handleChangeComponent: (component: SignInComponent) => void;
}

export const ForgotPassword = ({ handleChangeComponent }: IProps) => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <div className="text-sm text-shadow-blue-500 cursor-pointer">
        The verification code will be sent to this email address.
      </div>
      Forgot password
    </div>
  );
};
