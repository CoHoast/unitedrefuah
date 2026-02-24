// Dynamic Question Flow Engine for Health Share Applications

export type QuestionType = 
  | "radio" 
  | "checkbox" 
  | "text" 
  | "textarea" 
  | "number" 
  | "date" 
  | "select"
  | "info";

export interface QuestionOption {
  value: string;
  label: string;
  triggerQuestions?: string[]; // Question IDs to show if this option is selected
}

export interface Question {
  id: string;
  section: string;
  question: string;
  type: QuestionType;
  options?: QuestionOption[];
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
  showIf?: {
    questionId: string;
    operator: "equals" | "contains" | "not_equals" | "greater_than" | "less_than";
    value: string | string[] | number;
  };
}

export interface Section {
  id: string;
  title: string;
  description: string;
  questions: string[]; // Question IDs in this section
}

// ============================================
// QUESTION DEFINITIONS
// ============================================

export const questions: Record<string, Question> = {
  // === PLAN SELECTION ===
  plan_type: {
    id: "plan_type",
    section: "plan",
    question: "Which membership plan best fits your needs?",
    type: "radio",
    required: true,
    options: [
      { value: "individual", label: "Individual ($175/mo) - Single adult" },
      { value: "couple", label: "Couple ($395/mo) - Married couple", triggerQuestions: ["spouse_info"] },
      { value: "family", label: "Family ($495/mo) - Family with children", triggerQuestions: ["spouse_info", "dependents_info"] },
    ],
  },

  // === PERSONAL INFO ===
  primary_first_name: {
    id: "primary_first_name",
    section: "personal",
    question: "First Name",
    type: "text",
    required: true,
    placeholder: "John",
  },
  primary_last_name: {
    id: "primary_last_name",
    section: "personal",
    question: "Last Name",
    type: "text",
    required: true,
    placeholder: "Cohen",
  },
  primary_email: {
    id: "primary_email",
    section: "personal",
    question: "Email Address",
    type: "text",
    required: true,
    placeholder: "john@example.com",
  },
  primary_phone: {
    id: "primary_phone",
    section: "personal",
    question: "Phone Number",
    type: "text",
    required: true,
    placeholder: "(555) 555-5555",
  },
  primary_dob: {
    id: "primary_dob",
    section: "personal",
    question: "Date of Birth",
    type: "date",
    required: true,
  },
  primary_gender: {
    id: "primary_gender",
    section: "personal",
    question: "Gender",
    type: "radio",
    required: true,
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female", triggerQuestions: ["pregnancy_status"] },
    ],
  },

  // === PREGNANCY (Female only) ===
  pregnancy_status: {
    id: "pregnancy_status",
    section: "personal",
    question: "Are you currently pregnant or planning to become pregnant in the next 12 months?",
    type: "radio",
    required: true,
    showIf: { questionId: "primary_gender", operator: "equals", value: "female" },
    options: [
      { value: "currently_pregnant", label: "Yes, currently pregnant", triggerQuestions: ["pregnancy_due_date", "pregnancy_complications"] },
      { value: "planning", label: "Planning to become pregnant", triggerQuestions: ["maternity_coverage_interest"] },
      { value: "no", label: "No" },
    ],
  },
  pregnancy_due_date: {
    id: "pregnancy_due_date",
    section: "personal",
    question: "What is your expected due date?",
    type: "date",
    required: true,
    showIf: { questionId: "pregnancy_status", operator: "equals", value: "currently_pregnant" },
  },
  pregnancy_complications: {
    id: "pregnancy_complications",
    section: "personal",
    question: "Have you experienced any complications with this pregnancy?",
    type: "radio",
    required: true,
    showIf: { questionId: "pregnancy_status", operator: "equals", value: "currently_pregnant" },
    options: [
      { value: "yes", label: "Yes", triggerQuestions: ["pregnancy_complications_details"] },
      { value: "no", label: "No" },
    ],
  },
  pregnancy_complications_details: {
    id: "pregnancy_complications_details",
    section: "personal",
    question: "Please describe the complications:",
    type: "textarea",
    required: true,
    showIf: { questionId: "pregnancy_complications", operator: "equals", value: "yes" },
    placeholder: "Please provide details about any pregnancy complications...",
  },
  maternity_coverage_interest: {
    id: "maternity_coverage_interest",
    section: "personal",
    question: "Would you like information about our maternity sharing program?",
    type: "radio",
    showIf: { questionId: "pregnancy_status", operator: "equals", value: "planning" },
    options: [
      { value: "yes", label: "Yes, please send me information" },
      { value: "no", label: "No, thank you" },
    ],
  },

  // === TOBACCO USE ===
  tobacco_use: {
    id: "tobacco_use",
    section: "health",
    question: "Have you used any tobacco or nicotine products in the past 24 months?",
    type: "radio",
    required: true,
    helpText: "This includes cigarettes, cigars, vaping, chewing tobacco, nicotine patches/gum",
    options: [
      { value: "yes", label: "Yes", triggerQuestions: ["tobacco_type", "tobacco_frequency", "tobacco_quit_interest"] },
      { value: "no", label: "No" },
      { value: "quit_recent", label: "I quit within the last 24 months", triggerQuestions: ["tobacco_quit_date"] },
    ],
  },
  tobacco_type: {
    id: "tobacco_type",
    section: "health",
    question: "What type(s) of tobacco/nicotine do you use?",
    type: "checkbox",
    required: true,
    showIf: { questionId: "tobacco_use", operator: "equals", value: "yes" },
    options: [
      { value: "cigarettes", label: "Cigarettes" },
      { value: "cigars", label: "Cigars" },
      { value: "vaping", label: "Vaping/E-cigarettes" },
      { value: "chewing", label: "Chewing tobacco/Snuff" },
      { value: "pipe", label: "Pipe tobacco" },
      { value: "other", label: "Other", triggerQuestions: ["tobacco_type_other"] },
    ],
  },
  tobacco_type_other: {
    id: "tobacco_type_other",
    section: "health",
    question: "Please specify the other tobacco/nicotine product:",
    type: "text",
    showIf: { questionId: "tobacco_type", operator: "contains", value: "other" },
  },
  tobacco_frequency: {
    id: "tobacco_frequency",
    section: "health",
    question: "How often do you use tobacco/nicotine?",
    type: "radio",
    required: true,
    showIf: { questionId: "tobacco_use", operator: "equals", value: "yes" },
    options: [
      { value: "daily", label: "Daily", triggerQuestions: ["tobacco_daily_amount"] },
      { value: "weekly", label: "Several times a week" },
      { value: "occasional", label: "Occasionally (less than weekly)" },
    ],
  },
  tobacco_daily_amount: {
    id: "tobacco_daily_amount",
    section: "health",
    question: "Approximately how much do you use per day?",
    type: "text",
    showIf: { questionId: "tobacco_frequency", operator: "equals", value: "daily" },
    placeholder: "e.g., 10 cigarettes, 1 pack, etc.",
  },
  tobacco_quit_interest: {
    id: "tobacco_quit_interest",
    section: "health",
    question: "Are you interested in tobacco cessation resources?",
    type: "radio",
    showIf: { questionId: "tobacco_use", operator: "equals", value: "yes" },
    options: [
      { value: "yes", label: "Yes, I'd like help quitting" },
      { value: "maybe", label: "Maybe in the future" },
      { value: "no", label: "No, thank you" },
    ],
  },
  tobacco_quit_date: {
    id: "tobacco_quit_date",
    section: "health",
    question: "When did you quit using tobacco?",
    type: "date",
    required: true,
    showIf: { questionId: "tobacco_use", operator: "equals", value: "quit_recent" },
  },

  // === PRE-EXISTING CONDITIONS ===
  has_preexisting: {
    id: "has_preexisting",
    section: "health",
    question: "Have you been diagnosed with or treated for any of the following conditions?",
    type: "checkbox",
    required: true,
    helpText: "Select all that apply, or select 'None of the above'",
    options: [
      { value: "diabetes", label: "Diabetes (Type 1 or Type 2)", triggerQuestions: ["diabetes_type", "diabetes_controlled"] },
      { value: "heart_disease", label: "Heart disease or cardiovascular condition", triggerQuestions: ["heart_condition_type", "heart_procedures"] },
      { value: "cancer", label: "Cancer (any type)", triggerQuestions: ["cancer_type", "cancer_status"] },
      { value: "mental_health", label: "Mental health condition (depression, anxiety, etc.)", triggerQuestions: ["mental_health_type", "mental_health_treatment"] },
      { value: "autoimmune", label: "Autoimmune disease", triggerQuestions: ["autoimmune_type"] },
      { value: "respiratory", label: "Chronic respiratory condition (asthma, COPD)", triggerQuestions: ["respiratory_type", "respiratory_severity"] },
      { value: "none", label: "None of the above" },
    ],
  },

  // === DIABETES BRANCH ===
  diabetes_type: {
    id: "diabetes_type",
    section: "health",
    question: "What type of diabetes have you been diagnosed with?",
    type: "radio",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "diabetes" },
    options: [
      { value: "type1", label: "Type 1 Diabetes" },
      { value: "type2", label: "Type 2 Diabetes" },
      { value: "gestational", label: "Gestational Diabetes" },
      { value: "prediabetes", label: "Pre-diabetes" },
    ],
  },
  diabetes_controlled: {
    id: "diabetes_controlled",
    section: "health",
    question: "Is your diabetes currently well-controlled?",
    type: "radio",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "diabetes" },
    options: [
      { value: "yes", label: "Yes, well-controlled with medication/lifestyle" },
      { value: "partially", label: "Partially controlled", triggerQuestions: ["diabetes_a1c"] },
      { value: "no", label: "No, having difficulty managing", triggerQuestions: ["diabetes_a1c", "diabetes_complications"] },
    ],
  },
  diabetes_a1c: {
    id: "diabetes_a1c",
    section: "health",
    question: "What was your most recent A1C level?",
    type: "text",
    showIf: { questionId: "diabetes_controlled", operator: "not_equals", value: "yes" },
    placeholder: "e.g., 7.5%",
    helpText: "If you don't know, you can leave this blank",
  },
  diabetes_complications: {
    id: "diabetes_complications",
    section: "health",
    question: "Have you experienced any diabetes-related complications?",
    type: "checkbox",
    showIf: { questionId: "diabetes_controlled", operator: "equals", value: "no" },
    options: [
      { value: "neuropathy", label: "Neuropathy (nerve damage)" },
      { value: "retinopathy", label: "Retinopathy (eye problems)" },
      { value: "nephropathy", label: "Nephropathy (kidney problems)" },
      { value: "cardiovascular", label: "Cardiovascular issues" },
      { value: "none", label: "No complications" },
    ],
  },

  // === HEART DISEASE BRANCH ===
  heart_condition_type: {
    id: "heart_condition_type",
    section: "health",
    question: "What type of heart/cardiovascular condition do you have?",
    type: "checkbox",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "heart_disease" },
    options: [
      { value: "cad", label: "Coronary artery disease" },
      { value: "chf", label: "Congestive heart failure" },
      { value: "arrhythmia", label: "Arrhythmia/Irregular heartbeat" },
      { value: "hypertension", label: "Hypertension (high blood pressure)" },
      { value: "valve", label: "Heart valve disease" },
      { value: "other", label: "Other", triggerQuestions: ["heart_condition_other"] },
    ],
  },
  heart_condition_other: {
    id: "heart_condition_other",
    section: "health",
    question: "Please describe your heart condition:",
    type: "text",
    showIf: { questionId: "heart_condition_type", operator: "contains", value: "other" },
  },
  heart_procedures: {
    id: "heart_procedures",
    section: "health",
    question: "Have you had any cardiac procedures or surgeries?",
    type: "checkbox",
    showIf: { questionId: "has_preexisting", operator: "contains", value: "heart_disease" },
    options: [
      { value: "none", label: "No procedures" },
      { value: "stent", label: "Stent placement" },
      { value: "bypass", label: "Bypass surgery" },
      { value: "pacemaker", label: "Pacemaker/ICD implant" },
      { value: "ablation", label: "Ablation" },
      { value: "valve_repair", label: "Valve repair/replacement" },
      { value: "other", label: "Other procedure", triggerQuestions: ["heart_procedures_other"] },
    ],
  },
  heart_procedures_other: {
    id: "heart_procedures_other",
    section: "health",
    question: "Please describe the procedure:",
    type: "text",
    showIf: { questionId: "heart_procedures", operator: "contains", value: "other" },
  },

  // === CANCER BRANCH ===
  cancer_type: {
    id: "cancer_type",
    section: "health",
    question: "What type of cancer were you diagnosed with?",
    type: "text",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "cancer" },
    placeholder: "e.g., Breast cancer, Lung cancer, etc.",
  },
  cancer_status: {
    id: "cancer_status",
    section: "health",
    question: "What is the current status of your cancer?",
    type: "radio",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "cancer" },
    options: [
      { value: "remission_5plus", label: "In remission for 5+ years" },
      { value: "remission_recent", label: "In remission for less than 5 years", triggerQuestions: ["cancer_remission_date"] },
      { value: "active_treatment", label: "Currently in active treatment", triggerQuestions: ["cancer_treatment_type"] },
      { value: "monitoring", label: "Being monitored/watchful waiting" },
    ],
  },
  cancer_remission_date: {
    id: "cancer_remission_date",
    section: "health",
    question: "When were you declared in remission?",
    type: "date",
    showIf: { questionId: "cancer_status", operator: "equals", value: "remission_recent" },
  },
  cancer_treatment_type: {
    id: "cancer_treatment_type",
    section: "health",
    question: "What treatment are you currently receiving?",
    type: "checkbox",
    showIf: { questionId: "cancer_status", operator: "equals", value: "active_treatment" },
    options: [
      { value: "chemotherapy", label: "Chemotherapy" },
      { value: "radiation", label: "Radiation therapy" },
      { value: "immunotherapy", label: "Immunotherapy" },
      { value: "surgery", label: "Surgical treatment" },
      { value: "hormone", label: "Hormone therapy" },
      { value: "other", label: "Other" },
    ],
  },

  // === MENTAL HEALTH BRANCH ===
  mental_health_type: {
    id: "mental_health_type",
    section: "health",
    question: "What mental health condition(s) have you been diagnosed with?",
    type: "checkbox",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "mental_health" },
    options: [
      { value: "depression", label: "Depression" },
      { value: "anxiety", label: "Anxiety disorder" },
      { value: "bipolar", label: "Bipolar disorder" },
      { value: "ptsd", label: "PTSD" },
      { value: "ocd", label: "OCD" },
      { value: "eating", label: "Eating disorder" },
      { value: "other", label: "Other", triggerQuestions: ["mental_health_other"] },
    ],
  },
  mental_health_other: {
    id: "mental_health_other",
    section: "health",
    question: "Please specify:",
    type: "text",
    showIf: { questionId: "mental_health_type", operator: "contains", value: "other" },
  },
  mental_health_treatment: {
    id: "mental_health_treatment",
    section: "health",
    question: "Are you currently receiving treatment?",
    type: "radio",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "mental_health" },
    options: [
      { value: "medication", label: "Yes, medication only" },
      { value: "therapy", label: "Yes, therapy/counseling only" },
      { value: "both", label: "Yes, both medication and therapy" },
      { value: "none", label: "Not currently receiving treatment", triggerQuestions: ["mental_health_past_treatment"] },
    ],
  },
  mental_health_past_treatment: {
    id: "mental_health_past_treatment",
    section: "health",
    question: "Have you received treatment in the past?",
    type: "radio",
    showIf: { questionId: "mental_health_treatment", operator: "equals", value: "none" },
    options: [
      { value: "yes_recent", label: "Yes, within the last 2 years" },
      { value: "yes_past", label: "Yes, but more than 2 years ago" },
      { value: "no", label: "No" },
    ],
  },

  // === RESPIRATORY BRANCH ===
  respiratory_type: {
    id: "respiratory_type",
    section: "health",
    question: "What respiratory condition do you have?",
    type: "radio",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "respiratory" },
    options: [
      { value: "asthma", label: "Asthma" },
      { value: "copd", label: "COPD" },
      { value: "emphysema", label: "Emphysema" },
      { value: "bronchitis", label: "Chronic bronchitis" },
      { value: "other", label: "Other", triggerQuestions: ["respiratory_other"] },
    ],
  },
  respiratory_other: {
    id: "respiratory_other",
    section: "health",
    question: "Please specify your respiratory condition:",
    type: "text",
    showIf: { questionId: "respiratory_type", operator: "equals", value: "other" },
  },
  respiratory_severity: {
    id: "respiratory_severity",
    section: "health",
    question: "How would you describe the severity of your condition?",
    type: "radio",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "respiratory" },
    options: [
      { value: "mild", label: "Mild - Rarely affects daily activities" },
      { value: "moderate", label: "Moderate - Sometimes limits activities" },
      { value: "severe", label: "Severe - Frequently limits activities", triggerQuestions: ["respiratory_hospitalization"] },
    ],
  },
  respiratory_hospitalization: {
    id: "respiratory_hospitalization",
    section: "health",
    question: "Have you been hospitalized for your respiratory condition in the past 2 years?",
    type: "radio",
    showIf: { questionId: "respiratory_severity", operator: "equals", value: "severe" },
    options: [
      { value: "yes", label: "Yes", triggerQuestions: ["respiratory_hospitalization_count"] },
      { value: "no", label: "No" },
    ],
  },
  respiratory_hospitalization_count: {
    id: "respiratory_hospitalization_count",
    section: "health",
    question: "How many times?",
    type: "number",
    showIf: { questionId: "respiratory_hospitalization", operator: "equals", value: "yes" },
    validation: { min: 1, max: 50 },
  },

  // === AUTOIMMUNE BRANCH ===
  autoimmune_type: {
    id: "autoimmune_type",
    section: "health",
    question: "What autoimmune condition do you have?",
    type: "checkbox",
    required: true,
    showIf: { questionId: "has_preexisting", operator: "contains", value: "autoimmune" },
    options: [
      { value: "rheumatoid", label: "Rheumatoid arthritis" },
      { value: "lupus", label: "Lupus" },
      { value: "ms", label: "Multiple sclerosis" },
      { value: "crohns", label: "Crohn's disease" },
      { value: "colitis", label: "Ulcerative colitis" },
      { value: "psoriasis", label: "Psoriasis/Psoriatic arthritis" },
      { value: "hashimotos", label: "Hashimoto's thyroiditis" },
      { value: "other", label: "Other", triggerQuestions: ["autoimmune_other"] },
    ],
  },
  autoimmune_other: {
    id: "autoimmune_other",
    section: "health",
    question: "Please specify your autoimmune condition:",
    type: "text",
    showIf: { questionId: "autoimmune_type", operator: "contains", value: "other" },
  },

  // === MEDICATIONS ===
  current_medications: {
    id: "current_medications",
    section: "medications",
    question: "Are you currently taking any prescription medications?",
    type: "radio",
    required: true,
    options: [
      { value: "yes", label: "Yes", triggerQuestions: ["medication_list", "medication_count"] },
      { value: "no", label: "No" },
    ],
  },
  medication_count: {
    id: "medication_count",
    section: "medications",
    question: "How many prescription medications do you take regularly?",
    type: "radio",
    showIf: { questionId: "current_medications", operator: "equals", value: "yes" },
    options: [
      { value: "1-2", label: "1-2 medications" },
      { value: "3-5", label: "3-5 medications" },
      { value: "6-10", label: "6-10 medications" },
      { value: "10+", label: "More than 10 medications", triggerQuestions: ["medication_management"] },
    ],
  },
  medication_list: {
    id: "medication_list",
    section: "medications",
    question: "Please list your current medications:",
    type: "textarea",
    showIf: { questionId: "current_medications", operator: "equals", value: "yes" },
    placeholder: "List each medication name and dosage (e.g., Metformin 500mg twice daily)",
    helpText: "Include the medication name, dosage, and how often you take it",
  },
  medication_management: {
    id: "medication_management",
    section: "medications",
    question: "Do you have assistance managing your medications?",
    type: "radio",
    showIf: { questionId: "medication_count", operator: "equals", value: "10+" },
    options: [
      { value: "self", label: "I manage them myself" },
      { value: "family", label: "Family member helps me" },
      { value: "professional", label: "Healthcare professional helps me" },
      { value: "pharmacy", label: "Pharmacy provides pill organization" },
    ],
  },

  // === RECENT HEALTHCARE ===
  recent_hospitalization: {
    id: "recent_hospitalization",
    section: "recent_care",
    question: "Have you been hospitalized in the past 12 months?",
    type: "radio",
    required: true,
    options: [
      { value: "yes", label: "Yes", triggerQuestions: ["hospitalization_reason", "hospitalization_duration"] },
      { value: "no", label: "No" },
    ],
  },
  hospitalization_reason: {
    id: "hospitalization_reason",
    section: "recent_care",
    question: "What was the reason for hospitalization?",
    type: "textarea",
    required: true,
    showIf: { questionId: "recent_hospitalization", operator: "equals", value: "yes" },
    placeholder: "Please describe the reason for your hospital stay",
  },
  hospitalization_duration: {
    id: "hospitalization_duration",
    section: "recent_care",
    question: "How long was your hospital stay?",
    type: "radio",
    showIf: { questionId: "recent_hospitalization", operator: "equals", value: "yes" },
    options: [
      { value: "1-2", label: "1-2 days" },
      { value: "3-5", label: "3-5 days" },
      { value: "6-10", label: "6-10 days" },
      { value: "10+", label: "More than 10 days" },
    ],
  },
  upcoming_procedures: {
    id: "upcoming_procedures",
    section: "recent_care",
    question: "Do you have any surgeries or procedures scheduled or recommended?",
    type: "radio",
    required: true,
    options: [
      { value: "yes", label: "Yes", triggerQuestions: ["upcoming_procedures_details"] },
      { value: "no", label: "No" },
      { value: "pending", label: "Waiting for consultation/decision", triggerQuestions: ["pending_procedures_details"] },
    ],
  },
  upcoming_procedures_details: {
    id: "upcoming_procedures_details",
    section: "recent_care",
    question: "Please describe the scheduled procedure(s):",
    type: "textarea",
    required: true,
    showIf: { questionId: "upcoming_procedures", operator: "equals", value: "yes" },
    placeholder: "Include the type of procedure and expected date if known",
  },
  pending_procedures_details: {
    id: "pending_procedures_details",
    section: "recent_care",
    question: "What procedure(s) are being considered?",
    type: "textarea",
    showIf: { questionId: "upcoming_procedures", operator: "equals", value: "pending" },
    placeholder: "Describe the potential procedure and reason",
  },

  // === LIFESTYLE ===
  exercise_frequency: {
    id: "exercise_frequency",
    section: "lifestyle",
    question: "How often do you exercise?",
    type: "radio",
    options: [
      { value: "daily", label: "Daily or almost daily" },
      { value: "weekly", label: "3-4 times per week" },
      { value: "sometimes", label: "1-2 times per week" },
      { value: "rarely", label: "Rarely or never" },
    ],
  },
  height: {
    id: "height",
    section: "lifestyle",
    question: "What is your height?",
    type: "text",
    required: true,
    placeholder: "e.g., 5'10\" or 178 cm",
  },
  weight: {
    id: "weight",
    section: "lifestyle",
    question: "What is your current weight?",
    type: "text",
    required: true,
    placeholder: "e.g., 175 lbs or 80 kg",
  },

  // === FAMILY HISTORY ===
  family_history: {
    id: "family_history",
    section: "family_history",
    question: "Do any immediate family members (parents, siblings) have a history of:",
    type: "checkbox",
    helpText: "Select all that apply",
    options: [
      { value: "heart_disease", label: "Heart disease (before age 55)" },
      { value: "cancer", label: "Cancer" },
      { value: "diabetes", label: "Diabetes" },
      { value: "stroke", label: "Stroke" },
      { value: "mental_health", label: "Mental health conditions" },
      { value: "none", label: "None of the above" },
      { value: "unknown", label: "Unknown/Not sure" },
    ],
  },
};

