import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import AnimatedText from '@/components/animation/motionText';
import Input from '@/components/Input';

const Login = () => {
  const router = useRouter();
  const userCredentials = { email: '', password: '' };
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().min(8).required('Required'),
  });
  const { values, handleChange, handleSubmit, errors, isValidating } =
    useFormik({
      initialValues: userCredentials,
      validationSchema: loginSchema,
      validateOnChange: true,
      onSubmit: () => {
        router.push('/admin');
      },
    });

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 lg:py-0">
      <AnimatedText
        tag="h1"
        className="mb-2 text-4xl font-bold text-accent"
        animate="fadeIn"
      >
        Welcome to Tryyon!
      </AnimatedText>
      <AnimatedText
        tag="h3"
        className="mb-6 text-lg font-medium text-accent"
        animate="fadeIn"
      >
        Sign in as User!
      </AnimatedText>
      <div className="w-full rounded-lg shadow-2xl dark:border sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-2xl font-medium leading-tight tracking-tight text-base-content md:text-2xl">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <Input
                ofType="email"
                name="email"
                topLabel="Email"
                value={values.email}
                onChange={handleChange}
                placeholder="Enter Email"
                validated={(() => {
                  if (values.email === '') return '';
                  if (errors.email !== undefined) return 'no';
                  return 'yes';
                })()}
              />
            </div>
            <div>
              <Input
                ofType="password"
                name="password"
                topLabel="Password"
                bottomLabel="Forgot Password?"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter Password"
                validated={(() => {
                  if (values.password === '') return '';
                  if (errors.password !== undefined) return 'no';
                  return 'yes';
                })()}
              />
            </div>
            <button
              type="submit"
              className="btn w-full bg-violet-800 text-white"
              disabled={isValidating}
            >
              LOGIN
            </button>
            <p className="text-sm text-base-content">
              Already have an account?{' '}
              <span
                className="link-hover link-primary link font-semibold"
                onClick={() => router.push('/signup')}
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
