import React from "react";

function CreateAndManageGroup() {
  return (
    <div className="rotate-0 opacity-100 bg-gradient-to-b from-[#E3F1FF] to-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 md:m-10 p-2 lg:p-10">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <img
            src="/images/CreateGroup.png"
            alt="Real-time Data"
            className="w-full h-auto mt-4"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full ">
          <p className="text-custom-dark-grey/90 text-base sm:text-md sm:text-xl font-bold mt-3">
            Create & Manage Groups
          </p>
          <ul className="text-sm sm:text-base text-custom-dark-grey/70 sm:mt-2 list-disc list-inside p-2">
            <li>
              Organise your audience into structured groups for targeted survey
              distribution.
            </li>
            <li>
              Import members easily via CSV or add them manually in just a few
              clicks.
            </li>
            <li>
              Update group members anytime by adding or removing participants as
              needed.
            </li>
            <li>
              Ensure the right surveys reach the right people with efficient
              group management.
            </li>
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            <div className="border h-auto w-full rounded-md border-custom-secondary">
                <p className="text-sm sm:text-base font-bold text-custom-dark-grey/90 mt-4 text-center">
                  Create Group 
                </p>
                <p className="text-sm text-custom-dark-grey/70 px-1 text-center pb-4">Set up a new audience group</p>
              </div>
               <div className="border h-auto w-full rounded-md border-custom-secondary">
                <p className="text-sm sm:text-base font-bold text-custom-dark-grey/90 mt-4 text-center">
                  Edit Group
                </p>
                <p className="text-sm text-custom-dark-grey/70 px-1 text-center pb-4">Update group details anytime</p>
              </div>
               <div className="border h-auto w-full rounded-md border-custom-secondary">
                <p className="text-sm sm:text-base font-bold text-custom-dark-grey/90 mt-4 text-center">
                  View Group 
                </p>
                <p className="text-sm text-custom-dark-grey/70 px-1 text-center pb-4">See members and group info</p>
              </div>
               <div className="border h-auto w-full rounded-md border-custom-secondary">
                <p className="text-sm sm:text-base font-bold text-custom-dark-grey/90 mt-4 text-center">
                  Add Members
                </p>
                <p className="text-sm text-custom-dark-grey/70 px-1 text-center pb-4">Add people to your group quickly</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAndManageGroup;
