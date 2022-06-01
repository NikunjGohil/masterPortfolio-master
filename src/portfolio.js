/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nikunj's Portfolio",
  description:
    "Hello ** I am Nikunj Gohil, I am Quite Good In Web Development Into Python ,Django, I Have Achived More enough Knowledge in that. And Currently Exploring the Field of React .I am Currently Looking For an Internship in Python, Django Or React Because I want to enhance My Knowledge and Learning Capacity.",
  og: {
    title: "Nikunj Gohil Portfolio",
    type: "website",
    url: "https://NikunjGohil.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Nikunj Gohil",
  logo_name: "Nikunj Gohil",
  nickname: "WebDeveloper",
  subTitle:
    "I am Quite Good In Web Development Into Python ,Django, I Have Achived More enough Knowledge in that. And Currently Exploring the Field of React .I am Currently Looking For an Internship in Python, Django Or React Because I want to enhance My Knowledge and Learning Capacity.",
  resumeLink:
    "https://drive.google.com/file/d/10ULXjqcRBYVKc_zRMZHE2H27BgX9cWzV/view?usp=sharing",
  portfolio_repository: "https://github.com/NikunjGohil",
  githubProfile: "https://github.com/NikunjGohil",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  
  {
    name: "Github",
    link: "https://github.com/NikunjGohil",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nikunj-gohil-731256233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bf1DjMvkOQKybjQQRvJg%2FUA%3D%3D",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC-NNiYAfYvYo2OtPgKxuN8Q",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:nikunjsagar99790@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Nikunj_Gohil78",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/nikunjshih.gohil",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nikunj_._gohil/?hl=en",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
   
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing Website using Django, ",
        "⚡ Creating application backend in Django ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092e20",
          },
        },
       
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        
        
       
        
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ I havebeen working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ I have Store My website Data in Mysql",
        "⚡ Setting up streaming jobs from DB to Server on AWS",
      ],
      softwareSkills: [
       
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
       
        
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#1488C6",
          },
        },
        
      ],
    },
    
  ],
};

// Education Page


const degrees = {
  degrees: [
    {
      title: "R B Institute Of Management Studies,Hiravadi",
      subtitle: "Master of Computer Application",
      logo_path: "RBIMS-LOGO.png",
      alt_name: "RBIMS",
      duration: "2022 - Present",
      descriptions: [
         ],
      website_link: "http://rbi.edu.in/",
    },

    {
      title: "SMT. A.P. PATEL ARTS & LATE SHREE N.P. PATEL COMMERCE COLLEGE,Naroda",
      subtitle: "Bachelor of Arts With Computer",
      logo_path: "Smt_A_P_Patel_Arts_AndLate_Shri_N_P_Patel_Commerce_College__Ahmedabad_1_-removebg-preview.png",
      alt_name: "A.P Patel",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ I have studied basic subjects like HTML,CSS,CYBERSRCURITY, OS etc.",
        
        
      ],
      website_link: "https://www.appatelcollege.org/",
   },


   {
    title: "Government Polytechnic Ahmedabad,Ambavadi",
    subtitle: "Diploma Information Technology",
    logo_path: "Icon.png",
    alt_name: "GPA",
    duration: "2016 - 2019",
    descriptions: [
      "CGPA:7.30",
      "RESULT:FIRST CLASS WITH DISTRICTION",
      "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      "⚡ Apart from this, I have done courses on Python, Django, Cloud Computing .",
      "⚡ I havebeen Anchoring in my collage function .",
      
    ],
    website_link: "http://www.gpah.cteguj.in/",
 },

 {
  title: "Gujarat Secondary and Higher Secondary Education Board, Gandhinagar",
  subtitle: "HSC",
  logo_path: "gseb.png",
  alt_name: "HSC",
  duration: "2019",
  descriptions: [" 12th equivalent certificate to Gujarat Secondary and Higher Secondary."
   
  ],
  website_link: "https://www.gseb.org/",
},

   {
    title: "SARASWATI VIDHAYALAY,Uttamnagar",
    subtitle: "SSC",
    logo_path: "saraswati-devi-png.png",
    alt_name: "Saraswati Vidhyalay",
    duration: "2016",
    descriptions: [ "Result:69%"
],
    website_link: "https://entranceindia.com/city-institution-amd/saraswati-vidhya-mandir-in-khodiar-nagar-ahmedabad/",
 },


  ],

  


};



const certifications = {
  certifications: [
    {
      title: "Software Engineering Virtual Experience",
      subtitle: " JP Morgan Chase & Co ",
      logo_path: "J.P.-Morgan-Chase-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1LvPCACGEmX4EiJFzhqIJLF9VGSuVwaOP/view?usp=sharing",
      alt_name: "JPMorgan Chase ",
      color_code: "#FFFFAF",
    },
    {
      title: "Solutions Architect Virtual Experience Program",
      subtitle: " AWS",
      logo_path: "Amazon-Web-Services-AWS-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1KZ06PbATdDbonIcaHGBBoQ3qeZ5QhdfL/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Developer Program",
      subtitle: "Accenture",
      logo_path: "Accenture-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1g7aw1jKVyYBYbo5VBYueeZXeHiQee15X/view?usp=sharing",
      alt_name: "- Accenture",
      color_code: "#0C9D5899",
    },
    {
      title: "Cybersecurity Virtual Experience Program",
      subtitle: "- MasterCard",
      logo_path: "MasterCard_Logo.svg.png",
      certificate_link:
        "https://drive.google.com/file/d/1B9b1qL0wi_Ugr8pbkFFLyn-cAaZ9QGDr/view?usp=sharing",
      alt_name: "MasterCard",
      color_code: "#1F70C199",
    },
    {
      title: "Data Science",
      subtitle: "- Infosys",
      logo_path: "1280px-Infosys_logo.svg.png",
      certificate_link:
        "https://drive.google.com/file/d/1SEcstcjS-wwESzyU80-OT6h2VTvd0_KT/view?usp=sharing",
      alt_name: "Infosys",
      color_code: "#D83B0199",
    },
    {
      title: "Python",
      subtitle: "- Infosys",
      logo_path: "1280px-Infosys_logo.svg.png",
      certificate_link:
        "https://drive.google.com/file/d/1yzzz5Yy8tOnD0PD1ucrD0uq1-wR-NAw7/view?usp=sharing",
      alt_name: "Infosys",
      color_code: "#1F70C199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Fresher, Internship ",
  description:
    "I have worked with many virtual internship company as Python Developer, Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Nikunj.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Django, React, Cloud and Opensource Development.",
  },
  
  blogSection: {
    title: "Github",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://github.com/NikunjGohil",
      
    avatar_image_path: "blogs_image.svg",
  },
  
  addressSection: {
    title: "Address",
    subtitle:
      " Ahmedabad, Gujarat - 382350",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0204978,72.4396543,11z/data=!3m1!4b1!4m5!3m4!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7878843081",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,

  degrees,
  certifications,
  experience,
  projectsHeader,
  
  contactPageData,
};
