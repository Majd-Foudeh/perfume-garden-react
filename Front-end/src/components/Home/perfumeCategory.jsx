import React from "react";
// import "../../style/perfumeCategory.css";
import strong from "../../assets/strong.png";
import medium from "../../assets/medium.png";
import light from "../../assets/light.png";
import FeaturedProducts from "../../assets/featuredProducts.jpg";
export const PerfumeCategory = () => {
  return (
    <div className="bg-light mx-auto  rounded py-5" style={{ width: "90vw" }}>
      <div className="accordion mx-auto w-75" id="basicAccordion">
        <h2 className="fw-bolder mb-3">perfume categories </h2>
        <p className=" mb-4">Know what these perfume category icons means</p>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#basicAccordionCollapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <div className="me-2" style={{ height: "30px" }}>
                <img
                  src={strong}
                  height="100%"
                  className="mdi mdi-truck-fast"
                />
              </div>
              Strong Concentration
            </button>
          </h2>
          <div
            id="basicAccordionCollapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-mdb-parent="#basicAccordion"
            style={{}}
          >
            <div className="accordion-body">
              <strong>
                This category comprises perfume oils with a higher concentration
                of fragrance oils.
              </strong>{" "}
              <br />
              It These oils offer a strong and long-lasting scent. They are
              designed for those who prefer a bold and intense fragrance
              experience. They have a higher sillage and can last for an
              extended period.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#basicAccordionCollapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <div className="me-2" style={{ height: "30px" }}>
                <img
                  src={medium}
                  height="100%"
                  className="mdi mdi-truck-fast"
                />
              </div>
              Medium Concentration
            </button>
          </h2>
          <div
            id="basicAccordionCollapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-mdb-parent="#basicAccordion"
            style={{}}
          >
            <div className="accordion-body">
              <strong>
                The medium category consists of perfume oils with a moderate
                concentration of fragrance oils.
              </strong>{" "}
              <br />
              It These oils offer a well-balanced strength, providing a
              noticeable scent without being overpowering. They are suitable for
              everyday use and tend to have a moderate sillage and longevity.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#basicAccordionCollapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <div className="me-2" style={{ height: "30px" }}>
                <img src={light} height="100%" className="mdi mdi-truck-fast" />
              </div>
              Light Concentration{" "}
            </button>
          </h2>
          <div
            id="basicAccordionCollapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-mdb-parent="#basicAccordion"
            style={{}}
          >
            <div className="accordion-body">
              <strong>
                This category represents perfume oils with a lower concentration
                of fragrance oils.
              </strong>
              <br />
              These oils provide a subtle and delicate scent that is perfect for
              those who prefer a milder fragrance. They are typically applied in
              smaller quantities and have a lighter sillage.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// import React, { useState } from "react";
// import "../../style/perfumeCategory.css";

// export const PerfumeCategory = () => {
//   return (
//     <div className="faq_area section_padding_130" id="faq">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-12 col-sm-8 col-lg-6">
//             {/* Section Heading*/}
//             <div
//               className="section_heading text-center wow fadeInUp"
//               data-wow-delay="0.2s"
//               style={{
//                 visibility: "visible",
//                 animationDelay: "0.2s",
//                 animationName: "fadeInUp",
//               }}
//             >
//               <h3>
//                 <span>Frequently </span> Asked Questions
//               </h3>
//               <p>
//                 Appland is completely creative, lightweight, clean &amp; super
//                 responsive app landing page.
//               </p>
//               <div className="line" />
//             </div>
//           </div>
//         </div>
//         <Category
//           header="How can I install this app?"
//           body=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Architecto quidem facere deserunt sint animi sapiente
//       vitae suscipit."
//         />
//         <Category
//           header="How can I install this app?"
//           body=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Architecto quidem facere deserunt sint animi sapiente
//       vitae suscipit."
//         />
//         <Category
//           header="How can I install this app?"
//           body=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Architecto quidem facere deserunt sint animi sapiente
//       vitae suscipit."
//         />
//         <div className="row justify-content-center">
//           {/* FAQ Area*/}
//           <div className="col-12 col-sm-10 col-lg-8">
//             <div className="accordion faq-accordian" id="faqAccordion"></div>
//             {/* Support Button*/}
//             <div
//               className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
//               data-wow-delay="0.5s"
//               style={{
//                 visibility: "visible",
//                 animationDelay: "0.5s",
//                 animationName: "fadeInUp",
//               }}
//             >
//               <i className="lni-emoji-sad" />
//               <p className="mb-0 px-2">Can't find your answers?</p>
//               <a href="#"> Contact us</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// function Category({ header, body }) {
//   const [isClose, setIsClose] = useState(false);
//   function handleClick() {
//     setIsClose(!isClose);
//   }
//   return (
//     <div
//       className="card border-0 wow fadeInUp"
//       data-wow-delay="0.2s"
//       style={{
//         visibility: "visible",
//         animationDelay: "0.2s",
//         animationName: "fadeInUp",
//       }}
//     >
//       <CardHeader onClick={handleClick}>{header}</CardHeader>
//       {isClose && (
//         <CardBody>
//           <p>{body}</p>
//         </CardBody>
//       )}
//     </div>
//   );
// }

// function CardHeader({ children, onClick }) {
//   return (
//     <div className="card-header" id="headingOne" onClick={onClick}>
//       <h6
//         className="mb-0 collapsed"
//         data-toggle="collapse"
//         data-target="#collapseOne"
//         aria-expanded="true"
//         aria-controls="collapseOne"
//       >
//         {children}
//         <span className="lni-chevron-up" />
//       </h6>
//     </div>
//   );
// }

// function CardBody({ children, isClose }) {
//   return (
//     <div
//       className={`${isClose && collapse}`}
//       id="collapseOne"
//       aria-labelledby="headingOne"
//       data-parent="#faqAccordion"
//     >
//       <div className="card-body">{children}</div>
//     </div>
//   );
// }
// // How can I install this app?
// {
//   /*

//  */
// }

// {
//   /*

// <div
// className="card border-0 wow fadeInUp"
// data-wow-delay="0.2s"
// style={{
//   visibility: "visible",
//   animationDelay: "0.2s",
//   animationName: "fadeInUp",
// }}
// >
// <div className="card-header" id="headingOne">
//   <h6
//     className="mb-0 collapsed"
//     data-toggle="collapse"
//     data-target="#collapseOne"
//     aria-expanded="true"
//     aria-controls="collapseOne"
//   >
//     How can I install this app?
//     <span className="lni-chevron-up" />
//   </h6>
// </div>
// <div
//   className="collapse"
//   id="collapseOne"
//   aria-labelledby="headingOne"
//   data-parent="#faqAccordion"
// >
//   <div className="card-body">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Architecto quidem facere deserunt sint animi sapiente
//       vitae suscipit.
//     </p>
//     <p>
//       Appland is completely creative, lightweight, clean &amp;
//       super responsive app landing page.
//     </p>
//   </div>
// </div>
// </div>
// <div
// className="card border-0 wow fadeInUp"
// data-wow-delay="0.3s"
// style={{
//   visibility: "visible",
//   animationDelay: "0.3s",
//   animationName: "fadeInUp",
// }}
// >
// <div className="card-header" id="headingTwo">
//   <h6
//     className="mb-0 collapsed"
//     data-toggle="collapse"
//     data-target="#collapseTwo"
//     aria-expanded="true"
//     aria-controls="collapseTwo"
//   >
//     The apps isn't installing?
//     <span className="lni-chevron-up" />
//   </h6>
// </div>
// <div
//   className="collapse"
//   id="collapseTwo"
//   aria-labelledby="headingTwo"
//   data-parent="#faqAccordion"
// >
//   <div className="card-body">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Architecto quidem facere deserunt sint animi sapiente
//       vitae suscipit.
//     </p>
//     <p>
//       Appland is completely creative, lightweight, clean &amp;
//       super responsive app landing page.
//     </p>
//   </div>
// </div>
// </div>
// <div
// className="card border-0 wow fadeInUp"
// data-wow-delay="0.4s"
// style={{
//   visibility: "visible",
//   animationDelay: "0.4s",
//   animationName: "fadeInUp",
// }}
// >
// <div className="card-header" id="headingThree">
//   <h6
//     className="mb-0 collapsed"
//     data-toggle="collapse"
//     data-target="#collapseThree"
//     aria-expanded="true"
//     aria-controls="collapseThree"
//   >
//     Contact form isn't working?
//     <span className="lni-chevron-up" />
//   </h6>
// </div>
// <div
//   className="collapse"
//   id="collapseThree"
//   aria-labelledby="headingThree"
//   data-parent="#faqAccordion"
// >
//   <div className="card-body">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       Architecto quidem facere deserunt sint animi sapiente
//       vitae suscipit.
//     </p>
//     <p>
//       Appland is completely creative, lightweight, clean &amp;
//       super responsive app landing page.
//     </p>
//   </div>
// </div>
// </div> */
// }
