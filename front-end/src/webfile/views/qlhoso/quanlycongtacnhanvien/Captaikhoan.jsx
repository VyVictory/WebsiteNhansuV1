import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import '../../../viewcss/qlhoso/qlthongtinnhanvien/Captaikhoan.css'
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
        <div className='ctk-all'>
            <div className='ctk-container'>
                <div className='ctk-child'>
                    <div className='ctk-tille'>
                        <h2>Cấp Tài Khoản</h2>
                    </div>

                    <form className='ctk-form' id="myForm" onSubmit={handleSubmit}>
                        <div className='ctk-input-conten'>
                            <div className='ctk-input-text'>
                                <label className='ctk-tille-input'>UserName:</label><br />
                                <input required type="text" onChange={(e) => setAccount({ ...account, User: e.target.value })} placeholder='Nhập tên tài khoản' /><br />
                                <label className='ctk-tille-input'>Password:</label><br />
                                <input required type="password" onChange={(e) => setAccount({ ...account, Password: e.target.value })} placeholder='Nhập mật khẩu' /><br />
                                <label className='ctk-tille-input'>Confirm Password:</label><br />
                                <input required type="password" onChange={(e) => setAccount({ ...account, ConfirmPassword: e.target.value })} placeholder='Xác nhận mật khẩu' /><br />
                                <label className='ctk-tille-input'>Email:</label><br />
                                <input required type="email" onChange={(e) => setAccount({ ...account, Email: e.target.value })} placeholder='Nhập email' /><br />
                                <label className='ctk-tille-input'>Quyền Hạng Chức Vụ:</label><br />
                                <input required type='number' onChange={(e) => setAccount({ ...account, Quyenhang: e.target.value })} placeholder='Nhập Quyền Hạng' />
                                <span class="ctk-tooltip-container">
                                    <span class="ctk-hover-element" title="Quyền Hạng này phân cấp cho chức vụ nhằm xác định chức vụ lớn hơn cao nhất là 1"> ?</span>
                                </span>
                                <br />
                            </div>
                            <div className='ctk_quyentruyvan'>
                                <label>Quyền Truy Vấn:</label>

                                <label class="ctk-container-checkbox" htmlFor="v1">Thêm
                                    <input type="checkbox" name="them" onChange={handleCheckboxChange}></input>
                                    <span class="ctk-checkmark"></span>
                                </label><br />
                                <label class="ctk-container-checkbox" htmlFor="v2">Sửa
                                    <input type="checkbox" name="sua" onChange={handleCheckboxChange}></input>
                                    <span class="ctk-checkmark"></span>
                                </label><br></br>
                                <label class="ctk-container-checkbox" htmlFor="v3">Xóa
                                    <input type="checkbox" name="xoa" onChange={handleCheckboxChange} ></input>
                                    <span class="ctk-checkmark"></span>
                                </label><br></br>
                                <label class="ctk-container-checkbox" htmlFor="v4">Chấm Công
                                    <input type="checkbox" name="chamcong" onChange={handleCheckboxChange}></input>
                                    <span class="ctk-checkmark"></span>
                                </label><br></br>
                                <label class="ctk-container-checkbox" htmlFor="v5">Quản Lý Công Tác Nhân Viên
                                    <input type="checkbox" name="qlcongtac" onChange={handleCheckboxChange}></input>
                                    <span class="ctk-checkmark"></span>
                                </label><br></br>
                                <label class="ctk-container-checkbox" htmlFor="v6">Quản Lý Ca
                                    <input type="checkbox" name="qlcalam" onChange={handleCheckboxChange}></input>
                                    <span class="ctk-checkmark"></span>
                                </label><br></br>
                                <label class="ctk-container-checkbox" htmlFor="v7">Quản Lý Danh Sách Nhân Sự
                                    <input type="checkbox" name="qldanhsach" onChange={handleCheckboxChange}></input>
                                    <span class="ctk-checkmark"></span>
                                </label><br></br>
                            </div>

                        </div>
                        <div className='ctk-bt-tao'>
                            <input type='submit' className='btn btn-success w-100 rounded-0 mb-2' value="Tạo Tài Khoản" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )

}

export default Captaikhoan