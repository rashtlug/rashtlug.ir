import { Button } from '@/app/client/next'
import WheelWrapper from './components/wheelWrapper'
import LinuxLogos from './components/linuxLogos'
import { Divider } from '@nextui-org/react'
import Description from './components/description'
import Footer from './components/footer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "سایت رشت لاگ | انجمن کابران گنو-لینوکس",
  description: 'گروه کاربران لینوکس رشت، یک انجمن غیرانتفاعی از علاقه‌مندان و کاربران سیستم‌عامل لینوکس و نرم‌افزارهای آزاد و متن‌باز در شهر رشت است'
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full max-w-full min-h-screen items-center justify-center leading-relaxed text-gray-300">
          <div className=' relative z-10 flex justify-center items-center'>
            <div id='circle' className='absolute w-[700px] h-[500px] bg-green-600/30 rounded-br-[120px] blur-[160px] top-12 lg:left-20 left-10'></div>
            {/* <div id='circle' className='absolute w-[500px] h-[300px] bg-green-500/30 rounded-br-[120px] blur-[160px] top-12 right-0'></div> */}
          </div>
          <div className='w-full lg:min-h-unit-2xl lg:mt-44 mt-32 flex flex-col lg:flex-row justify-evenly items-center z-10'>
            <div className='lg:text-start flex flex-col  justify-center items-center '>
              <div className='lg:text-start text-center'>
                <h1 className='lg:text-8xl text-6xl leading-relaxed font-extrabold text-green-500 p-2 drop-shadow-2xl '>رشت‌لاگ</h1>
                <p className='lg:w-[46ch] w-[35ch] lg:text-2xl lg:mt-4 text-gray-300'>رشت لاگ به عنوان لاگ <span className='text-green-400'>فعال رشت</span> شروع به کار کردرشت لاگ  کردرشت لاگ به عنوان لاگ فعال رشت شروع به کار کرد</p>
                {/* <Image src={'/icons/fire.png'} width={130} height={130} quality={100} alt='fire' /> */}
                <div className='flex flex-col md:flex-row  justify-start items-center gap-x-3'>
                  <Button className='mt-5 bg-green-500 w-full md:w-fit' size='lg' color="primary" >ثبت‌نام در رویداد</Button>
                  <Button className='mt-5 w-full md:w-fit' size='lg' variant="light">درباره‌ما</Button>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-6  mt-12'>
              <WheelWrapper/>
              <p className='w-[30ch] text-center'>رویداد بعدی <span className='text-green-500'>رشت‌لاگ</span> در تاریخ ۱۴۰۲/۰۹/۱۵ خواهد بود</p>
            </div>
          </div>

          <Divider className='mt-20'/>
          <div className='w-full mt-12'>
            <LinuxLogos/>
          </div>


          {/* <Divider className='mt-20'/> */}
          <div className='w-full flex justify-center items-center mt-28'>
            <Description/>
          </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
    
  )
}
