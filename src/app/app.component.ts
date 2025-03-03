import { Component, ViewChild, ElementRef } from '@angular/core';
import { Project } from './models/project';
import { Education } from './models/education';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projects: Project[] = [
    {
      clientName: "American Express",
      Location: "Phoenix, AZ",
      duration: "Aug 2024 to present",
      description: `At American Express, I played a key role in developing the front-end and back-end of the Financial Crimes Platform (FCP), which helps detect and investigate fraudulent transactions. On the front-end, I designed and built dynamic user interfaces using React, ensuring a seamless and intuitive experience for investigators. I worked closely with UX/UI designers to enhance the platform's usability, which significantly improved investigator efficiency. To manage state across the application, I used React Context API and Redux, ensuring smooth data flow and improving performance. I also utilized React Hooks and React Router for better state management and navigation.

    I implemented responsive web designs using CSS3 and Styled Components, making the platform compatible with various devices and screen sizes. I built reusable UI components with React and Material-UI, reducing development time and ensuring a consistent design system. Additionally, I created complex forms with validation using React Hook Form, improving user interactions. To handle side effects like API calls and background tasks, I integrated Redux-Saga, ensuring smooth data flow and an enhanced user experience.

    On the back-end, I developed Java and Spring Boot services for processing financial data and integrating with external systems through secure RESTful APIs. I utilized Spring Security for authentication and authorization, ensuring secure access to the platform. Additionally, I integrated Kafka for real-time event streaming to support communication between microservices. Throughout the project, I focused on building a high-performance, scalable, and secure system, balancing both the front-end and back-end requirements.`
    },
    {
      clientName: "Charter Communications",
      Location: "Denver, CO",
      duration: "August 2022 to July 2024",
      description: `I was responsible for developing a Speed Test application for Charter customers, designed to measure the upload and download speeds of their Wi-Fi modems and routers. The user interface was built using Angular, ensuring a seamless and responsive experience. I implemented state management with NgRx and created reusable components to enhance maintainability. Additionally, I worked with both reactive and template-driven forms to handle user input, integrated GraphQL APIs with Java for real-time data updates, and optimized performance using lazy loading and RxJS Observables. I also ensured cross-browser compatibility and conducted unit and end-to-end testing using Jasmine and Karma. On the backend, I worked with AWS services such as S3, Lambda, and API Gateway. I also used AWS for cloud infrastructure, leveraging S3 for hosting and CloudWatch for monitoring application performance, ensuring that our services remained highly available and optimized. By streamlining the development process with Angular CLI and optimizing build performance with Webpack, I contributed to delivering a robust and efficient application that significantly improved customer satisfaction.`
    },
    {
      clientName: "Ringmaster Technologies",
      Location: "Overland Park, KS",
      duration: "Jan 2022 to July 2022",
      description: `At Ringmaster Technologies, I developed dynamic and responsive web applications using React JS for the front end and Node.js for backend APIs and microservices. React’s component-based architecture helped build scalable and maintainable solutions. I improved performance by using React.lazy for lazy loading, React-Redux for state management, and Material UI to create reusable components for consistency. I ensured cross-browser compatibility using Babel and implemented React Hook Form to handle complex forms with validation and dynamic updates. On the backend, I developed RESTful APIs with Node.js and Express.js, integrated MongoDB for data management, and used Node.js’s asynchronous capabilities with Promises and async/await for efficient data processing. For cloud infrastructure, I used AWS S3 for hosting and AWS CloudWatch for monitoring performance, ensuring high availability and optimization. I also contributed to unit and integration testing with Mocha, and integrated CI/CD pipelines with Jenkins and GitLab to automate testing, deployment, and monitoring. Throughout, I participated in code reviews to share knowledge and best practices within the team.`
    },{
      clientName: "University of Cental Missouri", 
      Location: "Warrensburg, MO",
      duration: "Jan 2022 to July 2022",
      description: `During my Master's at UCM, I worked with the university's internal application team and helped fix broken links and improve the website's navigation. Many of the links were outdated or led to error pages, making it difficult for students and staff to access important information.To solve this, I reviewed the website, found the broken links, and updated them with the correct URLs. I also improved the navigation menu to make it easier for users to access key sections of the website. These changes made the website much more user-friendly and allowed users to quickly find the information they needed.For this project, I used HTML, CSS, JavaScript, and jQuery for front-end updates, and Java was used for backend improvements when needed.`
      }]


  // educationDetails
  educationDetails: Education[] = [
    {
      collegeName: 'University of Central Missouri',
      duration: 'Jan 2021 to May 2022',
      degreeName: 'Master of Science in Engineering',
      description: 'Completed masters with 3.6 GPA'
    }
  ];

  // skills
  skills: string[] = ['React', 'Angular', 'Javascript', 'HTML5', 'CSS3', 'Redux', 'Jasmine',  'SCSS', 'Typescript', 'DOM', 'Node.js', 'AWS',
    'Protractor', 'Cucumber','Karma', 'ngRx', 'Java', 'Spring', 'Spring boot', 'Hibernate', 'Junit', 'Microservices', 'GraphQL','Rest API', 'Docker', 'GitHub'];
}

