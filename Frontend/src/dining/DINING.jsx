import Activity from "./DiningActivity.jsx";
import ArtistsRow from "./Artists.jsx";
import Events from "./DiningEvents.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Row1 from "./Row1.jsx";
import Row2 from "./Row2.jsx";

export default function Dining(){
    return(
        <>
            <Navbar/>
            <Row1/>
            <Events/>
            <Activity/>
            <Row2/>
            <Events/>
            <Activity/>
            <Row2/>
            <ArtistsRow/>
            <Footer/>
        </>
    )
}