"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Dependent {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  relationship: string;
}

export interface ApplicationFormData {
  // Step 1: Plan Selection
  planType: 'individual' | 'couple' | 'family' | '';
  
  // Step 2: Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  ssnLastFour: string;
  
  // Step 3: Address
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Step 4: Health Information
  height: string;
  weight: string;
  tobaccoUse: boolean;
  medicalConditions: string[];
  currentMedications: string;
  recentTreatments: string;
  
  // Step 5: Spouse (for couple/family)
  spouseFirstName: string;
  spouseLastName: string;
  spouseDob: string;
  spouseGender: string;
  
  // Step 6: Dependents (for family)
  dependents: Dependent[];
  
  // Step 7: Additional Info
  howDidYouHear: string;
  additionalNotes: string;
  
  // Step 8: Agreement
  agreedToTerms: boolean;
  agreedToGuidelines: boolean;
  signature: string;
}

interface ApplicationStore {
  currentStep: number;
  formData: ApplicationFormData;
  setCurrentStep: (step: number) => void;
  updateFormData: (data: Partial<ApplicationFormData>) => void;
  resetForm: () => void;
  nextStep: () => void;
  prevStep: () => void;
}

const initialFormData: ApplicationFormData = {
  planType: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  gender: '',
  ssnLastFour: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  height: '',
  weight: '',
  tobaccoUse: false,
  medicalConditions: [],
  currentMedications: '',
  recentTreatments: '',
  spouseFirstName: '',
  spouseLastName: '',
  spouseDob: '',
  spouseGender: '',
  dependents: [],
  howDidYouHear: '',
  additionalNotes: '',
  agreedToTerms: false,
  agreedToGuidelines: false,
  signature: '',
};

export const useApplicationStore = create<ApplicationStore>()(
  persist(
    (set) => ({
      currentStep: 1,
      formData: initialFormData,
      setCurrentStep: (step) => set({ currentStep: step }),
      updateFormData: (data) => set((state) => ({ 
        formData: { ...state.formData, ...data } 
      })),
      resetForm: () => set({ currentStep: 1, formData: initialFormData }),
      nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
      prevStep: () => set((state) => ({ currentStep: Math.max(1, state.currentStep - 1) })),
    }),
    {
      name: 'application-form',
    }
  )
);
