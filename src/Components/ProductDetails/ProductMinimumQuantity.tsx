import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React, { useState } from 'react';

interface _props {
  pricingLabel: string;
}

const MinimumQuantity: React.FC<_props> = ({ pricingLabel }) => {
  const storeLayout = useTypedSelector((state) => state.store.layout);
  const { minQuantity } = useTypedSelector(
    (state) => state.product.selected.color,
  );
  const unitUnits = minQuantity > 1 ? 'units' : 'unit';
  const [showMsg, setShowMsg] = useState(false);

  if (storeLayout === _Store.type1) {
    return (
      <>
        <div className="text-sm text-gray-900 bg-primary flex flex-wrap justify-between items-center p-2 md:p-0 md:pl-2 mt-5">
          <span className="text-lg font-semibold text-white">
            {pricingLabel}:
          </span>
          <button
            onClick={() => setShowMsg((show) => !show)}
            className="text-white py-1 md:px-2 flex flex-wrap text-sm font-semibold uppercase items-center"
            id="aMinOrder"
          >
            <span>MINIMUM ORDER :</span>
            {`${minQuantity} ${unitUnits} per color`}
          </button>
          {showMsg && (
            <div className="text-xs p-3 pb-0" id="divMinorder">
              <p>
                We reserve the right to reject orders that do not meet the{' '}
                {minQuantity}
                piece minimum per style <br /> and color, exceptions may apply
                for men’s and women’s companion styles per color.
              </p>
            </div>
          )}
        </div>
      </>
    );
  }

  if (storeLayout === _Store.type2) {
    return (
      <div className="mb-5 w-full">
        <ul className="">
          <li className="mb-4 last:mb-0" x-data="{ open: false }">
            <button
              className="w-full flex justify-start items-start text-left font-bold font-heading tracking-wider"
              // :className="open == true ? '':' rounded-b-lg'"
              onClick={() => setShowMsg((show) => !show)}
            >
              {!showMsg && <span className="material-icons-outlined">+</span>}
              {showMsg && <span className="material-icons-outlined">-</span>}
              <div className="text-md text-black">
                <strong>MINIMUM ORDER QUANTITY:</strong>
                <span className="font-normal">
                  {` ${minQuantity} ${unitUnits} per color`}
                </span>
              </div>
            </button>
            {showMsg && (
              <div className="text-defaule-text">
                <p className="mb-2 text-black">
                  We reserve the right to reject orders that do not meet the{' '}
                  {minQuantity} piece minimum per style and color, exceptions
                  may apply for men’s and women’s companion styles per color.
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    );
  }

  if (storeLayout === _Store.type3) {
    return (
      <div className="mb-4 pb-4">
        <div
          className="flex items-center gap-1"
          onClick={() => setShowMsg((show) => !show)}
        >
          <span className="material-icons-outlined text-xl"></span>
          <span className="font-bold inline-block">
            MINIMUM ORDER QUANTITY :
          </span>
          <span>{` ${minQuantity} ${unitUnits} per color`}</span>
        </div>
        {showMsg && (
          <div className="text-sm">
            <p>
              We reserve the right to reject orders that do not meet the{' '}
              {minQuantity}
              piece minimum per style <br /> and color, exceptions may apply for
              men’s and women’s companion styles per color.
            </p>
          </div>
        )}
      </div>
    );
  }

  if (storeLayout === _Store.type4) {
    return (
      <div className="text-black mb-2 text-sm flex items-center">
        <span className="font-bold w-36">MINIMUM ORDER:</span>
        <span>{` ${minQuantity} ${unitUnits} per color`}</span>
      </div>
    );
  }

  return <></>;
};

export default MinimumQuantity;
