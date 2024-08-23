import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const [redirectTimer, setRedirectTimer] = useState(10);
    const navigate = useNavigate();

    const handleRedirectButton = () => {
        const referrer = document.referrer;
        const isInternalPage = referrer.includes(window.location.origin);
        if (isInternalPage) {
            navigate(-1);
        } else {
            navigate('/');
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setRedirectTimer((previousInterval) => previousInterval - 1);
        }, 1000);

        

        return () => {
            clearInterval(timer);
        }
    }, []);

    useEffect(() => {
        if (redirectTimer === 0) {
            handleRedirectButton();
        }
    }, [redirectTimer]);



    return (
        <div>
            <h1>404 - Page Not Found.</h1>
            <p>Redirecting you to the previous page in {redirectTimer} seconds.</p>
            <button onClick={handleRedirectButton}>Redirect Now</button>
        </div>
    );
}

export default PageNotFound;