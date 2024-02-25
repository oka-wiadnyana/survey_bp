import { Transition } from "react-transition-group";
import { useRef } from "react";
import { Link } from "@inertiajs/react";

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

export default function ThankYou({ inProp2 }) {
    const nodeRef = useRef(null);
    return (
        <Transition nodeRef={nodeRef} in={inProp2} timeout={duration}>
            {(state) => (
                <div
                    className="absolute bottom-[50%] left-[50%] bg-fuchsia-700 w-[90%] md:px-0 px-3 md:w-[40%] h-[30%] -translate-x-1/2 translate-y-1/2 border-4 rounded-[25px] flex flex-col items-center justify-center z-9 "
                    ref={nodeRef}
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                >
                    <div className="md:text-8xl text-5xl text-white font-bold">
                        Thank You!
                    </div>
                    <div className="bg-blue-500 text-xl text-white  shadow-lg rounded-[5px] px-4 py-2 mt-2">
                        <Link clasName="" href={route("survey")}>
                            Kembali
                        </Link>
                    </div>
                </div>
            )}
        </Transition>
    );
}
