import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-16 sm:pt-[104px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Privacy Policy
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80">
                Notice of Privacy Practices for United Refuah HealthShare
              </p>
              <p className="mt-2 text-white/60">
                Effective Date: November 1, 2017
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Uses and Disclosures of Your Personal Health Information</h2>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Authorization</h3>
                  <p className="text-gray-700">
                    Except as outlined below, we will not use or disclose your personal health information for any purpose 
                    unless you have signed a form authorizing the use or disclosure. You have the right to revoke that 
                    authorization in writing unless we have taken any action in reliance on the authorization.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Disclosures for Treatment</h3>
                  <p className="text-gray-700">
                    We will make disclosures of your personal health information as necessary for your treatment. 
                    For instance, a doctor or health facility involved in your care may request some of your personal 
                    health information that we hold in order to make decisions about your care.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Uses and Disclosures for Payment</h3>
                  <p className="text-gray-700">
                    We will make uses and disclosures of your personal health information as necessary for payment purposes. 
                    For instance, we may use information regarding your medical procedures and treatment to process and 
                    arrange for the payment of medical bills, to determine whether services are medically appropriate or 
                    to otherwise certify services as eligible to be shared under the Guidelines. We may also forward such 
                    information to another health plan that may also have an obligation to process and pay expenses on your behalf.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Uses and Disclosures for Health Care Operations</h3>
                  <p className="text-gray-700">
                    We will use and disclose your personal health information as necessary for our health care operations 
                    which include peer review, business management, accreditation and licensing, utilization review and 
                    management, quality improvement and assurance, enrollment, voluntary disclosure of health conditions, 
                    compliance, auditing, and other functions related to your healthcare management. We may also disclose 
                    your personal health information to another health care facility, health care professional, or health 
                    plan for such things as quality assurance and case management, but only if that facility, professional, 
                    or plan also has or had a patient relationship with you.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Family and Friends Involved In Your Care</h3>
                  <p className="text-gray-700">
                    With your approval, we may from time to time disclose your personal health information to designated 
                    family, friends, and others who are involved in your care or in payment for your care in order to 
                    facilitate that person&apos;s involvement in caring for you or paying for your care. If you are unavailable, 
                    incapacitated, or facing an emergency medical situation and we determine that a limited disclosure may 
                    be in your best interest, we may share limited personal health information with such individuals without 
                    your approval. We may also disclose limited personal health information to a public or private entity 
                    that is authorized to assist in disaster relief efforts in order for that entity to locate a family 
                    member or other persons that may be involved in some aspect of caring for you.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Associates</h3>
                  <p className="text-gray-700">
                    Certain aspects and components of our services are performed through contracts with outside persons 
                    or organizations, such as legal services, Utilization Management Services, Preferred Provider Organizations, 
                    Pharmacy Benefit Managers, etc. At times it may be necessary for us to provide some of your personal 
                    health information to one or more of these outside persons or organizations who assist us with our 
                    health care operations. In all cases, we require these business associates to appropriately safeguard 
                    the privacy of your information.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Communications With You</h3>
                  <p className="text-gray-700">
                    We may communicate with you regarding your medical expenses, share amount, or other things connected 
                    with your health. In the event you could be endangered if all or part of the information being sent 
                    to you is viewed by another person, you have the right to request and we will accommodate reasonable 
                    requests by you to receive communications regarding your personal health information from us by alternative 
                    means or at alternative locations. For instance, if you wish messages to not be left on voice mail or 
                    sent to a particular address, we will accommodate reasonable requests.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Health-Related Products or Services</h3>
                  <p className="text-gray-700">
                    We may, from time to time, use your personal health information to determine whether you might be 
                    interested in or benefit from treatment alternatives or other health-related programs, products or 
                    services which may be available to you as a member. For example, we may use your personal health 
                    information to identify whether you have a particular illness, and contact you to advise you that 
                    a disease management program to help you manage your illness better is available to you as a member. 
                    We will not use your information to communicate with you about products or services that are not 
                    health-related without your written permission.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Received Pre-enrollment</h3>
                  <p className="text-gray-700">
                    We may request and receive from you and your health care providers personal health information prior 
                    to your enrollment in United Refuah HealthShare. We will use this information to determine whether 
                    you are eligible to enroll. We will protect the confidentiality of that information in the same manner 
                    as all other personal health information we maintain and, if you do not enroll, we will not use or 
                    disclose the information about you we obtained for any other purpose.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Other Uses and Disclosures</h3>
              <p className="text-gray-700 mb-4">
                We are permitted to make certain other uses and disclosures of your personal health information without your authorization:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                <li>We may release your personal health information for any purpose required by law</li>
                <li>We may release your personal health information for public health activities, such as required reporting of disease, injury, and birth and death, and for required public health investigations</li>
                <li>We may release your personal health information as required by law if we suspect child abuse or neglect; we may also release your personal health information as required by law if we believe you to be a victim of abuse, neglect, or domestic violence</li>
                <li>We may release your personal health information if required by law to a government oversight agency conducting audits, investigations, or civil or criminal proceedings</li>
                <li>We may release your personal health information if required to do so by a court or administrative ordered subpoena or discovery request; in most cases you will have notice of such release</li>
                <li>We may release your personal health information to law enforcement officials as required by law to report wounds and injuries and crimes</li>
                <li>We may release your personal health information to coroners and/or funeral directors consistent with law</li>
                <li>We may release your personal health information if necessary to arrange an organ or tissue donation from you or a transplant for you</li>
                <li>We may release your personal health information if you are a member of the military as required by armed forces services; we may also release your personal health information if necessary for national security or intelligence activities</li>
                <li>We may release your personal health information to workers&apos; compensation agencies if necessary for your workers&apos; compensation benefit determination</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Access You Have</h2>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Access to Your Personal Health Information</h3>
                  <p className="text-gray-700">
                    You may request a copy and/or inspect much of the personal health information that we retain on your behalf. 
                    All requests for access must be made in writing and signed by you or your representative. We may charge 
                    you a fee if you request a copy of the information. We will also charge for postage if you request a 
                    mailed copy and will charge for preparing a summary of the requested information if you request such summary.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Amendments to Your Personal Health Information</h3>
                  <p className="text-gray-700">
                    You may request in writing that personal health information that we maintain about you be amended or corrected. 
                    All amendment requests, in order to be considered by us, must be in writing, signed by you or your representative, 
                    and must state the reasons for the amendment/correction request. If an amendment or correction you request 
                    is made by us, we may also notify others who work with us and have copies of the uncorrected record if we 
                    believe that such notification is necessary.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Accounting for Disclosures</h3>
                  <p className="text-gray-700">
                    You may receive an accounting of certain disclosures made by us of your personal health information. 
                    Requests must be made in writing and signed by you or your representative. The first accounting in any 
                    12-month period is free. You will be charged a fee for each subsequent accounting you request within 
                    the same 12-month period.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Restrictions on Use and Disclosure</h3>
                  <p className="text-gray-700">
                    You may request restrictions on some of our uses and disclosures of your personal health information 
                    for treatment, payment or health care operations. We will attempt to accommodate reasonable requests 
                    when appropriate and we retain the right to terminate an agreed-to restriction if we believe such 
                    termination is appropriate. In the event of a termination by us, we will notify you of such termination.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Complaints</h3>
                  <p className="text-gray-700">
                    If you believe your privacy has been violated, you can file a complaint with United Refuah HealthShare 
                    at the address listed below. There will be no retaliation for filing a complaint.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">For Further Information</h2>
              
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    If you have questions or need further assistance regarding this policy, you may contact:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold">United Refuah HealthShare℠</p>
                    <p>Attn: Customer Service</p>
                    <p>PO Box 18523</p>
                    <p>Cleveland Heights, OH 44118</p>
                    <p className="pt-2">Phone: <a href="tel:4407720700" className="text-primary hover:underline">(440) 772-0700</a></p>
                    <p>Monday through Friday, 8:30 a.m. to 7:00 p.m. EST</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
