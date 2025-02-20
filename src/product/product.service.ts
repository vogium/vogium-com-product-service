import { Injectable } from '@nestjs/common';
import { COLLECTION_NAMES } from 'src/constants/firebase.constants';
import { PaginationQueryDTO } from 'src/firebase/dto/pagination-query.dto';
import { FirebaseService } from 'src/firebase/firebase.service';
import { CreateProductFirebaseRequestDTO } from './dto/request/create-product-firebase-request.dto';
import { CreateProductDTO } from './dto/request/create-product.dto';
import { GetProductByBrandDTO } from './dto/request/get-by-brand.dto';
import { GetProductByIdDTO } from './dto/request/get-product-by-id.dto';
import { UpdateBrandDTO } from './dto/request/update-brand.dto';
import { UpdateCategoryDTO } from './dto/request/update-category.dto';
import { UpdateHostDTO } from './dto/request/update-host.dto';
import { UpdateImagesDTO } from './dto/request/update-images.dto';
import { UpdateIndexDTO } from './dto/request/update-index.dto';
import { UpdateInformationDTO } from './dto/request/update-information.dto';
import { UpdateOffsetDTO } from './dto/request/update-offset.dto';
import { UpdatePriceDTO } from './dto/request/update-price.dto';
import { UpdateStockDTO } from './dto/request/update-stock.dto';
import { UpdateTitleDTO } from './dto/request/update-title.dto';
import { UpdateUrlDTO } from './dto/request/update-url.dto';
import { UpdateVogCountDTO } from './dto/request/update-vog-count.dto';
import { ProductCategories } from './enum/product-categories.enum';

@Injectable()
export class ProductService {
  constructor(private readonly firebaseService: FirebaseService) {}

  public async getAllProducts() {
    const result = await this.firebaseService.getProductFromFirestore();
    return result.response;
  }
  // Create a new account
  public async createProduct(request: CreateProductDTO): Promise<any> {
    const {
      category,
      index,
      information,
      brand,
      host,
      images,
      price,
      stock,
      title,
      offset,
      url,
      vogCount,
    } = request;
    const productData = new CreateProductFirebaseRequestDTO(
      category,
      index,
      information,
      brand,
      host,
      images,
      price,
      stock,
      title,
      offset,
      url,
      vogCount,
    );

    return await this.firebaseService.createOnFirestore(
      COLLECTION_NAMES.PRODUCT_COLLECTION,
      productData,
    );
  }

  public async getProductByAuthId(id: string): Promise<any> {
    return (
      await this.firebaseService.getFromFirestore(
        COLLECTION_NAMES.PRODUCT_COLLECTION,
        [{ field: 'id', operator: '==', value: id }],
      )
    ).response;
  }
  // Get account by ID
  public async getProductById(request: GetProductByIdDTO): Promise<any> {
    return (
      await this.firebaseService.getFromFirestore(
        COLLECTION_NAMES.PRODUCT_COLLECTION,
        [{ field: 'id', operator: '==', value: request.id }],
      )
    ).response;
  }

  public async getProductByBrand(request: GetProductByBrandDTO): Promise<any> {
    return await this.firebaseService.getFromFirestore(
      COLLECTION_NAMES.PRODUCT_COLLECTION,
      [{ field: 'brand', operator: '==', value: request.brand }],
    );
  }

  async updateCategory(request: UpdateCategoryDTO) {
    const { id, category } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.category = category;

    return await firebaseResponse.ref.update(response);
  }

  async updateIndex(request: UpdateIndexDTO) {
    const { id, index } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.index = index;

    return await firebaseResponse.ref.update(response);
  }

  async updateInformation(request: UpdateInformationDTO) {
    const { id, information } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.information = information;

    return await firebaseResponse.ref.update(response);
  }

  async updateBrand(request: UpdateBrandDTO) {
    const { id, brand } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.brand = brand;

    return await firebaseResponse.ref.update(response);
  }

  public async updateHost(request: UpdateHostDTO): Promise<any> {
    const { id, host } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.host = host;

    return await firebaseResponse.ref.update(response);
  }

  // Update Images
  public async updateImages(request: UpdateImagesDTO): Promise<any> {
    const { id, images } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.images = images;

    return await firebaseResponse.ref.update(response);
  }

  // Update Price
  public async updatePrice(request: UpdatePriceDTO): Promise<any> {
    const { id, price } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.price = price;

    return await firebaseResponse.ref.update(response);
  }

  // Update Stock
  public async updateStock(request: UpdateStockDTO): Promise<any> {
    const { id, stock } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.stock = stock;

    return await firebaseResponse.ref.update(response);
  }

  // Update Title
  public async updateTitle(request: UpdateTitleDTO): Promise<any> {
    const { id, title } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.title = title;

    return await firebaseResponse.ref.update(response);
  }

  // Update Offset
  public async updateOffset(request: UpdateOffsetDTO): Promise<any> {
    const { id, offset } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.offset = offset;

    return await firebaseResponse.ref.update(response);
  }

  // Update URL
  public async updateUrl(request: UpdateUrlDTO): Promise<any> {
    const { id, url } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.url = url;

    return await firebaseResponse.ref.update(response);
  }

  // Update Vog Count
  public async updateVogCount(request: UpdateVogCountDTO): Promise<any> {
    const { id, vogCount } = request;

    const { firebaseResponse, response } = await this.getProductById(
      new GetProductByIdDTO(id),
    );

    response.vogCount = vogCount;

    return await firebaseResponse.ref.update(response);
  }

  public async paginateAccount(query: PaginationQueryDTO) {
    return await this.firebaseService.paginate(
      COLLECTION_NAMES.PRODUCT_COLLECTION,
      query,
    );
  }

  public getProductCategories(): { key: string; value: number }[] {
    return Object.keys(ProductCategories)
      .filter((key) => isNaN(Number(key))) // Enum’un string keylerini al
      .map((key) => ({
        key,
        value: ProductCategories[key as keyof typeof ProductCategories],
      }));
  }
}
