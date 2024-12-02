/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import styled from "styled-components"
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UpEvents from "../../components/UpcomingEvents/UpEvents";
import events from '../../assets/events';
import boardWise from "../../assets/boardWise";
import modeWise from "../../assets/modeWise";
import clsx from 'clsx'




const Tickets = (props) => {

    return (
        <Container>
            <ImageSlider />
            <UpEvents />
            {
                <Eventwise>
                    <h4 className="white">Upcoming events</h4>
                    <Content>
                        {
                            events && events.map((event, key) => (
                                <Wrap key={key}>
                                    {event.id}
                                    <Link to={'/detail/' + event.id} state={event}>
                                        <img src={event.cardImg} alt={event.title} />;
                                    </Link>
                                </Wrap>
                            ))
                        }
                    </Content>
                </Eventwise>
            }
            {
              <Boardwise>
              <h4 className="white">Browse Events by Boards</h4>
              <Content>
                  {
                      boardWise && boardWise.map((board, key) => (
                          <Wrap key={key}>
                              {board.id}
                              <Link to={'/detail/' + board.id}>
                                  <img src={board.cardImg} alt={board.title} />;
                              </Link>
                          </Wrap>
                      ))
                  }
              </Content>
          </Boardwise>  
            }
            {
              <Boardwise>
              <h4 className="white">Browse Events by Modes</h4>
              <Content>
                  {
                      modeWise && modeWise.map((mode, key) => (
                          <Wrap key={key}>
                              {mode.id}
                              <Link to={'/detail/' + mode.id} state={mode}>
                                  <img src={mode.cardImg} alt={mode.title} />;
                              </Link>
                          </Wrap>
                      ))
                  }
              </Content>
          </Boardwise>  
            }
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top:72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }

`

const Eventwise = styled.div`
    padding: 0 0 26px;

`

const Boardwise = styled.div`
    padding: 0 0 26px;

`

const Content = styled.div`
            display: grid;
            grid-gap: 25px;
            gap: 25px;
            grid-template-columns: repeat(4, minmax(0,1fr));

            @media(max-width:768px){
                grid - template - columns: repeat(2,minmax(0,1fr));
                    }
            `

            const Wrap = styled.div`
            padding-top: 56.25%;
            border-radius: 10px;
            box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
            cursor: pointer;
            overflow: hidden;
            position: relative;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: 3px solid rgba(249,249,249,0.1);

            img{
                inset: 0px;
            display: block;
            height: 100%;
            object-fit: cover;
            opacity: 1;
            position: absolute;
            transition: opacity 500ms ease-in-out 0s;
            width: 100%;
            z-index: 1;
            top: 0;
                    }

            &:hover{
                box - shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
            transform: scale(1.05);
            border-color: rgba(249,249,294,0.8);
                    }
            `
export default Tickets;