import assets from "../assets/assets"
import Title from "../components/Title"
import NewsLetterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col gap-6 justify-center text-gray-600 md:w-2/4">
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci sit recusandae dolorum illum dignissimos quo aliquam provident minima commodi? Deserunt maiores earum consequuntur expedita accusamus dicta maxime reiciendis itaque repellendus.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nostrum, reprehenderit voluptas id odio veritatis quam consectetur quibusdam quidem quo pariatur cum asperiores? Totam nemo ad laborum, adipisci dolorum voluptate.</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis maiores necessitatibus veniam, odio natus iusto aliquid dolore quae doloribus nemo sed eaque? Cum illum quasi laboriosam fugit, cupiditate iste?</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam est id, excepturi fugit doloremque odio optio dolorum distinctio voluptate voluptates quos facere fugiat alias velit eligendi maiores ut aliquid quod.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className="text-gray-600" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam est id, excepturi fugit doloremque odio optio dolorum distinctio voluptate voluptates quos facere fugiat alias velit eligendi maiores ut aliquid quod.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam est id, excepturi fugit doloremque odio optio dolorum distinctio voluptate voluptates quos facere fugiat alias velit eligendi maiores ut aliquid quod.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About