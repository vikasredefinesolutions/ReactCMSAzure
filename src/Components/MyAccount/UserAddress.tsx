import AddAddress from 'appComponents/modals/AddAddress';
import SwitchBox from 'appComponents/ui/switch';
import { AddUpdateAddressRequest } from 'definations/APIs/address.req';
import { useActions, useTypedSelector } from 'hooks';
import { useEffect, useState } from 'react';
import {
  CreateUserAddress,
  deleteCustomerAddress,
  udpateIsDefaultAddress,
  UpdateUserAddress,
} from 'services/address.service';
// import { SwitchProps } from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CustomerAddress } from 'definations/APIs/user.res';
import getLocation from 'helpers/getLocation';

const UserAddress = () => {
  const { getStoreCustomer } = useActions();

  const [showAddressPopup, setShowAddresss] = useState('');
  const [showTab, setShowTab] = useState('S');
  const [editData, setEditData] = useState<CustomerAddress | null>(null);
  const [address, setAddress] = useState<CustomerAddress[] | null>(null);

  const customer = useTypedSelector((state) => state.user.customer);

  const customerId = useTypedSelector((state) => state.user.id);

  useEffect(() => {
    if (customer && customer.customerAddress) {
      setAddress(customer.customerAddress);
    }
  }, [customer]);

  const closePopupHandler = () => {
    setShowAddresss('');
    setEditData(null);
  };

  const getAddress = (type: string) => {
    if (address) {
      return address.filter((res) => res.addressType === type);
    }
    return [];
  };

  const submitHandler = async (values: AddUpdateAddressRequest) => {
    const data = await getLocation();
    const obj = {
      storeCustomerAddressModel: {
        id: editData ? editData.id : 0,
        rowVersion: editData ? editData.rowVersion : '',
        location: `${data.city}, ${data.state}, ${data.country_name}, ${data.postal}`,
        ipAddress: data.IPv4,
        macAddress: '00-00-00-00-00-00',
        customerId: customerId || 0,
        firstname: values.firstname,
        lastName: values.lastName,
        email: values.email,
        address1: values.address1,
        address2: values.address2 || ' ',
        suite: values.suite || ' ',
        city: values.city,
        state: values.state,
        postalCode: values.postalCode,
        phone: values.phone,
        fax: values.fax,
        countryName: values.countryName,
        countryCode: '91',
        addressType: showAddressPopup,
        isDefault: values.isDefault,
        recStatus: 'A',
        companyName: values.companyName || ' ',
      },
    };
    if (editData) {
      await UpdateUserAddress(obj);
    } else {
      await CreateUserAddress(obj);
    }
    await getStoreCustomer(customerId || 0);
    setShowAddresss('');
  };

  const deleteAddress = async (id: number, rowVersion: string) => {
    const isConfirm = await confirm('Are you sure? You want to delete this.');
    const location = await getLocation();

    if (isConfirm) {
      const obj = {
        args: {
          id: id,
          rowVersion: rowVersion,
          status: 0,
          location: `${location.city}, ${location.state}, ${location.country_name}, ${location.postal}`,
          ipAddress: location.IPv4,
          macAddress: '00-00-00-00-00-00',
        },
      };
      deleteCustomerAddress(obj);
      await getStoreCustomer(customerId || 0);
    }
  };

  const handleChange = async (checked: boolean, id: number) => {
    const obj = {
      isDefault: checked,
      addressId: id,
      customerId: customerId || 0,
      addressType: showTab,
    };
    await udpateIsDefaultAddress(obj);
    await getStoreCustomer(customerId || 0);
  };

  return (
    <>
      <section className="container mx-auto bg-gray-100 px-6 py-6 mt-5 mb-5">
        <div className="max-w-7xl py-10 mx-auto">
          <div
            x-data="{activeTab:01, activeClass: 'tab py-2 mr-1 px-2 block hover:text-primary text-primary focus:outline-none text-default-text border-b-2 font-medium border-primary', inactiveClass : 'tab py-2 px-2 block text-default-text hover:text-primary focus:outline-none mr-1 rounded-sm font-medium border-slate-300 hover:border-primary' }"
            className="w-full"
          >
            <ul className="w-full flex justify-center max-w-4xl mx-auto flex-wrap">
              <li className="mr-0.5 md:mr-0 font-semibold">
                <button
                  onClick={() => setShowTab('S')}
                  className={`tab py-2 mr-1 px-2 block text-primary focus:outline-none text-default-text border-b-2 font-medium${
                    showTab === 'B' ? '' : ' border-primary'
                  }`}
                >
                  Shipping Address
                </button>
              </li>
              <li className="mr-0.5 md:mr-0 font-semibold">
                <button
                  onClick={() => setShowTab('B')}
                  className={`tab py-2 mr-1 px-2 block text-primary focus:outline-none text-default-text border-b-2 font-medium${
                    showTab === 'S' ? '' : ' border-primary'
                  }`}
                >
                  Billing Address
                </button>
              </li>
            </ul>
            <div className="mx-auto pt-10">
              <div className="panel-01 tab-content pb-4">
                <div className="flex flex-wrap lg:-mx-3 gap-y-6">
                  {getAddress(showTab).map((address_obj, index) => (
                    <div className="w-full lg:w-1/2 lg:px-3" key={index}>
                      <div className="border-2 border-gray-300">
                        <div className="bg-gray-200 font-semibold border-b last:border-b-0 border-gray-300 flex flex-wrap p-2">
                          <div className="w-2/5">Name:</div>
                          <div className="">
                            {address_obj.firstname} {address_obj.lastName}
                          </div>
                        </div>
                        <div className="border-b last:border-b-0 border-gray-300 flex flex-wrap p-2">
                          <div className="w-2/5">Address:</div>
                          <div className="">
                            {address_obj.address1}
                            {address_obj.address2}
                            <br />
                            {[
                              address_obj.city,
                              address_obj.countryName,
                              address_obj.postalCode,
                            ].join(', ')}
                          </div>
                        </div>
                        <div className="border-b last:border-b-0 border-gray-300 flex flex-wrap p-2">
                          <div className="w-2/5">Make Primary:</div>
                          <div
                            className="flex items-center justify-end"
                            x-data="{ checked: true }"
                          >
                            <div className="w-16 relative">
                              <SwitchBox
                                onchange={(e: {
                                  target: { checked: boolean };
                                }) => {
                                  handleChange(
                                    e.target.checked,
                                    address_obj.id,
                                  );
                                }}
                                checked={address_obj.isDefault}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="border-b last:border-b-0 border-gray-300 flex flex-wrap p-2">
                          <div className="w-2/5">Action:</div>
                          <div className="flex flex-wrap gap-x-4">
                            <EditIcon
                              className="text-primary"
                              onClick={() => {
                                setShowAddresss(showTab);
                                setEditData(address_obj);
                              }}
                            />
                            <DeleteIcon
                              onClick={() =>
                                deleteAddress(
                                  address_obj.id,
                                  address_obj.rowVersion,
                                )
                              }
                              className="text-red-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-modal-toggle="AddNewAddress"
                    onClick={() => setShowAddresss(showTab)}
                  >
                    Add {showTab === 'S' ? 'Shipping' : 'Billing'} Address
                    <i className="fa fa-plus ml-1" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showAddressPopup && (
        <AddAddress {...{ closePopupHandler, submitHandler, editData }} />
      )}
    </>
  );
};

export default UserAddress;
