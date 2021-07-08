import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          My name is Naimi Nourelhouda and I’m 25 years old. Honestly, when I started my studies on computer science bachelor degree,
          I had no relation or information about  coding so I found a great difficulty at the beginning,
          after I tried to learn in academic training, on youtube channels, with others and especially on my own. 
          I have fun when I could fix bugs and see the correct execution of my projects.
          I didn’t like being like everyone else in the university coming and going without super ambitious
          I always wanted to be special in this domain. I wanna be a creative person.
          
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>
                During my education on computer science I have created many web sites like: blood donors web site with php language and of course HTML/CSS, this portfolio 
                with gatsby, I have given more importance to protect this web sites againt all breachs which can threaten the web site security.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2015 - March 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Intership in Dental clininc </div>
              <p>
               In order to construct an information system conception, basically it must collect the information needed and
               search computerized solutions to various problems that's what I have done on my work in this dental clinic intership.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2016 - May 2016</span>
            </div>
          </div>
        
           <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Tutot</h3>
              <div className="subheading mb-3">Temporary Teacher </div>
              <p>
             As an tutor at the center university Nour Elbachir at Elbayadh my home town in Algeria I have tought students of the first level on science 
             and technology field computer science topic where we have learned programming with Pascal  and I found this experience so helpful and precious on 
             my career.

              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">january 2021 - June 2021</span>
            </div>
          </div>

          
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Djillali Liabes</h3>
              <div className="subheading mb-3">Master of Science</div>
              <div>Network, System and IT Secutity </div>
              <p>GPA: 14.02/20</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2017 - July 2019</span>
            </div>
          </div>
          
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Summer university</h3>
              <div className="subheading mb-3">Implementing QoS for IPv6 with Network Automation </div>
              <div>Networking </div>
              </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2018 - September 2018</span>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">BeSmart School</h3>
              <div className="subheading mb-3">Software Creation</div>
              <div>JAVA </div>
              </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2016 - May 2016</span>
            </div>
          </div>


          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Djillali Liabes</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer System </div>
              
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2014 - June 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Mohammed Belkhier High School</h3>
              <div className="subheading mb-3">Mathematic Program</div>
              <p>Mention: "Good" grade</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2011 - June 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-r-project"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-android"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-matlab"></i>
            </li>
           
          </ul>

          <div className="subheading mb-3">Projects</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
               Web site of blood donor.
               Tools: HTML, CSS, PHP, MySql 
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Library mobile app. Tools: Android Studio, SQLite
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Managing a dental oﬃce software. Tools: Netbeans, xampp server 

            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Wireless sensor network project. Tools: MATLAB

            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a computer engineering graduated student, I'm also interested by 
            computer science it mean by artificial intelligence and data analysis 
            and all topics which have relation with mathematics.   
          </p>
          <p className="mb-0">
            As a computer science student I'm so passionate about study, search, know more especially 
            in my domain wich is the world  of information and I hope that I can complete and 
            continue my study until the highest degree I can. 
            In addition I spend a large amount of my free time exploring the latest technology
            advancements.
           
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              SoloLearn Certified -JAVA Programming-
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              SoloLearn Certified -Python Programming-
            </li>
            <li>
            <i className="fa-li fa fa-trophy text-warning"></i>
              SoloLearn Certified -Machine Learning-
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
               Prpgramming Competition - Devfest  Group Develper Google 2016
              
            </li>  
            
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
               Smart Club  - Hackathon 2017
            </li>
            
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
               ESI Prpgramming Competition - Hack Day
              2018
            </li>
            
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
               CyberSecurity Essentials - ICSI (International CyberSecurity Institute), UK
              2020
            </li>
            
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
                Data Science Math Skills - Coursera
              2020
            </li>
            
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
                 Les fondements des réseaux - LinkedIn
              2020
            </li>
           
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
               5th place at PhD exam - Algeria competition
              2021
            </li>
                         
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
