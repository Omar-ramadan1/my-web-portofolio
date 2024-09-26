type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      phone: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
        // message: {
        //   span: string;
        //   placeholder: string;
        // };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
  //  feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "",
    fullName: "Omar Ramadan Abdelkader",
    email: "omar.career47@gmail.com",
  },
  hero: {
    name: "Omar Ramadan Abdelkader",
    p: ["Experienced Flutter developer", ""],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      email: { span: "My Email", placeholder: "o.abdelkader05@gmail.com" },

      phone: {
        span: "My Phone",
        placeholder: "+49152116413935",
      },
      // message: {
      //   span: "Your Message",
      //   placeholder: "What do you want to say?",
      // },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: ` A highly motivated and solution-oriented Flutter Developer with over 4 years of experience 
      in building innovative mobile and desktop applications. Known for a keen interest in learning new skills and a proactive 
      approach to problem-solving. Demonstrated ability to plan and execute projects efficiently. Recently I participated in contributions 
      for the flutter community by creating C++ plugin check it out on pub.dev, and participated in expanding my skill set to include 
      Go projects. Committed to delivering high-quality results and eager to bring my unique blend of skills and experience to a dynamic and 
      innovative team, `,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    // feedbacks: {
    //   p: "What others say",
    //   h2: "Testimonials.",
    // },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world work with different technologies,
    and manage projects effectively.`,
    },
  },
};
