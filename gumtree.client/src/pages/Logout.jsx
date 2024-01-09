import React, { useEffect } from 'react';
function Logout() {
    useEffect(() => {
        // Your function to run when the component mounts
        // Clear the authentication token from localStorage
        handleLogout();
    }, []);

    const handleLogout = () => {
        // Clear the authentication token from localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('accessEmail');
        localStorage.removeItem('accessUsername');

        // Additional cleanup tasks (if any)

        // Redirect to the login page or homepage
        window.location.href = '/userlogin';
    };

    return (
        <h5>You are logging out now ...</h5>
   );
}

export default Logout;