import { Link } from "@inertiajs/react";

import { useRef } from "react";
import { useState } from "react";

export default function Form({
    question,
    isShow,
    clickAnswer,
    incrementForm,
    formElement,
    playBloop,
    disableButton,
    currentQuestion,
    questions,
}) {
    return (
        <div className="w-[90%] md:w-[50%] max-w-7xl mx-auto sm:px-6 lg:px-8 text-xl">
            <div className="bg-fuchsia-700 overflow-hidden shadow-xl sm:rounded-lg ">
                <div className="mt-2 text-center text-white">
                    <i>
                        {currentQuestion + 1}/{questions.length}
                    </i>
                </div>
                <div className="p-6 text-white">{question.question}</div>
            </div>

            <div
                className={`${
                    formElement.Ya ? "visible" : "invisible"
                } bg-blue-700 overflow-hidden shadow-xl sm:rounded-lg mt-2`}
            >
                <button
                    onClick={() => {
                        clickAnswer("Ya");
                        playBloop();
                    }}
                    className="w-[100%]"
                    disabled={disableButton}
                >
                    <div className="p-6 text-white ">Ya </div>
                </button>
            </div>

            <div
                className={`${
                    formElement.Sering ? "visible" : "invisible"
                } bg-blue-700 overflow-hidden shadow-xl sm:rounded-lg mt-2`}
            >
                <button
                    onClick={() => {
                        clickAnswer("Sering");
                        playBloop();
                    }}
                    className="w-[100%]"
                >
                    <div className="p-6 text-white ">Sering </div>
                </button>
            </div>

            <div
                className={`${
                    formElement.Kurang ? "visible" : "invisible"
                } bg-blue-700 overflow-hidden shadow-xl sm:rounded-lg mt-2`}
            >
                <button
                    onClick={() => {
                        clickAnswer("Kurang");
                        playBloop();
                    }}
                    className="w-[100%]"
                >
                    <div className="p-6 text-white ">Kurang </div>
                </button>
            </div>

            <div
                className={`${
                    formElement.Tidak ? "visible" : "invisible"
                } bg-blue-700 overflow-hidden shadow-xl sm:rounded-lg mt-2`}
            >
                <button
                    onClick={() => {
                        clickAnswer("Tidak");
                        playBloop();
                    }}
                    className="w-[100%]"
                >
                    <div className="p-6 text-white ">Tidak </div>
                </button>
            </div>
        </div>
    );
}
