import React from 'react';

class ExperiencePage extends React.Component {

    render() {
        return (
            <div id="pageContent" className="animated fadeInLeft">
                <h1>Experience</h1>

                <h2>Education</h2>
                <div className="edu groupedText">
                    <ul>
                        <li><b>Florida Atlantic University</b>
                            <div className="location">Boca Raton, Fl. USA</div>
                            <div className="time">Graduation May 1991</div>
                        </li>
                        <li>BS Computer Science</li>
                    </ul>
                </div>

                <br/>
                <br/>

                <h2>Certifications</h2>
                <div className="exp groupedText">
                    <b>Unity Certified Programmer </b>
                    <div className="time">July 2020</div>
                </div>

                <div className="exp groupedText">
                    <b>AWS Certified Developer Associate </b>
                    <div className="time">In progress</div>
                </div>

                <div className="exp groupedText">
                    <b>American Express and Harvard Certification in Leadership Excellence </b>
                    <div className="time">Aug 2018</div>
                </div>

                <div className="exp groupedText">
                    <b>TOGAF 9 - The Open Group </b>
                    <div className="time">Apr 2014</div>
                </div>

                <h2>Career</h2>
                <div className="exp groupedText">
                    <b><a href="http://www.americanexpress.com">Staff Engineer/Architect - American Express</a></b>
                    <div className="location">Ft. Lauderdale, Florida</div>
                    <div className="time">Apr 2016 - current</div>
                    <br/>
                    Enterprise Platform team member, responsible for evolving American Express Global Statements and Disclosures mainframe and distributed platforms to IaaS/PaaS cloud based
                    architectures. Additionally responsible for driving the platform&#39;s API exposure and CICD maturity.
                </div>

                <div className="exp groupedText">
                    <b><a href="http://www.americanexpress.com">Director of Technical Architecture - American
                        Express</a></b>
                    <div className="location">Ft. Lauderdale, Florida</div>
                    <div className="time">Nov 2013 - Apr 2016</div>
                    <br/>
                    Provided architecture and strategic direction for several key World Service and Global
                    Credit Administration platforms: Enterprise Content Management/Imaging, Fax, Scan, Operational
                    Performance, MIS, Workforce/ Knowledge and Learning management. I led the creation and refresh of
                    the portfolio&#39;s roadmaps and blueprints which influence and steer approximately $10-20MM annual
                    investment for the collective portfolio as part of investment optimization.
                </div>

                <div className="exp groupedText">
                    <b><a href="http://www.americanexpress.com">Lead Technical Architect - American Express</a></b>
                    <div className="location">Ft. Lauderdale, Florida</div>
                    <div className="time">Oct 2005 - Nov 2013</div>
                    <br/>
                    Lead architect for the American Express business facing Imaging, Fax and
                    Scan utilities having a global customer base. Provided technical direction and oversight for all
                    projects implemented by the team and the application service hosting providers. Maintained strong
                    business partner relationships to ensure strategic and tactical platform needs and opportunities are
                    understood, prioritized and provided with a clear multi-year plan.
                </div>

                <div className="exp groupedText">
                    <b><a href="http://www.americanexpress.com">Programmer to Lead Programmer Analyst - American
                        Express</a></b>
                    <div className="location">Ft. Lauderdale, Florida</div>
                    <div className="time">Oct 1992 - Oct 2005</div>
                    <br/>
                    Primarily responsible for designing, building, and implementing many business automation
                    applications for Imaging related business functionalities.
                    In addition, worked for several years within the Servicing and Disputes portfolios helping to design
                    and build Windows based front ends for several legacy mainframe environments to aid in automation of
                    dispute handling and customer identification processes. Designed and built the Universal Customer
                    Identification system for American Express, which is used to aid agents in establishing the identity
                    of customers who call for servicing their card member accounts.
                </div>

                <div className="exp groupedText">
                    <b><a href="http://www.ctg.com">Programmer - Computer Task Group</a></b>
                    <div className="location">Phoenix, Arizona</div>
                    <div className="time">Oct 1991 - Oct 1992</div>
                    <br/>
                    Programmer Analyst Contract position, mainframe coding, responsible for American Express Service
                    Establishment oriented mainframe jobs and IMS screens.
                </div>

                <h2>Awards</h2>
                <div className="exp groupedText">
                    <b>American Express Technologies -  Digital Exchange innovation </b>
                    <div className="time">Q3 2015</div>
                    <br/>
                    Awarded first place for a digital learning innovation using Oculus Rift/Virtual Reality as a means to provide bite-sized video training in a distraction
                    free fully immersed environment.
                </div>

                <div className="exp groupedText">
                    <b>American Express Technologies -  Gold Excellence  </b>
                    <div className="time">2006</div>
                    <br/>
                    One of 65 recipients (out of 565 technology focused candidates) personally recognized for driving results, demonstrating leadership and delivering value to American Express.
                </div>

                <div className="exp groupedText">
                    <b>American Express Technologies -  Chairman’s Award  </b>
                    <div className="time">2000</div>
                    <br/>
                    Top Award, as a result of creating a solution for delivering and storing digital remit images from globally dispersed third party lock-box vendors. Built a solution for internal
                    American Express customer service agents to search/view the images to help resolve payment oriented servicing requests.
                </div>

            </div>
        );
    }
}

export default ExperiencePage;
