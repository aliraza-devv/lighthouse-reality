import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ApolloError } from '@apollo/client';

import { LoginFormSchema } from '../../utils/yupSchema';
import { LogInFormValues } from '../../types';
import FormError from '../UI/FormError/FormError';
import { LoaderSvg } from '../../assets/svg';

type LoginFormProps = {
    formSubmit: SubmitHandler<LogInFormValues>;
    loading: boolean,
    error: ApolloError | undefined
}

const LoginForm: React.FC<LoginFormProps> = ({ formSubmit, loading, error }) => {

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<LogInFormValues>({ resolver: yupResolver(LoginFormSchema) });

  return (
    <form className='login__form u-margin-bottom-small' onSubmit={handleSubmit(formSubmit)}>
        { 
            (errors.password && errors.password.type !== "required") && <FormError msg={errors.password.message} />
        }
        {
            error && <FormError msg={error.message} />
        }
        <input className={`input__normal u-margin-top-small u-margin-bottom-small ${errors.email && 'sign-up__form--input--error'}`} type="email" placeholder="Enter your Email" {...register("email")} />
        <input className={`input__normal u-margin-bottom-small ${errors.password && 'sign-up__form--input--error'}`} type="password" placeholder="Enter your Password" {...register("password")} />
        {
            loading ? 
            <div className='login__form--loader'>
                <img className='login__form--loader-svg' src={LoaderSvg} alt='loading..' />
            </div>
            : <button className="btn btn--rec" type='submit'>Login</button>
        }
    </form>
  )
}

export default LoginForm;