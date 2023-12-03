import axios from 'axios'
import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
const ThemChucvu = () => {
    const [tenChucVu, setTenChucVu] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const dataToSend = {
            Tenchucvu: tenChucVu,
            Ghichu: "a"
        };
        axios.post('http://localhost:3000/chucvu', dataToSend)
        .then(Response => {
            if(Response.data){
                navigate('/quanlycongtacnhanvien/quanlyvitri')
            } else{
                alert(Response.data)
            }
        }
            )
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-cotent-center align-items-center h-75'>
        <div className='p-3 rounded w-25 border'>
            <h2>Them Chuc vu</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Chucvu"><strong>Chuc Vu</strong></label>
                    <input required type="text" name='Chucvu' placeholder='Nhap Chucvu' onChange={(e)=> setTenChucVu(e.target.value)} className='form-control round-0'/>
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Them Chucvu</button>
            </form>
        </div>
    </div>
  )
}

export default ThemChucvu