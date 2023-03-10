import React from 'react'
import './contractoverview.css'
import './Popup.css'

function ContractODcopy() {

  const texttocopy = "0x31Cf2B41083003A66A2d10724956014D398d51f0"

  const copytoclipboard = () => {
    navigator.clipboard.writeText(texttocopy)
  }

  function showCopied() {
    let selectButton = document.querySelector(".copycontractaddress");
    selectButton.classList.add("active");
    setTimeout(function () {
      selectButton.classList.remove("active");
    }, 1500)
  }

  return (
    <div className="copycontractaddress">
      <div className='addresstext'>
        <h6>Contract : 0x31Cf2B41083003A66A2d10724956014D398d51f0</h6>
      </div>
      <button value="copy" onClick={() => { copytoclipboard(); showCopied(); }} id="copy-text-btn"><i className="fa-regular fa-copy"></i></button>
    </div>
  )
}

export default ContractODcopy