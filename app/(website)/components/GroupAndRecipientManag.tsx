import {
  ArrowIcon,
  EditIcon,
  EmailIcon,
  ImportIcon,
  MessageIcon,
  MobileIcon,
  RecipientIcon,
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
    <div className="w-full h-[910px] py-10 absolute top-[3000px] bg-[conic-gradient(from_144.43deg_at_50%_50%,_#FFE6E2_0deg,_#FFF2EF_360deg)]">
      <div>
        <p className="font-bold text-2xl leading-normal text-center text-custom-dark-grey/90 mt-14">
          Groups & Recipient Management
        </p>
        <p className="text-base leading-tight text-center text-custom-dark-grey/40">
          Efficiently organize and manage survey recipients at scale
        </p>
      </div>

      <div className="flex gap-4 ml-15 justify-items-center mt-4 mb-20">
        <Card
          icon={RecipientIcon}
          title="Create Recipient Groups"
          text="Organize your audience into logical segments"
          className="w-[280px] h-[185px]"
          size="medium"
        />

        <Card
          icon={ImportIcon }
          title="Import via CSV"
          text="Bulk upload recipients with contact information"
          className="w-[280px] h-[185px]"
          size="medium"
        />

        <Card
          icon={EditIcon}
          title="Edit & Manage"
          text="Update group members and contact details easily"
          className="w-[280px] h-[185px]"
          size="medium"
        />

        <Card
          icon={ArrowIcon}
          title="Multi-Group Distribution"
          text="Send to one or multiple groups simultaneously"
          className="w-[280px] h-[185px]"
          size="medium"
        />
      </div>

      <div className="h-[374px] w-[1170px] rounded-xl ml-15 border border-1 border-custom-dark-grey/30 bg-custom-white">
        <div className="flex ml-8 mt-8 gap-215">
          <p className="font-semibold text-base leading-normal text-custom-dark-grey/90">
            Recipient Groups
          </p>
          <p className="text-custom-secondary cursor-pointer">+ New Group</p>
        </div>

        <div className="w-[1085px] h-[0.5px] bg-custom-dark-grey/30 mt-1 ml-8"></div>

        {recipient.map((val, index) => (
          <div
            key={index}
            className="h-[70px] w-[1085px] ml-8 mt-4 rounded-lg hover:bg-[#07233B] group bg-custom-dark-grey/5"
          >
            <div className="flex gap-4 p-3 items-center">

              <div className="w-[48px] h-[48px] rounded-xl bg-custom-dark-grey/10 flex items-center justify-center group-hover:bg-custom-dark-grey/60">
                <RecipientIcon className="text-custom-dark-grey/90 group-hover:text-custom-white" />
              </div>

              <div className="flex flex-1 flex-col">
                <p className="font-medium text-base leading-normal text-custom-dark-grey/90 group-hover:text-white">
                  {val.title}
                </p>
                <span className="text-sm leading-tight text-custom-dark-grey/70 group-hover:text-white">
                  {val.recipient}
                </span>
              </div>

              <div>
                <p className="text-sm text-custom-dark-grey/70 ml-10 p-3 group-hover:text-white cursor-pointer">
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