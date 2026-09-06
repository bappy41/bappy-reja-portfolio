// All content below is sourced directly from MD Bappy Reja's CV.
// No companies, dates, figures, or responsibilities have been invented.

export const profile = {
  name: "MD Bappy Reja",
  headline: "Structuring Operations Like an Engineer Structures Circuits.",
  subheadline:
    "Back Office Team Lead in healthcare operations, and a B.Sc. Electrical & Electronic Engineering student — building documented, trainable workflows out of day-to-day operational complexity.",
  location: "Dhaka, Bangladesh",
  email: "bappyreza.mbr@gmail.com",
  phone: "+8801938-996191",
  linkedin: "linkedin.com/in/yourprofile",
  roleTag: "Back Office Team Lead · Operations & Process Management · EEE Undergraduate",
};

export const about = {
  paragraphs: [
    "I lead a back-office coordination team inside a healthcare operations environment, where the work is equal parts people-management and systems-thinking: someone has to make sure schedules hold, documentation is correct, and the process itself is written down clearly enough that the next person can follow it without guessing.",
    "That's the thread running through the last three years — from coordinating home care services for a caseload of 200+ consumers, to helping move an entire timesheet function from a Philippines-based team into a new Bangladesh-based one, to now leading a pilot team that's expanding from 8 to 15 people. Each step has involved the same core skill: turning an unclear or informal process into a documented, repeatable one, then training people to run it.",
    "In parallel, I'm completing a B.Sc. in Electrical & Electronic Engineering, working hands-on with circuit design, digital logic, and embedded systems. It's a different discipline on paper, but the underlying instinct is the same one I use at work — break a system down, understand how its parts connect, and design something that behaves predictably under real conditions.",
    "I'm drawn to roles and problems that sit at that intersection: operational environments that need someone who can document, standardize, and train — and who brings an engineer's patience for detail to the process of getting there.",
  ],
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Hi-Tech IT Solution",
    location: "Dhaka, Bangladesh",
    role: "Back Office Team Lead",
    period: "Sep 2026 – Present",
    current: true,
    summary:
      "Leading a pilot 8-person Assistant Coordination team spanning Hi-Tech IT Solution and external vendor organizations, with responsibility for task allocation, quality follow-up, and reporting to hub management.",
    points: [
      "Lead operational execution for an 8-person pilot Assistant Coordination team within the Back Office Department, across internal and external vendor organizations.",
      "Create and maintain working files, distribute tasks, assign workloads, and monitor completion and follow-up quality throughout daily shifts.",
      "Monitor team performance, identify incomplete or insufficient follow-ups, escalate concerns to Hub Managers, and resolve operational bottlenecks directly with representatives.",
      "Develop structured feedback files to document performance metrics, improving accuracy, accountability, and procedure adherence.",
      "Prepare and communicate operational progress updates during internal meetings to give executive management visibility into performance.",
      "Support the planned expansion of the pilot operation from 8 representatives to a 15-person dedicated sub-department.",
      "Execute cross-functional coverage including approved overtime aide scheduling, conflict-call handling, front-desk escalations, timesheet verification, and reporting via Monday.com.",
    ],
  },
  {
    company: "Hi-Tech IT Solution",
    location: "Dhaka, Bangladesh",
    role: "Back Office Specialist",
    period: "Apr 2025 – Aug 2026",
    summary:
      "Helped build the Timesheet function from the ground up during an international operational transition, and authored the SOPs that standardized it.",
    points: [
      "Supported workflow development across multiple back-office functions, managing the international operational transition from Philippines-based teams to Bangladesh.",
      "Assisted in building the core Timesheet operating process that scaled into a dedicated 8-person sub-department.",
      "Authored and maintained detailed SOPs covering Patient Hospitalization/Vacation procedures, EVV tracking, documentation compliance, and Timesheet verification/escalation criteria.",
      "Directly trained 2–3 employees in Timesheet operations and 8 employees in pre-billing processes, across internal and external vendor teams.",
      "Executed management-approved overtime scheduling, placed aides into system schedules, and provided comprehensive coverage during staff leave.",
    ],
  },
  {
    company: "Hi-Tech IT Solution",
    location: "Dhaka, Bangladesh",
    role: "Home Care Coordinator (CDPAP)",
    period: "Dec 2023 – Feb 2025",
    summary:
      "Coordinated end-to-end service operations for 200+ consumers, closing out the role with a perfect KPI record across every quarter of 2024.",
    points: [
      "Coordinated end-to-end service operations for a portfolio of 200+ consumers while maintaining strict scheduling and documentation standards.",
      "Achieved a perfect 1.0 KPI rating across all 4 quarterly evaluations in 2024, receiving $1,200 total in KPI and Exceptional Performance bonuses.",
      "Acted as primary operational liaison for consumer matters, coordinating with internal departments and U.S.-based management.",
      "Prepared and organized structured operational reports using HHAeXchange (HHAX) and Microsoft Excel to maintain pre-billing data integrity.",
    ],
  },
];

export type Achievement = {
  stat: string;
  label: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    stat: "1.0",
    label: "Perfect KPI rating",
    detail: "Across all 4 quarterly evaluations in 2024 as a Home Care Coordinator, earning $1,200 in KPI and Exceptional Performance bonuses.",
  },
  {
    stat: "200+",
    label: "Consumers coordinated",
    detail: "Managed end-to-end scheduling and documentation for a 200+ consumer caseload while holding to strict compliance standards.",
  },
  {
    stat: "12–13",
    label: "Employees trained",
    detail: "Onboarded and trained roughly 12–13 employees across coordination, Timesheet, and pre-billing functions, including extended shadowing programs.",
  },
  {
    stat: "8 → 15",
    label: "Team scaling in progress",
    detail: "Supporting the planned expansion of the pilot Assistant Coordination team from 8 representatives to a 15-person dedicated sub-department.",
  },
  {
    stat: "5",
    label: "SOP domains authored",
    detail: "Formulated standardized SOPs covering Patient Vacations/Hospitalizations, Patient Communications, Faxing/Follow-up, EVV, and Timesheet Escalation.",
  },
  {
    stat: "PH → BD",
    label: "Timesheet function transitioned",
    detail: "Helped move timesheet operations from a Philippines-based team to Bangladesh, building the workflow that became a dedicated function.",
  },
];

