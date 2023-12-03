import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Chinhsua = () => {
    const currenturl = window.location.href;
    const timid = new URLSearchParams(currenturl);
    const idcl = timid.get('idcl');

    const [Calam, setCalam] = useState({
        Tencalam:'',
        Starttime:'',
        Endtime:'',
        Ngay:'',
        Thang:'',
        Nam:''
    },[])
    
    const navigate = useNavigate()
    const handleSubmit = (event) => {
		event.preventDefault();
        const dataToSend = {
            Tencalam: Calam.Tencalam,
            Starttime: Calam.Starttime,
            Endtime: Calam.Endtime,
            Ngay: Calam.Ngay,
            Thang: Calam.Thang,
            Nam: Calam.Nam
        };          
        axios.put('http://localhost:3000/calamviec/'+ idcl ,dataToSend)
        .then(_res =>{
            navigate('/quanlychamcong/quanlycalamviec/xaydungcalamviec')
        })
        .catch(err => console.log(err));
	}
    useEffect(() => {
        axios.get("http://localhost:3000/calamviec/"+ idcl)
        .then(Response => {
            if(Response.data) {
                setCalam(Response.data);
            } else {
                alert(Response.data)
            }
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <div className=''>
        <div className=''>
            <h3 className=''>Chỉnh Sửa Ca Làm Việc</h3>
            <form className='' onSubmit={handleSubmit}>
            <div className=''>
                    <label className="">Tên ca làm:</label>
                <input type="text" value={Calam.Tencalam} placeholder='Nhap Tencalam' className=''
                    onChange ={(e) => setCalam({...Calam, Tencalam: e.target.value})}
                    required/>
                </div>

                <div className=''>
                    <label className=''>Starttime:</label>
                <input type="time" value={Calam.Starttime} placeholder='Nhap Starttime' className=''
                    onChange ={(e) => setCalam({...Calam, Starttime: e.target.value})}
                    required/>
                </div>

                <div className=''>
                    <label className="">Endtime:</label>
                <input type="time" value={Calam.Endtime} placeholder='Nhap Endtime' className=''
                    onChange ={(e) => setCalam({...Calam, Endtime: e.target.value})}
                    required/>
                </div>

                <div className=''>
                    <label className="">ngay:</label>
                <input type="date" value={Calam.Nam+"-"+Calam.Thang+"-"+Calam.Ngay} placeholder='Nhap ngày' className=''
                    onChange ={(e) => setCalam({...Calam, Ngay: e.target.value})}
                    required/>
                </div>
                <button className=''>sửa</button>
            </form>
        </div>
    </div>
  )
}

export default Chinhsua