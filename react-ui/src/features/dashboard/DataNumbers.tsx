import React from "react";

const DataNumbers: React.FC = () => {

    const data = {
        'currency': '€',

        'net-worth': '2.000,00',

        'percent': '0,47',
        'percent-color': '+',

        'cash': '2.000,00',
        'holdings': '2.000,00',

        'price-gains': '54,70',
        'price-gains-color': '+',

        'internal-rate-of-return': '4,05',
        'internal-rate-of-return-color': '+',

        'dividends': '4,40',

        'realized-profits': '83,98',
        'realized-profits-color': '+',
    }

    return(
        <>
        <div className="h-[30%] flex flex-col">
            <div>
                <p className="text-[14px] font-semibold leading-[22px] text-gray-4">Current Networth</p>
            </div>
            <div className="flex flex-row h-[34px] gap-5">
                <p className="text-[26px] font-semibold leading-[34px]">{data['net-worth']}{data['currency']}</p>
                <p className={`${data['percent-color'] === '+' ? 'text-green-400 bg-green-600 border-green-400' : 'text-red-400 bg-red-600 border-red-400'}  border-[1px] rounded-md bg-opacity-25 p-1 text-[14px] font-medium leading-[22px]`}>{data['percent-color'] === '+' ? '+' : ''}{data['percent']}%</p>
            </div>            
        </div>

        <div className="h-[70%] grid grid-rows-3 grid-cols-2">

            <div className="order 1">
                <p className="text-[14px] font-semibold leading-[22px] text-gray-4">Cash</p>
                <p className="text-[16px] font-medium leading-[24px]">{data['cash']}{data['currency']}</p>
            </div>

            <div className="order 2">
                <p className="text-[14px] font-semibold leading-[22px] text-gray-4">Holdings</p>
                <p className="text-[16px] font-medium leading-[24px]">{data['holdings']}{data['currency']}</p>
            </div>

            <div className="order 3">
                <p className="text-[14px] font-semibold leading-[22px] text-gray-4">Price gains</p>
                <p className={`${data['price-gains-color'] === '+' ? 'text-green-400' : 'text-red-400'} text-[16px] font-medium leading-[24px]`}>{data['price-gains']}{data['currency']}</p>
            </div>

            <div className="order 4">
                <p className="text-[14px] font-semibold leading-[22px] text-gray-4">IRR</p>
                <p className={`${data['internal-rate-of-return-color'] === '+' ? 'text-green-400' : 'text-red-400'} text-[16px] font-medium leading-[24px]`}>{data['internal-rate-of-return-color'] === '+' ? '+' : ''}{data['internal-rate-of-return']}%</p>
            </div>

            <div className="order 5">
                <p className="text-[14px] font-semibold leading-[22px] text-gray-4">Dividends</p>
                <p className="text-green-400 text-[16px] font-medium leading-[24px]">{data['dividends']}{data['currency']}</p>
            </div>

            <div className="order 6">
                <p className="text-[14px] font-semibold leading-[22px] text-gray-4">Realized profits</p>
                <p className={`${data['realized-profits-color'] === '+' ? 'text-green-400' : 'text-red-400'} text-[16px] font-medium leading-[24px]`}>{data['realized-profits']}{data['currency']}</p>
            </div>
        </div>
        </>
    )

}

export default DataNumbers