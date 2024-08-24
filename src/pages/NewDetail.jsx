import React, { useEffect, useRef } from 'react';
import HtmlContents from '../components/HtmlContents';
import { Link, useLoaderData } from 'react-router-dom';
import ImgCard from '../components/ImgCard';

// Model
import { NewContents } from '../models/Program';

// Ultilities
import createJSX from '../ultilities/createJSX';


function NewDetail(props) {
    const newDetail = NewContents.convertFromObj(useLoaderData());
    console.log(newDetail);


    const contents = []

    // html-react-parser lead to key props error
    createJSX(newDetail.htmlContents, contents)

    return (
        <>
            <ImgCard imgUrl={`../${newDetail.imgBannerUrl}`} className='bg-top bg-no-repeat bg-cover w-full h-96' />
            <HtmlContents className='my-12' >
                <h1 className='text-center font-semibold text-2xl uppercase mb-8'>{newDetail.title}</h1>
                <article className='flex flex-col gap-4 ' >
                    {contents}
                    {/* 
                    <p>Chúng ta cùng điểm lại</p>
                    <h4 className='font-semibold text-xl mt-8'>Trần Ngọc Minh</h4>
                    <p>Đây là quán quân đầu tiên của đường lên đỉnh Olympia là cựu học sinh trường THPT chuyên Nguyễn Bỉnh Khiêm, Vĩnh Long. Tốt nghiệp Đại học Kỹ thuật Swinburne (Australia) Ngọc Minh được trao học bổng từ cử nhân lên tiến sĩ với kết quả thuộc top 5% xuất sắc.</p>
                    <p>Cô làm việc cho một công ty nhà mạng di động hàng đầu tại xứ sở chuột túi vào tháng 7 năm 2013. Đặc biệt vào năm 2013 cô đã tiến hành lập gia đình.</p>
                    <img src='/imgs/news/2024-Aug/3-main.png' alt='quán quân đầu tiên của đường lên đỉnh Olympia' />

                    <h4 className='font-semibold text-xl mt-8'>Phan Mạnh Tân</h4>
                    <p>Phan Mạnh Tân (THPT Năng khiếu Hà Tĩnh, tỉnh Hà Tĩnh) sau khi giành chức quán quân năm thứ 2 của Đường lên đỉnh Olympia đã lên đường du học Australia. Anh theo học PhD Software Engineering ở Đại học Kỹ thuật Swinburne .</p>
                    <p>Anh hoàn thành chương trình nghiên cứu sinh tiến sĩ sau 12 năm. Mạnh Tân tốt nghiệp và làm kiến trúc sư phần mềm ở công ty IBM, Melbourne, Australia đây là một tập đoàn công nghệ thông tin lớn trên thế giới.</p>

                    <h4 className='font-semibold text-xl mt-8'>Lương Phương Thảo - quán quân đường lên đỉnh Olympia học trường gì tại Úc?</h4>
                    <p>Danh hiệu quán quân Olympia năm thứ 3 thuộc về đại diện trường THPT chuyên Nguyễn Bỉnh Khiêm, Vĩnh Long- Lương Phương Thảo. Cô đã chọn theo học ngành Kinh doanh quốc tế và Marketing thuộc Đại học Monash, Australia.</p>
                    <p>Tốt nghiệp thạc sĩ khi du học Úc , Thảo về nước làm việc cho một công ty quảng cáo tại Sài Gòn. Như vậy có thể nhận ra rằng từ trước đến nay đây là nhà vô định duy nhất trở về nước.</p>

                    <h4 className='font-semibold text-xl mt-8'>Võ Văn Dũng</h4>
                    <p>Nhà vô địch năm 4 – tốt nghiệp ĐH Kỹ thuật Swinburne sau đó làm việc trong lĩnh vực kiểm toán tại Melbourne, Australia. Năm 2016 anh có bằng thạc sĩ về thuế. Sau cuộc thi Đường lên đỉnh Olympia, hình ảnh và thông tin của anh rất hiếm khi xuất hiện trên truyền thông.</p>

                    <h4 className='font-semibold text-xl mt-8'>Đỗ Lâm Hoàng</h4>
                    <p>Người vô địch Olympia năm thứ 5 là Đỗ Lâm Hoàng – cựu học sinh THPT Gò Vấp, TP.HCM. Anh theo học chuyên ngành ngành Kỹ sư công nghệ viễn thông và Internet tại Đại học Kỹ thuật Swinburne, Australia.</p>
                    <p>Lâm Hoàng tiến hành lập gia đình vào năm 2016 và làm chuyên viên mạng di động không dây tại Sở Giáo dục bang Victoria, Australia.</p>

                    <h4 className='font-semibold text-xl mt-8'>Lê Vũ Hoàng</h4>
                    <p>Quán quân Olympia năm thứ 6 đại diện THPT Số 1 Bố Trạch, Quảng Bình – Lê Vũ Hoàng.  Anh đã để lại nhiều ấn tượng trong lòng khán giả về tấm gương vượt khó nhờ học giỏi. Vũ Hoàng theo học và hoàn thành chương trình tiến sĩ tại Đại học Swinburne, Australia.</p>
                    <p>Tháng 2/2013 anh lập gia đình và hiện đang có 2 con. Anh cũng chính là người sáng lập và giám đốc công nghệ của công ty VIoT.</p>
                    <img src='/imgs/news/2024-Aug/3-quan-quan-olympia-nam-thu-6.png' alt='Quán quân Olympia năm thứ 6 đại diện THPT Số 1 Bố Trạch, Quảng Bình – Lê Vũ Hoàng' />

                    <h4 className='font-semibold text-xl mt-8'>Lê Viết Hà</h4>
                    <p>Lê Viết Hà (THPT chuyên Lê Khiết, Quảng Ngãi) sau khi giành vòng nguyệt quế chung kết Olympia năm thứ 7 đã lên đường sang Australia du học. Anh tốt nghiệp với 2 bằng cử nhân loại xuất sắc ngành công nghệ Robot và khoa học Máy tính từ Đại học Swinburne.</p>
                    <p>Viết Hà trở về Việt Nam từ tháng 12/2017, làm việc với vai trò cán bộ chịu trách nhiệm về các khoản đầu tư của một công ty lớn. Anh cũng đang hoàn thành chương trình thạc sĩ Quản trị Kinh doanh tại Đại học Deakin, Australia.</p>

                    <h4 className='font-semibold text-xl mt-8'>Huỳnh Anh Vũ</h4>
                    <p>Huỳnh Anh Vũ  – là người thắng cuộc sau 53 trận của năm thứ 8 – đại diện THPT Tăng Bạt Hổ, Bình Định. Tốt nghiệp Đại học Kỹ thuật Swinburne, Anh Vũ là một trong hai sinh viên xuất sắc được giữ làm giảng viên ngành Kinh tế. Quán quân Olympia năm 8 cũng đã tiến hành sống và lập gia đình tại xứ sở chuột túi.</p>

                    <h4 className='font-semibold text-xl mt-8'>Hồ Ngọc Hân</h4>
                    <p>Chiến thắng trong trận chung kết với 5 thí sinh tham gia, Hồ Ngọc Hân (THPT Quốc học Huế, Thừa Thiên – Huế) là thí sinh đã gây được ấn tượng mạnh với khán giả. Quán quân năm thứ 9 còn là thủ khoa Đại học Khoa học Tự nhiên – Đại học Quốc gia TP.HCM khối B. Hồ Ngọc Hân chọn học tiến sĩ tại Sydney, Australia để theo đuổi giấc mơ nghiên cứu khoa học.</p>

                    <h4 className='font-semibold text-xl mt-8'></h4>
                    <h4 className='font-semibold text-xl mt-8'></h4>
                    <h4 className='font-semibold text-xl mt-8'></h4> 
                    */}

                </article>
            </HtmlContents>
        </>
    );
}

export default NewDetail;