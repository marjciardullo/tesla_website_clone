import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item"


import Accessories from './assets/Desktop-Accessories.jpg'
import Models from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item 
        title='Lowest Cost Solar Panels in America'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={SolarPanels}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        first
        />

        <Item 
        title='Model S'
        desc='$69,420'
        descLink=''
        backgroundImg={Models}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item 
        title='Model 3'
        desc='$74,400'
        descLink=''
        backgroundImg={Model3}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item 
        title='Model X'
        desc='$80,000'
        descLink=''
        backgroundImg={ModelX}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item 
        title='Model Y'
        desc='$85,400'
        descLink=''
        backgroundImg={ModelY}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item 
        title='Solar for new roofs'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={SolarRoof}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />

        <Item 
        title='Accessories'
        desc='Money-back guarantee'
        descLink=''
        backgroundImg={Accessories}
        leftBtnTxt='SHOP NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
        />
      </div>
    </div>
  );
}

export default App;
