export const siteConfig = {
  name: "Dr. Anamika Mishra",
  title: "Dr. Anamika Mishra - Dermatologist | Cosmetic Dermatologist | Jabalpur",
  description:
    "Advanced dermatology, cosmetic procedures, hair restoration and laser treatments in Jabalpur. Expert care from Dr. Anamika Mishra, practicing since 2006.",
  url: "https://cuticareskinclinic.com",
  ogImage: "/images/og-image.jpg",
  links: {
    facebook: "https://facebook.com/cuticareskinclinic",
    whatsapp: "https://wa.me/918305979743",
  },
  doctor: {
    name: "Dr. Anamika Mishra",
    qualifications: ["MBBS", "Diploma in Cosmetic Dermatology"],
    experienceSince: 2006,
    specialization: "Dermatology & Cosmetic Dermatology",
  },
  clinic: {
    name: "Madan Mahal Clinic",
    brand: "Cuticare Skin Clinic",
    address: {
      line1: "145, First Floor, Virual Medical Hall",
      line2: "Madan Mahal",
      city: "Jabalpur",
      state: "Madhya Pradesh",
      zip: "482002",
      country: "India",
    },
    phone: "+91 8305979743",
    whatsapp: "+918305979743",
    email: "contact@cuticareskinclinic.com",
    hours: {
      weekdays: "11:00 AM – 2:00 PM",
      saturday: "11:00 AM – 2:00 PM",
      sunday: "Closed",
    },
    coordinates: { lat: 23.1815, lng: 79.9285 },
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.282867!2d79.9285!3d23.1815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzQ2LjQiTiA3OcKwNTUnMjguMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=23.1815,79.9285",
  },
};

export const clinicInfo = {
  ...siteConfig.clinic,
  doctorName: siteConfig.doctor.name,
  clinicName: siteConfig.clinic.name,
  doctor: siteConfig.doctor,
  facebook: siteConfig.links.facebook,
  whatsapp: siteConfig.links.whatsapp,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "5000+", label: "Happy Patients" },
  { value: "18+", label: "Years Experience" },
  { value: "25+", label: "Treatments Offered" },
  { value: "4.9", label: "Average Rating" },
];

