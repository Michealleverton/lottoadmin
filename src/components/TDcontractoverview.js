import React from 'react'
import ContractTDcopy from "./ContractTDcopy";
import './contractoverview.css'

function TDcontractoverview() {
    return (
        <section>
            <div className="container copytextContainer text-white">
                <ContractTDcopy />
            </div>
            <div className='container allinfoholder'>
                <div className='container infoholder'>
                    <div className=" container overviewheader text-white">
                        <h6>Contract Overview</h6>
                    </div>
                    <div className="container overviewbody text-white">
                        <div>
                            <div className='mb-3'>
                                <div className='me-6-1 '>Etherium : </div><div><h6>0.0746 ETH</h6></div>
                            </div>
                            <div>
                                <div className=''>Tokens</div>
                                <h6>
                                    <div>Link : 1.8 Link</div>
                                </h6>
                            </div>
                        </div>
                        <div>
                            <div className=''>Ticket Count : </div><div className='mb-3'><h6>1268 Sold</h6></div>
                            <div className=''>Free Ticket Count : </div><div><h6>463 Given Out</h6></div>
                        </div>
                    </div>
                </div>

                <div className='container infoholder'>
                    <div className=" container overviewheader text-white">
                        <h6>More Info</h6>
                    </div>
                    <div className="container overviewbody text-white">
                        <div>
                            <div className='mb-3'>
                                <div className='me-6-1 mb-3 mt-1'>Contract Name : <h6>TwoDollarTicket</h6> </div>
                            </div>
                            <div>
                            <div className='mb-3'>Contract Creator : <h6>0x3AA0Df703D0086495a3317A3e...</h6></div>
                            </div>
                            <div>
                            <div className='mb-1'>Transaction Number : <h6>0x3dd59e73bfdd057e7781db6590...</h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TDcontractoverview