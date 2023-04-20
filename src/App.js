import NavBar from './NavBarFolder/NavBar.component';
import BannerComponent from './BannerFolder/Banner.component';
import Features from './Features/Features.component';
import Steps from './StepsFolder/Steps.component';
import FAQAccordion from './FAQAccordion/FAQAccordion.component';
import Download from './DownloadFolder/Download.component';
import Footer from './Footer/Footer.component';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerComponent />
      <Features />
      <Steps />
      <FAQAccordion />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
