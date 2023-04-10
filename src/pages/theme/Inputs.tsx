import Input from '@/components/Input';
import useForm from '@/components/useForm';

const Inputs = () => {
  const initialValues = {
    email1: '',
    email2: '',
    email3: '',
    password1: '',
    password2: '',
    password3: '',
  };
  const { values, handleChange } = useForm(initialValues);
  return (
    <div className="col-span-1 border border-base-content p-5">
      <div className="flex flex-col space-y-5">
        <div className="mx-auto mb-10 flex text-2xl font-semibold">INPUT</div>
        <div className="w-full">
          <Input
            ofType="email"
            name="email1"
            topLabel="Email"
            value={values.email1}
            onChange={handleChange}
            validated={'yes'}
          />
          <Input
            ofType="email"
            name="email2"
            topLabel="Email"
            value={values.email2}
            onChange={handleChange}
            validated={'no'}
          />
          <Input
            ofType="email"
            name="email3"
            topLabel="Email"
            value={values.email3}
            onChange={handleChange}
          />
          <Input
            ofType="password"
            name="password1"
            topLabel="Password"
            value={values.password1}
            onChange={handleChange}
            validated={'yes'}
          />
          <Input
            ofType="password"
            name="password2"
            topLabel="Password"
            value={values.password2}
            onChange={handleChange}
            validated={'no'}
          />
          <Input
            ofType="password"
            name="password3"
            topLabel="Password"
            value={values.password3}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Inputs;
