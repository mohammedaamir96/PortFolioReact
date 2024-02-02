import React from 'react'
import './Section.css';

const Section = () => {
  return (
    <div class="container">
    <section id="about" class="section">
        <h2>About Me</h2>
        <p>
            <ol>
                <li>6.5 Years of experience in Java & J2EE Technologies. </li>
                <li>Hands on experience in developing components at server side and presentation layers.</li>
                <li>Having good knowledge in OOPS concepts.</li>
                <li>Expertise on Core Java, JDBC, Servlets, JSP, Hibernate, Spring Core, Spring MVC, Spring REST, Spring BOOT, Spring Security, HTML, CSS, Vanilla JavaScript, ReactJS, React Native, MySQL, PostgreSQL.</li>
                <li>Expertise on using Tomcat.</li>
                <li>Hands on experience in developing cloud environments in AWS Cloud services.</li>
                <li>Exposure in entire Model View Controller (MVC), REST API frameworks.</li>
                <li>Extensive exposure in using IDE – Eclipse, Visual Studio, STS.</li>
                <li>Good understanding of SQL queries language and MySQL and PostgreSQL.</li>
                <li>Expertise in Web Services.</li>
                <li>Expertise in testing Spring Rest using Postman tool.</li>
                <li>Expertise in managing source code in GitHub.</li>
            </ol>
        </p>
    </section>

    <section id="projects" class="section">
        <h2>Projects</h2>
        <div class="project">
            <h3>SHIZUOKA BANK</h3>
            <p>
            This is a Banking Application which is a live project in Japan located in Shizuoka. It has all banking features like Mobile banking, ATM Transaction, etc. Requirement from client to automate the process for Address and Banking information update. We have developed 2 APIs for resolving customer queries.
            •	Retrieving customer address from PIN Code and Type Code (Address change request).
            •	Retrieving bank information through bank code and branch code (Branch change request). 
            Automated the request done via tablets instead of form request and implemented the code with API testing. Written Junit to cover all scenarios for 2 APIs. 
            </p>
        </div>
        <div class="project">
            <h3>PFLAME INSURANCE</h3>
            <p>
            This is Insurance project which provides the information of available insurance policies and amount to be paid will be providing compensation amount details. We can see the product(insurance) details and plan for the insurance. If we click on each plan, we can see the compensation amount of the plan. These details can be checked based on the login user. This caters to multiple classes of the business namely; General accident, Property, Causality, Fire, Engineering, Marine Cargo and Hull, Aviation, and Motor. Also some utilities are included such as intimating due dates for their customers, greeting them on their birth days, estimating loan amounts for their customers, etc. And for security purposes, encryption and decryption was employed.
            </p>
        </div>

        <div class="project">
            <h3>PMTOMO</h3>
            <p>
            This is Project Management Application which provides the information of all employees working in the organization. It provides the information of employees worked in previous project and how many years they are pursuing in the organization. It has the functionality where we can download the resume in predefined format.  It gives more information of employees about their levels and experience etc. We have given authorization for certain users where admin user can have access for all functionality but users will not have certain access.
            </p>
        </div>
        
        <div class="project">
            <h3>MDX INTERNATINALIZATION (IBM Micromedex)</h3>
            <p>
            This is Health care enterprise application known as Micromedex Solutions which provides information regarding drug, disease and toxicology to the end users. Using micromedex we can performs drug comparison, drug interaction, IVCompatibility and it also provides dosage based on the disease and symptoms. It also contains chatbot to provide quick solutions. The contents and dosage information provided in this application are verified and tested and it is preferably used by the doctors and researchers.
            </p>
        </div>

        <div class="project">
            <h3>MDX PWA (IBM Micromedex).</h3>
            <p>
            This is Health care mobile application of Micromedex solution known as MDX PWA. which acts as a personal assistance to the user. It is generally a chatbot with AI which provides quickanswers and indepth answers, drug dosage and IVCompatibility for drugs. It also provides dosage based on the disease and symptoms. It makes use of IBM Cloud for storage and all the information provided by the chatbot are verified by the third-party clients.
            </p>
        </div>

        <div class="project">
            <h3>Jack prodigy</h3>
            <p>
            This application is used to maintain Data about the academic partners and to maintain the details about the History of Assignment, Notifications, schedule, Backlogged and completed by Professor. The project includes creation of Login Password for each Educational Organizations by Admin, admin can create sub accounts for Professors, students and non-teaching staff. Assignment of task to the students by staff and online submission of Task by each student after completion and completed task are verified by the Staff and Remarks are sent based on the Performance.
            </p>
        </div>

        <div class="project">
            <h3>Steel CRM</h3>
            <p>
            This Application is mainly designed for handling the customer, vendor details and products. This project includes the transaction details of both vendor and customer. Client will be adding the items in the application on the purchase from vendor/supplier. Client will be adding items which is displayed on the application. Then this application will generate the invoice based on customer purchase. In this application we have designed to generate the invoice based on retail or wholesale purchase. Here we can track the invoice detail whether the customer have paid or not. By clicking invoice button client can see or download waybill.
            </p>
        </div>
    </section>

    <section id="skills" class="section">
        <h2>Skills</h2>
        <ul>
            <li>•	Programming Languages	: Java 8, HTML, CSS, Vanilla JavaScript, ReactJS, ReactNative.</li>
            <li>•	Advanced Java/J2EE Concepts: Servlets, JSP, JDBC, Hibernate 4, Web Services</li>
            <li>•	Frameworks	: Spring MVC, Spring REST, Spring BOOT.</li>
            <li>•	Server	: Apache Tomcat </li>
            <li>•	Databases	: MY SQL, PostgreSQL</li>
            <li>•	Tool	: Eclipse, Visual Studio Code, STS</li>
            <li>•	Operating System	: Windows 2010, Linux(Ubuntu).</li>
            <li>•	Source Code Management	: GitHub, GitBash.</li>
        </ul>
    </section>

    <section id="language" class="section">
        <h2>Languages</h2>
        <ul>
            <li>•	Fluent in English, Tamil and Urdu.</li>
            <li>•	Pursuing A1 Level in French.</li>
        </ul>
    </section>

    <section id="contact" class="section">
        <h2>Contact Me</h2>
        <p>Email: mohammedaamir2796@gmail.com</p>
        <p>LinkedIn: www.linkedin.com/in/mohammed-aamir-730a83134</p>
        <p>GitHub: https://github.com/mohammedaamir96</p>
    </section>
    </div>
  )
}

export default Section