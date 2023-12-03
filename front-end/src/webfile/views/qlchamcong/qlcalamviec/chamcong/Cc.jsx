import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../../../viewcss/qlchamcong/qlcalamviec/Cc.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Chamcong = () => {

    const [Nhansus, setNhansu] = useState([]);
    const [Chucvus, setChucvu] = useState([]);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const [Chamcongs, setChamcongs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/nhansu')
            .then((res) => setNhansu(res.data))
            .catch(err => console.log(err));

        axios.get('http://localhost:3000/chucvu')
            .then(Response => {
                if (Response.data) {
                    setChucvu(Response.data);
                } else {
                    alert(Response.data)
                }
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3000/chamcong')
            .then(response => {
                if (response.data) {
                    setChamcongs(response.data);
                } else {
                    alert('No data found');
                }
            })
            .catch(err => console.log(err));
    }, [])
    //calam
    const [Calams, setCalam] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/calamviec')
            .then((res) => setCalam(res.data))
            .catch(err => console.log(err))
    }, [])

    //end
    //page phan chai
    const [tranghientai, settranghientai] = useState(1);
    const soluongitem = 9;

    const indexcuoi = tranghientai * soluongitem;
    const indexbacdau = indexcuoi - soluongitem;
    const ACalams = Calams.slice(indexbacdau, indexcuoi);

    const maxitem = Math.ceil(Calams.length / soluongitem);

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
    //end
    const [idnsedit, setIdnsedit] = useState('')
    function setidcalam(a) {
        setIdnsedit(a);
    }

    function hienthibang() {
        setIsOverlayVisible(true);
    }

    function tacbang() {
        setIsOverlayVisible(false);
    }

    const [isButtonClicked, setIsButtonClicked] = useState(false);
    function timkiem() {
        const [year, month, day] = sldatetime.split('-').map(Number);
        const result = timkiemcalamtheongay(day, month, year);
        setLoc(result);
        setIsButtonClicked(true);
    }
    function offtimkiem() { setIsButtonClicked(false); }
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
    // const navigate = useNavigate()
  
    //next edit
    const navigate = useNavigate()
    function next_edit_chamcong(a) {
                    let matchingId = '';
                    Chamcongs.forEach((e) => {
                        if (e.Idcalamviec === a && e.Idns === idnsedit) {
                            matchingId = e._id;
                        }
                    });
    
                    navigate('/quanlychamcong/quanlycalamviec/Chinhsuacc/&idns=' + idnsedit + '&idcc=' + matchingId + '&idcl='+a);
    }
    //********** */

    return (
        <div>
            <Link to="/quanlychamcong/quanlycalamviec/xaydungcalamviec/themcalamviec" className='btn btn-success'>
                Chấm Công
            </Link>
            <div>

                <div className={isOverlayVisible ? "overlay show" : "overlay"}>
                    <div className="centeredTable">
                        <span>Dòng chữ trong bảng</span><button onClick={tacbang}>Tắt bảng</button><br />
                        <input type="date" id='inputngaytim' value={sldatetime} onChange={handleDateChange} required></input> <button onClick={timkiem}>Tìm</button>
                        <button onClick={offtimkiem}>reset</button><br />
                        {isButtonClicked ? (
                            loc.map(e => {
                                return <button onClick={() => { next_edit_chamcong(e._id); tacbang(); }} className='table_calam_select'>
                                    <tr>tên ca:{e.Tencalam}</tr><div></div>
                                    <tr>daytime:{e.Ngay}/{e.Thang}/{e.Nam}</tr><div></div>
                                    <tr>Thời gian làm:{e.Starttime + "H-" + e.Endtime}H</tr><div></div>
                                </button>
                            })
                        ) : (
                            ACalams.map(e => {
                                return <button onClick={() => { next_edit_chamcong(e._id); tacbang(); }} className='table_calam_select'>
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

            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã Nhân Viên</th>
                        <th>Tên</th>
                        <th>Chức Vụ</th>
                        <th>Cập Nhật Gần Đây</th>
                        <th>Tùy Chọn</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Nhansus.map(e => {

                            const correspondingChucvu = Chucvus.find((cv) => cv._id === e.Chucvu);
                            return <tr >
                                <td>{e.Mnv}</td>
                                <td>{e.Hoten}</td>
                                <td>{correspondingChucvu ? correspondingChucvu.Tenchucvu : '-'}</td>
                                <td></td>

                                <td>
                                    <Link to={'http://localhost:3001/quanlychamcong/quanlycalamviec/chamcongcanhan/&idns=' + e._id} className='btn btn-info btn-sm me-2'>
                                        Chấm Công</Link>
                                    <button className='btn btn-warning btn-sm' onClick={() => { hienthibang(); setidcalam(e._id); }}>
                                        Chấm Lại</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Chamcong;