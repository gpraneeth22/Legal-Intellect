"use client";

import { useState } from "react";
import { Input } from "../ui/input";

const EmpServiceAgreement = () => {
  const [formData, setFormData] = useState({
    "[1]": "",
    "[2]": "",
    "[3]": "",
    "[4]": "",
    "[5]": "",
    "[6]": "",
    "[7]": "",
    "[8]": "",
    "[9]": "",
    "[10]": "",
    "[11]": "",
    "[12]": "",
    "[13]": "",
    "[14]": "",
    "[15]": "",
    "[16]": "",
    "[17]": "",
    "[18]": "",
    "[19]": "",
    "[20]": "",
    "[21]": "",
    "[22]": "",
    "[23]": "",
    "[24]": "",
    "[25]": "",
    "[26]": "",
    "[27]": "",
    "[28]": "",
    "[29]": "",
    "[30]": "",
    "[31]": "",
    "[32]": "",
    "[33]": "",
    "[34]": "",
    "[35]": "",
    "[36]": "",
    "[37]": "",
    "[38]": "",
    "[39]": "",
    "[40]": "",
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-[75%] bg-white border-2 border-spacing-2 border-gray-200 rounded-md p-8 mt-10">
        <h1 className=" text-center text-2xl">
          DRAFT OF EMPLOYEE-SERVICE-AGREEMENT
        </h1>
        <p>
          THIS EMPLOYEE SERVICE AGREEMENT executed at
          <Input
            className="inline-block w-60"
            value={formData["[1]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[1]": e.target.value })
            }
          />
          on this the
          <Input
            className="inline-block w-60"
            value={formData["[2]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[2]": e.target.value })
            }
          />
          day of
          <Input
            className="inline-block w-60"
            value={formData["[3]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[3]": e.target.value })
            }
          />
          BETWEEN
          <Input
            className="inline-block w-60"
            value={formData["[4]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[4]": e.target.value })
            }
          />{" "}
          , a company incorporated under the Companies Act, 1956 or Companies
          Act, 2013, represented by it&apos;s
          <Input
            className="inline-block w-60"
            value={formData["[5]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[5]": e.target.value })
            }
          />{" "}
          Mr./Ms.
          <Input
            className="inline-block w-20"
            value={formData["[6]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[6]": e.target.value })
            }
          />{" "}
          , son of / wife of/ daughter of Mr.
          <Input
            className="inline-block w-60"
            value={formData["[7]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[7]": e.target.value })
            }
          />{" "}
          having it&apos;s registered office at
          <Input
            className="inline-block w-60"
            value={formData["[8]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[8]": e.target.value })
            }
          />{" "}
          , hereinafter referred to as the EMPLOYER (which expression shall,
          unless it is repugnant to the context, mean and include it&apos;s
          successors-in-interests, administrators and permitted assigns); AND
          Mr. /Ms.
          <Input
            className="inline-block w-20"
            value={formData["[9]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[9]": e.target.value })
            }
          />{" "}
          , son of / wife of/ daughter of Mr.
          <Input
            className="inline-block w-60"
            value={formData["[10]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[10]": e.target.value })
            }
          />{" "}
          , Indian,
          <Input
            className="inline-block w-60"
            value={formData["[11]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[11]": e.target.value })
            }
          />{" "}
          , aged about
          <Input
            className="inline-block w-20"
            value={formData["[12]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[12]": e.target.value })
            }
          />{" "}
          years, residing at
          <Input
            className="inline-block w-60"
            value={formData["[13]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[13]": e.target.value })
            }
          />{" "}
          , hereinafter referred to as the EMPLOYEE. WHEREAS The EMPLOYER is
          carrying on the business of
          <Input
            className="inline-block w-60"
            value={formData["[14]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[14]": e.target.value })
            }
          />
          . The EMPLOYER called for applications from the eligible candidates
          for the post
          <Input
            className="inline-block w-60"
            value={formData["[15]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[15]": e.target.value })
            }
          />
          and in response thereto an application-dated
          <Input
            className="inline-block w-60"
            value={formData["[16]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[16]": e.target.value })
            }
          />
          was forwarded by the EMPLOYEE to the EMPLOYER. On processing the
          application and the relevant documents, the EMPLOYER found the
          EMPLOYEE adequately qualified for the post and offered to appoint him
          as
          <Input
            className="inline-block w-60"
            value={formData["[17]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[17]": e.target.value })
            }
          />
          in the Company. The EMPLOYEE has accepted the said appointment on the
          terms and conditions herein after set out.
        </p>
        <p>
          NOW THEREFORE IN CONSIDERATION OF THE MUTUAL OBLIGATIONS AND
          UNDERTAKINGS CONTAINED HEREIN THIS AGREEMENT WITNESSETH AS FOLLOWS
          NAME OF THE POST: The said EMPLOYEE is hereby appointed as
          <Input
            className="inline-block w-60"
            value={formData["[18]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[18]": e.target.value })
            }
          />
          . PROBATION AND CONFIRMATION: The EMPLOYEE shall be on probation for a
          period of
          <Input
            className="inline-block w-20"
            value={formData["[19]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[19]": e.target.value })
            }
          />
          . The decision of the management on the performance of the EMPLOYEE
          during the period of probation is final and binding on the EMPLOYEE.
          DURATION OF EMPLOYMENT: On successful completion of probation, the
          EMPLOYEE shall be appointed as a permanent EMPLOYEE of the EMPLOYER
          for a period of
          <Input
            className="inline-block w-20"
            value={formData["[20]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[20]": e.target.value })
            }
          />
          . PLACE OF POSTING: The EMPLOYEE shall report to work at
          <Input
            className="inline-block w-60"
            value={formData["[21]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[21]": e.target.value })
            }
          />
          , on
          <Input
            className="inline-block w-20"
            value={formData["[22]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[22]": e.target.value })
            }
          />
          . HOURS OF WORK: The EMPLOYEE is required to work from
          <Input
            className="inline-block w-20"
            value={formData["[23]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[23]": e.target.value })
            }
          />
          to
          <Input
            className="inline-block w-20"
            value={formData["[24]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[24]": e.target.value })
            }
          />
          during the Weekdays. The weekly holiday would be on
          <Input
            className="inline-block w-20"
            value={formData["[25]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[25]": e.target.value })
            }
          />
          . REMUNERATION
        </p>
      </div>
      <div className=" w-[75%] bg-white border-2 border-spacing-2 border-gray-200 rounded-md p-8 my-10">
        <p>
          The EMPLOYER shall pay the EMPLOYEE a stipend of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[26]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[26]": e.target.value })
            }
          />
          /- during the period of probation. On successful completion of
          probation the EMPLOYER shall pay the EMPLOYEE a basic salary of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[27]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[27]": e.target.value })
            }
          />
          /-. The EMPLOYER shall increase the basic salary of the EMPLOYEE as
          per the policy of the EMPLOYER. PERQUISITES & HOLIDAYS: On
          confirmation, the EMPLOYEE shall be entitled to other benefits,
          monetary/leave, as is prevalent in the Company, from time to time, as
          per the
          <Input
            className="inline-block w-60"
            value={formData["[28]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[28]": e.target.value })
            }
          />
          . ARBITRATION: Any dispute arising under this Agreement or any matter
          incidental thereto, shall be submitted for arbitration as per the
          provisions of Arbitration and Conciliation Act, 1996. IN WITNESS
          WHEREOF the parties hereto affixed their signatures on the day, month
          and year mentioned herein above. SIGNATURE OF EMPLOYER SIGNATURE OF
          THE EMPLOYEE WITNESSES: 1. 2.
        </p>
      </div>
    </div>
  );
};
export default EmpServiceAgreement;
