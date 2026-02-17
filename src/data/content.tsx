// =============================================================================
// Age-Link Specialist Clinic — Central Content Source
// All text content for every section and page. Import into components.
// =============================================================================

// -----------------------------------------------------------------------------
// Type Definitions
// -----------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  trustBadges: { label: string; icon: string }[];
  backgroundImage: string;
}

export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
}

export interface AudienceCard {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  whoIsItFor: string[];
  whatItIncludes: string[];
  expectedOutcomes: string[];
}

export interface Credential {
  abbreviation: string;
  full: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  image: string;
  bio: string[];
  specializations: string[];
  credentials: Credential[];
  memberships: string[];
  awards: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  thumbnail: string;
  alt: string;
  caption: string;
}

export interface ContactInfo {
  facilityName: string;
  address: string[];
  phone: { label: string; number: string }[];
  email: string;
  emergencyPhone: string;
  mapEmbedUrl: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "radio";
  placeholder: string;
  required: boolean;
  options?: string[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CareTopic {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
}

export interface PageMeta {
  title: string;
  description: string;
  ogImage: string;
}

// -----------------------------------------------------------------------------
// Site Configuration
// -----------------------------------------------------------------------------

export const siteConfig = {
  name: "Age-Link Specialist Clinic",
  tagline: "Specialist Geriatric Medical Practice",
  url: "https://www.age-link.com",
  logo: "/logo.webp",
  logoFooter: "/logo.webp",
  copyright: `© ${new Date().getFullYear()} Age-Link Specialist Clinic. All rights reserved.`,
  ogImage: "/og-image.jpg",
} as const;

// -----------------------------------------------------------------------------
// Page Metadata
// -----------------------------------------------------------------------------

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "Age-Link Specialist Clinic | Geriatric Medical Care in Singapore",
    description:
      "Specialist geriatric assessment and ongoing care for older adults. Helping patients and families make confident medical decisions at Mount Elizabeth Novena Hospital.",
    ogImage: "/og-image.jpg",
  },
  about: {
    title: "About Our Clinic | Age-Link Specialist Clinic",
    description:
      "Age-Link is a specialist geriatric medical practice focused on improving health outcomes for older adults through careful assessment, clear communication, and personalized care.",
    ogImage: "/og-image.jpg",
  },
  doctor: {
    title: "About Our Doctor | Age-Link Specialist Clinic",
    description:
      "Learn about our consultant geriatrician, with specialist expertise in dementia, sleep disorders, falls prevention, and osteoporosis management.",
    ogImage: "/og-image.jpg",
  },
  services: {
    title: "Our Services | Age-Link Specialist Clinic",
    description:
      "Specialist medical services designed to address the complex needs of older adults, from comprehensive assessment to chronic disease management.",
    ogImage: "/og-image.jpg",
  },
  publications: {
    title: "Publications & Resources | Age-Link Specialist Clinic",
    description:
      "Clinical research contributions and professional education resources in geriatric medicine for patients, families, and healthcare professionals.",
    ogImage: "/og-image.jpg",
  },
  contact: {
    title: "Contact Us | Age-Link Specialist Clinic",
    description:
      "Book an appointment or discuss your care needs. Located at Mount Elizabeth Novena Hospital, Singapore.",
    ogImage: "/og-image.jpg",
  },
};

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

export const navigation: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const headerCTA = {
  label: "Book an Appointment",
  href: "#contact",
} as const;

// -----------------------------------------------------------------------------
// Top Bar
// -----------------------------------------------------------------------------

export const topBar = {
  phone: { label: "Emergency", number: "+65 6535 8833" },
  email: "agelinkclinic@gmail.com",
} as const;

// -----------------------------------------------------------------------------
// Hero Section
// -----------------------------------------------------------------------------

export const heroContent: HeroContent = {
  title: "Geriatric Medical Care Focused on Healthy Aging",
  subtitle:
    "Specialist assessment and ongoing care for older adults, helping patients and families make confident medical decisions.",
  description:
    "Age-Link Specialist Clinic provides focused, patient-centered geriatric medical care at Mount Elizabeth Novena Hospital, Singapore.",
  primaryCTA: {
    label: "Book an Appointment",
    href: "#contact",
  },
  secondaryCTA: {
    label: "Call to Discuss Care",
    href: "tel:+6565358833",
  },
  trustBadges: [
    { label: "Mount Elizabeth Novena Hospital", icon: "/assets/icons/ui/hospital.svg" },
    { label: "30+ Years Experience", icon: "/assets/icons/ui/experience.svg" },
    { label: "Specialist Accredited", icon: "/assets/icons/ui/accredited.svg" },
  ],
  backgroundImage: "/assets/images/hero-bg.jpg",
};

