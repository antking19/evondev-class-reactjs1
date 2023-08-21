"use client";
import { useReducer } from "react";

type DropdownValues = {
    countryList: string[];
    selectedCountry: string;
    showDropdown: boolean;
};

type DropdownActionType = {
    type?: string;
    payload?: any;
};

const dropdownReducer = (state: DropdownValues, action: DropdownActionType) => {
    switch (action.type) {
        case "IS_SHOW_DROPDOWN": {
            const { showDropdown } = action.payload;
            return {
                ...state,
                showDropdown: !showDropdown,
            };
        }

        case "SELECTED_COUNTRY": {
            const { country } = action.payload;
            return {
                ...state,
                selectedCountry: country,
                showDropdown: false,
            };
        }
    }
    return state;
};

const initialDropdownValues: DropdownValues = {
    countryList: ["Vietnam", "American", "ThaiLand"],
    selectedCountry: "Selection Country",
    showDropdown: false,
};

const Dropdown = () => {
    const [state, dispatch] = useReducer(
        dropdownReducer,
        initialDropdownValues
    );

    const handleShowCountry = () => {
        const { showDropdown } = state;

        dispatch({
            type: "IS_SHOW_DROPDOWN",
            payload: {
                showDropdown,
            },
        });
    };

    const handleSelectCountry = (country: string) => {
        const { selectedCountry, showDropdown } = state;

        dispatch({
            type: "SELECTED_COUNTRY",
            payload: {
                selectedCountry,
                showDropdown,
                country,
            },
        });
    };

    return (
        <div className="w-[200px] relative">
            <div
                className="w-full inline-flex justify-between items-center gap-2 p-3 shadow-lg rounded-md cursor-pointer border-gray-500 border outline-none"
                onClick={handleShowCountry}
            >
                <span>{state.selectedCountry} </span>{" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className={`w-4 h-4 ${
                        state.showDropdown ? "rotate-180" : ""
                    }`}
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
            {state.showDropdown ? (
                <ul className="flex flex-col shadow-lg absolute left-0 right-0 rounded-b-xl overflow-hidden">
                    {initialDropdownValues.countryList.map((country, index) => (
                        <li
                            className="px-3 py-4 hover:bg-blue-400 hover:text-white cursor-pointer"
                            key={index}
                            onClick={() => handleSelectCountry(country)}
                        >
                            {country}
                        </li>
                    ))}
                </ul>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Dropdown;
