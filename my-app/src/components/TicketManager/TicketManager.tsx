import React from "react";
import { BiSearch } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";
import { TbFilter } from "react-icons/tb";
import DatePicker from "sassy-datepicker";
import { Daypicker } from "../layouts/Daypicker";
import { Menubar } from "../layouts/menubar";
import Nextpage from "../layouts/nextpage";
import Sreach from "../layouts/sreach";
import Topbar from "../layouts/topbar";
import TableTicketManager from "./TableTicketManager";

export const TicketManager = () => {
    function onSumbit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            timkiem: { value: string };
        };
        const timkiem = target.timkiem.value.trim();
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        if (timkiem !== '') {

            for (let i = 1; i < allrow.length; i++) {
                const allelmr: any = allrow[i].children
                allrow[i].style.display = 'none'
                for (let j = 0; j < allelmr.length; j++) {
                    if (allelmr[j].className === 'tkm-col3') {
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
    function DaSuDung() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "tkm-col5") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].className === "box-tt-dsd ") {
                            allrow[i].style.display = 'flex'

                        }


                    }
                }

            }
        }
    }
    function tatca() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 0; i < allrow.length; i++) {
            allrow[i].style.display = 'flex'
        }

    }
    function allnull() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            allrow[i].style.display = 'none'
        }
    }
    function HetHan() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "tkm-col5") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].className === "box-tt-hh ") {
                            allrow[i].style.display = 'flex'

                        }


                    }
                }

            }
        }
    }
    function Cong1() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "tkm-col8") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText === "C???ng 1") {
                            allrow[i].style.display = 'flex'
                        }

                    }
                }

            }
        }
    }
    function Cong2() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "tkm-col8") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText === "C???ng 2") {
                            allrow[i].style.display = 'flex'
                        }



                    }
                }

            }
        }
    }
    function Cong3() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "tkm-col8") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText === "C???ng 3") {
                            allrow[i].style.display = 'flex'

                        }

                    }
                }

            }
        }
    }
    function Cong4() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "tkm-col8") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText === "C???ng 4") {
                            allrow[i].style.display = 'flex'

                        }

                    }
                }

            }
        }
    }
    function Cong5() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "tkm-col8") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText === "C???ng 5") {
                            allrow[i].style.display = 'flex'

                        }

                    }
                }

            }
        }
    }
    function ChuaSuDung() {
        const allelm: any = document.getElementById("tbtm")
        const allrow: any = allelm.children
        for (let i = 1; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "tkm-col5") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].className === "box-tt-csd ") {
                            allrow[i].style.display = 'flex'

                        }

                    }
                }

            }
        }
    }
    function Loc() {
        const checkdtc: any = document.getElementById('checkdtc')
        const checkc1: any = document.getElementById('checkdc1')
        const checkc2: any = document.getElementById('checkdc2')
        const checkc3: any = document.getElementById('checkdc3')
        const checkc4: any = document.getElementById('checkdc4')
        const checkc5: any = document.getElementById('checkdc5')
        const checkdsd: any = document.getElementById('checkdsd')
        const checkcsd: any = document.getElementById('checkcsd')
        const checkhh: any = document.getElementById('checkhh')
        const checktc: any = document.getElementById('checktc')
        allnull()
        if (checktc.checked === true) {
            tatca()
        }
        if (checkdtc.checked === true) {
            tatca()
        }
        if (checkcsd.checked === true) {
            ChuaSuDung()
        }
        if (checkdsd.checked === true) {
            DaSuDung()
        }
        if (checkhh.checked === true) {
            HetHan()
        }

        if (checkc1.checked === true) {
            Cong1()
        }
        if (checkc2.checked === true) {
            Cong2()
        }
        if (checkc3.checked === true) {
            Cong3()
        }
        if (checkc4.checked === true) {
            Cong4()
        }
        if (checkc5.checked === true) {
            Cong5()
        }
        ShowFillterTicket()
    }
    const ChangeChart = (id: string) => {
        const checkngay: any = document.getElementById('checkngay1')
        const checktuan: any = document.getElementById('checktuan1')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const ChangeChart1 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay2')
        const checktuan: any = document.getElementById('checktuan2')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const [date1, setDate1] = React.useState(new Date())
    const handleDateSelect1 = (newDate: any) => {
        setDate1(newDate);
    };
    const [date2, setDate2] = React.useState(new Date())
    const handleDateSelect2 = (newDate: any) => {
        setDate2(newDate);
    };
    function ShowCalenda(idcalen: string) {
        const calen: any = document.getElementById(idcalen)
        const calen1: any = document.getElementById('calen1')
        const calen2: any = document.getElementById('calen2')
        if (calen.id === 'calen1') {
            if (calen1.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay1')
                const checktngay1: any = document.getElementById('checkngay2')
                checktngay.checked = true;
                checktngay1.checked = true;
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
            } else {
                calen.style.display = 'none'
            }
            calen1.style.display = 'none'
        }

    }
    function useticket() {
        const col5: any = document.getElementById('col5')
        const sdv: any = document.getElementById('sdv')
        const csd: any = document.getElementById('csd')
        const chose: any = document.getElementById('chosebox')
        col5.removeChild(csd)
        const div: any = document.createElement('div')
        const label: any = document.createElement('label')
        const p: any = document.createElement('p')
        div.className = 'box-tt-dsd'
        p.innerText = '???? s??? d???ng'
        label.innerText = '???'
        div.appendChild(p)
        div.appendChild(label)
        col5.appendChild(div)
        chose.style.display = 'none'
        sdv.style.pointerEvents = ' none'
        TurnOffUseTicket()
    }
    function ShowFillterTicket() {

        const lv: any = document.getElementById('bls-lv')
        if (lv.style.display === 'none') {
            lv.style.display = 'flex'

        } else {
            lv.style.display = 'none'
        }
    }
    function TurnOffChangeDate() {
        const bls: any = document.getElementById('bls-dnsdv')
        const chose: any = document.getElementById('chosebox')
        chose.style.display = 'none'
        bls.style.display = 'none'
    }
    function TurnOffUseTicket() {
        const xn: any = document.getElementById('bls-xn')
        xn.style.display = 'none'
    }
    function Savechange() {
        const nsd: any = document.getElementById('nsd')
        const bls: any = document.getElementById('bls-dnsdv')
        const chose: any = document.getElementById('chosebox')
        const datechange: any = document.getElementById('datechange')
        nsd.innerText = datechange.innerText
        chose.style.display = 'none'
        bls.style.display = 'none'
    }
    function checktc() {
        const checkdsd: any = document.getElementById('checkdsd')
        const checkcsd: any = document.getElementById('checkcsd')
        const checkhh: any = document.getElementById('checkhh')
        const checktc: any = document.getElementById('checktc')
        if (checktc.checked === true) {
            checkcsd.checked = false
            checkcsd.disabled = true
            checkhh.checked = false
            checkhh.disabled = true
            checkdsd.checked = false
            checkdsd.disabled = true
        } else {
            checkdsd.disabled = false
            checkcsd.disabled = false
            checkhh.disabled = false
        }
    }
    function checkdtc() {
        const checkdtc: any = document.getElementById('checkdtc')
        const checkc1: any = document.getElementById('checkdc1')
        const checkc2: any = document.getElementById('checkdc2')
        const checkc3: any = document.getElementById('checkdc3')
        const checkc4: any = document.getElementById('checkdc4')
        const checkc5: any = document.getElementById('checkdc5')
        if (checkdtc.checked === true) {
            checkc1.checked = false
            checkc1.disabled = true

            checkc2.checked = false
            checkc2.disabled = true

            checkc3.checked = false
            checkc3.disabled = true

            checkc4.checked = false
            checkc4.disabled = true

            checkc5.checked = false
            checkc5.disabled = true
        } else {
            checkc1.disabled = false
            checkc2.disabled = false
            checkc3.disabled = false
            checkc4.disabled = false
            checkc5.disabled = false
        }
    }
    return (
        <div className='bg'>
            <Sreach />
            <Topbar />
            <Menubar buttonid='qlv' />
            <div className="bgapp">
                <label className="titleapp"> Danh s??ch v??</label>
                <div className="sreach-qlv">
                    <form autoComplete='off' onSubmit={onSumbit} >
                        <input className="sreach-input" name='timkiem' type="text" placeholder='T??m b???ng s??? v??' />
                        <button className="sreach-button"><BiSearch /></button>
                    </form>
                </div>
                <div className="qlv-row-button">
                    <div className="qlv-filter" onClick={() => ShowFillterTicket()}>
                        <p style={{ fontSize: '24px' }}><TbFilter /></p>
                        <p>L???c v??</p>
                    </div>
                    <a href="/manage-ticket" className="qlv-download notline">Xu???t file (.csv)</a>
                </div>
                <TableTicketManager />
                <div className="qlv-nextpage "><Nextpage /></div>
            </div>
            <div className="block-screen" id="bls-dnsdv">
                <div className="change-ticket-date">
                    <p className="change-ticket-date-title">?????i ng??y s??? d???ng v??</p>
                    <div className="change-ticket-date-row-button">
                        <button className="change-ticket-date-button-huy" onClick={() => TurnOffChangeDate()}> H???y</button>
                        <button className="change-ticket-date-button-luu" onClick={() => Savechange()}> L??u</button>
                    </div>
                    <div className="change-ticket-date-col">
                        <div className="change-ticket-date-row">
                            <p className="change-ticket-date-row-p ">S??? v??</p>
                            <label>PKG20210502 </label>
                        </div>
                        <div className="change-ticket-date-row">
                            <p className="change-ticket-date-row-p ">S??? v??</p>
                            <label>V?? c???ng - G??i s??? ki???n</label>
                        </div>
                        <div className="change-ticket-date-row">
                            <p className="change-ticket-date-row-p ">T??n s??? ki???n</p>
                            <label>H???i tr??? tri???n l??m h??ng ti??u d??ng 2021</label>
                        </div>
                        <div className="change-ticket-date-row">
                            <p className="change-ticket-date-row-p ">H???n s??? d???ng</p>
                            <div style={{ marginLeft: '78px', marginTop: '-10px' }} id="clen1">
                                <Daypicker />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="block-screen" id="bls-xn">
                <div className="use-ticket">
                    <p className="change-ticket-date-title">X??c nh???n s??? d???ng v??</p>
                    <div className="change-ticket-date-row-button">
                        <button className="change-ticket-date-button-huy" onClick={() => TurnOffUseTicket()}> H???y</button>
                        <button className="change-ticket-date-button-luu" onClick={() => useticket()}> X??c nh???n</button>
                    </div>
                </div>
            </div>
            <div className="block-screen" id="bls-lv">
                <div className="fillter-ticket">
                    <p className="change-ticket-date-title">L???c v??</p>
                    <button className="fillter-ticket-btn" onClick={() => Loc()}>L???c</button>

                    <div className="fillter-ticket-col">
                        <div className="item-date-row-fillter-ticket">
                            <div className="item-col-fillter-ticket">
                                <p className="item-date-row-fillter-ticket-p ">T??? ng??y</p>
                                <div className="col-daypicker">
                                    <div className="home-calenda-div" onClick={() => ShowCalenda('calen1')}>
                                        <p className='calenda-date' id="datechange"> {date2.toLocaleDateString()}</p>
                                        <p className='calenda-icon' ><FiCalendar /></p>
                                    </div>

                                </div>
                            </div>
                            <div className="item-col-fillter-ticket">
                                <p className="item-date-row-fillter-ticket-p ">?????n ng??y</p>
                                <div className="col-daypicker">
                                    <div className="home-calenda-div" onClick={() => ShowCalenda('calen2')}>
                                        <p className='calenda-date' id="datechange"> {date1.toLocaleDateString()}</p>
                                        <p className='calenda-icon' ><FiCalendar /></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item-checkbox-fillter-ticket">
                            <p className="item-date-row-fillter-ticket-p">T??nh tr???ng s??? d???ng</p>
                            <div className="item-checkbox-row-fillter-ticket">
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktc' type="checkbox" onChange={() => checktc()} />
                                    </div>
                                    <p>T???t c???</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkdsd' type="checkbox" />
                                    </div>
                                    <p>???? s??? d???ng</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkcsd' type="checkbox" />
                                    </div>
                                    <p>Ch??a s??? d???ng</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkhh' type="checkbox" />
                                    </div>
                                    <p>H???t h???n</p>
                                </div>
                            </div>
                        </div>
                        <div className="item-checkbox-fillter-ticket" style={{ marginTop: '20px' }}>
                            <p className="item-date-row-fillter-ticket-p">C???ng Check - in</p>
                            <div className="item-checkbox-door-row-fillter-ticket">
                                <label className="CheckBoxSquare">T???t c???
                                    <input type="checkbox" id="checkdtc" onChange={() => checkdtc()}></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="CheckBoxSquare">C???ng 1
                                    <input type="checkbox" id="checkdc1" ></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="CheckBoxSquare">C???ng 2
                                    <input type="checkbox" id="checkdc2" ></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="item-checkbox-door1-row-fillter-ticket">
                                <label className="CheckBoxSquare">C???ng 3
                                    <input type="checkbox" id="checkdc3" ></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="CheckBoxSquare">C???ng 4
                                    <input type="checkbox" id="checkdc4" ></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="CheckBoxSquare">C???ng 5
                                    <input type="checkbox" id="checkdc5" ></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className='home-calenda-popup' id='calen2' style={{ marginLeft: '210px', marginTop: '75px' }} >
                            <p >{date1.toLocaleDateString()}</p>
                            <div className='row-check-div'>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkngay2' type="checkbox" onChange={() => ChangeChart1('checkngay2')} />
                                    </div>
                                    <p>Theo ng??y</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktuan2' type="checkbox" onChange={() => ChangeChart1('checktuan2')} />
                                    </div>
                                    <p>Theo tu???n</p>
                                </div>
                            </div>
                            <DatePicker selected={date1} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect1} />
                        </div>
                        <div className='home-calenda-popup' id='calen1' style={{ marginTop: '75px' }} >
                            <p >{date2.toLocaleDateString()}</p>
                            <div className='row-check-div'>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkngay1' type="checkbox" onChange={() => ChangeChart('checkngay1')} />
                                    </div>
                                    <p>Theo ng??y</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktuan1' type="checkbox" onChange={() => ChangeChart('checktuan1')} />
                                    </div>
                                    <p>Theo tu???n</p>
                                </div>
                            </div>
                            <DatePicker selected={date2} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect2} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )

}
export default TicketManager;



