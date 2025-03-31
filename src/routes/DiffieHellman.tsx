import { useState } from "react";
import { KeyIcon, UserIcon } from "@heroicons/react/24/outline";
import { powMod } from "../utils/math";

const DiffieHellman = () => {

    const [information, setInformation] = useState({
        public_information_p: 23,
        public_information_g: 5,
        random_number_a: 4,
        random_number_b: 3,
    });

    const computeResults = (info: typeof information) => {
        const { public_information_p: p, public_information_g: g, random_number_a: a, random_number_b: b } = info;
        const publicKeyA = powMod(g, a, p);
        const publicKeyB = powMod(g, b, p);
        const sharedSecretKeyA = powMod(publicKeyB, a, p);
        const sharedSecretKeyB = powMod(publicKeyA, b, p);
        return { publicKeyA, publicKeyB, sharedSecretKeyA, sharedSecretKeyB };
    };

    const [result, setResult] = useState(computeResults(information));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newInfo = { ...information, [name]: Number(value) };
        setInformation(newInfo);
        setResult(computeResults(newInfo));
    };

    return (
        <div className="flex flex-col items-center justify-start h-full bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Diffie-Hellman Key Exchange</h1>
            <div className="mt-4 p-4 bg-white shadow-md rounded-md w-full max-w-3xl">
                <form className="max-w-md mx-auto">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                step={1}
                                min={1}
                                defaultValue={information.public_information_p}
                                max={1000000}
                                name="public_information_p"
                                id="public_information_p"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="public_information_p"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Public Information p
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                step={1}
                                min={1}
                                defaultValue={information.public_information_g}
                                max={1000000}
                                name="public_information_g"
                                id="public_information_g"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="public_information_g"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Public Informaition g
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">

                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                min={1}
                                max={1000000}
                                defaultValue={information.random_number_a}
                                name="random_number_a"
                                id="random_number_a"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="random_number_a"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Rondom Number a
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="number"
                                min={1}
                                max={1000000}
                                defaultValue={information.random_number_b}
                                name="random_number_b"
                                id="random_number_b" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                                onChange={handleChange}
                            />
                            <label
                                htmlFor="random_number_b"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Rondom Number b
                            </label>
                        </div>
                    </div>
                </form>
                <div className="mt-4 flex flex-row justify-between py-3 shadow-md border-1 rounded-md bg-gray-50 border-gray-300">
                    <div className="flex flex-col items-center justify-start h-full p-4">
                        <UserIcon
                            className="h-10 w-10 text-pink-500 mb-2 mt-6"
                        />
                        <h2 className="text-xl font-semibold mb-2">Alice</h2>
                        <KeyIcon className="h-10 w-10 text-red-500 mb-2" />
                        <span className="text-red-500 text-sm text-center">
                            a = {information.random_number_a}
                        </span>
                        <p className="text-gray-700 mb-2 text-sm text-center">
                            2. Alice combines her secret key (a) with the parameters and sends the resulting public key (A) to Bob.
                        </p>
                        <KeyIcon className="h-10 w-10 text-yellow-300 mb-2" />
                        <p
                            className="text-blue-600 mb-2 text-sm text-center"
                        >
                            {/* using math expresions */}
                            A = {information.public_information_g}<sup className="text-red-500">{information.random_number_a}</sup> mod {information.public_information_p} = {result.publicKeyA}
                        </p>
                        <p className="text-gray-700 mb-2 text-sm text-center">
                            4. Alice combines (B) with her secret key (a)
                        </p>
                        <KeyIcon className="h-10 w-10 text-red-500 mb-2" />
                        <p
                            className="text-blue-600 mb-10 text-sm text-center"
                        >
                            <span className="text-red-500">s</span> = {information.public_information_g}<sup className="text-red-500">{information.random_number_b}</sup> mod {information.public_information_p} = <span className="text-red-500">{result.sharedSecretKeyA}</span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-between min-h-full p-4 border-x-2 border-gray-300">
                        <div>
                            <h2 className="text-lg text-nowrap font-semibold mb-2 text-center">Public Channel</h2>
                            <p className="text-gray-700 mb-2 text-sm text-center">
                                1. Alice and Bob agree on a public parameters.
                            </p>
                            <p className="text-blue-600 mb-2 text-sm text-center">
                                p = {information.public_information_p},
                                g = {information.public_information_g}
                            </p>
                        </div>
                        <p className="text-gray-700 mb-2 text-sm text-center">
                            6. The shared secret key (S) is now known to both Alice and Bob.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-start h-fulls p-4">
                        <UserIcon
                            className="h-10 w-10 text-blue-500 mb-2 mt-6"
                        />
                        <h2 className="text-xl font-semibold mb-2">Bob</h2>
                        <KeyIcon className="h-10 w-10 text-red-500 mb-2" />
                        <span className="text-red-500">b = {information.random_number_b}</span>
                        <p className="text-gray-700 mb-2 text-sm text-center">
                            3. Bob combines his secret key (b) with the parameters and sends the resulting public key (B) to Alice.
                        </p>
                        <KeyIcon className="h-10 w-10 text-purple-600 mb-2" />
                        <p
                            className="text-blue-600 mb-2 text-sm text-center"
                        >
                            B = {information.public_information_g}<sup className="text-red-500">{information.random_number_b}</sup> mod {information.public_information_p} = {result.publicKeyB}
                        </p>
                        <p className="text-gray-700 mb-2 text-sm text-center">
                            5. Bob combines (A) with his secret key (b)
                        </p>
                        <KeyIcon className="h-10 w-10 text-red-500 mb-2" />
                        <p
                            className="text-blue-600 mb-10 text-sm text-center"
                        >
                            <span className="text-red-500">s</span> = {information.public_information_g}<sup className="text-red-500">{information.random_number_a}</sup> mod {information.public_information_p} = <span className="text-red-500">{result.sharedSecretKeyB}</span>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default DiffieHellman;