import { useState } from 'react';

export const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <div>The verification code will be sent to this email address.</div>
      Change Password
    </div>
  );
};
