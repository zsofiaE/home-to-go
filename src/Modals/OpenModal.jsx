import React, { useState } from 'react'

function OpenModal() {
// -----this is a button Component. a button (Book Viewing). I dont use it yet as a componenet
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
        <button className="open-modal-btn" onClick={() => setOpenM
        (false)}>Book  Viewing</button>
    </div>
  )
}

export default OpenModal