import React from 'react'
import './contractoverview.css'
import './Popup.css'

function ContractTDcopy() {

  const texttocopy = "0xECC5Eed8054F0A75118619203760D28D1a85b4e5"

  const copytoclipboard = () => {
    navigator.clipboard.writeText(texttocopy)
  }

  function click() {
    let copyText = document.querySelector(".copycontractaddress");
    copyText.classList.add("active");
    setTimeout(function () {
      copyText.classList.remove("active");
    }, 1500)
  }

  return (
    <div className="copycontractaddress">
      <div className='addresstext'>
        <h6>Contract : 0xECC5Eed8054F0A75118619203760D28D1a85b4e5</h6>
      </div>
      <button value="copy" onClick={() => { copytoclipboard(); click(); }} id="copy-text-btn"><i className="fa-regular fa-copy"></i></button>
    </div>
  )
}

export default ContractTDcopy