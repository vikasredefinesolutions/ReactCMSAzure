import { paths } from 'constants/paths.constant';
import { useTypedSelector } from 'hooks';
import { useRouter } from 'next/router';
import { _Store } from 'page.config';
import React from 'react';

const ProductRequestConsultation: React.FC = () => {
  const router = useRouter();
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { productId, color } = useTypedSelector(
    (state) => state.product.selected,
  );

  if (storeLayout === _Store.type1) {
    const params = {
      productId: productId,
      color: color.name,
    };
    const consultationURL = `${paths.REQUEST_CONSULTATION}?productid=${params.productId}&title=Request%20Consultation%20%26%20Proof&Color=${params.color}`;

    return (
      <div className="w-full md:w-1/3 mt-2 md:text-right text-sm font-semibold text-indigo-500">
        <button
          onClick={() => router.push(consultationURL)}
          className="text-indigo-500 underline"
        >
          Request Consultation and Proof
        </button>
        &gt;
      </div>
    );
  }

  return <></>;
};

export default ProductRequestConsultation;
