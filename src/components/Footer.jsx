import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Logo from './Logo';

function Footer(props) {
    return (
        <footer>
            <Contact />
            <FooterBody />
            <FooterFoot />
        </footer>
    );
}

export default Footer;

function Contact() {
    return (
        <div className='bg-main text-white py-14 leading-8'>
            <div className='mx-4'>
                <div className='container mx-auto flex justify-between'>
                    <div>
                        <a href="mailto:nqphac@gmai.com" target="_blank">
                            <div className="flex gap-3 justify-center content-center">
                                <FontAwesomeIcon icon={faEnvelope} className='text-5xl' />
                                <div>
                                    <h4 className='text-3xl'>Đăng ký tư vấn</h4>
                                    <p>Thông tin về việc làm trong nước, Cơ hội việc làm, tư vấn du học</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="tel:0933058338">
                            <div className="flex gap-3 justify-center content-center">
                                <FontAwesomeIcon icon={faMobile} className='text-5xl' />
                                <div>
                                    <h4 className='text-3xl'>(+84) 933 058 338</h4>
                                    <p>Hotline tư vấn miễn phí (Zalo)</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FooterBody() {
    return (
        <div className='bg-dark text-white py-20 leading-10 text-sm'>
            <div className='mx-4'>
                <div className='container mx-auto flex justify-around gap-8'>
                    <div id='footer-col-1'>
                        <Logo />
                        <h4 className='uppercase font-semibold'>Chuyên tư vấn dịch vụ hướng nghiệp, du học</h4>
                        <div className='flex flex-col justify-between gap-3'>
                            <p>Địa chỉ: 215 - 217, Lê Hồng Phong, P. 8, Tp. Vũng Tàu</p>
                            <p>
                                <span className="text-orange-300">Điện thoại: </span>
                                <a href="tel:0933058338" target="_blank">(+84) 933 058 338</a>
                            </p>
                            <p>
                                <span className="text-orange-300">Email: </span>
                                <a target="_blank" href="mailto: nqphac@gmai.com">nqphac@gmai.com</a>
                            </p>
                        </div>
                    </div>




                    <div id='footer-col-2' >
                        <h4 className='uppercase font-semibold text-3xl mb-8'>Dịch vụ</h4>
                        <p>Tư vấn việc làm trong trong nước</p>
                        <p>Tư vấn Cơ hội việc làm</p>
                        <p>Tư vấn du học</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

function FooterFoot() {
    return (
        <div className="bg-black py-8 text-white">
            <div className="mx-4">
                <div className="container mx-auto flex justify-between content-center">
                    <p className='text-gray-500'>Copyright © 2024</p>
                    <a href="tel:0933058338" target="_blank">(+84) 933 058 338</a>
                </div>
            </div>
        </div>
    )
}