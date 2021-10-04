import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
     return (
          <div>
               <Container className="mt-5">
                    <Row>
                         <h2 className=" mb-4">Top <span className="text-primary">blogs</span>  in week</h2>



                         <Col sm={12} lg={8}>
                              <div className="m-3">
                                   <h3 ><a href="#1">" Those Other College Expenses You Aren`t Thinking About"</a></h3>

                                   <img src="https://stylemixthemes.com/masterstudy/one-instructor/wp-content/uploads/sites/14/2015/06/photo-1490376840453-5f616fbebe5b-1170x500.jpeg" className="img-fluid" alt="" />
                                   Online diplomas are awarded for one to two years of study at a community college, technical school or university. If determined, students can complete an online diploma program while continuing to work, care for loved ones or fulfill other commitments. Online diploma programs are highly practical, allowing students to study a specific area, with a thorough overview of the field.
                                   <li>Associate degrees usually take approximately two years.</li>
                                   <li>Offered at schools in Germany, Italy, the Netherlands</li>
                                   <li>The web-based study format opens doors to studying.
                                   </li>
                                   <li>You can find online certificates in a wide variety of undergraduate
                                   </li>
                                   <li>Offered at schools in Germany, Italy, the Netherlands</li>
                              </div>
                         </Col>


                         <Col sm={12} lg={8}>
                              <div className="m-3">
                                   <h2><a href="#2">OUR MAIN TARGET IS TO “DEVELOPING YOURSELF AS A LEADER”</a></h2>

                                   <img src="https://stylemixthemes.com/masterstudy/one-instructor/wp-content/uploads/sites/14/2018/08/photo-1517520287167-4bbf64a00d66-1170x500.jpeg" className="img-fluid" alt="" />
                                   <h5>Summer courses are a great way to gain qualifications and academic credits in a convenient format. Offered during the summer months while some working professionals and students are taking a break, online summer courses fit nicely into a busy schedule. The web-based study format opens doors to studying at a university that is geographically distant, or at times that are most convenient for each individual student.</h5>
                              </div>
                         </Col>

                         <Col sm={12} lg={8}>
                              <div className="m-3">
                                   <h2><a href="#">An Informal Survey of Web Performance Tooling in 2021</a></h2>
                                   <h6>What tools are web performance engineers using to measure site speed in 2021? Learn which are the most used tools as well as some new tools to try out.</h6>
                                   <p>Sometimes it's hard to discover all the great web performance measurement tools out there. What are performance engineers using in 2021? What tools do they want to use?

                                        I set out to answer these questions by creating a survey. I shared this survey with the web performance engineering community. It's not statistically perfect (27 responses), but I still found it insightful. I also learned a lot for next year.

                                        This post will cover:

                                        Survey questions
                                        Top web performance tools
                                        Top tools people want to use
                                        All results (data and chart)
                                        Great tools that were left out
                                        Favorite tools
                                        Least favorite tools
                                        Lessons learned and conclusion.....</p>

                              </div>
                         </Col>

                         <Col sm={12} lg={8}>
                              <div className="m-3">
                                   <h2><a href="#">Top web performance tools</a></h2>
                                   <h6>What tools are web performance engineers using to measure site speed in 2021?Learn which are the most used tools as well as some new tools to try out.</h6>
                                   <p>Combining the data from the first two columns ("I use this tool regularly" and "I use this tool sometimes") yields a list of the most used tools:

                                        WebPageTest and Chrome Network & Performance Tabs (tied for 1st)
                                        PageSpeed Insights and Running on a browser with JavaScript disabled (tied for 2nd)
                                        Chrome Coverage tool
                                        Qualys SSL Server Test
                                        Cloudinary Image Analysis Tool
                                        WebPageTest API and WebPageTest comparison URL generator (tied for 6th)
                                        We can see that WebPageTest and Chrome dominate the list of the top tools.Yet, Qualys' SSL server test and Cloudinary's image analysis tool fill important gaps.

                                        I appreciate that one of the top tools is not a tool at all: turning JavaScript off in the browser settings and seeing what happens on page load.

                                        Testing without JavaScript: Going into your browser settings to turn JavaScript on and off can be tiring.My solution is a separate Chrome profile where JavaScript is permanently turned off.It's buddies with my no-extensions Chrome profile that I use for performance testing. Browser extensions to toggle JavaScript also exist.</p>

                              </div>

                         </Col>

                         <Col sm={12} lg={8}>
                              <div className="m-3">
                                   <h2><a href="#">CSS Wizardry Posts Archive</a> </h2>
                                   <h6>I have written 225 post on this site, mostly covering CSS, architecture, performance, and web development.Find a reverse-chronological list of them all here.</h6>
                                   <p>2011
                                        December 11: On HTML and CSS best practices
                                        December 07: Measuring and sizing UIs, 2011-style (and beyond)
                                        November 08: Create a notched current-state nav
                                        November 05: Build-along #1, reflection and reasoning
                                        November 03: CSS Wizardry build-along #1
                                        November 02: Sam Penrose Design—process and write-up
                                        October 31: Fully fluid, responsive CSS carousel
                                        October 27: The CSS Wizardry build-along is go!
                                        October 25: Build-along (testing the water)
                                        October 18: Reset restarted
                                        October 16: The ‘island’ object
                                        September 22: The ‘nav’ abstraction
                                        September 17: Ordered and numbered lists; the differences
                                        September 17: Writing efficient CSS selectors
                                        September 13: Do designers need to code?
                                        September 11: When using IDs can be a pain in the class ...
                                        August 24: Two titillating table tips
                                        August 23: Building better grid systems
                                        August 18: Good developers are illusionists
                                        August 08: Updated CV
                                        August 02: More logo markup tips
                                        July 31: Borders on responsive images
                                        July 31: hry.rbrts.me
                                        July 25: .net magazine awards nominee
                                        July 16: Responsive images right now
                                        June 28: Fluid grid calculator
                                        June 20: Namespacing fragment identifiers
                                        June 19: What is inuit.css?
                                        June 18: Styling alt text on images
                                        June 11: Introducing igloos—inuit.css gets plugins
                                        June 05: DIBI 2011
                                        June 03: Annotateds in HTML5 and CSS
                                        May 31: Font sizing with rem could be avoided
                                        May 24: jQuery placeholder plugin/polyfill
                                        May 18: On negative hovers
                                        April 20: Introducing inuit.css
                                        March 15: Ideas of March
                                        March 14: Coding up a semantic, lean timeline
                                        March 14: Link: Technical Web Typography: Guidelines and Techniques
                                        March 01: Problems with the sans-serif hack
                                        February 22: Mobile business card
                                        February 17: Creating a pure CSS dropdown menu
                                        February 17: Pure CSS(3) accordion
                                        February 09: CSS powered ribbons the clean way
                                        February 06: in: focus—a case study
                                        February 03: Announcing in: focus   January 31: Forget responsive web design…January 29: Create a centred horizontal navigation January 23: LinkRecreating the Luke's Beard social icons with CSS3
                                        January 23: Using the  element as a wrapper
                                        January 23: HTML(5) and text-level semantics
                                        January 18: Client respect
                                        January 12: Maximising hit-area for usability
                                        January 11: HTML elements, tags and attributes
                                        January 10: A new year, a new CSS Wizardry II January 07: Scrolling overflowed content in iO  January 06: The real HTML5 boilerplatJanuary 05: A new year, a new CSS Wizardry</p>

                              </div>
                         </Col>
                    </Row>

               </Container >

          </div >
     );
};

export default Blogs;