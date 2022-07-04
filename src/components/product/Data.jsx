import React from 'react'

const Data = () => {
  var data = [
    {
      img: "https://www.fohlio.com/hubfs/image-20220615-170335.png",
      data: "Align Your Team Faster With New 'Group By' Feature"
    },
    {
      img: "https://www.fohlio.com/hubfs/Learn%20From%20the%20Best%20FF&E%20Specification%20Templates%20%285%29.png",
      data: "Here's Why A Digital Materials Library Is The Best Product Data Management Tool"
    },
    {
      img: "https://www.fohlio.com/hubfs/Learn%20From%20the%20Best%20FF&E%20Specification%20Templates%20%282%29-4.png",
      data: "High-level: Everything You Need To Know Before Building Your Procurement Process"
    },
    {
      img: "https://www.fohlio.com/hubfs/Learn%20From%20the%20Best%20FF&E%20Specification%20Templates%20%284%29.png",
      data: "FF&E 101: How To Build The Ultimate Schedule"
    },
    {
      img: "https://downloads.intercomcdn.com/i/o/520209464/a59f67322327982e73c6f695/1.png",
      data: "New: Internal Library"
    },
    {
      img: "https://www.fohlio.com/hubfs/t.png",
      data: "Innovate In A Changing Landscape: Feature Must-Haves For Building Better Student Apartments"
    },
    {
      img: "https://downloads.intercomcdn.com/i/o/516089499/2f10a4f0a35d5098be13d3cf/Feature+note+1.png",
      data: "New: Better Filtering, Grouping, and Procurement Document Customization"
    },
    {
      img: "https://www.fohlio.com/hubfs/p2.png",
      data: "The Ultimate Tool For Planning A World-Class Medical Facility: Fohlio. Part 2, Manage Your Procurement Deliverables"
    },
    {
      img: "https://www.fohlio.com/hubfs/web-clipper-for-landing-page.original.gif",
      data: "How To Use And Install The Web Clipper"
    },
    {
      img: "https://www.fohlio.com/hubfs/Learn%20From%20the%20Best%20FF&E%20Specification%20Templates%20%283%29.png",
      data: "The Ultimate Tool For Planning A World-Class Medical Facility: Fohlio. Part 1, Specification and Costing"
    },
    {
      img: "https://www.fohlio.com/hubfs/Learn%20From%20the%20Best%20FF&E%20Specification%20Templates%20%282%29-2.png",
      data: "Fohlio: The Disruptive Technology Made For Scaling Profitable Franchises, Part 2: Franchise Management Software"
    },
    {
      img: "https://www.fohlio.com/hubfs/Learn%20From%20the%20Best%20FF&E%20Specification%20Templates%20%282%29.png",
      data: "Fohlio: The Disruptive Technology Made For Scaling Profitable Franchises, Part 1: Franchise Builder"
    },
    {
      img: "https://www.fohlio.com/hubfs/5-4.png",
      data: "New: Effortless Value Engineering and Contact Book Management"
    },
    {
      img: "https://www.fohlio.com/hubfs/Establish%20Your%20Senior%20Care%20Facility%20Build%20Nursing%20Home%20Design%20Requirements-1.png",
      data: "Demonstrate Senior Care: How To Build Nursing Home Design Requirements"
    },
    {
      img: "https://www.fohlio.com/hubfs/Learn%20From%20the%20Best%20FF&E%20Specification%20Templates%20%281%29-1.png",
      data: "How the Best Nursing Home Designs Focus on Senior Health and Wellness, Part 2: Private Spaces"
    },
    {
      img: "https://www.fohlio.com/hubfs/Senior%20Wellness%20Build%20Your%20Senior%20Housing%20Design%20Guidelines%20Part%201%20General%20Areas-1.png",
      data: "How the Best Nursing Home Designs Focus on Senior Health and Wellness, Part 1: General Areas"
    },
    {
      img: "https://www.fohlio.com/hubfs/Imported_Blog_Media/Restaurant-Design-Manual-Of-The-Future.jpg",
      data: "Better Design Management Capabilities: The Future of Designing Restaurants"
    },
    {
      img: "https://www.fohlio.com/hubfs/Fohlio_March2022/images/5a3032a8-cost-estimation_0eq08f0eq08f000000001.png",
      data: "Automate Project Cost Estimation"
    },
    {
      img: "https://www.fohlio.com/hubfs/Learn-From-the-Best-FFE-Specification-Templates-1-1.jpg",
      data: "The Only Procurement Management Plan Template You'll Ever Need"
    },
    {
      img: "https://www.fohlio.com/hubfs/Fohlio_March2022/images/58983180-quickbooks_0ji0a10dy0a102n000001.png",
      data: "Materials Procurement"
    },
    {
      img: "https://www.fohlio.com/hubfs/Imported_Blog_Media/Design-for-Procurement-Fohlio-specification-procurement-and-product-information-management-software.png",
      data: "Design for Procurement: How To Elevate Project Output"
    },
    {
      img: "https://www.fohlio.com/hubfs/Imported_Blog_Media/Reduce-FFE-and-OSE-Costs-Fohlio-specification-procurement-and-product-information-management-software.png",
      data: "Converging Workflows: How to Reduce FF&E and OS&E Costs"
    },
  ]



  return (
    <div className='card'>
      {
        data.map((item) => {
          return <div className='cardbody'>
            <a href="#">
              <img src={item.img} alt="img" className='imgg' />
              <p className='underline'>{item.data}</p>
            </a>
          </div>
        })
      }

    </div>
  )
}

export default Data
