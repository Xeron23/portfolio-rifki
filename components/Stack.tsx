import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import {techStack} from '@/data'

const Stack = () => {
    return (
        <section id="tech" className="py-20">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
                My <span className="text-purple">Tech Stack</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="h-[22rem] md:h-[18rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards items={techStack} direction="left" speed="normal" />
                </div>
            </div>
        </section>
    )
}

export default Stack