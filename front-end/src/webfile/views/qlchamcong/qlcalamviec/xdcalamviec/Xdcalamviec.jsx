import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Xdcalamviec = () => {
    const navigate = useNavigate()
    const[Calams, setCalam] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3000/calamviec')
        .then((res) => setCalam(res.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) =>{
        axios.delete("http://localhost:3000/calamviec/"+ id)
        .then(Response => {
            if (Response.data) {
                // Update state after successful deletion
                setCalam(Calams.filter(cl => cl._id !== id));
                navigate('/quanlychamcong/quanlycalamviec/xaydungcalamviec');
            } else {
                alert("Delete operation failed");
            }
        })
    }

    return ( 
        <div>
            <Link to="/quanlychamcong/quanlycalamviec/xaydungcalamviec/themcalamviec" className='btn btn-success'>
                Thêm Ca Làm Việc
            </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Tên Ca Làm Việc</th>
                        <th>Bắc Đầu</th>
                        <th>Kết Thúc</th>
                        <th>Ngày</th>
                        <th>Tùy Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Calams.map(e => {
                        return <tr>
                            <td>{e.Tencalam}</td>
                            <td>{e.Starttime}:h</td>
                            <td>{e.Endtime}:h</td>
                            <td>{e.Ngay}/{e.Thang}/{e.Nam}</td>
                            <td>
                                <Link to={'/quanlychamcong/quanlycalamviec/xaydungcalamviec/chinhsuacalamviec/&idcl='+ e._id} className='btn btn-info btn-sm me-2'>Chinh sua </Link>
                                <button className='btn btn-warning btn-sm' onClick={() => handleDelete(e._id)}>Xoa</button>
                            </td>
                        </tr>
                       })
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Xdcalamviec;
