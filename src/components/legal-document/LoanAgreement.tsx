"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LoanAgreement = () => {
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
        <h1 className=" text-center text-2xl">DRAFT OF LOAN AGREEMENT</h1>
        <p className="mt-10">
          LOAN AGREEMENT BETWEEN
          <br />
          <br />
          <Input
            className="w-60"
            value={formData["[1]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[1]": e.target.value })
            }
          />
          <br />
          AND
          <br />
          <br />
          <Input
            className="w-60"
            value={formData["[2]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[2]": e.target.value })
            }
          />
        </p>
        <br />
        <p>
          THIS AGREEMENT made and entered into at{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[3]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[3]": e.target.value })
            }
          />{" "}
          this{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[4]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[4]": e.target.value })
            }
          />{" "}
          day of{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[5]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[5]": e.target.value })
            }
          />
          ,{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[6]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[6]": e.target.value })
            }
          />{" "}
          BETWEEN{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[7]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[7]": e.target.value })
            }
          />{" "}
          hereinafter called the Lender AND{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[8]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[8]": e.target.value })
            }
          />{" "}
          hereinafter called the Borrower and reference to the parties hereto
          shall mean and include their respective heirs, executors,
          administrators and assigns;
        </p>
        <br />
        <p>
          WHEREAS the Borrower is in need of funds and hence has approached the
          Lender to grant her an interest-free loan of Rs.
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[9]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[9]": e.target.value })
            }
          />
          /- (Rupees{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[10]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[10]": e.target.value })
            }
          />{" "}
          only) for a period of{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[11]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[11]": e.target.value })
            }
          />
        </p>
        <br />
        <p>
          AND WHEREAS the Lender has agreed to grant a loan to the Borrower,
          free of interest, as the Lender and the Borrower have known each other
          since several years;
          <br />
          <br />
          AND WHEREAS the parties hereto are desirous of recording the terms and
          conditions of this loan in writing;
          <br />
          <br />
          NOW THIS AGREEMENT WITNESSETH and it is hereby agreed by and between
          the parties hereto as under:
        </p>
        <p>
          1. The Borrower hereto, being in need of money, has requested the
          Lender to give her an interest-free loan of Rs.
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[12]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[12]": e.target.value })
            }
          />
          /- (Rupees{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[13]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[13]": e.target.value })
            }
          />{" "}
          only) to enable her to purchase a residential flat, to which the
          Lender has agreed.
          <br />
          <br />
          2. The said loan is required by the Borrower for a period of
          <Input
            className="inline-block w-10 mt-2"
            value={formData["[14]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[14]": e.target.value })
            }
          />{" "}
          years, commencing from{" "}
          <Input
            className="inline-block w-10 mt-2"
            value={formData["[15]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[15]": e.target.value })
            }
          />
          /
          <Input
            className="inline-block w-10 mt-2"
            value={formData["[16]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[16]": e.target.value })
            }
          />
          /
          <Input
            className="inline-block w-10 mt-2"
            value={formData["[17]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[17]": e.target.value })
            }
          />{" "}
          and terminating on
          <br />
          <Input
            className="inline-block w-10 mt-2"
            value={formData["[18]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[18]": e.target.value })
            }
          />
          /
          <Input
            className="inline-block w-10 mt-2"
            value={formData["[19]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[19]": e.target.value })
            }
          />
          /
          <Input
            className="inline-block w-10 mt-2"
            value={formData["[20]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[20]": e.target.value })
            }
          />
          .
        </p>
      </div>

      <div className="w-[75%] bg-white border-2 border-spacing-2 border-gray-200 rounded-md p-8 my-10">
        <p>
          3. The Borrower hereby agrees and undertakes to return the loan of Rs.
          <Input
            className="inline-block w-20 mt-2"
            value={formData["[21]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[21]": e.target.value })
            }
          />
          /- (Rupees{" "}
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[22]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[22]": e.target.value })
            }
          />{" "}
          only), in instalments, within the aforesaid period of{" "}
          <Input
            className="inline-block w-10 mt-2"
            value={formData["[23]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[23]": e.target.value })
            }
          />{" "}
          years and gives her personal guarantee for the same.
          <br />
          <br />
          4. The terms and conditions of this Agreement are arrived at by the
          mutual consent of the parties hereto.
          <br />
          <br />
          IN WITNESS WHEREOF the parties hereto have hereunto set and subscribed
          their respective hands the day and year first hereinabove written.
          <br />
          <br />
          SIGNED AND DELIVERED by the Within-
          <br />
          named Lender in the presence of
          <br />
          <br />
          SIGNED AND DELIVERED by the Within-
          <br />
          named Borrower in the presence of
        </p>
      </div>

      <Button onClick={() => console.log(formData)}>Submit</Button>
    </div>
  );
};
export default LoanAgreement;
