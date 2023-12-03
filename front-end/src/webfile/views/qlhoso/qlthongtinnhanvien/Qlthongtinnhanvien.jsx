import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../viewcss/qlhoso/qlthongtinnhanvien/Qlthongtinnhanvien.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
const Qlthongtinnhanvien= () =>{
    const[Nhansus, setNhansu] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:3000/nhansu')
        .then((res) => setNhansu(res.data))
        .catch(err => console.log(err))
    },)

    const [Chucvu, setChucvu] = useState([])
    
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
    }, [])

    const navigate = useNavigate()
    const handleDelete = (id) =>{
        axios.delete("http://localhost:3000/nhansu/"+ id)
        .then(res => {
            if(res.data){
                navigate('/quanlythongtinnhanvien')
            } else (
                alert(res.data)
        )})
    }
    return ( 
        <div>
            <Link to="/ThemNhanvien" className='btn btn-success'>
                Thêm nhân viên
            </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Hoten</th>
                        <th>Cccd</th>
                        <th>Mnv</th>
                        <th>Sdt</th>
                        <th>luong</th>
                        <th>Chucvu </th> 
                        <th> Tuy chon </th>
                    </tr>
                </thead>
                <tbody>
                    {
                       Nhansus.map(e => {
                        const correspondingChucvu = Chucvu.find((cv) => cv._id === e.Chucvu);
                        return <tr>
                            <td>{e.Hoten}</td>
                            <td>{e.Cccd}</td>
                            <td>{e.Mnv}</td>
                            <td>{e.Sdt}</td>
                            <td>{e.luong}</td>
                            <td>{correspondingChucvu ? correspondingChucvu.Tenchucvu : '-'}</td>
                            <td>
                                <Link to={'/quanlythongtinnhanvien/Chinhsua/&idns='+ e._id} className='btn btn-info btn-sm me-2'>
                                    Chinh sua </Link>
                                <button className='btn btn-warning btn-sm' onClick={() => handleDelete(e._id)}>
                                    Xoa</button>
                            </td>
                        </tr>
                       })
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default Qlthongtinnhanvien;
