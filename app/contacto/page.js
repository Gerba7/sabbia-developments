import Image from "next/image"
import ContactCover from "../ui/components/Contact/ContactCover/ContactCover"
import ContactForm from "../ui/components/Contact/ContactForm/ContactForm"
import PageCover2 from "../ui/components/Common/PageCover/PageCover2"





const Contact = () => {
  return (
    <div>
      {/* <ContactCover />*/}
      <PageCover2 title={'CONTACTO'} />
      <ContactForm /> 
    </div>
  )
}

export default Contact
