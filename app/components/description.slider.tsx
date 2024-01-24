import React, { MutableRefObject } from "react"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function DescriptionSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    renderMode: 'performance',
    drag: true,
    mode: 'snap',
    created(s) {
      setTimeout(() => {
        s.next()
      }, 2000)
    },
    updated(s) {
      setTimeout(() => {
        s.next()
      }, 2000)
    },
    animationEnded(s) {
      setTimeout(() => {
        s.next()
      }, 2000)
    },
  })
  const animation = { duration: 30000, easing: (t: any) => t }
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
      loop: true,
      renderMode: 'performance',
      drag: true,
      mode: 'snap',
      created(s) {
        setTimeout(() => {
          s.next()
        }, 2000)
      },
      updated(s) {
        setTimeout(() => {
          s.next()
        }, 2000)
      },
      animationEnded(s) {
        setTimeout(() => {
          s.next()
        }, 2000)
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div>
      <div className=' relative flex justify-center items-center '>
        <div id='circle' className='absolute lg:w-[700px] lg:h-[500px] w-72 h-72 top-6 bg-green-600/30 rounded-br-[120px] blur-[160px] '></div>
      </div>
      <div ref={sliderRef} className="keen-slider lg:w-[30rem] lg:h-[25rem] w-80 max-w-11/12  mx-auto rounded-3xl">
        <div className="keen-slider__slide number-slide1 bg-black/60 text-green-500 ">Linux</div>
        <div className="keen-slider__slide number-slide2 bg-black/60 text-green-500">Devops</div>
        <div className="keen-slider__slide number-slide3 bg-black/60 text-green-500">Security</div>
        <div className="keen-slider__slide number-slide4 bg-black/60 text-green-500">Docker</div>
        <div className="keen-slider__slide number-slide5 bg-black/60 text-green-500">OSS</div>
        <div className="keen-slider__slide number-slide6 bg-black/60 text-green-500">Network</div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail lg:w-[30rem] w-80 max-w-11/12 mx-auto rounded-3xl">
        <div className="keen-slider__slide number-slide1 bg-black/60 text-green-500">Linux</div>
        <div className="keen-slider__slide number-slide2 bg-black/60 text-green-500">Devops</div>
        <div className="keen-slider__slide number-slide3 bg-black/60 text-green-500">Security</div>
        <div className="keen-slider__slide number-slide4 bg-black/60 text-green-500">Docker</div>
        <div className="keen-slider__slide number-slide5 bg-black/60 text-green-500">OSS</div>
        <div className="keen-slider__slide number-slide6 bg-black/60 text-green-500">Network</div>
      </div>
    </div>
  )
}