// -----------------------------------------------------------------------------
// Value Propositions — "Why Choose Age-Link"
// -----------------------------------------------------------------------------

export const valuePropositionsHeading = "Why Choose Age-Link";

export const valuePropositions: ValueProposition[] = [
  {
    icon: "/assets/icons/services/assessment.svg",
    title: "Specialist Geriatric Expertise",
    description:
      "Focused medical knowledge in conditions affecting older adults, backed by decades of clinical practice.",
  },
  {
    icon: "/assets/icons/services/comprehensive.svg",
    title: "Whole-Person Assessments",
    description:
      "Comprehensive evaluations that consider physical, cognitive, and social factors — not just individual symptoms.",
  },
  {
    icon: "/assets/icons/ui/guidance.svg",
    title: "Clear Guidance for Families",
    description:
      "Jargon-free explanations and professional advice to help patients and families make informed decisions.",
  },
  {
    icon: "/assets/icons/ui/ethics.svg",
    title: "Evidence-Based, Ethical Care",
    description:
      "Treatment recommendations grounded in current medical evidence and delivered with respect for patient autonomy.",
  },
];

// -----------------------------------------------------------------------------
// Who We Help
// -----------------------------------------------------------------------------

export const whoWeHelpHeading = "Who We Help";

export const whoWeHelp: AudienceCard[] = [
  {
    icon: "/assets/icons/ui/elderly.svg",
    title: "Older Adults",
    description:
      "Medical care designed for the complex health needs associated with aging, from assessment through to ongoing management.",
  },
  {
    icon: "/assets/icons/ui/family.svg",
    title: "Families & Caregivers",
    description:
      "Clear explanations and professional guidance to support informed decisions about a loved one's health and wellbeing.",
  },
  {
    icon: "/assets/icons/ui/professional.svg",
    title: "Healthcare Professionals",
    description:
      "Specialist geriatric input and collaborative care planning for patients with complex overlapping medical needs.",
  },
];

// -----------------------------------------------------------------------------
// Services
// -----------------------------------------------------------------------------

export const servicesHeading = "Our Core Services";
export const servicesSubheading =
  "Specialist medical services designed to address the complex needs of older adults.";
export const servicesViewAllLabel = "View All Services";
export const servicesViewAllHref = "#services";

