import React from "react";
import Image from "next/image";


export default function Card() {
    return (
            <div className=" max-w-[310px] text-white rounded-lg bg-gray-800 gap-3">
                <Image className="max-h-300 rounded-lg" src="/me.jpeg" alt="Headshot of Individual" width={100} height={100} layout="responsive"/>
                    <div className="p-4 flex flex-col items-center gap-3">
                        <div className="flex gap-10">
                            <button className="flex items-center gap-5 px-10 py-1 bg-gray-200 hover:bg-gray-300 rounded" onClick={() => window.location = 'mailto:alewilliam789@gmail.com'}><img class="w-10 h-10" src="https://img.icons8.com/ios-filled/50/null/secured-letter--v1.png"/></button>
                            <button className="px-10 py-1 bg-blue-600 hover:bg-blue-700 rounded" onClick={() => window.location = 'https://www.linkedin.com/in/awilliamson95/'}><img className="w-10 h-10" src="https://img.icons8.com/windows/32/000000/linkedin.png"/></button>
                        </div>
                        <div className="font-bold text-3xl">Alex Williamson</div>
                        <div className="text-xl">Software Developer</div>
                        <div className="font-bold text-2xl">About</div>
                        <p>A junior developer with a diverse background in coding spanning from
                        data analytics with Python and SQL to frontend work with HTML, CSS, and Javascript. I am currently
                        learning React.js and Next.js.
                        </p>
                    </div>
            </div>
    )
}