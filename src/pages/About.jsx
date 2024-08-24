import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImgCard from '../components/ImgCard';

const introduce = [
    '<p>Tự hào là một đơn vị cung ứng nhân lực đáng tin cậy, được thành lập từ năm 2019, chúng tôi mang đến những cơ hội <strong>việc làm hấp dẫn</strong> trong và ngoài nước với mức <strong>đãi ngộ cao</strong> </p>',
    '<p>Dịch vụ tư vấn <strong>du học</strong> của chúng tôi giúp bạn chọn lựa con đường học tập phù hợp, từ việc lựa chọn trường, ngành học đến thủ tục <strong>xin visa</strong>. Chúng tôi luôn đồng hành cùng bạn trong hành trình chinh phục kiến thức mới.</p>',
    '<p>Ngoài ra, chúng tôi còn tư vấn <strong>Cơ hội việc làm</strong>, giúp bạn tìm kiếm cơ hội việc làm tại các quốc gia khác. Chúng tôi hiểu rằng công việc không chỉ để kiếm sống mà còn là cơ hội để phát triển bản thân. Tích lũy kinh nghiệm để thăng tiến lên những mức thu nhập cao hơn mà bạn hằng mong muốn.</p>',
    '<p>Với những đơn tuyển số lượng lớn chất lượng cao, chúng tôi luôn sẵn sàng đồng hành cùng những người con của đất nước trên con đường xuất ngoại, tìm kiếm những cơ hội tốt. Và mong mỏi những người con ấy sau những tháng năm đi xa trở về với nguồn tiền lớn và kinh nghiệm dồi dào học được từ những quốc gia phát triển sẽ góp phần đáng vào xây dựng phồn vinh cho nước nhà.</p>',
    '<p className="pt-5">Thành công của khách hàng luôn là thành công và niềm tự hào của chúng tôi. <br/>Hãy để chúng tôi đồng hành cùng bạn trên con đường phát triển và thành công!</p>`',
]

const legalInfor = [
    `<p class="text-center p-5 "><span>Phác <span class="text-main">Hướng nghiệp</span></span> hiện đang là đại diện chính thức của ba tổ chức Cơ hội việc làm có vốn điều lệ lên đến 10 tỷ đồng.<br /> Dưới đây là các giấy tờ pháp lý liên quan:</p>`,
    `<div class="container py-8">
        <p class="m-4">Công ty NGUỒN NHÂN LỰC QUỐC GIA:</p>
        <iframe src="./docs/DKKD - TVNNLQG.pdf" style="width:100%; height:80vh;" frameborder="0"></iframe>
    </div>`,
    `<div class="container py-8">
        <p class="m-4">Công ty CUNG ỨNG VÀ PHÁT TRIỂN NHÂN LỰC AN BÌNH:</p>
        <iframe src="./docs/Cty An Bình chuyên Sin.pdf" style="width:100%; height:80vh;" frameborder="0"></iframe>
    </div>`,
    `<div class="container py-8">
        <p class="m-4">Quyết định về việc thành lập văn phòng tư vấn tiếp nhận hồ sơ từ <br /><b>Tập Đoàn AN DƯƠNG</b> gửi Trung Tâm Dịch vụ việc làm tỉnh BÀ RỊA - VŨNG TÀU:</p>
        <iframe src="./docs/TẬP ĐOÀN AN DƯƠNG.pdf" style="width:100%; height:80vh;" frameborder="0"></iframe>
    </div>`,
    `<div class="container py-8">
        <p class="m-4">Thư giới thiệu từ <b>Tập Đoàn AN DƯƠNG</b> gửi <br /><b>SỞ LAO ĐỘNG TB&XH - Trung Tâm Dịch vụ việc làm BÀ RỊA - VŨNG TÀU:</b></p>
        <iframe src="./docs/CV 2162 GIOI THIEU CONG TY CP PT TAP DOAN AN DUONG.pdf" style="width:100%; height:80vh;" frameborder="0"></iframe>
    </div>`,
    `<div class="container text-center p-10">
                Với cơ sở pháp lý vững chắc, Phác Hướng Nghiệp tự tin là dịch vụ uy tín, an toàn, đồng hành với khách hàng trên con đường chinh phục những nấc thang mới trong sự nghiệp, chắp cánh cho khách hàng tham gia vào thị trường lao động quốc tế năng động đầy hấp dẫn. <p><b>Hãy liên hệ ngay qua email hoặc số điện thoại (zalo) bên dưới</b></p>
    </div>`
];
function About(props) {
    return (
        <div >
            <ImgCard imgUrl='./imgs/banners/main-banner.png' className='bg-center bg-no-repeat bg-cover w-full h-96' />
            <Link to='/'>
                <Heading>Phác <span className=" text-main">Hướng nghiệp</span></Heading>
            </Link>
            <ContentPanel htmlContents={introduce} />

            <Heading>Thông tin pháp lý</Heading>
            <ContentPanel htmlContents={legalInfor} />
        </div>
    );
}

export default About;

function Heading({ children, ...props }) {
    return <p className="text-center p-7 text-white text-3xl uppercase  bg-dark">{children}</p>
}

function ContentPanel({ htmlContents }) {
    const contentDiv = useRef();
    useEffect(() => {
        const current = contentDiv.current;
        if (current.childElementCount === 0)
            htmlContents.forEach(e => {
                current.insertAdjacentHTML('beforeend', e);
            });
    })
    return (
        <div className="container mx-auto text-center text-base py-7 leading-7">
            <div ref={contentDiv} className='mx-4 flex flex-col gap-4'>

            </div>
        </div>
    )
}
