import '../../viewcss/Bar/Bar.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Bar = () => {
    const handleSubmitLogout = (event) => {
        event.preventDefault();
        sessionStorage.setItem('loggedIn', 'false');
        sessionStorage.removeItem('Uid');
        sessionStorage.removeItem('UUser');
        sessionStorage.removeItem('UQuyenhang');
        sessionStorage.removeItem('UQuyentruyvan');
        window.location.reload();
    }
    const Uid = sessionStorage.getItem('Uid');
    const UQuyentruyvan = sessionStorage.getItem('UQuyentruyvan');
    const UQuyenhang = sessionStorage.getItem('UQuyenhang');
    const Uuser = sessionStorage.getItem('UUser');
    /*
    const [taikhoan, setTaikhoan] = useState({
        Quyentruyvan:''
    });
    useEffect(() => {
        axios.get('http://localhost:3000/account/' + Uid)
            .then((res) => setTaikhoan(res.data)).catch(err => console.log(err))
    }, [])*/

    function captaikhoanslect() {
        return <li className='sl'>
            <a href="/captaikhoan">
                <button type="button" class="quanlytienluong" >Cấp Tài Khoản</button>
                <div class="collapse">
                    <div className='select'>
                        <div className='resize'>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    }
    return (
        <div className="Bar">
            <div className="leftbar">
                {
                    (UQuyentruyvan.includes("qldanhsach") || UQuyentruyvan.includes("qlcongtac") || UQuyentruyvan.includes("admin")) && (
                        <li className='sl'>
                            <button type="button" className="quanlyhoso" data-toggle="collapse" data-target="#idqlhs">Quản Lý Hồ Sơ</button>
                            <div id="idqlhs" className="collapse">
                                <div className='select'>
                                    <div className='resize'>
                                        {(UQuyentruyvan.includes("qldanhsach") || UQuyentruyvan.includes("admin")) && (
                                            <div>
                                                <a href="/quanlythongtinnhanvien" className='linksl'>
                                                    <button type='button' className='but'>
                                                        <p className='selectlink'>Quản Lý Thông Tin Nhân Viên</p>
                                                    </button>
                                                </a>
                                            </div>
                                        )}
                                        {(UQuyentruyvan.includes("qlcongtac") || UQuyentruyvan.includes("admin")) && (
                                            <div>
                                                <a href="/quanlycongtacnhanvien/quanlyvitri" className='linksl'>
                                                    <button type='button' className='but'>
                                                        <p className='selectlink'>Quản Lý Công Tác Nhân Viên</p>
                                                    </button>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }

                {(UQuyentruyvan.includes("chamcong") || UQuyentruyvan.includes("qlcalam") || UQuyentruyvan.includes("lbchamcong") || UQuyentruyvan.includes("admin")) && (
                    <li className='sl'>
                        <button type="button" class="quanlychamcong" data-toggle="collapse" data-target="#idqlcc">Quản Lý Chấm Công</button>
                        <div id="idqlcc" class="collapse">
                            <div className='select'>
                                <div className='resize'>
                                    {(UQuyentruyvan.includes("chamcong") || UQuyentruyvan.includes("qlcalam") || UQuyentruyvan.includes("admin")) && (
                                        <div>
                                            <button type='button' class='quanlycalamviec' data-toggle="collapse" data-target="#qlclv">
                                                <p className='selectlink'>Quản Lý Ca Làm Việc</p>
                                            </button>
                                            <div id="qlclv" class="collapse">

                                                <div className='select1'>
                                                    <div className='resize1'>
                                                        {(UQuyentruyvan.includes("qlcalam") || UQuyentruyvan.includes("admin")) && (
                                                            <div>
                                                                <a href="/quanlychamcong/quanlycalamviec/xaydungcalamviec" className='linksl'>
                                                                    <button type='button' class='tdtd'><p className=''>Xây Dựng Ca Làm Việc</p></button>
                                                                </a>
                                                            </div>
                                                        )}
                                                        {(UQuyentruyvan.includes("chamcong") || UQuyentruyvan.includes("admin")) && (
                                                            <a href="/quanlychamcong/quanlycalamviec/chamcong" className='linksl'>
                                                                <button type='button' class='qlhsuv'><p className=''>Chấm Công</p></button>
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                    <a href="/lapbangchamcong" className='linksl'>
                                        <button type='button' class='but'><p className='selectlink'>Lập Bảng Chấm Công</p></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                )}
                <li className='sl'>
                    <button type="button" class="quanlytienluong" data-toggle="collapse" data-target="#idqltl">Quản Lý Tiền Lương</button>
                    <div id="idqltl" class="collapse">
                        <div className='select'>
                            <div className='resize'>
                                <a href="/tinhluong" className='linksl'>
                                    <button type='button' class='but'><p className='selectlink'>Tính Lương</p></button>
                                </a><br></br>
                                <a href="/xuatbangluongtheomau" className='linksl'>
                                    <button type='button' class='but'><p className='selectlink'>Xuất Bảng Lương Theo Mẫu</p></button>
                                </a>
                            </div>
                        </div>
                    </div>

                </li>
                {UQuyenhang !== "0" ? null : captaikhoanslect()}
            </div>
            <div className="rightbar">
                xin chao:{Uuser+" "}
                <button onClick={handleSubmitLogout}>Logout</button>
            </div>
        </div>
    );
}
export default Bar;