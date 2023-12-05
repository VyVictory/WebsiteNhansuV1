import { useEffect, useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import '../viewcss/login/login.css'
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [tontai, setTontai] = useState(true);
    const [taikhoan, setTaikhoan] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/account')
            .then((res) => setTaikhoan(res.data)).catch(err => console.log(err))
    }, [])
    const [dangky, setDangky] = useState({
        User: '',
        Email: '',
        Password: '',
        Passwordd: '',
        Quyenhang: '0',
        Quyentruyvan: 'admin',
    })
    useEffect(() => {
        taikhoan.map((e) => {
            if (e.Quyentruyvan === 'admin') {
                setTontai(false);
            }
        });
    },);
    //bam pass

    // Hàm băm mật khẩu
    const hashPassword = async (password) => {
        const saltRounds = 10; // Số lượng vòng lặp để tạo muối
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    };
    const comparePasswords = async (inputPassword, hashedPassword) => {
        try {
            const match = await bcrypt.compare(inputPassword, hashedPassword);
            return match; // Kết quả match sẽ là true hoặc false
        } catch (error) {
            console.error('Lỗi khi so sánh mật khẩu:', error);
            return false;
        }
    };
    //sosanh pass vs user************
    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        let accId = '';
    
        // Tìm ID của tài khoản
        taikhoan.forEach((e) => {
            if (username === e.User) {
                accId = e._id;
            }
        });
    
        try {
            // Gọi API để lấy thông tin người dùng dựa trên ID
            const response = await axios.get('http://localhost:3000/account/' + accId);
            const user = response.data;
    
            // So sánh mật khẩu
            const isMatch = await comparePasswords(password, user.Password);
    
            if (isMatch) {
                sessionStorage.setItem('loggedIn', 'true');
                sessionStorage.setItem('Uid', user._id);
                sessionStorage.setItem('UUser', user.User);
                sessionStorage.setItem('UQuyenhang', user.Quyenhang);
                sessionStorage.setItem('UQuyentruyvan', user.Quyentruyvan);
                window.location.reload();
            } else {
                alert("Tài khoản hoặc mật khẩu sai");
            }
        } catch (error) {
            console.error('Lỗi:', error);
        }
    };
    
    //********** */
    const handleSubmitRegister = async () => {
        try {
            const hashedPassword = await hashPassword(dangky.Password);
            const dataToSend = {
                User: dangky.User,
                Email: dangky.Email,
                Password: hashedPassword + '',
                Quyenhang: dangky.Quyenhang,
                Quyentruyvan: dangky.Quyentruyvan
            };
            if (dangky.Password !== dangky.Passwordd) {
                alert("Mật khẩu không giống nhau");
            } else {
                const response = await axios.post('http://localhost:3000/account', dataToSend);
                if (response.data) {
                    alert("Đăng ký thành công");
                    window.location.reload();
                } else {
                    alert(response.data);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };
    function formdangky() {
        return (
            <div className='signup-page'>
                <div className='signup-form-container' style={{ display: showLoginForm ? 'none' : 'block' }}>
                    <h1 className='title'> SignUp Account</h1>
                    <div>
                        <div className='mb-2'>
                            <label htmlFor='user' className='form-lable'>User</label>
                            <input required value={dangky.User} onChange={(e) => setDangky({ ...dangky, User: e.target.value })} id='user' className='form-control' type='text' name='user' ></input>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='email' className='form-lable'>email</label>
                            <input required value={dangky.Email} onChange={(e) => setDangky({ ...dangky, Email: e.target.value })} id='email' className='form-control' type='email' name='email' ></input>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='password' className='form-lable'>Password</label>
                            <input required value={dangky.Password} onChange={(e) => setDangky({ ...dangky, Password: e.target.value })} id='Password' className='form-control' type='text' name='passwowrd' ></input>
                        </div>

                        <div className='mb-2'>
                            <label htmlFor='confim-password' className='form-lable'>Confim Password</label>
                            <input required value={dangky.Passwordd} onChange={(e) => setDangky({ ...dangky, Passwordd: e.target.value })} id='confim-password' className='form-control' type='text' name='confimPassword' ></input>
                        </div>

                        <button type='submit' onClick={(e) => { e.preventDefault(); handleSubmitRegister(); }} className='submit-btn'> SignUp </button>
                        <button type='submit' onClick={handleToggleForm} className='submit-btn-phu'> Login </button>
                    </div>
                </div>
            </div>
        );
    }
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleToggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };
    return (
        <div className='login-page'>
            <div className='login-form-container' style={{ display: showLoginForm ? 'block' : 'none' }}>
                <h1 className='title'> Login Account</h1>
                <div className='all_center_login'>
                    <div className='mb-2'>
                        <label htmlFor='email' className='form-lable'>Username:</label>
                        <input required id='email' className='form-control' type='text' name='email' value={username} onChange={(e) => setUsername(e.target.value)} ></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password' className='form-lable'>Password</label>
                        <input required id='Password' className='form-control' type='text' name='passwowrd' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button type='submit' onClick={handleSubmitLogin} className='submit-btn'> Login </button>
                    {tontai ===false ? null : <button type='submit' onClick={handleToggleForm} className='submit-btn-phu'>Register</button>}

                </div>
            </div>
            {tontai === false ? null : formdangky()}
        </div>

    );
}

export default Login;