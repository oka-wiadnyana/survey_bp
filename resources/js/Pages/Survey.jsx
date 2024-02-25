import Form from "@/Components/Form";
import NameForm from "@/Components/NameForm";
import ThankYou from "@/Components/ThankYou";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Transition } from "react-transition-group";
import useSound from "use-sound";
import bloop from "/public/sound/bloop.mp3";
import game from "/public/sound/game.mp3";
import people from "/public/image/people.png";
import bg from "/public/image/bg.jpg";

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 0 },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
};

export default function Survey({ auth, questionLists }) {
    const [play] = useSound(bloop);
    // const [playGame] = useSound(game);
    const playGame = () => {
        let audio = new Audio(game);
        audio.loop = true;
        audio.play();
    };
    // const questions = [
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam architecto maiores commodi nisi in cupiditate consectetur officia quos praesentium quo. Laboriosam minus facere hic praesentium placeat. Maiores eveniet quos consectetur?",
    //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi debitis itaque blanditiis laboriosam cumque maiores labore dicta. Aperiam beatae eum consectetur possimus officiis quas dignissimos! Cupiditate velit excepturi facilis, provident, minima, vitae rerum aliquid reiciendis rem odit minus sit perspiciatis ipsum cum tempore ut eveniet unde animi quia? Impedit!",
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui eum obcaecati excepturi a repellat expedita quasi iste, aliquam distinctio alias!",
    // ];

    const questions = questionLists;
    const [disableButton, setDisableButton] = useState(false);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [playerName, setPlayerName] = useState("");
    const [selectMonth, setSelectMonth] = useState("");
    const [selectYear, setSelectYear] = useState("");
    const [answer, setAnswer] = useState([]);
    // const isShow = true;
    const [hideForm, setHideForm] = useState(true);
    const [hideNameForm, setHideNameForm] = useState(false);
    const isShow =
        currentQuestion == questions.length || hideForm ? false : true;
    const hideSibling = false;
    const [dataAnswer, setDataAnswer] = useState("");

    const [formElement, setFormElement] = useState({
        Ya: true,
        Sering: true,
        Kurang: true,
        Tidak: true,
    });
    const [popUp, setPopUp] = useState(false);

    const clickAnswer = (data) => {
        setFormElement({
            ...formElement,
            Ya: false,
            Sering: false,
            Kurang: false,
            Tidak: false,
            [data]: true,
        });

        setDataAnswer(data);

        setDisableButton(true);
        setPopUp(true);

        setTimeout(async () => {
            setAnswer([...answer, data]);

            const animate = (anim) =>
                new Promise((resolve) => {
                    setInProp(true);
                    resolve(true);
                });
            await animate();
            await new Promise((r) => setTimeout(r, 1000));
            setInProp(false);
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setFormElement({
                ...formElement,
                Ya: true,
                Sering: true,
                Kurang: true,
                Tidak: true,
            });
            setDisableButton(false);
            setPopUp(false);
            if (currentQuestion == questions.length - 1) {
                setInProp2(true);
                storeData();
            }
        }, 1000);
    };
    console.log(currentQuestion);

    const [inProp, setInProp] = useState(false);
    const [inProp2, setInProp2] = useState(false);
    const nodeRef = useRef(null);

    useEffect(() => {
        if (currentQuestion == questions.length) {
            storeData();
        }
    }, [currentQuestion, answer]);

    const storeData = () => {
        router.post("/insert_survey", {
            playerName: playerName,
            month: selectMonth,
            year: selectYear,
            answer: answer,
        });
    };

    return (
        <>
            <Head title="Dashboard" />

            <div
                className="bg-cover h-screen flex flex-col justify-center bg-fuchsia-700 shrink-0 items-center"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: `center`,
                }}
            >
                <div className="flex flex-col items-center">
                    <img
                        className="hidden md:block w-[15%]"
                        src={people}
                        alt=""
                        width=""
                    />
                    <div className="font-extrabold text-white text-4xl md:text-5xl my-2 text-center">
                        Survey Budaya Kerja
                    </div>
                </div>
                {!hideNameForm ? (
                    <NameForm
                        setPlayerName={setPlayerName}
                        setSelectMonth={setSelectMonth}
                        setSelectYear={setSelectYear}
                        setHideForm={setHideForm}
                        setHideNameForm={setHideNameForm}
                        playBloop={play}
                        playerName={playerName}
                        selectMonth={selectMonth}
                        selectYear={selectYear}
                        playGame={playGame}
                    />
                ) : (
                    ""
                )}

                {/* <button onClick={clickAnswer}>Click</button> */}
                {isShow ? (
                    <Transition
                        nodeRef={nodeRef}
                        in={inProp}
                        timeout={duration}
                    >
                        {(state) => (
                            <div
                                className="w-[100%] z-10"
                                ref={nodeRef}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state],
                                }}
                            >
                                <Form
                                    question={questions[currentQuestion]}
                                    show={isShow}
                                    clickAnswer={clickAnswer}
                                    incrementForm={currentQuestion}
                                    formElement={formElement}
                                    playBloop={play}
                                    disableButton={disableButton}
                                    currentQuestion={currentQuestion}
                                    questions={questions}
                                />
                            </div>
                        )}
                    </Transition>
                ) : (
                    ""
                )}

                {popUp ? (
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                        <div className="bg-fuchsia-500 border-2  px-8 py-5 rounded-lg text-white">
                            {dataAnswer == "Ya"
                                ? "+400"
                                : dataAnswer == "Sering"
                                ? "+300"
                                : dataAnswer == "Kurang"
                                ? "+200"
                                : "+100"}
                        </div>
                    </div>
                ) : (
                    ""
                )}

                <ThankYou inProp2={inProp2} />
            </div>
        </>
    );
}