export const services: Service[] = [
  {
    slug: "comprehensive-geriatric-assessment",
    title: "Comprehensive Geriatric Assessment",
    shortDescription:
      "A detailed evaluation covering medical conditions, medications, mobility, cognition, and social support.",
    fullDescription:
      "This service provides a thorough, multi-dimensional assessment of an older person's medical, functional, psychological, and social circumstances. The goal is to develop a coordinated plan that optimizes health, independence, and quality of life.",
    icon: "/assets/icons/services/assessment.svg",
    image: "/assets/images/services/geriatric-assessment.jpg",
    whoIsItFor: [
      "Older adults with multiple health concerns",
      "Families seeking a clear picture of a loved one's health status",
      "Patients transitioning between hospital and home care",
    ],
    whatItIncludes: [
      "Review of medical history and current conditions",
      "Medication evaluation and optimization",
      "Physical and cognitive functional assessment",
      "Discussion of goals, concerns, and care preferences",
    ],
    expectedOutcomes: [
      "Clear understanding of current health issues and risks",
      "Practical, personalized care recommendations",
      "Coordinated plan involving relevant specialists if needed",
    ],
  },
  {
    slug: "memory-cognitive-disorders",
    title: "Memory & Cognitive Disorders",
    shortDescription:
      "Assessment and management of memory loss, dementia, and related cognitive conditions.",
    fullDescription:
      "This service focuses on the evaluation and ongoing management of cognitive decline, including dementia, mild cognitive impairment, and memory concerns. Early assessment allows for timely intervention and family planning.",
    icon: "/assets/icons/services/memory.svg",
    image: "/assets/images/services/memory-disorders.jpg",
    whoIsItFor: [
      "Older adults experiencing memory difficulties or confusion",
      "Families concerned about cognitive changes in a loved one",
      "Patients requiring specialist dementia care planning",
    ],
    whatItIncludes: [
      "Detailed cognitive screening and assessment",
      "Review of reversible causes of memory decline",
      "Discussion of diagnosis, prognosis, and care options",
      "Guidance on legal and financial planning considerations",
    ],
    expectedOutcomes: [
      "Accurate diagnosis of cognitive condition",
      "Individualized management and support plan",
      "Resources and referrals for patients and caregivers",
    ],
  },
  {
    slug: "medication-review",
    title: "Medication Review & Optimization",
    shortDescription:
      "Careful evaluation of medications to reduce side effects, interactions, and unnecessary prescriptions.",
    fullDescription:
      "Older adults frequently take multiple medications from different prescribers. This service provides a systematic review to identify harmful interactions, reduce unnecessary drugs, and ensure each medication serves a clear clinical purpose.",
    icon: "/assets/icons/services/medication.svg",
    image: "/assets/images/services/medication-review.jpg",
    whoIsItFor: [
      "Patients taking five or more regular medications",
      "Older adults experiencing unexplained side effects",
      "Families concerned about medication burden",
    ],
    whatItIncludes: [
      "Full review of all current medications and supplements",
      "Assessment of drug interactions and side effect risks",
      "Deprescribing recommendations where appropriate",
      "Coordination with other prescribing doctors",
    ],
    expectedOutcomes: [
      "Streamlined medication regimen with clear rationale",
      "Reduced risk of adverse drug reactions",
      "Improved overall wellbeing and treatment adherence",
    ],
  },
  {
    slug: "falls-frailty-mobility",
    title: "Falls, Frailty & Mobility Issues",
    shortDescription:
      "Assessment of fall risk and physical resilience with practical recommendations for safer living.",
    fullDescription:
      "Falls are a leading cause of injury and loss of independence in older adults. This service evaluates the underlying causes of falls and frailty, and develops practical strategies to improve strength, balance, and safety.",
    icon: "/assets/icons/services/falls.svg",
    image: "/assets/images/services/falls-frailty.jpg",
    whoIsItFor: [
      "Older adults who have experienced recent falls",
      "Patients with declining mobility or balance",
      "Families seeking fall prevention strategies",
    ],
    whatItIncludes: [
      "Comprehensive falls risk assessment",
      "Gait, balance, and strength evaluation",
      "Medication review for fall-contributing drugs",
      "Home safety and environmental recommendations",
    ],
    expectedOutcomes: [
      "Identified and addressable causes of falls",
      "Personalized exercise and rehabilitation plan",
      "Practical home safety modifications",
    ],
  },
  {
    slug: "chronic-disease-management",
    title: "Chronic Disease Management",
    shortDescription:
      "Coordinated care for long-term medical conditions commonly seen in later life.",
    fullDescription:
      "Managing multiple chronic conditions requires careful coordination to avoid conflicting treatments and medication overload. This service provides integrated care for older adults living with conditions such as diabetes, hypertension, heart disease, and respiratory illness.",
    icon: "/assets/icons/services/chronic.svg",
    image: "/assets/images/services/chronic-disease.jpg",
    whoIsItFor: [
      "Older adults managing multiple chronic conditions",
      "Patients seeing several specialists who need coordinated care",
      "Families seeking clarity on treatment priorities",
    ],
    whatItIncludes: [
      "Review of all current diagnoses and treatment plans",
      "Prioritization of competing medical needs",
      "Coordination with other treating specialists",
      "Regular follow-up and care plan adjustments",
    ],
    expectedOutcomes: [
      "Unified care plan that balances all conditions",
      "Reduced duplication and conflicting treatments",
      "Better quality of life through coordinated management",
    ],
  },
  {
    slug: "geriatric-rehabilitation",
    title: "Geriatric Rehabilitation",
    shortDescription:
      "Structured recovery programs to restore function and independence after illness or surgery.",
    fullDescription:
      "Recovery from a major illness, surgery, or hospitalization can be particularly challenging for older adults. This service coordinates rehabilitation involving physiotherapy, occupational therapy, and medical oversight to maximize functional recovery.",
    icon: "/assets/icons/services/rehabilitation.svg",
    image: "/assets/images/services/rehabilitation.jpg",
    whoIsItFor: [
      "Older adults recovering from surgery or hospitalization",
      "Patients with declining functional ability",
      "Families seeking structured recovery support",
    ],
    whatItIncludes: [
      "Functional assessment and goal setting",
      "Coordination with physiotherapists and occupational therapists",
      "Medical oversight during the rehabilitation process",
      "Progress monitoring and plan adjustments",
    ],
    expectedOutcomes: [
      "Improved physical function and mobility",
      "Greater independence in daily activities",
      "Reduced risk of re-hospitalization",
    ],
  },
  {
    slug: "caregiver-training",
    title: "Caregiver Training",
    shortDescription:
      "Practical guidance and education for family members and caregivers supporting older adults.",
    fullDescription:
      "Caring for an older adult with complex health needs is demanding. This service equips caregivers with the knowledge, skills, and confidence to provide safe and effective day-to-day care while maintaining their own wellbeing.",
    icon: "/assets/icons/services/caregiver.svg",
    image: "/assets/images/services/caregiver-training.jpg",
    whoIsItFor: [
      "Family members caring for an elderly relative",
      "Professional caregivers seeking specialist guidance",
      "Families transitioning a loved one from hospital to home",
    ],
    whatItIncludes: [
      "Education on the patient's specific conditions and needs",
      "Practical skills for safe mobility assistance and daily care",
      "Guidance on medication management at home",
      "Strategies for managing caregiver stress and burnout",
    ],
    expectedOutcomes: [
      "Confident and informed caregiving",
      "Safer care environment at home",
      "Improved quality of life for both patient and caregiver",
    ],
  },
  {
    slug: "home-based-care",
    title: "Home-Based Care",
    shortDescription:
      "Medical consultations and geriatric care delivered in the comfort of the patient's home.",
    fullDescription:
      "For patients who are unable to travel to the clinic due to mobility limitations or frailty, home-based geriatric care brings specialist assessment and management directly to the patient's residence.",
    icon: "/assets/icons/services/home-care.svg",
    image: "/assets/images/services/home-based-care.jpg",
    whoIsItFor: [
      "Homebound older adults with limited mobility",
      "Patients recently discharged from hospital",
      "Families seeking specialist medical input at home",
    ],
    whatItIncludes: [
      "Home-based geriatric assessment",
      "Medication review in the home setting",
      "Home environment safety evaluation",
      "Care coordination with community health services",
    ],
    expectedOutcomes: [
      "Access to specialist care without the burden of travel",
      "Personalized recommendations for the home environment",
      "Continuity of medical oversight between clinic visits",
    ],
  },
];

