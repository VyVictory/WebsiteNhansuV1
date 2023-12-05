import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import { useEffect, useState } from 'react';
//import Login from "../views/Login/Login";
//<Route path="/home" element={<Home/>} /> 
import Qlthongtinnhanvien from "../views/qlhoso/qlthongtinnhanvien/Qlthongtinnhanvien";
import Bar from '../views/bar/Bar';
import Qlvitri from "../views/qlhoso/quanlycongtacnhanvien/qlvitri/Qlvitri";
import Lbchamcong from "../views/qlchamcong/lbchamcong/Lbchamcong";
import Chamcong from "../views/qlchamcong/qlcalamviec/chamcong/Cc";
import Chamcongcanhan from "../views/qlchamcong/qlcalamviec/chamcong/Chamcongcanhan";
import Chinhsuacc from "../views/qlchamcong/qlcalamviec/chamcong/Chinhsuacc";


import Xdcalamviec from "../views/qlchamcong/qlcalamviec/xdcalamviec/Xdcalamviec";
import Chinhsuacalamviec from "../views/qlchamcong/qlcalamviec/xdcalamviec/chinhsuacalamviec"

import Tl from "../views/qltienluong/tinhluong/Tl";
import Xbluongtheomau from "../views/qltienluong/xbluongtheomau/Xbluongtheomau";
import ThemNhanvien from "../views/qlhoso/qlthongtinnhanvien/ThemNhanvien";
import ThemChucvu from "../views/qlhoso/quanlycongtacnhanvien/qlvitri/ThemChucvu";
import Chinhsua from "../views/qlhoso/qlthongtinnhanvien/Chinhsua";
import Chinhsuachucvu from "../views/qlhoso/quanlycongtacnhanvien/qlvitri/Chinhsuachucvu";
import ThemCalamviec from "../views/qlchamcong/qlcalamviec/xdcalamviec/ThemCalamviec";
import Login from "../login/login";
import Captaikhoan from "../views/qlhoso/quanlycongtacnhanvien/Captaikhoan";

function Routers() {
    const [onevent, setOnevent] = useState(false);
    useEffect(() => {
        const loggedIn = sessionStorage.getItem('loggedIn');
        if (loggedIn === 'true') {
            setOnevent(true);
        }
    }, []);
    const UQuyentruyvan = '' + sessionStorage.getItem('UQuyentruyvan');

    const routes = [
        <Route path="/" element={<Home />} />,


        <Route path="/lapbangchamcong" element={<Lbchamcong />} />,

        <Route path="/tinhluong" element={<Tl />} />,
        <Route path="/xuatbangluongtheomau" element={<Xbluongtheomau />} />,
    ];
    if (UQuyentruyvan === 'admin') {
        routes.push(<Route path="/captaikhoan" element={<Captaikhoan />} />);
    }
    // routes.push();
    if (UQuyentruyvan.includes("qlcongtac") || UQuyentruyvan === 'admin') {
        if (UQuyentruyvan.includes("them") || UQuyentruyvan === 'admin') {
            routes.push(<Route path="/quanlycongtacnhanvien/ThemChucvu" element={<ThemChucvu />} />,);
        }
        if (UQuyentruyvan.includes("sua") || UQuyentruyvan === 'admin') {
            routes.push(<Route path="/quanlythongtinnhanvien/Chinhsuachucvu/:id" element={<Chinhsuachucvu />} />,);
        }
        routes.push(<Route path="/quanlycongtacnhanvien/quanlyvitri" element={<Qlvitri />} />);
    }
    if (UQuyentruyvan.includes("qldanhsach") || UQuyentruyvan === 'admin') {
        if (UQuyentruyvan.includes("them") || UQuyentruyvan === 'admin') {
            routes.push(<Route path="/ThemNhanvien" element={<ThemNhanvien />} />,);
        }
        if (UQuyentruyvan.includes("sua") || UQuyentruyvan === 'admin') {
            routes.push(<Route path="/quanlythongtinnhanvien/Chinhsua/:id" element={<Chinhsua />} />,);
        }
        routes.push(<Route path="/quanlythongtinnhanvien" element={<Qlthongtinnhanvien />} />);
    }
    if (UQuyentruyvan.includes("qlcalam") || UQuyentruyvan === 'admin') {
        if (UQuyentruyvan.includes("them") || UQuyentruyvan === 'admin') {
            routes.push(<Route path="/quanlychamcong/quanlycalamviec/xaydungcalamviec/themcalamviec" element={<ThemCalamviec />} />,);
        }
        if (UQuyentruyvan.includes("sua") || UQuyentruyvan === 'admin') {
            routes.push(<Route path="/quanlychamcong/quanlycalamviec/xaydungcalamviec/chinhsuacalamviec/:id" element={<Chinhsuacalamviec />} />,);
        }
        routes.push(<Route path="/quanlychamcong/quanlycalamviec/xaydungcalamviec" element={<Xdcalamviec />} />,);
    }
    if (UQuyentruyvan.includes("chamcong") || UQuyentruyvan === 'admin') {
        if (UQuyentruyvan.includes("them") || UQuyentruyvan === 'admin') {
            routes.push(<Route path="/quanlychamcong/quanlycalamviec/chamcong" element={<Chamcong />} />,);
        }
        if (UQuyentruyvan.includes("sua") || UQuyentruyvan === 'admin') {
            routes.push(<Route path="/quanlychamcong/quanlycalamviec/Chinhsuacc/:id" element={<Chinhsuacc />} />,);
        }
        routes.push(<Route path="/quanlychamcong/quanlycalamviec/chamcongcanhan/:id" element={<Chamcongcanhan />} />,);
    }
    return onevent ? (
        <Router>
            <Bar />
            <div className="page-container">
                <Routes>
                    {routes}
                </Routes>
            </div>
        </Router>
    ) : (
        <div>
            <Login />
        </div>
    )
};

export default Routers;