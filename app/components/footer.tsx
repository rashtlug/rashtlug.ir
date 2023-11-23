import { Button } from "@nextui-org/react";


export default function Footer() {

    return (
        <div className=" h-40 lg:mt-20 mt-40 py-4 flex flex-col lg:flex-row justify-center items-center gap-y-7 bg-black">
            <div className=" lg:border-l-1 border-gray-500 px-10">
                <p className="text-gray-400 lg:w-[40ch]">رشت لاگ بسیار عالیه بخدا ما بهترین کامیونیتی هستیمرشت لاگ بسیار عالیه بخدا ما بهترین کامیونیتی sadasdasdasda کامیونیتی هستیم</p>
            </div>
            <div className="h-20 flex justify-center items-center gap-x-4 lg:border-l-1 border-gray-500 px-10">
                <Button>یه دکمه</Button>
                <Button>یه دکمه</Button>
                <Button>یه دکمه</Button>
            </div>
            <div className=" lg:border-l-1 border-gray-500 px-10">
                <p className="text-gray-400 lg:w-[40ch]">رشت لاگ بسیار عالیه بخدا ما بهترین کامیونیتی هستیمرشت لاگ بسیار عالیه بخدا ما بهترین کامیونیتی sadasdasdasda کامیونیتی هستیم</p>
            </div>
        </div>
    )

}