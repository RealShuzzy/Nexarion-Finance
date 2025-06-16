import React from "react";

const DataNumbers: React.FC = () => {

    const data = {
        'currency': '€',

        'net-worth': '2.000,00',

        'percent': '-0,47',
        'percent-color': '-',

        'cash': '2.000,00',
        'holdings': '2.000,00',

        'price-gains': '54,70',
        'price-gains-color': '+',

        'internal-rate-of-return': '-4,05',
        'internal-rate-of-return-color': '-',

        'dividends': '4,40',

        'realized-profits': '-83,98',
        'realized-profits-color': '-',
    }

    return(
        <>
        <div className="bg-gray-9 h-[30%] flex font-[Outfit,Arial,Helvetica,sans-serif]">
            <div>
                <p className="text-[14px] font-semibold leading-[22px] text-white/50">Current Networth</p>
                <p className="text-[26px] font-semibold leading-[34px]">{data['net-worth']}{data['currency']}</p>
            </div>
            <div>
                <p className={`${data['percent-color'] === '+' ? 'text-green-300' : 'text-red-400'}`}>{data['percent']}%</p>
            </div>            
        </div>

        <div className="h-[70%] grid grid-rows-3 grid-cols-2">

            <div className="order 1">
                <p className="text-[14px] font-semibold leading-[22px] text-white/50">Cash</p>
                <p>{data['cash']}{data['currency']}</p>
            </div>

            <div className="order 2">
                <p className="text-[14px] font-semibold leading-[22px] text-white/50">Holdings</p>
                <p>{data['holdings']}{data['currency']}</p>
            </div>

            <div className="order 3">
                <p className="text-[14px] font-semibold leading-[22px] text-white/50">Price gains</p>
                <p className={`${data['price-gains-color'] === '+' ? 'text-green-300' : 'text-red-400'}`}>{data['price-gains']}{data['currency']}</p>
            </div>

            <div className="order 4">
                <p className="text-[14px] font-semibold leading-[22px] text-white/50">Internal rate of return</p>
                <p className={`${data['internal-rate-of-return-color'] === '+' ? 'text-green-300' : 'text-red-400'}`}>{data['internal-rate-of-return']}%</p>
            </div>

            <div className="order 5">
                <p className="text-[14px] font-semibold leading-[22px] text-white/50">Dividends</p>
                <p className="text-green-300">{data['dividends']}{data['currency']}</p>
            </div>

            <div className="order 6">
                <p className="text-[14px] font-semibold leading-[22px] text-white/50">Realized profits</p>
                <p className={`${data['realized-profits-color'] === '+' ? 'text-green-300' : 'text-red-400'}`}>{data['realized-profits']}{data['currency']}</p>
            </div>
        </div>
        </>
    )

}

export default DataNumbers