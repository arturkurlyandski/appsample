import GlobalStyles from "./GlobalStlyle";
import styled from "styled-components"
import { useState } from "react"
import { AddIcon, MenuIcon } from "@fluentui/react-icons-northstar"

function App() {

    const [showSecond, setShowSecond] = useState(false)

    const [showFirstSub, setShowFirstSub] = useState(false)
    const [showSecondSub, setShowSecondSub] = useState(false)
    const [showThirdSub, setShowThirdSub] = useState(false)
    const [showFourthSub, setShowFourthSub] = useState(false)
    const [showFifthSub, setShowFifthSub] = useState(false)

    const [showSubContent, setShowSubContent] = useState(false)

    function removeSubs() {
      setShowFirstSub(false)
      setShowSecondSub(false)
      setShowThirdSub(false)
      setShowFourthSub(false)
      setShowFifthSub(false)
    }

    function handleFirstSub() {
      setShowFirstSub(true)
      setShowSecondSub(false)
      setShowThirdSub(false)
      setShowFourthSub(false)
      setShowFifthSub(false)
      setShowSubContent(false)
    }

    function handleSecondSub() {
      setShowFirstSub(false)
      setShowSecondSub(true)
      setShowThirdSub(false)
      setShowFourthSub(false)
      setShowFifthSub(false)
      setShowSubContent(false)
    }

    function handleThirdSub() {
      setShowFirstSub(false)
      setShowSecondSub(false)
      setShowThirdSub(true)
      setShowFourthSub(false)
      setShowFifthSub(false)
      setShowSubContent(false)
    }

    function handleFourthSub() {
      setShowFirstSub(false)
      setShowSecondSub(false)
      setShowThirdSub(false)
      setShowFourthSub(true)
      setShowFifthSub(false)
    }

    function handleFifthSub() {
      setShowFirstSub(false)
      setShowSecondSub(false)
      setShowThirdSub(false)
      setShowFourthSub(false)
      setShowFifthSub(true)
    }

  
    const FirstLevel = styled.div`

      background-color: #ecf0f1;
      box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
      padding: 1rem 0;

    `

    const TopNav = styled.div`

      background-color: #ecf0f1;
      box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
      padding: 1rem 0;

      `
  
    const MenuList = styled.ul`
    
      a {
        text-decoration: none;
        display: inline-block;
        color: black;
        padding: 10px;
        transition: background-color .3s ease;
        margin: 0px 5px;
      }

      a:hover {
        background-color: white;
      }

      li {
        display: inline-block;
      }
    
    `

    const SecondLevel = styled.div`

      background-color: #D3D7D8;
      box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
      padding: 1rem 0;
      width: 300px;
      border-radius: 3px;
      position: absolute;

      `

    const MenuList3 = styled.ul`

      a {
        text-decoration: none;
        color: black;
        padding: 10px;
        transition: background-color .3s ease;
      }

      a:hover {
        background-color: white;
      }

      li {
        margin: 30px;
      }
  
    `

    const SubContent = styled.div`
    
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      width: 700px;
      position: absolute;
      background: blue;
      left: 300px;
      top: 0px;
      background-color: white;

    `

    const FirstContent = styled.div`
    
      grid-column: 1 / 1;
      grid: row: 1 / 1;
      padding: 20px; 

    `

    const SecondContent = styled.div`
    
      grid-column: 2 / 2;
      grid-row: 1 / 1;
      padding: 20px;

    `

    const ThirdContent = styled.div`
    
      grid-column: 1 / 1;
      grid-row: 2 / 2;
      padding: 20px;

    `

    const FourthContent = styled.div`
    
      grid-column: 2 / 2;
      grid-row: 2 / 2;
      padding: 20px;

    `

    const ContentItem = styled.p`
    
      margin-top: 10px;
    
    `
  
  /* eslint-disable */
  return (
    <div className="App">
      <GlobalStyles />
      <TopNav>
        <nav>
          <MenuList>
            <li><a onMouseOver={() => setShowSecond(true)} href="#">Dashboard</a></li>
            <li><a onMouseOver={() => setShowSecond(false) || removeSubs()} href="#">Settings</a></li>
            <li><AddIcon /></li>
          </MenuList>
        </nav>
      </TopNav>
      {showSecond && 
        <>
        <FirstLevel>
        <nav>
          <MenuList>
            <li><a href="#"><MenuIcon /></a></li>
            <li><a onMouseOver={() => handleFirstSub()} href="#">MenuItem1</a></li>
            <li><a onMouseOver={() => handleSecondSub()} href="#">MenuItem2</a></li>
            <li><a onMouseOver={() => handleThirdSub()} href="#">MenuItem3</a></li>
            <li><a onMouseOver={() => handleFourthSub()} href="#">MenuItem4</a></li>
            <li><a onMouseOver={() => handleFifthSub()} href="#">MenuItem5</a></li>
          </MenuList>
        </nav>
      </FirstLevel>
      </>
      }
      {showFirstSub &&
      <SecondLevel>
      <nav>
        <MenuList3>
            <li><a onMouseOver={() => setShowSubContent(true)} href="#">SubMenu1 Item1</a></li>
              {showSubContent &&
                <SubContent>
                  <FirstContent>
                  <h4>My Career and Benefits</h4>
                    <ContentItem>HRweb</ContentItem>
                    <ContentItem>Benefits</ContentItem>
                    <ContentItem>Learning Portal</ContentItem>
                    <ContentItem>Internal Jobs</ContentItem>
                    <ContentItem>Company Store</ContentItem>
                    <ContentItem>Give</ContentItem>
                  </FirstContent>
                  <SecondContent>
                  <h4>My Career and Benefits</h4>
                    <ContentItem>HRweb</ContentItem>
                    <ContentItem>Benefits</ContentItem>
                    <ContentItem>Learning Portal</ContentItem>
                    <ContentItem>Internal Jobs</ContentItem>
                    <ContentItem>Company Store</ContentItem>
                    <ContentItem>Give</ContentItem>
                  </SecondContent>
                  <ThirdContent>
                    <h4>Travel and Expense</h4>
                    <ContentItem>Travel</ContentItem>
                    <ContentItem>Expenses</ContentItem>
                    <ContentItem>Payments</ContentItem>
                    <ContentItem>US Immigration Travel</ContentItem>
                  </ThirdContent>
                  <FourthContent>
                  <h4>Travel and Expense</h4>
                    <ContentItem>Travel</ContentItem>
                    <ContentItem>Expenses</ContentItem>
                    <ContentItem>Payments</ContentItem>
                    <ContentItem>US Immigration Travel</ContentItem>
                  </FourthContent>
                </SubContent>
              }
            <li><a href="#">SubMenu1 Item2</a></li>
            <li><a href="#">SubMenu1 Item3</a></li>
        </MenuList3>
      </nav>
      </SecondLevel>
      }
      {showSecondSub &&
      <SecondLevel>
      <nav>
        <MenuList3>
            <li><a href="#">SubMenu2 Item1</a></li>
            <li><a href="#">SubMenu2 Item2</a></li>
            <li><a href="#">SubMenu2 Item3</a></li>
        </MenuList3>
      </nav>
      </SecondLevel>
      }
      {showThirdSub &&
      <SecondLevel>
      <nav>
        <MenuList3>
            <li><a href="#">SubMenu3 Item1</a></li>
            <li><a href="#">SubMenu3 Item2</a></li>
            <li><a href="#">SubMenu3 Item3</a></li>
        </MenuList3>
      </nav>
      </SecondLevel>
      }
      {showFourthSub &&
      <SecondLevel>
      <nav>
        <MenuList3>
            <li><a href="#">SubMenu4 Item1</a></li>
            <li><a href="#">SubMenu4 Item2</a></li>
            <li><a href="#">SubMenu4 Item3</a></li>
        </MenuList3>
      </nav>
      </SecondLevel>
      }
      {showFifthSub &&
      <SecondLevel>
      <nav>
        <MenuList3>
            <li><a href="#">SubMenu5 Item1</a></li>
            <li><a href="#">SubMenu5 Item2</a></li>
            <li><a href="#">SubMenu5 Item3</a></li>
        </MenuList3>
      </nav>
      </SecondLevel>
      }
    </div>
  );
  /* eslint-disable */
}

export default App;
