import React,{ useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate } from 'react-router-dom'
const Qlvitri = () => {
    const navigate = useNavigate()
    const [Chucvu, setChucvu] = useState([])
    const UQuyenhang = sessionStorage.getItem('UQuyenhang');
    useEffect(() =>{
        axios.get('http://localhost:3000/chucvu')
        .then(Response => {
            if(Response.data) {
                setChucvu(Response.data);
            } else {
                alert(Response.data)
            }
        })
        .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
    axios.delete("http://localhost:3000/chucvu/" + id)
        .then(Response => {
            if (Response.data) {
                // Update state after successful deletion
                setChucvu(Chucvu.filter(cv => cv._id !== id));
                navigate('/quanlycongtacnhanvien/quanlyvitri');
            } else {
                alert("Delete operation failed");
            }
        })
        .catch(err => console.log(err));
    };

    return ( 
        <div className="">
            <div className="">
                <h3>Chuc vu</h3>
            </div>
            <Link to="/quanlycongtacnhanvien/ThemChucvu" className="btn btn-success">Them chuc vu</Link>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tên Chức Vụ</th>
                            <th>Ghi Chú</th>
                            <th>Quyền Hạng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Chucvu.slice() // Tạo một bản sao của mảng Chucvu để tránh thay đổi mảng gốc
                                .sort((a, b) => a.Quyenhang - b.Quyenhang) // Sắp xếp mảng theo Quyenhang từ nhỏ đến lớn
                                .filter(cv => cv.Quyenhang > UQuyenhang)// lọc quyền lớn hơn ra 
                                .map(cv => (
                                    <tr key={cv._id}>
                                        <td>{cv.Tenchucvu}</td> 
                                        <td>{cv.Ghichu}</td>
                                        <td>{cv.Quyenhang}</td>  
                                        <td className='td-tuychon'>
                                            <Link to={'/quanlythongtinnhanvien/Chinhsuachucvu/&idcv='+ cv._id} className='btn btn-info btn-sm me-2'>
                                                Chinh sua
                                            </Link>
                                            <button className='all-bt-delete' onClick={() => handleDelete(cv._id)}>
                                                Xoa
                                            </button>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
            
     );
}
 
export default Qlvitri;