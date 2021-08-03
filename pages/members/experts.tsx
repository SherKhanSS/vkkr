import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { Document } from '../../components/Document';
import { SubTitle } from '../../components/SubTitle';
import { GET_EXPERTS_PAGE, documentsVars } from '../../components/Document/gql';
import { PaginationList, usePagination } from '../../components/PaginationList';
import { GetStaticProps } from 'next';
import { Document as DocumentType } from '../../generated/graphql';
import { getProps } from '../../utills';
import { getFormattedDocument } from '../../utills';

const Experts: FC = () => {
  const { activePage, actualData, getDataFromGql } = usePagination(
    GET_EXPERTS_PAGE,
    documentsVars
  );
  const totalDocuments = actualData?.documentsConnection.aggregate.count;
  const { title } = actualData.expertsPage;
  const { documents } = actualData?.expertsPage;

  return (
    <Layout title={title}>
      <SubTitle title="Документы" />
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
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return getProps(GET_EXPERTS_PAGE, documentsVars);
};

export default Experts;
