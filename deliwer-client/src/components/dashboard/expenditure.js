import React from "react";
import DropdownInput from "../resusable-controls/dropdown-input";
import { month } from "../dummy-data";

export default function Expenditure() {
  return (
    <div className="card w-full justify-center">
      <div className="rounded shadow bg-white px-6 py-5">
        <div className="items-center">
          <div>
            <p className="text-xl font-semibold leading-4 text-gray-800">
              <DropdownInput
                placeholder="Month"
                options={month.map((e) => e.month)}
              />
            </p>
            <p className="text-md leading-3 text-gray-500 pt-4 pb-1">
              This Month
            </p>
            <p className="text-base font-medium leading-none text-gray-800">
              $4055.56
            </p>
            <p className="text-md leading-none text-gray-500 pt-5">
              68.2% more earnings than last month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
