import React, { useEffect } from 'react';
import Panel from '../components/Panel';
import ImgCard from '../components/ImgCard';
import FallingSnow from '../components/FallingSnow';
import Heading from '../components/Heading';

import { Link } from 'react-router-dom';

// data
import careerOpportunities from '../../data/careerOpportunities.json';
import studyAbroad from '../../data/studyAbroad.json';

function Home(props) {
    return (
        <>
            <ImgCard imgUrl='./imgs/index/slider.jpg' className='bg-top bg-no-repeat bg-cover w-full h-96' />
            <div className='text-center mt-7'>
                <div id='xkld' className='bg-gray-50 py-7 '>
                    <Heading>CƠ HỘI VIỆC LÀM</Heading>
                    <Panel itemsList={careerOpportunities} className=' ' />
                </div>

                <div>
                    <Heading>CÁC CHƯƠNG TRÌNH DU HỌC VÀ HỌC BỔNG HẤP DẪN</Heading>
                    <Panel itemsList={studyAbroad} />
                </div>
                <FallingSnow>
                    <Introduce />
                </FallingSnow>
            </div>
        </>
    );
}

export default Home;

function Introduce() {
    return (
        <div className="container mx-auto py-20 text-white text-start leading-8">
            <div className='mx-4'>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div className="flex flex-col gap-4">
                        <h2 className="uppercase font-semibold text-xl">Lời giới thiệu</h2>
                        <p>
                            Chào mừng bạn đến với trang Tư vấn du học, hướng nghiệp BRVT của chúng tôi - nơi bạn có thể khám
                            phá các cơ hội học tập và làm việc tại các quốc gia trên khắp thế giới một cách dễ dàng và đầy
                            đủ thông tin cần thiết
                        </p>
                        <p>
                            Bạn đang mơ ước về một cuộc sống mới, một trải nghiệm lý thú trong nền văn hóa mới, và cơ hội mở
                            ra tương lai tươi sáng? Chúng tôi luôn ở đây để giúp bạn biến ước mơ đó thành hiện thực. Với đội
                            ngũ tư vấn giàu kinh nghiệm trong lĩnh vực du học và Cơ hội việc làm, chúng tôi cam kết cung
                            cấp cho bạn những thông tin và dịch vụ tư vấn chất lượng nhất, giúp bạn xây dựng một kế hoạch
                            học tập hoàn chỉnh- một lộ trình công việc tại nước ngoài phù hợp và đạt được những dự định
                            tương lai
                        </p>

                    </div>
                    <div className='flex flex-col gap-4'>
                        {/* <iframe width="100%" height="315"
                        src="https://www.youtube.com/embed/13qiccK5xuI?si=Ctd7UQwSahpL1EIH" title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>  */}
                        <p className='uppercase font-semibold text-xl'>
                            Tại trang web của chúng tôi, bạn sẽ được trải nghiệm:
                        </p>
                        <p>
                            <strong className="fs-5">Tư vấn chuyên sâu</strong>: Đội ngũ tư vấn của chúng tôi sẽ hỗ trợ bạn từ
                            việc định
                            hướng ngành học theo
                            sở trường, rồi lựa chọn chương trình học, trường đại học phù hợp đến thủ tục xin visa và các vấn
                            đề pháp lý liên quan. Bên cạnh đó, phân tích kỹ những thị trường lao động hiện tại, qua đó chúng
                            tôi sẽ hỗ trợ tư vấn môi trường làm việc phù hợp với sức khỏe, trình độ, sở trường và kế hoạch
                            cá nhân của bạn
                        </p>
                        <p>
                            <strong className="fs-5">Thông tin đa dạng</strong>: Chúng tôi cung cấp thông tin chi tiết về các
                            quốc gia và
                            trường học hàng đầu
                            trên thế giới, giúp bạn hiểu rõ hơn về môi trường học tập và làm việc tại đó. Song song đó, các
                            thị trường lao động và công việc mới được cập nhật thường xuyên, nhanh nhất.
                        </p>
                        <p>
                            <strong className="fs-5">Hỗ trợ tận tình</strong>: Đội ngũ của chúng tôi luôn sẵn lòng lắng nghe và
                            giải đáp mọi
                            thắc mắc của bạn,
                            giúp bạn cảm thấy tự tin và yên tâm khi bước vào hành trình mới
                        </p>
                        <p>
                            <strong className="fs-5">Tin tức và bài viết chia sẻ kinh nghiệm</strong>: Chúng tôi cập nhật những
                            thông tin mới
                            nhất về xu hướng
                            du học và Cơ hội việc làm, cùng những chia sẻ từ những người đã trải qua hành trình đó trước
                            đây.
                        </p>
                    </div>
                </div>
                <p className="my-5 text-center mt-10">
                    <i>
                        Hãy để chúng tôi là người bạn đồng hành đáng tin cậy trong cuộc hành trình mới của bạn. Đến với
                        chúng tôi, bạn không chỉ là một học viên hay người lao động, mà còn là một phần của cộng đồng đa
                        dạng và phát triển. Hãy khám phá và bắt đầu hành trình của bạn ngay hôm nay!
                    </i>
                </p>
            </div>
        </div>
    )
}