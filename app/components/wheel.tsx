import React, { useEffect, useRef, useState } from "react"
import {
  KeenSliderOptions,
  TrackDetails,
  useKeenSlider,
} from "keen-slider/react"

export default function Wheel(props: {
  initIdx?: number
  label?: string
  length: number
  loop?: boolean
  perspective?: "left" | "right" | "center"
  setValue?: (relative: number, absolute: number) => string
  width: number
  targetIdx?: number
}) {
  const perspective = props.perspective || "center"
  const wheelSize = 20
  const slides = props.length
  const slideDegree = 360 / wheelSize
  const slidesPerView = props.loop ? 9 : 1
  const [sliderState, setSliderState] = React.useState<TrackDetails | null>(
    null
  )
  const size = useRef(0)

  const options = useRef<KeenSliderOptions>({
    slides: {
      number: slides,
      origin: props.loop ? "center" : "auto",
      perView: slidesPerView,
    },
    vertical: true,
    initial: props.initIdx || 0,
    loop: props.loop,
    defaultAnimation: {
      duration: 4000,
      easing:t => 1 + --t * t * t * t * t
    },
    dragSpeed: (val) => {
      const height = size.current
      return (
        val *
        (height /
          ((height / 2) * Math.tan(slideDegree * (Math.PI / 180))) /
          slidesPerView)
      )
    },
    created: (s) => {
      size.current = s.size
    },
    updated: (s) => {
      size.current = s.size
    },
    detailsChanged: (s) => {
      setSliderState(s.track.details)
    },
    rubberband: !props.loop,
    mode: "free-snap",
  })

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(options.current)
  const [radius, setRadius] = React.useState(0)
  
  React.useEffect(() => {
    if (slider.current) setRadius(slider.current.size / 2)
  }, [slider])

function slideValues() {
  if (!sliderState) return []
  const offset = props.loop ? 1 / 2 - 1 / slidesPerView / 2 : 0
  
    const values = []
    for (let i = 0; i < slides; i++) {

      const distance = sliderState
      ? (sliderState.slides[i].distance - offset) * slidesPerView
      : 0
      const rotate =
      Math.abs(distance) > wheelSize / 2
      ? 180
      : distance * (360 / wheelSize) * -1
      
      
      // distance < 2 ? console.log(distance)  : ''
      const style = {
        transform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        WebkitTransform: `rotateX(${rotate}deg) translateZ(${radius}px)`,
        ...distance <= 1 && distance > 0 ? {color: 'rgb(34 197 94)'} : {color: 'white'}
      }
      'rgb(34 197 94)'
      const value = props.setValue
      ? props.setValue(i, sliderState.abs + Math.round(distance))
      : i
      values.push({ style, value })
    }
    return values
  }

  useEffect(() => {
    if(props.targetIdx)
    slider.current?.moveToIdx(props.targetIdx!)
  }, [slider])
  
  return (
    <div
    className={"wheel keen-slider wheel--perspective-" + perspective}
    ref={sliderRef}
    >
      <div
        className="wheel__shadow-top"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
        />
      <div className="wheel__inner">
        <div className="wheel__slides" style={{ width: props.width + "px" }}>
          {slideValues().map(({ style, value }, idx) => (          
            <div className="wheel__slide w-full" style={style} key={value}>
              <span className='select-none' id={`wheel${value}`}>{value}</span>
            </div>
          ))}
        </div>
        {props.label && (
          <div
            className="wheel__label"
            style={{
              transform: `translateZ(${radius}px)`,
              WebkitTransform: `translateZ(${radius}px)`,
            }}
          >
            {props.label}
          </div>
        )}
      </div>
      <div
        className="wheel__shadow-bottom"
        style={{
          transform: `translateZ(${radius}px)`,
          WebkitTransform: `translateZ(${radius}px)`,
        }}
      />
    </div>
  )
}
