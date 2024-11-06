import CountUp from "react-countup";
import { useVisibility } from "../../hooks/useVisibility"; // Caminho para o hook

interface IWhatWeDoNumbersProps {
    imgNumber: string;
    numberDescription: string;
    number: number;
    suffix?: string;
    start: number;
}

export const WhatWeDoNumbers = ({
    imgNumber,
    number,
    numberDescription,
    suffix = "",
    start
}: IWhatWeDoNumbersProps) => {
    const { isVisible, elementRef } = useVisibility(0.2);

    return (
        <div ref={elementRef} className="text-center">
            <div className="flex justify-center pb-1">
                <img src={imgNumber} alt={numberDescription} />
            </div>

            <p>{numberDescription}</p>

            <h3 className="text-3xl pt-4 font-semibold text-green-variant">
                {isVisible && (
                    <CountUp
                        start={0}
                        end={number}
                        duration={1.5}
                        separator="."
                        suffix={suffix}
                        startVal={start}
                    />
                )}
            </h3>
        </div>
    );
};
