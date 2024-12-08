import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:5000/users', {
            params: {
                email: credentials.email,
                password: credentials.password,
            },
        });

        if (response.data.length > 0) {
            const user = response.data[0];
            const token = 'mock-token'; 

            localStorage.setItem('jwtToken', token);

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: { user, token },
            });

            alert('Login successful!');
        } else {
            alert('Invalid email or password.');
        }
    } catch (error) {
        console.error('Login failed:', error);
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('jwtToken');
    dispatch({ type: 'LOGOUT' });
};
