import React, { useState } from "react";

type TabProps<T> = {
    countryList: T[];
};

function Dropdown<T>(props: TabProps<string>) {
    const [isShowDropdown, setIsShowDropdown] = useState(false);
    const [selectCountry, setSelectCountry] = useState("Select Country");

    const { countryList } = props;

    const downIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );

    const handleShowDropdown = () => {
        setIsShowDropdown(!isShowDropdown);
    };

    const handleSelectCountry = (country: string) => {
        setSelectCountry(country);
        setIsShowDropdown(false);
    };

    if (!countryList || countryList.length <= 0) return;

    return (
        <div className="p-7">
            <div className="min-w-[200px] inline-block">
                <div
                    className="dropdown-select inline-flex justify-between items-center gap-1 py-3 px-4 rounded-md w-full border-blue-500 border-2 cursor-pointer"
                    onClick={handleShowDropdown}
                >
                    <span>{selectCountry}</span> {downIcon}
                </div>
                {isShowDropdown ? (
                    <div className="shadow-xl rounded-b-md">
                        {countryList.map((country, index) => (
                            <div
                                className="dropdown-item  py-5 px-4 hover:bg-gray-300 border-b-2 cursor-pointer"
                                key={index}
                                onClick={() => handleSelectCountry(country)}
                            >
                                {country}
                            </div>
                        ))}
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default Dropdown;
