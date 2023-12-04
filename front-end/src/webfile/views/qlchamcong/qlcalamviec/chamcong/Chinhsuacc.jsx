import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../../../viewcss/qlchamcong/qlcalamviec/Cc.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Chinhsuacc = () => {
    const navigate = useNavigate()
    const currenturl = window.location.href;
    const timid = new URLSearchParams(currenturl);
    const idns = timid.get('idns');
    const idcc = timid.get('idcc');
    const idcl = timid.get('idcl');
    const [Nhansu, setNhansu] = useState({})
    const [Chucvus, setChucvu] = useState([])
    const [calam, setcalam] = useState([])
    const [Chamcong, setChamcong] = useState({
        Idns:idns,
        Idcalamviec:'',
        Thoigianlam:'',
        luong:''
    })
     
    useEffect(() => {
        axios.get("http://localhost:3000/nhansu/"+ idns)
        .then(Response => { if(Response.data) {setNhansu(Response.data);} else {alert(Response.data)}}).catch(err => console.log(err))

        axios.get("http://localhost:3000/chamcong/"+ idcc)
        .then((Response) => setChamcong(Response.data)).catch(err => console.log(err));
        
        axios.get("http://localhost:3000/calamviec/"+ idcl)
        .then((Response) => setcalam(Response.data)).catch(err => console.log(err));


        axios.get('http://localhost:3000/chucvu')
        .then(response => {if(response.data) {setChucvu(response.data);}else {alert('No data found');}}).catch(err => console.log(err));
    }, [])

    const dataToSend = {
        Idns: Chamcong.Idns,
        Idcalamviec: Chamcong.Idcalamviec,
        Thoigianlam: Chamcong.Thoigianlam,
        luong: Chamcong.luong
    };   
    function luu(){ 
        axios.put('http://localhost:3000/chamcong/'+idcc , dataToSend)
        .then(_res =>{navigate('/quanlycongtacnhanvien/quanlyvitri')}).catch(err => console.log(err));
    };
    return ( 
        <div>Chấm Công Cho : <span>{Nhansu.Hoten}</span><br/>
            {Chucvus.map((cv) => {
                if (Nhansu.Chucvu === cv._id) {
                    return <span key={cv._id}>chức vụ:{cv.Tenchucvu}</span>;
                }
                return null;
            })}
            <br/>
            <div>
                <tr>tên ca:{calam.Tencalam}</tr><div></div>
                <tr>daytime:{calam.Ngay}/{calam.Thang}/{calam.Nam}</tr><div></div>
                <tr>Thời gian làm:{calam.Starttime+"H-"+calam.Endtime}H</tr><div></div>
            </div>
            thời gian làm việc: <input type="number" value={dataToSend.Thoigianlam} onChange={(e) => setChamcong({ ...Chamcong, Thoigianlam: e.target.value })} placeholder='thời gian làm việc(giờ)' className='' required /> <br/>
            Lương: <input type="number" value={dataToSend.luong} onChange={(e) => setChamcong({ ...Chamcong, luong: e.target.value })} placeholder='Nhập Lương (VND)' className='' required/>    
            <button className='' onClick={luu}>Chấm lại</button>
        </div>
     );
}

export default Chinhsuacc;