import { useState } from 'react';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'a' && password === 'a') {
            sessionStorage.setItem('loggedIn', 'true');
            window.location.reload();
        }
    };
    return ( 
        <div class="">
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label >Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
     );
}
 
export default Login;