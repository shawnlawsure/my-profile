import View from "../view"

import styles from './page.module.css'

export default function Page() {
    return (
        <View heading='Work History'>
            <section>
                <ul className='flex flex-col gap-10'>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Senior Front-End Software Developer (Contract)</span>
                            <span>Mar 2022 - Present</span>
                        </div>
                        <span>Watermark Insights, New York, NY (Remote)</span>
                        <ul className={styles.desc}>
                            <li>Rewrite, from scratch, the UI for an existing ASP.NET application from Angular to React.</li>
                            <li>Build React functional components at various levels of composition.</li>
                            <li>Integrate the new React SPA with a Sitecore CMS back-end.</li>
                            <li>Rewrite back-end API endpoints in ASP.NET using C# to support the new front-end UI.</li>
                            <li>Configure the new front-end project using Webpack for both development and production builds/deployments.</li>
                            <li>Use Webpack Module Federation to employ a microservices architecture for the front-end.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Front-End Software Developer (Contract)</span>
                            <span>Feb 2021 – Mar 2022</span>
                        </div>
                        <span>ON24, San Francisco, CA (Remote)</span>
                        <ul className={styles.desc}>
                            <li>Design and develop front-end pages and components for two large single-page web applications using JavaScript, Vue.js, Vuex, Nuxt.js, Tailwind, Webpack, Redis, and Axios.</li>
                            <li>Lead the front-end team at times during the project.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Full-Stack Software Developer (Contract)</span>
                            <span>Sep 2020 – Feb 2021</span>
                        </div>
                        <span>ToolWatch, San Francisco, CA (Remote)</span>
                        <ul className={styles.desc}>
                            <li>Design and develop enhancements to a large enterprise-level operations management application for the construction industry using .NET (WinForms), C#, JavaScript, and Vue.js.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Senior Software Developer (Contract)</span>
                            <span>Feb 2019 – Nov 2019</span>
                        </div>
                        <span>ProSearch, Inc., Portland, ME (Remote)</span>
                        <ul className={styles.desc}>
                            <li>Design and develop browser-based insurance applications and corresponding back-end services using JavaScript, Vue.js, C# and T-SQL.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Senior Application and Database Developer</span>
                            <span>Nov 2017 – Apr 2018</span>
                        </div>
                        <span>Tri-Plus Services, Inc., Portland, ME</span>
                        <ul className={styles.desc}>
                            <li>Design and develop enhancements to a large WPF desktop application, including the associated WCF services and SQL Server databases, used for administering Long-Term Care insurance.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Software Developer</span>
                            <span>Oct 2015 – Nov 2017</span>
                        </div>
                        <span>Common Census, Inc., Westbrook, ME</span>
                        <ul className={styles.desc}>
                            <li>Designed and developed enhancements to a large enterprise-level employee benefits application written in ASP.NET, C#, VB.NET, JavaScript and a variety of client-side libraries and frameworks including Bootstrap and Knockout.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Application Development Manager/Senior Application Developer</span>
                            <span>Mar 2010 – Sep 2015</span>
                        </div>
                        <span>Diversified Communications, Portland, ME</span>
                        <ul className={styles.desc}>
                            <li>Managed a team of senior-level developers.</li>
                            <li>Provided technical leadership for all enterprise applications including, but not limited to, CRM (Salesforce), Financial (GP Dynamics), Invoicing (custom), Master Data Management (custom), Reporting (SSRS), and external web sites (Joomla).</li>
                            <li>Developed and provided technical leadership for transitioning our old CRM to Salesforce; including creating triggers, components and classes in addition to integrating with external systems/databases.</li>
                            <li>Developed architecture and designed all new systems including the integrations between them.</li>
                            <li>Managed and helped implement small to mid-size IT projects including the conversion of our external websites from Ektron to Joomla and from Joomla to WordPress (using PHP).</li>
                            <li>Customized and maintained a third-party CRM web application (SalesLogix) written primarily in ASP.NET and C# with SQL Server.</li>
                            <li>Designed and developed custom applications (ASP.NET, C#, JavaScript) that integrate marketing, accounting, and sales.</li>
                            <li>Designed and developed a master data management web application (ASP.NET, C#, JavaScript) and database (SQL Server) along with a batch process to perform de-duplication and record linking from many sources of contact and company data.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Independent Software Developer</span>
                            <span>Sep 2009 – Aug 2015</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div>
                                <span>University Disability Consortium, Newton, MA (Remote)</span>
                                <ul className={styles.desc}>
                                    <li>Developed a web application using ASP.NET, C#, JavaScript, WCF, and MySql to manage referrals and associated documents for use by employees, consultants, and clients.</li>
                                </ul>
                            </div>
                            <div>
                                <span>Professional Disability Associates, Portland, ME (Remote)</span>
                                <ul className={styles.desc}>
                                    <li>Developed a SharePoint site primarily focused on sharing medical documents between employees, consultants, and clients.</li>
                                    <li>Developed a claim management system using Silverlight, WCF, ADO.NET Data Services, and ADO.NET Entity Data Modeling.</li>
                                </ul>
                            </div>
                            <div>
                                <span>Dial Medical Direct Inc, South Portland, ME</span>
                                <ul className={styles.desc}>
                                    <li>Developed functionality within Microsoft Access that creates Health Care Claim Professional (837P) EDI documents.</li>
                                    <li>Developed and implemented a delivery confirmation application that interfaces with UPS and USPS using XML-based web services.</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Senior Software Engineer</span>
                            <span>May 2002 – Sep 2006</span>
                        </div>
                        <span>Aetna (formerly Broadspire, Inc.), Westbrook, ME</span>
                        <ul className={styles.desc}>
                            <li>Designed and developed a Web-based “script engine” and an associated “script maintenance” application that allows business analysts to build their own scripts for data intake through the Web (VB.NET and ASP.NET 2.0).</li>
                            <li>Designed and developed major enhancements to a Web-based absence management application (VB.NET and ASP.NET 2.0).</li>
                            <li>Rewrote major parts of the existing code base using a Microsoft-based software architecture that includes the implementation of Business Entities and Business Process Components to make the code base more maintainable and efficient.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Software Engineer</span>
                            <span>Apr 2000 – Apr 2002</span>
                        </div>
                        <span>DeLorme Inc., Yarmouth, ME</span>
                        <ul className={styles.desc}>
                            <li>Maintained and enhanced a set of GIS software components (C++ and COM) used in a variety of world-re-known mapping software products. These components include a GPS interface, an Internet download component, and a map printing component.</li>
                            <li>Worked closely with a user interface design group in analyzing and designing new interfaces for software components.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Software Developer</span>
                            <span>Sep 1996 – Apr 2000</span>
                        </div>
                        <span>Allenbrook, Inc., Portland, ME</span>
                        <ul className={styles.desc}>
                            <li>Designed and developed major enhancements to, as well as maintained and supported, a tool-based client/server insurance policy processing system (including, but not limited to, policy entry, billing, commissions and rating) using Centura Team Developer, Visual C++, and COM.</li>
                            <li>Designed, developed, and gathered requirements for a major insurance tool sub-set used to process Premium Audits and integrated this new functionality into the existing tool set.</li>
                            <li>Develop database scripts for Oracle, SQL Server, and SQLBase.</li>
                        </ul>
                    </li>
                    <li className={styles.job}>
                        <div className={styles.titleLine}>
                            <span className={styles.title}>Programmer, Programmer/Analyst, Senior Programmer/Analyst</span>
                            <span>May 1991 – Sep 1996</span>
                        </div>
                        <span>UNUM Insurance Company of America, Portland, ME</span>
                        <ul className={styles.desc}>
                            <li>Enhanced a mainframe-based insurance billing system using COBOL II, JCL, and WASM</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </View>
    )
}