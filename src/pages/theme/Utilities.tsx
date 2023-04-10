import Alert from '@/components/Alert';
import Loader from '@/components/Loader';
import Rating from '@/components/Rating';
import Search from '@/components/Search';

const Utilities = () => {
  return (
    <div className="col-span-1 border border-base-content p-5">
      <div className="flex flex-col items-center space-y-16">
        <div className="mx-auto flex text-2xl font-semibold">UTILITIES</div>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full flex-col space-y-1">
            <Alert ofType="success" message="Login Successfull" />
            <Alert ofType="error" message="Login Failed" />
            <Alert ofType="warn" message="Warning" />
            <Alert ofType="info" message="info message" />
          </div>
        </div>
        <Search />
        <div className="flex flex-col items-center space-y-3">
          <Loader ofType="spinner" visible={true} />
          <p>SPINNER</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <Loader ofType="linear" visible={true} />
          <p>LOADER</p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <Rating />
          <p>RATING</p>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
