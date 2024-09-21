import './App.css'
import Alert from './components/Alert'
import OurProject from './components/OurProject'
import Section1 from './components/Section1'
import ServiceOffer from './components/ServiceOffer'
import StudentTestimonialsCarousel from './components/StudentTestimonialsCarousel'
import TechnologyTraining from './components/TechnologyTraining '
import WebAppDevelopment from './components/WebAppDevelopment'

function App() {

  return (
    <>
      {/* <Section1/>
      <StudentTestimonialsCarousel/>
      <Alert/> */}
      <WebAppDevelopment/>
      <TechnologyTraining/>
      <ServiceOffer/>
      <OurProject/>
    </>
  )
}

export default App
