import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../../../viewcss/qlchamcong/qlcalamviec/Chamcongcanhan.css';


const Cccanhan = () => {
    const currenturl = window.location.href;
    const timid = new URLSearchParams(currenturl);
    const idns = timid.get('idns');
    const navigate = useNavigate()
    const [Nhansu, setNhansu] = useState({})
    const [Chucvus, setChucvu] = useState([])
    const [Chamcong, setChamcong] = useState({
        Idns: idns,
        Idcalamviec: '',
        Thoigianlam: '',
        luong: ''
    })
    useEffect(() => {
        axios.get("http://localhost:3000/nhansu/" + idns)
            .then(Response => {if(Response.data){setNhansu(Response.data);}else{alert(Response.data)}}).catch(err => console.log(err))
        axios.get('http://localhost:3000/chucvu')
            .then(response => {if(response.data) {setChucvu(response.data);}else{alert('No data found');}}).catch(err => console.log(err));
    }, [])
    const [Calams, setCalam] = useState([])
    const [chamcongid, setChamcongid] = useState([])
    const [Calams_notset, setCalams_notset] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/calamviec')
            .then((res) => setCalam(res.data)).catch(err => console.log(err))
        axios.get('http://localhost:3000/chamcong/')
            .then(response =>{if(response.data){setChamcongid(response.data);}else{alert('No data found');}}).catch(err => console.log(err));
    }, [])

    useEffect(() => {
        const filteredCalams = Calams.filter(cl => {
            const found = chamcongid.some(cc => cc.Idcalamviec === cl._id && cc.Idns ===idns );
            return !found;
        });
        setCalams_notset(filteredCalams);
    }, [Calams, chamcongid]);

    function luu() {
        const dataToSend = {
            Idns: Chamcong.Idns,
            Idcalamviec: Chamcong.Idcalamviec,
            Thoigianlam: Chamcong.Thoigianlam,
            luong: Chamcong.luong
        };
        axios.post('http://localhost:3000/chamcong', dataToSend)
            .then(_res => {navigate('/quanlycongtacnhanvien/quanlyvitri')}).catch(err => console.log(err));
    }
    const [selectcl, setSelectcl] = useState([])
    const [tranghientai, settranghientai] = useState(1);
    const soluongitem = 9;
    const indexcuoi = tranghientai * soluongitem;
    const indexbacdau = indexcuoi - soluongitem;
    const ACalams = Calams_notset.slice(indexbacdau, indexcuoi);
    const maxitem = Math.ceil(Calams_notset.length / soluongitem);
    const nextPage = () => {
        if (tranghientai < maxitem) {
            settranghientai(tranghientai + 1);
        }
    };
    const prevPage = () => {
        if (tranghientai > 1) {
            settranghientai(tranghientai - 1);
        }
    };
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [sldatetime, setsldatetime] = useState('');
    const handleDateChange = (event) => {
        setsldatetime(event.target.value);
    };
    const [loc, setLoc] = useState([]);
    function timkiemcalamtheongay(ngay, thang, nam) {
        const loc = ACalams.filter(item => {
            if (item.Ngay === ngay & item.Thang === thang & item.Nam === nam) {
                const ngayMatches = item.Ngay === ngay;
                const thangMatches = item.Thang === thang;
                const namMatches = item.Nam === nam;
                return ngayMatches || thangMatches || namMatches;
            }
        });
        return loc;
    }
    function timkiem() {
        const [year, month, day] = sldatetime.split('-').map(Number);
        const result = timkiemcalamtheongay(day, month, year);
        setLoc(result);
        setIsButtonClicked(true);
    }
    function offtimkiem() {
        setIsButtonClicked(false);
    }
    const [isselectVisible, setIsselectVisible] = useState(false);
    function tacbang() {
        setIsselectVisible(false);
    }
    function hienthibang() {
        setIsselectVisible(true);
    }
    const [chonVisible, setChonVisible] = useState(false);
    function onselect() {
        setChonVisible(true);
    }
    useEffect(() => {
        axios.get("http://localhost:3000/calamviec/" + Chamcong.Idcalamviec)
        .then((Response) => setSelectcl(Response.data)).catch(err => console.log(err));
    }, [Chamcong.Idcalamviec]);
    return (
        <div>Chấm Công Cho : <span>{Nhansu.Hoten}</span><br />
            {Chucvus.map((cv) => {
                if (Nhansu.Chucvu === cv._id) {
                    return <span key={cv._id}>chức vụ:{cv.Tenchucvu}</span>;
                }
                return null;
            })}
            <br />
            <div className={chonVisible ? "selectcalam show" : "selectcalam"}>
                <tr>tên ca:{selectcl.Tencalam}</tr><div></div>
                <tr>daytime:{selectcl.Ngay}/{selectcl.Thang}/{selectcl.Nam}</tr><div></div>
                <tr>Thời gian làm:{selectcl.Starttime + "H-" + selectcl.Endtime}H</tr><div></div>
            </div>
            <div>
                <div className={isselectVisible ? "select_calamviec show" : "select_calamviec"}>
                    <div className="centeredTable">
                        <span>Danh Sách Ca Làm Chưa Chấm</span><button onClick={tacbang}>Tắt bảng</button><br />
                        <input type="date" id='inputngaytim' value={sldatetime} onChange={handleDateChange} required></input> <button onClick={timkiem}>Tìm</button>
                        <button onClick={offtimkiem}>reset</button><br />
                        {isButtonClicked ? (
                            loc.map(e => {
                                return <button onClick={() => { setChamcong({ ...Chamcong, Idcalamviec: e._id }); tacbang(); onselect(); }} className='table_calam_select'>
                                    <tr>tên ca:{e.Tencalam}</tr><div></div>
                                    <tr>daytime:{e.Ngay}/{e.Thang}/{e.Nam}</tr><div></div>
                                    <tr>Thời gian làm:{e.Starttime + "H-" + e.Endtime}H</tr><div></div>
                                </button>
                            })
                        ) : (
                            ACalams.map(e => {
                                return <button onClick={() => { setChamcong({ ...Chamcong, Idcalamviec: e._id }); tacbang(); onselect(); }} className='table_calam_select'>
                                    <tr>tên ca:{e.Tencalam}</tr><div></div>
                                    <tr>daytime:{e.Ngay}/{e.Thang}/{e.Nam}</tr><div></div>
                                    <tr>Thời gian làm :{e.Starttime}H-{e.Endtime}H</tr><div></div>
                                </button>
                            })
                        )
                        }
                        <br /><button onClick={prevPage}>trở về</button>
                        <span> trang:{tranghientai} </span>
                        <button onClick={nextPage}>Tiếp</button>
                    </div>
                </div>
            </div>
            <button className='select_calam' onClick={hienthibang}>
                Chọn Ca Làm Việc
            </button><br/>
            thời gian làm việc: <input type="number" onChange={(e) => setChamcong({ ...Chamcong, Thoigianlam: e.target.value })} placeholder='thời gian làm việc(giờ)' className='' required /> <br />
            Lương: <input type="number" onChange={(e) => setChamcong({ ...Chamcong, luong: e.target.value })} placeholder='Nhập Lương (VND)' className='' required />
            <br/>
            <button className='' onClick={luu}>Lưu</button>

        </div>
    );
}

export default Cccanhan;






