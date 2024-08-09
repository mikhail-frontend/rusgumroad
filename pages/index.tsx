import React from "react";
import MainSection from "../components/MainSection/MainSection";
import GumroadBlock from "../components/GumroadBlock/GumroadBlock";
import GumroadProducts from "../components/GumroadProducts/GumroadProducts";
import HowBuy from "../components/HowBuy/HowBuy";
import CalculatorSection from "../components/СalculatorSection/CalculatorSection";
export default function RusGumroad() {
    return (
        <>
            <MainSection/>
            <GumroadBlock/>
            <GumroadProducts/>
            <HowBuy/>
            <CalculatorSection/>
        </>

    )
}
