import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import './Home.css';
import me from '../../assets/Image.svg';

export default function Home(props){

    const { 
        show, setShow,
        setExplore
    } = props;

    useEffect(() => {
        window.document.title = "Home";
        return () => window.document.title = "COOCAAINNE";
    });

    function menuHandler(){
        if(show) setShow(false);
    }

    return (
        <div className="bg-darkcco mx-auto h-screen lg:h-screen flex items-center justify-start md:h-max" onClick={menuHandler}>
            <div className="w-full mx-8 my-8 flex flex-col items-center justify-between md:mx-24 lg:my-8 lg:flex-row xl:mx-32">
                <div className="typography w-full mb-22 relative lg:mx-0 2xl:mx-20">
                    <div className="z-10 relative">
                        <h1 className="text-white font-light mb-7 leading-normal text-5xl 2xl:text-7xl lg:text-6xl">
                            <span className="text-black">W</span>elcome to<br />Koken's Crib
                        </h1>
                        <p className="text-white mb-7 font-light text-sm">What's good man ? Take a time to explore my crib.<br /></p>

                        <div className="buttons">
                            <button className="py-2 px-8 rounded-full bg-white text-sm" onClick={setExplore}>Explore</button>
                            <button className="py-2 px-8 text-white text-sm">Download CV</button>
                        </div>
                    </div>

                    <div className="rounded-full w-20 h-20 bg-cco absolute -top-2 -left-4 lg:w-20 lg:h-20 lg:-top-3 lg:-left-3 md:w-20 md:h-20"></div>
                </div>

                <img alt="me" src={me} className="w-max mx-22 my-20 2xl:w-max lg:w-400 md:w-400" />
            </div>
        </div>
    )
}