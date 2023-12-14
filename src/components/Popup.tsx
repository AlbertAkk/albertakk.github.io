import React, { useEffect, useRef } from 'react'

interface PopupProps {
  isOpen: boolean
  onClose: () => void
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null)

  const handleClose = () => {
    onClose()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <div className="popup">
      <div className="popup-content" ref={popupRef}>
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <div className="popupInfo">
          <h2>Thank you for submitting the form!</h2>
          <p>Our managers will reach out to you shortly</p>
          <button type="button" onClick={handleClose} className="popupBtn">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Popup
