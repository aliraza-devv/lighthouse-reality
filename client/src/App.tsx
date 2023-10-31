import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from './store';
import { useGetRealtor } from './graphql/hooks';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Sell from './pages/Sell/Sell';
import Buy from './pages/Buy/Buy';
import Realtors from './pages/Realtors/Realtors';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Profile from './pages/Profile/Profile';
import ProfileRequests from './components/ProfileRequests/ProfileRequests';
import ProfileListing from './components/ProfileListings/ProfileListing';
import { updateAuth, updateRealtor } from './store/Realtor/RealtorSlice';
import ProfileDetails from './components/ProfileDetails/ProfileDetails';

const App: React.FC = () => {
    const authSlice = useSelector((state: RootState) => state.user.isAuth);
    const dispatch = useDispatch<AppDispatch>();
    const token = localStorage.getItem('token');
    const { getProfile } = useGetRealtor();

    useEffect(() => {
        const fetchProfile = async () => {
            const { data, loading, error } = await getProfile({ context: { headers: { authorization: token } }, fetchPolicy: 'network-only' });

            if (!loading && !error) {
                dispatch(updateRealtor(data.authRealtorProfile));
                dispatch(updateAuth(true));
            }
        };

        if (token && !authSlice) {
            fetchProfile();
        }
    }, []);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="sell" element={<Sell />} />
                <Route path="buy" element={<Buy />} />
                <Route path="realtors" element={<Realtors />} />
                <Route path="login" element={authSlice ? <Navigate to="/profile" /> : <Login />} />
                <Route path="signup" element={authSlice ? <Navigate to="/profile" /> : <SignUp />} />
                <Route path="profile" element={authSlice ? <Profile /> : <Navigate to="/login" />}>
                    <Route index element={authSlice ? <ProfileDetails /> : <Navigate to="/login" />} />
                    <Route path="requests" element={authSlice ? <ProfileRequests /> : <Navigate to="/login" />} />
                    <Route path="listings" element={authSlice ? <ProfileListing /> : <Navigate to="/login" />} />
                </Route>
                <Route path="*" element={<HomePage />} />
            </Route>
        </Routes>
    );
};

export default App;
