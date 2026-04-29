"use client"
import { title } from "process";
import React from "react";

type Section = {
  id: number;
  title: string;
  detail?: string;

  heading_1?: string;
  paragraph?: string;
  lists_head_1?: string[];

  heading_2?: string;
  paragraph_2?: string;
  lists_head_2?: string[];

  heading_3?: string;
  paragraph_3?: string;
  lists_head_3?: string[];

  heading_4?: string;
  paragraph_4?: string;
  lists_head_4?: string[];

  heading_5?: string;
  paragraph_5?: string;

  heading_6?: string;
  paragraph_6?: string;

  heading_7?: string;
  paragraph_7?: string;

  list_7?: { title: string; desc: string }[];
};
function InformationCollect() {
  const Sections:Section[] = [
    {
      id: 1,
      title: "1. Information We Collect",
      detail:
        "Pulsurv collects different types of information depending on how you interact with our platform. The information we collect falls into the following categories:",
      heading_1: "Account and Business Information",
      paragraph:
        "When you register for a Pulsurv account or subscribe to our services, we collect information such as:",
      lists_head_1: [
        "Company name and business details",
        "Contact information (name, email address, phone number)",
        "Account credentials and authentication information",
        "Billing and payment information (processed securely by our payment providers)",
        "Subscription and plan details",
      ],
      heading_2: "Survey Response Data",
      paragraph_2:
        "When surveys are created and distributed using Pulsurv, we collect and process:",
      lists_head_2: [
        "Survey questions and configuration settings",
        "Survey responses submitted by recipients",
        "Metadata associated with survey responses (timestamp, response status, distribution channel)",
        "Recipient group information and contact details (as configured by account administrators)",
      ],
      heading_3: "Technical and Usage Data",
      paragraph_3:
        "To operate and improve our platform, we automatically collect technical information, including:",
      lists_head_3: [
        "Device type, operating system, and browser information",
        "IP address and general geographic location",
        "Platform usage patterns and feature interactions",
        "Application performance data and error logs",
        "Session data and authentication activity",
      ],
      heading_4: "Communications",
      paragraph_4:
        "When you contact our support team, sales team, or communicate with us through our website, we collect the content of your messages, correspondence, and any information you choose to provide.",
      lists_head_4: [],
    },
    {
      id: 2,
      title: "2. How We Use Information",
      detail:
        "Pulsurv uses the information we collect for the following purposes:",
      heading_1: "Providing and Operating the Platform",
      paragraph: "",
      lists_head_1: [
        "Enable account creation, authentication, and access management",
        "Deliver survey creation, distribution, and collection capabilities",
        "Deliver survey creation, distribution, and collection capabilities",
        "Provide AI-driven insights, sentiment analysis, and analytics assistance",
        "Support multi-channel survey distribution (email, SMS, in-app, QR codes, web embeds)",
      ],
      heading_2: "Managing Your Subscription",
      paragraph_2: "",
      lists_head_2: [
        "Process payments and manage billing",
        "Send service notifications and account updates",
        "Manage subscription tiers, usage limits, and feature access",
        "Provide customer support and respond to inquiries",
      ],
      heading_3: "Improving Our Services",
      paragraph_3: "",
      lists_head_3: [
        "Monitor platform performance and diagnose technical issues",
        "Analyze usage patterns to improve user experience and feature development",
        "Train and improve AI models for survey generation and analytics",
        "Application performance data and error logs",
        "Conduct research and development for new capabilities",
      ],
      heading_4: "Legal and Regulatory Compliance",
      paragraph_4: "",
      lists_head_4: [
        "Comply with applicable laws, regulations, and legal processes",
        "Enforce our Terms of Service and protect our rights",
        "Prevent fraud, abuse, and security incidents",
        "Respond to lawful requests from public authorities",
      ],
    },
    {
      id: 3,
      title: "3. Survey Data & Privacy",
      detail: "",
      heading_1: "Your Responsibilities as a Client",
      paragraph: "",
      lists_head_1: [
        "You control the content of surveys, including what questions are asked",
        "You determine who receives surveys and manage recipient groups",
        "You are responsible for obtaining appropriate consent from survey respondents",
        "You must ensure your use of Pulsurv complies with applicable privacy laws",
        "You control access to survey results and analytics within your organization",
      ],
      heading_2: "How Pulsurv Processes Survey Data",
      paragraph_2: "",
      lists_head_2: [
        "You control the content of surveys, including what questions are asked",
        "You determine who receives surveys and manage recipient groups",
        "You are responsible for obtaining appropriate consent from survey respondents",
        "You must ensure your use of Pulsurv complies with applicable privacy laws",
        "You control access to survey results and analytics within your organization",
      ],
      heading_3: "Anonymous and Aggregated Data",
      paragraph_3:
        "Pulsurv may use anonymized and aggregated survey data (which cannot identify individuals or specific clients) to improve platform features, train AI models, and conduct research. This data is stripped of all identifying information and used only in aggregate form.",
    },
    {
      id: 4,
      title: "4. Data Protection & Security",
      detail:
        "We take the security of your data seriously and implement industry-standard measures to protect personal information and survey data from unauthorized access, loss, misuse, or disclosure.",
      heading_1: "Security Measures",
      paragraph: "",
      lists_head_1: [
        "Data encryption in transit and at rest using industry-standard protocols",
        "Secure authentication and session management",
        "Role-based access controls and permission management",
        "Regular security audits and vulnerability assessments",
        "Secure infrastructure and hosting with trusted cloud providers",
        "Automated backups and disaster recovery procedures",
        "Employee training on data protection and security best practices",
      ],
      heading_2: "Access Controls",
      paragraph_2:
        "Access to personal data and survey responses is strictly limited to:",
      lists_head_2: [
        "Authorized personnel within your organization, based on roles and permissions you configure",
        "Pulsurv employees who require access to provide support, maintain the platform, or fulfill legal obligations",
        "All access is logged and monitored for security purposes",
      ],
    },
    {
      id: 5,
      title: "5. GDPR & Legal Compliance",
      detail:
        "Pulsurv is designed to help you comply with the General Data Protection Regulation (GDPR) and other applicable privacy laws. We process personal data in accordance with the following principles:",
      heading_1: "Lawfulness, Fairness, and Transparency",
      paragraph:
        "We process personal data lawfully and transparently. We clearly communicate how data is collected, used, and protected through this Privacy Policy and our Terms of Service.",
      heading_2: "Purpose Limitation",
      paragraph_2:
        "Personal data is collected for specific, explicit, and legitimate purposes. We do not process data in ways that are incompatible with these purposes.",
      heading_3: "Data Minimization",
      paragraph_3:
        "We collect only the personal data that is necessary to provide and operate the Pulsurv platform. We do not collect excessive or irrelevant information.",
      heading_4: "Accuracy",
      paragraph_4:
        "We take reasonable steps to ensure personal data is accurate and up to date. You can update your account information at any time through your account settings.",
      heading_5: "Storage Limitation",
      paragraph_5:
        "Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law. When data is no longer needed, it is securely deleted or anonymized.",
      heading_6: "Integrity and Confidentiality",
      paragraph_6:
        "We implement appropriate technical and organizational measures to ensure the security and confidentiality of personal data, as outlined in Section 4.",
      heading_7: "Legal Basis for Processing",
      paragraph_7:
        "We process personal data based on one or more of the following legal grounds:",
      list_7: [
        {
          title: "Contractual necessity:",
          desc: "Processing is necessary to fulfill our contract with you (providing the Pulsurv service)",
        },
        {
          title: "Legitimate interests:",
          desc: "Processing is necessary for our legitimate business interests (e.g., improving our platform, security)",
        },
        {
          title: "Consent:",
          desc: "You have provided explicit consent for specific processing activities",
        },
        {
          title: "Legal obligation:",
          desc: "Processing is required to comply with legal or regulatory requirements",
        },
      ],
    },

    {
      id: 6,
      title: "6. Accessibility & Responsible Design",
      detail:
        "Pulsurv is committed to creating an inclusive platform that is accessible and usable by all users, regardless of ability or circumstance.",
      heading_1: "Accessibility Standards",
      paragraph:
        "Our platform is designed with accessibility in mind, following Web Content Accessibility Guidelines (WCAG) 2.1 principles to ensure:",
      lists_head_1: [
        "Surveys and platform interfaces are navigable by keyboard",
        "Content is perceivable by users with visual, auditory, or cognitive disabilities",
        "Forms and inputs are clearly labeled and operable",
        "Color contrast meets accessibility standards for readability",
        "Screen reader compatibility for assistive technology users",
      ],
      heading_2: "Inclusive Survey Design",
      paragraph_2:
        "We provide tools and guidance to help you create surveys that are accessible to all respondents. This includes support for multiple question formats, clear question design, and mobile-friendly layouts that adapt to different devices and assistive technologies.",
    },
    {
      id: 7,
      title: "7. Third-Party Services",
      detail:
        "To operate and deliver the Pulsurv platform, we work with carefully selected third-party service providers. These providers assist with:",
      lists_head_1: [
        "Cloud infrastructure and hosting services",
        "Payment processing and billing",
        "Email and messaging distribution",
        "Customer support tools",
        "Security and fraud prevention",
      ],
      heading_2: "Data Processing Agreements",
      paragraph_2:
        "All third-party service providers process data only as necessary to deliver their services and under appropriate contractual safeguards, including:",
      lists_head_2: [
        "Data processing agreements that comply with GDPR requirements",
        "Obligations to implement appropriate technical and organizational security measures",
        "Restrictions on using data for purposes other than providing the service",
        "Requirements to delete or return data upon termination of services",
      ],
    },
    {
      id: 8,
      title: "8. Your Rights",
      detail:
        "Under GDPR and other applicable privacy laws, you have the following rights regarding your personal data:",
    },
    {
      id: 9,
      title: "9. Policy Updates",
      detail:
        "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or platform features. When we make changes, we will:",
      lists_head_1: [
        'Update the "Last Updated" date at the top of this page',
        "Notify you of material changes via email or through a notice in the platform",
        "Provide a reasonable period for you to review the updated policy before it takes effect",
      ],
      paragraph_2:
        "Your continued use of the Pulsurv platform after the updated policy takes effect constitutes your acceptance of the changes. If you do not agree with the updated policy, you should discontinue use of the platform and contact us to close your account.",
    },
    {
      id: 10,
      title: "10. Contact Information",
      detail:
        "If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:",
      paragraph_2:
        "For general support or product questions, please use the standard support channels available through your account portal.",
    },
  ];

  const rights = [
    {
      title: "Right to Access",
      desc: "You have the right to request a copy of the personal data we hold about you. You can access much of this information directly through your account settings.",
    },
    {
      title: "Right to Rectification",
      desc: "You have the right to correct inaccurate or incomplete personal data. You can update your account information at any time through your account settings.",
    },
    {
      title: "Right to Erasure (Right to be Forgotten)",
      desc: "You have the right to request deletion of your personal data under certain circumstances. This right is subject to legal obligations that may require us to retain certain information.",
    },
    {
      title: "Right to Restrict Processing",
      desc: "You have the right to request that we limit the processing of your personal data in certain situations, such as when you contest the accuracy of the data or object to processing.",
    },
    {
      title: "Right to Data Portability",
      desc: "You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and to transmit that data to another controller.",
    },
    {
      title: "Right to Object",
      desc: "You have the right to object to processing of your personal data where we are relying on legitimate interests as the legal basis for processing.",
    },
    {
      title: "Right to Withdraw Consent",
      desc: "Where processing is based on consent, you have the right to withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing prior to withdrawal.",
    },
    {
      title: "Right to Lodge a Complaint",
      desc: "You have the right to lodge a complaint with a supervisory authority, particularly in the European Economic Area (EEA) member state where you reside, work, or where an alleged infringement occurred.",
    },
  ];

  return (
    <div className="min-h-40">
      <div className="w-60 h-16 rounded-xl border border-custom-dark-grey/10 bg-custom-dark-grey/5 flex flex-1 ml-auto mr-5 items-center justify-center mt-10  ">  
        <select
          id="table-of-contents"
          defaultValue=""
          onChange={(e) => {
            const sectionNum = e.target.value.split(".")[0];
            document
              .getElementById(`section-${sectionNum}`)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-55 h-10 bg-transparent text-sm text-custom-dark-grey/90 px-2 border-[1.5px] border-custom-secondary font-medium rounded-lg  py-3 cursor-pointer"
        >
          <option value="" disabled hidden>
            Table of Contents
          </option>
          {[
            "1. Information We Collect",
            "2. How We Use Information",
            "3. Survey Data & Privacy",
            "4. Data Protection & Security",
            "5. GDPR & Legal Compliance",
            "6. Accessibility & Responsible Design",
            "7. Third-Party Services",
            "8. Your Rights",
            "9. Policy Updates",
            "10. Contact Information",
          ].map((val, index) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>

      {Sections.map((section, i) => {
        return (
          <section 
           id={`section-${section.id}`}
          className="mt-6 sm:mt-16 px-4 md:px-20 lg:px-50 " key={i}>
            <h1 className="text-xl sm:text-4xl text-custom-dark-grey/90 font-bold mb-2">
              {section.title}
            </h1>

            <div className="bg-custom-dark-grey/20 h-px w-full mb-4 " />

            {section.id === 8 ? (
              <>
                <p className="text-custom-dark-grey/50 text-sm sm:text-base">
                  {section.detail}
                </p>

                {rights.map((item, index) => {
                  return (
                    <div key={index} className="h-auto w-full mt-3 flex mb-4 ">
                      <div className="bg-custom-secondary mt-3 h-18 w-[5px] " />
                      <div>
                        <p className="px-6 py-1 sm:py-2 text-base sm:text-md text-custom-dark-grey/90  font-semibold">
                          {item?.title}
                        </p>
                        <p className="px-6  text-sm sm:text-base text-custom-dark-grey/40  font-medium">
                          {item?.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

                <div className="bg-[#EFF6FF] border-1 border-custom-secondary  rounded-sm h-auto w-full mt-5 sm:mt-10  mb-4 ">
                  <p className="px-6 mt-2 sm:mt-4 text-sm sm:text-base text-custom-dark-grey/60  font-semibold">
                    How to Exercise Your Rights
                  </p>
                  <p className="px-6 my-2 text-sm sm:text-base text-custom-dark-grey/40  font-medium">
                    To exercise any of these rights, please contact us using the
                    information provided in Section 10. We will respond to your
                    request within the timeframe required by applicable law
                    (typically 30 days).
                  </p>
                </div>
              </>
            ) : (
              <>
                {i === 2 ? (
                  <>
                    <div className="bg-[#EFF6FF] border-l-2 border-custom-secondary  rounded-sm h-auto w-full mt-1 mb-2 sm:mb-4 ">
                      <p className="px-6 py-2 sm:py-3 text-base sm:text-md text-custom-dark-grey/90  font-semibold">
                        Important: Data Controller vs. Data Processor
                      </p>
                      <p className="px-6 py-2 sm:py-3 text-sm sm:text-base text-custom-dark-grey/40  font-medium">
                        When you use Pulsurv to create and distribute surveys,
                        you act as the <br className="hidden sm:block" /> —you
                        determine what data to collect and from whom. Pulsurv
                        acts as a <br className="hidden sm:block" />, processing
                        survey response data on your behalf according to your
                        instructions.
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <p className="text-custom-dark-grey/50 text-sm sm:text-base">
                  {section.detail}
                </p>
                {i === 9 ? (
                  <>
                    <div className="border border-custom-secondary  rounded-md h-auto w-full mt-4 sm:mt-8  mb-2 sm:mb-4 ">
                      <p className="px-6 mt-3 text-md text-custom-secondary text-md sm:text-lg  font-semibold">
                        Pulsurv Privacy Team
                      </p>
                      <p className="px-6 mt-2 sm:mt-4 text-sm sm:text-base text-custom-dark-grey/70 font-medium">
                        <span className="text-custom-dark-grey/90 font-semibold">
                          Email:
                        </span>{" "}
                        privacy@pulsurv.com
                      </p>
                      <p className="px-6 mt-2 sm:mt-4 text-sm sm:text-base text-custom-dark-grey/70 font-medium">
                        <span className="text-custom-dark-grey/90 font-semibold">
                          General Contact:
                        </span>
                        Visit our Contact page
                      </p>
                      <p className="px-6 mt-2 sm:mt-4 text-sm sm:text-base text-custom-dark-grey/70 font-medium">
                        <span className="text-custom-dark-grey/90 font-semibold">
                          Response Time:
                        </span>{" "}
                        We will respond to privacy-related inquiries within 5
                        business days
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <p className="text-custom-dark-grey/90  mt-2 sm:mt-4 sm:text-lg font-semibold">
                  {section.heading_1}
                </p>
                <p className="text-custom-dark-grey/50 text-sm sm:text-base mt-2 mb-2 sm:mb-4">
                  {section.paragraph}
                </p>
                <ul className="px-4 text-custom-dark-grey/50 text-sm sm:text-base">
                  {section.lists_head_1?.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-custom-dark-grey/90  mt-2 sm:mt-4 sm:text-lg font-semibold">
                  {section.heading_2}
                </p>
                <p className="text-custom-dark-grey/50 text-sm sm:text-base mt-2 mb-2 sm:mb-4">
                  {section.paragraph_2}
                </p>
                <ul className="px-4 text-custom-dark-grey/50 text-sm sm:text-base">
                  {section.lists_head_2?.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                {i === 3 ? (
                  <>
                    <div className="bg-custom-dark-grey/3 border-1 border-custom-secondary  rounded-sm h-auto w-full mt-1 mb-2 sm:mb-4 ">
                      <p className="px-6  mt-2 text-base sm:text-md text-custom-secondary  font-semibold">
                        Note:
                      </p>
                      <p className="px-6 py-1 sm:py-2 mb-3 tracking-tight text-sm sm:text-base text-custom-dark-grey/40  font-medium">
                        While we implement robust security measures, no system
                        can guarantee absolute security. We continuously monitor
                        and improve our security practices to protect your data
                        to the best of our ability.
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}
                {i == 6 ? (
                  <>
                    <div className="bg-custom-dark-grey/3 border-1 border-custom-secondary rounded-sm h-auto w-full mt-3  mb-4 ">
                      <p className="py-6 px-4  tracking-tight text-base text-custom-dark-grey/40  font-medium">
                        <span className="text-md text-custom-secondary  font-semibold">
                          Note:{" "}
                        </span>
                        We do not sell, rent, or share your personal data with
                        third parties for their own marketing purposes.
                      </p>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <p className="text-custom-dark-grey/90  mt-2 sm:mt-4 sm:text-lg font-semibold">
                  {section.heading_3}
                </p>
                <p className="text-custom-dark-grey/50 text-sm sm:text-base mt-2 mb-2 sm:mb-4">
                  {section.paragraph_3}
                </p>
                <ul className="px-4 text-custom-dark-grey/50 text-sm sm:text-base">
                  {section.lists_head_3?.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-custom-dark-grey/90  mt-2 sm:mt-4 sm:text-lg font-semibold">
                  {section.heading_4}
                </p>
                <p className="text-custom-dark-grey/50 text-sm sm:text-base mt-2 mb-2 sm:mb-4">
                  {section.paragraph_4}
                </p>
                <ul className="px-4 text-custom-dark-grey/50 text-sm sm:text-base">
                  {section.lists_head_4?.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-custom-dark-grey/90  mt-2 sm:mt-4 sm:text-lg font-semibold">
                  {section.heading_5}
                </p>
                <p className="text-custom-dark-grey/50 text-sm sm:text-base mt-2 mb-2 sm:mb-4">
                  {section.paragraph_5}
                </p>
                <p className="text-custom-dark-grey/90  mt-2 sm:mt-4 sm:text-lg font-semibold">
                  {section.heading_6}
                </p>
                <p className="text-custom-dark-grey/50 text-sm sm:text-base mt-2 mb-2 sm:mb-4">
                  {section.paragraph_6}
                </p>
                <p className="text-custom-dark-grey/90  mt-2 sm:mt-4 sm:text-lg font-semibold">
                  {section.heading_7}
                </p>
                <p className="text-custom-dark-grey/50 text-sm sm:text-base mt-2 mb-2 sm:mb-4">
                  {section.paragraph_7}
                </p>
                <ul className="px-4 text-custom-dark-grey/50 text-sm sm:text-base">
                  {section.list_7?.map((item, index) => (
                    <li key={index} className="mb-2">
                      <span className="text-custom-dark-grey/70 font-semibold">
                        {item.title}
                      </span>
                      <br /> {item.desc}
                    </li>
                  ))}
                </ul>
                )
              </>
            )}
            {i === 9 ? (
              <>
                <div className="bg-custom-primary p-6 rounded-lg h-auto w-full mt-4 sm:mt-10 mb-4 sm:mb-10  ">
                  <p className="px-6 mt-4 text-base sm:text-md text-white text-center font-medium">
                    Thank you for trusting Pulsurv with your data.
                  </p>
                  <p className="px-6  mt-1 mb-4 text-sm sm:text-base text-white/70 text-center font-medium">
                    We are committed to protecting your privacy and handling
                    your information responsibly.
                  </p>
                </div>
              </>
            ) : (
              ""
            )}
          </section>
        );
      })}
    </div>
  );
}

export default InformationCollect;