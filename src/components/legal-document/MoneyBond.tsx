"use client";

import { useState } from "react";
import { Input } from "../ui/input";

const MoneyBond = () => {
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
        <h1 className=" text-center text-2xl">DRAFT OF SIMPLE MONEY BOND</h1>
        <p>
          I, X, son of
          <Input
            className="inline-block w-60"
            value={formData["[1]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[1]": e.target.value })
            }
          />
          resident of
          <Input
            className="inline-block w-60"
            value={formData["[2]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[2]": e.target.value })
            }
          />
          confirm that I am indebted to Y son of
          <Input
            className="inline-block w-60"
            value={formData["[3]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[3]": e.target.value })
            }
          />
          resident of
          <Input
            className="inline-block w-60"
            value={formData["[4]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[4]": e.target.value })
            }
          />
          to the extent of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[5]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[5]": e.target.value })
            }
          />
          ( Rupees
          <Input
            className="inline-block w-60"
            value={formData["[6]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[6]": e.target.value })
            }
          />
          ) on account of the price of
          <Input
            className="inline-block w-60"
            value={formData["[7]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[7]": e.target.value })
            }
          />
          purchased by me from the said Y and I hereby agree and covenant to pay
          the said sum on demand of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[8]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[8]": e.target.value })
            }
          />
          with interest at the rate of percent per annum to Y. Date:
          <Input
            className="inline-block w-20"
            value={formData["[10]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[10]": e.target.value })
            }
          />
          WITNESSES 1. 2. Signature
        </p>
      </div>
      <div className=" w-[75%] bg-white border-2 border-spacing-2 border-gray-200 rounded-md p-8 my-10">
        <p>
          9. This agreement shall be executed in duplicate. The original shall
          be retained by the husband and duplicate by the wife. IN WITNESS
          WHEREOF, the parties have set their respective hands to these presents
          and a duplicate hereof on the day and year first hereinabove written.
          Signed and delivered by the within named husband Mr. A. Signed and
          delivered by the within named wife Mrs. C WITNESSES; 1. 2.
        </p>
      </div>
    </div>
  );
};
export default MoneyBond;
