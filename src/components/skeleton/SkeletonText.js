import React from "react"
import classnames from 'classnames'
import "./../../style/skeleton.css"
const SkeletonText = ({totalText = [], w = 'w-full', h='h-[15px]', wArr=[], m='my-4', bg='bg-slate-400', bRad='rounded-full', p='p-2', otherClass}) => {
    const totalTextNew = [1,2,3]
    return (
        <>
            { totalText.length ? 
                totalText.map((_, index)=>{
                    if(wArr.length && wArr[index] !== undefined){
                        return <div className={classnames("skeleton-box relative overflow-hidden",h, m, bg, bRad, p, wArr[index], otherClass)}></div>
                    } else {
                        return <div className={classnames("skeleton-box relative overflow-hidden", w, h, m, bg, bRad, p, otherClass)}></div>
                    }
                }) : 
                totalTextNew.map((_, index)=>{
                    if(wArr.length && wArr[index] !== undefined){
                        return <div className={classnames("skeleton-box relative overflow-hidden", h, m, bg, bRad, p, wArr[index], otherClass)}></div>
                    } else {
                        return <div className={classnames("skeleton-box relative overflow-hidden", w, h, m, bg, bRad, p, otherClass)}></div>
                    }
                })
            }
        </>
    )
}
export default SkeletonText