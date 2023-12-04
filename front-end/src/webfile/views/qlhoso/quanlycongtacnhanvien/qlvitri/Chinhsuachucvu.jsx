import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Chinhsuachucvu = () => {
    const currenturl = window.location.href;
    const timid = new URLSearchParams(currenturl);
    const idcv = timid.get('idcv');
    const [Chucvu, setChucvu] = useState({
        Tenchucvu:'',
        Ghichu:''
    })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
		e.preventDefault();
		const dataToSend = {
            Tenchucvu: Chucvu.Tenchucvu,
            Ghichu: Chucvu.Ghichu
        };
		axios.put('http://localhost:3000/chucvu/'+ idcv ,dataToSend)
		.then(res => {
			navigate('/quanlycongtacnhanvien/quanlyvitri')
		})
		.catch(err => console.log(err));
	}

    useEffect(() => {
        axios.get('http://localhost:3000/chucvu/'+ idcv)
        .then(response => {
            if (response.data) {
                setChucvu(response.data);
            } else {
                alert('No data found');
            }
        })
        .catch(err => console.log(err));
    }, [])
    return ( 
        <div className='Chinhsuachucvu'>
            <form className='' onSubmit={handleSubmit}>
                <div className=''>
                <label for="inputTen" className="" htmlFor="Hoten">Tên Chức Vụ:</label>
                <input type="text"               
                id='inputTenchucvu' 
                placeholder='Nhập Tên Chức Vụ'
                className=''
                value={Chucvu.Tenchucvu}
                onChange ={(e) => setChucvu({...Chucvu, Tenchucvu: e.target.value})}
                required
                />
                </div>

                <div className=''>
                    <label for="inputCCCD" className="" htmlFor="CCCD">Ghi Chú:</label>
                <input type="text"               
                id='inputGhichu' 
                placeholder='Nhập Ghi Chú'
                className=''
                value={Chucvu.Ghichu}
                onChange ={(e) => setChucvu({...Chucvu, Ghichu: e.target.value})}
                />
                </div>
                <button className=''>sửa Chức Vụ</button>
            </form>
        </div>
    );
}

export default Chinhsuachucvu;
