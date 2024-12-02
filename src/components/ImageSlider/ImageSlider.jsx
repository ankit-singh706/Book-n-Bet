import styled from "styled-components";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import SliderImg1 from '../../assets/slider1.jpg';
import SliderImg2 from '../../assets/slider1.jpg';
import SliderImg3 from '../../assets/slider2.jpg';
import SliderImg4 from '../../assets/slider-scales.jpg';

const ImageSlider = (props) =>{
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,

    }
    return(
        <div>
            <Carousel {...settings}>
                <Wrap><a><img src={SliderImg1} alt=""/></a></Wrap>
                <Wrap><a><img src={SliderImg2} alt=""/></a></Wrap>
                <Wrap><a><img src={SliderImg3} alt=""/></a></Wrap>
                <Wrap> <a><img src={SliderImg1} alt=""/></a></Wrap>
                
            </Carousel>
        </div>
    )
}

const Carousel = styled(Slider)`
    margin-top: 20px;
    &>button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: -1;


        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button{
        &::before{
            font-size: 10px;
            color: rgb(150,158,171);
        
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow:initial;
    }
    .slick-prev{
        left: -40px;
    }
    .slick-next{
        right: -40px;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a{
        border-radius:4px;
        box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img{
            width: 100%;
            height: 100%; 
        }

        &:hover{
            padding: 0;
            border: 4px solid rgba(249,249,249,0.8);
            transition-duration: 300ms;
        }
    }
`;

export default ImageSlider;