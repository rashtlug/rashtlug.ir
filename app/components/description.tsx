'use client'
import { motion } from 'framer-motion'
import DescriptionSlider from './description.slider'

export default function Description() {

    return (
        <motion.div className='w-full px-3 flex lg:flex-row flex-col gap-y-4 justify-center items-center'>

            <motion.div className='lg:w-1/2 flex flex-col gap-y-4 justify-center items-start '>
                <motion.h1 className='lg:text-7xl text-3xl font-extrabold text-green-500'>
                    برنامه‌های ما 
                </motion.h1>
                <motion.p className='lg:w-[50ch] w-full lg:text-2xl font-light'>
                ما هرچیزی که مربوط به دنیای اپن سورس باشد را دنبال خواهیم کرد. به دنبال مباحث تکنولوژی و امنیتی خواهیم بود ما هرچیزی که مربوط به دنیای اپن سورس باشد را دنبال خواهیم کرد. به دنبال مباحث تکنولوژی و امنیتی خواهیم بود ما هرچیزی که مربوط به دنیای اپن سورس باشد را دنبال خواهیم کرد. به دنبال مباحث تکنولوژی و امنیتی خواهیم بود 
                </motion.p>
            </motion.div>

            <motion.div animate={{x: [0,40,10, 0]}} className='lg:w-1/2 flex flex-col justify-center items-center'>
                <DescriptionSlider/>
            </motion.div>
        </motion.div>
    )
}