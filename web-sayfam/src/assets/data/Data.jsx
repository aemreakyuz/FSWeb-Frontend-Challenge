
import { Images } from "../photos/Images";

export const Data = {
  tr: {
    langSwitch: ["İNGİLİZCE", "'YE GEÇ"],
    nav: { 
      skills: "Yetenekler", 
      projects: "Projeler", 
      hire: "Bana Ulaşın!"
    },
    hero:{
      title: ["Yaratıcı" , "Minimalist"],
      description : "Merhaba, ben Emre. Tam donanımlı bir yazılım geliştiricisiyim. Sağlam ve ölçeklenebilir ön uç ürünleri, harika kullanıcı deneyimleriyle birlikte tasarlamak isteyenler için doğru adresim. Profesyonel ve samimi bir iş birliği için, benimle tanışmaya ne dersiniz?"
    },
    skillsTitle: "Yetenekler",
    skills: [
      
      { image: Images.skills.jsLogo, title: "JAVASCRIPT" },
      { image: Images.skills.reactLogo, title: "REACT" },
      { image: Images.skills.reduxLogo, title: "REDUX" },
      { image: Images.skills.nodeLogo, title: "NODE" },
      { image: Images.skills.vsCodeLogo, title: "VSCODE" },
      { image: Images.skills.figmaLogo, title: "FIGMA" },
    ],
    profile: {
      title: "Profil",
      aboutTitle: "Hakkında",
      locationTitle:"İkamet Şehri",
      location: "İstanbul",
      about1: "Merhaba, ben Emre. Yeditepe Üniversitesi Diş Hekimliği Fakültesi mezunuyum ve şu anda tam zamanlı bir full-stack geliştirici olarak çalışıyorum. Diş hekimliğinde kazandığım titizlik ve detaylara olan odaklanmayı, teknoloji ve yazılım sektörüne aktarıyorum. Her yeni projede, bu alanlardaki hassas yaklaşımımı ve derinlemesine analiz yeteneğimi geliştiriyorum.",
      about2: "JavaScript, React ve Node.js konusunda uzmanlığım sayesinde kullanıcı dostu ve etkileyici web siteleri tasarlıyorum. Yeni teknolojileri öğrenmeye açığım ve Web dünyasında daha fazla deneyim kazanmak için istekliyim.",
      birthDateTitle: "Doğum Tarihi",
      birthDate: "20.10.1997",
      eduTitle: "Eğitim Durumu",
      edu: "Yeditepe Ünv. Diş Hekimliği 2021",
      roleTitle: "Tercih Ettiği Rol",
      role: "Frontend, UI"
    },
    footer: ["Hadi, gelecek projenizde","birlikte harikalar yaratalım" ]
  },
  en: {
    langSwitch: ["SWITCH TO", " TURKISH"],
    nav: {
      skills: "Skills",
      projects: "Projects",
      hire: "Hire Me"
    },
    hero:{
      title: ["Creative Thinker" , "Minimalism Lover"],
      description: "Hi, I'm Emre. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me."
    },
    profile: {
      title: "Profile",
      aboutTitle: "About Me",
      locationTitle: "Location",
      location: "Istanbul, Tr",
      about1: "Hi, I'm Emre, a full-stack developer and a dentist from Yeditepe University. My journey from dentistry to tech has sharpened my precision and passion for detail, qualities I bring to every web development project. I specialize in JavaScript, React, and Node.js, with a focus on creating seamless, user-friendly websites.",
      about2: "Driven by a love for continuous learning and innovation, I'm always ready to dive into new challenges and collaborate on projects that blend creativity with functionality. ",
      birthDateTitle: "Birthday",
      birthDate: "20.10.1997",
      eduTitle: "Education",
      edu: "Yeditepe Uni. Dentistry 2021",
      roleTitle: "Preferred Role",
      role: "Frontend, UI"
    },
    skillsTitle: "Skills",
    skills: [
      { image: Images.skills.jsLogo, title: "JAVASCRIPT" },
      { image: Images.skills.reactLogo, title: "REACT" },
      { image: Images.skills.reduxLogo, title: "REDUX" },
      { image: Images.skills.nodeLogo, title: "NODE" },
      { image: Images.skills.vsCodeLogo, title: "VSCODE" },
      { image: Images.skills.figmaLogo, title: "FIGMA" },
      {image: Images.skills.tailwindLogo, title: "TAILWIND"}
    ],
    footer: ["Let's work together on ", "your next project"]
  }
};


