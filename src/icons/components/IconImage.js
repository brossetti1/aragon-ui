import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconImage({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.005 5H6.995C5.895 5 5 5.895 5 6.995v10.01C5 18.105 5.895 19 6.995 19h10.01c1.1 0 1.995-.895 1.995-1.995V6.995C19 5.895 18.105 5 17.005 5zm.864 12.005a.865.865 0 0 1-.864.864H6.995a.865.865 0 0 1-.864-.864V6.995c0-.476.388-.864.864-.864h10.01c.476 0 .864.388.864.864v10.01z"
      />
      <path
        fill="currentColor"
        d="M18.834 13.745L15.26 10.17a.566.566 0 0 0-.8 0l-7.864 7.865a.566.566 0 0 0 .8.8l7.464-7.465 3.175 3.175a.566.566 0 0 0 .8-.8zM9.498 7.86A1.64 1.64 0 0 0 7.86 9.498a1.64 1.64 0 0 0 1.638 1.638 1.64 1.64 0 0 0 1.638-1.638A1.64 1.64 0 0 0 9.498 7.86zm0 2.145a.507.507 0 1 1 0-1.015.507.507 0 0 1 0 1.015z"
      />
    </svg>
  )
}

IconImage.propTypes = IconPropTypes
export default IconImage
