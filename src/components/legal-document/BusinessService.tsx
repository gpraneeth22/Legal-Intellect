"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const BusinessServiceAgreement = () => {
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
  const submitDocument = async () => {
    const req = {
      input_file: "Business-Services-Agreement-LawRato3[1].docx",
      data: formData,
    };
    const res = await fetch("/api/legal-document", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(req),
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "document.docx"); // Set the file name
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" w-[75%] bg-white border-2 border-spacing-2 border-gray-200 rounded-md p-8 my-10">
        <h1 className=" text-center text-2xl mb-2">
          DRAFT OF BUSINESS SERVICE AGREEMENT
        </h1>
        <p className=" space-y-2 space-x-1">
          AGREEMENT made at
          <Input
            className="inline-block w-60"
            value={formData["[1]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[1]": e.target.value })
            }
          />
          this
          <Input
            className="inline-block w-20"
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
            className="inline-block w-20"
            value={formData["[4]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[4]": e.target.value })
            }
          />
          BETWEEN
          <Input
            className="inline-block w-60"
            value={formData["[5]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[5]": e.target.value })
            }
          />
          situated at
          <Input
            className="inline-block w-60"
            value={formData["[6]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[6]": e.target.value })
            }
          />
          (hereinafter referred to as &quot;the Centre&quot;) of the One Part
          AND
          <Input
            className="inline-block w-60"
            value={formData["[7]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[7]": e.target.value })
            }
          />
          a Company incorporated under
          <Input
            className="inline-block w-60"
            value={formData["[8]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[8]": e.target.value })
            }
          />
          and having its corporate / registered office at
          <Input
            className="inline-block w-60"
            value={formData["[9]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[9]": e.target.value })
            }
          />
          a Company hereinafter called &quot;the Client&quot;) (which expression
          should include its successors and assigns) of the Other Part;
          <br />
          <br />
          AND WHEREAS the Centre is a member of
          <Input
            className="inline-block w-60"
            value={formData["[10]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[10]": e.target.value })
            }
          />
          Society, having its registered address at
          <Input
            className="inline-block w-60"
            value={formData["[11]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[11]": e.target.value })
            }
          />
          and hereinafter referred to as the &quot;said Society&quot; and is in
          possession, use and occupation of the premises
          <Input
            className="inline-block w-60"
            value={formData["[12]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[12]": e.target.value })
            }
          />
          hereinafter referred to as the &quot;said Premises&quot;.
          <br />
          <br />
          AND WHEREAS the Centre is carrying on the business of providing office
          services in the name and style of
          <Input
            className="inline-block w-60"
            value={formData["[13]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[13]": e.target.value })
            }
          />
          at the said premises
          <Input
            className="inline-block w-60"
            value={formData["[14]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[14]": e.target.value })
            }
          />
          and for that purpose has made arrangements to render office facilities
          and services to persons who require such facilities for their business
          temporarily and on contract; <br />
          <br />
          AND WHEREAS the client is carrying on the business of
          <Input
            className="inline-block w-60"
            value={formData["[15]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[15]": e.target.value })
            }
          />
          and is desirous of availing certain office facilities to enable it to
          more conveniently carry on its said business. <br />
          <br /> AND WHEREAS the Client has requested the Centre to grant to the
          Client such facilities; <br />
          <br /> AND WHEREAS Centre has agreed to grant the same on the terms
          and conditions mutually agreed upon; <br />
          <br /> AND WHEREAS the parties hereto are desirous of recording the
          said terms and conditions.
        </p>
        <br />
        <br />
        <p className=" space-y-2 space-x-1">
          NOW THIS AGREEMENT WITNESSETH AS UNDER: <br />
          <br /> 1. The Centre hereby agrees to grant to the Client certain
          office facilities in the said premises as set out herein to more
          conveniently carry on its said business in the name and style of{" "}
          <Input
            className="inline-block w-60"
            value={formData["[16]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[16]": e.target.value })
            }
          />{" "}
          and as incidental to such office services the Centre has permitted the
          Client to use until otherwise decided, a portion of the said premises
          and also to make available other ancillary office facilities,
          amenities, conveniences and services therein. <br />
          <br /> 2. The Centre has agreed to render the following services to
          the Client: <br />
          <br />
          I.to occupy and use a portion of the Business Centre at the said
          premises for itself, its bonafide employees and visitors, for the
          purpose of carrying on the client&apos;s said business <br />
          <br /> ii. To use furniture, fixtures and fittings provided in the
          said Centre. <br />
          <br /> iii. To avail of a peon&apos;s facility as may be reasonably
          required to attend to the needs of the Client, <br />
          <br /> iv. To avail the use of three telephone connections (two local
          and one with ISD facilities) in the Centre <br />
          <br /> v. To avail the use of air-conditioner in the Centre. <br />
          <br /> vi. Any further facilities which Centre at its discretion
          considers it necessary to provide to the Client.
        </p>
        <br />
        <br />
        <p className=" space-y-2 space-x-1">
          vii. It is hereby expressly agreed and declared that save as otherwise
          herein expressly provided, the office services to be provided under
          this agreement, the Centre may at it&apos;s sole discretion permit
          it&apos;s other clients to avail of or share in common any of the said
          office services hereby agreed to be provided. <br />
          <br /> 3. The Client further agrees and undertakes: <br />
          <br /> a. to take all reasonable and good care of the said Centre and
          furniture, fixtures and fittings therein as per separate list prepared
          and signed by the Centre and the Client) therein and not to cause any
          damage thereto or to any part thereof. To keep and maintain the
          fixtures and fittings in good order and condition, reasonable wear and
          tear or an act of God or for the reasons beyond the Control of the
          Client being excepted. In the event of any damage thereto or
          destruction thereof, save for reasons excepted as aforesaid, the
          Client shall at its own cost and expense immediately repair and/or
          replace the same or at the option of the Centre, the client pay the
          cost of such repair or replacement that may be carried out by the
          Centre. <br />
          <br /> b.to bring into the said Centre only office records and
          documents etc. but in any event no hazardous and inflammable items or
          things shall be brought into the office by the Client. <br />
          <br /> c. to use the said Centre only for commercial purpose as an
          office and in a lawful manner and in any event not to make any illegal
          use of the same and not to cause any disturbance, nuisance or
          annoyance to others in the said Centre <br />
          <br />. d. In the event of the Client making use of the aforesaid
          facilities for any purpose other than confide commercial office
          purposes and the same resulting in any civil or criminal action, the
          Client shall keep Centre fully indemnified of and from and against all
          arise there from. <br />
          <br /> e. not to allow or permit any outsiders to use the premises or
          any part thereof. <br />
          <br /> f. to remove all their articles, belongings and things lying in
          the said Centre on expiry of the term of the arrangement or in the
          event of prior termination, upon the date of termination. <br />
          <br /> g. to observe and perform all the rules, regulations and
          bye-laws of the said Society wherein the centre is situate, the client
          having made himself aware of all such rules, regulations and bye-laws
          and shall indemnify and keep indemnified the Centre against any loss
          or damage incurred by the Client for non-performance by the Client as
          aforesaid. <br />
          <br /> h. Not to do or suffer to be done anything in or around the
          said premises which is or is likely to cause prejudice to the rights
          and entitlements of the Centre as the member of the Society. <br />
          <br /> i. Not to make any structural or other alterations,
          modifications or additions in the said premises, except with the prior
          written consent of the Centre which shall not be unreasonably
          withheld. <br />
          <br /> j. Not to alter or change the original colour on the outer or
          inner wall of the said premises, except with the written consent of
          the Centre. <br />
          <br /> 4. The Centre agrees to: <br />
          <br /> a. Keep the said Centre clean and tidy and provide electricity.{" "}
          <br />
          <br /> b.Provide a common peon facility entirely at its own discretion
          as may reasonably be required to attend to the needs of the Client.{" "}
          <br />
          <br /> c..Provide access to the NOC of the Centre&apos;s three
          telephone connections of which one shall have STD facility.
        </p>
        <br />
        <br />
        <p className=" space-y-2 space-x-1">
          5. It is mutually agreed between the parties hereto as follows: <br />
          <br />
          a. The term of this arrangement shall be for three months, commencing
          from the date of this agreement and the same shall be renewable for a
          further like terms, for a total period of
          <Input
            className="inline-block w-60"
            value={formData["[17]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[17]": e.target.value })
            }
          />
          commencing from the
          <Input
            className="inline-block w-20"
            value={formData["[18]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[18]": e.target.value })
            }
          />
          day of
          <Input
            className="inline-block w-60"
            value={formData["[19]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[19]": e.target.value })
            }
          />
          and ending on
          <Input
            className="inline-block w-60"
            value={formData["[20]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[20]": e.target.value })
            }
          />
          Provided, however that the Centre may at its absolute discretion and
          without assigning any reason in that behalf refuse to grant any
          removal. <br />
          <br /> b. In consideration for the services to be rendered the Centre
          shall from time to time submit their Bill for quarterly Standard
          Services charges at the rate of Rs.
          <Input
            className="inline-block w-60"
            value={formData["[21]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[21]": e.target.value })
            }
          />
          /- (Rupees
          <Input
            className="inline-block w-60"
            value={formData["[22]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[22]": e.target.value })
            }
          />
          only) for the first four quarters, Rs.
          <Input
            className="inline-block w-60"
            value={formData["[23]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[23]": e.target.value })
            }
          />
          /- (Rupees
          <Input
            className="inline-block w-60"
            value={formData["[24]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[24]": e.target.value })
            }
          />
          only) for the next four quarters and Rs.
          <Input
            className="inline-block w-60"
            value={formData["[25]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[25]": e.target.value })
            }
          />
          /- (Rupees
          <Input
            className="inline-block w-60"
            value={formData["[26]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[26]": e.target.value })
            }
          />
          only) for the last four quarters. The Client shall also be liable to
          pay for the telephone rentals and the telephone calls made by the
          Client, electricity consumed by the Client and also other services
          specifically utilised by the Client on actual. These bills shall be
          paid by the Client within a week and in any event before demanding
          refund of the security deposit amount deposited by the Client with the
          Centre. <br />
          <br /> c. The arrangement herein is purely temporary and personal and
          not transferable under any circumstances and the Client shall not be
          entitled to assign or transfer the benefit of this arrangement to any
          other person/persons on any basis whatsoever. <br />
          <br /> d. No tenancy, leave and license or any other protected rights
          whatsoever permitting the Client or its employees to come upon and use
          the said premises or any part thereof is created or intended or sought
          to be created by these presents and the parties hereto shall not plead
          any oral variation to the provisions thereof. The variation if any
          hereto shall not be valid, binding upon or enforceable against the
          parties hereto unless the same are duly recorded in writing in the
          form of supplemental agreement signed by both the parties hereto.
        </p>
        <br />
        <br />
        <p className=" space-y-2 space-x-1">
          e. The Client shall be allowed to display its name board outside the
          premises at the place allotted by the Centre. <br />
          <br /> f. If the services charges/bills payable by the Client have
          been outstanding for
          <Input
            className="inline-block w-60"
            value={formData["[27]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[27]": e.target.value })
            }
          />
          from the date of receipt of the bill, the arrangement herein shall not
          be extended and thereupon on expiry of the two weeks, the Centre shall
          be entitled to prevent access to the Client and its employees in to
          the said premises and every part thereof and allow the Client one
          day&apos;s time to remove its belongings. In the event of the Client
          refusing or neglecting to remove its belonging from the said premises,
          the Centre shall be entitled to open the premises or any part thereof
          allotted to the said Client using the original key in their possession
          and in the presence of witness removes the articles and things therein
          after making a list thereof. It is expressly agreed that the Centre
          shall not render itself liable for any civil or criminal action by so
          doing. This authority retained by the Centre and expressly agreed to
          by the Client is irrevocable and constitutes the basis for this
          agreement and the Client shall not be entitled to dispute, challenge
          or call into question the validity or reasonableness of this
          provision. <br />
          <br /> g.Any delay or indulgence by the Centre in enforcing the terms
          and conditions of this Agreement or any forbearance or giving of time
          to the Client shall not be construed as a waiver on the part of the
          Centre of any breach or non-observation and or non- compliance of any
          of the terms and conditions of this Agreement by the Client nor shall
          it in any manner prejudice the rights of the Centre against the
          Client. <br />
          <br /> h. All letters, receipts, notices or communications issued by
          the Centre or the Client and dispatched by Registered Post with
          Acknowledgement due or delivered by Hand Delivery to the address on
          the record of the other will be sufficient proof of receipt thereof by
          the other and shall be an effectual discharge on the part of the party
          forwarding the same and the same shall be deemed to have been received
          by the other party on the normal expiry period under post. <br />
          <br /> i. The Centre shall not be responsible or liable for any:
        </p>
        <br />
        <br />
        <p className=" space-y-2 space-x-1">
          1. Theft, loss, damage or destruction of any property of the Client or
          any person living in or visiting the said premises or in the said
          building from any cause whatsoever. <br />
          <br />
          2. For any personal or other injury caused to the person for the time
          being in the said premises on any account. <br />
          <br />
          j. In the event of the Client committing any breach of the terms and
          conditions herein contained and failing within
          <Input
            className="inline-block w-60"
            value={formData["[28]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[28]": e.target.value })
            }
          />
          days of the receipt of a notice in writing in that behalf given by the
          Centre to remedy or make good such breach the Centre shall be entitled
          to forthwith revoke and or terminate the arrangement and/or the
          permission granted and in such an event the provisions of clause 5(g)
          of this Agreement shall apply mutatis mutandis. <br />
          <br />
          k. Each party shall bear and pay the fees of their respective legal
          representatives. <br />
          <br />
          6. As security for the due performance of the provisions hereof the
          Client shall deposit with Centre an interest free security deposit of
          a sum of Rs.
          <Input
            className="inline-block w-60"
            value={formData["[29]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[29]": e.target.value })
            }
          />
          /- (Rupees
          <Input
            className="inline-block w-60"
            value={formData["[30]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[30]": e.target.value })
            }
          />
          ). The said interest free security deposit, after deducting there from
          the amount of arrear or other dues if any from the Client shall be
          refunded by Centre to the Client without interest on the arrangement
          herein coming to an end, howsoever and when so ever, and upon the
          Client removing itself and all its belongings and things from the said
          premises. <br />
          <br />
          7. The Centre shall be at liberty to terminate this Agreement or any
          renewal thereof by giving the Client three months notice in writing
          stating therein its desire to do so and on the expiry of such notice,
          and on the client removing itself, it&apos;s employees and belongings
          from the said premises and otherwise performing it&apos;s obligation
          under this agreement the Centre shall refund to the Client the
          interest free security deposit amount as contained in clause 6.
        </p>
        <br />
        <br />
        <p className=" space-y-2 space-x-1">
          8. Upon the termination of this Agreement or sooner determination and
          upon the failure of the Client to remove itself, its employees and its
          belongings from the said premises. The Client shall be liable and
          hereby agrees to pay to the Centre liquidated damages of Rs.
          <Input
            className="inline-block w-60"
            value={formData["[31]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[31]": e.target.value })
            }
          />
          (Rupees
          <Input
            className="inline-block w-60"
            value={formData["[32]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[32]": e.target.value })
            }
          />
          only) and compensation and/or manse profits of Rs.
          <Input
            className="inline-block w-60"
            value={formData["[33]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[33]": e.target.value })
            }
          />
          (Rupees
          <Input
            className="inline-block w-60"
            value={formData["[34]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[34]": e.target.value })
            }
          />
          ) per day for the wrongful and unauthorised use of the said premises
          and the facilities provided therein. The Centre shall be entitled
          without prejudice to its other rights to forfeit the security deposit
          in the event of any breach on the part of the client. <br />
          <br /> 9. It is further agreed and declared between the parties hereto
          that the permission hereby granted by the Centre to the Client to use
          a portion of the said premises is incidental to the availing of office
          facilities, amenities and services provided by the Business Centre to
          the Client and the Client shall not be entitled to avail other
          facilities separately as the arrangement is composite, impartibly and
          indivisible. <br />
          <br /> 10. Any dispute between the parties hereto shall be referred to
          the sole arbitration of Mr
          <Input
            className="inline-block w-60"
            value={formData["[35]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[35]": e.target.value })
            }
          />
          . Having his / its office at
          <Input
            className="inline-block w-60"
            value={formData["[36]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[36]": e.target.value })
            }
          />
          and shall be subject to the provisions of the Arbitration and
          Conciliation Act, 1996.
        </p>
        <br />
        <br />
        <br />
        <p className=" space-y-2 space-x-1">
          IN WITNESS WHEREOF the parties hereto have hereunto set and subscribed
          their respective hands, the day and year first hereinabove written.
          SIGNED AND DELIVERED by
        </p>
        <br />
        <br />
        <p className=" space-y-2 space-x-1">
          <Input
            className="inline-block w-60"
            value={formData["[37]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[37]": e.target.value })
            }
          />
          <br />
          <br />
          as partner / proprietor of the Centre.) <br />
          <br /> in the presence of
          <Input
            className="inline-block w-60"
            value={formData["[38]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[38]": e.target.value })
            }
          />
          <br />
          <br />
          SIGNED AND DELIVERED by the )
          <br />
          <br />
          Within named
          <Input
            className="inline-block w-60"
            value={formData["[39]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[39]": e.target.value })
            }
          />
          <br />
          <br />
          in the presence of
          <Input
            className="inline-block w-60"
            value={formData["[40]"]}
            onChange={(e) =>
              setFormData({ ...formData, "[40]": e.target.value })
            }
          />
        </p>
      </div>
      <Button className=" mb-4" onClick={submitDocument}>
        Download
      </Button>
    </div>
  );
};
export default BusinessServiceAgreement;
