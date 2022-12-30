import { __Login } from '@constants/global.constant';
import {
  UserType,
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails,
} from '@type/APIs/user.res';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { _SignUpPayload } from 'definations/APIs/signUp.req';
import { _AccCreated } from 'definations/APIs/signUp.res';
import { _SignIn } from 'definations/user.type';
import { CallAPI } from 'helpers/common.helper';
import {
  conditionalLog,
  conditionalLogV2,
  __console,
} from 'helpers/global.console';
import { _showConsoles } from 'show.config';
import { SendAsyncV2 } from '../utils/axios.util';

interface _Valid {
  credentials: 'VALID';
  id: string;
}
interface _Invalid {
  credentials: 'INVALID';
  message: string;
}

export type _UserAPIs =
  | 'signInUser'
  | 'CreateNewAccount'
  | 'OrderedBillingDetails'
  | 'OrderedProductDetails'
  | 'FetchOrderIds'
  | 'GetStoreCustomer'
  | 'FetchOrderDetails';
export interface _UserServices {
  service: 'user';
  api: _UserAPIs;
}

export const signInUser = async (
  payload: _SignIn,
): Promise<_Valid | _Invalid> => {
  const url = `StoreCustomer/customerlogin.json`;
  conditionalLogV2({
    // @ts-ignore: Unreachable code error
    data: payload,
    name: 'signInUser',
    type: 'API-RESPONSE',
    show: __console.user.service['signInUser'],
  });

  try {
    const res = await SendAsyncV2<string>({
      url: url,
      method: 'POST',
      data: payload,
    });

    if (res.data === null) {
      conditionalLogV2({
        // @ts-ignore: Unreachable code error
        data: res?.errors,
        name: 'signInUser',
        type: 'API-RESPONSE',
        show: __console.user.service['signInUser'],
      });

      return {
        credentials: 'INVALID',
        // @ts-ignore: Unreachable code error
        message: res?.errors?.exception,
      };
    }
    conditionalLogV2({
      // @ts-ignore: Unreachable code error
      data: res.data,
      name: 'signInUser',
      type: 'API-RESPONSE',
      show: __console.user.service['signInUser'],
    });

    return {
      credentials: 'VALID',
      id: res.data,
    };
  } catch (error) {
    conditionalLogV2({
      data: error,
      name: 'signInUser',
      type: 'API-ERROR',
      show: __console.user.service['signInUser'],
    });

    return {
      credentials: 'INVALID',
      message: __Login.something_went_wrong,
    };
  }
};

export const GetCountriesList = async () => {
  const url = `StoreCustomer/getcustomercountry.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
  });

  return res.data;
};
export const GetStatesList = async (id: number) => {
  const url = `StoreCustomer/getcustomerstatebycountryid/${id}.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
  });

  return res.data;
};

export const GetIndustriesList = async () => {
  const url = `StoreCustomer/getcustomerindustry.json`;
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
  });

  return res.data;
};

export const UpdateWishList = async (productId: number) => {
  const url = '/like';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'GET',
    data: productId,
  });

  return res.data;
};

export const SubscribeToNewsLetter = async (payload: { email: string }) => {
  const url = '/subscribe';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });

  return res.data;
};

export const CreateNewAccount = async (
  payload: _SignUpPayload,
): Promise<_AccCreated | null> => {
  const url = 'StoreCustomer/storecustomercreate.json';

  const response = await CallAPI<_AccCreated>({
    name: {
      service: 'user',
      api: 'CreateNewAccount',
    },
    request: {
      url: url,
      method: 'POST',
      data: payload,
    },
  });

  return response;
};

export const AddToCart = async (payload: { note: string }) => {
  const url = '/addToCart';
  const res: AxiosResponse = await SendAsyncV2<AxiosRequestConfig>({
    url: url,
    method: 'POST',
    data: payload,
  });

  return res.data;
};

export const GetStoreCustomer = async (
  customerId: number,
): Promise<UserType | null> => {
  const url = `/StoreCustomer/get/${customerId}.json`;

  const response = await CallAPI<UserType>({
    name: {
      service: 'user',
      api: 'GetStoreCustomer',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

export const FetchOrderIds = async (payload: {
  storeId: number;
  userId: number;
}): Promise<number[] | null> => {
  const url = `Order/GetAllOrdernumberByCustomerId/${payload.userId}/${payload.storeId}.json`;

  const response = await CallAPI<number[]>({
    name: {
      service: 'user',
      api: 'FetchOrderIds',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

const OrderedBillingDetails = async (
  orderId: number,
): Promise<_MyAcc_OrderBillingDetails | null> => {
  const url = `Order/GetById/${orderId}.json`;

  const response = await CallAPI<_MyAcc_OrderBillingDetails>({
    name: {
      service: 'user',
      api: 'OrderedBillingDetails',
    },
    request: {
      url: url,
      method: 'GET',
    },
  });

  return response;
};

const OrderedProductDetails = async (
  orderId: number,
): Promise<_MyAcc_OrderProductDetails[] | null> => {
  const orderProductDetailsURL = `Order/GetOrderedShoppingCartItemsDetail/${orderId}.json`;

  try {
    const res = await SendAsyncV2<_MyAcc_OrderProductDetails[]>({
      url: orderProductDetailsURL,
      method: 'GET',
    });
    conditionalLog({
      data: res.data,
      name: 'OrderedProductDetails',
      type: 'API',
      show: res.data === null,
    });

    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'OrderedProductDetails',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

export const FetchOrderDetails = async ({
  orderId,
}: {
  orderId: number;
}): Promise<{
  billing: _MyAcc_OrderBillingDetails | null;
  product: _MyAcc_OrderProductDetails[] | null;
}> => {
  let billingDetails: null | _MyAcc_OrderBillingDetails = null;
  let productDetails: null | _MyAcc_OrderProductDetails[] = null;

  try {
    await Promise.allSettled([
      OrderedBillingDetails(orderId),
      OrderedProductDetails(orderId),
    ]).then((values) => {
      billingDetails =
        values[0].status === 'fulfilled' ? values[0].value : null;
      productDetails =
        values[1].status === 'fulfilled' ? values[1].value : null;
    });

    return {
      product: productDetails,
      billing: billingDetails,
    };
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'FetchOrderDetails',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return {
      product: null,
      billing: null,
    };
  }
};

export const updateUserPassword = async (payload: {
  email: string;
  password: string;
  customerId: number;
}): Promise<{
  success: boolean;
  errors: {
    password: string;
  };
} | null> => {
  try {
    const url = '/StoreCustomer/updatestorecustomeremailpassword.json';
    const res = await SendAsyncV2<{
      success: boolean;
      errors: {
        password: string;
      };
    }>({
      url: url,
      method: 'POST',
      data: payload,
    });
    conditionalLog({
      data: res.data,
      name: 'updatePassword',
      type: 'API',
      show: true,
    });
    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'updatePassword',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};

export const updateUserData = async (payload: {
  customerId: number;
  firstName: string;
  lastName: string;
  companyName: string;
}): Promise<any | null> => {
  try {
    const url = '/StoreCustomer/updateaccountsettingsinfo.json';
    const res: AxiosResponse = await SendAsyncV2({
      url: url,
      method: 'POST',
      data: payload,
    });
    conditionalLog({
      data: res.data,
      name: 'updateUserData',
      type: 'API',
      show: true,
    });
    return res.data;
  } catch (error) {
    conditionalLog({
      data: error,
      name: 'updateUserData',
      type: 'API',
      show: _showConsoles.services.user,
      error: true,
    });
    return null;
  }
};
