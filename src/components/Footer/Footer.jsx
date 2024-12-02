import React from "react"; 7
import styled, { css } from "styled-components";

const media = {
    desktop: (...args) => css`
    @media (min-width: 870px) {
      ${css(...args)};
    }
  `
};

const Footer = styled.footer`
background-color:#040714;
margin-top:80px;
  font-family: nunito-sans, sans-serif;
  text-align: center;
  ${media.desktop`
    text-align: left;
  `}
`;

const TopBar = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 40px 0;
  ${media.desktop`
    padding: 45px 80px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  `}
`;

const GetTheApp = styled.div`
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
  margin: 0 -15px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  ${media.desktop`
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
  `}
`;

const GetTheAppTitle = styled.div`
  margin-bottom: 4px;
  width: 100%;
  ${media.desktop`
    width: unset;
    margin: 0 15px;
  `}
`;

const AppStoreApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  ${media.desktop`
    padding: 0;
    margin: 0 8px;
  `}
`;

const GoogleApp = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  ${media.desktop`
    padding: 0;
    margin: 0 8px;
  `}
`;

const DesktopSocialList = styled.div`
  display: none;
  ${media.desktop`
    display: flex;
    align-items: center;
  `};
`;

const MobileSocialList = styled.div`
  padding-bottom: 40px;
  width: 100%;
  ${media.desktop`
    display: none;
  `};
`;

const Twitter = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

const Facebook = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

const Instagram = styled.svg`
  border: 1px lightgray solid;
  width: 33px;
  height: 33px;
  margin-left: 5px;
`;

const HR = styled.div`
  display: none;
  ${media.desktop`
    height: 0;
    padding: 0;
    margin: 0;
    display: block;
    border-bottom: 1px #cacada solid;
  `};
`;

const BottomBar = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  ${media.desktop`
    flex-wrap: nowrap;
    padding: 40px 80px 60px;
    justify-content: space-between;
  `};
`;

const Menu = styled.div`
  margin-bottom: 30px;
  min-width: 50%;
  ${media.desktop`
    min-width: unset;
    margin-bottom: 0;
    margin-right: 40px;
  `}
`;

const MenuHead = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
`;

const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: white;
  ${media.desktop`
    white-space: nowrap;
  `}
`;

const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;
  color: #2b2738;
  margin: 0 20px;
`;

const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;

const menu = [
    {
        name: "ICC Boards",
        links: [
            { title: "BCCI", url: "#" },
            { title: "PCB", url: "#" },
            { title: "ECB", url: "#" },
            { title: "Australia Cricket Board", url: "#" }
        ]
    },
    {
        name: "About Us",
        links: [
            { title: "ICC Events", url: "#" },
            { title: "ICC News", url: "#" },
            { title: "ICC Awards", url: "#" },
            { title: "ICC TV", url: "https://app.icc.tv/" },
        ]
    }
];

const SocialList = () => (
    <>
        <Twitter />
        <Facebook />
        <Instagram />
    </>
);

const Foot = () => {
    return (
        <Footer>
            <TopBar>
                {/* <GetTheApp>
          <GetTheAppTitle> Get The App</GetTheAppTitle>
          <AppStoreApp />
          <GoogleApp />
        </GetTheApp> */}
                {/* <DesktopSocialList>
          <SocialList />
        </DesktopSocialList> */}
            </TopBar>
            {/* <HR /> */}
            <BottomBar>
            <Policy>
                    <PolicyRow>© ICC, All rights reserved.</PolicyRow>
                    <PolicyRow>
                    The International Cricket Council (ICC) is the global governing body of cricket. It was founded as the Imperial Cricket Conference in 1909 by representatives from Australia, England and South Africa. It was renamed as the International Cricket Conference in 1965, and took up its current name in 1987. The ICC has its headquarters in Dubai, United Arab Emirates.
                    </PolicyRow>
                    <PolicyRow>
                    The Chairman heads the board of directors and on 26 June 2014, Narayanaswami Srinivasan, the former president of BCCI, was announced as the first chairman of the council. The role of ICC president has become a largely honorary position since the establishment of the chairman role and other changes were made to the ICC constitution in 2014. It has been claimed that the 2014 changes have handed control to the 'Big Three' nations of England, India and Australia. The last ICC president was Zaheer Abbas, who was appointed in June 2015 following the resignation of Mustafa Kamal in April 2015. When the post of ICC president was abolished in April 2016, Shashank Manohar, who replaced Srinivasan in October 2015, became the first independent elected chairman of the ICC
                    </PolicyRow>
                    {/* <PolicyRow>
                        As an Amazon Associate, we may earn from qualifying purchases.
                    </PolicyRow> */}
                </Policy>
                {menu.map(({ name, links }) => (
                    <Menu>
                        <MenuHead>{name}</MenuHead>
                        {links.map(({ title, url }) => (
                            <MenuLink href={url}>{title}</MenuLink>
                        ))}
                    </Menu>
                ))}
                <MobileSocialList>
                    <SocialList />
                </MobileSocialList>
            </BottomBar>
        </Footer>
    );
}

export default Foot;


