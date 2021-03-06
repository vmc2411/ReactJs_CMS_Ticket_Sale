import React from "react";
import { Menubar } from "../layouts/menubar";
import Nextpage from "../layouts/nextpage";
import Topbar from "../layouts/topbar";
import TableSevicePack from "./TableS";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import DatePicker from "sassy-datepicker";
import { BiSearch } from "react-icons/bi";


const Setting = () => {
    const ChangeChart1 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay1')
        const checktuan: any = document.getElementById('checktuan1')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const ChangeChart2 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay2')
        const checktuan: any = document.getElementById('checktuan2')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }

    const ChangeChart3 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay3')
        const checktuan: any = document.getElementById('checktuan3')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const ChangeChart4 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay4')
        const checktuan: any = document.getElementById('checktuan4')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }

    const [date, setDate] = React.useState(new Date())
    const handleDateSelect = (newDate: any) => {
        setDate(newDate);
    }
    const [date2, setDate2] = React.useState(new Date())
    const handleDateSelect2 = (newDate: any) => {
        setDate2(newDate);
    }
    const [date3, setDate3] = React.useState(new Date())
    const handleDateSelect3 = (newDate: any) => {
        setDate3(newDate);
    }
    const [date4, setDate4] = React.useState(new Date())
    const handleDateSelect4 = (newDate: any) => {
        setDate4(newDate);
    }
    function ShowCalenda(idcalen: string) {
        const calen: any = document.getElementById(idcalen)
        const goiy1: any = document.getElementById('goiy1')
        const goiy2: any = document.getElementById('goiy2')
        const datechange1: any = document.getElementById('datechange1')
        const datechange2: any = document.getElementById('datechange2')
        const calen1: any = document.getElementById('calen1')
        const calen2: any = document.getElementById('calen2')
        if (calen.id === 'calen1') {
            if (calen1.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay1')
                const checktngay1: any = document.getElementById('checkngay2')
                checktngay.checked = true;
                checktngay1.checked = true;
                datechange1.style.display = 'flex'
                goiy1.style.display = 'none'
            } else {
                calen.style.display = 'none'
            }
            calen2.style.display = 'none'
        } else {
            if (calen2.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay1')
                const checktngay1: any = document.getElementById('checkngay2')
                checktngay.checked = true;
                checktngay1.checked = true;
                datechange2.style.display = 'flex'
                goiy2.style.display = 'none'
            } else {
                calen.style.display = 'none'
            }
            calen1.style.display = 'none'
        }

    }
    function ShowCalenda2(idcalen: string) {
        const calen: any = document.getElementById(idcalen)
        const calen1: any = document.getElementById('calen3')
        const calen2: any = document.getElementById('calen4')
        if (calen.id === 'calen3') {
            if (calen1.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay3')
                const checktngay1: any = document.getElementById('checkngay4')
                checktngay.checked = true;
                checktngay1.checked = true;
            } else {
                calen.style.display = 'none'
            }
            calen2.style.display = 'none'
        } else {
            if (calen2.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay3')
                const checktngay1: any = document.getElementById('checkngay4')
                checktngay.checked = true;
                checktngay1.checked = true;
            } else {
                calen.style.display = 'none'
            }
            calen1.style.display = 'none'
        }

    }
    function chose(id: string, iput: string) {
        const ip: any = document.getElementById(iput)
        const chose: any = document.getElementById(id)
        ip.innerText = chose.innerText
    }
    function CheckGiaVe(id: string) {
        const inputgd: any = document.getElementById('gvgd')
        const inputcb: any = document.getElementById('gvcb')
        const inputsv: any = document.getElementById('sove')
        const checkon: any = document.getElementById(id)
        if (id === 'checkgd') {
            if (checkon.checked === true) {
                inputgd.disabled = false
            } else {
                inputgd.disabled = true
                inputgd.value = null
            }
        } else {
            if (checkon.checked === true) {
                inputcb.disabled = false
                inputsv.disabled = false
            } else {
                inputcb.disabled = true
                inputsv.disabled = true
                inputsv.value = null
                inputcb.value = null
            }
        }
    }
    function CheckGiaVe1(id: string) {
        const inputgd: any = document.getElementById('gvgd1')
        const inputcb: any = document.getElementById('gvcb1')
        const inputsv: any = document.getElementById('sove1')
        const checkon: any = document.getElementById(id)
        if (id === 'checkgd1') {
            if (checkon.checked === true) {
                inputgd.disabled = false
            } else {
                inputgd.disabled = true
                inputgd.value = null
            }
        } else {
            if (checkon.checked === true) {
                inputcb.disabled = false
                inputsv.disabled = false
            } else {
                inputcb.disabled = true
                inputsv.disabled = true
                inputsv.value = null
                inputcb.value = null
            }
        }
    }
    function ShowSevicePark(id: string) {

        const add: any = document.getElementById(id)
        if (add.style.display === 'none') {
            add.style.display = 'flex'

        } else {
            add.style.display = 'none'
        }

    }
    function ShowFeelsevice(id: string, u: string, d: string) {
        const drop: any = document.getElementById(id)
        const up: any = document.getElementById(u)
        const down: any = document.getElementById(d)
        if (drop.style.display === 'none') {
            drop.style.display = 'flex'
            up.style.display = 'flex'
            down.style.display = 'none'
        } else {
            drop.style.display = 'none'
            down.style.display = 'flex'
            up.style.display = 'none'
        }
    }
    function onSumbit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            timkiem: { value: string };
        };
        const timkiem = target.timkiem.value.trim();
        const allelm: any = document.getElementById("tbgdv")
        const allrow: any = allelm.children
        if (timkiem !== '') {

            for (let i = 1; i < allrow.length; i++) {
                const allelmr: any = allrow[i].children
                allrow[i].style.display = 'none'
                for (let j = 0; j < allelmr.length; j++) {
                    if (allelmr[j].className === 'table-sivice-park-col2') {
                        const p: any = allelmr[j].children
                        for (let k = 0; k < p.length; k++) {
                            if (p[k].innerText.toLowerCase().trim() === timkiem.toLowerCase()) {
                                allrow[i].style.display = 'flex'
                            }
                        }

                    }

                }
            }
        } else {
            for (let i = 1; i < allrow.length; i++) {

                allrow[i].style.display = 'flex'
            }
        }
    }


    return (
        <div className='bg'>
            <Topbar />
            <Menubar buttonid='cd' />
            <div className="bgapp" >
                <label className="titleapp"> Danh s??ch g??i v??</label>
                <div className="sreach-qlv">
                    <form autoComplete='off' onSubmit={onSumbit} >
                        <input className="sreach-input" name='timkiem' type="text" placeholder='T??m b???ng s??? v??' />
                        <button className="sreach-button"><BiSearch /></button>
                    </form>

                </div>

                <div className="dsgv-row-button">
                    <a href="/setting" className="qlv-download notline">Xu???t file (.csv)</a>
                    <div className="add-ServicePack-btn" onClick={() => ShowSevicePark('addsvp')}>
                        <p >Th??m g??i v??</p>
                    </div>
                </div>
                <TableSevicePack />
                <div className="qlv-nextpage">
                    <Nextpage />
                </div>
            </div>
            <div className="block-screen" id="addsvp"  >
                <div className="popup-sevice-park-div">
                    <p className="add-sevice-park-title">Th??m g??i v??</p>
                    <div className="sevice-park-row-button">
                        <button className="sevice-park-button-huy" onClick={() => ShowSevicePark('addsvp')}>H???y</button>
                        <button className="sevice-park-button-luu" onClick={() => { window.location.href = "/setting"; }}>L??u</button>
                    </div>
                    <div className="add-sevice-park-col-item ">
                        <p className="add-sevice-park-conten-item">T??n g??i v??</p>
                        <input className="input-name-sevice-park" type="text" placeholder="Nh???p t??n g??i v??" />
                        <div className="sevice-park-row-conten">
                            <div className="colum-date-time-picker">
                                <p className="add-sevice-park-conten-item">Ng??y s??? d???ng</p>
                                <div className="row-date-time-picker">
                                    <div className="date-time-picker-sevice-park" onClick={() => ShowCalenda('calen1')}>
                                        <p style={{ display: 'none' }} className='date-time-picker-sevice-park-p' id="datechange1"> {date.toLocaleDateString()}</p>
                                        <p className='date-time-picker-sevice-park-p' id="goiy1" >dd/mm/yy</p>
                                        <p className='calenda-icon' ><FiCalendar /></p>
                                    </div>
                                    <div className="date-time-picker-sevice-park">
                                        <div className="date-time-picker-sevice-park">
                                            <input className="input-time-sevive-park" type="time" id="clock" required />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="colum-date-time-picker">
                                <p className="add-sevice-park-conten-item">Ng??y h???t h???n</p>
                                <div className="row-date-time-picker">
                                    <div className="date-time-picker-sevice-park">
                                        <div className="date-time-picker-sevice-park" onClick={() => ShowCalenda('calen2')}>
                                            <p style={{ display: 'none' }} className='date-time-picker-sevice-park-p' id="datechange2"> {date2.toLocaleDateString()}</p>
                                            <p className='date-time-picker-sevice-park-p' id="goiy2" >dd/mm/yy</p>
                                            <p className='calenda-icon' ><FiCalendar /></p>
                                        </div>
                                    </div>
                                    <div className="date-time-picker-sevice-park">
                                        <div className="date-time-picker-sevice-park">
                                            <input className="input-time-sevive-park" type="time" id="clock" required />

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <p className="add-sevice-park-conten-item">Gi?? v?? ??p d???ng</p>
                        <div className="row-gia-ve" >
                            <div className="check-box-money">
                                <label className="CheckBoxSquare">
                                    <input type="checkbox" id="checkgd" onChange={() => CheckGiaVe('checkgd')}></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <p>V?? l??? (vn??/v??) v???i gi??</p>
                            <input id="gvgd" disabled className="input-number-monney-ticket" type="number" placeholder="Nh???p gi?? v??" />
                            <p>/v??</p>
                        </div>
                        <div className="row-gia-ve" >
                            <div className="check-box-money">
                                <label className="CheckBoxSquare">
                                    <input type="checkbox" id="checkcb" onChange={() => CheckGiaVe('checkcb')}></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <p>Combo v?? v???i gi??</p>
                            <input id="gvcb" disabled className="input-number-monney-ticket" type="number" placeholder=" Nh???p gi?? v??" />
                            <p>/</p>
                            <input id="sove" disabled type="number" className="input-number-ticket" placeholder="S??? v??" />
                            <p>v??</p>
                        </div>
                        <p className="add-sevice-park-conten-item">T??nh tr???ng</p>
                        <div className="row-tt-sevice-park" onClick={() => ShowFeelsevice('drdf', 'up', 'down')}>
                            <p id="inputfeel">Ch???n t??nh tr???ng</p>
                            <label id="down" ><IoIosArrowDown /></label>
                            <label id="up" style={{ display: 'none' }}><IoIosArrowUp /></label>
                        </div>
                        <div className="row">
                            <p style={{ color: 'red', fontSize: '18px', fontWeight: '600', marginRight: '5px' }}>*</p>
                            <p className="ttbc">L?? th??ng tin b???t bu???c</p>
                        </div>
                        <div id="drdf" className="dropdownfeel" onClick={() => ShowFeelsevice('drdf', 'up', 'down')}>
                            <div className="dropdownfeel-item" onClick={() => chose('chosedad', "inputfeel")}><p id="chosedad">??ang ??p d???ng</p></div>
                            <div className="dropdownfeel-item" onClick={() => chose('choset', "inputfeel")}><p id="choset">T???t</p></div>
                        </div>
                        <div className='home-calenda-popup' id='calen1' style={{ marginLeft: '0px', marginTop: '160px' }} >
                            <p >{date.toLocaleDateString()}</p>
                            <div className='row-check-div'>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkngay1' type="checkbox" onChange={() => ChangeChart1('checkngay1')} />
                                    </div>
                                    <p>Theo ng??y</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktuan1' type="checkbox" onChange={() => ChangeChart1('checktuan1')} />
                                    </div>
                                    <p>Theo tu???n</p>
                                </div>
                            </div>
                            <DatePicker selected={date} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect} />
                        </div>
                        <div className='home-calenda-popup' id='calen2' style={{ marginLeft: '338px', marginTop: '160px' }} >
                            <p >{date2.toLocaleDateString()}</p>
                            <div className='row-check-div'>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkngay2' type="checkbox" onChange={() => ChangeChart2('checkngay2')} />
                                    </div>
                                    <p>Theo ng??y</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktuan2' type="checkbox" onChange={() => ChangeChart2('checktuan2')} />
                                    </div>
                                    <p>Theo tu???n</p>
                                </div>
                            </div>
                            <DatePicker selected={date2} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect2} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="block-screen" id="updatesvp">
                <div className="popup-sevice-park-div">
                    <p className="update-sevice-park-title">C???p nh???t th??ng tin g??i v??</p>
                    <div className="sevice-park-row-button">
                        <button className="sevice-park-button-huy" onClick={() => ShowSevicePark('updatesvp')}>H???y</button>
                        <button className="sevice-park-button-luu" onClick={() => { window.location.href = '/setting' }}>L??u</button>
                    </div>
                    <div className="add-sevice-park-col-item " >
                        <div className="sevice-park-row-conten" style={{ marginBottom: '5px' }}>
                            <div className="colum-date-time-picker">
                                <p className="add-sevice-park-conten-item" style={{ marginBottom: '5px' }}>M?? g??i v??</p>
                                <input type="text" className="input-msk-sevice-park" placeholder="Nh???p m?? s??? ki???n" />
                            </div>
                            <div className="colum-date-time-picker">
                                <p className="add-sevice-park-conten-item" style={{ marginBottom: '5px' }}>T??n g??i v??</p>
                                <input className="input-name-sevice-park" type="text" placeholder="Nh???p t??n g??i v??" />
                            </div>
                        </div>
                        <div className="sevice-park-row-conten">
                            <div className="colum-date-time-picker">
                                <p className="add-sevice-park-conten-item">Ng??y s??? d???ng</p>
                                <div className="row-date-time-picker">
                                    <div className="date-time-picker-sevice-park">
                                        <div className="date-time-picker-sevice-park" onClick={() => ShowCalenda2('calen3')}>
                                            <p className='date-time-picker-sevice-park-p' id="datechange1"> {date.toLocaleDateString()}</p>
                                            <p className='calenda-icon' ><FiCalendar /></p>
                                        </div>
                                    </div>
                                    <div className="date-time-picker-sevice-park">
                                        <input className="input-time-sevive-park" type="time" id="clock1" />
                                    </div>
                                </div>
                            </div>
                            <div className="colum-date-time-picker">
                                <p className="add-sevice-park-conten-item">Ng??y h???t h???n</p>
                                <div className="row-date-time-picker">
                                    <div className="date-time-picker-sevice-park">
                                        <div className="date-time-picker-sevice-park" onClick={() => ShowCalenda2('calen4')}>
                                            <p className='date-time-picker-sevice-park-p' id="datechange1"> {date.toLocaleDateString()}</p>
                                            <p className='calenda-icon' ><FiCalendar /></p>
                                        </div>
                                    </div>
                                    <div className="date-time-picker-sevice-park">
                                        <input className="input-time-sevive-park" type="time" id="clock2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="add-sevice-park-conten-item">Gi?? v?? ??p d???ng</p>
                        <div className="row-gia-ve" >
                            <div className="check-box-money">
                                <label className="CheckBoxSquare">
                                    <input type="checkbox" id="checkgd1" onChange={() => CheckGiaVe1('checkgd1')}></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <p>V?? l??? (vn??/v??) v???i gi??</p>
                            <input id="gvgd1" disabled className="input-number-monney-ticket" type="number" placeholder="Nh???p gi?? v??" />
                            <p>/v??</p>
                        </div>
                        <div className="row-gia-ve" >
                            <div className="check-box-money">
                                <label className="CheckBoxSquare">
                                    <input type="checkbox" id="checkcb1" onChange={() => CheckGiaVe1('checkcb1')}></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <p>Combo v?? v???i gi??</p>
                            <input id="gvcb1" disabled className="input-number-monney-ticket" type="number" placeholder=" Nh???p gi?? v??" />
                            <p>/</p>
                            <input id="sove1" disabled type="number" className="input-number-ticket" placeholder="S??? v??" />
                            <p>v??</p>
                        </div>
                        <p className="add-sevice-park-conten-item">T??nh tr???ng</p>
                        <div className="row-tt-sevice-park" onClick={() => ShowFeelsevice('drdf1', 'up1', 'down1')}>
                            <p id="inputfeel1">Ch???n t??nh tr???ng</p>
                            <label id="down1" ><IoIosArrowDown /></label>
                            <label id="up1" style={{ display: 'none' }}><IoIosArrowUp /></label>
                        </div>

                        <div className="row">
                            <p style={{ color: 'red', fontSize: '18px', fontWeight: '600', marginRight: '5px' }}>*</p>
                            <p className="ttbc">L?? th??ng tin b???t bu???c</p>
                        </div>
                        <div id="drdf1" className="dropdownfeel" onClick={() => ShowFeelsevice('drdf1', 'up1', 'down1')}>
                            <div className="dropdownfeel-item" onClick={() => chose('chosedad1', "inputfeel1")}><p id="chosedad1">??ang ??p d???ng</p></div>
                            <div className="dropdownfeel-item" onClick={() => chose('choset1', "inputfeel1")}><p id="choset1">T???t</p></div>
                        </div>
                        <div className='home-calenda-popup' id='calen3' style={{ marginLeft: '0px', marginTop: '160px' }} >
                            <p >{date3.toLocaleDateString()}</p>
                            <div className='row-check-div'>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkngay3' type="checkbox" onChange={() => ChangeChart3('checkngay3')} />
                                    </div>
                                    <p>Theo ng??y</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktuan3' type="checkbox" onChange={() => ChangeChart3('checktuan3')} />
                                    </div>
                                    <p>Theo tu???n</p>
                                </div>
                            </div>
                            <DatePicker selected={date} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect3} />
                        </div>
                        <div className='home-calenda-popup' id='calen4' style={{ marginLeft: '338px', marginTop: '160px' }} >
                            <p >{date4.toLocaleDateString()}</p>
                            <div className='row-check-div'>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkngay4' type="checkbox" onChange={() => ChangeChart4('checkngay4')} />
                                    </div>
                                    <p>Theo ng??y</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktuan4' type="checkbox" onChange={() => ChangeChart4('checktuan4')} />
                                    </div>
                                    <p>Theo tu???n</p>
                                </div>
                            </div>
                            <DatePicker selected={date2} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect4} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}
export default Setting;