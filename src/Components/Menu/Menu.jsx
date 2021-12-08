import { useState } from 'react';
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// Components
import Home from '../Home/Home';
import Artworks from '../Artworks/Artworks';
import ArchivedDesign from '../ArchivedDesign/ArchivedDesign';
import Design from '../Design/Design';
import About from '../About/About';

// Assets
import logo from '../../assets/cco-logo.png';
import house_icon from '../../assets/house.svg';
import x from '../../assets/X.svg';

export default function Menu(){

    const [ show, setShow ] = useState(false);
    const [ explore, setExplore ] = useState(false);

    function menuHandler(){
        if(show) setShow(false);
    }

    return (
        <Router>
            <section className="mx-auto bg-darkcco py-10" onClick={menuHandler}>
                <header className="xl:mx-32 md:mx-24 text-white flex items-center justify-between mx-8">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} width="40px" className="cursor-pointer" alt="Logo" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex flex-col lg:static lg:flex-row lg:bg-transparent lg:py-0">
                        <Link to="/artworks" className="py-2 px-6 my-2 mx-5 lg:mx-2 text-sm rounded-full text-black hover:bg-white hover:text-black lg:text-white">Artworks</Link>
                        <Link to="/archived-design" className="py-2 px-6 my-2 mx-5 lg:mx-2 text-sm rounded-full text-black hover:bg-white hover:text-black lg:text-white">Archived Design</Link>
                        <Link to="/design" className="py-2 px-6 my-2 mx-5 lg:mx-2 text-sm rounded-full text-black hover:bg-white hover:text-black lg:text-white">Design</Link>
                    </div>

                    <div className="z-20 w-screen py-2 fixed bottom-1-prcnt left-0 flex flex-col items-center justify-center">
                        {show &&
                            <div className="z-20 mb-3 right-20-screen bottom-12-prcnt bg-cco py-8 flex flex-col rounded-lg lg:static lg:flex-row lg:bg-transparent lg:py-0">
                                <Link to="/artworks" className="py-2 px-6 my-2 mx-5 text-sm rounded-full text-black hover:bg-white hover:text-black">Artworks</Link>
                                <Link to="/archived-design" className="py-2 px-6 my-2 mx-5 text-sm rounded-full text-black hover:bg-white hover:text-black">Archived Design</Link>
                                <Link to="/design" className="py-2 px-6 my-2 mx-5 text-sm rounded-full text-black hover:bg-white hover:text-black">Design</Link>
                            </div>
                        }

                        <div className="px-5 py-5 shadow-2xl rounded-full bg-cco focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white cursor-pointer lg:hidden" onClick={() => setShow(show ? false : true)}>
                            { show ? <img src={x} width="24px" alt="cross_icon" /> : <img src={house_icon} width="24px" alt="house_icon" /> }
                        </div>
                    </div>

                    <Link to="/about" className="py-2 px-8 text-sm rounded-full hover:bg-cco hover:text-black">Profile</Link>
                </header>
            </section>

            <Switch>
                <Route exact path="/">
                    { explore ? <Redirect to="/artworks" /> : <Home show={show} setShow={setShow} setExplore={setExplore} />}
                </Route>
                <Route path="/artworks">
                    <Artworks show={show} setShow={setShow} setExplore={setExplore} />
                </Route>
                <Route path="/archived-design">
                    <ArchivedDesign />
                </Route>
                <Route path="/design">
                    <Design />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}