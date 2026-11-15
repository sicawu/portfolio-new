
import React from "react";
import { PiTreePalmDuotone } from "react-icons/pi";

function Footer() {
    return (
        <footer className="bg-darkgreen text-beige px-6 py-8">

            <div className="max-w-7xl mx-auto flex flex-col
                items-center justify-center gap-3">

                <PiTreePalmDuotone
                    size={24}
                    className="text-mint"
                    aria-hidden="true"
                />

                <p className="font-nunito text-xs text-mint/60">
                    © {new Date().getFullYear()} Simona Wurst
                </p>

            </div>
        </footer>
    );
}

export default Footer;
