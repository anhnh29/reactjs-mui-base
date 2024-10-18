import { SignInComponent } from '@/common/types';
import { ChangePassword } from '@/features/signin/components/ChangePassword';
import { ForgotPassword } from '@/features/signin/components/ForgotPassword';
import { FormOtp } from '@/features/signin/components/FormOtp';
import { Login } from '@/features/signin/components/Login';
import { useState } from 'react';

const SignIn = () => {
  const [signInConponent, setSignInConponent] = useState(SignInComponent.Login);

  const handleChangeComponent = (component: SignInComponent) => {
    setSignInConponent(component);
  };

  const renderComponent = () => {
    switch (signInConponent) {
      case SignInComponent.Login:
        return <Login handleChangeComponent={handleChangeComponent} />;
      case SignInComponent.ForgotPassword:
        return <ForgotPassword handleChangeComponent={handleChangeComponent} />;
      case SignInComponent.FormOtp:
        return <FormOtp />;
      default:
        return <ChangePassword />;
    }
  };
  return (
    <div className="bg-white w-[100vw] h-[100vh] flex items-center justify-center bg-[url('/src/common/assets/images/bg-login.png')] bg-cover bg-center bg-no-repeat">
      <div className="size-[500px] p-10 rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.85)] to-[rgba(255,255,255,0.8)] border border-white backdrop-blur-[30px] shadow-custom">
        {/* <div className="size-[500px] p-10 rounded-3xl bg-slate-900 border border-white backdrop-blur-[30px] shadow-custom"> */}
        <div className="flex gap-5 justify-center items-center">
          <img
            src="/src/common/assets/images/logo.svg"
            className="size-[72px]"
          />
          <div>
            <div className="font-semibold text-2xl ">
              Clinic Management <br /> System
            </div>
            <div className="font-medium text-xs">by Bizbox Inc.</div>
          </div>
        </div>
        <div className="p-8 font-semibold text-2xl text-center">LOGIN</div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default SignIn;
