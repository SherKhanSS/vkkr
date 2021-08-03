import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type About = {
  __typename?: 'About';
  content?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  tasks?: Maybe<Array<Maybe<ComponentUlTasks>>>;
  tasksTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type AboutInput = {
  content?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  tasks?: Maybe<Array<Maybe<ComponentUlTaskInput>>>;
  tasksTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type ComponentLayoutNavBar = {
  __typename?: 'ComponentLayoutNavBar';
  id: Scalars['ID'];
  menuLinkList?: Maybe<Array<Maybe<ComponentLinksMenuLink>>>;
};

export type ComponentLayoutNavBarInput = {
  menuLinkList?: Maybe<Array<Maybe<ComponentLinksMenuLinkInput>>>;
};

export type ComponentLinksMenuLink = {
  __typename?: 'ComponentLinksMenuLink';
  id: Scalars['ID'];
  subMenu?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentLinksMenuLinkInput = {
  subMenu?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ComponentUlTaskInput = {
  value?: Maybe<Scalars['String']>;
};

export type ComponentUlTasks = {
  __typename?: 'ComponentUlTasks';
  id: Scalars['ID'];
  value?: Maybe<Scalars['String']>;
};

export type CoordinatorsPage = {
  __typename?: 'CoordinatorsPage';
  created_at: Scalars['DateTime'];
  documents?: Maybe<Array<Maybe<Document>>>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type CoordinatorsPageDocumentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CoordinatorsPageInput = {
  created_by?: Maybe<Scalars['ID']>;
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type Document = {
  __typename?: 'Document';
  category: Enum_Document_Category;
  created_at: Scalars['DateTime'];
  file?: Maybe<UploadFile>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type DocumentAggregator = {
  __typename?: 'DocumentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DocumentConnection = {
  __typename?: 'DocumentConnection';
  aggregate?: Maybe<DocumentAggregator>;
  groupBy?: Maybe<DocumentGroupBy>;
  values?: Maybe<Array<Maybe<Document>>>;
};

export type DocumentConnectionCategory = {
  __typename?: 'DocumentConnectionCategory';
  connection?: Maybe<DocumentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DocumentConnectionCreated_At = {
  __typename?: 'DocumentConnectionCreated_at';
  connection?: Maybe<DocumentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DocumentConnectionFile = {
  __typename?: 'DocumentConnectionFile';
  connection?: Maybe<DocumentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DocumentConnectionId = {
  __typename?: 'DocumentConnectionId';
  connection?: Maybe<DocumentConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DocumentConnectionPublished_At = {
  __typename?: 'DocumentConnectionPublished_at';
  connection?: Maybe<DocumentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DocumentConnectionTitle = {
  __typename?: 'DocumentConnectionTitle';
  connection?: Maybe<DocumentConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DocumentConnectionUpdated_At = {
  __typename?: 'DocumentConnectionUpdated_at';
  connection?: Maybe<DocumentConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DocumentGroupBy = {
  __typename?: 'DocumentGroupBy';
  category?: Maybe<Array<Maybe<DocumentConnectionCategory>>>;
  created_at?: Maybe<Array<Maybe<DocumentConnectionCreated_At>>>;
  file?: Maybe<Array<Maybe<DocumentConnectionFile>>>;
  id?: Maybe<Array<Maybe<DocumentConnectionId>>>;
  published_at?: Maybe<Array<Maybe<DocumentConnectionPublished_At>>>;
  title?: Maybe<Array<Maybe<DocumentConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<DocumentConnectionUpdated_At>>>;
};

export type DocumentInput = {
  category: Enum_Document_Category;
  created_by?: Maybe<Scalars['ID']>;
  file?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DocumentsPage = {
  __typename?: 'DocumentsPage';
  bannerLink: Scalars['String'];
  bannerText: Scalars['String'];
  created_at: Scalars['DateTime'];
  documents?: Maybe<Array<Maybe<Document>>>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type DocumentsPageDocumentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type DocumentsPageInput = {
  bannerLink: Scalars['String'];
  bannerText: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum Enum_Document_Category {
  Coordinators = 'coordinators',
  Experts = 'experts',
  General = 'general',
  Participants = 'participants',
}

export type ExpertsPage = {
  __typename?: 'ExpertsPage';
  created_at: Scalars['DateTime'];
  documents?: Maybe<Array<Maybe<Document>>>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type ExpertsPageDocumentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ExpertsPageInput = {
  created_by?: Maybe<Scalars['ID']>;
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type General = {
  __typename?: 'General';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  navBar?: Maybe<ComponentLayoutNavBar>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type GeneralInput = {
  created_by?: Maybe<Scalars['ID']>;
  navBar?: Maybe<ComponentLayoutNavBarInput>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Morph =
  | About
  | ComponentLayoutNavBar
  | ComponentLinksMenuLink
  | ComponentUlTasks
  | CoordinatorsPage
  | Document
  | DocumentAggregator
  | DocumentConnection
  | DocumentConnectionCategory
  | DocumentConnectionCreated_At
  | DocumentConnectionFile
  | DocumentConnectionId
  | DocumentConnectionPublished_At
  | DocumentConnectionTitle
  | DocumentConnectionUpdated_At
  | DocumentGroupBy
  | DocumentsPage
  | ExpertsPage
  | General
  | I18NLocale
  | New
  | NewAggregator
  | NewConnection
  | NewConnectionCreated_At
  | NewConnectionId
  | NewConnectionPublished_At
  | NewConnectionRichContent
  | NewConnectionTitle
  | NewConnectionUpdated_At
  | NewGroupBy
  | Page
  | PageAggregator
  | PageConnection
  | PageConnectionCreated_At
  | PageConnectionId
  | PageConnectionPublished_At
  | PageConnectionTitle
  | PageConnectionUpdated_At
  | PageConnectionUrl
  | PageGroupBy
  | ParticipantsPage
  | UploadFile
  | UploadFileAggregator
  | UploadFileAggregatorAvg
  | UploadFileAggregatorMax
  | UploadFileAggregatorMin
  | UploadFileAggregatorSum
  | UploadFileConnection
  | UploadFileConnectionAlternativeText
  | UploadFileConnectionCaption
  | UploadFileConnectionCreated_At
  | UploadFileConnectionExt
  | UploadFileConnectionFormats
  | UploadFileConnectionHash
  | UploadFileConnectionHeight
  | UploadFileConnectionId
  | UploadFileConnectionMime
  | UploadFileConnectionName
  | UploadFileConnectionPreviewUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_Metadata
  | UploadFileConnectionSize
  | UploadFileConnectionUpdated_At
  | UploadFileConnectionUrl
  | UploadFileConnectionWidth
  | UploadFileGroupBy
  | UserPermissionsPasswordPayload
  | UsersPermissionsLoginPayload
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsUser
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserConnection
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionCreated_At
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnectionUpdated_At
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserGroupBy
  | CreateDocumentPayload
  | CreateNewPayload
  | CreatePagePayload
  | CreateRolePayload
  | CreateUserPayload
  | DeleteAboutPayload
  | DeleteCoordinatorsPagePayload
  | DeleteDocumentPayload
  | DeleteDocumentsPagePayload
  | DeleteExpertsPagePayload
  | DeleteFilePayload
  | DeleteGeneralPayload
  | DeleteNewPayload
  | DeletePagePayload
  | DeleteParticipantsPagePayload
  | DeleteRolePayload
  | DeleteUserPayload
  | UpdateAboutPayload
  | UpdateCoordinatorsPagePayload
  | UpdateDocumentPayload
  | UpdateDocumentsPagePayload
  | UpdateExpertsPagePayload
  | UpdateGeneralPayload
  | UpdateNewPayload
  | UpdatePagePayload
  | UpdateParticipantsPagePayload
  | UpdateRolePayload
  | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createDocument?: Maybe<CreateDocumentPayload>;
  createNew?: Maybe<CreateNewPayload>;
  createPage?: Maybe<CreatePagePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteAbout?: Maybe<DeleteAboutPayload>;
  deleteCoordinatorsPage?: Maybe<DeleteCoordinatorsPagePayload>;
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  deleteDocumentsPage?: Maybe<DeleteDocumentsPagePayload>;
  deleteExpertsPage?: Maybe<DeleteExpertsPagePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteGeneral?: Maybe<DeleteGeneralPayload>;
  deleteNew?: Maybe<DeleteNewPayload>;
  deletePage?: Maybe<DeletePagePayload>;
  deleteParticipantsPage?: Maybe<DeleteParticipantsPagePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<UpdateAboutPayload>;
  updateCoordinatorsPage?: Maybe<UpdateCoordinatorsPagePayload>;
  updateDocument?: Maybe<UpdateDocumentPayload>;
  updateDocumentsPage?: Maybe<UpdateDocumentsPagePayload>;
  updateExpertsPage?: Maybe<UpdateExpertsPagePayload>;
  updateFileInfo: UploadFile;
  updateGeneral?: Maybe<UpdateGeneralPayload>;
  updateNew?: Maybe<UpdateNewPayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  updateParticipantsPage?: Maybe<UpdateParticipantsPagePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};

export type MutationCreateDocumentArgs = {
  input?: Maybe<CreateDocumentInput>;
};

export type MutationCreateNewArgs = {
  input?: Maybe<CreateNewInput>;
};

export type MutationCreatePageArgs = {
  input?: Maybe<CreatePageInput>;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationDeleteDocumentArgs = {
  input?: Maybe<DeleteDocumentInput>;
};

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};

export type MutationDeleteNewArgs = {
  input?: Maybe<DeleteNewInput>;
};

export type MutationDeletePageArgs = {
  input?: Maybe<DeletePageInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};

export type MutationUpdateAboutArgs = {
  input?: Maybe<UpdateAboutInput>;
};

export type MutationUpdateCoordinatorsPageArgs = {
  input?: Maybe<UpdateCoordinatorsPageInput>;
};

export type MutationUpdateDocumentArgs = {
  input?: Maybe<UpdateDocumentInput>;
};

export type MutationUpdateDocumentsPageArgs = {
  input?: Maybe<UpdateDocumentsPageInput>;
};

export type MutationUpdateExpertsPageArgs = {
  input?: Maybe<UpdateExpertsPageInput>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};

export type MutationUpdateGeneralArgs = {
  input?: Maybe<UpdateGeneralInput>;
};

export type MutationUpdateNewArgs = {
  input?: Maybe<UpdateNewInput>;
};

export type MutationUpdatePageArgs = {
  input?: Maybe<UpdatePageInput>;
};

export type MutationUpdateParticipantsPageArgs = {
  input?: Maybe<UpdateParticipantsPageInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type New = {
  __typename?: 'New';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  richContent?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type NewAggregator = {
  __typename?: 'NewAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type NewConnection = {
  __typename?: 'NewConnection';
  aggregate?: Maybe<NewAggregator>;
  groupBy?: Maybe<NewGroupBy>;
  values?: Maybe<Array<Maybe<New>>>;
};

export type NewConnectionCreated_At = {
  __typename?: 'NewConnectionCreated_at';
  connection?: Maybe<NewConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NewConnectionId = {
  __typename?: 'NewConnectionId';
  connection?: Maybe<NewConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type NewConnectionPublished_At = {
  __typename?: 'NewConnectionPublished_at';
  connection?: Maybe<NewConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NewConnectionRichContent = {
  __typename?: 'NewConnectionRichContent';
  connection?: Maybe<NewConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NewConnectionTitle = {
  __typename?: 'NewConnectionTitle';
  connection?: Maybe<NewConnection>;
  key?: Maybe<Scalars['String']>;
};

export type NewConnectionUpdated_At = {
  __typename?: 'NewConnectionUpdated_at';
  connection?: Maybe<NewConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type NewGroupBy = {
  __typename?: 'NewGroupBy';
  created_at?: Maybe<Array<Maybe<NewConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<NewConnectionId>>>;
  published_at?: Maybe<Array<Maybe<NewConnectionPublished_At>>>;
  richContent?: Maybe<Array<Maybe<NewConnectionRichContent>>>;
  title?: Maybe<Array<Maybe<NewConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<NewConnectionUpdated_At>>>;
};

export type NewInput = {
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  richContent?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type Page = {
  __typename?: 'Page';
  Title?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type PageAggregator = {
  __typename?: 'PageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate?: Maybe<PageAggregator>;
  groupBy?: Maybe<PageGroupBy>;
  values?: Maybe<Array<Maybe<Page>>>;
};

export type PageConnectionCreated_At = {
  __typename?: 'PageConnectionCreated_at';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PageConnectionId = {
  __typename?: 'PageConnectionId';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type PageConnectionPublished_At = {
  __typename?: 'PageConnectionPublished_at';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PageConnectionTitle = {
  __typename?: 'PageConnectionTitle';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PageConnectionUpdated_At = {
  __typename?: 'PageConnectionUpdated_at';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type PageConnectionUrl = {
  __typename?: 'PageConnectionUrl';
  connection?: Maybe<PageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type PageGroupBy = {
  __typename?: 'PageGroupBy';
  Title?: Maybe<Array<Maybe<PageConnectionTitle>>>;
  Url?: Maybe<Array<Maybe<PageConnectionUrl>>>;
  created_at?: Maybe<Array<Maybe<PageConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<PageConnectionId>>>;
  published_at?: Maybe<Array<Maybe<PageConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<PageConnectionUpdated_At>>>;
};

export type PageInput = {
  Title?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ParticipantsPage = {
  __typename?: 'ParticipantsPage';
  created_at: Scalars['DateTime'];
  documents?: Maybe<Array<Maybe<Document>>>;
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type ParticipantsPageDocumentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ParticipantsPageInput = {
  created_by?: Maybe<Scalars['ID']>;
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<About>;
  coordinatorsPage?: Maybe<CoordinatorsPage>;
  document?: Maybe<Document>;
  documents?: Maybe<Array<Maybe<Document>>>;
  documentsConnection?: Maybe<DocumentConnection>;
  documentsPage?: Maybe<DocumentsPage>;
  expertsPage?: Maybe<ExpertsPage>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  general?: Maybe<General>;
  me?: Maybe<UsersPermissionsMe>;
  new?: Maybe<New>;
  news?: Maybe<Array<Maybe<New>>>;
  newsConnection?: Maybe<NewConnection>;
  page?: Maybe<Page>;
  pages?: Maybe<Array<Maybe<Page>>>;
  pagesConnection?: Maybe<PageConnection>;
  participantsPage?: Maybe<ParticipantsPage>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};

export type QueryAboutArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryCoordinatorsPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryDocumentArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryDocumentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryDocumentsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryDocumentsPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryExpertsPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryGeneralArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryNewArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryNewsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryNewsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryPagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryPagesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryParticipantsPageArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<
    Array<Maybe<UploadFileConnectionProvider_Metadata>>
  >;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateDocumentInput = {
  data?: Maybe<DocumentInput>;
};

export type CreateDocumentPayload = {
  __typename?: 'createDocumentPayload';
  document?: Maybe<Document>;
};

export type CreateNewInput = {
  data?: Maybe<NewInput>;
};

export type CreateNewPayload = {
  __typename?: 'createNewPayload';
  new?: Maybe<New>;
};

export type CreatePageInput = {
  data?: Maybe<PageInput>;
};

export type CreatePagePayload = {
  __typename?: 'createPagePayload';
  page?: Maybe<Page>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteAboutPayload = {
  __typename?: 'deleteAboutPayload';
  about?: Maybe<About>;
};

export type DeleteCoordinatorsPagePayload = {
  __typename?: 'deleteCoordinatorsPagePayload';
  coordinatorsPage?: Maybe<CoordinatorsPage>;
};

export type DeleteDocumentInput = {
  where?: Maybe<InputId>;
};

export type DeleteDocumentPayload = {
  __typename?: 'deleteDocumentPayload';
  document?: Maybe<Document>;
};

export type DeleteDocumentsPagePayload = {
  __typename?: 'deleteDocumentsPagePayload';
  documentsPage?: Maybe<DocumentsPage>;
};

export type DeleteExpertsPagePayload = {
  __typename?: 'deleteExpertsPagePayload';
  expertsPage?: Maybe<ExpertsPage>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteGeneralPayload = {
  __typename?: 'deleteGeneralPayload';
  general?: Maybe<General>;
};

export type DeleteNewInput = {
  where?: Maybe<InputId>;
};

export type DeleteNewPayload = {
  __typename?: 'deleteNewPayload';
  new?: Maybe<New>;
};

export type DeletePageInput = {
  where?: Maybe<InputId>;
};

export type DeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<Page>;
};

export type DeleteParticipantsPagePayload = {
  __typename?: 'deleteParticipantsPagePayload';
  participantsPage?: Maybe<ParticipantsPage>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditAboutInput = {
  content?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  tasks?: Maybe<Array<Maybe<EditComponentUlTaskInput>>>;
  tasksTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentLayoutNavBarInput = {
  id?: Maybe<Scalars['ID']>;
  menuLinkList?: Maybe<Array<Maybe<EditComponentLinksMenuLinkInput>>>;
};

export type EditComponentLinksMenuLinkInput = {
  id?: Maybe<Scalars['ID']>;
  subMenu?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type EditComponentUlTaskInput = {
  id?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type EditCoordinatorsPageInput = {
  created_by?: Maybe<Scalars['ID']>;
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDocumentInput = {
  category?: Maybe<Enum_Document_Category>;
  created_by?: Maybe<Scalars['ID']>;
  file?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditDocumentsPageInput = {
  bannerLink?: Maybe<Scalars['String']>;
  bannerText?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditExpertsPageInput = {
  created_by?: Maybe<Scalars['ID']>;
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EditGeneralInput = {
  created_by?: Maybe<Scalars['ID']>;
  navBar?: Maybe<EditComponentLayoutNavBarInput>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditNewInput = {
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  richContent?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPageInput = {
  Title?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditParticipantsPageInput = {
  created_by?: Maybe<Scalars['ID']>;
  documents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateAboutInput = {
  data?: Maybe<EditAboutInput>;
};

export type UpdateAboutPayload = {
  __typename?: 'updateAboutPayload';
  about?: Maybe<About>;
};

export type UpdateCoordinatorsPageInput = {
  data?: Maybe<EditCoordinatorsPageInput>;
};

export type UpdateCoordinatorsPagePayload = {
  __typename?: 'updateCoordinatorsPagePayload';
  coordinatorsPage?: Maybe<CoordinatorsPage>;
};

export type UpdateDocumentInput = {
  data?: Maybe<EditDocumentInput>;
  where?: Maybe<InputId>;
};

export type UpdateDocumentPayload = {
  __typename?: 'updateDocumentPayload';
  document?: Maybe<Document>;
};

export type UpdateDocumentsPageInput = {
  data?: Maybe<EditDocumentsPageInput>;
};

export type UpdateDocumentsPagePayload = {
  __typename?: 'updateDocumentsPagePayload';
  documentsPage?: Maybe<DocumentsPage>;
};

export type UpdateExpertsPageInput = {
  data?: Maybe<EditExpertsPageInput>;
};

export type UpdateExpertsPagePayload = {
  __typename?: 'updateExpertsPagePayload';
  expertsPage?: Maybe<ExpertsPage>;
};

export type UpdateGeneralInput = {
  data?: Maybe<EditGeneralInput>;
};

export type UpdateGeneralPayload = {
  __typename?: 'updateGeneralPayload';
  general?: Maybe<General>;
};

export type UpdateNewInput = {
  data?: Maybe<EditNewInput>;
  where?: Maybe<InputId>;
};

export type UpdateNewPayload = {
  __typename?: 'updateNewPayload';
  new?: Maybe<New>;
};

export type UpdatePageInput = {
  data?: Maybe<EditPageInput>;
  where?: Maybe<InputId>;
};

export type UpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<Page>;
};

export type UpdateParticipantsPageInput = {
  data?: Maybe<EditParticipantsPageInput>;
};

export type UpdateParticipantsPagePayload = {
  __typename?: 'updateParticipantsPagePayload';
  participantsPage?: Maybe<ParticipantsPage>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};
