'use client'

import { Button, Link } from "@nextui-org/react";
import {HeartIcon} from '@heroicons/react/24/solid'

export default function Header() {

    return (
        <div className="fixed w-full h-20 px-16 flex justify-start items-center gap-x-4">
              <h1 className='lg:text-xl text-xl leading-relaxed font-extrabold bg-gradient-to-b from-gray-400 to-gray-300 bg-clip-text text-transparent p-2'>رشت‌لاگ</h1>
              <Button as={Link} startContent={<HeartIcon width={24} className="text-green-500"/>}>
                حمایت مالی
              </Button>
        </div>
    )

}