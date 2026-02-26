// AI Analysis Rules for United Refuah HealthShare Applications
// These rules are based on typical health sharing ministry guidelines

export interface AnalysisResult {
  score: number; // 0-100
  status: 'APPROVED' | 'NEEDS_REVIEW' | 'DENIED';
  flags: AnalysisFlag[];
  summary: string;
  recommendations: string[];
}

export interface AnalysisFlag {
  type: 'info' | 'warning' | 'critical';
  category: string;
  message: string;
  details?: string;
}

export interface ApplicationData {
  planType: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  tobaccoUse: boolean;
  medicalConditions: string[];
  currentMedications: string;
  recentTreatments: string;
  height?: string;
  weight?: string;
}

// Pre-existing conditions that typically require review
const CONDITIONS_REQUIRING_REVIEW = [
  'cancer',
  'heart disease',
  'diabetes',
  'copd',
  'kidney disease',
  'liver disease',
  'hiv',
  'aids',
  'hepatitis',
  'stroke',
  'organ transplant',
  'multiple sclerosis',
  'lupus',
  'crohn',
  'ulcerative colitis',
];

// Conditions that may affect eligibility
const HIGH_RISK_CONDITIONS = [
  'terminal illness',
  'hospice',
  'awaiting surgery',
  'currently hospitalized',
];

// Medications that may indicate serious conditions
const HIGH_RISK_MEDICATIONS = [
  'chemotherapy',
  'immunosuppressant',
  'dialysis',
  'insulin',
  'methadone',
  'suboxone',
];

function calculateAge(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function calculateBMI(height: string, weight: string): number | null {
  // Expecting height in format "5'10" or "70" (inches) and weight in lbs
  let heightInches: number;
  
  if (height.includes("'")) {
    const parts = height.replace(/"/g, '').split("'");
    heightInches = parseInt(parts[0]) * 12 + parseInt(parts[1] || '0');
  } else {
    heightInches = parseInt(height);
  }
  
  const weightLbs = parseInt(weight);
  
  if (isNaN(heightInches) || isNaN(weightLbs) || heightInches === 0) {
    return null;
  }
  
  // BMI = (weight in pounds / height in inches²) × 703
  return (weightLbs / (heightInches * heightInches)) * 703;
}

export function analyzeApplication(data: ApplicationData): AnalysisResult {
  const flags: AnalysisFlag[] = [];
  let score = 100;
  const recommendations: string[] = [];
  
  // Age analysis
  const age = calculateAge(data.dateOfBirth);
  if (age < 18) {
    flags.push({
      type: 'critical',
      category: 'Age',
      message: 'Applicant is under 18',
      details: 'Primary applicant must be 18 or older. Minors can be added as dependents.',
    });
    score -= 50;
  } else if (age >= 65) {
    flags.push({
      type: 'warning',
      category: 'Age',
      message: 'Applicant is 65 or older',
      details: 'Senior applicants may have additional guidelines. Review Medicare coordination.',
    });
    score -= 10;
    recommendations.push('Verify Medicare status and coordination of benefits');
  }
  
  // Tobacco use
  if (data.tobaccoUse) {
    flags.push({
      type: 'warning',
      category: 'Lifestyle',
      message: 'Tobacco user',
      details: 'Tobacco use may result in higher monthly share amounts or waiting periods for tobacco-related conditions.',
    });
    score -= 15;
    recommendations.push('Inform applicant about tobacco-related sharing limitations');
  }
  
  // BMI analysis
  if (data.height && data.weight) {
    const bmi = calculateBMI(data.height, data.weight);
    if (bmi !== null) {
      if (bmi >= 40) {
        flags.push({
          type: 'warning',
          category: 'Health',
          message: `High BMI: ${bmi.toFixed(1)}`,
          details: 'BMI of 40+ may require additional health documentation.',
        });
        score -= 15;
        recommendations.push('Request additional health documentation');
      } else if (bmi >= 35) {
        flags.push({
          type: 'info',
          category: 'Health',
          message: `Elevated BMI: ${bmi.toFixed(1)}`,
          details: 'BMI of 35-40 is noted for reference.',
        });
        score -= 5;
      }
    }
  }
  
  // Medical conditions analysis
  const conditionsLower = data.medicalConditions.map(c => c.toLowerCase());
  const conditionsText = conditionsLower.join(' ');
  
  for (const condition of HIGH_RISK_CONDITIONS) {
    if (conditionsText.includes(condition)) {
      flags.push({
        type: 'critical',
        category: 'Medical History',
        message: `High-risk condition: ${condition}`,
        details: 'This condition may affect eligibility. Manual review required.',
      });
      score -= 30;
    }
  }
  
  for (const condition of CONDITIONS_REQUIRING_REVIEW) {
    if (conditionsText.includes(condition)) {
      flags.push({
        type: 'warning',
        category: 'Medical History',
        message: `Pre-existing condition: ${condition}`,
        details: 'Pre-existing conditions have waiting periods before sharing begins.',
      });
      score -= 10;
      recommendations.push(`Verify waiting period for ${condition}`);
    }
  }
  
  // Medications analysis
  const medicationsLower = (data.currentMedications || '').toLowerCase();
  
  for (const med of HIGH_RISK_MEDICATIONS) {
    if (medicationsLower.includes(med)) {
      flags.push({
        type: 'warning',
        category: 'Medications',
        message: `High-risk medication: ${med}`,
        details: 'This medication may indicate a condition requiring review.',
      });
      score -= 10;
      recommendations.push(`Review condition associated with ${med}`);
    }
  }
  
  // Recent treatments analysis
  const treatmentsLower = (data.recentTreatments || '').toLowerCase();
  if (treatmentsLower.includes('surgery') || treatmentsLower.includes('hospitalization')) {
    flags.push({
      type: 'warning',
      category: 'Recent Care',
      message: 'Recent surgery or hospitalization',
      details: 'Recent medical events may require additional documentation.',
    });
    score -= 10;
    recommendations.push('Request records from recent medical events');
  }
  
  // Ensure score stays in bounds
  score = Math.max(0, Math.min(100, score));
  
  // Determine status
  let status: 'APPROVED' | 'NEEDS_REVIEW' | 'DENIED';
  let summary: string;
  
  const criticalFlags = flags.filter(f => f.type === 'critical');
  const warningFlags = flags.filter(f => f.type === 'warning');
  
  if (criticalFlags.length > 0) {
    status = 'NEEDS_REVIEW';
    summary = `Application requires manual review. ${criticalFlags.length} critical issue(s) identified.`;
  } else if (score >= 80 && warningFlags.length <= 1) {
    status = 'APPROVED';
    summary = 'Application meets standard criteria for approval.';
    if (warningFlags.length > 0) {
      summary += ' Minor items noted for reference.';
    }
  } else if (score >= 50) {
    status = 'NEEDS_REVIEW';
    summary = `Application has ${warningFlags.length} item(s) requiring team review.`;
  } else {
    status = 'NEEDS_REVIEW';
    summary = 'Multiple concerns identified. Thorough review recommended.';
  }
  
  // Add standard recommendations
  if (recommendations.length === 0 && status === 'APPROVED') {
    recommendations.push('Standard processing - no additional steps required');
  }
  
  return {
    score,
    status,
    flags,
    summary,
    recommendations,
  };
}
