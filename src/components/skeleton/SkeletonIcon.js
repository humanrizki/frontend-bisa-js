import React from 'react'
import './../../style/skeleton.css'
import classnames from 'classnames'
function SkeletonIcon({classNames = 'relative rounded-full bg-slate-400 overflow-hidden', w = 'w-24', h='h-24'}) {
    return (
        <div className={classnames('skeleton-box', classNames, w, h)}>
            
        </div>
    )
}

export default SkeletonIcon
