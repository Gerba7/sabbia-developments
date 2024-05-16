import Cover from "./ui/components/Home/Cover/Cover";;
import ContactRow from "./ui/components/Home/ContactRow/ContactRow";
import MainProjects from "./ui/components/Home/MainProjects/MainProjects";
import WhatsappContact from "./ui/components/Home/WhatsappContact/WhatsappContact";
import Types from "./ui/components/Home/Types/Types";
import HowWeWork from "./ui/components/Home/HowWeWork/HowWeWork";
import Company from "./ui/components/Home/Company/Company";


export default function Home() {
  return (
    <div>
      <Cover />
      <MainProjects />
      <Company />
      <Types />
      <ContactRow />
      <WhatsappContact />
    </div>
  );
}
