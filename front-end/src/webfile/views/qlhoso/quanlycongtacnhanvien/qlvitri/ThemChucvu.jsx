import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ThemChucvu = () => {
    const [ChucVu, setChucVu] = useState({
        Tenchucvu: '',
        Quyenhang: '',
        Ghichu: '',
    });
    const UQuyenhang = sessionStorage.getItem('UQuyenhang');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const dataToSend = {
            Tenchucvu: ChucVu.Tenchucvu,
            Quyenhang: ChucVu.Quyenhang,
            Ghichu: ChucVu.Ghichu,
        };
        if (dataToSend.Quyenhang < UQuyenhang) {
            alert("không thể thêm chức vụ mới có quyền hạng cao hơn bản thân. quyền hạng bản thân: " + UQuyenhang)
        } else {
            axios.post('http://localhost:3000/chucvu', dataToSend)
                .then(Response => { if (Response.data) { navigate('/quanlycongtacnhanvien/quanlyvitri') } else { alert(Response.data) } }).catch(err => console.log(err))
        }
    }

    return (
        <div className='d-flex justify-cotent-center align-items-center h-75'>
            <div className='p-3 rounded w-25 border'>
                <h2>Thêm Chức Vụ</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Chức Vụ</label>
                        <input required type="text" onChange={(e) => setChucVu({ ...ChucVu, Tenchucvu: e.target.value })} placeholder='Nhap Chucvu' /><br />
                        <label>Quyền Hạng Chức Vụ</label>
                        <input type='number' onChange={(e) => setChucVu({ ...ChucVu, Quyenhang: e.target.value })} placeholder='Nhập Quyền Hạng'></input>
                        <span>Quyền Hạng này phân cấp cho chức vụ nhằm xác định chức vụ lớn hơn cao nhất là 1</span><br />
                        <label>Ghi Chú</label>
                        <input required type="text" onChange={(e) => setChucVu({ ...ChucVu, Ghichu: e.target.value })} placeholder='Nhap Ghi Chú' /><br />
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Them Chucvu</button>
                </form>
            </div>
        </div>
    )
}

export default ThemChucvu