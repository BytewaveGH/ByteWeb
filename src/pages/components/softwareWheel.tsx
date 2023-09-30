import Link from "next/link";
import { CircularText, MoonIcon } from "./Icons";

const SoftwareWheel = () => {
    return (
        <div className=" left-4   flex items-center justify-start overflow-hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">
                {/* <CircularText className="fill-dark animate-spin-slow" /> */}
                {/* <MoonIcon className={"fill-dark animate-spin-slow"} /> */}
                <Link href={'mailto:michaelopoku790@gmail.com'} className="flex items-center justify-center absolute
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light border
            border-solid border-dark w-20 h-20 rounded-full font-semibold
            hover:bg-light hover:text-dark
            ">
                    Hire me

                </Link>

            </div>
        </div>);
}

export default SoftwareWheel;