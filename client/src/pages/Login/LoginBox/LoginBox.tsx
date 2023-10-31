import React from 'react';
import { Link } from 'react-router-dom';

const LoginBox: React.FC = () => {
  return (
    <div className="login__not-yet">
        <p className="heading-big">Become Realtor</p>
        <p className="paragraph-medium">
            Become a member at Lighthouse Realty by just <br /> entering your information and start working.{' '}
        </p>
        <Link to="/signup" className="btn btn--rec btn--small u-margin-top-small">
            Sign Up
        </Link>
    </div>
  )
}

export default LoginBox