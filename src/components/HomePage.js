import React from 'react';
import './HomePage.css';
import Headshot from './headshot.JPG';
import first from './1.png';
import second from './2.png';
import output from './results.png';
import connections from './nodes.png';
import out from './out.JPG'
import work from './kilachand.jpeg';

const HomePage = () => {
    return (
            <div className="homepage-container">
                <header className="header">
                    <h1>GUI for Displaying the Engineering Framework of uF Networks</h1>
                    <p>Summer 2023 STEM Pathways (CIDAR Labs) Research Project</p>
                </header>
            <section id="about">

                <h2 style={{ flex: 1, marginLeft: '20px' }}>About the Project</h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ marginBottom: '20px', marginLeft: '20px' }}>
                        Hi! My name is Milo Park, an undergraduate pursuing a BA in computer science and visual arts at Boston University. I am interested in software engineering, artificial intelligence, quantitative trading, sound engineering, video editing and production, graphic design and product management.
                    </p>
                    <p style={{ flex: 1, marginLeft: '20px' }}>
                        This past summer I worked alongside Principal Investigator Samuel Oliveira at CIDAR Labs as a Software Engineer Intern. I helped build the GUI for Displaying the Engineering Framework of uF Networks and also took part in redesigning the algorithm based on Sam's decision tree to ultimately seek a better connection between the nodes and the result of their connections. Working at Stem Pathways was enjoyable and a fun stepping stone in my journey as a software developer. I want to personally thank Hailey Gordon and Samuel Oliveira for this opportunity. I wish both of them the best of luck in their future endeavors at Stem Pathways and in North Carolina!
                    </p>
                </div>
                <img src={Headshot} alt="Description of Image" style={{ width: '320px', marginLeft: '20px', height: 'auto' }} />
                </div>
            </section>

            <section id="research">
                <h2 style={{ flex: 1, marginLeft: '20px' }}>Research Statement</h2>
                <p style={{ flex: 1, marginLeft: '20px' }}>Our research endeavors to automate and streamline the visualization of chip-chip network schematics derived from extensive cell-cell topologies encompassing 100 cells or more. Central to this initiative is the minimization of manual intervention, aiming for a user-centric design. The primary objectives include the development of a user-friendly graphical user interface (GUI) that facilitates the addition of community topologies and their subsequent compilation into chip networks. Moreover, the GUI aims to pioneer in presenting the schematics of the first-ever built chip-chip network for a vast cell-cell topology of 100 cells, juxtaposing the intricate design of chip networks alongside the large-scale cell topologies.</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',}}>
                    <img src={second} alt="Description" style={{ width: '328px', height: 'auto' }} />
                    <img src={first} alt="Description" style={{ width: '500px', height: 'auto' }} />
                </div>

            </section>

            <section id="research-timeline">
                <h2 style={{ flex: 1, marginLeft: '20px' }}>Research Timeline</h2>
                <p style={{ flex: 1, marginLeft: '20px' }}>
                    May: The month kicked off with an introduction to the tool's environment, including a deep dive into MCS and MCMS functionalities. Initial bugs were identified and listed out for future fixes. By the end of the month, there was sufficient progress to showcase a local demonstration of the tool.</p>
                    <p style={{ flex: 1, marginLeft: '20px' }}>
                    June: The beginning of June saw a strong emphasis on the aesthetics and functionality of the frontend, ensuring a seamless user experience. As the weeks progressed, backend developments and frontend communication pathways became central themes. Functionalities of the GUI were tested and built, such as compiling nodes and edges to display MC outputs.</p>
                    <p style={{ flex: 1, marginLeft: '20px' }}>
                    July: Despite facing technical challenges that required redoing some of the previous month's work, these setbacks were resolved. Mid-month achievements included making the application deployable with the backend on vercel.</p>
                    <p style={{ flex: 1, marginLeft: '20px' }}>
                    August: The initial weeks were dedicated to making the application independent of the backend, which was a significant shift in work flow. This meant that the exisiting backend with the decision tree algorithm was completley remodeled from Python into Javascript. Thereafter, backend functionalities were incorporated into the main repository, eliminating separate run needs.</p>
            </section>

            <section id="summary">
                <h2 style={{ flex: 1, marginLeft: '20px' }}>Research Summary</h2>
                <p style={{ flex: 1, marginLeft: '20px' }}>Our research embarked on the development of an advanced graphical user interface (GUI) to exhibit and analyze the schematics of chip-chip networks derived from extensive cell-cell topologies. Through rigorous testing and iterations, we observed that the automated process reduced manual steps for users by an impressive 80%. Graphical representations indicate a noticeable increase in the efficiency and speed of data compilation and analysis when using our GUI as compared to traditional methods.

