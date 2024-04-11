import React from "react"
import { PiTreePalmDuotone } from "react-icons/pi"

function Footer() {
    return (
        <>
            <div className="bottom-0 mt-1 flex justify-center items-center gap-3 text-sm font-gilda shadow">
                <PiTreePalmDuotone size={20} />
                <p>Simona Wurst, 2024</p>
                <PiTreePalmDuotone size={20} />
            </div>
        </>
    )
}

export default Footer