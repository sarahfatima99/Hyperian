import {React, Component} from 'react';
import BackgroundAsImage from '../components/hero/BackgroundAsImage';
import ThreeColSimple from '../components/features/ThreeColSimple';
import TwoColSingleFeatureWithStats2 from './features/TwoColSingleFeatureWithStats2';
import SliderCard from './cards/ThreeColSlider';
import Footer from "./footers/MiniCenteredFooter";

export class Home extends Component {
    render() {
        return (
            <div>

                <BackgroundAsImage />
                <ThreeColSimple />
                <TwoColSingleFeatureWithStats2 />
                <SliderCard />
                <Footer />


            </div>
        )
    }
}

export default Home
