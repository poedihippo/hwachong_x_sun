import Image from "next/image";
import { useState } from "react";
import ImagePopup from "../../global/popup/image/image";
import classes from "./description.module.css";
import Dropdown from "./dropdown/dropdown";

function Description() {
  const [popupImage, setPopupImage] = useState(false);

  let imgBenner = "/images/banner event/HCIS-Promotionbanner-111.jpeg";

  return (
    <div className={classes.description}>
      {popupImage && (
        <ImagePopup setPopup={setPopupImage} popup={popupImage}>
          <div className={classes.popup_benner}>
            <Image
              src={imgBenner}
              width="700"
              height="900"
              layout="responsive"
              objectFit="contain"
              alt="banner"
              priority
            />
          </div>
        </ImagePopup>
      )}
      <div className={classes.content}>
        <Dropdown title={"HCIS Scholarship Programme 2022"}>
          <div className={classes.first}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Assessment Organizer</b>
                  </td>
                  <td>: SUN Education Group</td>
                </tr>
                <tr>
                  <td>
                    <b>Eligible Applicants</b>
                  </td>
                  <td>: Grade 10/IGCSE O-Level Students</td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "nowrap" }}>
                    <b>Quota for Scholarship</b>
                  </td>
                  <td>: 2</td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    <b>Amount Awarded </b>
                  </td>
                  <td>
                    : Full Tuition and Boarding Expenses Covered 2 Years IB
                    Programmes Course (**Approx. SGD 130,000 in Total)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Dropdown>
        <Dropdown title={"Application Process"}>
          <div className={classes.second}>
            <h4>Eligibility</h4>
            <ul>
              <li>Indonesian Nationality</li>
              <li>Completed Grade 10 in 2023</li>
              <li>Top 20 Ranking in Current School</li>
              <li>
                Good Academic Performance{" "}
                <ol style={{ margin: "15px 0" }}>
                  <li>IGCSE O-Level - 5A/A* in Main Subjects including English, Mathematics, Additional   
    Mathematics, Two or More Pure Sciences, One or More Humanity Subjects)</li>
                  <li>National Curriculum - 90%</li>
                </ol>
              </li>
              <li>Strong Leadership Skills</li>
              <li>
                Participated in Competitions at National or International Level
                (Academic or Non-Academic)
              </li>
              <li>
                Registration Deadline: 14 February – 22 April 2023
              </li>
              <li>
                Contact Person/RSVP: <a href={`https://wa.me/6287788833678`}>+62 877-8883-3678</a>
              </li>
            </ul>
          </div>
        </Dropdown>

        <Dropdown title={"Assessment & Online Interview"}>
          <div className={classes.third}>
            <h4>On-site Written Test</h4>
            <table>
              <tbody>
                <tr>
                  <td className={classes.label}>
                    <b>Date</b>
                  </td>
                  <td className={classes.text}> : Saturday, 27th May 2023</td>
                </tr>
                <tr>
                  <td className={classes.label}>
                    <b>Location</b>
                  </td>
                  <td className={classes.text}>
                    {" "}
                    : SUN Education Group Head Office - Meruya
                  </td>
                </tr>
                <tr>
                  <td>
                    <b className={classes.label}>Duration</b>
                  </td>
                  <td className={classes.text}> : 3 hours and 45 minutes</td>
                </tr>
                <tr>
                  <td className={classes.label}>
                    <b>Subject Assessed</b>
                  </td>
                  <td className={classes.text}> : English, Math, Physics</td>
                </tr>
              </tbody>
            </table>
            <h4>Online Interview</h4>
            <p>Mid November 2022 (TBA)</p>
            <table>
              <tbody>
                <tr>
                  <td className={classes.label}>
                    <b>Platform</b>
                  </td>
                  <td className={classes.text}> : ZOOM Meeting</td>
                </tr>
                <tr>
                  <td className={classes.label}>
                    <b>Student Interview</b>
                  </td>
                  <td className={classes.text}> : 20-30 minutes</td>
                </tr>
                <tr>
                  <td className={classes.label}>
                    <b>Parent Interview</b>
                  </td>
                  <td className={classes.text}> : 10 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Dropdown>
        <Dropdown title="Scholarship Application Fee">
          <div className={classes.fourth}>
            <p>
              Scholarship and admission assessment fee SGD 588,50 (Please do not
              pay if the applicant is not shortlisted for attending the
              scholarship test) Scholarship Application Fee is non-refundable
            </p>
          </div>
        </Dropdown>
      </div>
      <div className={classes.benner_event}>
        <div
          onClick={() => setPopupImage(!popupImage)}
          style={{ cursor: "pointer" }}
        >
          <Image
            src={imgBenner}
            className={classes.image}
            layout="responsive"
            width="100"
            height="140"
            objectFit="contain"
            alt="banner"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
