"use client";

import { useState } from "react";
import { Input } from "../ui/input";

const SeparationAgreement = () => {
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
          Separation Agreement between Husband and Wife
        </h1>
        <p className=" mt-10">
          THIS AGREEMENT made at
          <Input
            className="inline-block w-60 mt-2"
            value={formData["[1]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[1]": e.target.value })
            }
          />
          on this
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
          20
          <Input
            className="inline-block w-10"
            value={formData["[4]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[4]": e.target.value })
            }
          />
          , between A, son of B, resident of
          <Input
            className="inline-block w-60"
            value={formData["[5]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[5]": e.target.value })
            }
          />
          (Hereinafter called the husband) of the ONE PART and Mrs. A his wife
          (hereinafter called the wife) of the OTHER PART.
          <br />
          WHEREAS the husband and wife are living separately due to differences
          and disputes having arisen between them;
          <br />
          AND WHEREAS they want to live separate, apart from each other and
          intend to live separate at all times hereafter unless there is any
          reconciliation.
        </p>
        <p>
          NOW THIS AGREEMENT WITNESSETH THAT: 1. The parties shall live
          separately and apart from each other and no party shall have any
          right, authority over the other or shall institute any legal
          proceeding for restitution of conjugal rights or otherwise. 2. The
          husband shall during the life time of the wife pay to her a sum of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[6]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[6]": e.target.value })
            }
          />
          p.m. for her maintenance and the maintenance of the children. However,
          if the wife does not lead a chaste life, the husband shall be entitled
          to stop the payment of maintenance allowance after giving her notice.
          3. The wife shall be entitled to the custody and guardianship of the
          children of the marriage, namely C and D now aged
          <Input
            className="inline-block w-10"
            value={formData["[7]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[7]": e.target.value })
            }
          />
          Years and
          <Input
            className="inline-block w-10"
            value={formData["[8]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[8]": e.target.value })
            }
          />
          years, respectively. The wife shall maintain and educate the said
          children until they shall respectively attain the age of majority. The
          husband shall not be liable for any claim or demands of the children
          and the wife shall keep the husband indemnified from and against all
          claims and demands in respect of such children. 4. The wife shall pay
          for and discharge all liabilities or debts incurred by her after the
          date of these presents, whether for maintenance, support or otherwise
          and the husband shall not be liable for the same. The wife indemnifies
          and keeps indemnified the husband against all claims, actions and
          demands on that account and if the husband has to pay any sum on
          account of the liabilities of debts incurred by the wife, he is
          entitled to deduct the same from the amount payable to the wife under
          this agreement. 5. The wife may remove all her wearing apparel,
          jewellery and other personal effects, etc. belonging to her from the
          husbands place and retain the said goods as her separate properly. 6.
          The husband may have the access to the children at every Sunday
          between
          <Input
            className="inline-block w-10"
            value={formData["[9]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[9]": e.target.value })
            }
          />
          A.M. to
          <Input
            className="inline-block w-10"
            value={formData["[10]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[10]": e.target.value })
            }
          />
          P.M. He may have the sole society of the children in the said timings
          on the said day. 7. Notwithstanding anything contained in this
          agreement, it is expressly agreed that if at any time hereafter, the
          parties live together as husband and wife with mutual consent, then in
          that case, the said sum payable to the wife-under this agreement shall
          no longer be payable and the agreements hereinabove contained shall
          become void. 8. This agreement shall be revoked by the death of either
          the husband or wife.
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
export default SeparationAgreement;
