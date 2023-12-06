import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import '../../../viewcss/qlhoso/qlthongtinnhanvien/Captaikhoan.css'
const Captaikhoan = () => {
    const navigate = useNavigate()
    const [dsacc, setDsacc] = useState([])
    //const UQuyenhang = sessionStorage.getItem('UQuyenhang');


    useEffect(() => {
        axios.get('http://localhost:3000/account')
            .then(Response => {
                if (Response.data) {
                    setDsacc(Response.data);
                } else {
                    alert(Response.data)
                }
            })
            .catch(err => console.log(err))
    }, []);
    const [account, setAccount] = useState({
        User: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        Quyenhang: '',
        Quyentruyvan: ''

    });
    const [accounte, setAccounte] = useState({
        User: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        Quyenhang: '',
        Quyentruyvan: ''

    });
    // Hàm băm mật khẩu
    const hashPassword = async (password) => {
        const saltRounds = 10; // Số lượng vòng lặp để tạo muối
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    };
    const [selectedCheckboxes, setSelectedCheckboxes] = useState('');
    const [selectedCheckboxes1, setSelectedCheckboxes1] = useState('');

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (checked && name!==" " && name!=="") {
            setSelectedCheckboxes((prevCheckboxes) => prevCheckboxes + ',' + name);
        } else {
            setSelectedCheckboxes((prevCheckboxes) => prevCheckboxes.replace(name, ''));
        }
    };
    
    const handleCheckboxChange1 = (e) => {
        const { name, checked } = e.target;
        if (checked && name!==" " && name!=="") {
            setSelectedCheckboxes1((prevCheckboxes) => prevCheckboxes + ',' + name);
        } else {
            setSelectedCheckboxes1((prevCheckboxes) => prevCheckboxes.replace(name, ''));
        }
    };
    

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleds, setIsVisibleds] = useState(true);
    const [isVisibleedit, setIsVisibleedit] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        setIsVisibleds(!isVisibleds)
    };
    const edittacmo = () => {
        setIsVisibleedit(!isVisibleedit)
        setIsVisibleds(!isVisibleds)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();


        const hashedPassword = await hashPassword(account.Password);
        const dataToSend = {
            User: account.User,
            Email: account.Email,
            Password: hashedPassword,
            Quyenhang: account.Quyenhang,
            Quyentruyvan: selectedCheckboxes
        };

        // Kiểm tra mật khẩu và mật khẩu xác nhận
        if (account.Quyenhang < 1) {
            alert('quyền hạng không nhỏ hơn 1');
            return;
        }
        else if (account.Password !== account.ConfirmPassword) {
            alert('Mật khẩu xác nhận không khớp.');
            return;
        }
        else if (dataToSend.Quyentruyvan === ''|dataToSend.Quyentruyvan.endsWith(',')) {
            alert('Chọn ít nhất một quyền truy vấn');
            return;
        }
        else {
            const existingUser = dsacc.find(acc => String(acc.User) === String(dataToSend.User));
            if (existingUser) {
                alert('User tồn tại');
            } else {
                axios.post('http://localhost:3000/account', dataToSend)
                    .then(_res => {
                        alert('cấp thành công tài khoản có user: ' + dataToSend.User);
                        window.location.reload();
                    })
                    .catch(err => console.error(err));
            }
        }


    };
    function deleteaccount(a) {
        axios.delete("http://localhost:3000/account/" + a)
            .then(res => {
                if (res.data) { setDsacc(dsacc.filter(acc => acc._id !== a)); } else (alert(res.data)
                )
            })
        return null;
    };
    function goitableedit(a) {
        edittacmo()
        axios.get('http://localhost:3000/account/' + a)
            .then(response => { if (response.data) { setAccounte(response.data); } else { alert('No data found'); } }).catch(err => console.log(err));
    }
    const suataikhoan = async (e) => {
        e.preventDefault();
        const hashedPassword = await hashPassword(accounte.Password);
        const dataToSend = {
            User: accounte.User,
            Email: accounte.Email,
            Password: hashedPassword,
            Quyenhang: accounte.Quyenhang,
            Quyentruyvan: selectedCheckboxes1
        };

        // Kiểm tra mật khẩu và mật khẩu xác nhận
        if (accounte.Quyenhang < 1) {
            alert('quyền hạng không nhỏ hơn 1');
            return;
        }
        else if (accounte.Password !== accounte.ConfirmPassword) {
            alert('Mật khẩu xác nhận không khớp.');
            return;
        }
        else if (dataToSend.Quyentruyvan === ''|dataToSend.Quyentruyvan.endsWith(',')) {
            alert('Chọn ít nhất một quyền truy vấn');
            return;
        }
        else {
            const existingUser = dsacc.find(acc => String(acc.User) === String(dataToSend.User) && String(acc._id) !== String(accounte._id));

            if (existingUser) {
                alert('User tồn tại');
            } else {
                axios.put('http://localhost:3000/account/' + accounte._id, dataToSend)
                    .then(_res => {
                        alert('sửa thành công tài khoản');
                        window.location.reload();
                    })
                    .catch(err => console.error(err));
            }
        }

    }
    return (<div>
        <div className='ctk-all'>
            {isVisibleds && (
                <div className='ctk-list-account'>
                    <div className='ctk-bt-captk'>
                        <button className='ctk-button' onClick={toggleVisibility}>Cấp Tài Khoản</button>
                    </div>
                    <div className="ctk-tieude">
                        <h3 className='ctk-h3'>Danh Sách Tài Khoản</h3>
                    </div>
                    <div className="">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Quyền Hạng</th>
                                    <th>Quyền Truy Vấn</th>
                                    <th >Tùy Chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dsacc.slice()
                                        .sort((a, b) => a.Quyenhang - b.Quyenhang)
                                        .map(ac => (
                                            <tr>
                                                <td>{ac.User}</td>
                                                <td>{ac.Email}</td>
                                                <td>{ac.Quyenhang}</td>
                                                <td>{ac.Quyentruyvan.replace(/^,/, '')}</td>
                                                <td className='td-tuychon'>
                                                    <button onClick={() => goitableedit(ac._id)} className='btn btn-info btn-sm me-2'>Chỉnh Sửa</button>
                                                    <button onClick={() => deleteaccount(ac._id)} className='all-bt-delete'>Xoa</button>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            <div className='ctk-box'>
                {isVisible && (
                    <div className='ctk-container'>
                        <div className='ctk-div-bt-tac'>
                            <button onClick={toggleVisibility} className='ctk-bt-tac'>X</button>
                        </div>
                        <div className='ctk-child'>
                            <div className='ctk-tille'>
                                <h2>Cấp Tài Khoản</h2>
                            </div>

                            <div className='ctk-form'></div>
                            <form id="myForm" onSubmit={handleSubmit}>
                                <div className='ctk-input-conten'>
                                    <div className='ctk-input-text'>
                                        <label className='ctk-tille-input'>UserName:</label><br />
                                        <input className='ctk-input' required type="text" onChange={(e) => setAccount({ ...account, User: e.target.value })} placeholder='Nhập tên tài khoản' /><br />
                                        <label className='ctk-tille-input'>Password:</label><br />
                                        <input className='ctk-input' required type="password" onChange={(e) => setAccount({ ...account, Password: e.target.value })} placeholder='Nhập mật khẩu' /><br />
                                        <label className='ctk-tille-input'>Confirm Password:</label><br />
                                        <input className='ctk-input' required type="password" onChange={(e) => setAccount({ ...account, ConfirmPassword: e.target.value })} placeholder='Xác nhận mật khẩu' /><br />
                                        <label className='ctk-tille-input'>Email:</label><br />
                                        <input className='ctk-input' required type="email" onChange={(e) => setAccount({ ...account, Email: e.target.value })} placeholder='Nhập email' /><br />
                                        <label className='ctk-tille-input'>Quyền Hạng Chức Vụ:</label>
                                        <span class="ctk-tooltip-container">
                                            <span class="ctk-hover-element" title="Quyền Hạng này phân cấp cho chức vụ nhằm xác định chức vụ lớn hơn cao nhất là 1"> ?</span>
                                        </span><br />
                                        <input className='ctk-input' required type='number' onChange={(e) => setAccount({ ...account, Quyenhang: e.target.value })} placeholder='Nhập Quyền Hạng' />

                                        <br />
                                    </div>
                                    <div className='ctk_quyentruyvan'>
                                        <label>Quyền Truy Vấn:</label><br />

                                        <input className='ctk-checkbox' type="checkbox" name="them" onChange={handleCheckboxChange}></input>
                                        <label htmlFor="v1">Thêm</label><br />

                                        <input className='ctk-checkbox' type="checkbox" name="sua" onChange={handleCheckboxChange}></input>
                                        <label htmlFor="v2">Sửa</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="xoa" onChange={handleCheckboxChange} ></input>
                                        <label htmlFor="v3">Xóa</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="chamcong" onChange={handleCheckboxChange}></input>
                                        <label htmlFor="v4">Chấm Công</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="qlcongtac" onChange={handleCheckboxChange}></input>
                                        <label htmlFor="v5">Quản Lý Công Tác Nhân Viên</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="qlcalam" onChange={handleCheckboxChange}></input>
                                        <label htmlFor="v6">Quản Lý Ca</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="qldanhsach" onChange={handleCheckboxChange}></input>
                                        <label htmlFor="v7">Quản Lý Danh Sách Nhân Sự</label><br></br>
                                    </div>

                                </div>

                                <div className='ctk-bt-tao'>
                                    <input type='submit' className='ctk-nut' value="Tạo Tài Khoản" />
                                </div>
                            </form>

                        </div>
                    </div>

                )}
                {isVisibleedit && (
                    <div className='ctk-container'>
                        <div className='ctk-div-bt-tac'>
                            <button onClick={edittacmo} className='ctk-bt-tac'>X</button>
                        </div>
                        <div className='ctk-child'>
                            <div className='ctk-tille'>
                                <h2>Sửa Tài Khoản</h2>
                            </div>
                            <form id="myForm" onSubmit={suataikhoan}>
                            <div className='ctk-form'></div>
                            
                                <div className='ctk-input-conten'>
                                    <div className='ctk-input-text'>
                                        <label className='ctk-tille-input'>UserName:</label><br />
                                        <input defaultValue={accounte.User} className='ctk-input' required type="text" onChange={(e) => setAccounte({ ...accounte, User: e.target.value })} placeholder='Nhập tên tài khoản' /><br />
                                        <label className='ctk-tille-input'>Password:</label><br />
                                        <input className='ctk-input' required type="password" onChange={(e) => setAccounte({ ...accounte, Password: e.target.value })} placeholder='Nhập mật khẩu' /><br />
                                        <label className='ctk-tille-input'>Confirm Password:</label><br />
                                        <input className='ctk-input' required type="password" onChange={(e) => setAccounte({ ...accounte, ConfirmPassword: e.target.value })} placeholder='Xác nhận mật khẩu' /><br />
                                        <label className='ctk-tille-input'>Email:</label><br />
                                        <input defaultValue={accounte.Email} className='ctk-input' required type="email" onChange={(e) => setAccounte({ ...accounte, Email: e.target.value })} placeholder='Nhập email' /><br />
                                        <label className='ctk-tille-input'>Quyền Hạng Chức Vụ:</label>
                                        <span class="ctk-tooltip-container">
                                            <span class="ctk-hover-element" title="Quyền Hạng này phân cấp cho chức vụ nhằm xác định chức vụ lớn hơn cao nhất là 1"> ?</span>
                                        </span><br />
                                        <input defaultValue={accounte.Quyenhang} className='ctk-input' required type='number' onChange={(e) => setAccounte({ ...accounte, Quyenhang: e.target.value })} placeholder='Nhập Quyền Hạng' />
                                        <br />
                                    </div>
                                    <div className='ctk_quyentruyvan'>
                                        <label>Quyền Truy Vấn:</label><br />

                                        <input className='ctk-checkbox' type="checkbox" name="them" onChange={handleCheckboxChange1}></input>
                                        <label htmlFor="v1">Thêm</label><br />

                                        <input className='ctk-checkbox' type="checkbox" name="sua" onChange={handleCheckboxChange1}></input>
                                        <label htmlFor="v2">Sửa</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="xoa" onChange={handleCheckboxChange1} ></input>
                                        <label htmlFor="v3">Xóa</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="chamcong" onChange={handleCheckboxChange1}></input>
                                        <label htmlFor="v4">Chấm Công</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="qlcongtac" onChange={handleCheckboxChange1}></input>
                                        <label htmlFor="v5">Quản Lý Công Tác Nhân Viên</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="qlcalam" onChange={handleCheckboxChange1}></input>
                                        <label htmlFor="v6">Quản Lý Ca</label><br></br>

                                        <input className='ctk-checkbox' type="checkbox" name="qldanhsach" onChange={handleCheckboxChange1}></input>
                                        <label htmlFor="v7">Quản Lý Danh Sách Nhân Sự</label><br></br>
                                    </div>

                                </div>

                                <div className='ctk-bt-tao'>
                                    <input type='submit' className='ctk-nut' value="Sửa Tài Khoản" />
                                </div>
                            </form>

                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>

    )

}

export default Captaikhoan