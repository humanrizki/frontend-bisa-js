import React from 'react'
import classnames from 'classnames'
import './../../style/skeleton.css'
function SkeletonBox({w = 'w-56', m = 'mb-2', p='p-2', h='h-[200px]', b_rad='rounded', bg='bg-slate-400', otherClass=''}) {
    return (
        <div 
        className={classnames('skeleton-box relative overflow-hidden', w, m, p, h, b_rad, bg, otherClass)}></div>
    )
}

export default SkeletonBox
