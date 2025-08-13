import React from "react";
import { ArrowRight } from "lucide-react";
import { workflowSteps } from "@/utils/exemples";

const WorkflowStep = ({
  icon,
  title,
  description,
}: (typeof workflowSteps)[0]) => (
  <div className="relative flex-shrink-0">
    <img src={icon} alt={`${title} icon`} className="h-24 w-24" />
    <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-60 text-center">
      <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const StepConnector = ({ stepNumber }: { stepNumber: string }) => (
  <div className="flex-1 flex items-center min-w-0 mx-4">
    <div className="flex-1 h-px bg-gray-900" />
    <ArrowRight className="h-5 w-5 text-gray-900 flex-shrink-0" />
    <span className="ml-4 font-serif font-bold text-7xl text-gray-200">
      {stepNumber}
    </span>
  </div>
);

export function WorkflowSection() {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-8 mt-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1">
            <span className="h-2 w-2 rounded-full bg-gray-800"></span>
            <p className="font-semibold text-sm text-gray-600">WORKFLOW</p>
          </div>
          <h2 className="font-serif text-5xl font-bold mt-4 text-gray-900">
            How We Work
          </h2>
        </div>

        <div className="mt-24 pb-32 flex flex-col md:flex-row items-center justify-center gap-y-24 md:gap-y-0">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <WorkflowStep {...step} />
              <StepConnector stepNumber={`0${index + 1}`} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
