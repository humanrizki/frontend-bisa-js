import React from 'react'
import SkeletonBox from './SkeletonBox'
import SkeletonButton from './SkeletonButton'
import SkeletonHeading from './SkeletonHeading'
import SkeletonIcon from './SkeletonIcon'
import SkeletonText from './SkeletonText'

function SkeletonCourse() {
  return (
    <>
        <div className='w-full bg-slate-800'>
            <div className="w-10/12 mx-auto text-white grid grid-cols-1 lg:grid-cols-8 h-max  py-3 lg:py-3">
                <div className="col-span-1 lg:col-span-3 inline-flex  lg:justify-center items-center">
                    <SkeletonBox/>
                </div>
                <div className="col-span-1 lg:col-span-5 inline-flex items-center">
                    <div className='w-full'>
                        <div className="flex gap-3 mt-4 justify-between text-sm items-center">
                            <div>
                                <SkeletonHeading/>
                                <SkeletonText totalText={[0]} w='w-full'/>
                            </div>
                            <div className='w-1/2 flex justify-end '>
                                <SkeletonButton/>
                            </div>
                        </div>
                        <div className="flex gap-3 mt-4 mb-3 justify-between text-sm items-center">
                            <div className='w-9/12 inline-flex items-center gap-2'>
                                <SkeletonIcon w='w-[20px]' h='h-[20px]'/>
                                <SkeletonText totalText={[0]} w='w-11/12'/>
                            </div>
                            
                        </div> 
                        <SkeletonText totalText={[0,1,2]} w='w-full' wArr={['w-8/12','w-9/12','w-6/12']}/>
                        <div className='w-full mt-6 mb-1'>
                            <SkeletonText w='w-[130px]' totalText={[0]}/>
                        </div>
                        <div className='flex gap-3 mt-2 mb-3'>
                            <SkeletonBox w='w-44' h='h-10'/>
                            <SkeletonBox w='w-44' h='h-10'/>
                        </div>
                        <div className='w-full mt-6 mb-1'>
                            <SkeletonText w='w-[130px]' totalText={[0]}/>
                        </div>
                        <div className='flex gap-3 mt-2 mb-3'>
                            <SkeletonBox w='w-44' h='h-8'/>
                            <SkeletonBox w='w-32' h='h-8'/>
                            <SkeletonBox w='w-24' h='h-8'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-8 my-[50px] gap-x-5'>
            <div className='col-span-1 lg:col-span-3 inline-flex flex-col gap-y-3 mb-[35px]'>
                <SkeletonText totalText={[1,2,3,4,5,6,7,8,9]} 
                wArr={['w-full','w-9/12','w-8/12','w-10/12','w-7/12','w-7/12','w-10/12','w-11/12','w-full']} m='mb-1'/>
            </div>
            <div className='col-span-1 lg:col-span-5' >
                <SkeletonText totalText={[1]} m='mb-7' w='w-3/12' 
                />
                <SkeletonText totalText={[1,2,3,4,5,6,7,8,9]} 
                m='mb-2'/>
            </div>
        </div>
    </>
  )
}

export default SkeletonCourse