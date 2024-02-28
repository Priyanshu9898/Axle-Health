import React from "react";
import FeatureComponent from "./FeatureComponent";
import ImpactSection from "./ImpactSection";
import IconsSection from "./IconSection";
import SecurityFeaturesSection from "./SecurityFeatures";
import ManagedByAxleSection from "./ManagedFeature";

const stats = [
  {
    imagePath: "/assets/Images/impact1.svg", 
    label: "appointments per shift",
    value: "+19%",
  },
  {
    imagePath: "/assets/Images/impact2.svg",
    label: "patient no-show rate",
    value: "-31%",
  },
  {
    imagePath: "/assets/Images/impact3.svg",
    label: "operations time spent",
    value: "-71%",
  },
]



const MainFeature = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-24 mt-4 md:mt-0">
        <FeatureComponent
          title="Route Optimization"
          description="Increase scheduling efficiency and staff utilization with Axle's proprietary logistics algorithms"
          linkText="Explore Workforce Management Software"
          linkHref="/explore-workforce-management-software"
          imageUrl="/assets/images/route.png"
          imageFirstOnDesktop={false}
        />
        <FeatureComponent
          title="Patient Engagement"
          description="Improve appointment show rate and patient experience with Axle's scheduling and messaging platform"
          linkText="Explore Workforce Management Software"
          linkHref="/explore-workforce-management-software"
          imageUrl="/assets/images/patient.svg"
          imageFirstOnDesktop={true}
        />
        <FeatureComponent
          title="Simplified Operations"
          description="Streamline clinician and admin workflows with automated scheduling, mileage tracking, patient communications, and more"
          linkText="Explore Workforce Management Software"
          linkHref="/explore-workforce-management-software"
          imageUrl="/assets/images/patient.svg"
          imageFirstOnDesktop={false}
        />
        <FeatureComponent
          title="Comprehensive Integrations"
          description="Integrate seamlessly with the most common EMRs, CRMs, and HR solutions, or leverage our custom integration options"
          linkText="Explore Workforce Management Software"
          linkHref="/explore-workforce-management-software"
          imageUrl="/assets/images/integration.svg"
          imageFirstOnDesktop={true}
        />
       
      </div>
      <ImpactSection stats={stats} />
      <IconsSection />
      <SecurityFeaturesSection />
      <ManagedByAxleSection />
    </div>
  );
};

export default MainFeature;
