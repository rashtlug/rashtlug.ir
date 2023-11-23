'use client'

import React, { useEffect } from "react"
import { format, subDays } from "date-fns-jalali"
import IRlocale from 'date-fns/locale/fa-IR'
import Wheel from "./wheel"
// import "./styles.css"

export default function WheelWrapper() {
  function formateDate(_relative: number, absolute: number) {
    return format(subDays(new Date(), absolute), "iii d LLLL")
  }
  return (
    <div
      className='md:h-96 flex justify-center items-center'
    >
      <div className="md:w-96 md:h-96 h-44">
        <Wheel
          loop
          length={90}
          width={140}
          perspective="right"
          setValue={formateDate}
          targetIdx={70}
        />
      </div>
      <div className="w-8 md:h-96 h-44">
        <Wheel loop length={24} width={23} targetIdx={16} />
      </div>
      <div className="w-24 md:h-96 h-44" >
        <Wheel loop length={60} width={23} perspective="left" targetIdx={30} />
      </div>
    </div>
  )
}
