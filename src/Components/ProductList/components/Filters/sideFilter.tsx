import { FilterChangeHandler, FilterType } from '@type/productList.type';

const SideFilter = ({
  filters,
  handleChange,
  checkedFilters,
}: {
  filters: FilterType;
  handleChange: FilterChangeHandler;
  checkedFilters: any;
}) => (
  <div className="relative">
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
      </div>

      <div>
        {filters &&
          filters.map((filter, index) => (
            <div
              className={`py-4${index === 0 ? '' : ' border-t border-neutral-300'
                }`}
              x-data="{ open: true }"
              key={index}
            >
              <button
                className="flex items-center justify-between w-full group mb-1"
                aria-expanded="true"
              >
                <div className="text-sm text-gray-800 font-medium">
                  {filter.label}
                </div>
                {/* {currentAccordion === index ? (
                    <OpenAccordionIcon />
                  ) : (
                    <CloseAccordionIcon />
                  )} */}
              </button>
              <div className="text-sm">
                <ul
                  className={
                    filter.label === 'Color'
                      ? 'flex flex-wrap items-center gap-x-1.5 gap-y-2'
                      : 'pb-6 pt-2 space-y-3'
                  }
                >
                  {
                    filter.options.map((option, ind) => {
                      const checked =
                        checkedFilters.findIndex(
                          (res: { name: string; value: string }) =>
                            res.name === filter.label &&
                            res.value === option.name,
                        ) > -1;

                      return (
                        <>
                          {option.name || option.colorCode ? (
                            filter.label === 'Color' ? (
                              <li
                                className={`w-8 h-8 border-2 hover:border-secondary p-0.5 ${checked && 'border-secondary'}`}
                                style={{
                                  background: option.colorCode,
                                }}
                                onClick={() => {
                                  handleChange(
                                    filter.label,
                                    option.name,
                                    !checked,
                                  );
                                }}
                              ></li>
                            ) : (
                              <li className="flex items-center" key={ind}>
                                <input
                                  id={`${option.name}-${ind}`}
                                  name={filter.label}
                                  value={option.name}
                                  checked={
                                    checked
                                  }
                                  type="checkbox"
                                  onChange={(e) => {
                                    const { name, value, checked } = e.target;
                                    handleChange(name, value, checked);
                                  }}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600"
                                />
                                <label
                                  htmlFor={`${option.name}-${ind}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.name} ({option?.productCount})
                                </label>
                              </li>
                            )
                          ) : null}
                        </>
                      );
                    })
                  }
                </ul >
              </div >
            </div >
          ))}
      </div >
    </div >
  </div >
);

export default SideFilter;
