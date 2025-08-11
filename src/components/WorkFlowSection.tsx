import { Rocket, ScanSearch, RotateCw, ArrowRight } from "lucide-react";
import React from "react";

const workflowSteps = [
  {
    icon: Rocket,
    title: "Research and Strategy",
    description:
      "Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks",
  },
  {
    icon: ScanSearch,
    title: "Plan Customization",
    description:
      "Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks",
  },
  {
    icon: RotateCw,
    title: "Finished & User Testing",
    description:
      "Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks",
  },
];

const WorkflowStep = ({
  icon: Icon,
  title,
  description,
}: (typeof workflowSteps)[0]) => (
  <div className="flex flex-col items-center text-center max-w-xs mx-auto">
    <div className="h-24 w-24 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white">
      <Icon className="h-12 w-12 text-gray-800" />
    </div>
    <h3 className="mt-6 font-semibold text-xl text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-500">{description}</p>
  </div>
);

const StepConnector = ({ stepNumber }: { stepNumber: string }) => (
  <div className="flex-1 items-center hidden md:flex">
    <div className="flex-1 h-px bg-gray-300"></div>
    <span className="mx-4 text-5xl font-bold text-gray-200">{stepNumber}</span>
    <div className="flex-1 h-px bg-gray-300"></div>
    <ArrowRight className="h-6 w-6 text-gray-300" />
  </div>
);

export function WorkflowSection() {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-8 mt-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1">
            <span className="h-2 w-2 rounded-full bg-gray-800"></span>
            <p className="font-semibold text-sm text-gray-700">WORKFLOW</p>
          </div>
          <h2 className="font-serif text-5xl font-bold mt-4 text-gray-900">
            How We Work
          </h2>
        </div>
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-y-12">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <WorkflowStep {...step} />
              {index < workflowSteps.length - 1 && (
                <StepConnector stepNumber={`0${index + 2}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
