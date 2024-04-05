"use client";

import { useState } from "react";
import { Input } from "../ui/input";

const SecurityBond = () => {
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
      <div className=" w-[75%] bg-white border-2 border-spacing-2 border-gray-200 rounded-md p-8 my-10">
        <h1 className=" text-center text-2xl">
          Draft for Security Bind with Surity
        </h1>
        <p>
          By this Bond Mr.
          <Input
            className="inline-block w-60"
            value={formData["[1]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[1]": e.target.value })
            }
          />
          residing at
          <Input
            className="inline-block w-60"
            value={formData["[2]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[2]": e.target.value })
            }
          />
          hereinafter referred to as the &apos;Surety&apos; acknowledges himself
          to be bound to Mr. B hereinafter referred to as the
          &apos;Creditor&apos; in the sum of Rs
          <Input
            className="inline-block w-20"
            value={formData["[3]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[3]": e.target.value })
            }
          />
          lent and advanced by the Creditor to Mr. C residing at
          <Input
            className="inline-block w-60"
            value={formData["[4]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[4]": e.target.value })
            }
          />
          the Debtor, with interest thereon at the rate of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[5]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[5]": e.target.value })
            }
          />
          percent per annum from the date hereof till payment. Whereas the
          Creditor has lent and advanced to Mr. C the Debtor above named a sum
          of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[6]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[6]": e.target.value })
            }
          />
          repayable by him with interest thereon at the rate of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[7]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[7]": e.target.value })
            }
          />
          per cent per annum. And Whereas the said amount has been advanced
          against the surety giving a guarantee for repayment of the said amount
          by the said Debtor and against the said guarantee being secured by a
          mortgage of the property of the Surety described in the Schedule
          hereunder written and which the Surety has at the request of the
          Debtor agreed to do. Now This Deed Witnesseth that in pursuance of the
          request made by the Debtor to the Surety the Surety doth hereby
          guarantee and covenant with the Creditor that in default of payment of
          the amount of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[8]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[8]": e.target.value })
            }
          />
          with interest as aforesaid by the Debtor to the Creditor within the
          time stipulated by him in the separate writing executed by the Debtor
          for evidencing the said Debt, in favour of the Creditor, the surety
          shall pay to the Creditor the said amount of Rs.
          <Input
            className="inline-block w-20"
            value={formData["[9]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[9]": e.target.value })
            }
          />
          or any part thereof remaining unpaid with interest at the rate of
          <Input
            className="inline-block w-20"
            value={formData["[10]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[10]": e.target.value })
            }
          />
          aforesaid till payment on demand made to the Creditor in writing.
        </p>
        <p>
          And This Deed Further Witnesseth that pursuant to the said agreement,
          the Surety as a security for payment of the said amount by the Surety,
          doth hereby grant and transfer by way of mortgage the said property
          described in the Schedule hereunder written TO HAVE and TO HOLD the
          same unto the Creditor subject to the covenant for redemption
          hereinafter contained And it is agreed and declared that in the event
          of the Surety being required to pay the said amount on default by the
          Debtor and on the surety so paying the said amount or any part thereof
          due and payable to the Creditor the Creditor shall release and recover
          the said property to the Surety but at the costs of the Surety And it
          is further agreed that in the event of the Surety becoming liable and
          failing to pay the said amount or any part thereof as aforesaid, the
          Creditor will be entitled to sell the said property through a Court of
          law and to appropriate or apply the net sale proceeds thereof towards
          payment of the amount to the Creditor by the Surety and/ or the Debtor
          including costs of the suit and sale proceedings and to pay the
          balance if any to the Surety. And the Surety covenants with the
          Creditor that he has full right to mortgage the said property as
          aforesaid. And the condition of the Bond is that it will be void if
          the Debtor pays the said amount to the Creditor with interest as
          aforesaid, within the time stipulated otherwise, and failing which
          this Bond will remain in full force and effect. The Schedule Above
          Referred To Signed and delivered by the Within-named Surety Mr.
          WITNESSES: 1. 2.
        </p>
      </div>
    </div>
  );
};
export default SecurityBond;
