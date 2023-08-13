"use client";
import Dropdown from "@/components/dropdown/Dropdown";
import { useState } from "react";

type TCountry = "VietNam" | "American" | "ThaiLand";

export default function Home() {
    const countryList: TCountry[] = ["VietNam", "American", "ThaiLand"];

    return (
        <>
            <Dropdown countryList={countryList}></Dropdown>
        </>
    );
}
