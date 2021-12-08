import { useEffect } from "react";
import "tailwindcss/tailwind.css";

export default function ArchivedDesign(props){

    useEffect(() => {
        window.document.title = "Archived Design";

        return () => window.document.title = "COOCAAINNE";
    });

    return (
        <div className="bg-darkcco h-screen">
            <div className="h-400 flex flex-col items-center justify-center mx-32">
                <h1 className="text-white text-md flex flex-col items-center">
                    <p>On Working!</p> <br />
                    <span className="font-mono font-medium text-black bg-white px-4 py-2 rounded-md">Archived Design</span>
                </h1>
                <p className="mt-10 text-sm font-ligth text-white text-center">I need to research the design for this page. <br />You see this because there is no design to show.</p>
            </div>
        </div>
    )
}