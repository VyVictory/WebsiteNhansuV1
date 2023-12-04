import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ThemNhanvien = () => {
    const [Nhansu, setNhansu] = useState({
        Hoten:'',
        Cccd:'',
        Mnv:'',
        Sdt:'',
        luong:'',
        Chucvu:''
    })
    const [Chucvu, setChucvu] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/chucvu')
        .then(response => {
            if (response.data) {
                setChucvu(response.data);
            } else {
                alert('No data found');
            }
        })
        .catch(err => console.log(err));
    }, []);

    const navigate = useNavigate()
    const handleSubmit = (event) => {
		event.preventDefault();
        const dataToSend = {
            Hoten: Nhansu.Hoten,
            Cccd: Nhansu.Cccd,
            Mnv: Nhansu.Cccd,
            Sdt: Nhansu.Cccd,
            luong: Nhansu.luong,
            Chucvu: Nhansu.Chucvu
        };
        if(dataToSend.Chucvu ==''){
            dataToSend.Chucvu=Chucvu[0];
        }            
        axios.post('http://localhost:3000/nhansu', dataToSend)
        .then(_res =>{
            navigate('/quanlythongtinnhanvien')
        })
        
        .catch(err => console.log(err));
	}

    
  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
        <div className=''>
            <h3 className=''>Them Nhanvien</h3>
            <form className='' onSubmit={handleSubmit}>
                <div className=''>
                    <label className="" >Ho Ten:</label>
                <input type="text" placeholder='Nhap Hoten' onChange ={(e) => setNhansu({...Nhansu, Hoten: e.target.value})} required/> </div>

                <div className=''>
                    <label className="" >CCCD:</label>
                <input type="number" placeholder='Nhap CCCD' onChange ={(e) => setNhansu({...Nhansu, Cccd: e.target.value})} required/> </div>

                <div className=''>
                    <label className="" >Ma nhan vien:</label>
                <input type="text" placeholder='Nhap Mnv' onChange ={(e) => setNhansu({...Nhansu, Mnv: e.target.value})} required/> </div>

                <div className=''>
                    <label className="" >SDT:</label>
                <input type="number" placeholder='Nhap SDT' onChange ={(e) => setNhansu({...Nhansu, Sdt: e.target.value})} required/> </div>
    
                <label className="">Luong:</label>
                <input type="number" placeholder='Nhap Luong' className='' onChange ={(e) => setNhansu({...Nhansu, luong: e.target.value})} required/> 
                <div className=''>
                    <label className="" >Chuc vu:</label>
                    <select name="Chucvu" id="Chucvu" className='' onChange={(e) => setNhansu({ ...Nhansu, Chucvu: e.target.value })}>
                        {Chucvu.map((cv) => (
                            <option key={cv._id} value={cv._id}>{cv.Tenchucvu}</option>
                        ))}
                    </select>
                </div>
                <button className=''>Them Nhan vien</button>
            </form>
        </div>
    </div>
    
  )
}

export default ThemNhanvien