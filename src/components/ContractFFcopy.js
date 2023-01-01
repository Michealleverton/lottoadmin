import React from 'react'
import './contractoverview.css'
import './Popup.css'

function ContractFFcopy() {

  const texttocopy = "0xB954343f87e77B5e846446BB1167C1e5cf35DF2C"

  const copytoclipboard = () => {
    navigator.clipboard.writeText(texttocopy)
  }

  function click() {
    let copyText = document.querySelector(".copycontractaddress");
    copyText.classList.add("active");
    setTimeout(function () {
      copyText.classList.remove("active");
    }, 2000)
  }

  return (
    <div className="copycontractaddress">
      <div className='addresstext'>
        <h6>Contract : 0xB954343f87e77B5e846446BB1167C1e5cf35DF2C</h6>
      </div>
      <button value="copy" onClick={() => { copytoclipboard(); click(); }} id="copy-text-btn"><i className="fa-regular fa-copy"></i></button>
    </div>
  )
}

export default ContractFFcopy