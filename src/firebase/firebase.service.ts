import * as admin from 'firebase-admin';
import {
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { FieldParams } from './dto/request-field-params.dto';
import { Timestamp } from 'firebase-admin/firestore';
import { PaginationQueryDTO } from './dto/pagination-query.dto';
import { COLLECTION_NAMES, LOCAL_RETURN_QUERY_TYPES } from 'src/constants/firebase.constants';


@Injectable()
export class FirebaseService implements OnModuleInit {
  onModuleInit() {
    if (!admin.apps.length) {
      const serviceAccount = require('../../firebase-admin.json');
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }
  }

  async getProductResponseByQuery(queryParams?: FieldParams[]){
    return await this.getResponseByQuery(COLLECTION_NAMES.PRODUCT_COLLECTION, queryParams);
  }


  async getResponseByQuery(collectionName: string, queryParams?: FieldParams[]): Promise<{ type: string; data: any }> {
    try {
      const collectionRef = admin
        .firestore()
        .collection(collectionName);

      let query: FirebaseFirestore.Query = collectionRef;
      if(queryParams && queryParams[0]){
        queryParams.forEach((param) => {
        query = query.where(param.field, param.operator, param.value);
        })
      }
      const snapshot = await query.get();
      if (snapshot.empty) {
        return {
          type: LOCAL_RETURN_QUERY_TYPES.NOT_FOUND,
          data: null,
        };
      }

      if (snapshot.docs.length > 1) {
        return {
          type: LOCAL_RETURN_QUERY_TYPES.MULTIPLE_RECORDS,
          data: snapshot.docs,
        };
      }

      return {
        type: LOCAL_RETURN_QUERY_TYPES.SINGLE_RECORD,
        data: snapshot.docs[0],
      };
    } catch (error) {
      // if (error instanceof HttpException) {
      //   throw error;
      // }
      // throw new InternalServerErrorException({
      //   message: FIREBASE_ERROR_MESSAGES.UNEXPECTED_ERROR,
      //   error: error.message,
      //   stack: error.toString(),
      // });
    }
  }
  async getProductFromFirestore(fieldParams?: FieldParams[]){
    return await this.getFromFirestore(COLLECTION_NAMES.PRODUCT_COLLECTION, fieldParams)
  }

  async getFromFirestore(
    collectionName: string,
    fieldParams?: FieldParams[],
  ) {
    const types = await this.getResponseByQuery(
      collectionName,
      fieldParams,
    );
    if (!types) {
      throw new NotFoundException('types response not found');
    }
    const firebaseResponse = types.data;

    if (types.type === LOCAL_RETURN_QUERY_TYPES.MULTIPLE_RECORDS) {
      const response = firebaseResponse.map((doc: { data: () => any; }) => doc.data())

      return {firebaseResponse, response};
    }

    if (!firebaseResponse) {
      throw new NotFoundException('firebase response not found');
    }
    const response = firebaseResponse.data();
    if (!response) {
      throw new NotFoundException('response not found');
    }
    return {firebaseResponse, response};
  }
  
  public async createOnFirestore<T>(collectionName: string, request: T){
    try {
      const ref = admin.firestore().collection(collectionName).doc();
      const id = ref.id;
      
      const data = { ...request, id };
  
      await ref.set(data);
      return id;
    } catch (error) {
      throw new Error(`Error creating in ${collectionName}: ${error.message}`);
    }
  }

  public convertDateToTimestamp(date: string){
    const response = new Date(date);
    return admin.firestore.Timestamp.fromDate(response);
  }

  async paginate(collectionName: string, query: PaginationQueryDTO) {
    const { _start = 0, _end = 10, ...filters } = query;
    const collectionRef =  admin.firestore().collection(collectionName);

    let firebaseQuery: FirebaseFirestore.Query = collectionRef;

    Object.keys(filters).forEach((key) => {
      const value = filters[key];
      if (value) {
        const parsedValue = this.parseQueryParam(value);
        firebaseQuery = firebaseQuery.where(key, '==', parsedValue);
      }
    });
    
    // Pagination işlemi
    const limit = _end - _start;
    let snapshot = await firebaseQuery.get();
    const totalRecords = snapshot.size;
    firebaseQuery = firebaseQuery.limit(limit).offset(Number(_start));
    snapshot = await firebaseQuery.get();
    const data = snapshot.docs.map(doc => doc.data());

    return {
      data,
      meta: {
        totalRecords,
        totalPages: Math.ceil(totalRecords / (limit)),
        pageSize: limit,
        currentPage: Math.floor(_start / limit) + 1,
      },
    };
  }

  private parseQueryParam(param: string | undefined): boolean | number | string | undefined {
    if (param === undefined) return undefined;
  
    // Boolean dönüşümü
    if (param === 'true' || param === 'false') {
      return param === 'true';
    }
  
    // Number dönüşümü
    if (!isNaN(Number(param))) {
      return Number(param);
    }
  
    // String olarak bırak
    return param;
  }
}
