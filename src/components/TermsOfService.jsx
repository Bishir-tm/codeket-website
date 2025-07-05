import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-slate-900 to-indigo-950">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Background gradient animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] bg-blue-600 rounded-full filter blur-[120px] opacity-20 animate-blob"></div>
          <div className="absolute top-[20%] -right-[10%] w-[70%] h-[70%] bg-purple-600 rounded-full filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] bg-teal-600 rounded-full filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <br />
              Read Carefully.
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-400 mb-2">Scroll to read</p>
            <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="w-2 h-2 bg-white rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mx-4 p-8 text-white lg:mx-24 xl:mx-44">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. INTRODUCTION</h2>
          <p className="mb-4">
            Welcome to <strong>Codeket Ltd</strong>. These Terms of Service
            ("Terms") govern your access to and use of Codeket's website,
            software, applications, products, and services (collectively, the
            "Services"). These Terms constitute a legally binding agreement
            between you, whether personally or on behalf of an entity ("you")
            and <strong>Codeket Ltd</strong> ("Codeket," "Company," "we," "us,"
            or "our").
          </p>
          <p className="mb-4">
            By accessing or using our Services, you agree to be bound by these
            Terms and our Privacy Policy. If you disagree with any part of these
            Terms, you may not access the Services.
          </p>
          <p className="mb-4">
            We may revise these Terms at any time by updating this page. Your
            continued use of the Services following the posting of revised Terms
            means that you accept and agree to the changes. You are expected to
            check this page frequently so you are aware of any changes, as they
            are binding on you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. DEFINITIONS</h2>
          <p className="mb-4">For the purposes of these Terms:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              <strong>"Account"</strong> means a unique account created for you
              to access our Services or parts of our Services.
            </li>
            <li className="mb-2">
              <strong>"Client"</strong> means any individual or entity that
              purchases or uses our Services.
            </li>
            <li className="mb-2">
              <strong>"Content"</strong> means any information or data,
              including but not limited to text, software, scripts, code,
              designs, graphics, images, sounds, music, videos, applications,
              interactive features, and other materials that are posted,
              generated, provided, or otherwise made available through the
              Services.
            </li>
            <li className="mb-2">
              <strong>"Intellectual Property Rights"</strong> means all patent
              rights, copyright rights, moral rights, rights of publicity,
              trademark, trade dress and service mark rights, goodwill, trade
              secret rights and other intellectual property rights as may now
              exist or hereafter come into existence, and all applications and
              registrations, renewals and extensions thereof, under the laws of
              any state, country, territory or other jurisdiction.
            </li>
            <li className="mb-2">
              <strong>"Software"</strong> means all software, applications,
              APIs, SDKs, code, and related documentation provided or made
              accessible to you through the Services.
            </li>
            <li className="mb-2">
              <strong>"User"</strong> means an individual who accesses or uses
              the Services, including you.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. ELIGIBILITY</h2>
          <p className="mb-4">
            By agreeing to these Terms, you represent and warrant that:
          </p>
          <ul className="list-disc pl-8">
            <li className="mb-2">You are at least 18 years of age;</li>
            <li className="mb-2">
              You have the legal capacity to enter into these Terms;
            </li>
            <li className="mb-2">
              You are not located in a country that is subject to a U.S.
              government embargo, or that has been designated as a "terrorist
              supporting" country;
            </li>
            <li className="mb-2">
              You are not listed on any U.S. government list of prohibited or
              restricted parties;
            </li>
            <li className="mb-2">
              If you are accepting these Terms on behalf of a company or other
              legal entity, you have the authority to bind such entity to these
              Terms.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. ACCOUNT REGISTRATION AND SECURITY
          </h2>
          <p className="mb-4">
            To access certain features of the Services, you may be required to
            register for an Account. When you register for an Account, you agree
            to provide accurate, current, and complete information and to keep
            this information updated. You are responsible for maintaining the
            confidentiality of your Account credentials and for all activities
            that occur under your Account. You agree to notify us immediately of
            any unauthorized use of your Account or any other breach of
            security.
          </p>
          <p className="mb-4">
            We reserve the right to suspend or terminate your Account at our
            sole discretion, without notice, for conduct that we determine
            violates these Terms, or is harmful to other Users, us, or third
            parties, or for any other reason.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. SERVICES AND SUBSCRIPTION
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            5.1 Services Description
          </h3>
          <p className="mb-4">
            Codeket provides custom enterprise software, SaaS products, cloud
            solutions, and AI-powered applications. The specific features and
            functionality of the Services will be those selected by you and
            described in the applicable service agreement, order form, or other
            written or electronic document provided to you by Codeket
            (collectively, "Order").
          </p>

          <h3 className="text-xl font-semibold mb-2">5.2 Subscription Terms</h3>
          <p className="mb-4">
            For subscription-based Services, your subscription will continue
            until terminated. To use the subscription Services, you must provide
            certain payment and billing information. You agree to pay all fees
            specified in the applicable Order. Unless otherwise specified in the
            Order:
          </p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              All fees are quoted and payable in the currency specified in the
              Order;
            </li>
            <li className="mb-2">
              Payment obligations are non-cancelable, and fees paid are
              non-refundable;
            </li>
            <li className="mb-2">
              We may increase fees for subscription renewals by providing at
              least 30 days' notice prior to the renewal date;
            </li>
            <li className="mb-2">
              Subscription fees are based on purchased subscriptions and not
              actual usage.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            5.3 Custom Software Development
          </h3>
          <p className="mb-4">
            For custom software development services, specific deliverables,
            timelines, acceptance criteria, and other terms will be set forth in
            a Statement of Work (SOW) or similar document agreed upon by both
            parties. Any changes to the scope of work must be agreed upon in
            writing by both parties through a change order process.
          </p>

          <h3 className="text-xl font-semibold mb-2">5.4 Cloud Services</h3>
          <p className="mb-4">
            For cloud services, we will use commercially reasonable efforts to
            make the services available 24 hours a day, 7 days a week, except
            for planned downtime and emergency maintenance. We will provide
            advance notice of planned downtime whenever possible. During the
            term of your subscription, we will provide the level of support
            specified in your Order.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            5.5 Service Level Agreements
          </h3>
          <p className="mb-4">
            If applicable, any Service Level Agreements (SLAs) will be specified
            in your Order or a separate SLA document. SLAs may include
            provisions regarding uptime, response times, resolution times, and
            remedies for failure to meet such standards.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. PAYMENT TERMS</h2>
          <p className="mb-4">
            You agree to pay all fees and charges associated with your Account
            and the Services on the terms set forth in the applicable Order.
            Unless otherwise specified:
          </p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              We will charge the payment method you specify at the time of
              purchase or as otherwise specified in your Order;
            </li>
            <li className="mb-2">
              All amounts payable are exclusive of any sales, use, value-added,
              withholding, or similar taxes, which you are responsible for
              paying;
            </li>
            <li className="mb-2">
              Payment for subscription Services is due at the beginning of each
              subscription period;
            </li>
            <li className="mb-2">
              Payment for custom development services will be as specified in
              the applicable SOW;
            </li>
            <li className="mb-2">
              Late payments may bear interest at the rate of 1.5% per month (or
              the highest rate permitted by law, if less);
            </li>
            <li className="mb-2">
              We may suspend or terminate your access to the Services if your
              payment is late.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. REFUND POLICY</h2>

          <h3 className="text-xl font-semibold mb-2">7.1 General Policy</h3>
          <p className="mb-4">
            Except as expressly provided in this section, all fees paid are
            non-refundable. Refunds, when available, will be processed using the
            same payment method used for the original purchase within 30 days of
            approval.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            7.2 Subscription Services Refunds
          </h3>
          <p className="mb-4">For subscription-based Services:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              <strong>Trial Period:</strong> If we offer a free trial period,
              you may cancel at any time during the trial without charge.
            </li>
            <li className="mb-2">
              <strong>Monthly Subscriptions:</strong> You may cancel your
              monthly subscription at any time. Cancellation will take effect at
              the end of your current billing cycle, and no refund will be
              provided for the current billing period.
            </li>
            <li className="mb-2">
              <strong>Annual Subscriptions:</strong> For annual subscriptions,
              you may request a pro-rated refund within 30 days of initial
              purchase or renewal if you have used less than 25% of the service
              features during that period.
            </li>
            <li className="mb-2">
              <strong>Service Failure:</strong> If our Services experience
              significant downtime (more than 48 consecutive hours) not due to
              scheduled maintenance, you may be eligible for a pro-rated refund
              or service credit for the affected period.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            7.3 Custom Development Services Refunds
          </h3>
          <p className="mb-4">For custom development projects:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              <strong>Pre-Development Phase:</strong> Full refund available if
              you cancel before development work begins and no deliverables have
              been provided.
            </li>
            <li className="mb-2">
              <strong>During Development:</strong> Refunds will be calculated
              based on work completed and milestones achieved as outlined in the
              SOW. You will be charged for work completed to date.
            </li>
            <li className="mb-2">
              <strong>Post-Delivery:</strong> No refunds available once final
              deliverables have been accepted and delivered, except in cases of
              material breach of the agreed specifications.
            </li>
            <li className="mb-2">
              <strong>Milestone-Based Projects:</strong> Payments for completed
              and accepted milestones are non-refundable.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            7.4 Cloud Services and SaaS Refunds
          </h3>
          <p className="mb-4">For cloud and SaaS offerings:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              <strong>Usage-Based Services:</strong> No refunds for consumed
              resources or usage-based charges.
            </li>
            <li className="mb-2">
              <strong>Service Level Agreement (SLA) Breaches:</strong> Service
              credits may be provided as specified in applicable SLAs rather
              than cash refunds.
            </li>
            <li className="mb-2">
              <strong>Data Storage Services:</strong> No refunds for data
              storage charges once data has been stored, regardless of
              subsequent deletion.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">7.5 Refund Exclusions</h3>
          <p className="mb-4">
            Refunds will not be provided in the following circumstances:
          </p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              Termination or suspension due to violation of these Terms;
            </li>
            <li className="mb-2">
              Services that have been fully delivered and accepted;
            </li>
            <li className="mb-2">
              Changes in your business needs or requirements;
            </li>
            <li className="mb-2">
              Failure to use purchased Services or access your Account;
            </li>
            <li className="mb-2">
              Third-party costs or services arranged through but not provided
              directly by Codeket;
            </li>
            <li className="mb-2">
              Setup fees, onboarding fees, or other one-time charges after
              services have been initiated;
            </li>
            <li className="mb-2">
              Discounted or promotional pricing arrangements.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            7.6 Refund Request Process
          </h3>
          <p className="mb-4">To request a refund:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              Submit a written request to billing@codeket.com within the
              applicable refund period;
            </li>
            <li className="mb-2">
              Include your account information, order details, and reason for
              the refund request;
            </li>
            <li className="mb-2">
              Provide any supporting documentation if required;
            </li>
            <li className="mb-2">
              Allow up to 10 business days for us to review and respond to your
              request;
            </li>
            <li className="mb-2">
              If approved, refunds will be processed within 30 days.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            7.7 Service Credits vs. Cash Refunds
          </h3>
          <p className="mb-4">
            At our discretion, we may offer service credits instead of cash
            refunds. Service credits can be applied to future purchases and are
            valid for 12 months from the date of issuance. Service credits are
            non-transferable and have no cash value.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            7.8 Chargeback and Dispute Resolution
          </h3>
          <p className="mb-4">
            Before initiating a chargeback with your payment provider, please
            contact us directly to resolve any billing disputes. Initiating a
            chargeback may result in immediate suspension of your Services and
            Account pending resolution of the dispute.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            8. INTELLECTUAL PROPERTY RIGHTS
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            8.1 Our Intellectual Property
          </h3>
          <p className="mb-4">
            The Services, including their entire contents, features, and
            functionality, are owned by Codeket, its licensors, or other
            providers and are protected by copyright, trademark, patent, trade
            secret, and other intellectual property or proprietary rights laws.
            These Terms do not grant you any right, title, or interest in the
            Services, our trademarks, logos, or other intellectual property.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            8.2 License to Use the Services
          </h3>
          <p className="mb-4">
            Subject to these Terms, we grant you a limited, non-exclusive,
            non-transferable, non-sublicensable license to access and use the
            Services solely for your internal business purposes during the term
            of your subscription or service agreement.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            8.3 License Restrictions
          </h3>
          <p className="mb-4">You shall not:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              Copy, modify, or create derivative works based on the Services;
            </li>
            <li className="mb-2">
              Reverse engineer, decompile, disassemble, or attempt to discover
              the source code of the Services;
            </li>
            <li className="mb-2">
              Rent, lease, loan, sell, sublicense, distribute, transmit, or
              otherwise transfer access to the Services;
            </li>
            <li className="mb-2">
              Remove, alter, or obscure any proprietary notices on the Services;
            </li>
            <li className="mb-2">
              Use the Services to build a competitive product or service;
            </li>
            <li className="mb-2">
              Use the Services in any manner that could damage, disable,
              overburden, or impair our servers or networks;
            </li>
            <li className="mb-2">
              Use any automated means to access the Services without our express
              written permission;
            </li>
            <li className="mb-2">
              Attempt to gain unauthorized access to any portion of the Services
              or any other systems or networks connected to the Services.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">8.4 Client Content</h3>
          <p className="mb-4">
            You retain all right, title, and interest in and to any content,
            data, information, or materials you provide to us or upload to the
            Services ("Client Content"). You grant us a worldwide,
            non-exclusive, royalty-free license to use, reproduce, modify,
            adapt, publish, translate, and distribute Client Content solely for
            the purpose of providing the Services to you.
          </p>

          <h3 className="text-xl font-semibold mb-2">8.5 Feedback</h3>
          <p className="mb-4">
            If you provide us with any feedback, suggestions, or ideas regarding
            the Services ("Feedback"), you hereby assign to us all rights in the
            Feedback and agree that we shall have the right to use such Feedback
            in any manner without restriction and without compensation to you.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            8.6 Custom Development Deliverables
          </h3>
          <p className="mb-4">
            Unless otherwise specified in a SOW or other written agreement:
          </p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              For custom development services, upon full payment, you will own
              all custom code and deliverables specifically created for you;
            </li>
            <li className="mb-2">
              We retain ownership of all pre-existing code, tools, libraries,
              methodologies, and know-how used to create the deliverables;
            </li>
            <li className="mb-2">
              We grant you a perpetual, worldwide, non-exclusive license to use
              such pre-existing materials as incorporated into the deliverables.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            9. CLIENT RESPONSIBILITIES
          </h2>
          <p className="mb-4">You are responsible for:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              Providing accurate and complete information as required for the
              Services;
            </li>
            <li className="mb-2">
              Maintaining the confidentiality of your Account credentials;
            </li>
            <li className="mb-2">
              Ensuring that your use of the Services complies with all
              applicable laws and regulations;
            </li>
            <li className="mb-2">
              Obtaining and maintaining all equipment and services needed to
              access and use the Services;
            </li>
            <li className="mb-2">
              Providing timely feedback, approvals, and materials as required
              for us to perform the Services;
            </li>
            <li className="mb-2">
              Ensuring you have all necessary rights to any Client Content
              provided to us;
            </li>
            <li className="mb-2">
              Implementing appropriate security measures to protect your systems
              and data;
            </li>
            <li className="mb-2">
              Backing up your data and content as appropriate.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            10. PROHIBITED ACTIVITIES
          </h2>
          <p className="mb-4">You agree not to use the Services to:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              Violate any applicable law, regulation, or legal rights of others;
            </li>
            <li className="mb-2">
              Transmit or upload any material that contains viruses, trojan
              horses, worms, or any other harmful or destructive code;
            </li>
            <li className="mb-2">
              Attempt to gain unauthorized access to any portion of the Services
              or any other systems or networks connected to the Services;
            </li>
            <li className="mb-2">
              Interfere with or disrupt the integrity or performance of the
              Services or the data contained therein;
            </li>
            <li className="mb-2">
              Harass, abuse, or harm another person, or to impersonate or
              attempt to impersonate another User or person;
            </li>
            <li className="mb-2">
              Use the Services in any way that could damage, disable,
              overburden, or impair the Services or interfere with any other
              party's use of the Services;
            </li>
            <li className="mb-2">
              Use any robot, spider, or other automatic device, process, or
              means to access the Services for any purpose;
            </li>
            <li className="mb-2">
              Introduce any material that contains software viruses or any other
              computer code, files, or programs designed to interrupt, destroy,
              or limit the functionality of any computer software, hardware, or
              telecommunications equipment;
            </li>
            <li className="mb-2">
              Engage in any activity that could reasonably be considered
              fraudulent or deceptive.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. CONFIDENTIALITY</h2>
          <p className="mb-4">
            "Confidential Information" means any non-public information
            disclosed by one party to the other, whether orally, in writing, or
            by other means, that is designated as confidential or that
            reasonably should be understood to be confidential given the nature
            of the information and the circumstances of disclosure. Confidential
            Information includes, but is not limited to, business plans, product
            plans, technology and technical information, marketing strategies,
            financial information, and business policies or practices.
          </p>
          <p className="mb-4">Each party agrees to:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              Protect the other party's Confidential Information with the same
              degree of care it uses to protect its own Confidential
              Information, but in no event less than reasonable care;
            </li>
            <li className="mb-2">
              Use the other party's Confidential Information only for the
              purpose of performing its obligations or exercising its rights
              under these Terms;
            </li>
            <li className="mb-2">
              Limit access to the other party's Confidential Information to
              those employees, agents, or contractors who need such access to
              perform obligations under these Terms and who are bound by
              confidentiality obligations at least as restrictive as those
              herein;
            </li>
            <li className="mb-2">
              Not disclose the other party's Confidential Information to any
              third party without prior written consent, except as required by
              law.
            </li>
          </ul>
          <p className="mb-4">
            These confidentiality obligations will survive termination of these
            Terms for a period of three (3) years, except for trade secrets,
            which shall be maintained as confidential for as long as they remain
            trade secrets under applicable law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            12. DATA PRIVACY AND SECURITY
          </h2>
          <p className="mb-4">
            We collect and process personal data in accordance with our Privacy
            Policy, which is incorporated by reference into these Terms. You
            acknowledge that you have read and understood our Privacy Policy.
          </p>
          <p className="mb-4">
            We implement reasonable administrative, technical, and physical
            safeguards designed to protect Client Content and personal data from
            unauthorized access, use, or disclosure. However, no method of
            transmission over the Internet or electronic storage is completely
            secure. Therefore, we cannot guarantee absolute security.
          </p>
          <p className="mb-4">
            If you are a business subject to data protection laws such as GDPR,
            CCPA, or NDPR, and we process personal data on your behalf,
            additional terms may apply as set forth in a Data Processing
            Agreement between us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            13. TERM AND TERMINATION
          </h2>

          <h3 className="text-xl font-semibold mb-2">13.1 Term</h3>
          <p className="mb-4">
            These Terms will remain in effect until terminated by either you or
            us as set forth herein.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            13.2 Termination by You
          </h3>
          <p className="mb-4">
            You may terminate these Terms at any time by discontinuing use of
            the Services and closing your Account. If you have a subscription,
            you may terminate in accordance with the termination provisions in
            your Order.
          </p>

          <h3 className="text-xl font-semibold mb-2">13.3 Termination by Us</h3>
          <p className="mb-4">
            We may terminate or suspend your access to the Services immediately,
            without prior notice or liability, for any reason, including,
            without limitation, if you breach these Terms. We may also terminate
            or suspend your access to the Services if you have not accessed the
            Services for a consecutive 12-month period.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            13.4 Effect of Termination
          </h3>
          <p className="mb-4">Upon termination:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              All licenses and rights to use the Services will immediately
              terminate;
            </li>
            <li className="mb-2">You will cease all use of the Services;</li>
            <li className="mb-2">
              Any fees accrued before termination remain due and payable;
            </li>
            <li className="mb-2">
              We may delete or archive Client Content after a reasonable period
              following termination;
            </li>
            <li className="mb-2">
              Any provisions of these Terms that by their nature should survive
              termination shall survive termination, including ownership
              provisions, warranty disclaimers, indemnity, limitations of
              liability, and dispute resolution provisions.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            13.5 Transition Assistance
          </h3>
          <p className="mb-4">
            Upon request and for an additional fee, we may provide reasonable
            transition assistance to help you migrate data and services
            following termination.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            14. WARRANTY AND DISCLAIMERS
          </h2>

          <h3 className="text-xl font-semibold mb-2">14.1 Service Warranty</h3>
          <p className="mb-4">
            We warrant that the Services will materially conform to the
            documentation or specifications set forth in the applicable Order
            during the subscription term. Your exclusive remedy for breach of
            this warranty is for us to use commercially reasonable efforts to
            correct the non-conforming Services, or if we cannot do so within a
            reasonable time, to terminate the subscription and refund any
            prepaid, unused fees for the non-conforming Services.
          </p>

          <h3 className="text-xl font-semibold mb-2">14.2 Mutual Warranties</h3>
          <p className="mb-4">Each party represents and warrants that:</p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              It has full power and authority to enter into and perform these
              Terms;
            </li>
            <li className="mb-2">
              These Terms constitute legal, valid, and binding obligations;
            </li>
            <li className="mb-2">
              Its performance will not violate any applicable law or regulation
              or any agreement to which it is bound.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            14.3 Disclaimer of Warranties
          </h3>
          <p className="mb-4">
            EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICES ARE PROVIDED "AS
            IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM
            EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES,
            EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES
            WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE, OR THAT ANY
            DEFECTS WILL BE CORRECTED.
          </p>
          <p className="mb-4">
            WE MAKE NO WARRANTY REGARDING THE ACCURACY, TIMELINESS,
            TRUTHFULNESS, COMPLETENESS, OR RELIABILITY OF ANY CONTENT OBTAINED
            THROUGH THE SERVICES. NO ADVICE OR INFORMATION, WHETHER ORAL OR
            WRITTEN, OBTAINED FROM US OR THROUGH THE SERVICES, WILL CREATE ANY
            WARRANTY NOT EXPRESSLY MADE HEREIN.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            15. LIMITATION OF LIABILITY
          </h2>
          <p className="mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            CODEKET, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
            FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL,
            USE, DATA, OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF,
            OR INABILITY TO USE, THE SERVICES OR ANY CONTENT THEREIN.
          </p>
          <p className="mb-4">
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING
            FROM OR RELATING TO THESE TERMS OR YOUR USE OF THE SERVICES EXCEED
            THE AMOUNTS PAID BY YOU TO US FOR THE SERVICES DURING THE TWELVE
            (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE
            CLAIM.
          </p>
          <p className="mb-4">
            THE LIMITATIONS OF LIABILITY IN THIS SECTION SHALL APPLY WHETHER
            SUCH LIABILITY IS BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
            NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, AND
            WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH
            DAMAGE.
          </p>
          <p className="mb-4">
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
            LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE
            LIMITATION MAY NOT APPLY TO YOU.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">16. INDEMNIFICATION</h2>

          <h3 className="text-xl font-semibold mb-2">
            16.1 Indemnification by You
          </h3>
          <p className="mb-4">
            You agree to indemnify, defend, and hold harmless Codeket, its
            affiliates, and their respective officers, directors, employees,
            agents, successors, and assigns from and against any and all claims,
            damages, liabilities, costs, and expenses (including reasonable
            attorneys' fees) arising from or relating to:
          </p>
          <ul className="list-disc pl-8">
            <li className="mb-2">Your use of the Services;</li>
            <li className="mb-2">Any Client Content;</li>
            <li className="mb-2">Your violation of these Terms;</li>
            <li className="mb-2">
              Your violation of any third-party right, including without
              limitation any intellectual property right, publicity,
              confidentiality, property, or privacy right;
            </li>
            <li className="mb-2">
              Your violation of any applicable law, rule, or regulation.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            16.2 Indemnification by Us
          </h3>
          <p className="mb-4">
            We will indemnify, defend, and hold you harmless from and against
            any third-party claim that the Services, as provided by us and used
            in accordance with these Terms, infringe or misappropriate any
            intellectual property right of a third party; provided that you:
          </p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              Promptly notify us in writing of the claim;
            </li>
            <li className="mb-2">
              Grant us sole control of the defense and settlement of the claim;
            </li>
            <li className="mb-2">
              Provide us with all reasonable assistance at our expense.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">16.3 Exclusions</h3>
          <p className="mb-4">
            Our indemnification obligations do not apply to claims arising from:
          </p>
          <ul className="list-disc pl-8">
            <li className="mb-2">Your modification of the Services;</li>
            <li className="mb-2">
              Your use of the Services in combination with any products or
              services not provided by us;
            </li>
            <li className="mb-2">
              Your use of the Services after we notify you to discontinue such
              use;
            </li>
            <li className="mb-2">Client Content.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">16.4 Remedies</h3>
          <p className="mb-4">
            If the Services become, or in our opinion are likely to become, the
            subject of an infringement claim, we may, at our option and expense:
          </p>
          <ul className="list-disc pl-8">
            <li className="mb-2">
              Obtain the right for you to continue using the Services;
            </li>
            <li className="mb-2">
              Modify the Services to make them non-infringing while maintaining
              substantially equivalent functionality;
            </li>
            <li className="mb-2">
              Replace the Services with a functionally equivalent,
              non-infringing substitute; or
            </li>
            <li className="mb-2">
              Terminate the Services and refund any prepaid, unused fees for the
              terminated Services.
            </li>
          </ul>
          <p className="mb-4">
            This section states our entire liability and your exclusive remedy
            for any infringement claims related to the Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            17. DISPUTE RESOLUTION
          </h2>

          <h3 className="text-xl font-semibold mb-2">17.1 Governing Law</h3>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of [JURISDICTION], without regard to its conflict of law
            principles.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            17.2 Informal Dispute Resolution
          </h3>
          <p className="mb-4">
            Before filing a claim against each other, the parties agree to
            attempt to resolve the dispute by contacting the other party and
            describing the dispute in detail, including proposed resolution. If
            the parties cannot resolve the dispute within 30 days after
            notification, either party may pursue legal action as appropriate.
          </p>

          <h3 className="text-xl font-semibold mb-2">17.3 Arbitration</h3>
          <p className="mb-4">
            Any dispute arising from or relating to these Terms or the Services
            that cannot be resolved through informal negotiation shall be
            finally settled by binding arbitration administered by [ARBITRATION
            AUTHORITY] in accordance with its Commercial Arbitration Rules then
            in effect. The arbitration shall take place in [LOCATION], and the
            language of the arbitration shall be English. The arbitrator's award
            shall be final and binding and may be entered in any court of
            competent jurisdiction.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            17.4 Class Action Waiver
          </h3>
          <p className="mb-4">
            TO THE EXTENT PERMITTED BY LAW, ALL CLAIMS MUST BE BROUGHT IN A
            PARTY'S INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER
            IN ANY PURPORTED CLASS, COLLECTIVE ACTION, OR REPRESENTATIVE
            PROCEEDING. THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE
            PERSON'S CLAIMS OR ENGAGE IN ANY CLASS ARBITRATION.
          </p>

          <h3 className="text-xl font-semibold mb-2">17.5 Exceptions</h3>
          <p className="mb-4">
            Notwithstanding the foregoing, either party may seek injunctive or
            other equitable relief in any court of competent jurisdiction to
            prevent the actual or threatened infringement, misappropriation, or
            violation of a party's copyrights, trademarks, trade secrets,
            patents, or other intellectual property rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            18. GENERAL PROVISIONS
          </h2>

          <h3 className="text-xl font-semibold mb-2">18.1 Entire Agreement</h3>
          <p className="mb-4">
            These Terms, together with the Privacy Policy and any Orders or
            SOWs, constitute the entire agreement between you and us regarding
            the Services and supersede all prior agreements and understandings,
            whether written or oral.
          </p>

          <h3 className="text-xl font-semibold mb-2">18.2 Severability</h3>
          <p className="mb-4">
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision will be limited or eliminated to the minimum
            extent necessary so that these Terms will otherwise remain in full
            force and effect and enforceable.
          </p>

          <h3 className="text-xl font-semibold mb-2">18.3 Waiver</h3>
          <p className="mb-4">
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of those rights. The waiver of any such
            right or provision will be effective only if in writing and signed
            by a duly authorized representative of Codeket.
          </p>

          <h3 className="text-xl font-semibold mb-2">18.4 Assignment</h3>
          <p className="mb-4">
            You may not assign or transfer these Terms, by operation of law or
            otherwise, without our prior written consent. Any attempt to assign
            or transfer these Terms without such consent will be null and void.
            We may assign or transfer these Terms, at our sole discretion,
            without restriction.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            18.5 Relationship of the Parties
          </h3>
          <p className="mb-4">
            Nothing in these Terms shall be construed as creating a partnership,
            joint venture, agency, or employment relationship between you and
            us. Neither party has the authority to bind the other in any
            respect.
          </p>

          <h3 className="text-xl font-semibold mb-2">18.6 Force Majeure</h3>
          <p className="mb-4">
            Neither party shall be liable for any failure or delay in
            performance under these Terms due to causes beyond its reasonable
            control, including but not limited to acts of God, war, terrorism,
            riot, embargoes, acts of civil or military authorities, fire, flood,
            earthquake, or other natural disasters, strikes or labor shortages.
          </p>

          <h3 className="text-xl font-semibold mb-2">18.7 Notices</h3>
          <p className="mb-4">
            Any notices or other communications provided by us under these Terms
            will be given by posting to the Services or by email to the address
            you provide to us. For notices made by email, the date of receipt
            will be deemed the date on which such notice is transmitted.
          </p>

          <h3 className="text-xl font-semibold mb-2">18.8 Export Control</h3>
          <p className="mb-4">
            You agree to comply with all applicable import, re-import, export,
            and re-export control laws and regulations, including the Export
            Administration Regulations maintained by the U.S. Department of
            Commerce and trade and economic sanctions maintained by the U.S.
            Treasury Department's Office of Foreign Assets Control.
          </p>

          <h3 className="text-xl font-semibold mb-2">18.9 Headings</h3>
          <p className="mb-4">
            The section titles in these Terms are for convenience only and have
            no legal or contractual effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            19. CONTACT INFORMATION
          </h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-disc pl-6 mt-2 text-white">
            <li>Email: legal@codeket.com</li>
            <li>Address: No. 46, Hassan Usman Rd. Katsina, Nigeria. 820101.</li>
            <li>Phone: +234 9068 149 540</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
