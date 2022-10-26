import axios from 'axios';
import React, { useState } from 'react';
import Trial from './Trial';

function App() {
    const [showform, setshowform] = useState(true);
const [form, setForm] = useState({
    name:"",
    email:"",
    phno:"",
    message:""
});

function handlechange(event) {
    setForm((prevfrom)=>{
        return{
            ...prevfrom,[event.target.name]:event.target.value
        }
    });
}

function handlesubmit(e){
    console.log(e);
    setshowform(false);
    axios.post("http://localhost:4000");
    e.preventDefault();
}

    return (
        <div className='app'>
            <section className='page1' id="page1">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler custom-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-item nav-link navv " href="#page1">Home </a>
                            <a className="nav-item nav-link navv" href="#page2">Experience</a>
                            <a className="nav-item nav-link navv" href="#page3">Projects</a>
                            <a className="nav-item nav-link navv" href="#page4">Contacts</a>
                        </div>
                    </div>
                </nav>
                {/* https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60 */}
                <img className='myImg' src="images/my-img.jpg" alt="my-img" />
                <span className='profession'>Full Stack Developer</span>

                <div id="onimg">
                    <a href="https://www.linkedin.com/in/ritesh-hajare-515941242/" target="_blank" rel="noopener noreferrer" ><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://github.com/RiteshHajare" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                </div>
                <div className="myname">
                    <span className='name'>Ritesh</span>
                    <span className='surname'>Hajare </span>
                </div>
                <div className="about">
                    <h1>About Me</h1>
                    <p className='info'>Pune &nbsp;&nbsp;/&nbsp;&nbsp; Freelance &nbsp;&nbsp; / &nbsp;&nbsp; Intern @Oasis Infobyte</p>
                    <p className='details'>I am a software engineering undergraduate who is seeking to find the opportunity to work in a challenging working environment that will encourage to learn new and necessary skills as well as help the company advancement.</p><br />
                    <p className='details'>Able to effectively self-manage during independant projects, as well as collaborate in a team setting.</p>
                </div>
                <a href="#page2"><i className="downarrow fa-sharp fa-solid fa-arrow-down"></i></a>
            </section>
            <section id='page2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className='skillhead'>Skills</h1>
                            <div className="column1">
                                <Trial skill={"HTML 5"} />
                                <Trial skill={"CSS/Bootstrap"} />
                                <Trial skill={"MongoDB"} />
                                <Trial skill={"Node.js"} />
                                <Trial skill={"Express/EJS"} />

                            </div>
                            <div className="column2">
                                <Trial skill={"React.js"} />
                                <Trial skill={"CPP/DSA"} />
                                <Trial skill={"Basic WEB3"} />
                                <Trial skill={"REST API"} />
                                <Trial skill={"MY SQL"} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className='Exp'>Experience</h1>
                            <div className="myexp">
                                <div className="exp1">
                                    <h3 className='exph3'>Zensar Technologies - Apprenticeship</h3>
                                    <a href="https://www.zensar.com/"><img className='companyLogo' src="https://media-exp1.licdn.com/dms/image/C4D0BAQFls229vaDjDg/company-logo_100_100/0/1657181446989?e=1672876800&v=beta&t=achAqf-GX-GR5OV4b9ue2o-zq3-tauqUofAnl_O2wo0" alt="ESD_Training" /></a>
                                    <p>Student Trainee</p>
                                    <small id='duration'>sept 2022 - Present</small>
                                </div>
                                <div className="exp2">
                                    <h3 className='exph3'>Oasis Infobyte - Internship</h3>
                                    <a href="https://oasisinfobyte.com/"><img className='companyLogo' src="https://media-exp1.licdn.com/dms/image/C4E0BAQHfk_O8amPovQ/company-logo_100_100/0/1642532597169?e=1672876800&v=beta&t=GrkJ4RdII6r9ZOuyRNcc9eOzOaQMzEYFJ7WzFx2my_k" alt="Internship" /></a>
                                    <p>Intern</p>
                                    <small id='durationn'>Oct 2022 - Present</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='page3'>
                <h1>My Projects</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pro1 project">
                                <h3>1.&nbsp;&nbsp; Blog-site</h3>
                                <p>Full stack website with React.js and Node.js along with MongoDB Database. This website is Responsive and Dynamic. User see their blogs on profile page .Users can see other blogs on site on single click.</p>
                                <small><span className="dotY"></span>&nbsp;&nbsp;JS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="dotPur"></span>&nbsp;&nbsp;&nbsp;&nbsp;CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="dotO"></span> &nbsp;&nbsp;&nbsp;&nbsp;HTML </small>
                            </div>
                            <div className="pro2 project">
                                <h3>2.&nbsp;&nbsp;Keeper-App</h3>
                                <p>Keeper App keeps notes made by the user. The Frontend used is React.js and Backend used is Motoko ( by DAFFINITY).</p>
                                <small><span className="dotY"></span>&nbsp;&nbsp;JS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="dotPur"></span>&nbsp;&nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="dotPink"></span> &nbsp;&nbsp;&nbsp;&nbsp;Motoko&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="dotO"></span> &nbsp;&nbsp;&nbsp;&nbsp;HTML </small>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pro3 project">
                                <h3>3.&nbsp;&nbsp;Instagram-Clone</h3>
                                <p>An elementary website where user can create and store a post on server. Also provides functionality of following other users.</p>
                                <small><span className="dotY"></span>&nbsp;&nbsp;JS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="dotPur"></span>&nbsp;&nbsp;&nbsp;&nbsp;CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="dotO"></span> &nbsp;&nbsp;&nbsp;&nbsp;HTML </small>
                            </div>
                            <div className="pro4 project">
                                <h3>4.&nbsp;&nbsp;News-Website</h3>
                                <p>Basic API based News Website with features like signup/signin (Used salting and hashing-bycrypt) and saving multiple feedback from user to database(MongoDB-mongoose).</p>
                                <small><span className="dotY"></span>&nbsp;&nbsp;JS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="dotPur"></span>&nbsp;&nbsp;&nbsp;&nbsp;CSS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="dotRed"></span> &nbsp;&nbsp;&nbsp;&nbsp;EJS </small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="page4">
                <div className="contactMe">
                    <h1 className='wanna'>Wanna  </h1>
                    <h1 id='colla'><strong style={{fontWeight:"700"}}>Collaborate... </strong> </h1>
                </div>
                <div className="contact_info">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">

                                    
                                    <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                        <div className="contact_info_image"><img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone_number" /></div>
                                        <div className="contact_info_content">
                                            <div className="contact_info_title">Phone</div>
                                            <div className="contact_info_text">+91 7499108088</div>
                                        </div>
                                    </div>


                                    <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                        <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt="email" /></div>
                                        <div className="contact_info_content">
                                            <div className="contact_info_title">Email</div>
                                            <div className="contact_info_text">riteshhajare7@gmail.com</div>
                                        </div>
                                    </div>

                                    <div className="contact_info_item d-flex flex-row align-items-center justify-content-start">
                                        <div className="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" alt="address" /></div>
                                        <div className="contact_info_content">
                                            <div className="contact_info_title">Address</div>
                                            <div className="contact_info_text">Pune ,Maharashtra</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="contact_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                {showform?<div className="contact_form_container">
                                    <div className="contact_form_title">Get in Touch</div>

                                    <form onSubmit={handlesubmit}>
                                        <div className="contact_form_inputs d-flex flex-md-row flex-column justify-content-between align-items-between">
                                            <input type="text" id="contact_form_name" onChange={handlechange} value={form.name} class="contact_form_name input_field" name='name' placeholder="Your name" required="required" data-error="Name is required." />
                                            <input type="text" id="contact_form_email" onChange={handlechange} value={form.email} class="contact_form_email input_field" name='email' placeholder="Your email" required="required" data-error="Email is required." />
                                            <input type="text" id="contact_form_phone" onChange={handlechange} value={form.phno} class="contact_form_phone input_field" name='phno' placeholder="Your phone number" />
                                        </div>
                                        <div className="contact_form_text">
                                            <textarea id="contact_form_message" onChange={handlechange} value={form.message} class="text_field contact_form_message" name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                                        </div>
                                        <div className="contact_form_button">
                                            <button type="submit" className="button contact_submit_button btn btn-primary">Send Message</button>
                                        </div>
                                    
                                         </form>
                                </div>:<div> <i className="check fa-regular fa-circle-check"></i><h1 className='alternative'>Thankyou for Contacting. Will connect with you soon...</h1></div> }
                            </div>
                        </div>
                    </div>
                   
                </div>

            </section>
            <section id="footer">
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/ritesh-hajare-515941242/" target="_blank" rel="noopener noreferrer" ><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/RiteshHajare" target="_blank" rel="noopener noreferrer" ><i class="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com/ritesh.hajare.716/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
            </div>
                <small className='makegrey'>Copyright 2022 @Ritesh Hajare</small>
            </section>
        </div>
    )
}

export default App


// <!DOCTYPE html>  
// <html>  
// <head>  
// <style>   
// div {  
//     padding:15px;
//     width: 150px;  
//     height: 100px;  
//     background: violet;  
//     transition: width 2s, height 2s, transform 2s; 
// }  
// div:hover {  
//     width: 300px;  
//     height: 200px;  
//     transform: rotate(360deg); /* Chrome, Safari, Opera */  
    
// }  
// </style>  
// </head>  
// <body>  
// <div><b>JavaTpoint.com</b><p> (Move your cursor on me to see the effect)</p></div>  
// </body>  
// </html>  

 
