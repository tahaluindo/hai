import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import sort from '../../assets/sort-solid.svg';

// Assets
import logo from '../../assets/cco-logo.png';
import artwork1 from '../../assets/artworks/1.svg';
import artwork2 from '../../assets/artworks/2.svg';
import artwork3 from '../../assets/artworks/3.svg';
import artwork4 from '../../assets/artworks/4.svg';
import artwork5 from '../../assets/artworks/5.svg';
import artwork6 from '../../assets/artworks/6.svg';
import artwork7 from '../../assets/artworks/7.svg';
import artwork8 from '../../assets/artworks/8.svg';
import artwork9 from '../../assets/artworks/9.svg';
import artwork10 from '../../assets/artworks/10.svg';
import artwork11 from '../../assets/artworks/11.svg';
import artwork12 from '../../assets/artworks/12.jpg';
import artwork13 from '../../assets/artworks/13.jpg';

// Components
import Item from "./Item";
import SortMenu from "./SortMenu";

export default function Artworks(props){

    const { show, setShow, setExplore } = props;

    const ccoWords = [ '@COOCAAINNE in the Gang', 'COOCAAINNE in the Chain', 'CCO IN THE GANG' ];

    const [ showSortMenu, setShowSortMenu ] = useState(false);
    const [ oldest, setOldest ] = useState(false);
    const [ word, setWord ] = useState('');

    const assetsCollection = [
        { artwork: artwork13, name: "PERSIAN", date: "Sept 5, 2021" },
        { artwork: artwork12, name: "BLOND", date: "July 1, 2021"},
        { artwork: artwork1, name: "SEGS", date: "May 9, 2021"},
        { artwork: artwork4, name: "Humble", date: "Apr 3 , 2021" },
        { artwork: artwork3, name: "Retro", date: "Feb 23, 2021" },
        { artwork: artwork2, name: "Seal", date: "Dec 25, 2020" },
        { artwork: artwork5, name: "JAPAN", date: "Sept 18, 2020" },
        { artwork: artwork6, name: "CONPIRARE", date: "July 5, 2020" },
        { artwork: artwork7, name: "Hentai", date: "June 28, 2020" },
        { artwork: artwork8, name: "Virtual", date: "June 8, 2020"},
        { artwork: artwork9, name: "Statue", date: "June 6, 2020" },
        { artwork: artwork11, name: "Arpanet", date: "May 23, 2020" },
        { artwork: artwork10, name: "Retro High", date: "April 17, 2020" }
    ];

    useEffect(() => {
        setExplore(false);
        window.document.title = 'Artworks';
        return () => window.document.title = "COOCAAINNE";
    });

    useEffect(() => {
        let index = 0;

        const change = setTimeout(() => {
            console.log(index);
            setWord(ccoWords[index]);
            index += 1;
        }, 1000);

        return () => clearTimeout(change);
    });

    function oldestSort(){
        let oldest = [];

        for(let i = assetsCollection.length; i >= 0; i--){
            oldest.push(assetsCollection[i]);
        }

        return oldest.map((artwork, index) => {
            const oldestDOM = [];

            if(index !== 0){
                oldestDOM.push(<Item key={index+1} design={artwork} />);
            }

            return oldestDOM;
        });
    }

    function newestSort(){
        return assetsCollection.map((artwork, index) => {
            return <Item key={index+1} design={artwork} />
        });
    }

    function ArtworksHandler(){
        if(showSortMenu) setShowSortMenu(false);
        if(show) setShow(false);
    }

    return (
        <div className="bg-darkcco h-full" onClick={ArtworksHandler}>
            <div className="mx-8 md:mx-24 xl:mx-32">

                <div className="flex items-center justify-between border-b border-white border-opacity-20 bg-darkcco">
                    <div className="py-5">
                        <h1 className="text-white text-2xl font-medium">Artworks</h1>
                        <p className="text-white text-sm font-light">Collections of Artworks</p>
                    </div>

                    <p className="text-white text-sm text-right">Created by <a href="https://instagram.com/coocaainne" target="_blank" rel="noreferrer" className="underline">@coocaainne</a></p>
                </div>

                <div className="py-6">
                    <div>
                        <button className="flex items-center text-sm py-3 px-2 lg:px-4 text-white border-b-0 rounded-lg hover:bg-filter" onClick={() => setShowSortMenu(showSortMenu ? false : true)}>
                            <img src={sort} width="12px" alt="sort_icon" className="mr-2" />
                            Filter Artworks
                        </button>
                    </div>

                    <SortMenu show={showSortMenu} setOldest={setOldest} setShowSortMenu={setShowSortMenu} />
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center py-20">
                    { oldest ? oldestSort() : newestSort() }
                </div>

                <footer className="flex items-center justify-between py-20">
                    <div className="w-full lg:w-max flex items-center justify-between">
                        <img src={logo} alt="Footer Logo" width="40px" />
                        <p className="mx-10 text-white text-sm">{word}</p>
                    </div>

                    <div className="hidden lg:block">
                        <a href="https://instagram.com/coocaainne" alt="instagram" className="mx-4 text-white text-sm hover:underline">Instagram</a>
                        <a href="https://behance.com/coocaainne" alt="behance" className="mx-4 text-white text-sm hover:underline">Behance</a>
                        <a href="https://dribbble.com/coocaainne" alt="dribbble" className="mx-4 text-white text-sm hover:underline">Dribbble</a>
                    </div>
                </footer>

            </div>
        </div>
    );
}