export type SkillGroup = {
  title: string;
  note: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Programming & Simulation",
    note: "Academic & applied engineering tools",
    items: ["Python — strong working knowledge", "C++", "Arduino Programming", "MATLAB", "AutoCAD", "MultiSim", "Microchip Studio", "Arduino IDE"],
  },
  {
    title: "Business & Productivity Software",
    note: "Daily operational tools",
    items: ["Microsoft Excel (VLOOKUP, Pivot Tables)", "Microsoft Word", "Microsoft PowerPoint", "Monday.com CRM", "HHAeXchange (HHAX)"],
  },
  {
    title: "Operational Systems",
    note: "Process & healthcare administration",
    items: ["Task & Case Management", "Workflow Tracking", "Operational Reporting", "EVV Processes", "Pre-Billing Documentation", "Scheduling Systems"],
  },
  {
    title: "Leadership & Communication",
    note: "Core competencies",
    items: ["Team Leadership", "Task Distribution", "Multilingual Team Supervision", "Training & Knowledge Transfer", "Performance Monitoring & Feedback", "Stakeholder Communication"],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Electrical & Electronic Engineering (EEE)",
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    period: "Expected 2028",
    detail: "Core focus: Circuit Analysis, Digital Electronics, Logic Design, Computer Programming, Engineering Mathematics, Embedded Systems Design.",
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Dhaka Udyan Govt. College",
    period: "2021",
    detail: "GPA 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Dhaka Presidency High School",
    period: "2019",
    detail: "GPA 4.89 / 5.00",
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  points: string[];
};

export const academicProjects: Project[] = [
  {
    title: "Digital Voting Machine",
    tag: "Hardware / Digital Logic — ULAB",
    description: "A functional digital voting prototype built as part of a 3-member engineering team.",
    points: [
      "Co-designed and constructed a functional digital voting prototype as part of a 3-member engineering team.",
      "Designed circuit schematics and layout; wired physical prototypes using push buttons, LCD/7-segment displays, LEDs, resistors, and Arduino Uno.",
      "Programmed system logic in C++/Arduino IDE to handle automated vote tallying, circuit testing, and hardware troubleshooting.",
      "Successfully presented a live working prototype during final academic project evaluations.",
    ],
  },
  {
    title: "Expense Tracker Application",
    tag: "Python Software Project — ULAB",
    description: "A Python application for recording and calculating personal financial data.",
    points: [
      "Developed a Python application to record, manage, and calculate personal financial/expense data.",
      "Applied programming logic to automate calculations and output structured financial reports and expense summaries.",
    ],
  },
];

export const operationalProjects: Project[] = [
  {
    title: "Timesheet Function Transition",
    tag: "Workflow Development",
    description: "Helped establish and document the workflow that became a dedicated Timesheet function.",
    points: [
      "Supported the transition of timesheet operations from a Philippines-based team to Bangladesh.",
      "Assisted in building the core Timesheet operating process that scaled into a dedicated 8-person sub-department.",
      "Directly trained 2–3 employees in Timesheet operations.",
    ],
  },
  {
    title: "Standardized SOP Library",
    tag: "Process Documentation",
    description: "Authored SOPs that standardized documentation accuracy across the team.",
    points: [
      "Formulated standardized operational SOPs for Patient Vacations/Hospitalizations, Patient Communications, Faxing/Follow-up, EVV, and Timesheet Rejection/Escalation workflows.",
      "Impact: standardized team-wide documentation accuracy, reduced operational tracking errors, and streamlined case resolution.",
    ],
  },
  {
    title: "Pre-Billing Training Initiative",
    tag: "Training & Knowledge Transfer",
    description: "Trained pre-billing representatives across internal and partner vendor teams.",
    points: [
      "Directly trained 8 employees in pre-billing processes across internal and external vendor teams.",
      "Conducted extended shadowing programs (several weeks to 1 month per batch) covering workflows, live troubleshooting, and process validation.",
    ],
  },
];

export type Strength = {
  title: string;
  detail: string;
};

export const strengths: Strength[] = [
  { title: "Process Documentation", detail: "Authoring SOPs that make a workflow repeatable, not just working once." },
  { title: "Attention to Detail", detail: "Catching incomplete follow-ups and documentation gaps before they become escalations." },
  { title: "Training & Knowledge Sharing", detail: "Onboarded 12–13+ employees through structured shadowing programs." },
  { title: "Cross-Functional Coordination", detail: "Comfortable working across internal teams, vendor organizations, and hub management." },
  { title: "Responsibility Under Scale", detail: "Trusted with a pilot team currently expanding from 8 to 15 people." },
  { title: "Continuous Learning", detail: "Balancing full-time operations work with an active EEE degree." },
];

export const languages = [
  { name: "Bangla", level: "Native", fill: 5 },
  { name: "English", level: "Fluent / Professional Working Proficiency", fill: 4 },
  { name: "Hindi", level: "Conversational", fill: 3 },
  { name: "Urdu", level: "Conversational", fill: 3 },
];
