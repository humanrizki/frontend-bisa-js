import React from 'react'
import classnames from 'classnames'
import './../../style/skeleton.css'
function SkeletonButton({classNames = 'skeleton-box relative rounded bg-slate-400 overflow-hidden h-[40px] w-[150px]'}) {
  return (
    <div className={classnames('skeleton-box', classNames)}>
    </div>
  )
}

export default SkeletonButton