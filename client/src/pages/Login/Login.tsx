import React, { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { REALTOR_LOGIN_QUERY } from '../../graphql/queries';
import LoginForm from '../../components/LoginForm/LoginForm';
import LoginBox from './LoginBox/LoginBox';
import FormHeader from '../../components/UI/FormHeader/FormHeader';
import { LoginSvg } from '../../assets/svg/index';
import { LogInFormValues } from '../../types';
import { AppDispatch } from '../../store';
import { updateAuth, updateRealtor } from '../../store/Realtor/RealtorSlice';

const Login: React.FC = () => {
    const [login, { data, loading, error }] = useLazyQuery(REALTOR_LOGIN_QUERY);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        if (data && data.loginRealtor) {
            localStorage.setItem('token', data.loginRealtor.token);
            dispatch(updateRealtor(data.loginRealtor.realtor));
            dispatch(updateAuth(true));
            navigate('/profile');
        }
    }, [data]);

    const formSubmit: SubmitHandler<LogInFormValues> = async (data) => {
        login({ variables: { email: data.email, password: data.password }, fetchPolicy: 'network-only' });
    };

    return (
        <>
            <section className="login__realtors">
                <div className="login__realtors__content">
                    <img src={LoginSvg} alt="login-svg" className="login__svg u-margin-top-medium" />
                    <div>
                        <div className="login__form">
                            <FormHeader heading="Realtors Login" subHeading="Welcome Back at Lighthouse Realty. Make your dreams true with us" />
                            <LoginForm formSubmit={formSubmit} loading={loading} error={error} />
                        </div>
                        <LoginBox />
                    </div>
                </div>
            </section>
            <Helmet title="Lighthouse Reality | Login" />
        </>
    );
};

export default Login;
