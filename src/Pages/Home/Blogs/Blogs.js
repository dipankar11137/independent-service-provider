import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container mt-4 '>
            <h2 className='text-center mb-3 text-decoration-underline'>Answer The Question</h2>
            <div className='shadow p-2 pt-4  bg-light '>
                <h3>Difference between authorization and authentication</h3>
                <p>Simply put, authentication is the process of verifying someone, where authentication is the process of verifying which user has access to a particular application, file and data. The situation is like an airline that has to decide which person can come on board. The first step is to confirm the identity of a passenger so that they know who they are. Once a passenger has been identified, the second step is to verify a special service that the passenger has access to, whether it is a first-class flying or going to a VIP lounge.In the digital world, authentication and approval achieve these same goals. Authentication is used to verify that users are actually who they represent. Once this is confirmed, authorization is used to allow users to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
            </div>

            <div className='shadow p-2 mt-4 bg-light pt-4 '>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase helps you create and run successful apps. You can rely on products and solutions throughout the journey of your app, developed by Google and supported by. Customize your app. Powered by Google. Quick build for any device. Boost App Engagement.</p>
                <p>Typically, authentication by a server entails the use of a username and password. Other means of authentication can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>

            <div className='shadow p-2 mt-4 bg-light pt-4 '>
                <h3>What other services does firebase provide other than authentication .</h3>
                <p>When applications and servers are hosted in-house, the security responsibilities of IT operations admins are clearly defined; Teams can physically view or at least directly control the IT resources running in their data centers. With cloud computing, however - where users essentially "rent" computer resources from a provider - administrators must drastically change how they handle workloads. And, in some cases, it creates security coverage gaps.While SaaS and PaaS each offer unique cloud security considerations, administrators can also apply some basic best practices from the day they secure their on-premises resources.With SaaS, enterprises access an application that is fully hosted and managed by a cloud provider. It may seem that IT teams are free from any security responsibilities, especially when it comes to maintaining work pressure on campus. The problem, however, is that it compares orange to an apple.</p>
            </div>

        </div>
    );
};

export default Blogs;