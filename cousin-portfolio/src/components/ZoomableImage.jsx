import { useRef } from 'react'
import './ZoomableImage.css'

export default function ZoomableImage({ src, alt, lazy = true }) {
  const dialogRef = useRef(null)

  const open = () => dialogRef.current.showModal()
  const close = () => dialogRef.current.close()

  // A click on the dark area around the picture lands on the <dialog> itself.
  const handleDialogClick = (event) => {
    if (event.target === event.currentTarget) close()
  }

  return (
    <>
      <button
        type="button"
        className="zoom-trigger"
        onClick={open}
        aria-label={'View larger: ' + alt}
      >
        <img src={src} alt={alt} loading={lazy ? 'lazy' : 'eager'} decoding="async" />
      </button>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={alt}
        onClick={handleDialogClick}
      >
        <button
          type="button"
          className="lightbox-close"
          onClick={close}
          aria-label="Close larger view"
        >
          ✕
        </button>
        <img src={src} alt={alt} loading="lazy" />
      </dialog>
    </>
  )
}
