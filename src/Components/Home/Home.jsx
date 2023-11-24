import Carousol from "../Carousol/Carousol";
import Navbar from "../Navbar/Navbar";
import Plan from "../Plan/Plan";
import Statistics from "../Statistic/Statistics";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousol></Carousol>


            <Plan></Plan>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;