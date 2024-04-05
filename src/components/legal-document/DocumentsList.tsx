import {
  GanttChartSquare,
  IndianRupee,
  Receipt,
  Users,
  Building2,
  HeartHandshake,
  ShieldHalf,
} from "lucide-react";
import BusinessServiceAgreement from "./BusinessService";
import DeedofAdoption from "./DeedofAdoption";
import EmpServiceAgreement from "./EmpServiceAgreement";
import LoanAgreement from "./LoanAgreement";
import MoneyBond from "./MoneyBond";
import SecurityBond from "./SecurityBond";
import SeparationAgreement from "./SeparationAgreement";

type DocumentType = {
  id: string;
  title: string;
  filename: string;
  icon?: React.ReactNode;
  component: React.ReactNode;
};

export const Documents: DocumentType[] = [
  {
    id: "business-services-agreement",
    title: "Business Services Agreement",
    filename: "Business-Services-Agreement-LawRato3[1].docx",
    icon: <Building2 className=" h-5 w-5 mr-2 text-purple-700" />,
    component: <BusinessServiceAgreement />,
  },
  {
    id: "deed-of-adoption",
    title: "Deed of Adoption",
    filename: "Deed-of-Adoption-LawRato2[1].docx",
    icon: <HeartHandshake className=" h-5 w-5 mr-2 text-purple-700" />,
    component: <DeedofAdoption />,
  },
  {
    id: "employee-service-agreement",
    title: "Employee Service Agreement",
    filename: "Employee-Service-Agreement-LawRato4[1].docx",
    icon: <GanttChartSquare className=" h-5 w-5 mr-2 text-purple-700" />,
    component: <EmpServiceAgreement />,
  },
  {
    id: "loan-agreement",
    title: "Loan Agreement",
    filename: "Loan-Agreement-Lintellect.docx",
    icon: <Receipt className=" h-5 w-5 mr-2 text-purple-700" />,
    component: <LoanAgreement />,
  },
  {
    id: "money-bond",
    title: "Money Bond",
    filename: "Simple-Money-Bond-LawRato2[1].docx",
    icon: <IndianRupee className=" h-5 w-5 mr-2 text-purple-700" />,
    component: <MoneyBond />,
  },
  {
    id: "security-bond",
    title: "Security Bond",
    filename: "Security-Bond-by-a-Surety-LawRato2[1].docx",
    icon: <ShieldHalf className=" h-5 w-5 mr-2 text-purple-700" />,
    component: <SecurityBond />,
  },
  {
    id: "separation-agreement",
    title: "Separation Agreement(Divorce)",
    filename: "Separation-Agreement-between-Husband-and-Wife-LawRato2[1].docx",
    icon: <Users className=" h-5 w-5 mr-2 text-purple-700" />,
    component: <SeparationAgreement />,
  },
];
