import { FC } from 'react';
import { Layout } from '../components/Layout';
import { GET_DOCUMENTS_PAGE, documentsVars } from '../components/Document/gql';
import { GetStaticProps } from 'next';
import { Document } from '../components/Document';
import { PaginationList, usePagination } from '../components/PaginationList';
import { getFormattedDocument } from '../utills';
import { SubTitle } from '../components/SubTitle';
import { Banner } from '../components/Banner';
import { Document as DocumentType } from '../generated/graphql';
import { getProps } from '../utills';

const Documents: FC = () => {
  const { activePage, actualData, getDataFromGql } = usePagination(
    GET_DOCUMENTS_PAGE,
    documentsVars
  );
  const totalDocuments = actualData?.documentsConnection.aggregate.count;
  const { title, bannerText, bannerLink, documents } =
    actualData?.documentsPage;

  return (
    <Layout title={title}>
      {documents &&
        documents.map((document: DocumentType) => {
          return (
            <Document
              document={getFormattedDocument(document)}
              key={document.id}
            />
          );
        })}
      <PaginationList
        activePage={activePage}
        setActivePage={(count: number) => {
          getDataFromGql(count);
        }}
        totalItemsCount={totalDocuments}
      />
      <SubTitle title="Символика конкурса" />
      <Banner bannerText={bannerText} bannerLink={bannerLink} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return getProps(GET_DOCUMENTS_PAGE, documentsVars);
};

export default Documents;
