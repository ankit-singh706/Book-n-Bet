import styled from "styled-components";

const UpEvents = (props) =>{
    return(
        <Container>
           <Wrap>
                <img src="/images/t20.png" alt=""/>
                <video autoPlay={true} loop={true} playsInline={true} muted>
                <source src="/videos/1.mp4" type="video/mp4" />
                </video>
            </Wrap>
           <Wrap>
           <img src="/images/odi.png" alt=""/>
            <video autoPlay={true} loop={true} playsInline muted>
                <source src="/videos/2.mp4" type="video/mp4"/>
            </video>
           </Wrap>
           <Wrap>
            <img src="/images/test.png" alt=""/>
            <video autoPlay={true} loop={true} playsInline muted>
                <source src="/videos/3.mp4" type="video/mp4"/>
            </video>
            </Wrap>
           <Wrap>
           <img src="/images/ipl.png" alt=""/>
            <video autoPlay={true} loop={true} playsInline muted>
                <source src="/videos/4.mp4" type='video/mp4'/>
            </video>
            </Wrap>
           <Wrap>
           <img src="/images/icc.png" alt=""/>
            <video autoPlay={true} loop={true} playsInline muted>
                <source src="/videos/5.mp4"  type="video/mp4"/>
            </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0,1fr));

    @media(max-width:768px){
        grid-template-columns: repeat(1, minmax(0 , 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgb(249,249,249,0.1);

    img{
        inset: 0px;
        display: block;
        height: 100px;
        width:100px;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        /* width: 100%; */
        z-index: 1;
        top:0;
        margin: auto;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover{
        img{
            opacity: 0.3;
        }
        box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0/ 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.9);

        video{
        opacity: 1;
        }
    }

    

`

export default UpEvents;