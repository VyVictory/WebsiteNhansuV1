import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../viewcss/qlhoso/qlthongtinnhanvien/Qlthongtinnhanvien.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
const Qlthongtinnhanvien= () =>{
    const navigate = useNavigate()
    const[Nhansus, setNhansu] = useState([])
    const [Chucvu, setChucvu] = useState([])


    useEffect(()=> {
        axios.get('http://localhost:3000/nhansu')
        .then((res) => setNhansu(res.data)).catch(err => console.log(err))

        axios.get('http://localhost:3000/chucvu')
        .then(Response => {if(Response.data){setChucvu(Response.data);}else{alert(Response.data) }}).catch(err => console.log(err))
    }, [])

    const handleDelete = (id) =>{
        axios.delete("http://localhost:3000/nhansu/"+ id)
        .then(res => {if(res.data){navigate('/quanlythongtinnhanvien')}else(alert(res.data)
        )})
    }
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [loc, setLoc] = useState([]);
    const[tutim, setTutim]=useState({
        tutim:''
    })
    const [selectedOption, setSelectedOption] = useState({
        selecto: ''
    });
      
    const handleTim = () => {
        const filteredNhansus = Nhansus.filter(ns => {
            // Kiểm tra kiểu dữ liệu và sử dụng includes nếu cả hai là chuỗi
            const a = tutim.tutim +'';
            const b = ns[selectedOption.selecto]+'';
    
            if (typeof a === 'string' && typeof b === 'string') {
                return b.includes(a);
            }   
            return false; // Trả về false nếu không phải chuỗi hoặc không có trường dữ liệu
        });
    
        setLoc(filteredNhansus);
        setIsButtonClicked(true);
    };
    return ( 
        <div>
            <Link to="/ThemNhanvien" className='btn btn-success'>
                Thêm nhân viên
            </Link><div></div>
            <div>
                <select onChange={(e)=> setSelectedOption({...selectedOption, selecto: e.target.value})}>
                    <option value="Hoten">Họ Tên</option>
                    <option value="Hoten">Họ Tên</option>
                    <option value="Cccd">Cccd</option>
                    <option value="Mnv">Mnv</option>
                    <option value="Sdt">Sdt</option>
                    <option value="luong">Luong</option>
                </select>
                <input type='text' onChange={(e)=> setTutim({...tutim, tutim: e.target.value})} placeholder='từ khóa tìm'></input>
                <button onClick={handleTim}>Tìm</button>
            </div>

            {isButtonClicked ? (
                        loc.map(e => {
                            return <div>
                            {e.Hoten}
                            </div>
                        })

                               ) : (
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
                                                <Link to={'/quanlythongtinnhanvien/Chinhsua/&idns='+ e._id} className='btn btn-info btn-sm me-2'> Chinh sua </Link>
                                                <button className='btn btn-warning btn-sm' onClick={() => handleDelete(e._id)}> Xoa</button>
                                            </td>
                                        </tr>
                                       })
                                    }
                                </tbody>
                            </table>
                        )
            }
            
        </div>
     );
}
 
export default Qlthongtinnhanvien;
