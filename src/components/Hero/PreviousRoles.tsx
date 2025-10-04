"use client"


import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip'
import Link from 'next/link';
import { HiExternalLink } from "react-icons/hi";
import GlassSurface from "@/components/GlassSurface"
import { useEffect, useState } from "react";
import { cn, delayStart } from '@/lib/utils';

export default function PreviousRoles() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delayStart); // 8 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        // <GlassSurface
        //         displace={15}
        //         distortionScale={-150}
        //         redOffset={5}
        //         greenOffset={15}
        //         blueOffset={25}
        //         brightness={60}
        //         opacity={0.8}
        //         mixBlendMode="screen"
        //         width={400}
        //         className='absolute flex flex-row top-1/2 translate-y-24 w-full *:justify-around items-center pt-2 px-8'
        //     > 
        <div className={cn('absolute flex flex-col top-1/2 translate-y-24 sm:w-72 w-80 justify-center gap-2 items-center transition-opacity duration-1000 ease-in-out', isVisible ? 'opacity-100' : 'opacity-0')}>
            {/* First row - 3 icons */}
            {/* <div className="hidden sm:flex flex-row gap-2 items-center">
                <Link href="https://newsroom.spotify.com/" target="_blank" rel="noopener noreferrer" passHref>
                    <Tooltip>
                        <TooltipTrigger>
                            <PreviousRolesIcons role="Spotify" />
                        </TooltipTrigger>
                        <TooltipContent className="w-48 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <p>Previously at Spotify, Backend Engineering Intern on the App Releases Team</p>
                                <HiExternalLink fontSize={16} />
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </Link>
                <Link href="https://focusrite.com/software/focusrite-control-2" target="_blank" rel="noopener noreferrer" passHref>
                    <Tooltip>
                        <TooltipTrigger>
                            <PreviousRolesIcons role="Focusrite" />
                        </TooltipTrigger>
                        <TooltipContent className="w-48 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <p>Previously at Focusrite, Backend C++ Software Developer Placement on the FC2 Software Team</p>
                                <HiExternalLink fontSize={16} />
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </Link>
                <Link href="https://groovs.app/" target="_blank" rel="noopener noreferrer" passHref>
                    <Tooltip>
                        <TooltipTrigger>
                            <PreviousRolesIcons role="Groovs" />
                        </TooltipTrigger>
                        <TooltipContent className="w-48 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <p>Previously at Groovs, Full Stack Software Developer Contractor</p>
                                <HiExternalLink fontSize={16} />
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </Link>
            </div> */}

            {/* Second row - 2 icons */}
            <div className="flex flex-row gap-2 items-center">
                <Link href="https://github.com/AbhinavDwarapu" target="_blank" rel="noopener noreferrer" passHref>
                    <Tooltip>
                        <TooltipTrigger>
                            <PreviousRolesIcons role="Github" />
                        </TooltipTrigger>
                        <TooltipContent className="w-48 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <p>Check out the rest of my work here</p>
                                <HiExternalLink fontSize={16} />
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </Link>
                <Link href="https://www.linkedin.com/in/abhinav-dwarapu/" target="_blank" rel="noopener noreferrer" passHref>
                    <Tooltip>
                        <TooltipTrigger>
                            <PreviousRolesIcons role="LinkedIn" />
                        </TooltipTrigger>
                        <TooltipContent className="w-48 text-center">
                            <div className="flex flex-col items-center justify-center gap-1">
                                <p>Connect with me on LinkedIn</p>
                                <HiExternalLink fontSize={16} />
                            </div>
                        </TooltipContent>
                    </Tooltip>
                </Link>
            </div>
        </div>
        // </GlassSurface>
    );
}

function PreviousRolesIcons({ role }: { role: string }) {

    let source = "";
    switch (role) {
        case "Spotify":
            source = "/roles/spotify_logo.png";
            break;
        case "Focusrite":
            source = "/roles/focusrite_logo.png";
            break;
        case "Groovs":
            source = "/roles/groovs_logo.svg";
            break;
        case "Github":
            source = "/github-mark.svg";
            break;
        case "LinkedIn":
            source = "/LinkedIn_logo.png";
            break;
    }

    return (
        <div className='flex items-center justify-center border-2 border-dashed aspect-square p-2 rounded-xl bg-white hover:bg-gray-100 transition-colors'>
            <Image
                src={source}
                width={42}
                height={42}
                alt={role}
                style={{ objectFit: "contain" }}
            />
        </div>

    );
}   