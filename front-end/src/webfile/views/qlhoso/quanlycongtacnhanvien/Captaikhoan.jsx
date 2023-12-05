import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
const Captaikhoan = () => {
    const [listacc, setListacc] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/account')
            .then(Response => {
                if (Response.data) {
                    setListacc(Response.data);
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
    // Hàm băm mật khẩu
    const hashPassword = async (password) => {
        const saltRounds = 10; // Số lượng vòng lặp để tạo muối
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    };
    const [selectedCheckboxes, setSelectedCheckboxes] = useState('');

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setSelectedCheckboxes(selectedCheckboxes + ',' + name);
        } else {

        }

    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
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
            else if (dataToSend.Quyentruyvan === '') {
                alert('Chọn ít nhất một quyền truy vấn');
                return;
            }
            else {
                let trunguser = '';
                listacc.map(e => {
                    if (e.User === dataToSend.User) {
                        trunguser = 'co';
                    }
                    else { trunguser = 'khong' }
                })
                if (trunguser === 'co') {
                    alert('User ' + dataToSend.User + ' đã được đăng ký');
                }
                else if (trunguser === 'khong') {
                    axios.post('http://localhost:3000/account', dataToSend)
                        .then(_res => {
                            alert('cấp thành công tài khoản có user:' + dataToSend.User);
                            window.location.reload();
                        }).catch(err => console.log(err));
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2>Cấp Tài Khoản</h2>
                <form id="myForm" onSubmit={handleSubmit}>
                    <div>
                        <label>UserName:</label>
                        <input required type="text" onChange={(e) => setAccount({ ...account, User: e.target.value })} placeholder='Nhập tên tài khoản' /><br />

                        <label>Email:</label>
                        <input required type="email" onChange={(e) => setAccount({ ...account, Email: e.target.value })} placeholder='Nhập email' /><br />

                        <label>Password:</label>
                        <input required type="password" onChange={(e) => setAccount({ ...account, Password: e.target.value })} placeholder='Nhập mật khẩu' /><br />

                        <label>Confirm Password:</label>
                        <input required type="password" onChange={(e) => setAccount({ ...account, ConfirmPassword: e.target.value })} placeholder='Xác nhận mật khẩu' /><br />
                        <label>Quyền Hạng Chức Vụ</label>
                        <input required type='number' onChange={(e) => setAccount({ ...account, Quyenhang: e.target.value })} placeholder='Nhập Quyền Hạng' />
                        <span>Quyền Hạng này phân cấp cho chức vụ nhằm xác định chức vụ lớn hơn cao nhất là 1, không thể truy cập người có quyền hạng cao hơn</span><br />

                        <label>Quyền Truy Vấn</label><br />
                        <input type="checkbox" name="them" onChange={handleCheckboxChange}></input>
                        <label htmlFor="v1">Thêm</label><br></br>
                        <input type="checkbox" name="sua" onChange={handleCheckboxChange}></input>
                        <label htmlFor="v2">Sửa</label><br></br>
                        <input type="checkbox" name="xoa" onChange={handleCheckboxChange} ></input>
                        <label htmlFor="v3">Xóa</label><br></br>
                        <input type="checkbox" name="chamcong" onChange={handleCheckboxChange}></input>
                        <label htmlFor="v4">Chấm Công</label><br></br>
                        <input type="checkbox" name="qlcongtac" onChange={handleCheckboxChange}></input>
                        <label htmlFor="v5">Quản Lý Công Tác Nhân Viên</label><br></br>
                        <input type="checkbox" name="qlcalam" onChange={handleCheckboxChange}></input>
                        <label htmlFor="v6">Quản Lý Ca</label><br></br>
                        <input type="checkbox" name="qldanhsach" onChange={handleCheckboxChange}></input>
                        <label htmlFor="v7">Quản Lý Danh Sách Nhân Sự</label><br></br>
                    </div>
                    <input type='submit' className='btn btn-success w-100 rounded-0 mb-2' value="Tạo Tài Khoản" />
                </form>
            </div>
        </div>
    )

}

export default Captaikhoan