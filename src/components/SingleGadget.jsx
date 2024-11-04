import React from 'react';

const SingleGadget = ({ gadget }) => {

    return (
        <div>
            {
                <div className="border-2 card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={gadget.product_image}
                            alt={gadget.product_title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{gadget.product_title}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleGadget;