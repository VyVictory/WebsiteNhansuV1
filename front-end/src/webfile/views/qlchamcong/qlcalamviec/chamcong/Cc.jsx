import React from 'react';
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
import '../../../../viewcss/qlchamcong/qlcalamviec/Cc.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Chamcong = () => {
    const [Nhansus, setNhansu] = useState([]);
    const [Chucvus, setChucvu] = useState([]);
    const [Chamcongs, setChamcongs] = useState([])
    const [Calams, setCalam] = useState([])
    const UQuyenhang = sessionStorage.getItem('UQuyenhang');

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [Calams_set, setCalams_set] = useState([])
    const [idnsedit, setIdnsedit] = useState('')

    const inputRef = useRef(null);

    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/nhansu')
            .then((res) => setNhansu(res.data)).catch(err => console.log(err));
        axios.get('http://localhost:3000/chucvu')
            .then(Response => { if (Response.data) { setChucvu(Response.data); } else { alert(Response.data) } }).catch(err => console.log(err));
        axios.get('http://localhost:3000/chamcong')
            .then(response => { if (response.data) { setChamcongs(response.data); } else { alert('No data found'); } }).catch(err => console.log(err));
        axios.get('http://localhost:3000/calamviec')
            .then((res) => setCalam(res.data)).catch(err => console.log(err))
    }, [])
    //calam
    useEffect(() => {
        const filteredCalams = Calams.filter(e => {
            return Chamcongs.some(cc => cc.Idcalamviec === e._id && cc.Idns === idnsedit);
        });
        setCalams_set(filteredCalams);
    }, [Calams, Chamcongs, idnsedit]);
    //page phan chai
    const [tranghientai, settranghientai] = useState(1);
    const soluongitem = 9;
    const indexcuoi = tranghientai * soluongitem;
    const indexbacdau = indexcuoi - soluongitem;
    const ACalams = Calams_set.slice(indexbacdau, indexcuoi);
    const maxitem = Math.ceil(Calams_set.length / soluongitem);
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
    function resettimkiem() {
        setIsButtonClicked(false);
    }
    // const navigate = useNavigate()

    //next edit

    function next_edit_chamcong(a) {
        let matchingId = '';
        Chamcongs.forEach((e) => {
            if (e.Idcalamviec === a && e.Idns === idnsedit) {
                matchingId = e._id;
            }
        });
        navigate('/quanlychamcong/quanlycalamviec/Chinhsuacc/&idns=' + idnsedit + '&idcc=' + matchingId + '&idcl=' + a);
    }
    //********** */
    function motcalamviec(id, ten, start, end, ngay, thang, nam) {
        return <button className='table_calam_select' onClick={() => { next_edit_chamcong(id); tacbang(); }}>
            <tr>tên ca:{ten}</tr><div></div>
            <tr>daytime:{ngay}/{thang}/{nam}</tr><div></div>
            <tr>Thời gian làm:{start + "H-" + end}H</tr><div></div>
        </button>
    }
    // const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [locnhansu, setLocnhansu] = useState([]);
    const [tutim, setTutim] = useState({
        tutim: ''
    })
    const [selectedOption, setSelectedOption] = useState({
        selecto: ''
    });

    const handleTim = () => {
        const a = tutim.tutim ? tutim.tutim + '' : 'Hoten';
        const filteredNhansus = Nhansus.filter(ns => {
            const b = ns[selectedOption.selecto] + '';
            if (typeof a === 'string' && typeof b === 'string') {
                return b.includes(a);
            }
            return false;
        });
        setLocnhansu(filteredNhansus);
        setIsButtonClicked(true);
    };
    function resettimkiemtext() {
        inputRef.current.value = ''; // Xóa giá trị của input
    };
    return (
        <div>
            <h1>Danh Sách Chấm Công</h1>
            <div>

                <div className={isOverlayVisible ? "overlay show" : "overlay"}>
                    <div className="centeredTable">
                        <span>Danh Sách Ca Làm Đã Chấm</span><button onClick={tacbang}>Tắt bảng</button><br />
                        <input type="date" id='inputngaytim' value={sldatetime} onChange={handleDateChange} required></input> <button onClick={timkiem}>Tìm</button>
                        <button onClick={resettimkiem}>reset</button><br />
                        {isButtonClicked ? (
                            loc.map(e => {
                                return motcalamviec(e._id, e.Tencalam, e.Starttime, e.Endtime, e.Ngay, e.Thang, e.Nam)
                            })
                        ) : (
                            ACalams.map(e => {
                                return motcalamviec(e._id, e.Tencalam, e.Starttime, e.Endtime, e.Ngay, e.Thang, e.Nam)
                            })
                        )
                        }
                        <br /><button onClick={prevPage}>trở về</button>
                        <span> trang:{tranghientai} </span>
                        <button onClick={nextPage}>Tiếp</button>
                    </div>
                </div>
            </div>
            <div>
                <select onChange={(e) => setSelectedOption({ ...selectedOption, selecto: e.target.value })}>
                    <option value=''>Chọn một trường</option>
                    <option value="Hoten">Họ Tên</option>
                    <option value="Mnv">Mnv</option>
                </select>

                <input type='text' ref={inputRef} onChange={(e) => { setTutim({ ...tutim, tutim: e.target.value }); handleTim() }} placeholder='từ khóa tìm'></input>
                <button onClick={handleTim}>Tìm</button>
                <button onClick={() => { resettimkiem(); resettimkiemtext(); }}>reset</button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã Nhân Viên</th>
                        <th>Tên</th>
                        <th>Chức Vụ</th>
                        <th>Quyền Hạng</th>
                        <th>Tùy Chọn</th>

                    </tr>
                </thead>
                <tbody>
                    {isButtonClicked ? (
                        locnhansu.map(e => {
                            const correspondingChucvu = Chucvus.find((c) => c._id === e.Chucvu);
                            if (correspondingChucvu && +correspondingChucvu.Quyenhang > +UQuyenhang) {
                                return {
                                    _id: e._id,
                                    Hoten: e.Hoten,
                                    Cccd: e.Cccd,
                                    Mnv: e.Mnv,
                                    Sdt: e.Sdt,
                                    luong: e.luong,
                                    Tenchucvu: correspondingChucvu.Tenchucvu,
                                    Quyenhang: correspondingChucvu.Quyenhang,
                                };
                            } else {
                                return null;
                            }
                        })
                            .filter(Boolean) // Lọc bỏ các phần tử null
                            .sort((a, b) => a.Quyenhang - b.Quyenhang) // Sắp xếp theo Quyenhang tăng dần
                            .map((e) => (
                                <tr >
                                    <td>{e.Mnv}</td>
                                    <td>{e.Hoten}</td>
                                    <td>{e.Tenchucvu ? e.Tenchucvu : '-'}</td>
                                    <td>{e.Quyenhang}</td>
                                    <td>
                                        <Link to={'http://localhost:3001/quanlychamcong/quanlycalamviec/chamcongcanhan/&idns=' + e._id} className='btn btn-info btn-sm me-2'>
                                            Chấm Công</Link>
                                        <button className='btn btn-warning btn-sm' onClick={() => { setIdnsedit(e._id); hienthibang(); }}>
                                            Chấm Lại</button>
                                    </td>
                                </tr>
                            ))
                    ) : (
                        Nhansus.map(e => {
                            const correspondingChucvu = Chucvus.find((c) => c._id === e.Chucvu);
                            if (correspondingChucvu && +correspondingChucvu.Quyenhang > +UQuyenhang) {
                                return {
                                    _id: e._id,
                                    Hoten: e.Hoten,
                                    Cccd: e.Cccd,
                                    Mnv: e.Mnv,
                                    Sdt: e.Sdt,
                                    luong: e.luong,
                                    Tenchucvu: correspondingChucvu.Tenchucvu,
                                    Quyenhang: correspondingChucvu.Quyenhang,
                                };
                            } else {
                                return null;
                            }
                        })
                            .filter(Boolean) // Lọc bỏ các phần tử null
                            .sort((a, b) => a.Quyenhang - b.Quyenhang) // Sắp xếp theo Quyenhang tăng dần
                            .map((e) => (
                                <tr >
                                    <td>{e.Mnv}</td>
                                    <td>{e.Hoten}</td>
                                    <td>{e.Tenchucvu ? e.Tenchucvu : '-'}</td>
                                    <td>{e.Quyenhang}</td>
                                    <td>
                                        <Link to={'http://localhost:3001/quanlychamcong/quanlycalamviec/chamcongcanhan/&idns=' + e._id} className='btn btn-info btn-sm me-2'>
                                            Chấm Công</Link>
                                        <button className='btn btn-warning btn-sm' onClick={() => { setIdnsedit(e._id); hienthibang(); }}>
                                            Chấm Lại</button>
                                    </td>
                                </tr>
                            ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Chamcong;