export const treatments = [
  {
    slug: "acne",
    name: "Acne Treatment",
    category: "Skin",
    icon: "Activity",
    description:
      "Advanced acne solutions targeting active breakouts, inflammation, and post-acne marks for clear, healthy skin.",
    overview:
      "Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. Our clinic offers comprehensive acne treatments ranging from topical medications to advanced laser therapies.",
    symptoms: [
      "Whiteheads and blackheads",
      "Pustules and papules",
      "Cysts and nodules",
      "Post-inflammatory hyperpigmentation",
      "Scarring",
    ],
    causes: [
      "Excess sebum production",
      "Bacterial overgrowth (P. acnes)",
      "Hormonal fluctuations",
      "Stress and diet",
      "Certain medications",
    ],
    treatmentProcess:
      "Our dermatologist conducts a thorough skin analysis to determine the acne type and severity. Treatment typically involves a combination of medical-grade topical creams, oral medications if needed, chemical peels, and laser therapy.",
    benefits: [
      "Clearer, smoother skin",
      "Reduced inflammation and redness",
      "Prevention of future breakouts",
      "Minimized scarring",
      "Improved self-confidence",
    ],
    recovery: "Most treatments show improvement within 2-4 weeks. Full results may take 3-6 months depending on severity.",
    faqs: [
      {
        question: "How long does acne treatment take?",
        answer:
          "Initial improvement is typically seen within 2-4 weeks, with significant results in 3-6 months.",
      },
      {
        question: "Are acne treatments painful?",
        answer:
          "Most treatments are comfortable. Laser and chemical peel procedures may cause mild discomfort.",
      },
    ],
    related: ["acne-scars", "chemical-peel", "hydra-facial"],
  },
  {
    slug: "acne-scars",
    name: "Acne Scars",
    category: "Skin",
    icon: "Scissors",
    description:
      "Laser resurfacing and advanced treatments to reduce the appearance of acne scars and restore skin texture.",
    overview:
      "Acne scars can significantly impact self-esteem. Our clinic specializes in advanced scar revision techniques using fractional lasers, microneedling, and chemical peels.",
    symptoms: ["Atrophic scars", "Hypertrophic scars", "Ice-pick scars", "Boxcar scars", "Rolling scars"],
    causes: [
      "Inflammatory acne",
      "Delayed or inadequate treatment",
      "Picking or squeezing lesions",
      "Excess collagen production",
      "Deep cystic acne",
    ],
    treatmentProcess:
      "We assess scar type and depth, then recommend a combination of fractional CO2 laser, microneedling with PRP, subcision, or chemical peels.",
    benefits: [
      "Smoother skin texture",
      "Reduced scar visibility",
      "Improved skin tone",
      "Minimally invasive options",
      "Long-lasting results",
    ],
    recovery: "Recovery varies by treatment. Laser procedures require 5-7 days of redness and peeling.",
    faqs: [
      {
        question: "Can acne scars be completely removed?",
        answer:
          "While complete removal may not be possible, our advanced treatments can significantly reduce scar visibility by up to 80%.",
      },
    ],
    related: ["acne", "chemical-peel", "prp"],
  },
  {
    slug: "pigmentation",
    name: "Pigmentation",
    category: "Skin",
    icon: "Sun",
    description:
      "Targeted therapies for sun spots, age spots, and uneven skin tone using advanced laser and topical treatments.",
    overview:
      "Pigmentation disorders cause uneven skin tone and dark patches. We offer medical-grade solutions including Q-switched lasers, IPL, and depigmenting creams.",
    symptoms: ["Sun spots (solar lentigines)", "Age spots", "Liver spots", "Uneven skin tone", "Dark patches"],
    causes: [
      "Sun exposure",
      "Hormonal changes",
      "Aging",
      "Post-inflammatory hyperpigmentation",
      "Certain medications",
    ],
    treatmentProcess:
      "After detailed skin analysis and Wood's lamp examination, we design a personalized treatment plan combining laser toning, chemical peels, and medical-grade serums.",
    benefits: [
      "Even skin tone",
      "Reduced dark spots",
      "Brighter complexion",
      "Long-lasting results",
      "Minimal downtime",
    ],
    recovery: "Laser treatments may cause temporary redness for 1-3 days. Peels cause flaking for 3-5 days.",
    faqs: [
      {
        question: "Is pigmentation permanent?",
        answer:
          "With proper sun protection and maintenance, results can be long-lasting.",
      },
    ],
    related: ["melasma", "chemical-peel", "anti-aging"],
  },
  {
    slug: "melasma",
    name: "Melasma",
    category: "Skin",
    icon: "Cloud",
    description:
      "Specialized treatment for melasma and hyperpigmentation with a combination approach for lasting results.",
    overview:
      "Melasma is a chronic condition causing brown or gray-brown patches on the face. It requires a comprehensive, multi-modal approach.",
    symptoms: ["Brown patches on cheeks", "Forehead discoloration", "Upper lip darkening", "Nose bridge pigmentation", "Worsening with sun exposure"],
    causes: [
      "Hormonal changes (pregnancy, birth control)",
      "Sun exposure",
      "Genetic predisposition",
      "Thyroid disorders",
      "Cosmetic products",
    ],
    treatmentProcess:
      "We use a triple combination approach: depigmenting agents, chemical peels, and low-fluence Q-switched laser. Strict photoprotection is mandatory.",
    benefits: [
      "Significant lightening of patches",
      "Even skin tone",
      "Prevention of further darkening",
      "Improved confidence",
      "Long-term control",
    ],
    recovery: "Mild peeling and redness for 3-5 days after peels. Full results in 2-3 months.",
    faqs: [
      {
        question: "Can melasma be cured permanently?",
        answer:
          "Melasma is chronic but controllable. With consistent treatment and strict sun protection, significant improvement can be maintained.",
      },
    ],
    related: ["pigmentation", "chemical-peel", "anti-aging"],
  },
  {
    slug: "hair-fall",
    name: "Hair Fall",
    category: "Hair",
    icon: "Wind",
    description:
      "Comprehensive hair loss solutions including medical management, PRP therapy, and advanced restoration techniques.",
    overview:
      "Hair fall affects millions and can result from genetic, hormonal, nutritional, or stress-related factors. We offer evidence-based treatments.",
    symptoms: ["Excessive shedding", "Thinning hair", "Receding hairline", "Widening part", "Visible scalp"],
    causes: [
      "Androgenetic alopecia",
      "Hormonal imbalances",
      "Nutritional deficiencies",
      "Stress and illness",
      "Autoimmune conditions",
    ],
    treatmentProcess:
      "We conduct trichoscopy, blood tests, and scalp analysis. Treatment may include minoxidil, finasteride, PRP therapy, mesotherapy, and dietary supplementation.",
    benefits: [
      "Reduced hair fall",
      "New hair growth",
      "Thicker, healthier hair",
      "Improved scalp health",
      "Boosted confidence",
    ],
    recovery: "PRP therapy shows results in 3-4 months. Medical treatments require consistent use for 6-12 months.",
    faqs: [
      {
        question: "What causes hair fall in women?",
        answer:
          "Common causes include hormonal changes, nutritional deficiencies, stress, thyroid disorders, and PCOS.",
      },
    ],
    related: ["hair-transplant", "prp", "hair-disorders"],
  },
  {
    slug: "hair-transplant",
    name: "Hair Transplant",
    category: "Hair",
    icon: "Scissors",
    description:
      "State-of-the-art hair restoration using FUE and FUT techniques for natural, permanent results.",
    overview:
      "Hair transplantation is a surgical procedure that moves hair follicles from a donor area to a balding or thinning area.",
    symptoms: ["Permanent hair loss", "Receding hairline", "Crown balding", "Thinning crown", "Eyebrow loss"],
    causes: [
      "Genetic hair loss (androgenetic alopecia)",
      "Trauma or burns",
      "Scarring from surgery or injury",
      "Congenital absence of hair",
      "Age-related thinning",
    ],
    treatmentProcess:
      "We perform FUE or FUT. Under local anesthesia, hair follicles are harvested and transplanted. The procedure takes 4-8 hours.",
    benefits: [
      "Permanent natural results",
      "Minimal downtime",
      "No visible scarring (FUE)",
      "Natural hairline design",
      "Lifelong results",
    ],
    recovery: "Shedding of transplanted hair at 2-4 weeks. New growth at 3-4 months. Final results at 9-12 months.",
    faqs: [
      {
        question: "Is hair transplant painful?",
        answer:
          "The procedure is performed under local anesthesia, so there is no pain during surgery.",
      },
    ],
    related: ["hair-fall", "prp", "hair-disorders"],
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Laser",
    icon: "Zap",
    description:
      "Permanent hair reduction using advanced diode and Nd:YAG lasers for all skin types.",
    overview:
      "Laser hair removal offers a long-term solution to unwanted hair. Our advanced laser systems are safe and effective for all skin types.",
    symptoms: ["Unwanted facial hair", "Excess body hair", "Ingrown hairs", "Razor bumps", "Frequent shaving/waxing"],
    causes: ["Genetic factors", "Hormonal imbalances", "Medications", "PCOS", "Idiopathic hirsutism"],
    treatmentProcess:
      "We use diode and Nd:YAG lasers with cooling technology. Each session targets hair in the active growth phase. Multiple sessions (6-8) are needed.",
    benefits: [
      "Permanent hair reduction",
      "Smooth, silky skin",
      "No more ingrown hairs",
      "Time-saving",
      "Suitable for all areas",
    ],
    recovery: "Redness and mild swelling for a few hours. No downtime.",
    faqs: [
      {
        question: "Is laser hair removal permanent?",
        answer:
          "It provides permanent hair reduction, meaning 90-95% of hair is permanently removed after a full course.",
      },
    ],
    related: ["skin-tightening", "anti-aging"],
  },
  {
    slug: "botox",
    name: "Botox",
    category: "Cosmetic",
    icon: "Sparkles",
    description:
      "Non-surgical wrinkle reduction and facial rejuvenation with Botox for a smooth, youthful appearance.",
    overview:
      "Botox (Botulinum toxin) is a minimally invasive treatment that temporarily reduces muscle activity to smooth wrinkles and prevent new lines.",
    symptoms: ["Forehead lines", "Frown lines (glabellar)", "Crow's feet", "Bunny lines", "Neck bands"],
    causes: ["Repetitive facial expressions", "Aging", "Sun damage", "Loss of skin elasticity", "Gravity"],
    treatmentProcess:
      "A thorough facial analysis determines optimal injection points. Small amounts of Botox are injected using ultra-fine needles. Takes 10-15 minutes.",
    benefits: [
      "Smoother, younger-looking skin",
      "Prevention of new wrinkles",
      "Quick, lunchtime procedure",
      "No downtime",
      "Natural-looking results",
    ],
    recovery: "No downtime. Results visible in 3-5 days, full effect in 7-14 days. Lasts 3-6 months.",
    faqs: [
      {
        question: "Does Botox make you look frozen?",
        answer:
          "When administered by an experienced dermatologist, Botox provides natural-looking results with precise dosing.",
      },
    ],
    related: ["fillers", "anti-aging", "skin-tightening"],
  },
  {
    slug: "fillers",
    name: "Fillers",
    category: "Cosmetic",
    icon: "Droplets",
    description:
      "Hyaluronic acid fillers to restore volume, smooth deep folds, and enhance facial contours.",
    overview:
      "Dermal fillers restore lost volume, smooth deep folds, and enhance facial contours using premium hyaluronic acid.",
    symptoms: ["Nasolabial folds", "Marionette lines", "Lip thinning", "Cheek volume loss", "Under-eye hollows", "Jawline definition"],
    causes: ["Aging", "Loss of facial fat", "Collagen depletion", "Gravity", "Lifestyle factors"],
    treatmentProcess:
      "After analyzing facial anatomy, we inject hyaluronic acid filler into targeted areas using fine needles or cannulas. Takes 20-30 minutes.",
    benefits: [
      "Immediate volume restoration",
      "Smoother facial contours",
      "Long-lasting results (9-18 months)",
      "Reversible with hyaluronidase",
      "Natural enhancement",
    ],
    recovery: "Mild swelling and bruising for 2-5 days. Results visible immediately.",
    faqs: [
      {
        question: "Are fillers safe?",
        answer:
          "Hyaluronic acid fillers are FDA-approved and very safe when administered by a trained professional.",
      },
    ],
    related: ["botox", "anti-aging", "skin-tightening"],
  },
  {
    slug: "chemical-peel",
    name: "Chemical Peel",
    category: "Skin",
    icon: "FlaskConical",
    description:
      "Professional chemical peels to rejuvenate skin, reduce fine lines, and improve texture and tone.",
    overview:
      "Chemical peels use medical-grade acids to exfoliate the skin, revealing fresher, smoother skin underneath.",
    symptoms: ["Fine lines and wrinkles", "Uneven skin texture", "Sun damage", "Dark spots", "Dull complexion"],
    causes: ["Aging", "Sun exposure", "Environmental damage", "Skin cell buildup", "Lack of skincare"],
    treatmentProcess:
      "After skin preparation, the appropriate peel solution is applied. Superficial peels use AHAs, medium use TCA, deep use phenol. Takes 15-45 minutes.",
    benefits: [
      "Improved skin texture",
      "Reduced fine lines",
      "Brighter complexion",
      "Even skin tone",
      "Stimulated collagen production",
    ],
    recovery: "Superficial: 1-3 days flaking. Medium: 5-7 days. Deep: 2-3 weeks.",
    faqs: [
      {
        question: "How often can I get a chemical peel?",
        answer:
          "Superficial peels every 2-4 weeks. Medium peels every 3-6 months. Deep peels once a year.",
      },
    ],
    related: ["acne", "pigmentation", "hydra-facial"],
  },
  {
    slug: "hydra-facial",
    name: "Hydra Facial",
    category: "Skin",
    icon: "Droplets",
    description:
      "Deep cleansing, exfoliation, extraction, and hydration for instantly radiant, healthy skin.",
    overview:
      "HydraFacial is a multi-step treatment that cleanses, exfoliates, extracts, and hydrates the skin. Suitable for all skin types.",
    symptoms: ["Dull skin", "Clogged pores", "Fine lines", "Dryness", "Uneven texture", "Congested skin"],
    causes: ["Dead skin buildup", "Environmental pollutants", "Improper cleansing", "Lack of hydration", "Aging"],
    treatmentProcess:
      "3-step process: 1) Cleanse + Peel, 2) Extract + Purify, 3) Fuse + Protect. Takes 30-60 minutes.",
    benefits: [
      "Instant glow",
      "Deep pore cleansing",
      "Improved texture",
      "Hydrated, plump skin",
      "No downtime",
    ],
    recovery: "No downtime. Skin may appear slightly flushed for an hour. Results visible immediately.",
    faqs: [
      {
        question: "How often should I get a HydraFacial?",
        answer:
          "Monthly sessions provide optimal results. A series of 6 gives cumulative benefits.",
      },
    ],
    related: ["chemical-peel", "prp", "anti-aging"],
  },
  {
    slug: "prp",
    name: "PRP Therapy",
    category: "Hair",
    icon: "HeartPulse",
    description:
      "Platelet-rich plasma therapy for hair regrowth, skin rejuvenation, and scar reduction.",
    overview:
      "PRP therapy uses your own blood's growth factors to stimulate healing and regeneration.",
    symptoms: ["Thinning hair", "Hair shedding", "Dull, tired skin", "Fine lines", "Acne scars", "Under-eye circles"],
    causes: ["Aging", "Hormonal changes", "Nutrient deficiency", "Environmental damage", "Scarring"],
    treatmentProcess:
      "Blood is drawn and centrifuged to isolate platelet-rich plasma, then injected into scalp or skin. Takes 30-45 minutes.",
    benefits: [
      "Natural hair regrowth",
      "Improved skin quality",
      "Reduced scarring",
      "Minimal downtime",
      "Safe with no foreign substances",
    ],
    recovery: "Mild redness for 1-2 days. Avoid washing hair for 24 hours.",
    faqs: [
      {
        question: "How many PRP sessions are needed?",
        answer:
          "For hair: 4-6 sessions initially, then maintenance every 3-6 months.",
      },
    ],
    related: ["hair-fall", "hair-transplant", "hydra-facial"],
  },
  {
    slug: "skin-tightening",
    name: "Skin Tightening",
    category: "Skin",
    icon: "Thermometer",
    description:
      "Non-surgical skin tightening using radiofrequency and ultrasound technology for firmer, youthful skin.",
    overview:
      "Our non-surgical skin tightening treatments stimulate collagen to restore firmness and elasticity.",
    symptoms: ["Sagging skin", "Loss of jawline definition", "Loose neck skin", "Crepey skin", "Drooping cheeks"],
    causes: ["Aging", "Collagen loss", "Weight loss", "Sun damage", "Gravity"],
    treatmentProcess:
      "We use RF and ultrasound technologies that deliver heat energy deep into the skin, triggering collagen remodeling. Sessions take 30-60 minutes.",
    benefits: [
      "Firmer, tighter skin",
      "Improved facial contours",
      "No surgery required",
      "Minimal downtime",
      "Long-lasting results",
    ],
    recovery: "Mild redness for 1-3 days. No downtime. Results improve over 3-6 months.",
    faqs: [
      {
        question: "How many sessions are needed?",
        answer:
          "Typically 3-6 sessions spaced 4 weeks apart.",
      },
    ],
    related: ["anti-aging", "botox", "fillers"],
  },
  {
    slug: "anti-aging",
    name: "Anti-Aging",
    category: "Cosmetic",
    icon: "Clock",
    description:
      "Comprehensive anti-aging solutions combining advanced technologies and skincare for youthful, radiant skin.",
    overview:
      "Our anti-aging programs combine multiple modalities to address aging at every level.",
    symptoms: ["Fine lines and wrinkles", "Volume loss", "Sagging skin", "Age spots", "Dull complexion", "Thin skin"],
    causes: ["Collagen loss", "Free radical damage", "Decreased cell turnover", "Loss of facial fat", "Sun exposure"],
    treatmentProcess:
      "We design a customized anti-aging plan that may include Botox, fillers, PRP, laser resurfacing, radiofrequency, and medical-grade skincare.",
    benefits: [
      "Comprehensive rejuvenation",
      "Youthful appearance",
      "Prevention of future aging",
      "Customized approach",
      "Natural-looking results",
    ],
    recovery: "Varies by treatment combination. Most treatments have minimal to no downtime.",
    faqs: [
      {
        question: "When should I start anti-aging treatments?",
        answer:
          "Preventive anti-aging in the late 20s to early 30s is ideal, but it's never too late to start.",
      },
    ],
    related: ["botox", "fillers", "skin-tightening", "chemical-peel"],
  },
  {
    slug: "vitiligo",
    name: "Vitiligo",
    category: "Skin",
    icon: "Circle",
    description:
      "Specialized vitiligo management using medical, laser, and surgical approaches to restore skin color.",
    overview:
      "Vitiligo is an autoimmune condition causing loss of skin pigment. We offer comprehensive management.",
    symptoms: ["White patches on skin", "Premature whitening of hair", "Loss of color inside mouth", "Color changes in retina", "Patchy skin depigmentation"],
    causes: [
      "Autoimmune destruction of melanocytes",
      "Genetic factors",
      "Stress",
      "Skin injury (Koebner phenomenon)",
      "Oxidative stress",
    ],
    treatmentProcess:
      "Options include topical corticosteroids, calcineurin inhibitors, NB-UVB phototherapy, excimer laser, and melanocyte transplantation.",
    benefits: [
      "Repigmentation of affected areas",
      "Halted progression",
      "Improved appearance",
      "Psychological support",
      "Long-term management plan",
    ],
    recovery: "Repigmentation begins in 2-3 months. Full results may take 6-12 months.",
    faqs: [
      {
        question: "Can vitiligo be cured?",
        answer:
          "While not always curable, vitiligo can be effectively managed. Many patients achieve significant repigmentation.",
      },
    ],
    related: ["pigmentation", "skin-allergy", "eczema"],
  },
  {
    slug: "psoriasis",
    name: "Psoriasis",
    category: "Skin",
    icon: "Shield",
    description:
      "Effective management of psoriasis with biologics, phototherapy, and advanced topical treatments.",
    overview:
      "Psoriasis is a chronic autoimmune skin condition causing rapid skin cell buildup and scaly patches.",
    symptoms: ["Red, scaly patches", "Dry, cracked skin", "Itching and burning", "Thickened nails", "Joint pain (psoriatic arthritis)"],
    causes: [
      "Autoimmune dysfunction",
      "Genetic predisposition",
      "Triggers: stress, infection, injury",
      "Medications",
      "Lifestyle factors",
    ],
    treatmentProcess:
      "Treatment is personalized based on severity. Options include topical corticosteroids, vitamin D analogues, phototherapy, systemic medications, and biologics.",
    benefits: [
      "Clearer skin",
      "Reduced itching and scaling",
      "Improved joint mobility",
      "Better quality of life",
      "Long-term disease control",
    ],
    recovery: "Topical treatments show improvement in 2-4 weeks. Phototherapy requires 20-30 sessions.",
    faqs: [
      {
        question: "Is psoriasis curable?",
        answer:
          "Psoriasis is a chronic condition without a permanent cure, but modern treatments can achieve clear or nearly clear skin.",
      },
    ],
    related: ["eczema", "vitiligo", "skin-allergy"],
  },
  {
    slug: "eczema",
    name: "Eczema",
    category: "Skin",
    icon: "ShieldOff",
    description:
      "Comprehensive eczema care to relieve itching, reduce inflammation, and restore the skin barrier.",
    overview:
      "Eczema (atopic dermatitis) is a chronic inflammatory skin condition causing itchy, red, and inflamed skin.",
    symptoms: ["Dry, sensitive skin", "Intense itching", "Red, inflamed patches", "Crusting and scaling", "Skin thickening"],
    causes: [
      "Genetic predisposition",
      "Immune system dysfunction",
      "Skin barrier defects",
      "Environmental triggers",
      "Allergens and irritants",
    ],
    treatmentProcess:
      "We use a multi-pronged approach: moisturizers and barrier repair creams, topical corticosteroids, antihistamines, and biologics for severe cases.",
    benefits: [
      "Reduced itching and inflammation",
      "Restored skin barrier",
      "Fewer flare-ups",
      "Improved sleep quality",
      "Better overall skin health",
    ],
    recovery: "Acute flare-ups improve within 1-2 weeks. Long-term management requires consistent skincare.",
    faqs: [
      {
        question: "Can eczema be cured?",
        answer:
          "Eczema is chronic but manageable. Many children outgrow it, while adults may need lifelong management.",
      },
    ],
    related: ["psoriasis", "skin-allergy", "vitiligo"],
  },
  {
    slug: "fungal-infection",
    name: "Fungal Infection",
    category: "Skin",
    icon: "Bug",
    description:
      "Expert diagnosis and treatment of all types of fungal skin infections with advanced antifungal therapies.",
    overview:
      "Fungal infections of the skin are common and range from mild to extensive. We provide accurate diagnosis and effective treatment.",
    symptoms: ["Red, scaly patches", "Itching and burning", "Circular rash with raised border", "Cracking between toes", "Nail discoloration and thickening"],
    causes: [
      "Dermatophyte fungi",
      "Yeast overgrowth (Candida)",
      "Moist, warm environments",
      "Weakened immunity",
      "Diabetes or obesity",
    ],
    treatmentProcess:
      "Diagnosis confirmed with KOH mount and culture. Treatment includes topical antifungals for mild cases and oral antifungals for extensive infections.",
    benefits: [
      "Rapid symptom relief",
      "Complete infection clearance",
      "Prevention of spread",
      "Reduced recurrence",
      "Improved comfort",
    ],
    recovery: "Skin infections improve within 2-4 weeks. Nail infections require 3-6 months.",
    faqs: [
      {
        question: "Are fungal infections contagious?",
        answer:
          "Yes, fungal infections can spread through direct contact or shared items like towels and clothing.",
      },
    ],
    related: ["nail-disorders", "skin-allergy", "eczema"],
  },
  {
    slug: "nail-disorders",
    name: "Nail Disorders",
    category: "Skin",
    icon: "Hexagon",
    description:
      "Treatment for nail fungus, ingrown nails, brittle nails, and other nail conditions.",
    overview:
      "Nail disorders can be painful and unsightly. We treat fungal nail infections, ingrown nails, brittle nails, and nail psoriasis.",
    symptoms: ["Thickened, discolored nails", "Crumbling nail texture", "Painful ingrown nails", "White spots on nails", "Separation from nail bed"],
    causes: [
      "Fungal infections (onychomycosis)",
      "Trauma to nails",
      "Psoriasis",
      "Bacterial infections",
      "Systemic diseases",
    ],
    treatmentProcess:
      "We diagnose through clinical examination and lab tests. Treatment ranges from topical antifungal lacquers to oral antifungals.",
    benefits: [
      "Clear, healthy nails",
      "Pain relief",
      "Prevention of spread",
      "Improved appearance",
      "Long-term nail health",
    ],
    recovery: "Oral antifungals require 3-6 months for toenails. Topical treatments may take 6-12 months.",
    faqs: [
      {
        question: "Can nail fungus be permanently cured?",
        answer:
          "Yes, with oral antifungal medication, nail fungus can be cured if the full course is completed.",
      },
    ],
    related: ["fungal-infection", "dermatosurgery", "skin-allergy"],
  },
  {
    slug: "hair-disorders",
    name: "Hair Disorders",
    category: "Hair",
    icon: "Wind",
    description:
      "Diagnosis and treatment of alopecia, dandruff, and other scalp and hair conditions.",
    overview:
      "Hair disorders include alopecia areata, telogen effluvium, and scalp infections. We diagnose the underlying cause and provide targeted treatments.",
    symptoms: ["Patchy hair loss", "Excessive shedding", "Scalp inflammation", "Flaking and itching", "Hair breakage"],
    causes: [
      "Autoimmune conditions",
      "Hormonal imbalances",
      "Nutritional deficiencies",
      "Stress",
      "Infections",
    ],
    treatmentProcess:
      "Trichoscopy, scalp biopsy, and blood tests help diagnose. Treatment may include topical minoxidil, corticosteroids, antifungal shampoos.",
    benefits: [
      "Hair regrowth",
      "Scalp health restoration",
      "Reduced hair fall",
      "Improved hair quality",
      "Psychological relief",
    ],
    recovery: "Results vary. Alopecia areata may respond in 3-6 months. Telogen effluvium often resolves in 6 months.",
    faqs: [
      {
        question: "Can hair grow back after alopecia areata?",
        answer:
          "Yes, most patients with alopecia areata experience spontaneous or treatment-induced regrowth. About 80% regrow within a year.",
      },
    ],
    related: ["hair-fall", "hair-transplant", "prp"],
  },
  {
    slug: "skin-allergy",
    name: "Skin Allergy",
    category: "Skin",
    icon: "AlertTriangle",
    description:
      "Identification and management of skin allergies, contact dermatitis, and urticaria with allergen testing.",
    overview:
      "Skin allergies can cause significant discomfort. We identify triggers through patch testing and provide effective management strategies.",
    symptoms: ["Red, itchy rash", "Hives (urticaria)", "Swelling", "Blisters", "Dry, scaly patches"],
    causes: [
      "Contact with allergens (nickel, fragrances, dyes)",
      "Food allergies",
      "Medications",
      "Insect bites",
      "Environmental allergens",
    ],
    treatmentProcess:
      "We perform patch testing and IgE testing to identify allergens. Treatment includes avoidance strategies, antihistamines, and topical corticosteroids.",
    benefits: [
      "Identified triggers",
      "Relief from itching and rash",
      "Prevention of future reactions",
      "Improved quality of life",
      "Personalized care plan",
    ],
    recovery: "Acute reactions improve within days. Long-term management requires ongoing avoidance.",
    faqs: [
      {
        question: "How is skin allergy diagnosed?",
        answer:
          "Through patch testing, where small amounts of potential allergens are applied to the skin and observed.",
      },
    ],
    related: ["eczema", "psoriasis", "fungal-infection"],
  },
  {
    slug: "mole-removal",
    name: "Mole Removal",
    category: "Surgery",
    icon: "CircleDot",
    description:
      "Safe mole removal with biopsy capability for suspicious lesions using surgical excision or laser.",
    overview:
      "Mole removal is performed for cosmetic reasons or when a mole shows concerning features. We use surgical excision with biopsy when needed.",
    symptoms: ["Raised moles", "Dark or changing moles", "Irregular borders", "Asymmetrical moles", "Moles causing irritation"],
    causes: [
      "Clusters of pigment cells (melanocytes)",
      "Sun exposure",
      "Genetic factors",
      "Hormonal changes",
      "Aging",
    ],
    treatmentProcess:
      "After examining the mole, we remove it via surgical excision or laser with local anesthesia. Takes 15-30 minutes.",
    benefits: [
      "Complete removal",
      "Histological analysis if needed",
      "Minimal scarring",
      "Quick procedure",
      "Cosmetic improvement",
    ],
    recovery: "Healing in 1-2 weeks. Suture removal at 7-10 days. Scars fade over 3-6 months.",
    faqs: [
      {
        question: "Is mole removal painful?",
        answer:
          "The procedure is performed under local anesthesia. Mild discomfort afterward for a day or two.",
      },
    ],
    related: ["wart-removal", "dermatosurgery", "pigmentation"],
  },
  {
    slug: "wart-removal",
    name: "Wart Removal",
    category: "Surgery",
    icon: "CircleOff",
    description:
      "Effective wart removal using cryotherapy, electrocautery, and topical treatments for all wart types.",
    overview:
      "Warts are caused by HPV and can be stubborn. We offer multiple removal methods for complete clearance.",
    symptoms: ["Rough, raised bumps", "Black dots (clotted blood vessels)", "Pain on pressure", "Spread to other areas", "Plantar warts on soles"],
    causes: [
      "Human papillomavirus (HPV)",
      "Direct skin contact",
      "Weakened immunity",
      "Cuts or breaks in skin",
      "Moist environments",
    ],
    treatmentProcess:
      "Depending on wart type, we use cryotherapy, electrocautery, topical salicylic acid, or immunotherapy. Multiple sessions may be needed.",
    benefits: [
      "Complete wart removal",
      "Prevention of spread",
      "Quick treatment",
      "Minimal discomfort",
      "Boosted confidence",
    ],
    recovery: "Cryotherapy causes blistering in 1-2 weeks. Electrocautery heals in 1-2 weeks.",
    faqs: [
      {
        question: "Do warts come back after removal?",
        answer:
          "The virus remains in the skin, so warts can recur. Strong immunity and good hygiene reduce recurrence.",
      },
    ],
    related: ["mole-removal", "dermatosurgery", "skin-allergy"],
  },
  {
    slug: "dermatosurgery",
    name: "Dermatosurgery",
    category: "Surgery",
    icon: "Stethoscope",
    description:
      "Advanced skin surgery for cysts, lipomas, and skin cancers with precision and minimal scarring.",
    overview:
      "Dermatosurgery covers a range of minor surgical procedures for skin lesions with expertise and aesthetic consideration.",
    symptoms: ["Growing lumps", "Painful cysts", "Suspicious skin lesions", "Lipomas", "Recurrent infections"],
    causes: [
      "Blocked sebaceous glands (cysts)",
      "Fatty tissue growth (lipomas)",
      "Sun damage (skin cancers)",
      "Genetic conditions",
      "Chronic inflammation",
    ],
    treatmentProcess:
      "Under local anesthesia, we excise the lesion with appropriate margins. For larger defects, we may use flaps or grafts.",
    benefits: [
      "Complete lesion removal",
      "Histological diagnosis",
      "Minimal scarring",
      "Prevention of complications",
      "Cosmetic outcome",
    ],
    recovery: "Healing in 1-2 weeks. Sutures removed at 7-14 days. Scars continue to mature for 6-12 months.",
    faqs: [
      {
        question: "Is dermatosurgery safe?",
        answer:
          "Yes, when performed by a trained dermatologist, these minor procedures are very safe with excellent cosmetic outcomes.",
      },
    ],
    related: ["mole-removal", "wart-removal", "skin-allergy"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Jabalpur",
    rating: 5,
    text: "Dr. Anamika Mishra is an exceptional dermatologist. She treated my acne scars and the results are amazing. Her approach is thorough, professional, and personalized. I finally have the clear skin I've always wanted.",
    treatment: "Acne Scars",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Jabalpur",
    rating: 5,
    text: "I had a hair transplant at the clinic and the results exceeded my expectations. Dr. Mishra's expertise and the team's professionalism made the entire experience comfortable. Highly recommend!",
    treatment: "Hair Transplant",
    avatar: "RV",
  },
  {
    id: 3,
    name: "Sneha Gupta",
    location: "Jabalpur",
    rating: 5,
    text: "The HydraFacial treatment was wonderful. My skin feels rejuvenated and looks radiant. Dr. Mishra takes time to explain everything and recommends what's best for your skin.",
    treatment: "Hydra Facial",
    avatar: "SG",
  },
  {
    id: 4,
    name: "Amit Patel",
    location: "Jabalpur",
    rating: 5,
    text: "I've been suffering from psoriasis for years. Dr. Mishra's treatment plan has given me significant relief. The staff is caring and the clinic is very well-maintained.",
    treatment: "Psoriasis",
    avatar: "AP",
  },
  {
    id: 5,
    name: "Kavita Joshi",
    location: "Jabalpur",
    rating: 5,
    text: "Dr. Mishra performed my mole removal procedure with great care. The scar is barely visible and the whole experience was smooth. Very satisfied with the outcome.",
    treatment: "Mole Removal",
    avatar: "KJ",
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Jabalpur",
    rating: 5,
    text: "The PRP therapy for my hair fall has given great results. After just 4 sessions, I can see significant improvement. Dr. Mishra is knowledgeable and genuinely cares about her patients.",
    treatment: "PRP Therapy",
    avatar: "VS",
  },
  {
    id: 7,
    name: "Neha Agarwal",
    location: "Jabalpur",
    rating: 5,
    text: "I was struggling with melasma for years. Dr. Mishra's customized treatment approach has lightened my spots significantly. I'm so grateful for her expertise and dedication.",
    treatment: "Melasma",
    avatar: "NA",
  },
  {
    id: 8,
    name: "Rajesh Kumar",
    location: "Jabalpur",
    rating: 5,
    text: "Got my Botox treatment done here and the results are natural and subtle. Dr. Mishra has great aesthetic sense and makes you feel completely at ease throughout the procedure.",
    treatment: "Botox",
    avatar: "RK",
  },
];

export const faqs = [
  {
    category: "General",
    question: "What conditions do you treat?",
    answer:
      "We treat a wide range of skin, hair, and nail conditions including acne, eczema, psoriasis, vitiligo, fungal infections, hair loss, and various cosmetic concerns.",
  },
  {
    category: "General",
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment online through our website, call us at +91 8305979743, or message us on WhatsApp. We recommend booking in advance.",
  },
  {
    category: "Treatments",
    question: "Are the treatments painful?",
    answer:
      "Most treatments are minimally uncomfortable. We use topical anesthetics and cooling technology to ensure your comfort throughout any procedure.",
  },
  {
    category: "Treatments",
    question: "How long do results last?",
    answer:
      "Results vary by treatment. Botox lasts 3-6 months, fillers 9-18 months, and laser treatments can have long-lasting effects. We'll discuss expected results during consultation.",
  },
  {
    category: "Treatments",
    question: "Is there downtime after procedures?",
    answer:
      "Many treatments have little to no downtime. Procedures like chemical peels and laser resurfacing may require a few days of recovery, which we'll prepare you for.",
  },
  {
    category: "Clinic",
    question: "What are your clinic hours?",
    answer:
      "We're open Monday through Saturday, 11:00 AM to 2:00 PM. We recommend arriving 10 minutes early for your appointment.",
  },
  {
    category: "Clinic",
    question: "Do you accept insurance?",
    answer:
      "We provide detailed prescriptions and documentation for insurance claims. Please check with your insurance provider about coverage for dermatology services.",
  },
  {
    category: "General",
    question: "Do you offer online consultations?",
    answer:
      "Yes, we offer teleconsultations for follow-up patients and initial assessments. Please contact us to schedule a virtual appointment.",
  },
];

export const blogPosts = [
  {
    slug: "understanding-acne-causes-and-treatments",
    title: "Understanding Acne: Causes and Effective Treatments",
    excerpt:
      "Learn about the underlying causes of acne and discover the most effective treatment options available today for clear, healthy skin.",
    content: `
Acne is one of the most common skin conditions affecting people of all ages. Understanding its causes and treatment options is key to achieving clear skin.

## What Causes Acne?

Acne develops when hair follicles become clogged with oil and dead skin cells. Several factors contribute:

- **Excess sebum production** from overactive sebaceous glands
- **Bacterial overgrowth** of Cutibacterium acnes
- **Hormonal fluctuations** during puberty, menstruation, or stress
- **Dietary factors** including high glycemic foods and dairy
- **Medications** like certain steroids and lithium

## Treatment Options

Modern dermatology offers a range of effective treatments:

1. **Topical Therapies** - Retinoids, benzoyl peroxide, and antibiotics
2. **Oral Medications** - Antibiotics, hormonal therapy, and isotretinoin
3. **Procedures** - Chemical peels, laser therapy, and light treatments
4. **Lifestyle Changes** - Diet modification, stress management, and proper skincare

## When to See a Dermatologist

If over-the-counter treatments aren't working, or if you have moderate to severe acne with cysts and nodules, it's time to consult a dermatologist. Early intervention prevents scarring.

Book a consultation with Dr. Anamika Mishra for personalized acne treatment.
    `,
    category: "Skin Care",
    date: "2024-12-15",
    readTime: "5 min read",
    author: "Dr. Anamika Mishra",
    image: "/images/blog/acne-treatment.jpg",
    tags: ["acne", "skin care", "treatment"],
    related: ["chemical-peel", "hydra-facial"],
  },
  {
    slug: "prp-therapy-for-hair-regrowth",
    title: "PRP Therapy for Hair Regrowth: What You Need to Know",
    excerpt:
      "Platelet-rich plasma therapy is revolutionizing hair loss treatment. Discover how PRP can help you achieve thicker, healthier hair naturally.",
    content: `
PRP therapy has emerged as one of the most promising treatments for hair loss. Using your own blood's growth factors, PRP stimulates natural hair regrowth.

## How PRP Works

A small sample of your blood is drawn and processed in a centrifuge to concentrate the platelets. The platelet-rich plasma is then injected into the scalp, where growth factors stimulate hair follicles.

## Benefits of PRP for Hair

- **Natural approach** using your own blood
- **Minimal downtime** with no surgical risks
- **Proven results** in clinical studies
- **Safe for all hair types** and skin tones
- **Can be combined** with other hair loss treatments

## What to Expect

Most patients require 4-6 initial sessions spaced 4 weeks apart, followed by maintenance every 3-6 months. Results typically become visible after 3-4 months.

## Is PRP Right for You?

PRP is most effective for patients with early to moderate hair loss. A consultation with Dr. Anamika Mishra will determine if PRP is suitable for your specific condition.

Schedule your PRP consultation today and take the first step toward thicker, healthier hair.
    `,
    category: "Hair Care",
    date: "2024-12-10",
    readTime: "6 min read",
    author: "Dr. Anamika Mishra",
    image: "/images/blog/prp-hair.jpg",
    tags: ["PRP", "hair loss", "hair regrowth"],
    related: ["hair-fall", "hair-transplant"],
  },
  {
    slug: "skincare-routine-for-sensitive-skin",
    title: "The Ultimate Skincare Routine for Sensitive Skin",
    excerpt:
      "Build a gentle yet effective skincare routine that nourishes sensitive skin without causing irritation or redness.",
    content: `
Having sensitive skin doesn't mean you can't have a great skincare routine. The key is choosing the right products and techniques.

## Understanding Sensitive Skin

Sensitive skin reacts easily to skincare products, environmental factors, and even water temperature. Common signs include redness, itching, burning, and stinging.

## Building Your Routine

### Morning
1. Gentle, fragrance-free cleanser
2. Hydrating serum with hyaluronic acid
3. Moisturizer with ceramides
4. Broad-spectrum sunscreen (SPF 50+)

### Evening
1. Double cleanse if wearing makeup
2. Treatment serum (niacinamide or azelaic acid)
3. Rich moisturizer

## Ingredients to Embrace

- **Hyaluronic acid** - Hydration without irritation
- **Niacinamide** - Strengthens skin barrier
- **Ceramides** - Restores protective barrier
- **Zinc oxide** - Gentle physical sunscreen

## Ingredients to Avoid

- Fragrances and essential oils
- Alcohol-based products
- Harsh exfoliants (high concentration acids)
- Sodium lauryl sulfate

## Professional Guidance

For persistent sensitivity, consult Dr. Anamika Mishra for a personalized assessment and treatment plan tailored to your skin's unique needs.

Book a consultation to get expert guidance on your skincare journey.
    `,
    category: "Skin Care",
    date: "2024-12-05",
    readTime: "7 min read",
    author: "Dr. Anamika Mishra",
    image: "/images/blog/skincare-routine.jpg",
    tags: ["skincare", "sensitive skin", "routine"],
    related: ["hydra-facial", "chemical-peel"],
  },
  {
    slug: "understanding-melasma-causes-and-treatment",
    title: "Melasma: Understanding the Causes and Finding Effective Treatment",
    excerpt:
      "Melasma can be challenging to treat, but with the right approach, significant improvement is possible. Learn about causes and treatments.",
    content: `
Melasma is a common pigmentation disorder causing brown or gray-brown patches on the face. While not harmful, it can be distressing.

## What is Melasma?

Melasma appears as symmetrical dark patches on the cheeks, forehead, upper lip, nose, and chin. It's more common in women, especially during pregnancy or while taking birth control.

## Causes and Triggers

- **Hormonal changes** - Pregnancy, birth control pills, hormone therapy
- **Sun exposure** - UV rays trigger melanocytes
- **Genetic predisposition** - Family history plays a role
- **Cosmetic products** - Irritating products can worsen melasma
- **Thyroid disorders** - Linked to autoimmune conditions

## Treatment Approaches

Effective melasma management requires a multi-modal approach:

1. **Topical agents** - Hydroquinone, retinoids, corticosteroids
2. **Chemical peels** - Glycolic acid, TCA peels
3. **Laser therapy** - Low-fluence Q-switched laser
4. **Strict sun protection** - Essential for preventing recurrence

## Prevention Tips

- Use broad-spectrum sunscreen daily (SPF 50+)
- Wear wide-brimmed hats outdoors
- Avoid peak sun hours (10 AM - 4 PM)
- Be consistent with treatment even after improvement

## When to Seek Help

Early intervention yields the best results. Dr. Anamika Mishra specializes in melasma treatment and can create a personalized plan for your skin.

Consult with Dr. Mishra for expert melasma management.
    `,
    category: "Skin Care",
    date: "2024-11-28",
    readTime: "6 min read",
    author: "Dr. Anamika Mishra",
    image: "/images/blog/melasma-treatment.jpg",
    tags: ["melasma", "pigmentation", "treatment"],
    related: ["pigmentation", "chemical-peel"],
  },
  {
    slug: "hair-transplant-faq-everything-you-need-to-know",
    title: "Hair Transplant FAQ: Everything You Need to Know",
    excerpt:
      "Considering a hair transplant? Get answers to all your questions about procedures, recovery, costs, and realistic expectations.",
    content: `
Hair transplantation is a life-changing procedure for those experiencing hair loss. Here are answers to the most common questions.

## What is a Hair Transplant?

A hair transplant is a surgical procedure where hair follicles are moved from a donor area (usually the back of the scalp) to a balding or thinning area.

## FUE vs FUT

- **FUE (Follicular Unit Extraction)**: Individual follicles are extracted. No linear scar, faster recovery.
- **FUT (Follicular Unit Transplantation)**: A strip of scalp is removed. More grafts in one session, linear scar.

## Is It Painful?

The procedure is done under local anesthesia, so there's no pain during surgery. Mild discomfort may occur for a few days after, which is manageable with prescribed pain medication.

## Recovery Timeline

- **Week 1**: Slight swelling, scabs form
- **Weeks 2-4**: Transplanted hair sheds (normal)
- **Months 3-4**: New growth begins
- **Months 9-12**: Final results visible

## How Long Do Results Last?

Transplanted hair is permanent and will continue to grow naturally for life. However, existing hair may still be subject to pattern hair loss.

## Choosing the Right Surgeon

Experience matters. Dr. Anamika Mishra brings years of expertise in hair restoration, ensuring natural-looking results with minimal scarring.

Schedule a consultation to discuss your hair restoration options.
    `,
    category: "Hair Care",
    date: "2024-11-20",
    readTime: "8 min read",
    author: "Dr. Anamika Mishra",
    image: "/images/blog/hair-transplant.jpg",
    tags: ["hair transplant", "hair loss", "FUE"],
    related: ["hair-fall", "hair-transplant"],
  },
  {
    slug: "benefits-of-regular-facials-for-skin-health",
    title: "The Science Behind Regular Facials: Benefits for Skin Health",
    excerpt:
      "Regular professional facials do more than just pamper - they're essential for maintaining healthy, glowing skin year-round.",
    content: `
Regular facials are often seen as a luxury, but they're actually an important part of a comprehensive skincare regimen.

## What Happens During a Facial?

A professional facial typically includes:
- Deep cleansing and exfoliation
- Steam to open pores
- Extractions for clogged pores
- Massage to improve circulation
- Mask application
-Serum and moisturizer application

## Key Benefits

1. **Deep cleansing** - Removes impurities that daily cleansing misses
2. **Improved circulation** - Facial massage boosts blood flow
3. **Anti-aging** - Regular treatments stimulate collagen
4. **Stress relief** - The relaxing nature reduces stress hormones
5. **Customized care** - Tailored to your skin's current needs

## How Often Should You Get a Facial?

- **Normal skin**: Monthly
- **Oily/Acne-prone**: Every 2-3 weeks
- **Dry/Sensitive**: Every 4-6 weeks

## Our Signature Treatment

The HydraFacial at our clinic combines cleansing, exfoliation, extraction, and hydration in one powerful treatment. It's suitable for all skin types and delivers instant results.

## Maximizing Results

Between facials, maintain a consistent homecare routine with medical-grade products recommended by your dermatologist.

Book your facial appointment with Dr. Anamika Mishra and experience the difference professional care makes.
    `,
    category: "Skin Care",
    date: "2024-11-15",
    readTime: "5 min read",
    author: "Dr. Anamika Mishra",
    image: "/images/blog/facial-benefits.jpg",
    tags: ["facial", "skincare", "HydraFacial"],
    related: ["hydra-facial", "chemical-peel"],
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/clinic-1.jpg",
    category: "Clinic",
    title: "Modern Treatment Rooms",
    description: "State-of-the-art facilities for comfortable care",
  },
  {
    id: 2,
    src: "/images/gallery/clinic-2.jpg",
    category: "Clinic",
    title: "Reception Area",
    description: "Welcoming environment for all our patients",
  },
  {
    id: 3,
    src: "/images/gallery/treatment-1.jpg",
    category: "Treatment",
    title: "Laser Treatment Session",
    description: "Advanced laser technology for skin rejuvenation",
  },
  {
    id: 4,
    src: "/images/gallery/treatment-2.jpg",
    category: "Treatment",
    title: "HydraFacial Procedure",
    description: "Deep cleansing and hydration treatment",
  },
  {
    id: 5,
    src: "/images/gallery/result-1.jpg",
    category: "Results",
    title: "Acne Treatment - Before",
    description: "Before acne treatment",
  },
  {
    id: 6,
    src: "/images/gallery/result-2.jpg",
    category: "Results",
    title: "Acne Treatment - After",
    description: "After 3 months of treatment",
  },
  {
    id: 7,
    src: "/images/gallery/team-1.jpg",
    category: "Team",
    title: "Dr. Anamika Mishra",
    description: "Lead Dermatologist",
  },
  {
    id: 8,
    src: "/images/gallery/result-3.jpg",
    category: "Results",
    title: "Hair Transplant Results",
    description: "Natural-looking hair restoration",
  },
];

export const treatmentCategories = [
  { value: "all", label: "All Treatments" },
  { value: "skin", label: "Skin" },
  { value: "hair", label: "Hair" },
  { value: "cosmetic", label: "Cosmetic" },
  { value: "laser", label: "Laser" },
  { value: "surgery", label: "Surgery" },
];

export const blogCategories = ["All", "Skin Care", "Hair Care", "Cosmetic", "Laser", "Surgery"];

export const appointmentTimeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
];
