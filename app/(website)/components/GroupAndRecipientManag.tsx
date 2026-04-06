import {
  ArrowIcon,
  EditIcon,
  EmailIcon,
  ImportIcon,
  MessageIcon,
  MobileIcon,
  RecipientIcon,
  TeamIcon,
} from "@/components/svg-icons";
import Card from "@/components/ui/Card";
import React from "react";

interface Props {}

function GroupAndRecipientManagement(props: Props) {
  const {} = props;
  const recipient = [
    { title: "Customer Feedback Panel", recipient: "1247 recipients" },
    { title: "Employee Satisfaction", recipient: "523 recipients" },
    { title: "Product Beta Testers", recipient: "89 recipients" },
  ];

  return (
    <div className="h-auto py-10  bg-[conic-gradient(from_144.43deg_at_50%_50%,_#FFE6E2_0deg,_#FFF2EF_360deg)]">
      <div>
        <p className="font-bold text-lg sm:text-2xl leading-normal text-center text-custom-dark-grey/90 mt-8 sm:mt-14">
          Groups & Recipient Management
        </p>
        <p className="text-sm sm:text-base leading-tight text-center text-custom-dark-grey/40">
          Efficiently organize and manage survey recipients at scale
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-2 sm:gap-4 p-8">
        <Card
          icon={RecipientIcon}
          title="Create Recipient Groups"
          text="Organize your audience into logical segments"
          className="w-auto h-[160px] sm:h-[185px]"
          size="medium"
        />

        <Card
          icon={ImportIcon}
          title="Import via CSV"
          text="Bulk upload recipients with contact information"
          className="w-auto h-[160px] sm:h-[185px]"
          size="medium"
        />

        <Card
          icon={EditIcon}
          title="Edit & Manage"
          text="Update group members and contact details easily"
          className="w-auto h-[160px] sm:h-[185px]"
          size="medium"
        />

        <Card
          icon={ArrowIcon}
          title="Multi-Group Distribution"
          text="Send to one or multiple groups simultaneously"
          className="w-full sm:w-[280px] h-[160px] sm:h-[185px]"
          size="medium"
        />
      </div>

      <div className="h-auto w-auto  m-2 md:m-4 p-2 md:p-6 rounded-xl  border border-1 border-custom-dark-grey/30 bg-custom-white">
        <div className="flex m-4">
          <p className="font-semibold text-sm sm:text-base leading-normal text-custom-dark-grey/90">
            Recipient Groups
          </p>
          <p className="text-sm sm:text-lg text-custom-secondary cursor-pointer">+ New Group</p>
        </div>

        <div className="w-auto h-px m-4 bg-custom-dark-grey/30"/>

        {recipient.map((val, index) => (
          <div
            key={index}
            className="h-auto w-auto m-4 rounded-lg hover:bg-[#07233B] group bg-custom-dark-grey/5"
          >
            <div className="flex gap-2 sm:gap-4 p-1 sm:p-3 items-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-custom-dark-grey/10 flex items-center justify-center group-hover:bg-custom-dark-grey/50">
                <TeamIcon className="w-6 h-6 text-custom-dark-grey/90 group-hover:text-custom-white" />
              </div>

              <div className="flex flex-1 flex-col">
                <p className="font-medium text-sm sm:text-base leasing-tight sm:leading-normal text-custom-dark-grey/90 group-hover:text-white">
                  {val.title}
                </p>
                <span className="text-[8px] sm:text-sm leading-tight text-custom-dark-grey/70 group-hover:text-white">
                  {val.recipient}
                </span>
              </div>

              <div>
                <p className="text-[10px] sm:text-sm text-custom-dark-grey/70 ml-4 sm:ml-10 p-3 group-hover:text-white cursor-pointer">
                  Edit
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupAndRecipientManagement;
