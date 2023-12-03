import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ThemNhanvien = () => {
    const [Calam, setCalam] = useState({
        Tencalam:'',
        Starttime:'',
        Endtime:'',
    })
    const[Day,setDay]= useState({
        Ngay:'',
        Thang:'',
        Nam:''
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
		event.preventDefault();
        const dataToSend = {
            Tencalam: Calam.Tencalam,
            Starttime: Calam.Starttime,
            Endtime: Calam.Endtime,
            Ngay: Day.Ngay,
            Thang: Day.Thang,
            Nam: Day.Nam
        };          
        axios.post('http://localhost:3000/calamviec', dataToSend)
        .then(_res =>{
            navigate('/quanlychamcong/quanlycalamviec/xaydungcalamviec')
        })
        
        .catch(err => console.log(err));
	}
    const [sldatetime, setsldatetime] = useState('');
    const handleDateChange = (event) => {
        setsldatetime(event.target.value);
        const [year, month, day] = sldatetime.split('-').map(Number);
        setDay(p => ({
            ...p,
            Ngay: day,
            Thang: month,
            Nam: year
        }));
    };

  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
        <div className=''>
            <h3 className=''>Thêm Ca Làm</h3>
            <form className='' onSubmit={handleSubmit}>
                <div className=''>
                    <label className="">Tên ca làm:</label>
                <input type="text" placeholder='Nhap Tencalam' className=''
                    onChange ={(e) => setCalam({...Calam, Tencalam: e.target.value})}
                    required/>
                </div>

                <div className=''>
                    <label className="">Starttime:</label>
                <input type="time" placeholder='Nhap Starttime' className=''
                    onChange ={(e) => setCalam({...Calam, Starttime: e.target.value})}
                    required/>
                </div>

                <div className=''>
                    <label className="">Endtime:</label>
                <input type="time" placeholder='Nhap Endtime' className=''
                    onChange ={(e) => setCalam({...Calam, Endtime: e.target.value})}
                    required/>
                </div>

                <div className=''>
                    <label className="">ngay:</label>
                <input type="date" placeholder='Nhap ngày' className=''
                    onChange ={handleDateChange}
                    required/>
                </div>
                <button className=''>Them Ca Lam</button>
            </form>
        </div>
    </div>
    
  )
}

export default ThemNhanvien