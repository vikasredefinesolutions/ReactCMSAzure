import { paths } from '@constants/paths.constant';
import { FetchOrderDetails, FetchOrderIds } from '@services/user.service';
import {
  ShoppingCartItemDetailsViewModel,
  _MyAcc_OrderBillingDetails,
  _MyAcc_OrderProductDetails,
} from '@type/APIs/user.res';
import Image from 'appComponents/reusables/Image';
import Price from 'appComponents/reusables/Price';
import MyAccountTabs from 'Components/MyAccountTabs';
import { useActions, useTypedSelector } from 'hooks';
import moment from 'moment';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type _OrderDetails = Array<{
  billing: _MyAcc_OrderBillingDetails | null;
  product: _MyAcc_OrderProductDetails[] | null;
} | null>;

const Orders: NextPage = () => {
  const { setShowLoader } = useActions();
  const [orderDetails, setOrderDetails] = useState<_OrderDetails | null>(null);
  const { id: storeId } = useTypedSelector((state) => state.store);
  const { id: userId } = useTypedSelector((state) => state.user);

  const fetchMultipleOrderDetails = async (ids: number[] | null) => {
    if (ids === null) {
      //Handle if no orders founds
      return;
    }
    let orders: _OrderDetails = [];
    const ordersToFetch = ids.map((id) => FetchOrderDetails({ orderId: id }));

    await Promise.allSettled(ordersToFetch).then((values) => {
      values.map((value, index) => {
        orders[index] = value.status === 'fulfilled' ? value.value : null;
      });
    });

    setOrderDetails(orders);
  };

  const mergeAllSizes = (items: ShoppingCartItemDetailsViewModel[]) => {
    let allSizes = '';

    items.forEach((product, index) => {
      if (index === items.length - 1) {
        allSizes += `${product.attributeOptionValue} `;
        return;
      }
      allSizes += `${product.attributeOptionValue}, `;
    });

    return allSizes;
  };

  useEffect(() => {
    if (storeId && userId) {
      setShowLoader(true);
      FetchOrderIds({
        storeId,
        userId,
      })
        .then((ids) => fetchMultipleOrderDetails(ids))
        .catch((err) => 'handle Error here')
        .finally(() => setShowLoader(false));
    }
  }, []);

  return (
    <>
      <Head>
        <title>{'Order'}</title>
        <meta name="description" content={'My Account Settings'} key="desc" />
        <meta name="keywords" content={'All Orders'} />
      </Head>
      <MyAccountTabs />
      <section className="container mx-auto  bg-gray-100  px-6 py-6 mt-5 mb-5">
        <div className="mx-auto space-y-10 sm:px-4 lg:px-0 pb-2">
          {orderDetails?.map((order, index) => {
            return (
              <div
                key={index}
                className="bg-white border-t border-b border-gray-200 sm:border"
              >
                <div className="flex items-center p-4 border-b border-gray-200 sm:p-6 sm:grid sm:grid-cols-4 sm:gap-x-6 bg-gray-50">
                  <div className="flex-1 grid grid-cols-2 gap-x-6 text-sm sm:col-span-4 sm:grid-cols-4 lg:col-span-2">
                    <div>
                      <dt className="text-gray-900 font-semibold uppercase">
                        ORDER NUMBER
                      </dt>
                      <dd className="mt-1 text-gray-900">
                        {order?.billing?.orderGUID}
                      </dd>
                    </div>
                    <div className="hidden sm:block">
                      <dt className="text-gray-900 font-semibold uppercase">
                        DATE OF ORDER
                      </dt>
                      <dd className="mt-1 text-gray-900">
                        <time>
                          {moment(order?.billing?.orderDate).format(
                            'DD-MM-YYYY',
                          )}
                        </time>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-gray-900 font-semibold uppercase">
                        TOTAL PRICE
                      </dt>
                      <dd className="mt-1 font-semibold text-gray-900">
                        <Price value={order?.billing?.orderTotal} />
                      </dd>
                    </div>
                  </div>
                  <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                    <Link
                      href={`${paths.myAccount.order_details}?ordernumber=${order?.billing?.id}`}
                      className="btn btn-primary"
                    >
                      <span>View Order Details</span>
                    </Link>
                  </div>
                </div>
                <ul role="list" className="divide-y divide-gray-200">
                  {order?.product?.map((prod) => (
                    <li key={prod.productName} className="p-4 sm:p-6">
                      <div className="flex flex-wrap justify-between -mx-3">
                        <div className="px-3">
                          <div className="lg:flex-shrink-0 sm:w-52 sm:h-52 w-full h-auto overflow-hidden rounded-lg text-center">
                            <Image
                              src={prod.colorImage}
                              alt=""
                              className="max-h-full"
                            />
                          </div>
                        </div>
                        <div className="flex-1 sm:mt-0 mt-6 text-sm text-center sm:text-left px-3">
                          <div className="font-bold text-xl">
                            {prod.productName}
                          </div>
                          <div className="mt-1">
                            <span className="font-semibold">SIZE : </span>{' '}
                            {mergeAllSizes(
                              prod.shoppingCartItemDetailsViewModels,
                            )}
                          </div>
                          <div className="mt-1">
                            <span className="font-semibold">COLOR : </span>
                            {prod.attributeOptionValue}
                          </div>
                          {prod.shoppingCartItemDetailsViewModels.map(
                            (p, index) => (
                              <div
                                key={index}
                                className="mt-4 flex flex-wrap justify-between -mx-3"
                              >
                                <div className="w-full lg:w-1/3 px-3">
                                  <div className="font-semibold">SIZE</div>
                                  <div className="">
                                    {p.attributeOptionValue}
                                  </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-3">
                                  <div className="font-semibold">PRICE</div>
                                  <div className="">
                                    <Price value={p.price} />
                                  </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-3">
                                  <div className="font-semibold">QTY</div>
                                  <div className="">{p.qty}</div>
                                </div>
                              </div>
                            ),
                          )}
                          <div className="mt-4 flex flex-wrap justify-between -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                              <div className="font-semibold">UNIT TOTAL</div>
                              <div className="">
                                <Price value={prod.totalQty} />
                              </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3">
                              <div className="font-semibold">
                                ESTIMATED PRICE
                              </div>
                              <div className="">
                                <Price value={prod.totalPrice} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-3">
                          <Link
                            href={`${paths.WRITE_A_REVIEW}?ProductId=${prod.productName}`}
                            className="btn btn-primary !w-48 text-center"
                          >
                            Write A Review
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Orders;
