import { useState, useEffect } from 'react';
import "tailwindcss/tailwind.css";

// Assets
import me from '../../assets/Me.svg';

export default function About(props){

    useEffect(() => {
        window.document.title = "CCO's Profile";
        return () => window.document.title = "COOCAAINNE";
    });

    const [ desc, setDesc ] = useState('');
    const [ graphicActive, setGraphicActive ] = useState(false);
    const [ uiActive, setUIActive ] = useState(false);
    const [ feActive, setFEActive ] = useState(false);

    function GraphicDesignHandler(){
        // Set indicator active & inactive
        if(uiActive) setUIActive(false);
        if(feActive) setFEActive(false);
        setGraphicActive(true);

        const theDesc = <p className="px-2 lg:px-12 text-white text-sm">Hi! my name is <span className="font-mono px-2 rounded-sm text-black bg-cco">Gunawan Cipta</span><br/>
        I’ve been doing graphic design since 3 years ago.
        <br />
        <br />
        if you don’t know my instagram, you can click that follow button
        i made cool stuff there</p>

        setDesc(theDesc);
    }

    function UIDesignHandler(){
        // Set indicator active & inactive
        if(graphicActive) setGraphicActive(false);
        if(feActive) setFEActive(false);
        setUIActive(true);

        const theDesc = <p className="px-2 lg:px-12 text-white text-sm">Before i create this site i need to design the UI & UX to make better user experience and interface.<br /><br />
        The tools for help me designing is: <br /> <span className="px-2 rounded-sm text-black bg-cco">- Figma</span></p>

        setDesc(theDesc);
    }

    function FrontEndDevHandler(){
        // Set indicator active & inactive
        if(graphicActive) setGraphicActive(false);
        if(uiActive) setUIActive(false);
        setFEActive(true);

        const theDesc = <p className="px-2 lg:px-12 text-white text-sm">After design the web page, I need to slicing the design into code. So you can interact with it.<br /><br />
        The tools for help me developing are: <br /><br /><span className="px-2 rounded-sm text-black bg-cco">- React JS</span> for helping me structure the code & development <br /><span className="px-2 rounded-sm text-black bg-cco">- Tailwind CSS</span> for helping me slicing & styling the page</p>

        setDesc(theDesc);
    }

    return (
        <div className="bg-darkcco h-screen">
            <div className="h-600 flex flex-col justify-start lg:justify-center items-center mx-8 lg:mx-32">

                <div className="w-full lg:w-600 flex flex-col items-center">
                    <div className="w-full lg:px-14 profile-top flex items-start justify-between md:w-400 md:justify-around">
                        <img src={me} alt="My self" width="150px" className="w-100 p-1 mr-4 md:w-150 lg:w-150 lg:mr-10 rounded-full border-0 border-transparent ring-2 ring-cco ring-offset-3 outline-none" />

                        <div className="w-full">
                            <p className="text-sm text-white font-light">People know me as</p>
                            <a href="https://instagram.com/coocaainne" target="_blank" rel="noreferrer" className="my-2 text-2xl lg:text-3xl text-white font-bold hover:underline">COOCAAINNE</a>

                            <div className="flex flex-col items-start lg:flex-row lg:items-center justify-center my-3">
                                <p className="w-full text-gray-500 text-left font-light text-sm mr-4">Graphic Designer</p>
                                <p className="w-full text-gray-500 text-left font-light text-sm mr-4">Front End Dev</p>
                                <p className="w-full text-gray-500 text-left font-light text-sm">UI Designer</p>
                            </div>

                            <div className="flex items-center">
                                <a href="https://instagram.com/coocaainne" target="_blank" rel="noreferrer" className="w-full py-2 px-5 md:px-6 lg:px-8 bg-blue-500 text-sm font-medium text-white rounded-md mr-2">Follow</a>
                                <a href="mailto:gnwncpta@gmail.com" className="w-full py-2 px-5 md:px-6 lg:px-8 bg-transparent border border-gray-400 text-sm text-center text-gray-400 rounded-md hover:text-black hover:bg-white hover:border-transparent">Email</a>
                            </div>
                        </div>
                    </div>

                    <div className="profile-down h-300 w-screen mt-20 md:w-full">
                        <div className="px-5 border-b border-white border-opacity-20 lg:px-0 flex items-end md:items-center justify-between">
                            {graphicActive ? <button className="h-80 px-3 text-white text-left lg:text-center text-sm w-full border-b-2 border-opacity-70" onClick={GraphicDesignHandler}>Graphic Design</button> : <button className="h-80 px-3 text-white text-left lg:text-center text-sm w-full border-b-2 border-opacity-0" onClick={GraphicDesignHandler}>Graphic Design</button>}
                            {uiActive ? <button className="h-80 px-3 text-white text-center lg:text-center text-sm w-full border-b-2 border-opacity-70" onClick={UIDesignHandler}>UI Design</button> : <button className="h-80 px-3 text-white text-center lg:text-center text-sm w-full border-b-2 border-opacity-0" onClick={UIDesignHandler}>UI Design</button>}
                            {feActive ? <button className="h-80 px-3 text-white text-left lg:text-center text-sm w-full border-b-2 border-opacity-70" onClick={FrontEndDevHandler}>Front End Dev</button> : <button className="h-80 px-3 text-white text-left lg:text-center text-sm w-full border-b-2 border-opacity-0" onClick={FrontEndDevHandler}>Front End Dev</button>}
                        </div>

                        <div className="mt-10 px-5 lg:px-0">
                            {desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}