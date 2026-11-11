"use client";
import {T,useLanguage} from "@/lib/language";
import { PhotoUpload, SoilTests } from "@/components/field-controls";
import Link from "next/link";
const assetPathPrefix = "/figma/feedback";
const imgVector = `${assetPathPrefix}/b57fe.svg`;
const imgVector1 = `${assetPathPrefix}/6e50b.svg`;
const imgVector2 = `${assetPathPrefix}/26553.svg`;
const imgImage = `${assetPathPrefix}/0818d.svg`;
const imgSvg = `${assetPathPrefix}/28399.svg`;
const imgSvg1 = `${assetPathPrefix}/2d5dc.svg`;
const imgSvg2 = `${assetPathPrefix}/fd3a3.svg`;
const imgSvg3 = `${assetPathPrefix}/58dc6.svg`;
const imgSvg4 = `${assetPathPrefix}/a9bf8.svg`;
const imgSvg5 = `${assetPathPrefix}/10a03.svg`;
const imgSvg6 = `${assetPathPrefix}/300fc.svg`;
const imgSvg7 = `${assetPathPrefix}/809e0.svg`;
const imgContainer = `${assetPathPrefix}/37a44.svg`;
const imgContainer1 = `${assetPathPrefix}/59e02.svg`;
export default function Feedback() {
    const {t,language}=useLanguage();
    return (<div className="figma-407" data-node-id="115:719" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 248, 242) 0%, rgb(250, 248, 242) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Feedback">
      <div className="figma-605" data-node-id="115:720" data-name="MainContent">
        <div className="figma-335" data-node-id="115:721" data-name="Section - Title & Breadcrumb Block">
          <div className="figma-348" data-node-id="115:722" data-name="Container">
            <div className="figma-606" data-node-id="115:723" data-name="Background"/>
            <div className="figma-423" data-node-id="115:724" data-name="Margin">
              <div className="figma-607" data-node-id="115:725">
                <p className="figma-36"><T text="COMMUNITY & AGRONOMY DESK"/></p>
              </div>
            </div>
            <div className="figma-423" data-node-id="115:726" data-name="Margin">
              <div className="figma-608" data-node-id="115:727">
                <p className="figma-36"><T text="/"/></p>
              </div>
            </div>
            <div className="figma-423" data-node-id="115:728" data-name="Margin">
              <div className="figma-609" data-node-id="115:729">
                <p className="figma-36"><T text="DAE REGIONAL LIAISON 2024–25"/></p>
              </div>
            </div>
          </div>
          <div className="figma-610" data-node-id="115:730" data-name="Heading 1">
            <div className="figma-611" data-node-id="115:731">
              <p className="figma-612"><T text="Farm Feedback & Advisory Desk"/></p>
            </div>
          </div>
          <div className="figma-42" data-node-id="115:732" data-name="Container">
            <div className="figma-613" data-node-id="115:733">
              <p className="figma-62"><T text="Share field issues, report crop results, or ask local agronomists for guidance."/></p>
            </div>
          </div>
        </div>
        <div className="figma-614" data-node-id="115:734" data-name="Main Two-Column Layout">
          <div className="figma-615" data-node-id="115:735" data-name="Section - LeftFormColumn">
            <div className="figma-616" data-node-id="115:736" data-name="Primary Form Box">
              <div className="figma-127" data-node-id="115:737" data-name="Container">
                <div className="figma-481">
                  <div className="figma-42" data-node-id="115:738" data-name="Heading 2">
                    <div className="figma-617" data-node-id="115:739">
                      <p className="figma-62"><T text="Step 1: What are you reporting?"/></p>
                    </div>
                  </div>
                  <div className="figma-618" data-node-id="115:740" data-name="Container">
                    <button type="button" data-action={"Crop or Pest Issue"} className="figma-619" data-node-id="115:741" data-name="Button">
                      <div className="figma-620" data-node-id="115:742" data-name="SVG:margin">
                        <div className="figma-621">
                          <div className="figma-622" data-node-id="115:743" data-name="SVG">
                            <div className="figma-623" data-node-id="115:744" data-name="SVG">
                              <div className="figma-624" data-node-id="115:745" data-name="Vector">
                                <div className="figma-625">
                                  <img alt="" className="figma-626" src={imgVector}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-71" data-node-id="115:746" data-name="Container">
                        <div className="figma-72">
                          <div className="figma-627" data-node-id="115:747">
                            <p className="figma-360"><T text="Crop or Pest Issue"/></p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button type="button" data-action={"Rotation Plan Feedback"} className="figma-628" data-node-id="115:748" data-name="Button">
                      <div className="figma-620" data-node-id="115:749" data-name="SVG:margin">
                        <div className="figma-621">
                          <div className="figma-622" data-node-id="115:750" data-name="SVG">
                            <div className="figma-623" data-node-id="115:751" data-name="SVG">
                              <div className="figma-629" data-node-id="115:752" data-name="Vector">
                                <div className="figma-630">
                                  <img alt="" className="figma-626" src={imgVector1}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-71" data-node-id="115:753" data-name="Container">
                        <div className="figma-72">
                          <div className="figma-631" data-node-id="115:754">
                            <p className="figma-632"><T text="Rotation Plan"/></p>
                            <p className="figma-360"><T text="Feedback"/></p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button type="button" data-action={"General Question"} className="figma-633" data-node-id="115:755" data-name="Button">
                      <div className="figma-620" data-node-id="115:756" data-name="SVG:margin">
                        <div className="figma-621">
                          <div className="figma-622" data-node-id="115:757" data-name="SVG">
                            <div className="figma-623" data-node-id="115:758" data-name="SVG">
                              <div className="figma-634" data-node-id="115:759" data-name="Vector">
                                <div className="figma-635">
                                  <img alt="" className="figma-626" src={imgVector2}/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="figma-71" data-node-id="115:760" data-name="Container">
                        <div className="figma-72">
                          <div className="figma-631" data-node-id="115:761">
                            <p className="figma-360"><T text="General Question"/></p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="figma-127" data-node-id="115:762" data-name="Container">
                <div className="figma-636">
                  <div className="figma-56" data-node-id="115:763" data-name="Container">
                    <div className="figma-10" data-node-id="115:764" data-name="Label">
                      <div className="figma-637" data-node-id="115:765">
                        <p className="figma-62"><T text="Step 2: Select your plot"/></p>
                      </div>
                    </div>
                    <div className="figma-638" data-node-id="115:766" data-name="Overlay+Border">
                      <div className="figma-639" data-node-id="115:767">
                        <p className="figma-36"><T text="Auto-detected"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-640" data-node-id="115:768" data-name="Options">
                    <div className="figma-641" data-node-id="115:769" data-name="image clip">
                      <div className="figma-642">
                        <div className="figma-643" data-node-id="115:770" data-name="image">
                          <img alt="" className="figma-7" src={imgImage}/>
                        </div>
                      </div>
                    </div>
                    <div className="figma-54" data-node-id="115:772" data-name="Container">
                      <div className="figma-128">
                        <div className="figma-644" data-node-id="115:773">
                          <p className="figma-62"><T text="Shonar Bangla Agro — Plot 4 (Alluvial Loam, 1.40 Acres)"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-127" data-node-id="115:774" data-name="Container">
                <div className="figma-645">
                  <div className="figma-42" data-node-id="115:775" data-name="Label">
                    <div className="figma-617" data-node-id="115:776">
                      <p className="figma-62"><T text="Step 3: Your observation or question"/></p>
                    </div>
                  </div>
                  <textarea name="observation" aria-label={t("observation")} placeholder={t("e.g. Yellow leaves on Boro rice after cold spell, or seeds did not sprout\u2026")} className="figma-646" data-node-id="115:777" data-name="Textarea"></textarea>
                </div>
              </div>
              <div className="figma-127" data-node-id="115:780" data-name="Container">
                <div className="figma-647">
                  <PhotoUpload />
                  <div className="figma-10" data-node-id="115:787" data-name="Container">
                    <div className="figma-639" data-node-id="115:788">
                      <p className="figma-36"><T text="Max 10MB (JPEG, PNG)"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" data-action={"▷ Submit Feedback"} className="figma-648" data-node-id="115:789" data-name="Button">
                <div className="figma-649">
                  <div className="figma-27" data-node-id="115:790" data-name="Container">
                    <div className="figma-650" data-node-id="115:791">
                      <p className="figma-62"><T text="▷"/></p>
                    </div>
                  </div>
                  <div className="figma-27" data-node-id="115:792" data-name="Container">
                    <div className="figma-651" data-node-id="115:793">
                      <p className="figma-62"><T text="Submit Feedback"/></p>
                    </div>
                  </div>
                </div>
              </button>
              <div className="figma-127" data-node-id="115:794" data-name="Container">
                <div className="figma-652">
                  <div className="figma-252" data-node-id="115:795" data-name="SVG">
                    <img alt="" className="figma-7" src={imgSvg1}/>
                  </div>
                  <div className="figma-10" data-node-id="115:797" data-name="Container">
                    <div className="figma-653" data-node-id="115:798">
                      <p className="figma-36"><T text="Vetted agronomist response guaranteed under Agro Data Charter"/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-654" data-node-id="115:799" data-name="Emergency Pest Hotline Banner">
              <div className="figma-71" data-node-id="115:800" data-name="Container">
                <div className="figma-250">
                  <div className="figma-252" data-node-id="115:801" data-name="SVG">
                    <img alt="" className="figma-7" src={imgSvg2}/>
                  </div>
                  <div className="figma-10" data-node-id="115:803" data-name="Container">
                    <div className="figma-655" data-node-id="115:804">
                      <p>
                        <span className="figma-19"><T text="Emergency pest outbreak? Call Extension Hotline "/></span>
                        <span className="figma-656"><T text="16123"/></span>
                        <span className="figma-19"><T text="."/></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-71" data-node-id="115:805" data-name="Container">
                <div className="figma-128">
                  <div className="figma-657" data-node-id="115:806">
                    <p className="figma-36"><T text="TOLL-FREE"/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="figma-658" data-node-id="115:807" data-name="Section - RightReportsColumn">
            <div className="figma-659" data-node-id="115:808" data-name="Container">
              <div className="figma-10" data-node-id="115:809" data-name="Container">
                <div className="figma-42" data-node-id="115:810" data-name="Container">
                  <div className="figma-660" data-node-id="115:811">
                    <p className="figma-36"><T text="CASE ARCHIVE"/></p>
                  </div>
                </div>
                <div className="figma-42" data-node-id="115:812" data-name="Heading 2">
                  <div className="figma-661" data-node-id="115:813">
                    <p className="figma-12"><T text="Your Previous Reports (2)"/></p>
                  </div>
                </div>
              </div>
              <div className="figma-662" data-node-id="115:814" data-name="Background+Border">
                <div className="figma-663" data-node-id="115:815">
                  <p className="figma-36"><T text="Verified"/></p>
                </div>
              </div>
            </div>
            <div className="figma-664" data-node-id="115:816" data-name="Article">
              <div className="figma-127" data-node-id="115:817" data-name="Container">
                <div className="figma-449">
                  <div className="figma-410" data-node-id="115:818" data-name="Container">
                    <div className="figma-10" data-node-id="115:819" data-name="Container">
                      <div className="figma-665" data-node-id="115:820">
                        <p className="figma-19"><T text="12 Feb 2025"/></p>
                      </div>
                    </div>
                    <div className="figma-423" data-node-id="115:821" data-name="Margin">
                      <div className="figma-666" data-node-id="115:822">
                        <p className="figma-36"><T text="•"/></p>
                      </div>
                    </div>
                    <div className="figma-423" data-node-id="115:823" data-name="Margin">
                      <div className="figma-667" data-node-id="115:824">
                        <p className="figma-19"><T text="#HV-8902"/></p>
                      </div>
                    </div>
                    <div className="figma-423" data-node-id="115:825" data-name="Margin">
                      <div className="figma-666" data-node-id="115:826">
                        <p className="figma-36"><T text="•"/></p>
                      </div>
                    </div>
                    <div className="figma-423" data-node-id="115:827" data-name="Margin">
                      <div className="figma-668" data-node-id="115:828">
                        <p className="figma-19"><T text="Plot 4"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-669" data-node-id="115:829" data-name="Background">
                    <div className="figma-670" data-node-id="115:830">
                      <p className="figma-36"><T text="REVIEWED BY EXPERT"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-127" data-node-id="115:831" data-name="Container">
                <div className="figma-671">
                  <div className="figma-42" data-node-id="115:832" data-name="Heading 3">
                    <div className="figma-617" data-node-id="115:833">
                      <p className="figma-62"><T text="Mungbean root nodulation check"/></p>
                    </div>
                  </div>
                  <div className="figma-672" data-node-id="115:834" data-name="Container">
                    <div className="figma-673" data-node-id="115:835">
                      <p className="figma-674"><T text="Observed lower pink nodule formation than expected at Day 22"/></p>
                      <p className="figma-675"><T text="post-sowing."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-676" data-node-id="115:836" data-name="Background+Border">
                <div className="figma-677">
                  <div className="figma-127" data-node-id="115:837" data-name="Container">
                    <div className="figma-250">
                      <div className="figma-252" data-node-id="115:838" data-name="SVG">
                        <img alt="" className="figma-7" src={imgSvg3}/>
                      </div>
                      <div className="figma-10" data-node-id="115:840" data-name="Container">
                        <div className="figma-665" data-node-id="115:841">
                          <p className="figma-19"><T text="Dr. M. K. Anam (BARI Pulses):"/></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="figma-127" data-node-id="115:842" data-name="Container">
                    <div className="figma-678">
                      <div className="figma-679" data-node-id="115:843">
                        <p className="figma-674"><T text="“Root nodulation is normal for Day 22 under current soil"/></p>
                        <p className="figma-675"><T text="temperatures. Resume light irrigation as scheduled.”"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-664" data-node-id="115:844" data-name="Article">
              <div className="figma-127" data-node-id="115:845" data-name="Container">
                <div className="figma-449">
                  <div className="figma-410" data-node-id="115:846" data-name="Container">
                    <div className="figma-10" data-node-id="115:847" data-name="Container">
                      <div className="figma-665" data-node-id="115:848">
                        <p className="figma-19"><T text="28 Jan 2025"/></p>
                      </div>
                    </div>
                    <div className="figma-423" data-node-id="115:849" data-name="Margin">
                      <div className="figma-666" data-node-id="115:850">
                        <p className="figma-36"><T text="•"/></p>
                      </div>
                    </div>
                    <div className="figma-423" data-node-id="115:851" data-name="Margin">
                      <div className="figma-667" data-node-id="115:852">
                        <p className="figma-19"><T text="#HV-8741"/></p>
                      </div>
                    </div>
                    <div className="figma-423" data-node-id="115:853" data-name="Margin">
                      <div className="figma-666" data-node-id="115:854">
                        <p className="figma-36"><T text="•"/></p>
                      </div>
                    </div>
                    <div className="figma-423" data-node-id="115:855" data-name="Margin">
                      <div className="figma-668" data-node-id="115:856">
                        <p className="figma-19"><T text="Plot 4"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-680" data-node-id="115:857" data-name="Background">
                    <div className="figma-681" data-node-id="115:858">
                      <p className="figma-36"><T text="FEEDBACK RECEIVED"/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-127" data-node-id="115:859" data-name="Container">
                <div className="figma-671">
                  <div className="figma-42" data-node-id="115:860" data-name="Heading 3">
                    <div className="figma-617" data-node-id="115:861">
                      <p className="figma-62"><T text="Standing water drainage issue"/></p>
                    </div>
                  </div>
                  <div className="figma-672" data-node-id="115:862" data-name="Container">
                    <div className="figma-673" data-node-id="115:863">
                      <p className="figma-674"><T text="Inflow from north ridge submerged mustard bed roots after"/></p>
                      <p className="figma-675"><T text="unexpected rainfall."/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-127" data-node-id="115:864" data-name="Container">
                <div className="figma-682">
                  <div className="figma-252" data-node-id="115:865" data-name="SVG">
                    <img alt="" className="figma-7" src={imgSvg4}/>
                  </div>
                  <div className="figma-10" data-node-id="115:868" data-name="Container">
                    <div className="figma-653" data-node-id="115:869">
                      <p className="figma-36"><T text="Assigned to Trishal extension office (Estimated response: within 24h)"/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="figma-683" data-node-id="115:870" data-name="Background+Border">
              <div className="figma-684" data-node-id="115:871" data-name="SVG:margin">
                <div className="figma-685">
                  <div className="figma-213" data-node-id="115:872" data-name="SVG">
                    <img alt="" className="figma-7" src={imgSvg5}/>
                  </div>
                </div>
              </div>
              <div className="figma-71" data-node-id="115:874" data-name="Container">
                <div className="figma-504">
                  <div className="figma-42" data-node-id="115:875" data-name="Container">
                    <div className="figma-665" data-node-id="115:876">
                      <p className="figma-19"><T text="Fast Agronomic Review"/></p>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="115:877" data-name="Container">
                    <div className="figma-653" data-node-id="115:878">
                      <p className="figma-560"><T text="All field reports are reviewed directly by Upazila Agricultural Officers"/></p>
                      <p className="figma-561"><T text="(DAE) and BARI research agronomists."/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-686" data-node-id="115:879" data-name="MainFooter:margin">
        <div className="figma-687" data-node-id="115:880" data-name="MainFooter">
          <div className="figma-290" data-node-id="115:881" data-name="Container">
            <div className="figma-688">
              <div className="figma-689" data-node-id="115:882" data-name="Container">
                <div className="figma-690" data-node-id="115:883" data-name="Container">
                  <div className="figma-16" data-node-id="115:884" data-name="Container">
                    <div className="figma-691" data-node-id="115:885" data-name="Background">
                      <div className="figma-252" data-node-id="115:886" data-name="SVG">
                        <img alt="" className="figma-7" src={imgSvg6}/>
                      </div>
                    </div>
                    <div className="figma-10" data-node-id="115:888" data-name="Container">
                      <div className="figma-692" data-node-id="115:889">
                        <p className="figma-12"><T text="HarvestV"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-693" data-node-id="115:890" data-name="Container">
                    <div className="figma-694" data-node-id="115:891">
                      <p className="figma-560"><T text="Agro-minimal planning and precision crop"/></p>
                      <p className="figma-561"><T text="rotation for progressive Bangladeshi farmers."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-695" data-node-id="115:892" data-name="Container">
                  <div className="figma-42" data-node-id="115:893" data-name="Heading 4">
                    <div className="figma-696" data-node-id="115:894">
                      <p className="figma-36"><T text="EMERGENCY & SUPPORT"/></p>
                    </div>
                  </div>
                  <div className="figma-697" data-node-id="115:895" data-name="Container">
                    <div className="figma-252" data-node-id="115:896" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg2}/>
                    </div>
                    <div className="figma-10" data-node-id="115:898" data-name="Container">
                      <div className="figma-637" data-node-id="115:899">
                        <p className="figma-62"><T text="16123"/></p>
                      </div>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="115:900" data-name="Container">
                    <div className="figma-694" data-node-id="115:901">
                      <p className="figma-560"><T text="National Agricultural Extension Call Center (Toll"/></p>
                      <p className="figma-561"><T text="Free)"/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-221" data-node-id="115:902" data-name="Container">
                  <div className="figma-42" data-node-id="115:903" data-name="Heading 4">
                    <div className="figma-696" data-node-id="115:904">
                      <p className="figma-36"><T text="RESEARCH PARTNERS"/></p>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="115:905" data-name="Container">
                    <div className="figma-698" data-node-id="115:906">
                      <p className="figma-560"><T text="BARI (Bangladesh Agricultural Research"/></p>
                      <p className="figma-561"><T text="Institute)"/></p>
                    </div>
                  </div>
                  <div className="figma-42" data-node-id="115:907" data-name="Container">
                    <div className="figma-698" data-node-id="115:908">
                      <p className="figma-561"><T text="BRRI (Bangladesh Rice Research Institute)"/></p>
                    </div>
                  </div>
                  <div className="figma-699" data-node-id="115:909" data-name="Container">
                    <div className="figma-700" data-node-id="115:910">
                      <p className="figma-701"><T text="Field agronomy advisory calibrated with national"/></p>
                      <p className="figma-454"><T text="seed standards."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-702" data-node-id="115:911" data-name="Container">
                  <div className="figma-42" data-node-id="115:912" data-name="Heading 4">
                    <div className="figma-696" data-node-id="115:913">
                      <p className="figma-36"><T text="AGRONOMIC GOVERNANCE"/></p>
                    </div>
                  </div>
                  <div className="figma-335" data-node-id="115:914" data-name="List">
                    <div className="figma-42" data-node-id="115:915" data-name="Item">
                      <div className="figma-694" data-node-id="115:916">
                        <p className="figma-36"><T text="Crop Advisory Terms"/></p>
                      </div>
                    </div>
                    <div className="figma-42" data-node-id="115:917" data-name="Item">
                      <div className="figma-694" data-node-id="115:918">
                        <p className="figma-36"><T text="Privacy & Field Data Rights"/></p>
                      </div>
                    </div>
                    <div className="figma-42" data-node-id="115:919" data-name="Item">
                      <div className="figma-694" data-node-id="115:920">
                        <p className="figma-36"><T text="Soil Health Guidelines"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="figma-703" data-node-id="115:921" data-name="HorizontalBorder">
                <div className="figma-71" data-node-id="115:922" data-name="Container">
                  <div className="figma-128">
                    <div className="figma-704" data-node-id="115:923">
                      <p className="figma-36"><T text="© 2024 HarvestV Agronomy Systems. Developed under agro-minimal stewardship."/></p>
                    </div>
                  </div>
                </div>
                <div className="figma-71" data-node-id="115:924" data-name="Container">
                  <div className="figma-586">
                    <div className="figma-252" data-node-id="115:925" data-name="SVG">
                      <img alt="" className="figma-7" src={imgSvg7}/>
                    </div>
                    <div className="figma-10" data-node-id="115:927" data-name="Container">
                      <div className="figma-663" data-node-id="115:928">
                        <p className="figma-36"><T text="Verified Agronomic Database"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="figma-307" data-node-id="117:7134" data-name="Header">
        <div className="figma-308" data-node-id="117:7135" data-name="Container">
          <div className="figma-309">
            <button type="button" data-action={"HarvestV CROP PLANNING & AGRONOMY"} className="figma-33" data-node-id="117:7136" data-name="Link">
              <div className="figma-310" data-node-id="117:7137" data-name="Background">
                <div className="figma-176" data-node-id="117:7138" data-name="Container">
                  <img alt="" className="figma-7" src={imgContainer}/>
                </div>
              </div>
              <div className="figma-10" data-node-id="117:7140" data-name="Container">
                <div className="figma-42" data-node-id="117:7141" data-name="Container">
                  <div className="figma-311" data-node-id="117:7142">
                    <p className="figma-12"><T text="HarvestV"/></p>
                  </div>
                </div>
                <div className="figma-42" data-node-id="117:7143" data-name="Container">
                  <div className="figma-705" data-node-id="117:7144">
                    <p className="figma-15"><T text="CROP PLANNING & AGRONOMY"/></p>
                  </div>
                </div>
              </div>
            </button>
            <div className="figma-4" data-node-id="117:7145" data-name="Nav">
              <Link href="/" className="figma-312" data-node-id="117:7146" data-name="Link">
                <div className="figma-177" data-node-id="117:7147">
                  <p className="figma-19"><T text="Home"/></p>
                </div>
              </Link>
              <Link href="/dashboard" className="figma-312" data-node-id="117:7148" data-name="Link">
                <div className="figma-177" data-node-id="117:7149">
                  <p className="figma-19"><T text="Dashboard"/></p>
                </div>
              </Link>
              <Link href="/my-farm" className="figma-312" data-node-id="117:7150" data-name="Link">
                <div className="figma-177" data-node-id="117:7151">
                  <p className="figma-19"><T text="My Farm"/></p>
                </div>
              </Link>
              <Link href="/crop-rotation" className="figma-312" data-node-id="117:7152" data-name="Link">
                <div className="figma-177" data-node-id="117:7153">
                  <p className="figma-19"><T text="Crop Rotation"/></p>
                </div>
              </Link>
              <Link href="/information-check" className="figma-312" data-node-id="117:7154" data-name="Link">
                <div className="figma-177" data-node-id="117:7155">
                  <p className="figma-19"><T text="Information Check"/></p>
                </div>
              </Link>
              <Link href="/feedback" className="figma-313" data-node-id="117:7156" data-name="Link">
                <div className="figma-314" data-node-id="117:7157">
                  <p className="figma-62"><T text="Feedback"/></p>
                </div>
              </Link>
            </div>
            <div className="figma-4" data-node-id="117:7158" data-name="Container">
              <div className="figma-315" data-node-id="117:7159" data-name="Background+Border">
                <button type="button" data-action={"EN"} aria-pressed={language === "en"} lang="en" className="figma-154" data-node-id="117:7160" data-name="Button">
                  <div className="figma-155">
                    <div className="figma-156" data-node-id="117:7161">
                      <p className="figma-36"><T text="EN"/></p>
                    </div>
                  </div>
                </button>
                <button type="button" data-action={"বাংলা"} aria-pressed={language === "bn"} lang="bn" className="figma-71" data-node-id="117:7162" data-name="Button">
                  <div className="figma-155">
                    <div className="figma-316" data-node-id="117:7163">
                      <p className="figma-36"><T text="বাংলা"/></p>
                    </div>
                  </div>
                </button>
              </div>
              <div className="figma-317" data-node-id="117:7164" data-name="Background+Border">
                <div className="figma-71" data-node-id="117:7165" data-name="Container">
                  <div className="figma-128">
                    <div className="figma-318" data-node-id="117:7166" data-name="Container">
                      <div className="figma-319" data-node-id="117:7167">
                        <p className="figma-36"><T text="Abdur Rashid"/></p>
                      </div>
                    </div>
                    <div className="figma-318" data-node-id="117:7168" data-name="Container">
                      <div className="figma-320" data-node-id="117:7169">
                        <p className="figma-15"><T text="+880 1712-849201"/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="figma-185" data-node-id="117:7170" data-name="Background">
                  <div className="figma-52">
                    <div className="figma-122" data-node-id="117:7171" data-name="Container">
                      <img alt="" className="figma-7" src={imgContainer1}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
