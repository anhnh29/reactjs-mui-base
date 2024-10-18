import { useState } from 'react';

export const FormOtp = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <div>The verification code will be sent to this email address.</div>
      <div>Form OTP</div>
    </div>
  );
};