// Subset shown on the homepage (first 5)
export const homepageServices = services.slice(0, 5);

// -----------------------------------------------------------------------------
// Doctor Profile
// -----------------------------------------------------------------------------

export const doctorSectionHeading = "Experienced Specialist Care";
export const doctorSectionSubheading =
  "Age-Link is led by an experienced consultant geriatrician providing focused, patient-centered care for older adults.";

export const doctorProfile: DoctorProfile = {
  name: "A/Prof Sitoh Yih Yiow",
  title: "Consultant Geriatrician",
  image: "/assets/images/doctor-profile.jpg",
  bio: [
    "A/Prof Sitoh Yih Yiow is a consultant geriatrician with specialist expertise in dementia, sleep disorders in the elderly, falls prevention, osteoporosis, and impaired mobility.",
    "He graduated from the National University of Singapore in 1991 and obtained membership of the Royal College of Physicians of the United Kingdom in 1996. He completed clinical fellowships at the Institute of Bone and Joint Research, University of Sydney, and the Bernard Curran Rehabilitation Unit, Northern Sydney.",
    "He has been actively involved in the establishment of clinical practice guidelines in dementia, falls, and osteoporosis, and currently serves on the Chronic Disease Management Programme Clinical Advisory Committee for Dementia under the Ministry of Health, Singapore.",
    "He has published widely in local and international peer-reviewed journals, covering topics including dementia, swallowing disorders, falls, osteoporosis, and health services research.",
  ],
  specializations: [
    "Dementia & Cognitive Disorders",
    "Sleep Disorders in the Elderly",
    "Falls Prevention & Mobility",
    "Osteoporosis Management",
    "Geriatric Rehabilitation",
    "Swallowing Disorders",
  ],
  credentials: [
    { abbreviation: "MBBS", full: "Bachelor of Medicine & Surgery, National University of Singapore" },
    { abbreviation: "MRCP (UK)", full: "Member, Royal College of Physicians, United Kingdom" },
    { abbreviation: "FRCP (Edin)", full: "Fellow, Royal College of Physicians, Edinburgh" },
    { abbreviation: "FRCPS (Glasg)", full: "Fellow, Royal College of Physicians & Surgeons, Glasgow" },
    { abbreviation: "MMed", full: "Master of Sleep Medicine, University of Sydney" },
    { abbreviation: "LLM", full: "Master of Laws in Medical Law & Ethics, University of Edinburgh" },
    { abbreviation: "FAMS", full: "Fellow, Academy of Medicine Singapore (Geriatric Medicine)" },
  ],
  memberships: [
    "Society for Geriatric Medicine, Singapore",
    "Australian Society for Geriatric Medicine",
    "American Academy of Neurology",
    "American Geriatric Society",
    "Singapore Medical Association",
    "Osteoporosis Society, Singapore",
    "Royal College of Physicians, United Kingdom",
    "Chartered Institute of Arbitration (Associate Member)",
  ],
  awards: [
    "Outstanding Tutor Award, Yong Loo Lin School of Medicine (2014/2015)",
    "Dean's Award for Excellence in Teaching (2015/2016)",
  ],
  ctaLabel: "Meet the Specialist",
  ctaHref: "#doctor",
};

