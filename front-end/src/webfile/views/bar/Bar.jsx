import '../../viewcss/Bar/Bar.css';
const Bar = () => {
    return ( 
        <div className="Bar">

            <div className="leftbar">
                    <li className='sl'>
                        <button type="button" class="quanlyhoso" data-toggle="collapse" data-target="#idqlhs">Quản Lý Hồ Sơ</button>
                        <div id="idqlhs" class="collapse">     
                            <div className='select'>
                                <div className='resize'>
                                    <a href="/quanlythongtinnhanvien" className='linksl'>
                                        <button type='button' class='but'><p className='selectlink'>Quản Lý Thông Tin Nhân Viên</p></button>
                                    </a><br></br>
                                    
                                    <button type='button' class='quanlycongtacnhanvien' data-toggle="collapse" data-target="#qlctnv">
                                        <p className='selectlink'>Quản Lý Công Tác Nhân Viên</p>
                                    </button>
                                    <div id="qlctnv" class="collapse" >

                                        <div className='select1'>
                                            <div className='resize1'>
                                                <a href="/quanlycongtacnhanvien/quanlyvitri" className='linksl'>
                                                    <button type='button' class='tdtd'> Quản Lý Vị Trí</button>
                                                </a><br></br>                              
                                            </div>
                                        </div>  
                                          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className='sl'>
                        <button type="button" class="quanlychamcong" data-toggle="collapse" data-target="#idqlcc">Quản Lý Chấm Công</button>
                        <div id="idqlcc" class="collapse">     
                            <div className='select'>
                                <div className='resize'>
                                    <button type='button' class='quanlycalamviec' data-toggle="collapse" data-target="#qlclv">
                                        <p className='selectlink'>Quản Lý Ca Làm Việc</p>
                                    </button>
                                    <div id="qlclv" class="collapse">

                                        <div className='select1'>
                                            <div className='resize1'>
                                                <a href="/quanlychamcong/quanlycalamviec/xaydungcalamviec" className='linksl'>
                                                    <button type='button' class='tdtd'><p className=''>Xây Dựng Ca Làm Việc</p></button>
                                                </a><br></br>
                                                <a href="/quanlychamcong/quanlycalamviec/chamcong" className='linksl'>
                                                    <button type='button' class='qlhsuv'><p className=''>Chấm Công</p></button>
                                                </a>  
                                            </div>
                                        </div>  
                                          
                                    </div>
                                    <br></br>
                                    <a href="/lapbangchamcong" className='linksl'>
                                        <button type='button' class='but'><p className='selectlink'>Lập Bảng Chấm Công</p></button>
                                    </a>  
                                </div>
                            </div>
                        </div>
                    </li>
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
            </div>
            <div className="rightbar">

            </div>
        </div>
     );
}
export default Bar;