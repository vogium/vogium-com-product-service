export const COLLECTION_NAMES = {
  PRODUCT_COLLECTION: 'products',
};

export const FIREBASE_ERROR_MESSAGES = {
  PRODUCT_NOT_FOUND: 'Product not found',
  MULTIPLE_ACCOUNT: 'Multiple product found',
  UNAUTHORIZED: 'Unauthorized access',
  UNEXPECTED_ERROR: 'An unexpected error occurred',
} as const;

export const LOCAL_RETURN_QUERY_TYPES = {
  MULTIPLE_RECORDS: 'multiple',
  SINGLE_RECORD: 'single',
  NOT_FOUND: 'empty',
} as const;