// Compact version for the homepage card
export const doctorHomepageSummary = {
  name: doctorProfile.name,
  title: doctorProfile.title,
  image: doctorProfile.image,
  shortBio: doctorProfile.bio[0],
  topCredentials: doctorProfile.credentials.slice(0, 4),
  ctaLabel: doctorProfile.ctaLabel,
  ctaHref: doctorProfile.ctaHref,
};

// -----------------------------------------------------------------------------
// How It Works
// -----------------------------------------------------------------------------

export const howItWorksHeading = "How It Works";
export const howItWorksSubheading =
  "A structured approach to understanding and managing your health needs.";

export const howItWorksSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "Meet with the specialist for an in-depth discussion of your health concerns, goals, and medical history.",
  },
  {
    step: 2,
    title: "Medical & Medication Review",
    description:
      "A thorough review of existing conditions, current medications, and any relevant investigations or reports.",
  },
  {
    step: 3,
    title: "Individualized Care Plan",
    description:
      "A personalized management plan developed in consultation with you and your family, addressing identified needs.",
  },
  {
    step: 4,
    title: "Follow-Up & Coordination",
    description:
      "Ongoing monitoring, care plan adjustments, and coordination with other treating professionals as needed.",
  },
];

// -----------------------------------------------------------------------------
// About Page
// -----------------------------------------------------------------------------

export const aboutPage = {
  heading: "About Age-Link",
  intro:
    "Age-Link is a specialist geriatric medical practice focused on improving health outcomes for older adults through careful assessment, clear communication, and personalized care.",

  philosophyHeading: "Our Philosophy",
  philosophyIntro: "We believe effective geriatric care:",
  philosophyPoints: [
    "Looks beyond single medical conditions",
    "Considers physical, cognitive, and social factors",
    "Involves patients and families in decisions",
    "Prioritizes independence and quality of life",
  ],

  experienceHeading: "Clinical Experience",
  experienceText:
    "Age-Link brings extensive experience in hospital and community geriatric medicine, supporting patients with complex and overlapping medical needs.",

  differenceHeading: "What Makes Age-Link Different",
  differencePoints: [
    "Specialist focus on aging",
    "Longer consultation times",
    "Clear, jargon-free explanations",
    "Respect for patient independence",
  ],
} as const;

// -----------------------------------------------------------------------------
// Why Geriatric Medicine Page
// -----------------------------------------------------------------------------

