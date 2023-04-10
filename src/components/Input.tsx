import {
  EnvelopeSimple,
  Eye,
  EyeSlash,
  LockSimple,
  Phone,
} from '@phosphor-icons/react';
import { useState } from 'react';

type InputProps = {
  ofType: 'email' | 'password' | 'text' | 'tel';
  validated?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  topLabel?: string;
  error?: string;
  bottomLabel?: string;
  value: string | number | boolean;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = ({
  ofType,
  validated,
  onChange,
  topLabel,
  error,
  bottomLabel,
  value,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  let style: string;
  const styleProps = {
    email: {
      icon: <EnvelopeSimple size={20} className="text-gray-400" />,
      show: null,
    },
    password: {
      icon: <LockSimple size={20} className="text-gray-400" />,
      show: showPassword ? (
        <EyeSlash size={20} className="text-gray-400" />
      ) : (
        <Eye size={20} className="text-gray-400" />
      ),
    },
    tel: {
      icon: <Phone size={22} className="text-gray-400" />,
      show: null,
    },
    text: {
      icon: null,
      show: null,
    },
  };
  switch (validated) {
    case 'no':
      style = `input input-bordered input-error w-full ${
        styleProps[ofType].icon === null ? 'p-6' : 'px-12'
      }`;
      break;
    case 'yes':
      style = `input input-bordered input-success w-full ${
        styleProps[ofType].icon === null ? 'p-6' : 'px-12'
      }`;
      break;
    default:
      style = `input input-bordered w-full placeholder:text-sm ${
        styleProps[ofType].icon === null ? 'p-6' : 'px-12'
      }`;
      break;
  }
  return (
    <div className="form-control relative mt-2 ml-2 w-full flex-none">
      {topLabel && (
        <label className="label h-9">
          <span className="label-text">{topLabel}</span>
        </label>
      )}
      {styleProps[ofType].icon && (
        <div className="pointer-events-none absolute left-4 top-[47px] mt-1.5 flex">
          {styleProps[ofType].icon}
        </div>
      )}
      <input
        type={showPassword ? 'text' : ofType}
        className={style}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {styleProps[ofType].show && (
        <button
          className="absolute right-5 top-[46px] mt-1.5 flex pl-4"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {styleProps[ofType].show}
        </button>
      )}
      {(bottomLabel || error) && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
          <span className="link-hover label-text-alt link-primary">
            {bottomLabel}
          </span>
        </label>
      )}
    </div>
  );
};
export default Input;
