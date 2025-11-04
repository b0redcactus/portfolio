// Edit this file to update your portfolio content
window.content = {
  intro: {
    bio:
      "I am an electrical engineer specializing in PV and BESS system design, leading design projects from concept to implementation.",
    languages: ["Hungarian", "English"],
    skills: ["Designer", "Design management", "AutoCAD"]
  },
  work: [
    {
      company: "Solservices",
      role: "Project Engineer",
      timeframe: "2024.04 – Present",
      bullets: [
        "Leading design works internally",
        "PV projects up to 50 MW",
        "BESS projects up to 30 MVA / 50 MWh",
        "Permit tracking",
        "Expanding knowledge of 22 kV / 132 kV substations",
        "Construction support",
        "Communicating with technical inspectors and designers",
        "Internal design tasks such as monitoring system design and cable trench cross-sections"
      ],
      image: "assets/work-1.jpg",
      tags: ["Design management", "AutoCAD", "PV+BESS"]
    },
    {
      company: "Eslar",
      role: "Electrical design engineer",
      timeframe: "2023.10 – 2024.03",
      bullets: [
        "Designing PV power plants up to 5 MW",
        "DC, AC cabinet designs",
        "Single line diagrams",
        "Monitoring designs",
        "Protection calculations",
        "Cable trench cross sections",
        "Layouts"
      ],
      image: "assets/work-2.jpg",
      tags: ["AutoCAD", "Design Engineer"]
    },
    {
      company: "Phlegon",
      role: "Electrical design engineer",
      timeframe: "2022.06 – 2023.10",
      bullets: [
        "Designing PV power plants up to 2 MW",
        "DC, AC cabinet designs",
        "Single line diagrams",
        "Layouts",
        "Working in AutoCAD Electrical"
      ],
      image: "assets/work-2.jpg",
      tags: ["AutoCAD", "Designer"]
    },
    {
      company: "Intern jobs",
      role: "Intern electrical engineer",
      timeframe: "2021.11 – 2022.05",
      bullets: [
        "Writing my BSc thesis on the design of a 22 kV/0.4 kV distribution line",
        "Learning about electrical building design"
      ],
      image: "assets/work-2.jpg",
      tags: ["AutoCAD", "Intern"]
    }
  ],
  studies: [
    { title: "BSc Electrical Engineer", place: "University of Pécs", year: "2018-2022" },
    { title: "MSc Electrical Engineer", place: "Óbuda University", year: "2022-2024" }
  ],
  skills: ["PV design", "BESS design", "AutoCAD"],
  blog: [
    {
      slug: "designing-with-constraints",
      title: "Designing With Constraints",
      date: "2025-01-05",
      cover: "assets/blog-1.jpg",
      body:
        "Constraints enable creativity. In this short note I share patterns I use when working with strict performance and accessibility targets."
    }
  ],
  gallery: [
    { src: "assets/gallery-1.jpg", alt: "Dashboard" },
    { src: "assets/gallery-2.jpg", alt: "Mobile app" }
  ]
};
