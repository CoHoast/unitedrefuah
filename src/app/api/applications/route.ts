import { NextRequest, NextResponse } from 'next/server';
import { createApplication, getAllApplications, getApplicationStats } from '@/lib/db';
import { analyzeApplication } from '@/lib/aiAnalysis';

export async function GET() {
  try {
    const applications = getAllApplications();
    const stats = getApplicationStats();
    return NextResponse.json({ applications, stats });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Run AI analysis
    const analysisResult = analyzeApplication({
      planType: body.planType,
      firstName: body.firstName,
      lastName: body.lastName,
      dateOfBirth: body.dateOfBirth,
      tobaccoUse: body.tobaccoUse,
      medicalConditions: body.medicalConditions || [],
      currentMedications: body.currentMedications,
      recentTreatments: body.recentTreatments,
      height: body.height,
      weight: body.weight,
    });
    
    // Create application with AI analysis
    const application = createApplication({
      status: analysisResult.status,
      ai_analysis: JSON.stringify(analysisResult),
      ai_score: analysisResult.score,
      ai_flags: JSON.stringify(analysisResult.flags),
      plan_type: body.planType,
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      phone: body.phone,
      date_of_birth: body.dateOfBirth,
      gender: body.gender,
      ssn_last_four: body.ssnLastFour,
      address: body.address,
      city: body.city,
      state: body.state,
      zip_code: body.zipCode,
      height: body.height,
      weight: body.weight,
      tobacco_use: body.tobaccoUse ? 1 : 0,
      medical_conditions: JSON.stringify(body.medicalConditions || []),
      current_medications: body.currentMedications,
      recent_treatments: body.recentTreatments,
      spouse_first_name: body.spouseFirstName,
      spouse_last_name: body.spouseLastName,
      spouse_dob: body.spouseDob,
      spouse_gender: body.spouseGender,
      dependents: JSON.stringify(body.dependents || []),
      how_did_you_hear: body.howDidYouHear,
      additional_notes: body.additionalNotes,
      agreed_to_terms: body.agreedToTerms ? 1 : 0,
      agreed_to_guidelines: body.agreedToGuidelines ? 1 : 0,
      signature: body.signature,
      signature_date: new Date().toISOString(),
    });
    
    return NextResponse.json({ 
      success: true, 
      application,
      analysis: analysisResult,
    });
  } catch (error) {
    console.error('Error creating application:', error);
    return NextResponse.json({ error: 'Failed to create application' }, { status: 500 });
  }
}
