import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import ActionBarComponentProps from "../DatePicker/datePicker";
import TableData from '../Detail/TableData'
import SeatMap from "../SeatMap/SeatMap";



const Detail = () => {
    const [isBooking, setIsBooking] = useState(false);

    const location = useLocation();
    const data = location.state;
    

    return (
        <>

            <Container>
                {console.log(data)}
                <Background>
                    <img src={data.bgImg} alt={data.title} />
                </Background>
                {/* <ImageTtitle>
                <img src={data.cardImg} alt={data.title}/>
            </ImageTtitle> */}
                <ContentMeta>
                    <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt=""/>
                        <span>ICC TV</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt=""/>
                        <a href="https://www.youtube.com/watch?v=rZKn3-f3dfM&ab_channel=Digital2Sports"><span>Trailer</span></a>
                    </Trailer>
                    <AddList>
                        <span/>
                        <span/>
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt=""/>
                        </div>
                    </GroupWatch>
                </Controls>
                    <Description>
                        {data.title}
                    </Description>
                    <SubTitle>
                        {data.description}
                    </SubTitle>
                </ContentMeta>
            </Container>
            <MatchesSchedule>
                <div className="container">
                    <h1 className="white">Qualifiers</h1>
                    <div className="content">
                    <TableData/>
                    </div>
                </div>
            </MatchesSchedule>
            <BookTickets>
                <div className="container">
                    <button onClick={() => setIsBooking(prev => !prev)} className="ticketBook">
                        Book tickets
                    </button>
                {isBooking ?
            <DatePicker>
                <ActionBarComponentProps className="datePicker"/>
            </DatePicker>
                : null}
                </div>
                <div className="container">
                    <button className="ticketBook">
                        Select Seats
                    </button>
                    {isBooking ?
            <SeatMap/>
                : null}
                <a href="/stadiumview"><button className="ticketBook">Seat View in 3D</button></a>
            <Payment>
                <a href="/checkout"><button className="ticketBook">Proceed to Payment</button></a>
            </Payment>
                </div>
            </BookTickets>   
        </>
    )
}

const Payment = styled.div`
   
`

const DatePicker = styled.div`
    // border:1px solid red;
    margin:30px 30px;
    display:flex;
    align-items:center;
    justify-content:center;

    .datePicker{
        border:1px solid red;
    }
`

const BookTickets = styled.div`

    width:100%;
    margin:auto;
    display:flex;
    flex-direction:row;
    .container{
        // border:1px solid red;
        margin:26px 26px;
        display:flex;
        flex-direction:column;
        align-items:center;
        width:50%;
        gap:40px;

    }

    .ticketBook{
        width:150px;
        padding:10px 20px;
        border-radius:5px;
        border:1px solid white;
        background-color:transparent;
        color:white;
        font-size:1.1rem;
        cursor:pointer;
    }

    .ticketBook:hover{
        color:black;
        background-color:white;
    }

`


const MatchesSchedule = styled.div`
    margin-bottom:40px;
    padding:0px 26px;

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Container = styled.div`
    position: relative;
    max-height: 780px;
    overflow-x: hidden;
    overflow-y:hidden;
    display: block;
    top: 72px;
    // padding: 0 calc(3.5vw + 5px);
`

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    // position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img{
        object-fit: cover;
        width: 100%;
        height:420px;
    }

    @media (max-width:768px){
        width: initial;
    }
`

const ImageTtitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 10vw;
    min-height: 70px;
    // padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`

const ContentMeta = styled.div`
    min-width: 874px;

`

const Controls = styled.div`
    margin:26px 26px;
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    // margin: 24px 0px;
    min-height: 56px;

`;

const Player = styled.button`
    font-size: 15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius:4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align:center;
    text-transform: uppercase;
    background: rgb(249,249,249);
    border: none;
    color: rgb(0,0,0);

    img{
        width: 32px;
    }

    &:hover{
        background: rgb(198,198,198);
    }

    @media(max-width:768px){
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img{
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`

const AddList = styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color:rgba(0,0,0,0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor:pointer;

    span{
        background-color: rgb(249,249,249);
        display:inline-block;

        &:first-child{
            height: 2px;
            transform: translate(1px , 0px) rotate(0deg);
            width:16px;
        }

        &:nth-child(2){
            height: 16px;
            transform: translate(-8px) rotate(0deg);
            width: 2px;
        }
    }
`

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    background:white;

    div{
        height:40px;
        width:40px;
        background: rgb(0,0,0);
        border-radius: 50%;

        img{
            width: 100%;
        }
    }
`
const SubTitle = styled.div`
    color:rgb(249,249,249);
    width: 100% !important;
    font-size:15px;
    min-height:20px;
    padding:16px 26px;

    @media(max-width:768px){
        font-size: 12px;
    }
`

const Description = styled.div`
    font-weight: 700;
    line-height: 1.4;
    font-size:2.1rem;
    padding: 20px 26px;
    color: rgb(249,249,249);

    @media(max-width:768px){
        font-size: 14px;
    }
`

export default Detail;