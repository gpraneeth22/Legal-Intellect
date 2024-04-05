import { Documents } from "@/components/legal-document/DocumentsList";

interface LegalDocumentsPageProps {
  params: { docId: string };
}

const LegalDocumentsPage = async ({ params }: LegalDocumentsPageProps) => {
  const { docId } = params;
  var DocTitle = "";
  Documents.forEach((doc) => {
    if (doc.id === docId) {
      DocTitle = doc.title;
    }
  });
  return (
    <div className=" container mt-10">
      <h1 className=" text-6xl font-semibold text-purple-800">{DocTitle}</h1>
      <div className="mt-10">
        {Documents.map((doc) => {
          return <div key={doc.id}>{docId === doc.id && doc.component}</div>;
        })}
      </div>
    </div>
  );
};

export default LegalDocumentsPage;
