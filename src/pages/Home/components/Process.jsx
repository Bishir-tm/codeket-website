import React from "react";

const processes = [
  {
    title: "Discovery & Strategic Alignment",
    icon: "🔍",
    description:
      "We begin by deeply understanding your unique business objectives, challenges, and vision to craft a software solution that perfectly aligns with your strategic goals.",
  },
  {
    title: "Intuitive Design & Agile Development",
    icon: "🏗️",
    description:
      "Our expert team designs and develops user-centric software with a focus on intuitive interfaces and robust functionality, ensuring a seamless experience and effective problem-solving.",
  },
  {
    title: "Rapid Deployment & Seamless Onboarding",
    icon: "⚡",
    description:
      "Experience swift deployment of your custom software, followed by comprehensive onboarding and training to ensure your team is fully equipped and operational in record time.",
  },
  {
    title: "Continuous Support & Evolutionary Growth",
    icon: "📈",
    description:
      "We provide dedicated, human-centric support and continuously evolve your software, adapting to new challenges and opportunities to ensure long-term success and sustained growth.",
  },
];

const Process = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Streamlined Development Process</h2>
        <p className="text-lg max-w-2xl mx-auto text-base-content/80">
          From initial concept to ongoing support, our agile methodology ensures transparency, efficiency, and exceptional results.
        </p>
      </div>

      <ul className="steps steps-vertical lg:steps-horizontal w-full">
        {processes.map((step, index) => (
          <li key={index} className="step step-primary">
            <div className="text-center p-4">
              <div className="text-5xl mb-2">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-base-content/70">{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Process;
