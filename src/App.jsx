import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar1 from "./components/Navbar1/Navbar1";
import Navbar2 from "./components/Navbar2/Navbar2";
import OMG from "./components/Navbar2/OMG";
import Rooms from "./components/Navbar2/Rooms";
import Bed from "./components/Navbar2/Bed";
import Cabins from "./components/Navbar2/Cabins";
import Castles from "./components/Navbar2/Castles";
import Country from "./components/Navbar2/Country";
import Farms from "./components/Navbar2/Farms";
import Lakefront from "./components/Navbar2/Lakefront";
import Mansions from "./components/Navbar2/Mansions";
import Pools from "./components/Navbar2/Pools";
import Tropical from "./components/Navbar2/Tropical";
import Beachfront from "./components/Navbar2/Beachfront";
import Amazing from "./components/Navbar2/Amazing";
import data1 from "../src/datas/data1.json";
import data2 from "../src/datas/data2.json";
import data3 from "../src/datas/data3.json";
import data4 from "../src/datas/data4.json";
import data5 from "../src/datas/data5.json";
import data6 from "../src/datas/data6.json";
import data7 from "../src/datas/data7.json";
import data8 from "../src/datas/data8.json";
import data9 from "../src/datas/data9.json";
import data10 from "../src/datas/data10.json";
import data11 from "../src/datas/data11.json";
import data12 from "../src/datas/data12.json";
import data13 from "../src/datas/data13.json";

function App() {
  return (
    <>
      <Router>
      <Navbar1 />
        <Navbar2 />
        <div className="display">
          <h3>Display total price</h3>
          <p>Includes all fees, before taxes</p>
        </div>
        <div className="travel">
          <Routes>
            <Route
              path="/"
              element={data1.map((ele) => {
                return (
                  <OMG
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/rooms"
              element={data2.map((ele) => {
                return (
                  <Rooms
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="bedroom"
              element={data3.map((ele) => {
                return (
                  <Bed
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/cabins"
              element={data4.map((ele) => {
                return (
                  <Cabins
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/castles"
              element={data5.map((ele) => {
                return (
                  <Castles
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/mansion"
              element={data6.map((ele) => {
                return (
                  <Mansions
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/farms"
              element={data7.map((ele) => {
                return (
                  <Farms
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/view"
              element={data8.map((ele) => {
                return (
                  <Amazing
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/pools"
              element={data9.map((ele) => {
                return (
                  <Pools
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/beach"
              element={data10.map((ele) => {
                return (
                  <Beachfront
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/country"
              element={data11.map((ele) => {
                return (
                  <Country
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/tropils"
              element={data12.map((ele) => {
                return (
                  <Tropical
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
            <Route
              path="/lake"
              element={data13.map((ele) => {
                return (
                  <Lakefront
                    image={ele.img}
                    place={ele.place}
                    meter={ele.meter}
                    date={ele.date}
                    price={ele.price}
                  />
                );
              })}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