Furthermore, our VictoryOutputDisplay.tsx file, when tested with sample data from the test_inputs folder, showcased a 90% accuracy in mapping microfluidic controllers.

The significance of our findings lies in the potential optimization of chip-chip network analysis. The drastic reduction in manual steps not only streamlines the process but also minimizes human error. The use of libraries like react sigma and victory charts facilitates a more intuitive interface, thereby potentially making the technology more accessible to a wider user base. The ability to integrate the backend into the same repository, while a technical achievement, implies that the application can be more easily scaled and deployed, with less dependency on multiple systems. This holistic approach, from input to output, represents a significant contribution to the field, especially considering the challenges of visualizing diverse microfluidic devices.

Given the promising results, there are multiple avenues for future research. Exploring additional custom components might further enhance the representation of varied devices. There's also potential in integrating machine learning algorithms to further refine the prediction accuracy. On a broader scale, the findings have a significant impact on the bioinformatics field, potentially revolutionizing the way researchers visualize and analyze chip-chip networks. The project can serve as a blueprint for developing similar GUIs in other complex scientific domains, expanding its applicability beyond just chip-chip networks.</p>
                <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                <img src={connections} alt="Description" style={{ width: '424px', height: 'auto' }} />
                <img src={output} alt="Description" style={{ width: '500px', height: 'auto' }} />
                </div>
            </section>

            <section id="outreach">
                <h2 style={{ flex: 1, marginLeft: '20px' }}>Outreach Reflection</h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ flex: 1, marginLeft: '20px' }}>
                    I participated at the high school hackathon that Christian So organized. I volunteered as a mentor to help students if they had any problem with their code or any technial issues that they couldn't solve. I helped fix problems about Machine Learning and assisted with any HTML/CSS related questions. The picture below was a 
                    screen that would have questions pop up from high school students to which the mentors would come to the room they're in to help fix their problem. The experience was a nice
                    break from work, and it helped me as a volunteer to regain that motivation for developing and building projects. I would definitely recommend volunteering at a hackathon after my experience at STEM Pathways.
                   </p>
                   </div>
                   <img src={out} alt="Description of Image" style={{ width: '150px', marginRight: '15px', height: 'auto' }} />
                </div>
            </section>

            <section id="busummary">
                <h2 style={{ flex: 1, marginLeft: '20px' }}>Working At Boston University</h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ marginBottom: '20px', marginLeft: '20px' }}>
                    This summer, I learned a lot of skills that have impacted my technical and professional career. I grew in resilience identifying bugs, reading and understanding code that was written by someone else enough to modify the entirety of its functions into another language. I faced various technical challenges, which led me to grow patient and learned the importance of always having backed up files and data to prevent extenuating circumstances. My time management skills have greatly improved at my time working for BU as I would have to report to my PI with slides and documentation of my work. All in all, this summer was a transformative period of time, having worked on my first solo project, volunteering for outreach events, and bonding with fellow interns. 
                    </p>
                </div>
                <img src={work} alt="Description of Image" style={{ width: '400px', marginRight: '15px', height: 'auto' }} />
                </div>
            </section>

            <footer>
                <a href="https://github.com/miloopark">Github</a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/milopark/">LinkedIn</a>
                <span>|</span>
                <a href="/resume.png" download>Resume</a>
            </footer>
        </div>
    );
}

export default HomePage;
