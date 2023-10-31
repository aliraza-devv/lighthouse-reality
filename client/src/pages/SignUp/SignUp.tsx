import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { AppDispatch } from '../../store';
import { updateRealtor, updateAuth } from '../../store/Realtor/RealtorSlice';
import { useRegisterRealtor } from '../../graphql/hooks';
import { uploadAvatar } from '../../utils/helper-functions';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { newRealtor, SignUpFormValues } from '../../types';
import { SignupSvg } from '../../assets/svg/index';

const Signup: React.FC = () => {
    const { regNewRealtor, loading, error } = useRegisterRealtor();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const formSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
        //* Upload Image to Firebase & get URL
        const imgUrl = await uploadAvatar(data.avatarImage[0]);
        const newRealtor: newRealtor = {
            ...data,
            sold: data.sold.toString(),
            experience: data.experience.toString(),
            avatarImage: imgUrl || 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=360'
        };

        //* Store Token in Local Storage
        const { realtor, token } = await regNewRealtor(newRealtor);
        localStorage.setItem('token', token);

        //* Add Fetched Realtor in Redux State
        dispatch(updateRealtor(realtor));
        dispatch(updateAuth(true));

        //* Change Page to Profile
        navigate('/profile');
    };

    return (
        <>
            <Helmet title="Lighthouse Reality | Work with us" />
            <section className="sign-up__realtors">
                <div className="sign-up__realtors__content">
                    <img src={SignupSvg} alt="sign-up" className="sign-up__svg" height={417} width={520} />
                    <SignUpForm formSubmit={formSubmit} error={error} loading={loading} />
                </div>
            </section>
        </>
    );
};

export default Signup;
