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
                    <label for="inputTen" className="" htmlFor="Hoten">Ho Ten:</label>
                <input type="text"               
                id='inputTen' 
                placeholder='Nhap Hoten'
                className=''
                onChange ={(e) => setNhansu({...Nhansu, Hoten: e.target.value})}
                required/>
                </div>

                <div className=''>
                    <label for="inputCCCD" className="" htmlFor="CCCD">CCCD:</label>
                <input type="text"               
                id='inputCCCD' 
                placeholder='Nhap CCCD'
                className=''
                onChange ={(e) => setNhansu({...Nhansu, Cccd: e.target.value})}
                required/>
                </div>

                <div className=''>
                    <label for="inputID" className="" htmlFor="Mnv">Ma nhan vien:</label>
                <input type="text"               
                id='inputID' 
                placeholder='Nhap Mnv'
                className=''
                onChange ={(e) => setNhansu({...Nhansu, Mnv: e.target.value})}
                required/>
                </div>

                <div className=''>
                    <label for="inputSdt" className="" htmlFor="SDT">SDT:</label>
                <input type="text"               
                id='inputSdt' 
                placeholder='Nhap SDT'
                className=''
                onChange ={(e) => setNhansu({...Nhansu, Sdt: e.target.value})}
                required/>
                </div>
                
                <label for="inputLuong" className="">Luong:</label>
                <input type="number"               
                id='inputLuong' 
                placeholder='Nhap Luong'
                className=''
                autoComplete='off'
                onChange ={(e) => setNhansu({...Nhansu, luong: e.target.value})}
                required/> 
   
                <div className=''>
                    <label for="inputChucvu" className="" >Chuc vu:</label>
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