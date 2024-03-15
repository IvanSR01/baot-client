export const Pagination = () => {
    return (
        <div className="flex flex-col items-center">
            <button className="text-[#00748C] font-semibold text-[1.125rem] leading-[21.6px] tracking-1% underline mb-[12px]">Показать еще</button>
            <div className="flex gap-[15px]">
                <button className="font-semibold tracking-2% leading-[23px] text-[#00748C]">1</button>
                <button className="font-semibold tracking-2% leading-[23px] text-[#728487]">2</button>
                <button className="font-semibold tracking-2% leading-[23px] text-[#728487]">3</button>
                <button className="font-semibold tracking-2% leading-[23px] text-[#728487]">4</button>
                <button className="font-semibold tracking-2% leading-[23px] text-[#728487]">...</button>
                <button className="font-semibold tracking-2% leading-[23px] text-[#728487] ml-[5px]">65</button>
            </div>
        </div>
    )
}