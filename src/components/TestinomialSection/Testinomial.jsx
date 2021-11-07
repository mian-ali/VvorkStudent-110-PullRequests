import React, { Fragment } from 'react'
import './Testinomial.css'

const Testinomial = () => {
    return (
        <Fragment>
            
            <section className="review" id="Review">

                <h1 className="heading">Testin<span>omial</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src='./images/quote-img.png' alt="" className="quote" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                        <img src='./images/pic-1.png' className="user" alt="" />
                        <h3>john duo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>

                    <div className="box">
                        <img src='./images/quote-img.png' alt="" className="quote" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                        <img src='./images/pic-2.png' className="user" alt="" />
                        <h3>john duo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                    
                    <div className="box">
                        <img src='./images/quote-img.png' alt="" className="quote" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                        <img src='./images/pic-3.png' className="user" alt="" />
                        <h3>john duo</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>

                </div>

            </section>

        </Fragment>
    )
}

export default Testinomial