export const whyGeriatricMedicinePage = {
  heading: "Why Geriatric Medicine?",
  paragraphs: [
    "Geriatric medicine is a branch of medicine concerned with the clinical, preventive, remedial, and social aspects of illness in older persons. It addresses the unique challenges that aging presents to medical care.",
    "Older adults often experience multiple overlapping conditions that require careful coordination. A geriatrician is trained to assess the full picture — balancing treatment priorities, minimizing medication risks, and focusing on what matters most to the patient.",
    "Unlike general practitioners who see patients of all ages, geriatricians bring specialist depth in age-related conditions including dementia, falls, frailty, osteoporosis, and the safe management of multiple medications.",
  ],
} as const;

// -----------------------------------------------------------------------------
// Publications Page
// -----------------------------------------------------------------------------

export const publicationsPage = {
  heading: "Publications & Clinical Resources",
  intro:
    "Age-Link contributes to clinical research and professional education in geriatric medicine.",

  patientSectionHeading: "For Patients & Families",
  patientSectionText:
    "Selected publications are shared to support understanding of health and aging.",

  professionalSectionHeading: "For Healthcare Professionals",
  professionalSectionText:
    "Peer-reviewed work reflecting engagement with evidence-based practice.",
} as const;

// -----------------------------------------------------------------------------
// Image Gallery
// -----------------------------------------------------------------------------

export const galleryHeading = "Our Clinic & Facilities";
export const gallerySubheading =
  "A welcoming environment at Mount Elizabeth Novena Hospital, designed for the comfort and safety of our patients.";

export const galleryImages: GalleryImage[] = [
  {
    src: "/assets/images/clinic/clinic-01.jpg",
    thumbnail: "/assets/images/clinic/clinic-01-thumb.jpg",
    alt: "Age-Link clinic reception area at Mount Elizabeth Novena Hospital",
    caption: "Reception Area",
  },
  {
    src: "/assets/images/clinic/clinic-02.jpg",
    thumbnail: "/assets/images/clinic/clinic-02-thumb.jpg",
    alt: "Consultation room with comfortable seating for patients and families",
    caption: "Consultation Room",
  },
  {
    src: "/assets/images/clinic/clinic-03.jpg",
    thumbnail: "/assets/images/clinic/clinic-03-thumb.jpg",
    alt: "Mount Elizabeth Novena Hospital exterior entrance",
    caption: "Mount Elizabeth Novena Hospital",
  },
  {
    src: "/assets/images/clinic/clinic-04.jpg",
    thumbnail: "/assets/images/clinic/clinic-04-thumb.jpg",
    alt: "Patient assessment area within the clinic",
    caption: "Assessment Area",
  },
  {
    src: "/assets/images/clinic/clinic-05.jpg",
    thumbnail: "/assets/images/clinic/clinic-05-thumb.jpg",
    alt: "Waiting area with natural lighting and accessible seating",
    caption: "Waiting Area",
  },
  {
    src: "/assets/images/clinic/clinic-06.jpg",
    thumbnail: "/assets/images/clinic/clinic-06-thumb.jpg",
    alt: "Hospital corridor leading to the specialist clinic suite",
    caption: "Hospital Level 10",
  },
];

// -----------------------------------------------------------------------------
// Care of the Older Person Topics
// -----------------------------------------------------------------------------

export const careTopicsHeading = "Care of the Older Person";
export const careTopicsSubheading =
  "Educational resources on common conditions and health concerns affecting older adults.";

export const careTopics: CareTopic[] = [
  {
    slug: "dementia",
    title: "Dementia",
    shortDescription:
      "Understanding memory loss, cognitive decline, and the range of conditions that fall under the dementia umbrella.",
    icon: "/assets/icons/services/memory.svg",
  },
  {
    slug: "geriatric-syndromes",
    title: "Geriatric Syndromes",
    shortDescription:
      "Common multi-factorial conditions in older adults including falls, incontinence, cognitive impairment, and frailty.",
    icon: "/assets/icons/services/assessment.svg",
  },
  {
    slug: "healthy-aging",
    title: "Healthy Aging",
    shortDescription:
      "Practical guidance on maintaining physical health, mental sharpness, and social engagement in later years.",
    icon: "/assets/icons/ui/elderly.svg",
  },
  {
    slug: "nutritional-needs",
    title: "Nutritional Needs",
    shortDescription:
      "Dietary considerations and nutritional requirements that change as the body ages.",
    icon: "/assets/icons/services/chronic.svg",
  },
  {
    slug: "osteoporosis",
    title: "Osteoporosis",
    shortDescription:
      "Bone health management, fracture prevention, and treatment options for age-related bone density loss.",
    icon: "/assets/icons/services/falls.svg",
  },
  {
    slug: "successful-aging",
    title: "Successful Aging",
    shortDescription:
      "Strategies for aging well — maintaining independence, purpose, and quality of life.",
    icon: "/assets/icons/ui/guidance.svg",
  },
];

