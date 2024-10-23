export const TwoBigs=({children})=>{
    return <div className="min-h-screen w-full grid grid-cols-[1fr_1fr]">
        <div className="bg-white flex justify-center items-center">
        {children}
        </div>
        <div className="bg-[#0166FF]">
        </div>
    </div>
}