// ============================================
// SECTION DEFINITIONS
// ============================================

export const sections: Section[] = [
  {
    id: "plan",
    title: "Choose Your Plan",
    description: "Select the membership option that fits your needs",
    questions: ["plan_type"],
  },
  {
    id: "personal",
    title: "Personal Information",
    description: "Tell us about yourself",
    questions: [
      "primary_first_name",
      "primary_last_name", 
      "primary_email",
      "primary_phone",
      "primary_dob",
      "primary_gender",
      "pregnancy_status",
      "pregnancy_due_date",
      "pregnancy_complications",
      "pregnancy_complications_details",
      "maternity_coverage_interest",
    ],
  },
  {
    id: "health",
    title: "Health History",
    description: "Help us understand your health background",
    questions: [
      "tobacco_use",
      "tobacco_type",
      "tobacco_type_other",
      "tobacco_frequency",
      "tobacco_daily_amount",
      "tobacco_quit_interest",
      "tobacco_quit_date",
      "has_preexisting",
      "diabetes_type",
      "diabetes_controlled",
      "diabetes_a1c",
      "diabetes_complications",
      "heart_condition_type",
      "heart_condition_other",
      "heart_procedures",
      "heart_procedures_other",
      "cancer_type",
      "cancer_status",
      "cancer_remission_date",
      "cancer_treatment_type",
      "mental_health_type",
      "mental_health_other",
      "mental_health_treatment",
      "mental_health_past_treatment",
      "respiratory_type",
      "respiratory_other",
      "respiratory_severity",
      "respiratory_hospitalization",
      "respiratory_hospitalization_count",
      "autoimmune_type",
      "autoimmune_other",
    ],
  },
  {
    id: "medications",
    title: "Current Medications",
    description: "Tell us about your prescriptions",
    questions: [
      "current_medications",
      "medication_count",
      "medication_list",
      "medication_management",
    ],
  },
  {
    id: "recent_care",
    title: "Recent Healthcare",
    description: "Recent and upcoming medical care",
    questions: [
      "recent_hospitalization",
      "hospitalization_reason",
      "hospitalization_duration",
      "upcoming_procedures",
      "upcoming_procedures_details",
      "pending_procedures_details",
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    description: "A few questions about your lifestyle",
    questions: ["exercise_frequency", "height", "weight"],
  },
  {
    id: "family_history",
    title: "Family History",
    description: "Medical history in your family",
    questions: ["family_history"],
  },
];

// ============================================
// FLOW ENGINE
// ============================================

export function shouldShowQuestion(
  question: Question,
  answers: Record<string, string | string[]>
): boolean {
  if (!question.showIf) return true;

  const { questionId, operator, value } = question.showIf;
  const answer = answers[questionId];

  if (answer === undefined || answer === null) return false;

  switch (operator) {
    case "equals":
      return answer === value;
    case "not_equals":
      return answer !== value;
    case "contains":
      if (Array.isArray(answer)) {
        return answer.includes(value as string);
      }
      return answer.includes(value as string);
    case "greater_than":
      return Number(answer) > Number(value);
    case "less_than":
      return Number(answer) < Number(value);
    default:
      return true;
  }
}

export function getVisibleQuestionsForSection(
  sectionId: string,
  answers: Record<string, string | string[]>
): Question[] {
  const section = sections.find((s) => s.id === sectionId);
  if (!section) return [];

  return section.questions
    .map((qId) => questions[qId])
    .filter((q) => q && shouldShowQuestion(q, answers));
}

export function getAllVisibleQuestions(
  answers: Record<string, string | string[]>
): Question[] {
  return Object.values(questions).filter((q) => shouldShowQuestion(q, answers));
}

export function getSectionProgress(
  sectionId: string,
  answers: Record<string, string | string[]>
): { total: number; answered: number; percent: number } {
  const visibleQuestions = getVisibleQuestionsForSection(sectionId, answers);
  const requiredQuestions = visibleQuestions.filter((q) => q.required);
  const answered = requiredQuestions.filter((q) => {
    const answer = answers[q.id];
    return answer !== undefined && answer !== "" && 
           (Array.isArray(answer) ? answer.length > 0 : true);
  });

  return {
    total: requiredQuestions.length,
    answered: answered.length,
    percent: requiredQuestions.length > 0 
      ? Math.round((answered.length / requiredQuestions.length) * 100) 
      : 100,
  };
}