// -----------------------------------------------------------------------------
// Contact Section
// -----------------------------------------------------------------------------

export const contactHeading = "Contact Age-Link";
export const contactSubheading =
  "We are happy to discuss concerns and help you determine the appropriate next step.";
export const contactFormHeading = "Book an Appointment";
export const contactFormSubheading =
  "Use the form below or reach out directly by phone or email.";
export const contactSuccessMessage =
  "Thank you for your enquiry. We will respond within one working day.";

export const contactInfo: ContactInfo = {
  facilityName: "Mount Elizabeth Novena Hospital",
  address: [
    "38 Irrawaddy Road",
    "#10-60/62 Mount Elizabeth Novena Hospital",
    "Singapore 329563",
  ],
  phone: [
    { label: "Main Line", number: "+65 6694 1704" },
    { label: "Secondary", number: "+65 6738 9757" },
  ],
  email: "agelinkclinic@gmail.com",
  emergencyPhone: "+65 6535 8833",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7899!2d103.8433!3d1.3208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19efaf0!2sMount+Elizabeth+Novena+Hospital!5e0!3m2!1sen!2ssg!4v1",
};

export const contactFormFields: FormField[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+65",
    required: false,
  },
  {
    name: "existingPatient",
    label: "Are you an existing patient?",
    type: "radio",
    placeholder: "",
    required: false,
    options: ["Yes", "No"],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Briefly describe your enquiry or care needs",
    required: true,
  },
  {
    name: "referralSource",
    label: "How did you hear about us?",
    type: "select",
    placeholder: "Please select",
    required: false,
    options: [
      "Online Search",
      "Family or Friend",
      "Directory Listing",
      "Healthcare Professional",
      "Print Advertisement",
      "Other",
    ],
  },
];

// -----------------------------------------------------------------------------
// Final CTA Section (used on every page above the footer)
// -----------------------------------------------------------------------------

export const finalCTA = {
  heading: "Take the Next Step in Care",
  description:
    "If you are concerned about your health or that of a loved one, we are here to help.",
  primaryCTA: { label: "Book an Appointment", href: "#contact" },
  secondaryCTA: { label: "Call +65 6535 8833", href: "tel:+6565358833" },
} as const;

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------

export const footerDescription =
  "Specialist geriatric medical practice at Mount Elizabeth Novena Hospital, providing focused care for older adults in Singapore.";

export const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Doctor", href: "#doctor" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Geriatric Assessment", href: "#services" },
      { label: "Memory & Cognition", href: "#services" },
      { label: "Medication Review", href: "#services" },
      { label: "Falls & Mobility", href: "#services" },
      { label: "Chronic Disease", href: "#services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "/assets/icons/social/linkedin.svg",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/",
    icon: "/assets/icons/social/facebook.svg",
  },
];

// -----------------------------------------------------------------------------
// Service Page Template — Helper for dynamic [slug] pages
// -----------------------------------------------------------------------------

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCareTopicBySlug(slug: string): CareTopic | undefined {
  return careTopics.find((t) => t.slug === slug);
}

// Generate static params for Next.js dynamic routes
export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getCareTopicSlugs(): string[] {
  return careTopics.map((t) => t.slug);
}

// -----------------------------------------------------------------------------
// Individual Service Page Labels (shared template strings)
// -----------------------------------------------------------------------------

export const servicePageLabels = {
  overviewHeading: "Overview",
  whoIsItForHeading: "Who This Service Is For",
  whatItIncludesHeading: "What the Assessment Includes",
  expectedOutcomesHeading: "Expected Outcomes",
  ctaLabel: "Book an Appointment to Discuss This Service",
  ctaHref: "#contact",
  backToServicesLabel: "Back to All Services",
  backToServicesHref: "#services",
} as const;
