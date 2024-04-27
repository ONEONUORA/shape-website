
const Aboutus =()=>{
    return(
        <div>


            <div className='container7' style={{backgroundColor:'rgb(23, 22, 22)'}}>
                <h4 style={{backgroundColor:'rgb(231, 84, 84)', color:'white', textAlign:'center' , padding:'2.4rem', fontSize:'2rem'}}>ABOUT US</h4>
                             <div className='row' style={{padding:'2rem'}}>
                                 <div className='col-12 col-md-6' style={{paddingTop:'3rem'}}>
                                     <img src ="https://res.cloudinary.com/ilove2support/image/upload/v1710417209/dev1_pqqbcb.png" alt="Picture of A man weight lifting" style={{width:'90%', height:'100%'}}/>

                                 </div>


                                 <div className='col-12 col-md-6' style={{padding:'2rem'}}>
                                        <h3 style={{color:'white', paddingLeft:'2rem'}}>Our <span style={{color:'red'}}>Company</span></h3>

                                        <h6 style={{fontSize:"1.1rem", color: 'rgb(109, 107, 107)'}}>Lorem The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that 
                                            doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless
                                            filler text can be very useful when the focus is meant to be on design, not content.<br/><br/>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic
                                             or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
                                              scrambled parts of Cicero's De Finibus Bonorum
                                             et Malorum for use in a type specimen book. It usually begins with:
                                        </h6>

                                 </div>

                            </div>
            </div>


            <div className='container8' style={{backgroundColor:'rgb(23, 22, 22)'}}>
                <div className='row' style={{padding:'2rem'}}>
                        <div className='col-12 col-md-4'>
                            <h3 style={{color:'white', paddingBottom:'20px'}}>Why Choose Us?</h3>
                            <h5 style={{color:'rgb(109, 107, 107)'}}>The purpose of lorem ipsum is to create a natural looking block of text (sentence, 
                                paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy
                                laying out pages with meaningless filler text can 
                                be very useful when the focus is meant to be on design, not content.<br/><br/>
                                The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)
                                that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless
                                filler text can be
                                very useful when the focus is meant to be on design, not content.
                            </h5>

                        </div>

                        <div className='col-12 col-md-4 solution'>
                                <h3 style={{color:'white'}}>Our Solution</h3>

                                <div className="accordion" id="accordionExample" >
                                            <div className="accordion-item" >
                                              <h2 className="accordion-header" >
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                  Accordion Heading Text Item #1
                                                </button>
                                              </h2>
                                              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                              </div>
                                            </div>

                                            <div className="accordion-item">
                                              <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Accordion Heading Text Item #2
                                                </button>
                                              </h2>
                                              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                              </div>
                                            </div>

                                            <div className="accordion-item">
                                              <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Accordion Heading Text Item #3
                                                </button>
                                              </h2>
                                              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                              </div>
                                            </div>

                                            <div className="accordion-item">
                                              <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Accordion Heading Text Item #4
                                                </button>
                                              </h2>
                                              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                  <strong>This is the four item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                              </div>
                                            </div>
                                 </div>
                        </div>

                        <div className='col-12 col-md-4 expertise'>
                                <h3 style={{color:'white'}}>Our Expertise</h3>
                                <h6 style={{color:'white'}}>Web Development</h6>
                                <div style= {{marginTop:'20px'}} className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                           <div className="progress-bar bg-danger" style={{width: "35%"}}></div>
                               </div>
                               <h6 style={{marginTop:'30px', color:'white'}}>Designing</h6>
                               <div style= {{marginTop:'20px'}} className="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                           <div className="progress-bar bg-success text-green" style={{width: "50%"}}></div>
                                </div>
                                <h6 style={{marginTop:'30px', color:'white'}}>User Experience</h6>
                                <div  style= {{marginTop:'20px'}} className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                           <div className="progress-bar bg-info text-light-blue" style={{width: "80%"}}></div>
                                </div>
                                <h6 style={{marginTop:'30px', color:'white'}}>Development</h6>
                               <div  style= {{marginTop:'20px'}} className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-info" style={{width: "25%"}}></div>
                               </div>
                        </div>

                </div>

            </div>


          <div className='container8' style={{backgroundColor:'rgb(23, 22, 22)'}}>
                <div className='row' style={{padding:'2rem'}}>
                    <div className='col-12 col-md-4'>
                                <h3 style={{color:'white'}}>Features</h3>
                       <div className="card text">
                             <div className="card-header test" style={{fontSize:'1.1rem' ,backgroundColor:'white', color:'green', height:'rem'}}>
                                  <p>TEST 1</p> 
                                  <p>TEST 2</p> 
                                  <p>TEST 3</p> 
                             </div>
                            <div className="card-body">
                               <p className="card-text" style={{color:'rgb(109, 107, 107)'}}>The passage experienced a surge in popularity during the 1960s w
                                    hen Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publ
                                    ishers bundled the text with their software. Today it's seen all around the web; on templates, websites, 
                                    and stock designs. Use our generator 
                                    to get your own, or read on for the authoritative history of lorem ipsum.
                               </p>
                            </div>
                        </div>
                    </div>



                    <div className='col-12 col-md-4 late'>
                                <h3 style={{color:'white'}}>Latest News</h3>
                                <div className="card border-dark mb-5">

                                   <div className="card-header" style={{display: 'flex', gap:'15px', backgroundColor:'white', color:'green', fontSize:'1.1rem'}}>
                                   <i class="bi bi-cloud"></i>
                                   First
                                   </div>

                                   <div className="card-body">
                                             <p className="card-text"  style={{color:'rgb(109, 107, 107)'}}>Some quick example text to build on 
                                                   the card title and make up the bulk of the card's content.
                                                   the card title and make up the bulk of the card's content.
                                                   the card title and make up the bulk of the card's content.
                                                   the card title and make up the bulk of the card's content.
                                             </p>
                                     </div>

                                     <div className="card-footer" style={{display: 'flex', gap:'15px', backgroundColor:'white'}}>
                                     <i class="bi bi-geo-alt-fill"></i>
                                        Second
                                     </div>

                                     <div className="card-footer" style={{display: 'flex', gap:'15px',backgroundColor:'white'}}>
                                     <i class="bi bi-cloud-moon"></i>
                                            Third
                                     </div>
                                </div>
                        
                    </div>

                    <div className='col-12 col-md-4'>
                                <h3 style={{color:'white'}}>Testimonials</h3>
                                <div className="card" style={{marginBottom:'2rem'}}>
                                       <div className="card-body">
                                         <p className="card-text" style={{color:'rgb(109, 107, 107)'}}>Some quick example text to build on the card title and make up the bulk of the card's content.
                                            Some quick example text to build on the card title and make up the bulk of the card's content
                                         </p>
                                       </div>
                                </div>
                                <div className="technicaldirector" style={{display:'flex', gap:'30px'}}>
                                      <img src="https://res.cloudinary.com/ilove2support/image/upload/v1710417281/team4_fthnka.jpg"alt="Technical Director Image" style={{width:'80px' ,height:'70%', borderRadius:'50%'}}/>
                                      <div style={{marginTop:'8px'}}>
                                        <p style={{color:'green'}}>Marc Cooper</p>
                                        <p  style={{color:'rgb(109, 107, 107)'}}>Techical Director</p>
                                      </div>
                                </div>
                    </div>
                </div>
            </div>



            <div className="container9"  style={{backgroundColor:'rgb(23, 22, 22)'}}>
                        <div className='row' style={{padding:'2rem'}}>
                            <h5 style={{color:'white', marginBottom:'2rem'}}>Our Team</h5>
                              <div className='col-12 col-md-3'>
                                <img src='https://res.cloudinary.com/ilove2support/image/upload/v1710417240/team1_olpuac.jpg'alt='Johne doe' style={{width:'100%'}}/>
                                <div style={{textAlign:'center' , marginTop:'10px'}}>
                                  <h4 style={{color:'white'}}>Johne Doe</h4>
                                  <h5 style={{color:'rgb(109, 107, 107)'}}>Master</h5>
                                </div>

                              </div>

                              <div className='col-12 col-md-3'>
                                <img src='https://res.cloudinary.com/ilove2support/image/upload/v1710417250/team2_k3fcnu.jpg'alt='Jennifer' style={{width:'100%'}}/>
                                <div style={{textAlign:'center' , marginTop:'10px'}}>
                                  <h4 style={{color:'white'}}>Jennifer</h4>
                                  <h5 style={{color:'rgb(109, 107, 107)'}}>Master</h5>
                                </div>

                              </div>

                              <div className='col-12 col-md-3'>
                                <img src='https://res.cloudinary.com/ilove2support/image/upload/v1710417272/team3_wpmdmf.jpg'alt='Christean' style={{width:'100%'}}/>
                                <div style={{textAlign:'center' , marginTop:'10px'}}>
                                  <h4 style={{color:'white'}}>Christean</h4>
                                  <h5 style={{color:'rgb(109, 107, 107)'}}>Master</h5>
                                </div>

                              </div>

                              <div className='col-12 col-md-3'>
                                <img src='https://res.cloudinary.com/ilove2support/image/upload/v1710417281/team4_fthnka.jpg'alt='kerinele rase' style={{width:'100%'}}/>
                                <div style={{textAlign:'center' , marginTop:'10px'}}>
                                  <h4 style={{color:'white'}}>Kerinele Rase</h4>
                                  <h5 style={{color:'rgb(109, 107, 107)'}}>Master</h5>
                                </div>

                              </div>
                        </div>

            </div>
              
































        </div>
    )

}


export default Aboutus;
