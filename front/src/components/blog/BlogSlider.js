import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../../css/blog/BlogArticlePreview.css'


const BlogSlider = ({articleList}) => {
  const navigate = useNavigate()

  return (
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      centeredSlides
      onSwiper={swiper => console.log(swiper)}
    >
      {articleList && articleList.map((article) => (
        <SwiperSlide>
          <div className="PreviewContainer" >
            <div className="PreviewimageBox">
              <img src={article.filePath} alt='사진' onClick={() => navigate(`/blogArticle/${article.id}`)}></img>
            </div>
          <div className="titleBox">
            {article.title}
            </div>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>

  )
}
    
export default BlogSlider;

