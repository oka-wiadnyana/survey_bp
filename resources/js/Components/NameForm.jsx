import { Link } from "@inertiajs/react";

import { useRef } from "react";
import { useState } from "react";
import moment from "moment/moment";
import "moment/locale/id";

export default function NameForm({
    playerName,
    selectMonth,
    selectYear,
    setPlayerName,
    setSelectMonth,
    setSelectYear,
    setHideForm,
    setHideNameForm,
    playBloop,
    playGame,
}) {
    const months = [];
    moment.locale("id");
    for (let i = 1; i <= 12; i++) {
        months.push(moment(i, "MM").format("MMMM"));
    }

    const years = [];
    for (let i = 0; i < 10; i++) {
        years.push(parseInt(moment().format("Y")) - i);
    }

    return (
        <div className="z-10 w-[90%] md:w-[50%] max-w-7xl mx-auto sm:px-6 lg:px-8 text-xl">
            <div className="bg-fuchsia-700 overflow-hidden shadow-xl sm:rounded-lg focus:ring-0 ">
                <div className="p-6 text-white">
                    Masukkan nama anda dan periode survey
                </div>
            </div>
            <input
                className="border-0 p-2 w-[100%] rounded-lg border focus:border-teal focus:border-2 mt-2"
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Nama"
            />
            <select
                className="border-0 p-2 w-[100%] rounded-lg border focus:border-teal focus:border-2 mt-2"
                name=""
                id=""
                defaultValue=""
                onChange={(e) => setSelectMonth(e.target.value)}
            >
                <option value="" disabled>
                    Pilih bulan
                </option>
                {months.map((month, index) => {
                    return (
                        <option key={index} value={index + 1}>
                            {month}
                        </option>
                    );
                })}
            </select>
            <select
                className="border-0 p-2 w-[100%] rounded-lg border focus:border-teal focus:border-2 mt-2 "
                name=""
                id=""
                defaultValue=""
                onChange={(e) => setSelectYear(e.target.value)}
            >
                <option value="">Pilih tahun</option>
                {years.map((year) => {
                    return (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    );
                })}
            </select>
            <div
                className={`${
                    (!playerName, !selectMonth, !selectYear)
                        ? "bg-blue-500"
                        : "bg-blue-700"
                }  overflow-hidden shadow-xl sm:rounded-lg mt-2`}
            >
                <button
                    onClick={() => {
                        setHideForm(false);
                        setHideNameForm(true);
                        playBloop();
                        playGame();
                    }}
                    className="w-[100%]"
                    disabled={(!playerName, !selectMonth, !selectYear)}
                >
                    <div className="p-6 text-white ">Ayo Mulai! </div>
                </button>
            </div>
        </div>
    );
}
